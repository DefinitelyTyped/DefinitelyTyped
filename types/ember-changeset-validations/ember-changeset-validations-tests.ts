import {
    getMessages,
    handleMultipleValidations,
    toDate,
    buildMessage,
    withDefaults,
    wrapInArray,
    BuildMessageResult
} from 'ember-changeset-validations/utils';
import {
    validateFormat,
    validatePresence,
    validateConfirmation,
    validateDate,
    validateExclusion,
    validateInclusion,
    validateLength,
    validateNumber
} from 'ember-changeset-validations/validators';
import type EmberArray from '@ember/array';
import { ValidatorMapFunc } from 'ember-changeset-validations/index';

/** Static assertion that `value` has type `T` */
// Disable tslint here b/c the generic is used to let us do a type coercion and
// validate that coercion works for the type value "passed into" the function.
// tslint:disable-next-line:no-unnecessary-generics
export declare function assertType<T>(value: T): void;

// Testing utils functions

assertType<Record<string, unknown>>(getMessages());

assertType<Promise<unknown> | boolean>(handleMultipleValidations());

assertType<Date>(toDate(new Date()));

const messageData = {
    type: 'date',
    value: 'not a date',
    context: {}
};

assertType<BuildMessageResult | string>(buildMessage('key', messageData));

assertType<Record<string, unknown>>(withDefaults({}, messageData));

assertType<EmberArray<unknown>>(wrapInArray([1, '2', 3, '4', 5]));

// Testing validators

assertType<ValidatorMapFunc>(validateFormat({ type: 'email' }));

assertType<ValidatorMapFunc>(validatePresence({ presence: true, message: '{description} should be present' }));
assertType<ValidatorMapFunc>(validatePresence(true));

assertType<ValidatorMapFunc>(validateConfirmation({ on: 'password' }));

assertType<ValidatorMapFunc>(validateDate({ before: new Date('3000-01-01') }));

assertType<ValidatorMapFunc>(validateExclusion({ list: ['Foo', 'Bar'] }));

assertType<ValidatorMapFunc>(validateInclusion({ range: [18, 60] }));

assertType<ValidatorMapFunc>(validateLength({ min: 4 }));

assertType<ValidatorMapFunc>(validateNumber({ lt: 10 }));
