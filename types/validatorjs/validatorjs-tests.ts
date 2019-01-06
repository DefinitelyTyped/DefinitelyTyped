import Validator = require('validatorjs');

/**
 * Validation rules
 */

function objectRules() {
    const data: any = { name: 'John' };
    const rules: Validator.Rules = { name: 'required' };
    const validation = new Validator(data, rules);
}

function nestedRules() {
    const data: any = { name: 'John', bio: { age: 28 } };

    const nested: Validator.Rules = {
        name: 'required',
        bio: { age: 'min:18' }
    };
    const flattened: Validator.Rules = {
        name: 'required',
        'bio.age': 'min:18'
    };

    const validation1 = new Validator(data, nested);
    const validation2 = new Validator(data, flattened);
}

function wildcardRules() {
    const data: any = {
        users: [{ name: 'John', bio: { age: 28 } }]
    };

    const rules: Validator.Rules = {
        'users.*.name': 'required',
        'users.*.bio.age': 'min:18'
    };

    const validation = new Validator(data, rules);
}

function arrayRules() {
    const data: any = { name: 'John' };
    const rules: Validator.Rules = { name: ['required', 'string'] };
    const validation = new Validator(data, rules);
}

function typeCheckingRules() {
    const data: any = { age: 30, name: '' };
    const rules: Validator.Rules = {
        age: ['required', { in: [29, 30] }],
        name: [{ required_if: ['age', 30] }]
    };
    const validation = new Validator(data, rules);
}

var rules: Validator.Rules = {
    foo: 'required'
};

var data: any = {
    foo: 'bar'
};


/**
 * Passing validation
 */

var passes: boolean = validator.passes() as boolean;
validator.passes(() => {});

var fails: boolean = validator.fails() as boolean;
validator.fails(() => {});

var check: boolean = validator.check();

/**
 * Validation errors
 */

var errors: Validator.Errors = validator.errors;
var all: Validator.ValidationErrors = errors.all();
var error: Array<string> = errors.get('foo');
var first: string | boolean = errors.first('foo');
var has: boolean = errors.has('foo');

/**
 * Validator
 */

Validator.setMessages('en', {
    integer: 'The :attribute must be an integer.',
    min: {
        numeric: 'The :attribute must be at least :min.',
        string: 'The :attribute must be at least :min characters.'
    }
});
var messages: Validator.ErrorMessages = Validator.getMessages('en');
Validator.useLang('en');
var lang: string = Validator.getDefaultLang();
Validator.setAttributeFormatter((attributes: any) => ({}));
Validator.stopOnError(true);
Validator.register('custom', () => {}, 'error.custom');
Validator.registerAsync('custom', () => {}, 'error.custom');
