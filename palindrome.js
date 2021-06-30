const { visitNodes } = require("typescript")

function isPalindrome(str) {

    return str == str.split('').reverse().join('');
}

console.log(isPalindrome("hannah"))
console.log(isPalindrome("billy"))