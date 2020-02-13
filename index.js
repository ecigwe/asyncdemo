console.log("before");
// setTimeout(() => {
//   console.log("reading a user from the database");
// }, 3000);
const user = getUser(1, function(user) {
  console.log("User", user.name);
  getRespositories(user.name, function(repo) {
    console.log("Repo", repo);
  });
});
console.log(user);

console.log("after");

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
