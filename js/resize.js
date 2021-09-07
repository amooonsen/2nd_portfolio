$(function(){

        $('.img').click(function(){

          $('nav').stop().slideToggle("fast");

        });

      });

   $(window).resize(function(){

      if(window.innerWidth>=1100){

          $('nav').show();
          





       } else {
       		$('nav').hide();
       }

   });