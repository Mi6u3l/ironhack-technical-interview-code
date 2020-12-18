//Write an algorithm that given an array of numbers you need to check if any number is the double of another number

//[1, 2, 3] => true
//[2, 3, 4] => true
//[2, 5, 6] => false

function includesDouble(array) {
  for(let i=0; i<array.length; i++) {
    for (let j=0; j<array.length; j++) {
      if (array[j] * 2 === array[i]) {
        return true;
      }
    }
  }
  return false;
}

//What is the Big-O complexity of the algorithm?
//O(n^2);
//O(n)
function includesDoubleOn(array) {
  let doubles = {};
  for (let i=0; i<array.length; i++) {
    doubles[array[i]] = array[i] //1:1 3:3
    if (doubles[array[i] * 2] || doubles[array[i] / 2]) {
      return true;
    }
  }
}

//write the factorial multiplication
//given n I'd like to the the factorial of n
//4! = 4*3*2*1=24 //1*2*3*4

//3! = 3*2*1=6

//Iterative approach
function factorial(num) {
    let value=1;
    for(let i = 2; i<=num; i++) {
        value = value*i; //2 * 3 * 4 * 5 * 6
    }
    return value;
}

factorial(6);

//recursive approach - it's a function that calls itself
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    return num * factorial(num -1);
}

//factorial(3)
//3 * 2
//2 * 1
function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num -1) + fibonacci(num-2);
}