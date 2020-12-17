//Q: Is JavaScript an object-oriented programming language?

// can create classes
class Animal {
    constructor(name, energy) {
        this.name = name,
        this.energy = energy
    }

    //can have methods inside classes
    eat(amount) {
        this.energy += amount;
    }
}

//can have inheritance
class Dog extends Animal {
    constructor(name, energy, breed) {
        this.breed = breed;
    }
}

//can create instances of classes
const dog = new Animal('bob', 100);
const cat = new Animal('sparky', 200);

//Q: What is functional programming?
//It's a form of programming where you can have functions inside functions
const arr = [1, 2, 3, 4];
arr.forEach((element) => { //<= functional programming

})

//Q: What is a high order function?
//Is a function that either receieves a function as a parameter - forEach

//Or returns a function as its value
const generateSum = () => {
    const sum = (a, b) => a + b;
    return sum;
}

//Q: What is a pure function?
//Given the same input you always get the same output
function add(x, y) {
    return x + y;
}
add(2, 1);

let y = 1;
function add(x) {
    return x + y;
}

//Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print “Fizz” instead of the number and 
//for the multiples of five print “Buzz”. For numbers which are multiples
//of both three and five print “FizzBuzz”.
for(let i = 1; i<=100; i++) {
    if (i % 15 === 0) { //(i % 3 === 0 && i % 5 === 0)
      console.log('FizzBuzz')
    } 
    else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz'); 
    } else {
      console.log(i);
    }
  }
  










