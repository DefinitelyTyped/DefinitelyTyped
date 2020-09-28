import Parameter = require('parameter');

// Constructor
new Parameter();
new Parameter({});
new Parameter({
    translate(message, ...args) {
        return 'string';
    },
    validateRoot: true,
    convert: true,
    widelyUndefined: true,
});
new Parameter({
    validateRoot: false,
    convert: false,
    widelyUndefined: false,
});

// Instance
const parameter = new Parameter();

// #addRule
parameter.addRule('typeA', /test/);
parameter.addRule('typeB', (rule, value) => {
    const typeB: 'typeB' = rule.type;

    if (value) {
        return 'string';
        return [
            {
                code: 'string',
                message: 'string',
            },
            {
                code: 'string',
                message: 'string',
                field: 'string',
            },
        ];
        return [];
    }
});
parameter.addRule('typeD', /test/, true);
parameter.addRule('typeD', /test/, true, 'int');
parameter.addRule('typeD', /test/, true, 'number');
parameter.addRule('typeD', /test/, true, 'string');
parameter.addRule('typeD', /test/, true, 'bool');
parameter.addRule('typeD', /test/, true, 'boolean');
parameter.addRule('typeD', /test/, true, value => value);
Parameter.addRule('typeE', /test/);

// #addRule(type, check, convertType)
parameter.addRule('typeF', /test/, 'boolean');
Parameter.addRule('typeG', /test/, 'boolean');

// #validate
parameter.validate({}, null);
parameter.validate(
    {
        abbr_int: 'int',
        abbr_int_optional: 'int?',
        abbr_integer: 'integer',
        abbr_integer_optional: 'integer?',
        abbr_number: 'number',
        abbr_number_optional: 'number?',
        abbr_date: 'date',
        abbr_date_optional: 'date?',
        abbr_dateTime: 'dateTime',
        abbr_dateTime_optional: 'dateTime?',
        abbr_datetime: 'datetime',
        abbr_datetime_optional: 'datetime?',
        abbr_id: 'id',
        abbr_id_optional: 'id?',
        abbr_boolean: 'boolean',
        abbr_boolean_optional: 'boolean?',
        abbr_bool: 'bool',
        abbr_bool_optional: 'bool?',
        abbr_string: 'string',
        abbr_string_optional: 'string?',
        abbr_email: 'email',
        abbr_email_optional: 'email?',
        abbr_password: 'password',
        abbr_password_optional: 'password?',
        abbr_object: 'object',
        abbr_object_optional: 'object?',
        abbr_array: 'array',
        abbr_array_optional: 'array?',
        abbr_enum: ['', 0, null, undefined],
        abbr_regex: /test/,
        rule_any_string: {
            type: 'any_string',
        },
        rule_base_1: {
            type: 'any_string',
            required: false,
            convertType: 'int',
            default: 0,
            widelyUndefined: false,
        },
        rule_base_2: {
            type: 'any_string',
            required: true,
            convertType: 'bool',
            default: '',
            widelyUndefined: true,
        },
        rule_base_3: {
            type: 'any_string',
            convertType: 'boolean',
        },
        rule_base_4: {
            type: 'any_string',
            convertType: 'number',
        },
        rule_base_5: {
            type: 'any_string',
            convertType: 'string',
        },
        rule_int: {
            type: 'int',
        },
        rule_int_optional: {
            type: 'int?',
        },
        rule_integer: {
            type: 'integer',
        },
        rule_integer_optional: {
            type: 'integer?',
        },
        rule_number: {
            type: 'number',
        },
        rule_number_optional: {
            type: 'number?',
        },
        rule_string: {
            type: 'string',
        },
        rule_string_optional: {
            type: 'string?',
        },
        rule_id: {
            type: 'id',
        },
        rule_id_optional: {
            type: 'id?',
        },
        rule_date: {
            type: 'date',
        },
        rule_date_optional: {
            type: 'date?',
        },
        rule_dateTime: {
            type: 'dateTime',
        },
        rule_dateTime_optional: {
            type: 'dateTime?',
        },
        rule_datetime: {
            type: 'datetime',
        },
        rule_datetime_optional: {
            type: 'datetime?',
        },
        rule_boolean: {
            type: 'boolean',
        },
        rule_boolean_optional: {
            type: 'boolean?',
        },
        rule_bool: {
            type: 'bool',
        },
        rule_bool_optional: {
            type: 'bool?',
        },
        rule_array: {
            type: 'array',
        },
        rule_array_optional: {
            type: 'array?',
        },
        rule_object: {
            type: 'object',
        },
        rule_object_optional: {
            type: 'object?',
        },
        rule_enum: {
            type: 'enum',
        },
        rule_enum_optional: {
            type: 'enum?',
        },
        rule_email: {
            type: 'email',
        },
        rule_email_optional: {
            type: 'email?',
        },
        rule_password: {
            type: 'password',
        },
        rule_password_optional: {
            type: 'password?',
        },
        rule_url: {
            type: 'url',
        },
        rule_url_optional: {
            type: 'url?',
        },
    },
    {},
);

// rules
const rule_number_param: Parameter.ParameterRuleNumber = {
    type: 'number',
    max: 10,
    min: 10,
};
const rule_string_param: Parameter.ParameterRuleString = {
    type: 'string',
    max: 10,
    min: 10,
    allowEmpty: true,
    empty: true,
    format: /test/,
    trim: true,
};
const rule_id_param: Parameter.ParameterRuleID = {
    type: 'id',
    allowEmpty: true,
};
const rule_date_param: Parameter.ParameterRuleDateTime = {
    type: 'date',
    allowEmpty: true,
};
const rule_array_param: Parameter.ParameterRuleArray = {
    type: 'array',
    itemType: 'string',
    rule: { test: 'string' },
    min: 10,
    max: 10,
};
const rule_object_param: Parameter.ParameterRuleObject = {
    type: 'object',
    rule: { test: 'string' },
};
const rule_enum_param: Parameter.ParameterRuleEnum = {
    type: 'enum',
    values: [0, '', null],
};
const rule_email_param: Parameter.ParameterRuleEmail = {
    type: 'email',
    message: 'string',
    allowEmpty: true,
};
const rule_password_param: Parameter.ParameterRulePassword = {
    type: 'password',
    compare: 'string',
    max: 10,
    min: 10,
    allowEmpty: true,
    empty: true,
    trim: true,
};
const rule_url_param: Parameter.ParameterRuleUrl = {
    type: 'url',
};

// Error
const errorA: Parameter.ValidateError = {
    code: 'string',
    message: 'string',
};

const errorB: Parameter.ValidateError = {
    code: 'string',
    field: 'string',
    message: 'string',
};
