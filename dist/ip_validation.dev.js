"use strict";

function isValidIP(str) {
  if (str.match(/^[1-9]{1,4}[.][1-9]{1,4}[.][1-9]{1,4}[.][1-9]{1,4}/g)) return true;
  return false;
}