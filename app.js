$(document).ready(function() {

/*
Declar Variables
-----------------------------------
*/

  var randomN, guess;

/*
When page loads
------------------------------------
*/

  function onInit(){
    randomN = Math.floor(Math.random() * 100);
    console.log('random: ' + randomN);
  };

/*
On Form submit
------------------------------------------
*/

  $('form').on('submit', (event) => {
    event.preventDefault();
    guess = parseInt( $("input[name='guess']").val() );

    if( randomN === guess ){
      $('.init-wrapper').fadeOut();
      $('.won').fadeIn();
      $('.won-text').html('You Won, hurray. Start New Game');
    } else if( randomN !== guess){
      $('.append-guess').append(guess + ' ');
      if( Math.abs(randomN - guess) > 25){
        $('.result-text').html('You are very cold');
      } else if( Math.abs(randomN - guess) >= 15 && Math.abs(randomN - guess) < 25 ){
        $('.result-text').html('You are just cold');
      } else if( Math.abs(randomN - guess) >= 10 && Math.abs(randomN - guess) < 15){
        $('.result-text').html('You are hot');
      } else if( Math.abs(randomN - guess) >= 5 && Math.abs(randomN - guess) < 10){
        $('.result-text').html('You are hotter');
      } else if( Math.abs(randomN - guess) >= 1 && Math.abs(randomN - guess) < 5){
        $('.result-text').html('You are very hot');
      }
    }

    /* Clear input field */

    $("input[name='guess']").val('');

  }); // form submit closing syntax

/*
Start New Game
-----------------------------------------
*/

  $('.new-game').on('click', (event) => {
    event.preventDefault();
    onInit();
    $('.result-text').html('');
    $('.append-guess').html('');
    $('.init-wrapper').fadeIn();
    $('.won').fadeOut();
  });

/*
Initialize onInit Function
---------------------------------------------
*/

  onInit();

/*
Open instructions
--------------------------------------------
*/

  $('#open').on('click', () => {
    $('.instructions').fadeIn('slow');
    $('#open').fadeOut('slow');
  });

/*
Close Instructions
---------------------------------------------
*/

  $('.close').on('click', () => {
    $('.instructions').fadeOut('slow');
    $('#open').fadeIn('slow');
  });

}); // document ready closing syntax
