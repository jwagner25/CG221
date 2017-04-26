$( "#clickme" ).click(function() {
  $( "#book" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});

  $( "#clickme" ).click(function() {
  $( "#book" ).fadeOut( "slow", function() {
    // Animation complete.
  });
});

$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});

function animateIt() {
  $( "#mover" ).slideToggle( "slow", animateIt );
}
