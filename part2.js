const closure = function(val) {
  const newFn = function() {
    console.log("passed args is available here", val);
    // console.log("Starting");
    // const result = fn.apply(this, arguments);
    // console.log("Finished");
    // return result;
  };
  return newFn;
};

// We can Another Function, instead of x=3
const x = function(a, b) {
  return a + b;
};

const final = closure(x);

// final = return of closure = newFn
// final() = newFn()
final();
