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
                let elem: Element;
                elem = anchor;
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
        let easing: smoothScroll.EasingOptions = 'easeOutCubic';
        let options: smoothScroll.SmoothScrollOptions = { speed: 1000, easing: easing };
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
