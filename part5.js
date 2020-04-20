const { performance } = require("perf_hooks");

const time = function(val) {
  return function() {
    const a = performance.now();
    const data = val.apply(this, arguments);
    const b = performance.now();
    console.log(`Time for ${val.name}  ${b - a}`);
    return { data, time: b - a };
  };
};

const myFn1 = function(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`F1: sum till ${n}: ${sum}`);
  return sum;
};

const myFn2 = function(n = 2000000) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`F2: sum till ${n}: ${sum}`);
  return sum;
};

/*
const x1 = myFn1(100); // no time calc
const x2 = myFn2(); // no time calc
console.log(x1, x2);
// To add time calc we can add time to each function,
// that is error prone -
// passing thru a closure or decorators is much better.
// Add once and then can edit at single place.

const myFn1ThruTime = time(myFn1);
const myFn2ThruTime = time(myFn2);
const y1 = myFn1ThruTime(100);
const y2 = myFn2ThruTime();
console.log(y1, y2);
*/

// Short Hand
time(myFn1)(100)

// JS Decorators - To be included in ES2020
// Special implementation of closures.
// @ symbol for easy writing and clarity
// @time()
// myFn1(100)