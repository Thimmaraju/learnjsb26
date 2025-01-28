//  objectname = {

//     propertyname : perotyvalue
//  }

// const x = 30  

// x= 34

const student = {

    stuname : "Neelakanta",
    age : 29,
    place : "Blr",
    nativeplace : "Rayadurgam",
    course : "Playwright"
}

// console.log(student.age)

//    console.log(student['nativeplace'])

//    console.log(typeof(student.age))

//    student["company"] = "Infosys" // Add property 

//    console.log(student.company)

//    delete student.nativeplace // delete the property

//    console.log(student.nativeplace)

//    student["place"] = "Chennai" //Edit the property 
  
//    console.log(student.place)

for (let i in student){

     
    console.log(i +":" + student[i])

}