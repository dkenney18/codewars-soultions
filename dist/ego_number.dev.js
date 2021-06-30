"use strict";

function narcissistic(value) {
  num_length = value.toString().length;
  total = 0;
  digits = splitNumber(value);

  for (var i = 0; i < digits.length; i++) {
    total += Math.pow(digits[i], num_length);
  }

  return total == value;
}

function splitNumber(number) {
  num_length = number.toString().length;
  output = [];
  sNumber = number.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(sNumber.charAt(i));
  }

  return output;
}

console.log(narcissistic(153));