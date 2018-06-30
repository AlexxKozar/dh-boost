$(document).ready(function(){



    $('.portfolio_items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });




   $('.button-scroll').click( function(){ 
   var scroll_el = $(this).attr('href'); 
          if ($(scroll_el).length != 0) { 
       $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
          }
       return false; 
    });

   // $('.menu-link').click( function(){ 
   // var scroll_el = $(this).attr('href'); 
   //        if ($(scroll_el).length != 0) { 
   //     $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
   //        }
   //     return false; 
   //  });

    setTimeout(function() {
      $('#preloader').fadeOut('slow', function() {});
    }, 1000)

 });

