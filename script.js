function i(str) {
  var result;
  var letter = 'i';
  var empty;

  var checkedLetters;
  var vowel = str.match(/[aeiou]/gi);
  var unVowel = str.match(/[qwrtpsdfghjklzxcvbnmy]/gi);

  if (str === '') {
    empty = true;
  }
  if (unVowel === null) { 
    checkedLetters = true;
  } else if (vowel === null) {
    checkedLetters = false;
  } else {

    if ((vowel.length < unVowel.length)) {

      checkedLetters = false;
    } else { checkedLetters = true }
    var upper;

    if (str[0] === str[0].toUpperCase()
      && str[0] !== str[0].toLowerCase()) {
      upper = false;
    } else {
      upper = true;
    }
    var firstLetter;
    if (str[0] === 'I') {
      firstLetter = true;
    }

  }

  if (checkedLetters == true || upper == true || firstLetter == true || empty == true) {
    return 'Invalid word'
  } else { return result = letter + str }
}


function i(word) {
  let count = 0;
  let counter = 0;
  const glasnye = ['a', 'e', 'i', 'o', 'u'];

  for (let char of word.toLowerCase()) {
    if (glasnye.includes(char)) {
      count += 1;
    }
  }
  const soglasnye = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  for (let char of word.toLowerCase()) {
    if (soglasnye.includes(char)) {
      counter += 1;
    }
  }


  if (word[0] === "I" || word === "" || word[0] === word[0].toLowerCase() || count >= counter) {
    return "Invalid word"
  } else {
    var result = "i" + word;
    return result;
  }
}
