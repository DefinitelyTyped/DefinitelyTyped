function test_checkbox_static() {
    $.fn.checkbox.settings.error!.method = 'method';
    $.fn.checkbox.settings.namespace = 'namespace';
    $.fn.checkbox.settings.name = 'name';
    $.fn.checkbox.settings.silent = false;
    $.fn.checkbox.settings.debug = true;
    $.fn.checkbox.settings.performance = true;
    $.fn.checkbox.settings.verbose = true;
}

function test_checkbox() {
    const selector = '.ui.checkbox';
    $(selector).checkbox('toggle'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('check'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('uncheck'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('indeterminate'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('determinate'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('enable'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('set checked'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('set unchecked'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('set indeterminate'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('set determinate'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('set enabled'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('set disabled'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('attach events', $(), 'click'); // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('is radio'); // $ExpectType boolean
    $(selector).checkbox('is checked'); // $ExpectType boolean
    $(selector).checkbox('is unchecked'); // $ExpectType boolean
    $(selector).checkbox('can change'); // $ExpectType boolean
    $(selector).checkbox('should allow check'); // $ExpectType boolean
    $(selector).checkbox('should allow uncheck'); // $ExpectType boolean
    $(selector).checkbox('should allow determinate'); // $ExpectType boolean
    $(selector).checkbox('should allow indeterminate'); // $ExpectType boolean
    $(selector).checkbox('can uncheck'); // $ExpectType boolean
    $(selector).checkbox('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).checkbox('setting', 'debug'); // $ExpectType boolean
    $(selector).checkbox('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).checkbox({
        uncheckable: false,
        fireOnInit: true,
        onChange() {
            this; // $ExpectType HTMLInputElement
        },
        onChecked() {
            this; // $ExpectType HTMLInputElement
        },
        onIndeterminate() {
            this; // $ExpectType HTMLInputElement
        },
        onDeterminate() {
            this; // $ExpectType HTMLInputElement
        },
        onUnchecked() {
            this; // $ExpectType HTMLInputElement
        },
        beforeChecked() {
            this; // $ExpectType HTMLInputElement

            return false;
        },
        beforeIndeterminate() {
            this; // $ExpectType HTMLInputElement

            return false;
        },
        beforeDeterminate() {
            this; // $ExpectType HTMLInputElement

            return false;
        },
        beforeUnchecked() {
            this; // $ExpectType HTMLInputElement

            return false;
        },
        onEnable() {
            this; // $ExpectType HTMLInputElement
        },
        onDisable() {
            this; // $ExpectType HTMLInputElement
        },
        onEnabled() {
            this; // $ExpectType HTMLInputElement
        },
        onDisabled() {
            this; // $ExpectType HTMLInputElement
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
    });
    $(selector).checkbox(); // $ExpectType JQuery<HTMLElement>

    $(selector).checkbox('foo'); // $ExpectError
    $(selector).checkbox({ foo: 'bar' }); // $ExpectError
}

import checkbox = require('semantic-ui-checkbox');

function test_module() {
    checkbox; // $ExpectType Checkbox
    $.fn.checkbox = checkbox;
}
