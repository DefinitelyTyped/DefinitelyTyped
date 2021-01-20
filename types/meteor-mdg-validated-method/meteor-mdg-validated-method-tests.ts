// Tests based on https://github.com/meteor/validated-method/blob/master/validated-method-tests.js
// Some new tests added

import {
    ValidatedMethod,
    ValidatedMethodOptions,
    ValidatedMethodOptionsMixinFields,
    ValidatedMethodOptionsWithMixins,
    Mixin,
    GenericMixin,
} from 'meteor/mdg:validated-method';
import { SimpleSchema, SimpleSchemaDefinition } from 'simpl-schema';

const plainMethod = new ValidatedMethod({
    name: 'plainMethod',
    validate: new SimpleSchema({}).validator(),
    run() {
        return 'result';
    },
});

const noArgsMethod = new ValidatedMethod({
    name: 'noArgsMethod',
    validate: null,
    run() {
        return 'result';
    },
});

const methodWithArgs = new ValidatedMethod({
    name: 'methodWithArgs',
    validate: new SimpleSchema({
        int: { type: Number },
        string: { type: String },
    }).validator(),
    run(args: { int: number; string: string }) {
        return 'result';
    },
});

const methodThrowsImmediately = new ValidatedMethod({
    name: 'methodThrowsImmediately',
    validate: null,
    run() {
        throw new Meteor.Error('error');
    },
});

const methodReturnsName = new ValidatedMethod({
    name: 'methodReturnsName',
    validate: null,
    run() {
        return this.name;
    },
});

// mixins can add fields to ValidatedMethodOptions
declare module 'meteor/mdg:validated-method' {
    interface ValidatedMethodOptionsMixinFields<TRunArg, TRunReturn> {
        schema?: SimpleSchema;
    }
}

function schemaMixin(methodOptions: ValidatedMethodOptions<any, any>) {
    methodOptions.validate = methodOptions.schema!.validator();
    return methodOptions;
}

const methodWithSchemaMixin = new ValidatedMethod({
    name: 'methodWithSchemaMixin',
    mixins: [schemaMixin],
    // note that "validate: null," had to be added here - schemaMixin populates validate, but leaving off validate will *normally* crash,
    // and mixins changing the type of ValidatedMethodObjects options is not yet supported
    validate: null,
    schema: new SimpleSchema({
        int: { type: Number },
        string: { type: String },
    }),
    run(args: { int: number; string: string }) {
        return 'result';
    },
});

let resultReceived = false;
const methodWithApplyOptions = new ValidatedMethod({
    name: 'methodWithApplyOptions',
    validate: new SimpleSchema({}).validator(),
    applyOptions: {
        onResultReceived() {
            resultReceived = true;
        },
    },
    run() {
        return 'result';
    },
});

// can call plainMethod with ignored args and with callback
// $ExpectType void
plainMethod.call({}, (error, result) => {});

// can call noArgsMethod with just callback
// $ExpectType void
noArgsMethod.call((error, result) => {});

// can't call methods that have args without those args
// $ExpectError
methodWithArgs.call({}, (error, result) => {});

// can call them with correct args and a callback
// $ExpectType void
methodWithArgs.call(
    {
        int: 5,
        string: 'what',
    },
    (error, result) => {},
);

// can call them with correct args and no callback, and get correct return type
// $ExpectType string
methodWithArgs.call({
    int: 5,
    string: 'what',
});

// can't call methods that have args without those args
// $ExpectError
methodWithSchemaMixin.call({}, (error, result) => {});

// can call them with correct args and a callback
// $ExpectType void
methodWithSchemaMixin.call(
    {
        int: 5,
        string: 'what',
    },
    (error, result) => {},
);

// can call them with correct args and no callback, and get correct return type
// $ExpectType string
methodWithSchemaMixin.call({
    int: 5,
    string: 'what',
});

// mixin can't return void
new ValidatedMethod({
    name: 'methodWithFaultySchemaMixin',
    // $ExpectError
    mixins: [function nonReturningFunction() {}],
    run() {
        return 'result';
    },
});

// mixin can't return void, even with multiple mixins
new ValidatedMethod({
    name: 'methodWithFaultySchemaMixin',
    // $ExpectError
    mixins: [args => args, () => {}],
    run() {
        return 'result';
    },
});

// identity function is legal mixin
new ValidatedMethod({
    name: 'methodWithIdentityMixin',
    mixins: [args => args],
    validate: null,
    run() {
        return 'result';
    },
});

// mixin for specific type only works on that type
function numberToStringMixin(options: ValidatedMethodOptions<any, (arg: number) => string>) {
    return options;
}

// $ExpectType string
new ValidatedMethod({
    name: 'methodWithRightTypedMixin',
    mixins: [numberToStringMixin],
    validate: null,
    run(arg: number) {
        return 'result';
    },
}).call(3);

new ValidatedMethod({
    name: 'methodWithWrongTypedMixin',
    // $ExpectError
    mixins: [numberToStringMixin],
    validate: null,
    run(args: { arg: string }) {
        return 3;
    },
});

// method can access its name
// $ExpectType "methodReturnsName"
methodReturnsName.call();

// method has all expected "this" properties
new ValidatedMethod({
    name: 'methodThatUsesThis',
    validate: null,
    run() {
        // $ExpectType "methodThatUsesThis"
        this.name;
        // $ExpectType boolean
        this.isSimulation;
        // $ExpectType string | null
        this.userId;
        // $ExpectType void
        this.setUserId("test");
        // $ExpectType Connection
        this.connection;
        // $ExpectType string
        this.randomSeed();
        // $ExpectType void
        this.unblock();
    }
});
