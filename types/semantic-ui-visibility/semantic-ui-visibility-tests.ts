function test_visibility_static() {
    $.fn.visibility.settings.error!.method = 'method';
    $.fn.visibility.settings.namespace = 'namespace';
    $.fn.visibility.settings.name = 'name';
    $.fn.visibility.settings.silent = false;
    $.fn.visibility.settings.debug = true;
    $.fn.visibility.settings.performance = true;
    $.fn.visibility.settings.verbose = true;
}

function test_visibility() {
    const selector = '.ui.visibility';
    $(selector).visibility('disable callbacks'); // $ExpectType JQuery<HTMLElement>
    $(selector).visibility('enable callbacks'); // $ExpectType JQuery<HTMLElement>
    $(selector).visibility('is on screen'); // $ExpectType boolean
    $(selector).visibility('is off screen'); // $ExpectType boolean
    $(selector).visibility('get pixels passed'); // $ExpectType number
    $(selector).visibility('get element calculations'); // $ExpectType ElementCalculations
    $(selector).visibility('get screen calculations'); // $ExpectType ScreenCalculations
    $(selector).visibility('get screen size'); // $ExpectType ScreenSize
    $(selector).visibility('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).visibility('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).visibility('setting', 'debug'); // $ExpectType boolean
    $(selector).visibility('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).visibility('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).visibility({
        once: false,
        continuous: true,
        type: 'image',
        initialCheck: false,
        context: $(),
        refreshOnLoad: true,
        refreshOnResize: false,
        checkOnRefresh: true,
        zIndex: 2,
        offset: 3,
        includeMargin: false,
        throttle: 10,
        observeChanges: true,
        transition: 'fade',
        duration: 5,
        onTopVisible() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onTopPassed() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onBottomVisible() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onPassing() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onBottomPassed() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onTopVisibleReverse() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onTopPassedReverse() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onBottomVisibleReverse() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onPassingReverse() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onBottomPassedReverse() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onOnScreen() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onOffScreen() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onLoad() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onAllLoaded() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onFixed() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onUnfixed() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onUpdate(calculations) {
            this; // $ExpectType JQuery<HTMLElement>
            calculations; // $ExpectType ElementCalculations
        },
        onRefresh() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        className: {
            fixed: 'fixed',
        },
        error: {
            method: 'method'
        }
    });
    $(selector).visibility(); // $ExpectType JQuery<HTMLElement>

    $(selector).visibility('foo'); // $ExpectError
    $(selector).visibility({ foo: 'bar' }); // $ExpectError
}

import visibility = require('semantic-ui-visibility');

function test_module() {
    visibility; // $ExpectType Visibility
    $.fn.visibility = visibility;
}
