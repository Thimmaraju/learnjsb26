

var str = 'raju'

//or



var str = "raju"

//or

var str = `Raju`

var password = `raju'pass@"123`

str1 = "Raju"

str2 = "G"

result = str1 + str2

console.log(result)

result2 = str1.concat(str2)

console.log(result2)

console.log(10+ "10")

str3 = "This is a strings class in JS Language"

console.log(str3.toUpperCase())

console.log(str3.toLowerCase())

str4 = "   Raju     place blr       "

console.log(str4.length)

str5 = str4.trim()

console.log(str5.length)

price1 = Number("120")

price2 = Number("60")

totolprice = Number("180")

console.log(price1+price2 === totolprice)

//const arr13 = new Array(2,3,4,5); // Array as object

// const str = new String(5) // string as Object 

// str = "5"

str1 = "Neelakanta"

str2 = "Prakash"

//result = "Mohan and  Prakash are friends"

//result = str1+ " and " + str2+ " are friends"

result = `${str1} and ${str2} are friends`


console.log(result)

str5 = "Rashmi"

console.log(str5[2])

console.log(str5.charAt(2))

//strings are Immutable 

//str5[0] = "r"

console.log(str5)

//replace

str6 = "neelskanta"

str7 = str6.replace("s", "a")

console.log(str7)

price3 = Number("$23".replace("$", ""))

console.log(price3)

price4 = "$34"

total = price3 + price4

str7 = "this is js calss".replaceAll("s", "a")

console.log(str7)

str8 = "rajublr"

str9 = str8.substr(4,7)

console.log(str9)

str = "Javascript"

console.log(str.indexOf("s"))

str10 = "thi is javascript class form Raju"

console.log(str10.includes("Prakash"))

// Javascript is a case sensitive language 

// "Raju" === "raju"

str11 = "Raju\tG"

console.log(str11)