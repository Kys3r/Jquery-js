
  var func2 = require('./renderer');


// random play ai in first round    #1
var first_random = function(x) {
  var ran = Math.floor((Math.random() * 2) + 1);
  if (ran == 1) {
    turn_one_notch_One();
    return x;
  }
  else {
    turn_one_notch_two();
  }

//function push after random, first turn ai   #1
  function turn_one_notch_One() {
    $('tr#r1').find('td#c1').addClass("circle");
    x = $('tr#r1').find('td#c1');
    func2.printC(x);
  }

  function turn_one_notch_two() {
    $('tr#r2').find('td#c5').addClass("circle");
    x = $('tr#r2').find('td#c5');
    func2.printC(x);
  }
}
module.exports.first_random = first_random;


function secondTurn() {
  var res = checkPosition();
  var case1 = res[0];
  var case2 = res[1];
  var case3 = res[2];
  var case4 = res[3];
  var case5 = res[4];
  var case6 = res[5];
  var case7 = res[6];
  var case8 = res[7];
  var case9 = res[8];
  console.log(case1);
}
