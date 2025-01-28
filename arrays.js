
var arr = [] // empty array

var arr1 = [2,3,6,7,8,9]

var arr2 = ["raju", 33, "blr", true, undefined, null, 3]

console.log(arr1.length) // count of the elements 

console.log(arr2)

//In arrays index always strats from 0

console.log(arr2[0])  // Based on Index accessing element 

creds = ["Admin", "admin123"]

//creds[0] == "Admin"

arr3 = []

arr3.push("Wake up")

arr3.push("drink water")

arr3.push("Read")



//push() - will add the elements to the array at the end

//unshift() - will add the elements at the beginning of the array 

arr3.unshift("sleep")

arr3.unshift("Eat")


console.log(arr3)

arr4 = arr2.concat(arr3)  

//concat - joining 2 arrays 

console.log(arr4)

// pop() -  will remove the last element

// shift - will remove the first element

var arr5 = ["raju", 33, "blr", true, undefined, null, 3]


arr5.pop()

arr5.pop()
arr5.pop()

console.log(arr5)
arr5.shift()

arr5.shift()

console.log(arr5)

//sort() - will sort the elements in asending order 

arr6 = [9,5,7,3,2]

arr7 = arr6.sort()

console.log(arr7)

arr8 = ["zuber", "arun", "chandru", "Raju", "Balu"]

arr9 = arr8.sort()

//console.log(arr9)

//reverse() - to reverse the elements in an array

arr10 = ["Zuber", "arun", "chandru", "Raju", "Balu"]

// arr11 = arr10.reverse()
// console.log(arr11)


// split() - will convert string to array 

str = "Javascript classes very interesting"

arr12 = str.split(" ")

console.log(arr12)

//join("") - will convert array to string 

str2 = arr12.join(" ") 

console.log(str2)

// WAP to reverse the string

Str3 = "Raju"

rev = Str3.split("").reverse().join("")
    //   ["R", "a", "j", "u"]

    //   ["u", "j", "a", "R"]

    //   "ujaR"
console.log(rev)

arr = ["Wake up", "drink water", "eat", "sleep", "sleep"]

arr[2] = "Meditation"

console.log(arr)

//Includes() - will return boolean value 

console.log(arr.includes("sleep"))


arr13 = [2,3,4,5]

//const arr13 = new Array(2,3,4,5); // Array as object 

console.log(arr13.indexOf(5))

//Assignemnt

// filter 
// reduce 
// map 


// forEach 
// for Of