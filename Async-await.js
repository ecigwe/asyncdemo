console.log("before");
// setTimeout(() => {
//   console.log("reading a user from the database");
// }, 3000);
// const user = getUser(1, User);

// function User(user) {
//   // console.log("User", user.name);
//   getRespositories(user.name, getRepo);
// }

// console.log(user);
// function displayCommits(commit) {
//   console.log("commit", commit);
// }
// function getRepo(repo) {
//   console.log("Repo", repo);
//   getCommit(repo[0], displayCommits);
// }
// getUser(1)
//   .then(user => {
//     return getRespositories(user.name);
//   })
//   .then(repo => {
//     return getCommit(repo[0]);
//   })
//   .then(commits => {
//     console.log(commits);
//   })
//   .catch(err => {
//     console.log("Error", err.message);
//   });

let commit = async function() {
  let user = await getUser();
  let repo = await getRespositories(user.name);
  let commit = await getCommit(repo[0]);
  console.log(commit);
};
commit();

console.log("after");
function getCommit(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetching repo");
      resolve(["commit1", "commit2"]);
    }, 3000);
  });
  // setTimeout(() => {
  //   console.log("fetching repo");
  //   callback(["commit1", "commit2"]);
  // }, 3000);
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading from the database");
      // const name = { id: id, name: "mosh" };
      resolve({ id: id, name: "mosh" });
    }, 3000);
  });
  // setTimeout(() => {
  //   console.log("reading from the database");
  //   // const name = { id: id, name: "mosh" };
  //   callback({ id: id, name: "mosh" });
  // }, 3000);
  // return 1;
}
function getRespositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`reading from ${username} database`);
      resolve(["repo1", "repo2", "repo3"]);
    }, 3000);
  });
  // setTimeout(() => {
  //   console.log(`reading from ${username} database`);
  //   callback(["repo1", "repo2", "repo3"]);
  // }, 3000);
  // //return ["repo1", "repo2", "repo3"];
}
