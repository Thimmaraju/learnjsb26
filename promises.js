
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// promise will have 3 states 

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//The promise methods then(), catch(), and finally() 
// are used to associate further action with a promise that becomes settled.


//The catch() -The catch statement defines a code block to handle any error. 
// The finally() - The finally statement defines a code block to run regardless of the result.

// const task = new Promise((resolve, reject) => {
//     const sum  = 1+1;  // Change this to false to simulate rejection
  
//       if (sum === 2) {
//         resolve("Task completed successfully!");
//       } else {
//         reject("Task failed!");
//       }
  
//   });
  
//   task
//     .then((message) => console.log(message))  // Will run if the promise is fulfilled
//     .catch(errormsg => console.log(errormsg)); // Will run if the promise is rejected


//   //or

//   //task.then(message => console.log(message), errormsg => console.log(errormsg))

//    //==================================================

//    function step1(value, error) {
//     return new Promise((resolve, reject) => {
//       if (error) { 
//         reject('Something went wrong');
//       } else {
//         resolve(value + 10); 
//       }
//     });
//   }
  
//   function step2(value, error) {
//     return new Promise((resolve, reject) => {
//       if (error) { 
//         reject('Something went wrong');
//       } else {
//         resolve(value + 10); 
//       }
//     });
//   }
  
//   function step3(value, error) {
//     return new Promise((resolve, reject) => {
//       if (error) { 
//         reject('Something went wrong');
//       } else {
//         resolve(value + 10);
//       }
//     });
//   }
  
//   // Usage:
//   step1(10, false)
//     .then((result1) => step2(result1, false))
//     .then((result2) => step3(result2, false))
//     .then((result3) => console.log(result3))
//     .catch((error) => console.log(error));

//===========================================================================


const p1 = Promise.resolve('Like If you understood callbacks');
const p2 = Promise.reject('Rejected');
const p3 = 100;
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Subscribe for more updates');
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Subscribe for less updates');
});

//Promise.all([ p1, p3 ,p4]).then((values) => console.log(values));
 //Promise.race([ p4, p5 ]).then((value) => console.log(value));
// Promise.allSettled([ p1, p2, p3, p4 ]).then((values) => console.log(values));
Promise.any([ p1, p2, p3 ]).then((values) => console.log(values));