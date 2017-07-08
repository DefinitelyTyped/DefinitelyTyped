function test_nag_static() {
    $.fn.nag.settings.error.method = 'method';
    $.fn.nag.settings.namespace = 'namespace';
    $.fn.nag.settings.name = 'name';
    $.fn.nag.settings.silent = false;
    $.fn.nag.settings.debug = true;
    $.fn.nag.settings.performance = true;
    $.fn.nag.settings.verbose = true;
}

function test_nag() {
    const selector = '.ui.nag';
    $(selector).nag('show') === $();
    $(selector).nag('hide') === $();
    $(selector).nag('clear') === $();
    $(selector).nag('destroy') === $();
    $(selector).nag('setting', 'debug', undefined) === false;
    $(selector).nag('setting', 'debug') === false;
    $(selector).nag('setting', 'debug', true) === $();
    $(selector).nag('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
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
            this === $();
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
    }) === $();
    $(selector).nag() === $();
}

import nag = require('semantic-ui-nag');

function test_module() {
    $.fn.nag = nag;
}
