function test_static() {
    $.fn.transition.settings.error!.method = 'method';
    $.fn.transition.settings.namespace = 'namespace';
    $.fn.transition.settings.name = 'name';
    $.fn.transition.settings.silent = false;
    $.fn.transition.settings.debug = true;
    $.fn.transition.settings.performance = true;
    $.fn.transition.settings.verbose = true;
}

function test_transition() {
    const selector = '.ui.transition';
    $(selector).transition('stop'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('stop all'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('clear queue'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('show'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('hide'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('toggle'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('force repaint'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('repaint'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('reset'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('looping'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('remove looping'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('disable'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('enable'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('set duration', 10); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('save conditions'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('restore conditions'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('get animation name'); // $ExpectType string
    $(selector).transition('get animation event'); // $ExpectType string
    $(selector).transition('is visible'); // $ExpectType boolean
    $(selector).transition('is animating'); // $ExpectType boolean
    $(selector).transition('is looping'); // $ExpectType boolean
    $(selector).transition('is supported'); // $ExpectType boolean
    $(selector).transition('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).transition('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).transition('setting', 'debug'); // $ExpectType boolean
    $(selector).transition('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).transition('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    $(selector).transition('fade'); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).transition({
        animation: 'fade',
        interval: 200,
        reverse: true,
        displayType: 'inline-block',
        duration: 300,
        useFailSafe: false,
        allowRepeats: true,
        queue: false,
        onShow() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onHide() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onStart() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onComplete() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        className: {
            animating: 'animating',
            disabled: 'disabled',
            hidden: 'hidden',
            inward: 'inward',
            loading: 'loading',
            looping: 'looping',
            outward: 'outward',
            transition: 'transition',
            visible: 'visible'
        },
        error: {
            noAnimation: 'noAnimation',
            method: 'method'
        }
    });
    $(selector).transition(); // $ExpectType JQuery<HTMLElement>

    // @ts-expect-error
    $(selector).transition({ foo: 'bar' });
}

import transition = require('semantic-ui-transition');

function test_module() {
    transition; // $ExpectType Transition
    $.fn.transition = transition;
}
