function test_sticky_static() {
    $.fn.sticky.settings.error.method = 'method';
    $.fn.sticky.settings.namespace = 'namespace';
    $.fn.sticky.settings.name = 'name';
    $.fn.sticky.settings.silent = false;
    $.fn.sticky.settings.debug = true;
    $.fn.sticky.settings.performance = true;
    $.fn.sticky.settings.verbose = true;
}

function test_sticky() {
    const selector = '.ui.sticky';
    $(selector).sticky('refresh') === $();
    $(selector).sticky('destroy') === $();
    $(selector).sticky('setting', 'debug', undefined) === false;
    $(selector).sticky('setting', 'debug') === false;
    $(selector).sticky('setting', 'debug', true) === $();
    $(selector).sticky('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).sticky({
        pushing: false,
        jitter: 4,
        observeChanges: true,
        context: $(),
        scrollContext: $(),
        offset: 1,
        bottomOffset: 200,
        onReposition() {
            this === $();
        },
        onScroll() {
            this === $();
        },
        onStick() {
            this === $();
        },
        onUnstick() {
            this === $();
        },
        onTop() {
            this === $();
        },
        onBottom() {
            this === $();
        },
        className: {
            bound: 'bound',
            fixed: 'fixed',
            supported: 'supported',
            top: 'top',
            bottom: 'bottom'
        },
        error: {
            container: 'container',
            visible: 'visible',
            method: 'method',
            invalidContext: 'invalidContext',
            elementSize: 'elementSize'
        }
    }) === $();
    $(selector).sticky() === $();
}

import sticky = require('semantic-ui-sticky');

function test_module() {
    $.fn.sticky = sticky;
}
