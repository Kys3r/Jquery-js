$( document ).ready(function() {
  var player = 0;
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
  else if ($('tr#r1').find('td#c3').hasClass('circle') && $('tr#r2').find('td#c5').hasClass('circle') && $('tr#r3').find('td#c1').hasClass('circle')) {
    won = 1;
  }
  return won;
}


//Chronometre




// On click

    $('td').click(function(){
      var checkCase = getState($(this));
      if (checkCase == 0)
      {
        var state = defineObject(player);
        if (player == 1) {
          player = 0;
        }
        else {
          player = 1;
        }
        $(this).addClass(state);
        if(state == 'cross')
        {
          $(this).html("X");
        }
        else
        {
          $(this).html("O");
        }
      }
      else
      {
        alert('Cette case est déja cochée !');
      }
      var gameStatus = checkIfPlayerWon();
      if(gameStatus === 1) {
        alert('Win');

      } else {
        console.log();('Keep playing');
      }
    });

});
