
//   //======================================

//   // function myDisplayer(some) {
//   //   console.log(some)
//   // }

//   // function myCalculator(num1, num2) {
//   //   let sum = num1 + num2;
//   //   return sum;
//   // }

//   // let result = myCalculator(5, 5);
//   // myDisplayer(result);

//   //The problem with the example above, is that you have to call two functions to display the result.

//   //===========================================
//   function myDisplayer(some) {
//     console.log(some)
//   }

//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
//   }

//   myCalculator(5, 5);

//   //The problem with the abobe example, is that you cannot prevent the calculator function from displaying the result.

//   //====================================================

//   //A callback is a function passed as an argument to another function.

//   //How Callbacks Work

// //Passing the Function: The function you want to run after some operation is passed as an argument to another function.

// //Executing the Callback: The main function executes the callback function at the appropriate time. 
// // This can be after a delay, once a task is complete, or when an event occurs.


//   // function myDisplayer(some) {
//   //   console.log(some)
//   // }

//   // function myCalculator(num1, num2, raju) {
//   //   let sum = num1 + num2;
//   //   raju(sum);
//   // }

//   // myCalculator(5, 5, myDisplayer);



//   // In the example above, myDisplayer is a called a callback function.

//   // It is passed to myCalculator() as an argument.


//   //=================================================================

//   let numbers = [1, 2, 3, 4, 5];

//   function processArray(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//       callback(arr[i]); 
//     }
//   }

//   function devidewith2(number) {
//     console.log(number / 2);
//   }

//   function doubleAndPrint(number) {
//     console.log(number * 3);
//   }



//   processArray(numbers, doubleAndPrint)

//   //processArray(numbers, devidewith2)

//   //higher-order function

//   //A higher-order function is a function that takes one or more functions as arguments or returns a function as a result.
//   // The main Function in the examples above is a higher-order function because it takes a callback function as an argument.


//   //============================================

//   //Anonymous functions

//   //Anonymous functions are functions that are not named and are often used as callbacks. The function passed to setTimeout in the first code example is an anonymous function

//   //setTimeout(code, delay)

//   // setTimeout(function() {
//   //   console.log("This is an anonymous callback function!");
//   // },  8000);

//   // map(), filter(), reduce() these methods will use anonymous functions (or arrow functions) as callbacks.

//   let arr2 = [1, 2, 3, 4, 5];

//   doubled = arr2.map(function(number) {
//     return number / 2 
//   })
//   console.log(doubled)


//   // or from es6 arrow functions 

//   let doubled = arr2.map(number => number * 2);
//   // console.log(doubled)

//   // filter

//   // let evenNumbers = numbers.filter(number => number % 2 === 0);
//   // console.log(evenNumbers); 

//   //reduce 

//   // let sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
//   // console.log(sum);

// // closure 

// // call back will become closure function when it is accessing varibales for higher order function


// // function outer() {
// //   let name = "Alice"; // Outer variable
// //   return function inner() { 
// //     console.log(name); // Inner function has access to the "name" variable
// //   };
// // }

// // const greet = outer(); // outer() runs, but doesn't log yet
// // greet()

// // 1. Passing 10 as the initial value to Step1
// // 2. If there is no error, then passing the result to Step2
// // 3. If there is no error again, then passing the result to Step3
// // 4. Finally, printing the result.

step1(10, function(result1, error) {
  if(!error) {
      step2(result1, function (result2, error) {
          if(!error) {
              step3(result2, function (result3, error) {
                  if(!error) {
                      console.log("Results "+result3);
                  }
              })
          }
      })
  }
});

function step1 (value, callback) {   //mohan 
  callback(value + 10, false);
}

function step2 (value, callback) {   // nelakanta
  callback(value + 10, false);
}

function step3 (value, callback) {   // Prakash
  callback(value + 10, false);
}


// //Using multiple nested callbacks can become complex and hard to manage, often referred to as "callback hell."

// //Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead


var p = new Promose(resolve, reject) =>{

  x = 1 + 1 

if(x === 2){

  resolve("Success")
}
else {
  reject("Fail")
}

}