function test_modal_static() {
    $.fn.modal.settings.error!.method = 'method';
    $.fn.modal.settings.namespace = 'namespace';
    $.fn.modal.settings.name = 'name';
    $.fn.modal.settings.silent = false;
    $.fn.modal.settings.debug = true;
    $.fn.modal.settings.performance = true;
    $.fn.modal.settings.verbose = true;
}

function test_modal() {
    const selector = '.ui.modal';
    $(selector).modal('show'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('hide'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('toggle'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('refresh'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('show dimmer'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('hide dimmer'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('hide others'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('hide all'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('cache sizes'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('can fit'); // $ExpectType boolean
    $(selector).modal('is active'); // $ExpectType boolean
    $(selector).modal('set active'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('attach events', 'selector', 'blur'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).modal('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).modal('setting', 'debug'); // $ExpectType boolean
    $(selector).modal('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).modal('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).modal({
        detachable: true,
        autofocus: false,
        observeChanges: true,
        allowMultiple: false,
        keyboardShortcuts: true,
        offset: 10,
        context: $(),
        closable: false,
        dimmerSettings: {
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
        },
        transition: 'scale',
        duration: 400,
        queue: true,
        onShow() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onVisible() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onHide($element) {
            this; // $ExpectType JQuery<HTMLElement>
            $element; // $ExpectType JQuery<HTMLElement>

            return false;
        },
        onHidden() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onApprove($element) {
            this; // $ExpectType JQuery<HTMLElement>
            $element; // $ExpectType JQuery<HTMLElement>

            return false;
        },
        onDeny($element) {
            this; // $ExpectType JQuery<HTMLElement>
            $element; // $ExpectType JQuery<HTMLElement>

            return false;
        },
        selector: {
            close: 'close',
            approve: 'approve',
            deny: 'deny'
        },
        className: {
            active: 'active',
            scrolling: 'scrolling'
        },
        error: {
            method: 'method'
        }
    });
    $(selector).modal(); // $ExpectType JQuery<HTMLElement>

    $(selector).modal('foo'); // $ExpectError
    $(selector).modal({ foo: 'bar' }); // $ExpectError
}

import modal = require('semantic-ui-modal');

function test_module() {
    modal; // $ExpectType Modal
    $.fn.modal = modal;
}
