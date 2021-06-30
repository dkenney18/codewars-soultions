Math.round = function(number) {
    console.log(number)
    console.log(parseInt(number))
  };
  
Math.ceil = function(number) {
    return 0; // TODO: fix this
  };
  
Math.floor = function(number) {
    return 0; // TODO: fix this
  };

function getRemainder(number) {
    return (isNaN(Number("0." + number.toString().split(".")[1]))) ? number : Number("0." + number.toString().split(".")[1]);
}
Math.round(4.6)