// async makes a function return a Promise // 

// await makes a function wait for a Promise
//The await keyword is used to wait for a promise to resolve

//Pauses the execution of the async function until the Promise is resolved or rejected.

//await must be used inside an async function.
//=========================================================

async function functionName() {
    try {
      const result = await someAsyncFunction();
      console.log(result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

//=====================================================

async function myFunction() {
    return "Hello";
  }

//or
function myFunction() {
    return Promise.resolve("Hello");
  }

//===============================================

const getData = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
getData();
console.log(2);

//=======================================================================

async function step1(value) {
    return value + 10;
  }
  
  async function step2(value) {
    return value + 10;
  }
  
  async function step3(value) {
    return value + 10;
  }
  
  async function run() {
    try {
      let result1 = await step1(10);
      let result2 = await step2(result1);
      let result3 = await step3(result2);
      console.log("Results " + result3);
    } catch (error) {
      console.error(error);
    }
  }
  
  run();
  

  //=====================================================

 // Advantages of Async and Await
      //Improved Readability: Async and Await allow asynchronous code to be written 
      // in a synchronous style, making it easier to read and understand.


    //Error Handling: Using try/catch blocks with async/await simplifies error handling.
    
    //Avoids Callback Hell: Async and Await prevent nested callbacks and complex promise chains, 
    // making the code more linear and readable.


    //Better Debugging: Debugging async/await code is more intuitive since it behaves similarly to synchronous code.