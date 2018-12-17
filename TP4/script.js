console.log('Hello world');

let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let number = [1, 2, 3, 4, 500, 605, 7, 8, 9, 9, 14, 12, 13, 14, 15, 605, 17, 18, 19, 20];

/*Exercice 1*/
function f1(sequence) {/*function with an array as parameter*/
  let i = 0;/*intermediate variable*/
  let currentElt;/*recovery of the current element*/
  while (i < sequence.length) {/*continuation condition*/
    currentElt = sequence[i];/*recovery of the current element*/
    i += 1;/*updating the condition*/
    console.log(currentElt);
  }
}
/*f1(alpha)*/

/*Exercice 2*/
function f2(sequence) {/*function with an array as parameter*/
  let i = 0;/*intermediate variable*/
  let currentElmt;/*recovery of the current element*/
  if (sequence.length <= 10) {/*sequential search*/
    while (i < sequence.length) {/*continuation condition*/
      currentElmt = sequence[i];/*recovery of the current element*/
      i++;/*updating the condition*/
      console.log(currentElmt);/*displays the result*/
    }
  } else {
    while (i < 10) {/*continuation condition*/
      currentElmt = sequence[i];/*recovery of the current element*/
      i++;/*updating the condition*/
      console.log(currentElmt);/*displays the result*/
    }
  }
}


/*f2(alpha)*/

/*Exercie 3*/
function f3(sequence) {/*function with an array as parameter*/
  let i = 0;/*intermediate variable*/
  let currentElmt;/*recovery of the current element*/

  if (sequence.length <= 10) {/*sequential search*/
    while (i < sequence.length) {/*continuation condition*/
      currentElmt = sequence[i];/*recovery of the current element*/
      i++;/*updating the condition*/
      console.log(currentElmt);/*displays the result*/
    }
  } else {
    while (i < 10) {/*continuation condition*/
      currentElmt = sequence[sequence.length - 10 + i];/*recovery of the current element*/
      i++;/*updating the condition*/
      console.log(currentElmt);/*displays the result*/
    }
  }
};

/*f3(alpha)*/

/*Exercice 4*/
function eltsArray(sequence) {/*function with an array as parameter*/
  let i = 0;/*intermediate variable*/
  let currentElt;/*recovery of the current element*/
  let copyArray = [];/*creation of a table for the result*/
  let currentEltIncremented = 0;/*recovery of the current element for incremented*/
  while (i < sequence.length) {/*continuation condition*/
    currentElt = sequence[i];/*sequential search*/
    currentEltIncremented = currentElt + 1;/*the incremented element where 1 is added*/
    copyArray.push(currentEltIncremented);/*adding the element to the table*/
    i++; /*updating the condition*/
  }
  return (copyArray); /*returns the table*/
}

/*let newTab = eltsArray(number);
console.log(newTab);*/

/*Exercice 5*/
function f5(sequence) {/*function with an array as parameter*/
  let i = 0; /*intermediate variable*/
  let currentElmt; /*recovery of the current element*/
  while (i < sequence.length) { /*continuation condition*/
    currentElmt = sequence[i]; /*recovery of the current element*/
    i++; /*updating the condition*/
    if (currentElmt % 2 === 0) { /*sequential search*/
      console.log(currentElmt + ' is an even number');/*displays the result*/
    } else {
      console.log(currentElmt + ' is odd even number');/*displays the result*/
    }
  }
}

/*f5(number);*/

/*Exercice 6*/
function f6(sequence) {/*function with an array as parameter*/
  let i = 0; /*intermediate variable*/
  let currentElt;/*recovery of the current element*/
  let sum = 0; /*creation of a variable for the calculation of the sum */

  while (i < sequence.length) {/*continuation condition*/
    currentElt = sequence[i];/*recovery of the current element*/
    i++;/*updating the condition*/
    sum += currentElt; /*calculation of the sum at each loop turn*/
  }
  return (sum); /*returns the result*/
};

/*let sumTotal = f6(number);
console.log(sumTotal);*/

/*Exercice 7*/
function f7(sequence) {/*function with an array as parameter*/
  let i = 0;/*intermediate variable*/
  let currentElt; /*recovery of the current element*/
  let numberEltEven = 0; /*creation of a variable to calculate the number of even elements*/

  while (i < sequence.length) {/*continuation condition*/
    currentElt = sequence[i];/*recovery of the current element*/
    i++; /*updating the condition*/
    if (currentElt % 2 === 0) {/*sequential search*/
      numberEltEven += 1;/*calculation of the number of even elements at each loop turn*/
    }
  }
  return (numberEltEven); /*returns the result*/
};

/*let eltEven = f7(number);
console.log(eltEven);*/

/*Exercice 8*/
function f8(sequence) {/*function with an array as parameter*/
  let currentElt;/*recovery of the current element*/
  let maxValue = sequence[0];/*creation of an array with a maximum value*/
  let i = 1; /*intermediate variable*/

  while (i < sequence.length) {/*continuation condition*/
    currentElt = sequence[i];/*recovery of the current element*/
    i++;/*updating the condition*/
    if (currentElt > maxValue) {/*sequential search*/
      maxValue = currentElt; /*results of the maximum value*/
    }
  }
  return (maxValue); /*returns the table*/
}

/*let maxValueNew = f8(number);
console.log(maxValueNew);*/

/*Exercice 9*/
function f9(sequence) {/*function with an array as parameter*/
  let currentElt;/*recovery of the current element*/
  let maxValue = sequence[0];/*creation of an array with a maximum value*/
  let minValue = sequence[0];/*creation of an array with a minimum value*/
  let i = 1;/*intermediate variable*/
  while (i < sequence.length) {/*continuation condition*/
    currentElt = sequence[i];/*recovery of the current element*/
    i++;/*updating the condition*/
    if (currentElt > maxValue) {/*sequential search*/
      maxValue = currentElt;/*results of the maximum value*/
    }
    if (currentElt < minValue) {/*sequential search*/
      minValue = currentElt;/*results of the minimum value*/
    }
  }
  console.log("La valeur maximum est " + maxValue);/*display of the maximum value*/
  console.log("La valeur minimum est " + minValue);/*display of the minimum value*/
};

/*f9(number);*/

/*Exercice 10*/
function f10(sequence) {/*function with an array as parameter*/
  let currentElt;/*recovery of the current element*/
  let i = 1;/*intermediate variable*/
  while (i < sequence.length) {/*continuation condition*/
    currentElt = sequence[i];/*recovery of the current element*/
    if (currentElt > sequence[i - 1]) {/*sequential search*/
      return false; /*returns the wrong value*/
    } else {
      return true; /*returns the true value*/
    }
    i++; /*updating the condition*/
  }
};

/*let ordonne = f10(number);
console.log(ordonne);*/

/*Exercice 11*/
function f11(sequence) {/*function with an array as parameter*/
  let currentElt;/*recovery of the current element*/
  let i = 0;/*intermediate variable*/
  let j;/*second intermediate variable*/
  let canCopy;/*creation of a boolen for copying*/
  let copyArray = [];/*creation of a table for the result*/
  copyArray.push(sequence[0]);

  while (i + 1 < sequence.length) { /*continuation condition*/
    currentElt = sequence[i + 1];/*recovery of the current element*/
    i++;/*updating the condition*/
    j = 0;/*updating the condition*/
    canCopy = true; /*result of the copy*/
    while (j < copyArray.length) {/*continuation condition*/
      if (currentElt === copyArray[j]) {/*sequential search*/
        canCopy = false;/*result of the copy*/
      }
      j++;/*updating the condition*/
    }
    if (canCopy) {/*sequential search*/
      copyArray.push(currentElt);/*addition of the result in the table*/
    }
  }
  return copyArray;/*returns the table*/
};

/*let tabOneOccurrence = f11(number);
console.log(tabOneOccurrence);*/

/*Exercice 12*/
function f12(sequence) {/*function with an array as parameter*/
  let i = 0;/*intermediate variable*/
  let currentElt;/*recovery of the current element*/
  let copyArray = [];/*creation of a table for the result*/

  while (i < sequence.length) {/*continuation condition*/
    currentElt = sequence.length - 1 - i;/*recovery of the current element*/
    copyArray.push(sequence[currentElt]);/*addition of the result in the table*/
    i += 1;/*updating the condition*/
  }
  return (copyArray);/*returns the table*/
};

/*let newTab = f12(number);
console.log(newTab);*/

/*Exercice 13*/
function f13(sequence1, sequence2) {/*function with two arrays as parameter*/
  let i = 0;/*intermediate variable*/
  let currentElt;/*recovery of the current element*/
  let concatenateArrays = [];/*creation of a table for the result*/
  while (i < sequence1.length) {/*continuation condition*/
    currentElt = sequence1[i];/*recovery of the current element*/
    i++;/*updating the condition*/
    concatenateArrays.push(currentElt);/*addition of the result in the table*/
  }
  i = 0;
  while (i < sequence1.length) {/*continuation condition*/
    currentElt = sequence2[i];/*recovery of the current element for second array*/
    i++;/*updating the condition*/
    concatenateArrays.push(currentElt);/*addition of the result in the table*/
  }
  return concatenateArrays;/*returns the table*/
};

let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

/*let newTab = f13(number1, number2);
console.log(newTab);*/

/*Exercice 14*/
function f14(sequence) {/*function with an array as parameter*/
  let i = 0;/*intermediate variable*/
  let currentElt; /*recovery of the current element*/
  let copyArray = []; /*creation of a table for the result*/
  let startingAVowel;

  while (i < sequence.length) { /*continuation condition*/
    currentElt = sequence[i];/*recovery of the current element*/
    i++; /*updating the condition*/
    startingAVowel = wordStartingAVowel(currentElt);
    if (startingAVowel) {/*sequential search*/
      copyArray.push(currentElt); /*addition of the result in the table*/
    }
  }
  return copyArray;/*returns the table*/
};

function wordStartingAVowel(word){
  if (word.charAt(0).toUpperCase() === 'A' ||
    word.charAt(0).toUpperCase() === 'E' ||
    word.charAt(0).toUpperCase() === 'I' ||
    word.charAt(0).toUpperCase() === 'O' ||
    word.charAt(0).toUpperCase() === 'U' ||
    word.charAt(0).toUpperCase() === 'Y') {/*sequential search*/
    return true;/*returns the true value*/
  } else {
    return false;/*returns the wrong value*/
  }
};

let wordVowel = ["bonjour", "oiseau", "anonyme", "voiture", "elements", "isocèle", "camion", "uber", "yack"]
let newTab = f14(wordVowel);
console.log(newTab);

/*Exercice 14bis*/
function f14bis(string) {/*Function with a string as parameter*/
  let i = 0;/*intermediate variable*/
  let currentElt;/*recovery of the current element*/
  let currentElt2;/*recovery of the current element for second element*/

  while (i < string.length / 2) {/*continuation condition*/
    currentElt = string[i];/*recovery of the current element*/
    currentElt2 = string[string.length - 1 - i];/*recovery of the current element for second element*/
    i += 1;/*updating the condition*/
    if (currentElt != currentElt2) {/*sequential search*/
      return false;/*returns the wrong value*/
    }
  }
  return true; /*returns the true value*/
};

/*let word = "mon nom";
console.log(f14bis(word));*/

/*Exercice 15*/
function f15(string1, string2) {/*Function with two strings as parameter*/
  let i = 0; /*intermediate variable*/
  let currentElt1 = string1.split("");/*recovery of the current element*/
  let currentElt2 = string2.split("");/*recovery of the current element for second element*/
  if (string1.length !== string2.length) {/*sequential search*/
    return false;/*returns the wrong value*/
  } else {
    currentElt1.sort();
    currentElt2.sort();
    while (i < currentElt1.length) { /*continuation condition*/
      if (currentElt1[i] !== currentElt2[i]) {/*sequential search*/
        return false;/*returns the wrong value*/
      }
      i += 1;/*updating the condition*/
    }
    return true;/*returns the true value*/
  }
};

/*let word1 = "corps";
let word2 = "porcs";
console.log(f15(word1, word2));*/
