function test_popup_static() {
    $.fn.popup.settings.error!.method = 'method';
    $.fn.popup.settings.namespace = 'namespace';
    $.fn.popup.settings.name = 'name';
    $.fn.popup.settings.silent = false;
    $.fn.popup.settings.debug = true;
    $.fn.popup.settings.performance = true;
    $.fn.popup.settings.verbose = true;
}

function test_popup() {
    const selector = '.ui.popup';
    $(selector).popup('show'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('hide'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('hide all'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('get popup'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('change content', '<div></div>'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('toggle'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('is visible'); // $ExpectType boolean
    $(selector).popup('is hidden'); // $ExpectType boolean
    $(selector).popup('exists'); // $ExpectType boolean
    $(selector).popup('reposition'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('bind clickaway'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('bind touch close'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('bind close on scroll'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('set position', 'position'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).popup('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).popup('setting', 'debug'); // $ExpectType boolean
    $(selector).popup('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).popup('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
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
            this; // $ExpectType JQuery<HTMLElement>
            $module; // $ExpectType JQuery<HTMLElement>
        },
        onRemove($module) {
            this; // $ExpectType JQuery<HTMLElement>
            $module; // $ExpectType JQuery<HTMLElement>
        },
        onShow($module) {
            this; // $ExpectType JQuery<HTMLElement>
            $module; // $ExpectType JQuery<HTMLElement>

            return false;
        },
        onVisible($module) {
            this; // $ExpectType JQuery<HTMLElement>
            $module; // $ExpectType JQuery<HTMLElement>
        },
        onHide($module) {
            this; // $ExpectType JQuery<HTMLElement>
            $module; // $ExpectType JQuery<HTMLElement>

            return false;
        },
        onHidden($module) {
            this; // $ExpectType JQuery<HTMLElement>
            $module; // $ExpectType JQuery<HTMLElement>
        },
        onUnplaceable($module) {
            this; // $ExpectType JQuery<HTMLElement>
            $module; // $ExpectType JQuery<HTMLElement>
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
            visible: 'visible',
            popupVisible: 'popupVisible'
        },
        error: {
            invalidPosition: 'invalidPosition',
            cannotPlace: 'cannotPlace',
            method: 'method',
            noTransition: 'noTransition',
            notFound: 'notFound'
        }
    });
    $(selector).popup(); // $ExpectType JQuery<HTMLElement>

    // @ts-expect-error
    $(selector).popup('foo');
    // @ts-expect-error
    $(selector).popup({ foo: 'bar' });
}

import popup = require('semantic-ui-popup');

function test_module() {
    popup; // $ExpectType Popup
    $.fn.popup = popup;
}
