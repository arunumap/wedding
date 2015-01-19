$(document).ready(function() {

  //refresh page on browser resize
  $(window).bind('resize', function(e)
  {
   if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function()
    {
      this.location.reload(true); /* false to get page from cache */
    }, 200);
  });

  // change the meta view port for mobile
    if ($(window).width() < 481) {
    $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1');

  }


  //Run script if browser/mobile is larger than 480px
  if ($(window).width() > 1097) {

    $(".dc-close").click(function(){
      $(".dc-modal").fadeOut();
    })

    var dcHeight = $(".dc-modal .modal-container").height();
    var dcWidth = $(".dc-modal .modal-container").width();

    $(".dc-modal .modal-container").css({"left": ($(window).width() - dcWidth)/2+"px"  })


  //Bring user to top of page on refresh
  setTimeout(function(){
    $(window).scrollTop(0);
  }, 300);

  // This is the count start (we're using this right now for testing)
  // var start = 0;

  // This is the scroll count that pushes stuff out to the log (we're using it right now for testing)
  // function counter () {
    // $("#section-two").on("mousewheel", function() {
  //    start = $(this).scrollTop();
  //     console.log(start);
  //    });
  // };

  // These are the variables to find the current height and width of the user's screen
  var findHeight = $(window).height();
  var findWidth = $(window).width();

  // Here we're calculating the double, tripple and quadropple height so we know where to change sections
  var doubleHeight = findHeight*2;
  var tripleHeight = findHeight*3;
  var quadrupleHeight = findHeight*4;

  // This is calculating the double
  var doubleWidth = findWidth*2;
  var adjustSectionFour = findHeight*3;
  var heightPlusWidth = findHeight + findWidth;

  // This artifically sets the height of the page (because elements are floated left and right, it really is just the height of 2 sections)
  $(".height").css('height', (heightPlusWidth*2));


  // This is for the navigation
  $(".parallax_one").click(function(){
    $('html, body').animate({scrollTop:0}, 1000);
  });

  $(".parallax_two").click(function(){
    $('html, body').animate({scrollTop:findHeight}, 1000);
  });

  $(".parallax_three").click(function(){
    $('html, body').animate({scrollTop: (findHeight+findWidth)}, 1000);
  });

  $(".parallax_four").click(function(){
    $('html, body').animate({scrollTop: ((findHeight*2)+findWidth)}, 1000);
  });

  $(".parallax_five").click(function(){
    $('html, body').animate({scrollTop: ((findHeight*3)+(findWidth*2))}, 1500);
  });

  // This is for the learn more arrow
  var learnMoreArrow = function(){
    $(".learn_more_arrow").animate({"top":"+=4px"});
    $(".learn_more_arrow").animate({"top":"-=4px"});
  };

  setInterval(learnMoreArrow, 200);

  $(".learn_more_holder").click(function(){
    $('html, body').animate({scrollTop:findHeight}, 1000);
  });

  // This is for the tech day video auto-play
  $("#play").on("click", function(){
    $(this).animate({
      opacity: 0
    }, {
      duration: 1000,
      complete: function(){
        $(this).remove();
        var frame = $("#techdayVideo");
        var data = { method: 'play' };
        var url = frame.attr('src').split('?')[0]
        frame[0].contentWindow.postMessage(JSON.stringify(data), url);
      }
    });
  });

  // This is the paralax scroller
  $(window).scroll(function() {

    // This counts whats scrolled from the first section
    var parallaxscrolled = $(window).scrollTop();

    // This is the first two divs that move out of frame when we scroll down
    $('.info_text_holder').css('left',(190-parallaxscrolled)+'px');
    $('.headline_text_holder').css('left',(795+parallaxscrolled)+'px');

    // These are the section two divs that move in as your scroll down
    $(".sectionTwo-headline-container").css({'left': ((665+findHeight)-parallaxscrolled)+'px', 'top':'211px'});
    $(".sectionTwo-text-container").css('top', ((270+findHeight)-parallaxscrolled)+'px');
    $(".computer_container").css('left', ((113-findHeight)+parallaxscrolled)+'px');


    //////////////////
    // This is for navigation changes
    if($(this).scrollTop() <= findHeight){

      $("#setup").css({"left":"0px"});

      // Change the bg of the nav
      $(".parallax-bar").css({"border-top": "3px solid #2672ad"});
    }
    // else if(($(this).scrollTop() >= findHeight) && ($(this).scrollTop() < doubleHeight)){
  //     $(".parallax-bar").css({"border-top": "3px solid #7e5283"});
    //  console.log('section 2 fired');
    // }
    // else if(($(this).scrollTop() >= doubleHeight) && ($(this).scrollTop() < heightPlusWidth)){
  //     $(".parallax-bar").css({"border-top": "3px solid #56aab0"});
    //  console.log('section 3 fired');
    // }
    // else if(($(this).scrollTop() >= heightPlusWidth) && ($(this).scrollTop() < (heightPlusWidth + findHeight))){
  //     $(".parallax-bar").css({"border-top": "3px solid #f3ac5c"});
    //  console.log('section 4 fired');
    // }
    // else{
    //  // Change the bg of the nav
  //     $(".parallax-bar").css({"border-top": "3px solid #80848f"});
    //  console.log('section 5 fired');
    // }

    /////////////////


    // If the user is scrolled inside of section 2 and section 3
    if(($(this).scrollTop() >= findHeight) && ($(this).scrollTop() < heightPlusWidth) ){

      $(".parallax-bar").css({"border-top": "3px solid #7e5283"});

      // Set the variable scrolled (which is effectively a restart to 0)
      var scrolled = $(window).scrollTop()-findHeight;

      //SECTION TWO
      $(".sectionTwo-headline-container").css({'left': "665px", 'top': ((211-findHeight)+parallaxscrolled)+'px'});
      $(".sectionTwo-text-container").css('top', ((270-findHeight)+parallaxscrolled)+'px');
      $(".computer_container").css('left', ((113+findHeight)-parallaxscrolled)+'px');

      //SECTION THREE
      $(".sectionThree-headline-container1").css('top', ((160-findWidth)+scrolled)+'px');
      $(".sectionThree-text-container1").css('left', ((223+findWidth)-scrolled)+'px');
      $(".sectionThree-exhibit_icon").css('left', ((930+findWidth)-scrolled)+'px');

      $(".sectionThree-headline-container2").css('left', ((359-findWidth)+scrolled)+'px');
      $(".sectionThree-text-container2").css('top', ((463+findWidth)-scrolled)+'px');
      $(".sectionThree-attend_icon").css('left', ((80-findWidth)+scrolled)+'px');


      // These are the scroll right
      $("#setup").css({"top": "0px"});
      $("#section-two").css({"position": "fixed", "top": "0px"});
      $("#section-three").css({"position": "fixed", "top": "0px"});
      $("#section-four").css({"position": "fixed", "top": findHeight+"px"});
      $("#section-five").css({"position": "fixed", "top": findHeight+"px"});



      //A fixed box inside a relative box will not move with its parent in Safari so this is to target Safari and use a fix to get both to move at once
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
        $("#setup, #section-two, #section-three, #section-four, #section-five").css('left',-(scrolled)+'px');
      }else {
        $("#setup").css('left',-(scrolled)+'px');
      }


    }else if(($(this).scrollTop() >= heightPlusWidth) && ($(this).scrollTop() < (heightPlusWidth+findHeight))){

      $(".parallax-bar").css({"border-top": "3px solid #56aab0"});

      var scrolled = $(window).scrollTop()-heightPlusWidth;
      var scrolledOffset = $(window).scrollTop()-(heightPlusWidth+findHeight);

        $("#setup").css({"left": -(findWidth)+"px"});


    //SECTION THREE
    $(".sectionThree-headline-container1").css('top', ((160)-scrolled)+'px');
    $(".sectionThree-text-container1").css('left', ((223)+scrolled)+'px');
    $(".sectionThree-exhibit_icon").css('left', ((930)+scrolled)+'px');

    $(".sectionThree-headline-container2").css('left', ((359)-scrolled)+'px');
    $(".sectionThree-text-container2").css('top', ((463)+scrolled)+'px');
    $(".sectionThree-attend_icon").css('left', ((80)-scrolled)+'px');



    //SECTION FOUR
    $(".sectionFour-headline-container1").css('left', ((844+findHeight)-scrolled)+'px');
    $(".sectionFour-investors_icon").css('top', ((220+findHeight)-scrolled)+'px');
    $(".sectionFour-text-container1").css('top', ((480+findHeight)-scrolled)+'px');

    $(".sectionFour-headline-container2").css('top', ((187-findHeight)+scrolled)+'px');
    $(".sectionFour-press_icon").css('top', ((243+findHeight)-scrolled)+'px');
    $(".sectionFour-text-container2").css('left', ((145-findHeight)+scrolled)+'px');



        $("#section-two").css('top',-(scrolled)+'px');
        $("#section-three").css('top',-(scrolled)+'px');
        $("#section-four").css('top',-(scrolledOffset)+'px');
        $("#section-five").css('top',-(scrolledOffset)+'px');





    }else if($(this).scrollTop() >= (heightPlusWidth+findHeight)){

          //Change top bar to gray at the end
          if($(this).scrollTop() >= ((heightPlusWidth*2))){
            $(".parallax-bar").css({"border-top": "3px solid #808490"});
          }else{
            $(".parallax-bar").css({"border-top": "3px solid #f3ac5c"});
          }


      var scrolled = $(window).scrollTop()-doubleHeight;


    //SECTION FOUR
    $(".sectionFour-headline-container1").css('top', ((168+findWidth)-scrolled)+'px');
    $(".sectionFour-investors_icon").css('top', ((220-findWidth)+scrolled)+'px');
    $(".sectionFour-text-container1").css('top', ((480-findWidth)+scrolled)+'px');

    $(".sectionFour-headline-container2").css('top', ((187+findWidth)-scrolled)+'px');
    $(".sectionFour-press_icon").css('top', ((243-findWidth)+scrolled)+'px');
    $(".sectionFour-text-container2").css('left', ((145+findWidth)-scrolled)+'px');


      $("#section-four").css('top', '0px');
      $("#section-five").css('top', '0px');


      //A fixed box inside a relative box will not move with its parent in Safari so this is to target Safari and use a fix to get both to move at once
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
        $("#setup, #section-two, #section-three, #section-four, #section-five").css('left',-(scrolled)+'px');
      }else {
        $("#setup").css('left',-(scrolled)+'px');
      }


    }else{

      $(".parallax-bar").css({"border-top": "3px solid #2672ad"});

      $("#section-two").css({"position": "inherit"});
      $("#section-three").css({"top": findHeight+"px"});
      $("#setup").css({"top": "0px"});
    }



    });

  }


  });
