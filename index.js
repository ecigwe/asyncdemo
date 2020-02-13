console.log("before");
// setTimeout(() => {
//   console.log("reading a user from the database");
// }, 3000);
const user = getUser(1, User);

function User(user) {
  // console.log("User", user.name);
  getRespositories(user.name, getRepo);
}

console.log(user);
function displayCommits(commit) {
  console.log("commit", commit);
}
function getRepo(repo) {
  console.log("Repo", repo);
  getCommit(repo[0], displayCommits);
}

console.log("after");
function getCommit(repo, callback) {
  setTimeout(() => {
    console.log("fetching repo");
    callback(["commit1", "commit2"]);
  }, 3000);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("reading from the database");
    // const name = { id: id, name: "mosh" };
    callback({ id: id, name: "mosh" });
  }, 3000);
  return 1;
}
function getRespositories(username, callback) {
  setTimeout(() => {
    console.log(`reading from ${username} database`);
    callback(["repo1", "repo2", "repo3"]);
  }, 3000);
  //return ["repo1", "repo2", "repo3"];
}
