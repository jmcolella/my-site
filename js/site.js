$( document ).ready( function() {

  // Nav scroll down
  $( '.fa-bars' ).on( 'click', function( e ) {
    $( this ).fadeOut();
    $( '.site-nav-links' ).slideToggle( 'slow', function() {
      handleNavIcon( this );

    }.bind( this ));
  });

  $( '.fa-times' ).on( 'click', function( e ) {
    $( this ).fadeOut();
    $( '.site-nav-links' ).slideToggle( 'slow', function() {
      handleNavIcon( this );
    }.bind( this ));
  });

  // Header link scrolls to top if on index page
  $( '.header-site-title' ).on( 'click', function( e ) {
    if ( window.location.pathname === '/' ) {
      e.preventDefault();

      $( 'html, body' ).animate({
        scrollTop: 0
      }, 1500);
    }
  });

  // Main Scroll to About
  $( '#about-link' ).on( 'click', function() {
    if ( window.location.pathname === '/' ) {
      $('html, body').animate({
          scrollTop: $("#about").offset().top - 100
      }, 1500);

      // Choose the .fa-times child
      var that = $(this).closest( '.container' ).find('.site-nav').children()[1];
      $( that ).fadeOut();

      $( '.site-nav-links' ).slideToggle( 'slow', function() {

        handleNavIcon( this );

      }.bind( that ));
    }
  });

});

function handleNavIcon( that ) {
  if ( $(that).attr('class').includes('fa-bars') ) {
    $( '.fa-times' ).fadeIn();
  } else {
    $( '.fa-bars' ).fadeIn();
  }
};
