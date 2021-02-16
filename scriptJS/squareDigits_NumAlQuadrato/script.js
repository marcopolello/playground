function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    // console.log(typeof int);
    console.log(int);
    var i = parseInt(int);
    return i * i;
  });

  return parseInt(array.join(""));
}


var res = squareDigits(9119);
console.log(res);


function test(int) {
  var i = parseInt(int);
  return i * i;
};

// console.log(test(9) + test(1) + test(1) + test(9));
var array = [9,1,1,9];
array.map()
