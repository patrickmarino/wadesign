$(document).ready(function() {
    // $('#fullpage').fullpage({
    //   //Scrolling
    //     css3: true,
    //     scrollingSpeed: 700,
    //     autoScrolling: true,
    //     fitToSection: true,
    //     fitToSectionDelay: 1000,
    //     scrollBar: false,
    //     easing: 'easeInOutCubic',
    //     easingcss3: 'ease',
    //     loopBottom: false,
    //     loopTop: false,
    //     loopHorizontal: true,
    //     continuousVertical: false,
    //     continuousHorizontal: false,
    //     scrollHorizontally: false,
    //     interlockedSlides: false,
    //     resetSliders: false,
    //     fadingEffect: false,
    //     normalScrollElements: '#element1, .element2',
    //     scrollOverflow: false,
    //     scrollOverflowOptions: null,
    //     touchSensitivity: 15,
    //     normalScrollElementTouchThreshold: 5,
    //     bigSectionsDestination: null,
    //
    //     //Design
    //     controlArrows: true,
    //     verticalCentered: true,
    //     sectionsColor : ['#ccc', '#fff'],
    //     paddingTop: '3em',
    //     paddingBottom: '10px',
    //     fixedElements: '#header, .footer',
    //     responsiveWidth: 0,
    //     responsiveHeight: 0,
    //     responsiveSlides: false,
    //
    // });

    activeItem = $("#accordion li:first");
    $(activeItem).addClass('active');
    $(activeItem).css({'color': 'red'});

    $("#accordion li").click(function(){
        $(activeItem).animate({width: "5%"}, {duration:300, queue:false});
        $(activeItem).css({'color': "black"});
        $(this).animate({width: "85%"}, {duration:300, queue:false});
        $(this).css({'color': 'red'});
        activeItem = this;
    });
});
