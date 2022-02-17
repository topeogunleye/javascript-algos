// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split('').reverse().join('');

  ////////////////////////////

  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

  //////////////////////////

  // let revString = '';
  // for(let i = 0; i <=str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  //////////////////////////

  // let revString = '';
  // for(let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  ////////////////////////

  // let revString = '';
  // str.split('').forEach((char) => (revString = char + revString));
  // return revString;

  ////////////////////////
  // return str.split('').reduce((revStr, char) => {
  //   char + revStr;
  // }, '');
}

// console.log(reverseString('Hello'))

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
function isPalindrome(str) {
  // reverse str
  // compare reversed str to str
  // return true if reversed str is equal to str

  let reversedString = str.split('').reverse().join('')

  return reversedString === str ? true : false
}

console.log(isPalindrome('racecar'));

// CLALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
