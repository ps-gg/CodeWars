const isDividedBy = (a, b, c) => a % b || a % c ? false : true;

console.log(isDividedBy(-12, 2, -6));
console.log(isDividedBy(45, 1, 6));
console.log(isDividedBy(-12, 2, 5));
console.log(isDividedBy(15, -5, 3));
