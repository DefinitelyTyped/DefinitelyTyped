function test_form_static() {
    $.fn.form.settings.error.method = 'method';
    $.fn.form.settings.namespace = 'namespace';
    $.fn.form.settings.name = 'name';
    $.fn.form.settings.silent = false;
    $.fn.form.settings.debug = true;
    $.fn.form.settings.performance = true;
    $.fn.form.settings.verbose = true;
}

function test_form() {
    const selector = '.ui.form';
    $(selector).form('submit') === $();
    $(selector).form('is valid') === false;
    $(selector).form('validate form') === $();
    $(selector).form('get change event') === 'change event';
    $(selector).form('get field', 'id') === $();
    $(selector).form('get value', 'id') === {};
    $(selector).form('get values', ['id1', 'id2']) === {};
    $(selector).form('set value', 'id') === $();
    $(selector).form('set values', ['id1', 'id2']) === $();
    $(selector).form('get validation', $()) === {};
    $(selector).form('has field', 'identifier') === true;
    $(selector).form('add errors', ['error1', 'error2']) === $();
    $(selector).form('destroy') === $();
    $(selector).form('setting', 'debug', undefined) === false;
    $(selector).form('setting', 'debug') === false;
    $(selector).form('setting', 'debug', true) === $();
    $(selector).form('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).form({
        keyboardShortcuts: false,
        on: 'submit',
        revalidate: true,
        delay: 20,
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
            this === $();
        },
        onInvalid() {
            this === $();
        },
        onSuccess(event, fields) {
            this === $();
            event.stopPropagation();
            fields === {};
        },
        onFailure(formErrors, fields) {
            this === $();
            formErrors === [];
            fields === {};
        },
        templates: {
            error(errors) {
                errors === [];
                return $();
            },
            prompt(errors) {
                errors === [];
                return $();
            }
        },
        rules: {
            empty(value) {
                return !(value === undefined || '' === value || $.isArray(value) && value.length === 0);
            },
            checked() {
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
    }) === $();
    $(selector).form() === $();
}

import form = require('semantic-ui-form');

function test_module() {
    $.fn.form = form;
}
