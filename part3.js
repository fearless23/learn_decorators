// Insteead of console logging,
// We can use
const closure = function(val) {
  const newFn = function() {
    // console.log("passed args is available here", val);
    // console.log("Starting");
    // console.log("this", this)
    // console.log("arguments", arguments)
    const result = val.apply(this, arguments);
    // console.log("Finished");
    return result;
  };
  return newFn;
};

// We can Another Function, instead of x=3
const x = function(a, b) {
  return a + b;
};

const final = closure(x);

// final = return of closure = newFn
// final() = newFn() = val.apply(this, arguments)
const y = final(2,3); // y = x.apply(this, arguements)
console.log(y,'\n')


/*
  final(2,3) and x(2,3) will run exactly same.
  Only difference is final(2,3) has few extra logic run 
  before and after  `val.apply(this, arguments)`

*/
