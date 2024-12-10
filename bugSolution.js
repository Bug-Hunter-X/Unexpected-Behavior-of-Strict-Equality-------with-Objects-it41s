function deepCompare(a, b) {
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
    return a === b;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!b.hasOwnProperty(key) || !deepCompare(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

const obj1 = { value: 1 };
const obj2 = { value: 1 };

console.log(deepCompare(obj1, obj2)); // true (Correct) 
console.log(obj1 === obj2); // false