import mod = require('smooth-scroll');


//////////////////
// Import Tests //
//////////////////
namespace import_tests {
    smoothScroll = mod;
}


//////////////////////////////////////////////////////////////////////////////
// init Tests: https://github.com/cferdinandi/smooth-scroll#global-settings //
//////////////////////////////////////////////////////////////////////////////
namespace init_tests {
    {
        smoothScroll.init()
        smoothScroll.init({})
        smoothScroll.init({
            selector: '[data-scroll]',
            selectorHeader: '[data-scroll-header]',
            speed: 500,
            easing: 'easeInOutCubic',
            offset: 0,
            callback: function (anchor, toggle) {
                let ele: Element;
                ele = anchor;
                toggle = toggle;
            }
        })
    }
}


////////////////////////////////////////////////////////////////////////////////////////
/// animateScroll Tests : https://github.com/cferdinandi/smooth-scroll#animatescroll ///
////////////////////////////////////////////////////////////////////////////////////////
namespace animate_scroll_tests {
    // It's Example 1 from offical doc
    {
        let anchor = document.querySelector('#bazinga');
        smoothScroll.animateScroll(anchor);
    }

    // It's Example 2 from offical doc
    {
        let anchor = document.querySelector('#bazinga');
        let toggle = document.querySelector('#toggle');
        let easing: 'easeOutCubic' = 'easeOutCubic';
        let options = { speed: 1000, easing: easing };
        smoothScroll.animateScroll(anchor, toggle, options);
    }

    // It's Example 3 from offical doc
    {
        smoothScroll.animateScroll(750);
    } 
}


////////////////////////////////////////////////////////////////////////////
/// destroy Tests : https://github.com/cferdinandi/smooth-scroll#destroy ///
////////////////////////////////////////////////////////////////////////////
namespace destroy_tests {
    {
        smoothScroll.destroy();
    }
}
