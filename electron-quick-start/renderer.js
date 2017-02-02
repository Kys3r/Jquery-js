$( document ).ready(function() {

  var func = require('./func_ai');
  var player = 1;
  var won = 0;
//verify if value is true
  function getState(td) {
    if (td.hasClass('cross') || td.hasClass('circle'))
    {
      return(1);
    }
    else
    {
      return(0);
    }
  }


// Define object for each player
  function defineObject(player) {
    if (player==1)
    {
      return('cross');
    }
    else
    {
      return('circle');
    }
  }


  //Verify who win
  function checkIfPlayerWon() {
    won = 0;
    if ($('tr#r1').find('td#c3').hasClass('cross') && $('tr#r2').find('td#c5').hasClass('cross') && $('tr#r3').find('td#c7').hasClass('cross')) {
      won = 1;
    }
    else if ($('tr#r1').find('td#c1').hasClass('cross') && $('tr#r1').find('td#c2').hasClass('cross') && $('tr#r1').find('td#c3').hasClass('cross')) {
      won = 1;
    }
    else if ($('tr#r2').find('td#c4').hasClass('cross') && $('tr#r2').find('td#c5').hasClass('cross') && $('tr#r2').find('td#c6').hasClass('cross')) {
      won = 1;
    }
    else if ($('tr#r3').find('td#c7').hasClass('cross') && $('tr#r3').find('td#c8').hasClass('cross') && $('tr#r3').find('td#c9').hasClass('cross')) {
      won = 1;
    }
    else if ($('tr#r1').find('td#c1').hasClass('cross') && $('tr#r2').find('td#c4').hasClass('cross') && $('tr#r3').find('td#c7').hasClass('cross')) {
      won = 1;
    }
    else if ($('tr#r1').find('td#c2').hasClass('cross') && $('tr#r2').find('td#c5').hasClass('cross') && $('tr#r3').find('td#c8').hasClass('cross')) {
      won = 1;
    }
    else if ($('tr#r1').find('td#c3').hasClass('cross') && $('tr#r2').find('td#c6').hasClass('cross') && $('tr#r3').find('td#c9').hasClass('cross')) {
      won = 1;
    }
    else if ($('tr#r1').find('td#c1').hasClass('cross') && $('tr#r2').find('td#c5').hasClass('cross') && $('tr#r3').find('td#c9').hasClass('cross')) {
      won = 1;
    }
    else if ($('tr#r1').find('td#c3').hasClass('cross') && $('tr#r2').find('td#c5').hasClass('cross') && $('tr#r3').find('td#c7').hasClass('cross')) {
      won = 1;
    }


    else if ($('tr#r1').find('td#c1').hasClass('circle') && $('tr#r1').find('td#c2').hasClass('circle') && $('tr#r1').find('td#c3').hasClass('circle')) {
      won = 1;
    }
    else if ($('tr#r2').find('td#c4').hasClass('circle') && $('tr#r2').find('td#c5').hasClass('circle') && $('tr#r2').find('td#c6').hasClass('circle')) {
      won = 1;
    }
    else if ($('tr#r3').find('td#c7').hasClass('circle') && $('tr#r3').find('td#c8').hasClass('circle') && $('tr#r3').find('td#c9').hasClass('circle')) {
      won = 1;
    }
    else if ($('tr#r1').find('td#c1').hasClass('circle') && $('tr#r2').find('td#c4').hasClass('circle') && $('tr#r3').find('td#c7').hasClass('circle')) {
      won = 1;
    }
    else if ($('tr#r1').find('td#c2').hasClass('circle') && $('tr#r2').find('td#c5').hasClass('circle') && $('tr#r3').find('td#c8').hasClass('circle')) {
      won = 1;
    }
    else if ($('tr#r1').find('td#c3').hasClass('circle') && $('tr#r2').find('td#c6').hasClass('circle') && $('tr#r3').find('td#c9').hasClass('circle')) {
      won = 1;
    }
    else if ($('tr#r1').find('td#c1').hasClass('circle') && $('tr#r2').find('td#c5').hasClass('circle') && $('tr#r3').find('td#c9').hasClass('circle')) {
      won = 1;
    }
    else if ($('tr#r1').find('td#c3').hasClass('circle') && $('tr#r2').find('td#c5').hasClass('circle') && $('tr#r3').find('td#c7').hasClass('circle')) {
      won = 1;
    }
    return won;
  }

  // Print X or O

  function printX(swap) {
    swap.html('X');
  }
  var printC = function(swap) {
    swap.html('O');
  }
  module.exports.printC = printC;


//                                                  FUNCTION AI //*


// Check where there is on case
  function checkPosition(carreaux) {
    var carreaux=[];
    var r = 1;
    var i = 1;
    while (i <= 9) {
      if ($('tr#r' + r).find('td#c' + i).hasClass('cross')) {
        carreaux.push(2);
        if(i == 3 || i == 6) {
          r++;
          i++;
        }
        else {
          i++;
        }
      }
      else if ($('tr#r' + r).find('td#c' + i).hasClass('circle')) {
        carreaux.push(1);
        if (i == 3 || i == 6) {
          r++;
          i++
        }
        else {
          i++;
        }
      }
      else {
        carreaux.push(0);
        if (i == 3 || i == 6) {
          r++;
          i++;
        }
        else {
          i++;
        }
      }
    }
    return carreaux;
  }

//give the exact position in "format html"
  function givePosition(laCase) {
      var laCase=[];
      var r = 1;
      var i = 1;
      while (i <= 9) {
        if ($('tr#r' + r).find('td#c' + i).hasClass('cross')) {
          if(i == 3 || i == 6) {
            r++;
            i++;
          }
          else {
            i++;
          }
        }
        else if ($('tr#r' + r).find('td#c' + i).hasClass('circle')) {
          if (i == 3 || i == 6) {
            r++;
            i++
          }
          else {
            i++;
          }
        }
        else {
          laCase.push('td#c' + i);
          if (i == 3 || i == 6) {
            r++;
            i++;
          }
          else {
            i++;
          }
        }
      }
      console.log(laCase);
    return laCase;
  }


//random if don't have choice  SPECIAL FUNCT

function randomPlay() {
  var res = givePosition();
  var resSelect = res[Math.floor(Math.random() * res.length)];
  $(resSelect).addClass('circle');
  console.log(resSelect);
  $(resSelect).html('O');
}



//                                      CLICK

  $(".testeur").click(function(){
    console.log(func.first_random(10));


    //firstRandom();

  });


// "Click" AI and Click user

    $('td').click(function(){
      var checkCase = getState($(this));
      if (checkCase == 0)
      {
        var state = defineObject(player);
        if (player == 1) {
          player = 1;
        }
        else {
          player = 1;
        }
        $(this).addClass(state);
        if(state == 'cross')
        {
          printX($(this));
        }

      }
      else
      {
        alert('Cette case est déja cochée !');
      }
      var gameStatus = checkIfPlayerWon();
      if(gameStatus === 1) {
        alert('Win');
        $("td").css("pointer-events", "none");
        $("#myBar").hide();
      }
    });


    $('.butt').click(function() {
      $(".butt").hide();
      var elem = document.getElementById("myBar");
      var width = 0;
      var time = 0
      var id = setInterval(frame, 200);
      function frame() {
        if (width == 100) {
          clearInterval(id);
        } else {
          width++;
          time++;
          $("div.timeOut").html(time + "%");
          elem.style.width = width + '%';
        }
      }
    });
});
