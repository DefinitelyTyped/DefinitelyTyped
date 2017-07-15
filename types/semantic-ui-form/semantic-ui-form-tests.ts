function test_form_static() {
    $.fn.form.settings.error!.method = 'method';
    $.fn.form.settings.namespace = 'namespace';
    $.fn.form.settings.name = 'name';
    $.fn.form.settings.silent = false;
    $.fn.form.settings.debug = true;
    $.fn.form.settings.performance = true;
    $.fn.form.settings.verbose = true;
}

function test_form() {
    const selector = '.ui.form';
    $(selector).form('submit'); // $ExpectType JQuery<HTMLElement>
    $(selector).form('is valid'); // $ExpectType boolean
    $(selector).form('validate form'); // $ExpectType JQuery<HTMLElement>
    $(selector).form('get change event') === 'change event';
    $(selector).form('get field', 'id'); // $ExpectType JQuery<HTMLElement>
    $(selector).form('get value', 'id'); // $ExpectType any
    $(selector).form('get values', ['id1', 'id2']); // $ExpectType any
    $(selector).form('set value', 'id'); // $ExpectType JQuery<HTMLElement>
    $(selector).form('set values', ['id1', 'id2']); // $ExpectType JQuery<HTMLElement>
    $(selector).form('get validation', $()); // $ExpectType any
    $(selector).form('has field', 'identifier'); // $ExpectType boolean
    $(selector).form('add errors', ['error1', 'error2']); // $ExpectType JQuery<HTMLElement>
    $(selector).form('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).form('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).form('setting', 'debug'); // $ExpectType boolean
    $(selector).form('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).form('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).form({
        keyboardShortcuts: false,
        on: 'submit',
        revalidate: true,
        delay: false,
        inline: false,
        transition: 'fade',
        duration: 22,
        fields: {
            field1: 'field1',
            field2: ['field1', 'field2'],
            field3: {
                identifier: 'identifier',
                rules: [
                    {
                        type: 'type',
                        prompt: 'prompt'
                    },
                    {
                        type: 'type',
                        prompt: 'prompt'
                    }
                ]
            }
        },
        text: {
            unspecifiedRule: 'unspecifiedRule',
            unspecifiedField: 'unspecifiedField'
        },
        prompt: {
            empty: 'empty',
            checked: 'checked',
            email: 'email',
            url: 'url',
            regExp: 'regExp',
            integer: 'integer',
            decimal: 'decimal',
            number: 'number',
            is: 'is',
            isExactly: 'isExactly',
            not: 'not',
            notExactly: 'notExactly',
            contain: 'contain',
            containExactly: 'containExactly',
            doesntContain: 'doesntContain',
            doesntContainExactly: 'doesntContainExactly',
            minLength: 'minLength',
            length: 'length',
            exactLength: 'exactLength',
            maxLength: 'maxLength',
            match: 'match',
            different: 'different',
            creditCard: 'creditCard',
            minCount: 'minCount',
            exactCount: 'exactCount',
            maxCount: 'maxCount'
        },
        onValid() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onInvalid() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onSuccess(event, fields) {
            this; // $ExpectType JQuery<HTMLElement>
            event; // $ExpectType Event<HTMLElement, null>
            fields; // $ExpectType any
        },
        onFailure(formErrors, fields) {
            this; // $ExpectType JQuery<HTMLElement>
            formErrors; // $ExpectType string[]
            fields; // $ExpectType any
        },
        templates: {
            error(errors) {
                errors; // $ExpectType string[]

                return $();
            },
            prompt(errors) {
                errors; // $ExpectType string[]

                return $();
            }
        },
        rules: {
            empty(value) {
                this; // $ExpectType HTMLElement
                value; // $ExpectType any

                return !(value === undefined || '' === value || $.isArray(value) && value.length === 0);
            },
            checked() {
                this; // $ExpectType HTMLElement

                return ($(this).filter(':checked').length > 0);
            }
        },
        selector: {
            message: 'message',
            field: 'field',
            group: 'group',
            input: 'input',
            prompt: 'prompt',
            submit: 'submit'
        },
        metadata: {
            validate: 'validate'
        },
        className: {
            active: 'active',
            placeholder: 'placeholder',
            disabled: 'disabled',
            visible: 'visible'
        },
        error: {
            method: 'method'
        }
    });
    $(selector).form(); // $ExpectType JQuery<HTMLElement>

    $(selector).form('foo'); // $ExpectError
    $(selector).form({ foo: 'bar' }); // $ExpectError
}

import form = require('semantic-ui-form');

function test_module() {
    form; // $ExpectType Form
    $.fn.form = form;
}
