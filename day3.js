//Q: Is JavaScript a multi-threaded language?

//A thread is an execution context
//JavaScript is single threaded, can only execute one instruction at a time
console.log('1'); //1
setTimeout(() => {
    console.log('2'); //3 => pushed calls - call stack
}, 3000)
console.log('3'); //2
//https://developer.mozilla.org/en-US/docs/Glossary/Call_stack

//C#, Java they are multi-threaded.

//Q: Explain immutability
let myArray = [1, 2, 3, 4];

//Mutable approach
myArray.push(5); //=> Mutating the array

//Immutable approach
let newMyArray = myArray.concat(5)
let anotherNewArray = [...myArray].push(5);
anotherNewArray.push(5);

let mySortedArray = [...myArray].sort();

//Arrays and Objects are mutable
array[1] = 'a';
Object.key = 'b';
"blablabla".[1] = 1;


//Q: What is a regular expression
//Regexes are patterns to match caracters combinations
let myString = "miguel";
let myRegex = /[0-9]/;
myRegex.test(myString) //false

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function checkPalindrome(str) {
    let reversedString = str.split('').reverse().join('');
    return str === reversedString;
  }

checkPalindrome("eye");
checkPalindrome("A man, a plan, a canal. Panama");

function checkPalindrome(str) {
   // let cleanString = str.toLowerCase().replace(' ', '').replace(',', '');
    let myRegex = /[^A-Za-z0-9]/g
    let cleanString = str.replace(myRegex, '');
    let reversedString = cleanString.split('').reverse().join('');
    return str === reversedString;
  }
  //Good example of usage - password security
  //Create a Regular expression that matches:
  // only 2 digits
  // only 3 dashes
  // should finish with 2 letters
  //Learn Regex https://www.freecodecamp.org/learn/


//Q: How does a function expression differs from a function declaration?
//Function declaration
function sum(x, y) {
    return x + y;
}
//The function declaration gets Hoisted -> it moves to the top of the execution context

//Function exression
const sum = (x, y) => {
    return x + y;
}

//Q: What are the data types in JavaScript
//Primitive types: Number, Boolean, String, Null, Undefined
//Non-Primitive types: Object, Array - (Symbol -> ES6)

//Primitive types to be passed by value
//Non-Primite types to be passed by reference

//Q: What is a closure?
//Is a function inside a function

//The global scope
function sum(x) {
    //This outer scope
    return function(y) {
        //This scope inner function scope
        return x+y;
    }
}

let innerSum = sum(1);
innerSum(2);
sum(1)(2);
//Within a closure you can access 3 scope chains

function createAnimal(name) {
    let _name = name; //_name is a private variable

    return {
        getName() {
            return _name;
        },

        setName(newName) {
            //Validation on setting the name
            //Who's accessing it, and which name are you trying to set
            _name = newName;
        }
    }
}

let myAnimal = createAnimal('miguel');
myAnimal.getName();
myAnimal.setName('something');

//Fibonnacci sequence
//0 1 1 2 3 5 8 13 ...
//a b
  //a b
    //a b 
//Write a function to find the nth value of the fib sequence
function fib(nth) {
     let a = 0;
     let b = 1;
     let num = 1;
     let previousB;
     while(num < nth) {
         previousB = b //1 //1 //2 //last sum result
         b = a + b //1 //2 //3 //sum result
         a = previousB; //1 //1 //2 
         num++ 
     }
 
     return a;
 }


fib(7) //13






