const closure = function(val) {
  const newFn = function() {
    console.log("passed args is available here", val)
  };
  return newFn;
};

const x = 3;
const final = closure(x);

// final = return of closure = newFn
// final() = newFn()

console.log(final.name)
console.log(final)

final()
