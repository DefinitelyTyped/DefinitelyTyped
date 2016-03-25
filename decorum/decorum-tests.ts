/// <reference path="./decorum.d.ts" />

import {Required} from 'decorum';
import {Email} from 'decorum';
import {MinLength} from 'decorum';
import {MaxLength} from 'decorum';
import {Length} from 'decorum';
import {FieldName} from 'decorum';
import {Validation} from 'decorum';
import {Pattern} from 'decorum';
import {Alpha} from 'decorum';
import {AlphaNumeric} from 'decorum';
import {Validator} from 'decorum';
import {BaseValidator} from 'decorum';
import {IMessageOpts} from 'decorum';
import {MessageHandlers} from 'decorum';

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

    @Alpha((opts: IMessageOpts) => 'Message overridden for field ' + opts.property + ' with friendly name ' + opts.friendlyName)
    alpha: string;

    @AlphaNumeric((opts: IMessageOpts) => 'Message overridden for field ' + opts.property + ' with friendly name ' + opts.friendlyName)
    alphaNumeric: string;
}

// ES6-style
class MyController {
    model = new MyModel();
    validator = Validator.new(this.model);

    doStuff(): void {
        var opts = this.validator.getValidationOptions('alias');
        var fieldName = opts.getFriendlyName();
        var errs = opts.validateValue('foo', this.model);
        opts.setFriendlyName('Foo');
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
        decorum.Required()
    ],
    bar: [
        decorum.Pattern(/^[a-z][0-9]$/i),
        decorum.FieldName('My bar')
    ]
});

var otherValidator = Validator.new(new MyOtherModel());
otherValidator.validateField('foo', '');

// Custom validator
class MyValidator extends BaseValidator {

    validatesEmptyValue(): boolean {
        return false;
    }

    getMessage(opts: IMessageOpts): string {
        return opts.friendlyName + ' is not a valid thing because of value ' + opts.value + '! Fyi... its property name is ' + opts.property;
    }

    isValid(value: any, model: any): boolean {
        return false;
    }
}

// Message overrides
MessageHandlers['alpha'] = (opts: IMessageOpts) => 'The value ' + opts.value + ' for property ' + opts.property + ' is invalid!';
