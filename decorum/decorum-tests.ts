/// <reference path="./decorum.d.ts" />

import {Required} from 'decorum';
import {Email} from 'decorum';
import {MinLength} from 'decorum';
import {MaxLength} from 'decorum';
import {Length} from 'decorum';
import {FieldName} from 'decorum';
import {Validation} from 'decorum';
import {Pattern} from 'decorum';
import {Validator} from 'decorum';
import {BaseValidator} from 'decorum';

class MyModel {
    @FieldName('User name')
    @Required()
    @MaxLength(50)
    username = '';

    @FieldName('Email address')
    @Email()
    @Required('Your email address will be used to send you a confirmation email. You must fill it out')
    emailAddress = '';

    @Required()
    @MinLength(10)
    @MaxLength(30)
    password = '';

    @FieldName('Confirm password')
    @Validation<MyModel>(
        'The passwords do not match.',
        (pwd, model) => model.password === pwd
    )
    confirmPassword = '';

    @Pattern(/^[a-z0-9-]+$/i, 'Must be a valid slug tag')
    slug = 'foo';

    @Length(6, 'Alias must be 6 characters long')
    alias: string;
}

// ES6-style
class MyController {
    model = new MyModel();
    validator = Validator.new(this.model);

    doStuff(): void {
        var opts = this.validator.getValidationOptions('alias');
        var fieldName = opts.getFieldName();
        var errs = opts.validateValue('foo', this.model);
        opts.setFieldName('Foo');
        opts.addValidator(null);
        var validators = opts.getValidators();
    }

    validate(): void {
        var result = this.validator.validate();
        if (!result.isValid) {
            for(var i = 0; i < result.errors.length; i++) {
                var current = result.errors[i];
                console.error(current.fieldName, current.errors);
            }
        }
    }
}

// ES5-style
function MyOtherModel() {
    this.foo = '';
    this.bar = '';
}

Validator.decorate(MyOtherModel, {
    foo: [
        Required()
    ],
    bar: [
        Pattern(/^[a-z][0-9]$/i)
    ]
});

var otherValidator = Validator.new(new MyOtherModel());
otherValidator.validateField('foo', '');

// Custom validator
class MyValidator extends BaseValidator {

    validatesEmptyValue(): boolean {
        return false;
    }

    getMessage(fieldName: string, fieldValue: any): string {
        return 'No!';
    }

    isValid(value: any, model: any): boolean {
        return false;
    }

}
