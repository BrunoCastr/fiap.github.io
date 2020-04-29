$( document ).ready(function() {
     setTimeout(carregar, 1000);
});

function carregar() {

      $('h1').fadeOut();
      $('h1').fadeIn();
      document.getElementById('log').style.color='rgba(255,255,255,1)';
    }
