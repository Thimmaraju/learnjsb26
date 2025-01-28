

// condition - true 

// condition - false

// if(condition){

//   // block of code 

// }


// if(4 === "4"){ 
// console.log("Raju")
// console.log("Raju")
// console.log("Raju")
// console.log("Raju") 
// }






// condition - true 
// task1 
// condition - false
// Task2 

// if(condition){

//     //task1 
// }
// else{

//     //task2
// }

if (4 == "4") {
    console.log("Raju")
    console.log("Raju")
    console.log("Raju")
    console.log("Raju")
}
else {


    console.log("Mohan")
    console.log("Mohan")
    console.log("Mohan")
    console.log("Mohan")

}

// condition1

// task1

// condition2
//  task2
// condition3 

// task3
// no condition passed 

// default task

// if (condition){

//     //task1
// }

// else if(condition2){

//     //task2
// }
// else if(condition3){

//     //task3
// }
// else{


// }

// switch()

//    marks > 75 - Grade A+

//    markes > 60 and < 75 A

//    marks > 50 < 60  B 

//    Marks > 35 < 50  C 
//    Marks <35  - Fail

marks = 25

if (marks >= 75) {


    console.log("Grade A+")
}
else if (marks >= 60 && marks < 75) {

    console.log("Grade A")
}

else if (marks >= 50 && marks < 60) {

    console.log("Grade B")
}

else if (marks >= 35 && marks < 50) {

    console.log("Grade C")
}
else {

    console.log("Fail")
}


// switch (key) {
//     case value:

//         break;

//     case value:

//         break;

//     case value:

//         break;

//     case value:

//         break;

//     default:
//         break;
// }


//------------------------------------------

var day = "Monday"
switch (day) {
    case "Monday": {

        console.log("Detox")
    }

        break;

    case "Tuesday":

        console.log("Protein")
        break;

    case "Wednesday":
        console.log("Veggies")
        break;

    case "Thursday":

        console.log("Fiber")

        break;

    case "Friday":

        console.log("Omega")

        break;
    case "Saturday":

        console.log("Hydrate")

        break;

    case "Sunday":

        console.log("Indulge")

        break;

    default:

        console.log("Invalid input")
        break;
}



switch (browsername) {
    case "Google Chrome":
        {

            test.use({
                viewport: { width: 1600, height: 1200 },
              });

        }

        break;

    case "firefox":{

        test.use({
            viewport: { width: 1600, height: 1200 },
          });
    }

        break;

    case value:

        break;

    case value:

        break;

    default:
        break;
}