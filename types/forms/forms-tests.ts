import { create, fields, validators, widgets, FieldBound } from 'forms';

const complexForm = create({
    name: fields.string({ required: validators.required('%s is required, silly!') }),
    email: fields.email({ required: true, label: 'Email Address' }),
    website: fields.url(),
    password: fields.password({ required: true }),
    password_confirm: fields.password({
        required: true,
        validators: [validators.matchField('password')]
    }),
    phone_1: fields.string({ validators: [validators.requiresFieldIfEmpty('phone_2')] }),
    phone_2: fields.string({ validators: [validators.requiresFieldIfEmpty('phone_1')] }),
    options: fields.string({
        choices: {
            one: 'option one',
            two: 'option two',
            three: 'option three'
        },
        widget: widgets.select(),
        validators: [ (form, field, callback) => {
            if (field.data === 'two') {
                callback('two?! are you crazy?!');
            } else {
                callback();
            }
        } ]
    }),
    more_options: fields.array({
        choices: { one: 'item 1', two: 'item 2', three: 'item 3' },
        widget: widgets.multipleCheckbox()
    }),
    even_more: fields.string({
        choices: { one: 'item 1', two: 'item 2', three: 'item 3' },
        widget: widgets.multipleRadio()
    }),
    and_more: fields.array({
        choices: { one: 'item 1', two: 'item 2', three: 'item 3' },
        widget: widgets.multipleSelect()
    }),
    notes: fields.string({ widget: widgets.textarea({ rows: 6 }) }),
    spam_me: fields.boolean(),
    nested_1: {
        nested_2: {
            nested: fields.string()
        }
    },
    bootstrapTitle: fields.string({
        required: true,
        widget: widgets.text({ classes: [ 'input-with-feedback' ] }),
        errorAfterField: true,
        cssClasses: {
            label: [ 'control-label col col-lg-3' ]
        }
    })
});

const output = complexForm.toHTML();
const bootstrapOutput = complexForm.toHTML((name, object) => {
    if (!Array.isArray(object.widget.classes)) {
        object.widget.classes = [];
    }

    if (object.widget.classes.indexOf('form-control') === -1) {
        object.widget.classes.push('form-control');
    }

    const validationclass = object.error ? 'has-error' : '';
    const label = object.labelHTML(name);
    const widget = object.widget.toHTML(name, object);
    const error = object.error ? `<div class="alert alert-error help-block">${object.error}</div>` : '';

    return `<div class="form-group row ${validationclass}">${label}${widget}${error}</div>`;
});
