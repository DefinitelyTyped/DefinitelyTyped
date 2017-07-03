function test_modal_static() {
    $.fn.modal.settings.error.method = 'method';
    $.fn.modal.settings.namespace = 'namespace';
    $.fn.modal.settings.name = 'name';
    $.fn.modal.settings.silent = false;
    $.fn.modal.settings.debug = true;
    $.fn.modal.settings.performance = true;
    $.fn.modal.settings.verbose = true;
}

function test_modal() {
    const selector = '.ui.modal';
    $(selector).modal('show') === $();
    $(selector).modal('hide') === $();
    $(selector).modal('toggle') === $();
    $(selector).modal('refresh') === $();
    $(selector).modal('show dimmer') === $();
    $(selector).modal('hide dimmer') === $();
    $(selector).modal('hide others') === $();
    $(selector).modal('hide all') === $();
    $(selector).modal('cache sizes') === $();
    $(selector).modal('can fit') === true;
    $(selector).modal('is active') === true;
    $(selector).modal('set active') === $();
    $(selector).modal('attach events', 'selector', 'blur') === $();
    $(selector).modal('destroy') === $();
    $(selector).modal('setting', 'debug', undefined) === false;
    $(selector).modal('setting', 'debug') === false;
    $(selector).modal('setting', 'debug', true) === $();
    $(selector).modal('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
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
        },
        transition: 'scale',
        duration: 400,
        queue: true,
        onShow() {
            this === $();
        },
        onVisible() {
            this === $();
        },
        onHide($element) {
            this === $();
            $element === $();
            return false;
        },
        onHidden() {
            this === $();
        },
        onApprove($element) {
            this === $();
            $element === $();
            return false;
        },
        onDeny($element) {
            this === $();
            $element === $();
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
    }) === $();
    $(selector).modal() === $();
}

import modal = require('semantic-ui-modal');

function test_module() {
    $.fn.modal = modal;
}
