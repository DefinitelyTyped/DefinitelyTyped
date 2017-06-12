function test_dimmer_settings() {
    $.fn.dimmer.settings.error.method = 'method';
    $.fn.dimmer.settings.namespace = 'namespace';
    $.fn.dimmer.settings.name = 'name';
    $.fn.dimmer.settings.silent = false;
    $.fn.dimmer.settings.debug = true;
    $.fn.dimmer.settings.performance = true;
    $.fn.dimmer.settings.verbose = true;
}

function test_dimmer() {
    const selector = '.ui.dimmer';
    $(selector).dimmer('add content', $()) === $();
    $(selector).dimmer('show') === $();
    $(selector).dimmer('hide') === $();
    $(selector).dimmer('toggle') === $();
    $(selector).dimmer('set opacity', 1) === $();
    $(selector).dimmer('create') === $();
    $(selector).dimmer('get duration') === 10;
    $(selector).dimmer('get dimmer') === $();
    $(selector).dimmer('has dimmer') === true;
    $(selector).dimmer('is active') === true;
    $(selector).dimmer('is animating') === true;
    $(selector).dimmer('is dimmer') === true;
    $(selector).dimmer('is dimmable') === true;
    $(selector).dimmer('is disabled') === true;
    $(selector).dimmer('is enabled') === true;
    $(selector).dimmer('is page') === true;
    $(selector).dimmer('is page dimmer') === true;
    $(selector).dimmer('set active') === $();
    $(selector).dimmer('set dimmable') === $();
    $(selector).dimmer('set dimmed') === $();
    $(selector).dimmer('set page dimmer') === $();
    $(selector).dimmer('set disabled') === $();
    $(selector).dimmer('destroy') === $();
    $(selector).dimmer('setting', 'debug', undefined) === false;
    $(selector).dimmer('setting', 'debug') === false;
    $(selector).dimmer('setting', 'debug', true) === $();
    $(selector).dimmer('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).dimmer({
        opacity: 1,
        variation: 'variation',
        dimmerName: 'dimmerName',
        closable: true,
        on: 'click',
        useCSS: true,
        duration: {
            show: 200,
            hide: 300
        },
        transition: 'fade',
        onShow() {
            this === $();
        },
        onHide() {
            this === $();
        },
        onChange() {
            this === $();
        },
        selector: {
            dimmable: '.dimmable',
            dimmer: '.dimmer',
            content: '.content'
        },
        template: {
            dimmer() {
                return $();
            }
        },
        className: {
            active: 'active',
            dimmable: 'dimmable',
            dimmed: 'dimmed',
            disabled: 'disabled',
            pageDimmer: 'pageDimmer',
            hide: 'hide',
            show: 'show',
            transition: 'transition'
        },
        error: {
            method: 'method'
        }
    }) === $();
    $(selector).dimmer() === $();
}

import dimmer = require('semantic-ui-dimmer');

function test_module() {
    $.fn.dimmer = dimmer;
}
