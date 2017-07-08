function test_static() {
    $.fn.transition.settings.error.method = 'method';
    $.fn.transition.settings.namespace = 'namespace';
    $.fn.transition.settings.name = 'name';
    $.fn.transition.settings.silent = false;
    $.fn.transition.settings.debug = true;
    $.fn.transition.settings.performance = true;
    $.fn.transition.settings.verbose = true;
}

function test_transition() {
    const selector = '.ui.transition';
    $(selector).transition('stop') === $();
    $(selector).transition('stop all') === $();
    $(selector).transition('clear queue') === $();
    $(selector).transition('show') === $();
    $(selector).transition('hide') === $();
    $(selector).transition('toggle') === $();
    $(selector).transition('force repaint') === $();
    $(selector).transition('repaint') === $();
    $(selector).transition('reset') === $();
    $(selector).transition('looping') === $();
    $(selector).transition('remove looping') === $();
    $(selector).transition('disable') === $();
    $(selector).transition('enable') === $();
    $(selector).transition('set duration', 10) === $();
    $(selector).transition('save conditions') === $();
    $(selector).transition('restore conditions') === $();
    $(selector).transition('get animation name') === 'animation name';
    $(selector).transition('get animation event') === 'animation event';
    $(selector).transition('is visible') === false;
    $(selector).transition('is animating') === false;
    $(selector).transition('is looping') === false;
    $(selector).transition('is supported') === false;
    $(selector).transition('destroy') === $();
    $(selector).transition('setting', 'debug', undefined) === false;
    $(selector).transition('setting', 'debug') === false;
    $(selector).transition('setting', 'debug', true) === $();
    $(selector).transition('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).transition('fade') === $();
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
            this === $();
        },
        onHide() {
            this === $();
        },
        onStart() {
            this === $();
        },
        onComplete() {
            this === $();
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
    }) === $();
    $(selector).transition() === $();
}

import transition = require('semantic-ui-transition');

function test_module() {
    $.fn.transition = transition;
}
