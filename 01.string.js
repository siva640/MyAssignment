function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log("Reversed String:", reversed);
  return reversed;
}

function isPalindrome(str) {
  const reversedStr = reverseString(str);
  return str === reversedStr;
}

// 🔍 Test the functions
const testStrings = ["madam", "hello", "racecar", "world", "level"];

testStrings.forEach((str) => {
  const result = isPalindrome(str);
  console.log(`"${str}" is ${result ? "" : "not "}a palindrome`);
});