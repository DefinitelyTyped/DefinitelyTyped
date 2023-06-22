function test_sticky_static() {
    $.fn.sticky.settings.error!.method = 'method';
    $.fn.sticky.settings.namespace = 'namespace';
    $.fn.sticky.settings.name = 'name';
    $.fn.sticky.settings.silent = false;
    $.fn.sticky.settings.debug = true;
    $.fn.sticky.settings.performance = true;
    $.fn.sticky.settings.verbose = true;
}

function test_sticky() {
    const selector = '.ui.sticky';
    $(selector).sticky('refresh'); // $ExpectType JQuery<HTMLElement>
    $(selector).sticky('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).sticky('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).sticky('setting', 'debug'); // $ExpectType boolean
    $(selector).sticky('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).sticky('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).sticky({
        pushing: false,
        setSize: false,
        jitter: 4,
        observeChanges: true,
        context: $(),
        scrollContext: $(),
        offset: 1,
        bottomOffset: 200,
        onReposition() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onScroll() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onStick() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onUnstick() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onTop() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onBottom() {
            this; // $ExpectType JQuery<HTMLElement>
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
    });
    $(selector).sticky(); // $ExpectType JQuery<HTMLElement>

    // @ts-expect-error
    $(selector).sticky('foo');
    // @ts-expect-error
    $(selector).sticky({ foo: 'bar' });
}

import sticky = require('semantic-ui-sticky');

function test_module() {
    sticky; // $ExpectType Sticky
    $.fn.sticky = sticky;
}
