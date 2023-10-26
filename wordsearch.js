//PAIR PROGRAMMING
//DONE BY RODERICK AND DHAARANI S

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }

  const result = vertical(letters);
  const verticalJoin = result.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const vertical = function (letters) {
  // Replace this code with your solution
  let i = 0;
  let newletters = [];
  while (i < letters[0].length) {
    let tempRow = [];
    for (let row in letters) {
      tempRow.push(letters[row][i]);// i = 1st value of each row and forms new array([1,1,1,1]) once pushed thn 2nd value of each is pushed so [2,2,2,2]
    }//for loop forms 1 row
    newletters.push(tempRow);// new array(tempRow i.e [1,1,1,1]) pushing row by row into newMatrix
    i++; // i is incremented so i=2
  }
  return newletters;
};

module.exports = wordSearch;