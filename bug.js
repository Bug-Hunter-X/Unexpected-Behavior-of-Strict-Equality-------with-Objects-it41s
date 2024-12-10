function foo(a, b) {
  if (a === b) {
    return true; // Bug: This will only work if a and b are primitives
  } else {
    return false;
  }
}

const obj1 = { value: 1 };
const obj2 = { value: 1 };

console.log(foo(obj1, obj2)); // false (Incorrect)
console.log(obj1 === obj2); // false