//Q: What is a regular express
//Regexes are patterns to match characteres combinations

let myString = 'Miguel';
let myRegex = /[0-9]/;
myRegex.test(myString) //false

function validatePassword(password) {
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
        return true;
    } else {
        alert("You have entered an invalid password!")
        return false;
    }
}

//Create a regex that matchs
//only 2 digits
//one dash -
//3 letters
checkPalindrome("A man, a plan, a canal. Panama");

function checkPalindrome(str) {
    let myRegex = /[^A-Za-z0-9]/g
    let cleanString = str.replace(myRegex, '');
}

//Q: How does a function expression differs from a function declaration

//Function declaration
sumDeclaration(2, 3);

function sumDeclaration(x, y) { //=> function declaration get hoisted, it moves to top
    return x + y;
}

//Function expression
const sumExpression = (x, y) => {
    return x + y;
}

sumExpression(2, 3);

//Q: What are the datatypes in javascript
//Primitive types: Number, Boolean, String, Null, Undefined
//Non-primitive types: Objects, Array (type of object), (ES6 Symbol)

//Primitive types are imutable 
let name = "miguel";
name[1]; //Not possible

//Non-primitive types are mutable

//Primitive types are passed by value
let numberOne = 1;
let numberTwo = numberOne;
numberOne = 3; //NumberTwo value is still 1, it didn't change

//Non-primitive types are passed by reference
let objectOne = { name = "miguel" }
let objectTwo = objectOne;
objectTwo.name = "Vanderlei" //I'm also changing object one

//Q: What is a closure
//A closure is a function inside a function that allows access to different levels
//of scope

//Global scope
function sum(x) {
    //Outer scope
    return function(y) {
        //The scope inside the inner function scope
        return x+y
    }
}

let innerSum = sum(1);
innerSum(2); //Have access to diferent levels of scope
//3 scope chains

function createAnimal(name) {
    let _name = name; //variable to be private

    return {
        getName() {
            return _name;
        },

        setName(newName) {
            _name = newName;
        }
    }
}

let myAnimal = createAnimal('miguel');
myName.setName('somename');
myName.getName();

//Q: What is a promise? What is its advantage over callbacks?
//A Promise is an object that wraps an asynchronous operation and resolves when it’s done.
//A callback is a pattern, while promises have been specified into the language.

function getBeers(resolved) {
    //Axios promise
    return new Promise(() => {
        //some code is running to get info from some database
       
    })

    // callback
    resolved();
}

//.then
getBeers.then(() => {
    //Wait for the promise to be resolved
}).catch(() => {
    //Error occurrs
})

//async await
async function getMyBeers() {
    let response = await getBeers();
}

//callback
getBeers(() => {
    //Promise is resolved, I got the beers
})

//Q: What is the difference between == and ===
//The == equal operator compares only values
//The === strict equal operator compares values and data types

//Find the missing array items
let numbers = [0, 1, 3, 4, 5, 7, 8];

function missingItems() {
    let missing = [];
    for(let i = 0; i<numbers.length; i++) {
        if ((numbers[i+1] - numbers[i]) > 1) {
            //1                 //0
            //3                 //1     //2
            missing.push(numbers[i+1] - 1);
        }
    }
    return missing;
} //2, 6













