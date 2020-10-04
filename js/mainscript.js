/* global $, window */

$(function () {

  var check_value = $('.choices');

  $('.submit-btn').on('click', function() {
    $(".answer-text").hide();
    if ($('input[name="choose"]:checked').val() == 'ans') {
      $('.right-ans').show();
      $('.wrong-ans').hide();
      $('.next-page-btn').show()
    } else {
        $('.wrong-ans').show();
        $('.right-ans').hide();
        $('.next-page-btn').hide()
    }
})

//ana t3bt 4:32AM
// اشتغلت 4:35
//////////////////////////mission accomplished 4:42Am w enta naym ya 3l2
////4:46 good night

    ////////////////// adjust navbar style on scroll

    $(window).scroll(function() {
      
        if($(this).scrollTop() > 600) { 

            $('.navbar').addClass('scrolled');

        } else {

            $('.navbar').removeClass('scrolled');

        }

     });

    ///////////////// copyrights year


    //w//////////// dropdown nav menu
    $(".dropdown-toggle").hover(function(){
      $(this).siblings(".dropdown-menu").toggleClass("show");
      $(this).parent().toggleClass("show");
    });

    $(".dropdown-menu").hover(function(){
      $(this).toggleClass("show");
    });

     /////////////// typewriter effect
    function tapeWriter() {
      if (i < message.length) {
        
        $('.js-typewriter').append(message[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }
   
    var message = ' Welcome in STEM october';
    var i = 0; 
    var interval = setInterval(tapeWriter, 80);

    //activate wow js
    new WOW().init();

    //multiple carousels in history
    $('#carouselExampleIndicators, #carouselExampleIndicators2, #carouselExampleIndicators3, #carouselExampleIndicators4, #carouselExampleIndicators5, #carouselExampleIndicators6').carousel();
                                      
});