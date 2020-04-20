const closure = function(val) {
  return function() {   
    console.log("Pre RUN");
    const result = val.apply(this, arguments);
    console.log("Post RUN");
    return result;
  };
};

const myFn = function(a, b) {
  return a + b;
};

const finalMyFn = closure(myFn);
console.log(finalMyFn(2,3))
console.log(myFn(2,3))


// closure especially decorators can be to extend
// functionality of existing fn.

// Example - get time needed for any fn to execute..
// We can take time calc logic to closure
// See this is part 5