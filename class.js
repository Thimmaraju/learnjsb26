

// // class classname{

// //     //variables 

// //     // methods 
// // }

// // const raju = new classname()


// class calculator{

//    x = 20

//    y = 30
//     printmessage(){
//         console.log("this is simple method")
//     }


//     add(num1, num2){

//         console.log(num1)
    
//         console.log(num2)
//         console.log(num1 + num2)
//     }

//     substract(num1, num2){

//         console.log(num1)
    
//         console.log(num2)
//         console.log(num1 - num2)
//     }

//     multiply(num1, num2){

//         console.log(num1)
    
//         console.log(num2)
//         console.log(num1 * num2)
//     }


//     devide(num1, num2){

//         console.log(num1)
    
//         console.log(num2)
//         console.log(num1 / num2)
//     }

// }


// const cal1 = new calculator()


// cal1.printmessage()

// cal1.add(3,7)

// console.log(cal1.y)

// const cal2 = new calculator()


//constructor 


// class Vehicles{

//    constructor(num1, num2){

//        console.log(num1 + num2)
//    }


//    bus(){

//     console.log("this is Bus method")
//    }
// }

// const  raju = new  Vehicles(4,6)

// const  mohan = new  Vehicles(6,9)




// constructor is a method which will automatically invoked when you create object of that class 

// if you dont define constructor, there will  be a empty constructor 



//Keywords 

// static 

// this 


class employee {

    empname = "Raju" // non static variable 
    static empplace = "Bangalore" // static varibale
    constructor(){

        console.log("this is a constructor")


    }

    displaymessage(){

        console.log("Namaste Boss")
    }

    m1(){

        console.log("thi is M1 Method")

        this.displaymessage()
    }

    static m2(){

        console.log("thi is M2 Method")


    }

    static m3(){

        console.log("thi is M3 Method")

        this.m2()
    }

}

console.log(employee.empplace)

employee.m3()

// const emp1 = new employee()

// emp1.m1()


// Page Object Model - Design Patterns 

//class 

//   varibales 
//   methods


// create a object of the class 

// class can have constructor 
