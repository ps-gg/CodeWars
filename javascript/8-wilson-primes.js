function amIWilson(p) {
  let f = 1;
  for(let i = 1; i < p; i++) {
    f *= i;
  }
  return ((f + 1) / ( p * p )) % 1 ? false :  true;
}

console.log(amIWilson(5));
console.log(amIWilson(9));
console.log(amIWilson(6));

// WARNING. Didn't work in JS with big numbers. f will became Infinity.
