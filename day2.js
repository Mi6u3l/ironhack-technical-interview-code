//Q: What is a factory function - before ES6, where there were no classes
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

let miguel = user('miguel', 'img.png');
let ricardo = user('ricardo', 'img.png');
let ana = new User('ana', 'img.png')

//Q: What is the difference between declarative and imperative programming?
//In imperative programming you are concerned with the "How" - Spell out every step.
let total = 0;
for(let i = 0; i<10; i++) {
  total += i;
}
//In declarative programming you are concerned with the "What" - More abstraction.
forEach((element) => {})
return Array.reduce((x, y) => x + y);

//Q: What is a class?
//It's a core principle of OOP
//It's an abstract representation of an entity 
//Alowing to instantiate multiple objects with the same properties and methods
//of that generic entity
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
//It's the concrete creation of an object based on a class
const myAnimal = new Animal('Sparky', 100);
myAnimal.eat(10);
const secondAnimal = new Animal('Tareco', 50);
secondAnimal.eat(100);
secondAnimal.energy;
myAnimal.energy;

//Q: How inheritance works and what is it for?
//I can reuse methods and properties from my parent class
//Without having to re-write them
class Dog extends Animal {
  constructor(name, energy) {
    super(name, energy)
  }

  bark() {
    this.energy -= 1;
  }
}

//Q: What is polymorphism
//Is an OOP capability that allows to redefine methods from parent classes
class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(amount) {
    this.energy += amount
  }

  play(length) {
    this.energy -= length;
  }
}

class Dog extends Animal {
  constructor(name, energy) {
    super(name, energy)
  }

  bark() {
    this.energy -= 1;
  }

  //The fact that I can override methods from my parent class and add behaviour
  //That is called polymorphism
  play(length) {
    super.play(length);
    console.log('woof woof')
  }
}

const newDog = new Dog('turbo', 100);
newDog.bark();
newDog.eat(100);
newDog.play(10);

//Q: Difference between inheritance and composition
class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(amount) {
    this.energy += amount
  }

  sleep() {
    this.energy += 1;
  }

  play(length) {
    this.energy -= length;
  }
}

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy);
    this.breed = breed;
  }

  bark() {
    this.energy -= 1
  }

  play(length) {
    super.play(length);
    console.log('woof woof')
  }
}

class Cat extends Animal {
  constructor(name, energy, furColor) {
    super(name, energy);
    this.furColor = furColor;
  }

  meow() {
    this.energy -= .5;
  }
}
//Anti-pattern - God Class
//Composition - is driven by behaviour

//This is composition
const barker = (state) => ({
  bark() {
    state.energy -= 1;
    console.log('woof woof')
  }
}) 

const meower = (state) => ({
  meow() {
    state.energy -= .5;
  }
}) 

function Dog(name, energy, breed) {
  let dog = {
    name: name,
    energy: energy,
    breed: breed
  }

  return Object.assign(
    dog,
    barker(dog),
    meower(dog)
  )
}

const leo = Dog('leo', 10, 'german sheppard');
leo.bark();
leo.meow();

function Cat(name, energy, furColor) {
  //cat object
  let cat = {
    name: name,
    energy: energy,
    furColor
  }

  //Adding the desired behaviours to my cat object
  return Object.assign(
    cat, 
    meower(cat)
  )
}
let tareco = Cat('tareco', 100, 'grey');
tareco.meow();


//Q: Check if word is a palindrome
"eye" - true
"word" - false
"level" - true
"madam" - true

function checkPalindrome(str) {
  //convert received string to an array
  let arr = str.split('');
  //revert the order of that array
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
  return str === reversedString;
}






























