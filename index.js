function reverse(word) {
  const wordArray = word.split("");
  const reverseWordArray = wordArray.reverse();
  const reversedWord = reverseWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  const reversedWord = reverse(word)

  return word === reversedWord
  }

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("a");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
