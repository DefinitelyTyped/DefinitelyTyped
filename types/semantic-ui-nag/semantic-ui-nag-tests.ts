function test_nag_static() {
    $.fn.nag.settings.error!.method = 'method';
    $.fn.nag.settings.namespace = 'namespace';
    $.fn.nag.settings.name = 'name';
    $.fn.nag.settings.silent = false;
    $.fn.nag.settings.debug = true;
    $.fn.nag.settings.performance = true;
    $.fn.nag.settings.verbose = true;
}

function test_nag() {
    const selector = '.ui.nag';
    $(selector).nag('show'); // $ExpectType JQuery<HTMLElement>
    $(selector).nag('hide'); // $ExpectType JQuery<HTMLElement>
    $(selector).nag('clear'); // $ExpectType JQuery<HTMLElement>
    $(selector).nag('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).nag('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).nag('setting', 'debug'); // $ExpectType boolean
    $(selector).nag('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).nag('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).nag({
        persist: true,
        displayTime: 0,
        animation: {
            show: 'slide',
            hide: 'slide'
        },
        context: $(),
        detachable: false,
        expires: 30,
        domain: 'domain',
        path: 'path',
        storageMethod: 'localstorage',
        key: 'nag',
        value: 'dismiss',
        speed: 500,
        easing: 'easeOutQuad',
        onHide() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        className: {
            bottom: 'bottom',
            fixed: 'fixed'
        },
        selector: {
            close: 'close'
        },
        error: {
            noCookieStorage: 'noCookieStorage',
            noStorage: 'noStorage',
            method: 'method'
        }
    });
    $(selector).nag(); // $ExpectType JQuery<HTMLElement>

    $(selector).nag('foo'); // $ExpectError
    $(selector).nag({ foo: 'bar' }); // $ExpectError
}

import nag = require('semantic-ui-nag');

function test_module() {
    nag; // $ExpectType Nag
    $.fn.nag = nag;
}
