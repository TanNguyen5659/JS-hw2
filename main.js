//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function favFood(obj){
    for (food in obj){
        console.log(food)
    }
}
favFood(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
function Person(name,age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`This is ${this.name} who is ${this.age} years old`)
    }
    this.addAge = () => {
        this.age = this.age + 1;
        console.log(`${this.name}'s age is ${this.age}`)
    }
}
let tan = new Person('Tan', 30)
tan.printInfo()
tan.addAge()
tan.addAge()
tan.addAge()

let brian = new Person('Brian', 24)
brian.printInfo()
brian.addAge()
brian.addAge()
brian.addAge()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let greater10 = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small word");
        }
    })
}
greater10('aerworld').then( (result) => {
    console.log(`${result}`)
}).catch( (result) => {
    console.log(`${result}`)
})

//Codewars
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?
function typeCast(num){
    return num.toString()
}
console.log(typeof typeCast(5))


// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(arr) {
    var result, num = 0;
  
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        num++;
      } else {
        num++;
        if (num % 2 != 0) {
          result = arr[i];
          break;
        }
      }
    }
    return result;
  }