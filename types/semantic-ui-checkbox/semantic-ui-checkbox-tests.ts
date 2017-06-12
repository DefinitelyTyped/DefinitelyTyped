function test_checkbox_static() {
    $.fn.checkbox.settings.error.method = 'method';
    $.fn.checkbox.settings.namespace = 'namespace';
    $.fn.checkbox.settings.name = 'name';
    $.fn.checkbox.settings.silent = false;
    $.fn.checkbox.settings.debug = true;
    $.fn.checkbox.settings.performance = true;
    $.fn.checkbox.settings.verbose = true;
}

function test_checkbox() {
    const selector = '.ui.checkbox';
    $(selector).checkbox('toggle') === $();
    $(selector).checkbox('check') === $();
    $(selector).checkbox('uncheck') === $();
    $(selector).checkbox('indeterminate') === $();
    $(selector).checkbox('determinate') === $();
    $(selector).checkbox('enable') === $();
    $(selector).checkbox('set checked') === $();
    $(selector).checkbox('set unchecked') === $();
    $(selector).checkbox('set indeterminate') === $();
    $(selector).checkbox('set determinate') === $();
    $(selector).checkbox('set enabled') === $();
    $(selector).checkbox('set disabled') === $();
    $(selector).checkbox('attach events', $(), 'click') === $();
    $(selector).checkbox('is radio') === true;
    $(selector).checkbox('is checked') === true;
    $(selector).checkbox('is unchecked') === true;
    $(selector).checkbox('can change') === true;
    $(selector).checkbox('should allow check') === true;
    $(selector).checkbox('should allow uncheck') === true;
    $(selector).checkbox('should allow determinate') === true;
    $(selector).checkbox('should allow indeterminate') === true;
    $(selector).checkbox('can uncheck') === true;
    $(selector).checkbox('setting', 'debug', undefined) === false;
    $(selector).checkbox('setting', 'debug') === false;
    $(selector).checkbox('setting', 'debug', true) === $();
    $(selector).checkbox('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).checkbox({
        uncheckable: false,
        fireOnInit: true,
        onChange() {
            this === new HTMLElement();
        },
        onChecked() {
            this === new HTMLElement();
        },
        onIndeterminate() {
            this === new HTMLElement();
        },
        onDeterminate() {
            this === new HTMLElement();
        },
        onUnchecked() {
            this === new HTMLElement();
        },
        beforeChecked() {
            this === new HTMLElement();
        },
        beforeIndeterminate() {
            this === new HTMLElement();
        },
        beforeDeterminate() {
            this === new HTMLElement();
        },
        beforeUnchecked() {
            this === new HTMLElement();
        },
        onEnable() {
            this === new HTMLElement();
        },
        onDisable() {
            this === new HTMLElement();
        },
        onEnabled() {
            this === new HTMLElement();
        },
        onDisabled() {
            this === new HTMLElement();
        },
        selector: {
            input: 'input',
            label: 'label'
        },
        className: {
            checked: 'checked',
            disabled: 'disabled',
            radio: 'radio',
            readOnly: 'read-only'
        },
        error: {
            method: 'method'
        }
    }) === $();
    $(selector).checkbox() === $();
}

import checkbox = require('semantic-ui-checkbox');

function test_module() {
    $.fn.checkbox = checkbox;
}
