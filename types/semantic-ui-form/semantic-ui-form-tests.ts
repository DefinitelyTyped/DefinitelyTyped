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
    $(selector).form('is valid', 'field'); // $ExpectType boolean
    $(selector).form('add rule', 'field', 'rule'); // $ExpectType JQuery<HTMLElement>
    $(selector).form('add rule', 'field', ['rule1', 'rule2']); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).form('add rule', 'field', {
        rules: [{
            type: 'type',
            prompt: 'prompt'
        }]
    });
    $(selector).form('add field', 'field', 'rule'); // $ExpectType JQuery<HTMLElement>
    $(selector).form('add field', 'field', ['rule1', 'rule2']); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).form('add field', 'field', {
        rules: [{
            type: 'type',
            prompt: 'prompt'
        }]
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).form('add fields', {
        field1: 'rule',
        field2: ['rule1', 'rule2']
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).form('remove rule', 'field', {
        type: 'type',
        prompt: 'prompt'
    });
    $(selector).form('remove field', 'field'); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).form('remove rules', 'field', [{
        type: 'type',
        prompt: 'prompt'
    }]);
    // $ExpectType JQuery<HTMLElement>
    $(selector).form('remove rules', ['field1', 'field2'], [{
        type: 'type',
        prompt: 'prompt'
    }]);
    $(selector).form('remove fields', ['field1', 'field2']); // $ExpectType JQuery<HTMLElement>
    $(selector).form('add prompt', 'identifier', 'error'); // $ExpectType JQuery<HTMLElement>
    $(selector).form('add prompt', 'identifier', ['error1', 'error2']); // $ExpectType JQuery<HTMLElement>
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
    $(selector).form({ foo: 1 }); // $ExpectError
}

function adding_rules_programmatically() {
    {
        // lets only validate username to start
        $('.add.example .ui.form')
            .form({
                username: ['empty', 'minLength[5]']
            });
    }
    {
        // lets toggle some validation based on button
        $('.add.example .ui.positive.button')
            .on('click', () => {
                $('.add.example .ui.form')
                // adding longform
                    .form('add rule', 'gender', {
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'Entering your gender is necessary'
                            }
                        ]
                    })
                    // adding shorthand
                    .form('add rule', 'password', ['empty', 'minLength[5]']);
            });
    }
    {
        $('.add.example .ui.negative.button')
            .on('click', () => {
                $('.add.example .ui.form')
                // removing multiple at once
                    .form('remove fields', ['gender', 'password']);
            });
    }
}

function setting_site_defaults() {
    {
        $.fn.form.settings.defaults = {
            email: {
                identifier: 'email',
                rules: [
                    {
                        type: 'email',
                        prompt: 'Please enter a valid e-mail'
                    }
                ]
            },
            // this form doesn't have a cc email but it will not produce an error
            ccEmail: {
                identifier: 'cc-email',
                optional: true,
                rules: [
                    {
                        type: 'email',
                        prompt: 'Please enter a valid second e-mail'
                    }
                ]
            },
        };
    }
}

import form = require('semantic-ui-form');

function test_module() {
    form; // $ExpectType Form
    $.fn.form = form;
}
