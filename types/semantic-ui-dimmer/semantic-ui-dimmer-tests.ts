function test_dimmer_settings() {
    $.fn.dimmer.settings.error!.method = 'method';
    $.fn.dimmer.settings.namespace = 'namespace';
    $.fn.dimmer.settings.name = 'name';
    $.fn.dimmer.settings.silent = false;
    $.fn.dimmer.settings.debug = true;
    $.fn.dimmer.settings.performance = true;
    $.fn.dimmer.settings.verbose = true;
}

function test_dimmer() {
    const selector = '.ui.dimmer';
    $(selector).dimmer('add content', $()); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('show'); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('hide'); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('toggle'); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('set opacity', 1); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('create'); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('get duration'); // $ExpectType number
    $(selector).dimmer('get dimmer'); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('has dimmer'); // $ExpectType boolean
    $(selector).dimmer('is active'); // $ExpectType boolean
    $(selector).dimmer('is animating'); // $ExpectType boolean
    $(selector).dimmer('is dimmer'); // $ExpectType boolean
    $(selector).dimmer('is dimmable'); // $ExpectType boolean
    $(selector).dimmer('is disabled'); // $ExpectType boolean
    $(selector).dimmer('is enabled'); // $ExpectType boolean
    $(selector).dimmer('is page'); // $ExpectType boolean
    $(selector).dimmer('is page dimmer'); // $ExpectType boolean
    $(selector).dimmer('set active'); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('set dimmable'); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('set dimmed'); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('set page dimmer'); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('set disabled'); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).dimmer('setting', 'debug'); // $ExpectType boolean
    $(selector).dimmer('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).dimmer('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
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
            this; // $ExpectType JQuery<HTMLElement>
        },
        onHide() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onChange() {
            this; // $ExpectType JQuery<HTMLElement>
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
    });
    $(selector).dimmer(); // $ExpectType JQuery<HTMLElement>

    // @ts-expect-error
    $(selector).dimmer('foo');
    // @ts-expect-error
    $(selector).dimmer({ foo: 'bar' });
}

import dimmer = require('semantic-ui-dimmer');

function test_module() {
    dimmer; // $ExpectType Dimmer
    $.fn.dimmer = dimmer;
}
