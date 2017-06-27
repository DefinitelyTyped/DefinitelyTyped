function test_popup_static() {
    $.fn.popup.settings.error.method = 'method';
    $.fn.popup.settings.namespace = 'namespace';
    $.fn.popup.settings.name = 'name';
    $.fn.popup.settings.silent = false;
    $.fn.popup.settings.debug = true;
    $.fn.popup.settings.performance = true;
    $.fn.popup.settings.verbose = true;
}

function test_popup() {
    const selector = '.ui.popup';
    $(selector).popup('show') === $();
    $(selector).popup('hide') === $();
    $(selector).popup('hide all') === $();
    $(selector).popup('get popup') === $();
    $(selector).popup('change content', '<div></div>') === $();
    $(selector).popup('toggle') === $();
    $(selector).popup('is visible') === true;
    $(selector).popup('is hidden') === true;
    $(selector).popup('exists') === true;
    $(selector).popup('reposition') === $();
    $(selector).popup('set position', 'position') === $();
    $(selector).popup('destroy') === $();
    $(selector).popup('setting', 'debug', undefined) === false;
    $(selector).popup('setting', 'debug') === false;
    $(selector).popup('setting', 'debug', true) === $();
    $(selector).popup('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).popup({
        popup: $(),
        exclusive: true,
        movePopup: false,
        observeChanges: true,
        boundary: $(),
        context: $(),
        scrollContext: $(),
        jitter: 2,
        position: 'position',
        inline: false,
        preserve: true,
        prefer: 'opposite',
        lastResort: false,
        on: 'manual',
        delay: {
            show: 200,
            hide: 300
        },
        transition: 'fade',
        duration: 50,
        setFluidWidth: true,
        hoverable: true,
        closable: false,
        addTouchEvents: true,
        hideOnScroll: 'auto',
        target: $(),
        distanceAway: 50,
        offset: 2,
        maxSearchDepth: 10,
        onCreate($module) {
            this === $();
            $module === $();
        },
        onRemove($module) {
            this === $();
            $module === $();
        },
        onShow($module) {
            this === $();
            $module === $();
            return false;
        },
        onVisible($module) {
            this === $();
            $module === $();
        },
        onHide($module) {
            this === $();
            $module === $();
            return false;
        },
        onHidden($module) {
            this === $();
            $module === $();
        },
        onUnplaceable($module) {
            this === $();
            $module === $();
        },
        variation: 'variation',
        content: 'content',
        title: 'title',
        html: $(),
        selector: {
            popup: 'popup'
        },
        metadata: {
            content: 'content',
            html: 'html',
            offset: 'offset',
            position: 'position',
            title: 'title',
            variation: 'variation'
        },
        className: {
            loading: 'loading',
            popup: 'popup',
            position: 'top',
            visible: 'visible'
        },
        error: {
            invalidPosition: 'invalidPosition',
            cannotPlace: 'cannotPlace',
            method: 'method',
            noTransition: 'noTransition',
            notFound: 'notFound'
        }
    }) === $();
    $(selector).popup() === $();
}

import popup = require('semantic-ui-popup');

function test_module() {
    $.fn.popup = popup;
}
