//Q: What is the difference between imperative and declarative
//programming

//Declarative is concerned with the what
const arr = [1, 2, 3, 4];
arr.forEach((item) => {
    console.log(item);
});

//Imperative programming is concerned with the how
for(let i = 1; i <= arr.length; i++) {
    console.log([i]);
}

//Q: What is a class
class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    eat(amount) {
        this.energy += amount
    }
}

//Q: What is an instance
const someAnimal = new Animal('giraffe', 10);

//Q: How inheritance works
class Dog extends Animal {
    constructor(name, energy, breed) {
        super(name, energy);
        this.breed = breed;
    }

    bark() {
        this.energy -= 1;
    }
}

const dog = new Dog('bobi', 10);

//Q: What is polymorphims
//It's the capability of being able to override methods
//from the parent class and add behaviour
class Dog extends Animal {
    constructor(name, energy, breed) {
        super(name, energy);
        this.breed = breed;
    }

    eat(amount) {
       super.eat(amount);
       console.log('Im eating'); 
    }

    bark() {
        this.energy -= 1;
    }
}

//Q: Composition vs Inheritance

//Composition is behaviour driven
const barker = (state) => ({
    bark() {
        state.energy -= 1;
        console.log('woof woof')
    }
})

const eater = (state) => ({
    eat(amount) {
        state.energy += amount;
    }
})

function Dog(name, energy, breed) {
    let dog = {
        name: name,
        energy: energy,
        breed: breed
    }

    //add behaviour to dog without using inheritance
    return Object.assign(
        dog,
        barker(dog),
        eater(dog)
    )
}

//Q: Is JavaScript a multi-threaded language?
//No.

console.log(1);
setTimeout(() => {
    console.log(2); //=> callback queue this will be called later
}, 1000);
console.log(3);
// https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd

//Q: Explain immutability
let myArray = [1, 2, 3, 4, 5];

//Add an item to the array
//Mutable way
myArray.push(6); //=> we are mutating the array

//Imutable way
let myNewArray = myArray.concat(6);
let anotherNewArray = [...myArray].push(6);

//Arrays and Objects are mutable => non-primitive types
myArray[3] = 'something else';
let myObject = {
    name: 'miguel'
}
myObject.name = 'joao';

//Number, string are imutable => primitive types
let myName = 'miguel';
myName[2] = 'a';

//Palindrome
//Q: Check if word is a palindrome
"eye"
"level"
"madam"

function checkPalindrome(str) {
    //convert received string to an array
    let arr = str.split('');
    //revert the order of the array
    let reversedArr = arr.reverse();
    //convert the reversed array back to string
    let reversedArrStr = reversedArr.join('');
    
    if (str === reversedArrStr) {
        return true;
    } else {
        return false;
    }
}

function checkPalindrome(str) {
    let reversedString = str.split('').reverse().join('');
    return reversedString === str;
}













