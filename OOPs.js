

// //oops - Object oriented programming 

// // 1. Encapsulation 
// // 2. Intertance 
// // 3. Polymorphism 
// // 4. Prototyping 

// // class classname{

// //     //varibales 

// //     //methods 
// // }

// // const obj1 = new classname()

// // class employee{


// //     getdetails(empname, empnum, empplace){

// //         this.EmployeeName = empname
// //         this.EmployeeNumber = empnum

// //         this.EmployeePlace = empplace
// //     }

// //     showdetails(){

// //         console.log(this.EmployeeName)
// //         console.log(this.EmployeeNumber)
// //         console.log(this.EmployeePlace)
// //     }
// // }

// // const emp1 = new employee()

// // //emp1.getdetails("Raju", 418, "Bangalore")

// // emp1.showdetails()

// //binding a data between the methods inside a class is called encapsulation 

// // class A{

// //      m1(){

// //         console.log("thi is M1 Method")


// //     }

// //     m2(){

// //         console.log("thi is M2 Method")


// //     }
// //     m3(){

// //         console.log("thi is M3 Method")


// //     }

// // }

// // class B extends A{

// //     m5(){

// //        console.log("thi is M5 Method")


// //    }

// //    m6(){

// //        console.log("thi is M6 Method")


// //    }
// //    m7(){

// //        console.log("thi is M7 Method")


// //    }

// // }


// // class C extends A{

// //     m8(){

// //        console.log("thi is M8 Method")


// //    }

// //    m9(){

// //        console.log("thi is M9 Method")


// //    }

// // }
// // const obj3 = new C()



// // obj3.m1() // A

// // obj3.m9() // C

// // //obj3.m5() // B

// //Polymorphism
// // Method Overriding 
// // Method Overloading 


// // class A {

// //    add(num1, num2){

// //       console.log(num1)
// //       console.log(num2)
// //       console.log(num1 +num2)
// //    }

// //    displaymessage(){

// //       console.log("this is from Parent ")
// //    }

// // }


// // class B extends A {

// //     add(num1, num2, num3){
 
// //        console.log(num1)
// //        console.log(num2)
// //        console.log(num3)
// //        console.log(num1 +num2 + num3)
// //     }

// //     displaymessage(){

// //         console.log("this is from child ")
// //      }
 
// //  }

// //  const obj4 = new A()

// //  obj4.displaymessage() // Method Overriding 


// //  obj4.add(4,6,7) //Method Overlaoding 


// // 4. Prototyping 

// // class birds{

// //     x= 30 

// //     m1(){

// //         console.log("this is M1 Mehtod")
// //     }

// //     m2(){

// //         console.log("this is M2 Mehtod")
// //     }
// // }

// // birds.prototype.y = 40


// // birds.prototype.m3 = function(){

// //     console.log("this is M3 Mehtod")

// // }
// // const bird1 = new birds()

// // console.log(bird1.x)

// // console.log(bird1.y)

// // bird1.m3()

// // const bird2 = new birds()


// // console.log(bird2.x)

// // console.log(bird2.y)

// // bird2.m3()


// class birds{

//     x= 30 

//     m1(num1){

//         console.log(num1)

//         console.log("this is M1 Mehtod")
//     }

//     m2(num1){

//         console.log("this is M2 Mehtod")

//         this.m1(num1)
//     }
// }

// const mohan = new birds()

// mohan.m2(7)


//JavaScript is Single Threaded Language 

// Javascript is synchronous programming languge 


function f1(){

    // block of code 
}

function f2(){

    // block of code 
}

// f1()

// f2()

// Synchronous 

// console.log("Raju")
// console.log("Mohan")

// sum()

// console.log("Prakash")

// function sum(){

//     // block of code 

//     console.log(" this is simple function ")
// }

// call backs 

// callback  hell 


// promises 

// aysnc and await

console.log("Raju")

//setTimeout( function, timeout)

setTimeout(() => {
   console.log("this is timeout function")   
}, 8000);

console.log("Mohan")
