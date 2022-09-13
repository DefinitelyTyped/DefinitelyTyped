import { lory } from 'lory.js';

(function() {
    var elm = document.querySelector('.js-foo');
    var elm2 = document.querySelector('.js-bar');
    var elm3 = document.querySelector('.js-baz');
    var elm4 = document.querySelector('.js-foobar');

    //////////////////////////////////////////////////
    //  Init
    //////////////////////////////////////////////////

    lory(elm);

    // with options
    lory(elm2, {
        slidesToScroll: 1,
        slideSpeed: 300,
        rewindSpeed: 600,
        snapBackSpeed: 200,
        ease: 'ease',
        initialIndex: 0,
        rewind: true,
        infinite: false,
        classNameFrame: 'js_frame',
        classNameSlideContainer: 'js_slides',
        classNamePrevCtrl: 'js_prev',
        classNameNextCtrl: 'js_next'
    });

    // with callbacks
    lory(elm3, {
        beforeInit: () => { },
        afterInit: () => { },
        beforePrev: () => { return 1; },
        beforeNext: () => { return false; },
        beforeTouch: () => { return ''; },
        beforeResize: () => { }
    });

    // with options & callbacks
    lory(elm4, {
        slidesToScroll: 1,
        slideSpeed: 300,
        rewindSpeed: 600,
        snapBackSpeed: 200,
        ease: 'ease',
        rewind: true,
        infinite: 4,
        beforeInit: () => { return function() { console.log('foo') }; },
        afterInit: () => { return [0, 1]; },
        beforePrev: () => { },
        beforeNext: () => { },
        beforeTouch: () => { },
        beforeResize: () => { return {}; }
    });

    //////////////////////////////////////////////////
    //  Public API
    //////////////////////////////////////////////////

    lory.setup();
    lory.prev();
    lory.next();
    lory.returnIndex();
    lory.reset();
    lory.slideTo(1);
    lory.destroy();
}());
