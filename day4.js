//Q: What is the difference between undefined and null?
//undefined is the value a variable has when it was not assigned yet
//null is and assigmnet value
let myName; //=> undefined  
myName = 'miguel';
myName = null;
//console.log(myName); //reference error

//Q: What is the this keyword?

//Implicit binding
const user = {
    name: 'miguel',
    age: 27,
    greet() {
        console.log(`Hello my name is ${this.name}`);
    }
}

//look to left of the dot when the function is invoked
//this represents user
user.greet();

//Explicit binding
function greet() {
    console.log(`Hello my name is ${this.name}`);
}

const user = {
    name: 'miguel',
    age: 27
}

greet.call(user);
const newFunc = greet.bind(user);
newFunc();


//New binding
function User(name, age) {
    /* Under the hood, javascript is creating 
        a new object called this which delegates
        to the User's object.
        It returns the this object implicitly
        when creating a new instance
    */
    this.name = name;
    this.age = age;
}

const mySelf = new User('miguel', 27);

//Window binding
let age = 27;
function sayAge() {
    console.log(`My age is ${this.age}`);
}

sayAge();

//Q: We have 2 divs, the top one has a margin-bottom of 
//20px and the bottom div has a margin-top of 20px as well,
// whats the size of the space between them?
//Answer 20px


myString = 'aabbcd';
            

//Returns true if every char is unique
//Returns false if not

function everyCharUnique(str) {
    for (let i = 0; i < str.length; i++) {
        for(let j = i + 1; j<str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true;
}

function everyCharUnique(str) {
    let obj = {};
    for (let i = 0; i<str.length; i++) {
        if (obj[str[i]]) {
            return false
        } else {
            obj[str[i]] = 1;
        }
        
       return true;
    }
}



 

