function test_public_methods() {
    $(document).ready(function() {
        $('#fullpage').fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors:['firstPage', 'secondPage'],
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: ['firstSlide', 'secondSlide'],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowOptions: null,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: true,
            verticalCentered: true,
            sectionsColor : ['#ccc', '#fff'],
            paddingTop: '3em',
            paddingBottom: '10px',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
            cards: true,
            cardsOptions: {
                fadeBackground: true,
                fadeContent: true,
                perspective: 100,
            },

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

            lazyLoading: true,

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });
    });

    $.fn.fullpage.moveSectionUp();

    $.fn.fullpage.moveSectionDown();

    $.fn.fullpage.moveTo('firstSlide', 2);

    $.fn.fullpage.moveTo(3, 0);

    $.fn.fullpage.moveTo(3);

    $.fn.fullpage.silentMoveTo('firstSlide', 2);

    $.fn.fullpage.moveSlideRight();

    $.fn.fullpage.moveSlideLeft();

    $.fn.fullpage.setAutoScrolling(false);

    $.fn.fullpage.setFitToSection(false);

    $.fn.fullpage.fitToSection();

    $.fn.fullpage.setLockAnchors(false);

    $.fn.fullpage.setAllowScrolling(false);

    $.fn.fullpage.setAllowScrolling(false, 'down');

    $.fn.fullpage.setAllowScrolling(false, 'down, right');

    $.fn.fullpage.setKeyboardScrolling(false);

    $.fn.fullpage.setKeyboardScrolling(false, 'down');

    $.fn.fullpage.setKeyboardScrolling(false, 'down, right');

    $.fn.fullpage.setRecordHistory(false);

    $.fn.fullpage.setScrollingSpeed(700);

    $.fn.fullpage.destroy();

    $.fn.fullpage.destroy('all');

    $.fn.fullpage.reBuild();

    $.fn.fullpage.setResponsive(true);

    $.fn.fullpage.responsiveSlides.toSections();

    $.fn.fullpage.responsiveSlides.toSlides();
}
