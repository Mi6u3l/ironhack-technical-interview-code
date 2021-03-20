//Q: Is JavaSript an object-oriented programming language

//Class
class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy; //Properties
    }

    //Methods
    eat(amount) {
        this.energy += amount
    }
}

const dog = Animal('sparky', 100);
const cat = Animal('luke', 100000);

//Inheritance
class Dog extends Animal {
    constructor(name, energy, breed) {
        super(name, energy);
        this.breed = breed;
    }
}

//Q: What is functional programming
//It's a form of programming where you can have
//functions inside functions
const arr = [1, 2, 3];
arr.forEach((item) => {
    console.log(item); //<= functional programming
});

//Q: What is a pure function

function add(x, y) { //<= Pure function
    return x + y;
}
add(1, 2);

let y = 10;
function add(x) { //<= Not a pure function
    return x + y;
}

//Q: What is a high order function
//A function that returns another function
function generateSum(a) {
    //let a = a + 10;
    return function sum(b, c) {
        return a + b + c;
    }
}

//generateSum(1)(2, 3);

//const result = generateSum(1);
//result(2, 3);

//Q: What is a factory function
//This is any function which is not a class that returns a new object
const user = (username, avatar) => {
    return {
        username: username,
        avatar: avatar,
        setUserName(username) {
            this.username = username;
            return this;
        }
    }
}

//This is a factory function ^

const miguel = user('miguel', 'img.png');
miguel.setUserName('bla');

class User {
    constructor(username, avatar) {
        this.username = username;
        this.avatar = avatar;
    }

    setUserName(username) {
        this.username = username
    }
}

//This is a class ^

const miguel = new User('miguel', 'img.png');

//Write a program that prints the number from 1 to 100
//But for multiples of 3 print 'Fizz'
//For multiples of 5 print 'Buzz'
//For multiples of both 3 and 5 print 'FizzBuzz'
for (let i = 1; i<=100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if  (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }  
}