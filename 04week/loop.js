'use struct'

//use a do while loop to console log 1 to 100
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 100);

console.log(result);

//create an object
let arraysOfPersons = [
{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "Female",
} , {
    firstName: "Mike",
    lastName: "Hat",
    birthDate: "Jan 3, 1985",
    gender: "Male",
} , {
    firstName: "Dan",
    lastName: "Die",
    birthDate: "Jan 5, 1995",
    gender: "Male",
} , {
    firstName: "Jill",
    lastName: "Hand",
    birthDate: "Jan 5, 1998",
    gender: "Female",
} 

]

console.log("*************************************")
//create a for in loop that console.log value associated with the key birthDate if the birth year is an odd number
for(const birthDate in arraysOfPersons) {
    if(birthDate % 2 !== 0)
    console.log(birthDate)
}

console.log("*************************************")
//use .map() to map over the arraysOfPersons
let mappingArray = arraysOfPersons.map((people) => console.log(people))


console.log("*************************************")
//use .filter() to filter the people in array only males

let filteredByGender = arraysOfPersons.filter(obj => obj.gender === "Male")

console.log(filteredByGender)


console.log("*************************************")
//use .filter() to filter the people in array born before Jan 1, 1990

let beforeJanuary = arraysOfPersons.filter(obj => obj.birthDate > "Jan 1, 1990")

console.log(beforeJanuary)