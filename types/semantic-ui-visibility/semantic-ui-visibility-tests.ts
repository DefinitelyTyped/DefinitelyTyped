function test_visibility_static() {
    $.fn.visibility.settings.error.method = 'method';
    $.fn.visibility.settings.namespace = 'namespace';
    $.fn.visibility.settings.name = 'name';
    $.fn.visibility.settings.silent = false;
    $.fn.visibility.settings.debug = true;
    $.fn.visibility.settings.performance = true;
    $.fn.visibility.settings.verbose = true;
}

function test_visibility() {
    const selector = '.ui.visibility';
    $(selector).visibility('disable callbacks') === $();
    $(selector).visibility('enable callbacks') === $();
    $(selector).visibility('is on screen') === false;
    $(selector).visibility('is off screen') === true;
    $(selector).visibility('get pixels passed') === 20;
    $(selector).visibility('get element calculations') === {
        fits: false,
        offset: {
            top: 955.96875,
            left: 292
        },
        width: 466,
        height: 1665.890625,
        top: 955.96875,
        bottom: 2621.859375,
        topPassed: true,
        bottomPassed: false,
        topVisible: true,
        bottomVisible: false,
        pixelsPassed: 742.03125,
        percentagePassed: 0.44542615155182,
        onScreen: true,
        passing: true,
        offScreen: false
    };
    $(selector).visibility('get screen calculations') === {
        bottom: 2658,
        top: 1698
    };
    $(selector).visibility('get screen size') === {
        height: 960
    };
    $(selector).visibility('destroy') === $();
    $(selector).visibility('setting', 'debug', undefined) === false;
    $(selector).visibility('setting', 'debug') === false;
    $(selector).visibility('setting', 'debug', true) === $();
    $(selector).visibility('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
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
            this === $();
        },
        onTopPassed() {
            this === $();
        },
        onBottomVisible() {
            this === $();
        },
        onPassing() {
            this === $();
        },
        onBottomPassed() {
            this === $();
        },
        onTopVisibleReverse() {
            this === $();
        },
        onTopPassedReverse() {
            this === $();
        },
        onBottomVisibleReverse() {
            this === $();
        },
        onPassingReverse() {
            this === $();
        },
        onBottomPassedReverse() {
            this === $();
        },
        onOnScreen() {
            this === $();
        },
        onOffScreen() {
            this === $();
        },
        onLoad() {
            this === $();
        },
        onAllLoaded() {
            this === $();
        },
        onFixed() {
            this === $();
        },
        onUnfixed() {
            this === $();
        },
        onUpdate(calculations) {
            this === $();
            calculations === {
                fits: false,
                offset: {
                    top: 955.96875,
                    left: 292
                },
                width: 466,
                height: 1665.890625,
                top: 955.96875,
                bottom: 2621.859375,
                topPassed: true,
                bottomPassed: false,
                topVisible: true,
                bottomVisible: false,
                pixelsPassed: 742.03125,
                percentagePassed: 0.44542615155182,
                onScreen: true,
                passing: true,
                offScreen: false
            };
        },
        onRefresh() {
            this === $();
        },
        className: {
            fixed: 'fixed',
        },
        error: {
            method: 'method'
        }
    }) === $();
    $(selector).visibility() === $();
}

import visibility = require('semantic-ui-visibility');

function test_module() {
    $.fn.visibility = visibility;
}
