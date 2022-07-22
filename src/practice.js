const characterCount = (word) => {
  return word.length;
};

const canVote = (age) => {
  return age >= 18;
};

const add = (n1, n2) => {
  return n1 + n2;
};

const vowelCount = (word) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return word.split("").reduce((pv, cv) => {
    return vowels.includes(cv) ? pv + 1 : pv;
  }, 0);
  // let vowelCounter = 0;
  // for (let letter of word) {
  //   if (vowels.includes(letter)) {
  //     vowelCounter++;
  //   }
  // }
  // return vowelCounter;
};

const vowelCountV2 = (firstWord, secondWord) => {
  if (vowelCount(firstWord) > vowelCount(secondWord)) {
    return firstWord;
  } else if (vowelCount(firstWord) < vowelCount(secondWord)) {
    return secondWord;
  } else {
    return "same";
  }
};

module.exports = { characterCount, canVote, add, vowelCount, vowelCountV2 };
