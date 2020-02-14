// const p = Promise.resolve({ i: 1 });
// p.then(result => {
//   console.log("Result", result);
// });

// const p = Promise.reject(new Error("reason for rejection ..."));

// p.catch(err => {
//   console.log("Error", err.message);
// });

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async operation 2");
    reject(new Error("because something went wrong"));
  }, 2000);
});
const q = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("asnc operation 3");
    resolve("assync operation 1");
  }, 2000);
});

Promise.all([p, q])
  .then(result => {
    console.log("Result", result);
  })
  .catch(err => {
    console.log(err.message);
  });
