function capitalizeWord(word) {
  word[0].toUpperCase();
  return word[0].toUpperCase() + word.slice(1);
}

let s = 'hello';
console.log(capitalizeWord(s));
