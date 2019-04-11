function Diamond() {
  const LETTERS = ["a", "b", "c", "d", "e"]
  let letterIndex = LETTERS.indexOf(letter)
  let width = (letterIndex * 2) + 1

  this.makeDiamond = (letter) => {

  };
};

function makeArray(width) {
  element = Array(width);
  element.fill(" ");
  return element;
};

function addLetter(array, letterIndex) {
  let center = Math.ceil(array.length);
  array[center + letterIndex] = LETTERS[letterIndex];
  array[center - letterIndex] = LETTERS[letterIndex];
  return array;
};

module.exports = Diamond;
