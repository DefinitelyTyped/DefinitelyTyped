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
            this; // $ExpectType HTMLElement
        },
        onChecked() {
            this; // $ExpectType HTMLElement
        },
        onIndeterminate() {
            this; // $ExpectType HTMLElement
        },
        onDeterminate() {
            this; // $ExpectType HTMLElement
        },
        onUnchecked() {
            this; // $ExpectType HTMLElement
        },
        beforeChecked() {
            this; // $ExpectType HTMLElement

            return false;
        },
        beforeIndeterminate() {
            this; // $ExpectType HTMLElement

            return false;
        },
        beforeDeterminate() {
            this; // $ExpectType HTMLElement

            return false;
        },
        beforeUnchecked() {
            this; // $ExpectType HTMLElement

            return false;
        },
        onEnable() {
            this; // $ExpectType HTMLElement
        },
        onDisable() {
            this; // $ExpectType HTMLElement
        },
        onEnabled() {
            this; // $ExpectType HTMLElement
        },
        onDisabled() {
            this; // $ExpectType HTMLElement
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
