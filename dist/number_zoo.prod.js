"use strict";function findNumber(e){return 0==e.length?1:(e.length+1)*(e.length+2)/2-e.reduce(adder)}function adder(e,n){return e+n}console.log(findNumber([1,3,4,5,6,7,8])),console.log(findNumber([7,8,1,2,4,5,6])),console.log(findNumber([1,2,3,5])),console.log(findNumber([1,3])),console.log(findNumber([])),console.log(findNumber([2,3,4])),console.log(findNumber([13,11,10,3,2,1,4,5,6,9,7,8])),console.log(findNumber([1,2,3]));