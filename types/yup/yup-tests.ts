import * as yup from 'yup';
// tslint:disable-next-line:no-duplicate-imports
import { isSchema, LocaleObject, MixedSchema, NumberSchema, ObjectSchema, reach, Schema, SchemaDescription, TestContext, TestOptions, ValidateOptions, ValidationError } from 'yup';

// reach function
const schema1 = yup.object().shape({
    nested: yup.object().shape({
        arr: yup.array().of(yup.object().shape({ num: yup.number().max(4) })),
    }),
});
reach(schema1, 'nested.arr.num');
reach(schema1, 'nested.arr[].num');

// isSchema function
const isSchemaResult1: boolean = isSchema(schema1);
const isSchemaResult2: boolean = isSchema({});

// addMethod function
yup.addMethod<NumberSchema>(yup.number, 'minimum', function(this, minValue: number, message: string) {
    return this.min(minValue, message);
});
yup.addMethod(yup.date, 'newMethod', function(this: yup.DateSchema, date: Date, message?: string) {
    return this.max(date, message);
});

// ref function
const schema2 = yup.object().shape({
    baz: yup.ref('foo.bar'),
    foo: yup.object().shape({
        bar: yup.string(),
    }),
    x: yup.ref('$x'),
});

let ref: yup.Ref = yup.ref('foo.bar');

// $ExpectError
ref = {};

// $ExpectError
ref = { __isYupRef: true };

// cast function
schema2.cast({ foo: { bar: 'boom' } }, { context: { x: 5 } });

// lazy function
const node: ObjectSchema<any> = yup.object().shape({
    id: yup.number(),
    child: yup.lazy(() => node.default(undefined)),
});

// ObjectSchema.fields
const fieldsTestSchema = yup.object().shape({
  s: yup.string(),
  n: yup.number(),
  m: yup.mixed(),
  b: yup.boolean(),
  d: yup.date(),
  a: yup.array(),
  o: yup.object()
}).defined();
const stringField: Schema<string | undefined> = fieldsTestSchema.fields.s;
const numberField: Schema<number | undefined> = fieldsTestSchema.fields.n;
const mixedField: Schema<any> = fieldsTestSchema.fields.m;
const booleanField: Schema<boolean | undefined> = fieldsTestSchema.fields.b;
const dateField: Schema<Date | undefined> = fieldsTestSchema.fields.d;
const arrayField: Schema<any[] | undefined> = fieldsTestSchema.fields.a;
const objectField: Schema<object | undefined> = fieldsTestSchema.fields.o;

const renderable = yup.lazy(value => {
    switch (typeof value) {
        case 'number':
            return yup.number();
        case 'string':
            return yup.string();
        default:
            return yup.mixed();
    }
});
const renderables = yup.array().of(renderable);

// ValidationError static methods
// $ExpectType boolean
ValidationError.isError(new ValidationError('error', 'value', 'path'));
// $ExpectType string | ((params?: any) => string)
ValidationError.formatError('error', { path: 'path' });
ValidationError.formatError('error');
ValidationError.formatError(() => 'error');
ValidationError.formatError(() => 'error', { path: 'path' });

// ValidationError
let error: ValidationError = new yup.ValidationError('error', 'value', 'path');
error = new yup.ValidationError(['error', 'error2'], true, 'path');
error = new yup.ValidationError(['error', 'error2'], 5, 'path');
error = new yup.ValidationError(['error', 'error2'], { name: 'value' }, 'path');
error = new yup.ValidationError(['error', 'error2'], { name: 'value' }, 'path', 'type');
error = {
    name: 'ValidationError',
    message: 'error',
    path: 'path',
    errors: ['error'],
    inner: [new yup.ValidationError('error', true, 'path')],
    type: 'date',
    value: { start: '2017-11-10' },
};
error.value = 'value';
error.value = true;
error.value = 5;
error.value = { name: 'value' };
error.type = {};
error.type = [];
error.errors = ['error'];

// mixed
let mixed: MixedSchema = yup.mixed(); // $ExpectType MixedSchema<{} | null | undefined, object>
mixed.type;
mixed.defined(); // $ExpectType MixedSchema<{} | null, object>
mixed.clone();
mixed.label('label');
mixed.meta({ meta: 'value' });
mixed.describe().label;
mixed.describe().meta;
mixed.describe().tests;
mixed.describe().type;
mixed.concat(yup.string());
mixed.validate({});
mixed.validate({ hello: 'world' }, { strict: true }).then(value => value);
mixed.validateSync({ hello: 'world' }, { strict: true });
mixed.validateAt('path', {}, { strict: true, context: {} });
mixed.validateAt('path', {}, { strict: true, context: {} }).then(value => value);
mixed.validateSyncAt('path', {}, { strict: true, context: {} });
mixed.isValid(undefined, (valid: true) => true);
mixed.isValid({ hello: 'world' }).then(valid => valid);
mixed.cast({});
mixed.isType('hello');
mixed.strict(true);
mixed.strip(true);
mixed.withMutation(schema => {});
mixed.default({ number: 5 });
mixed.default(() => ({ number: 5 }));
mixed.default();
mixed.nullable(true);
mixed.nullable();
mixed.required();
mixed.required('Foo');
mixed.nullable().required(); // $ExpectType MixedSchema<{}, object>
mixed.required(() => 'Foo');
mixed.defined();
mixed.notRequired(); // $ExpectType MixedSchema<{} | null | undefined, object>
mixed.optional(); // $ExpectType MixedSchema<{} | null | undefined, object>
mixed.required().optional(); // $ExpectType MixedSchema<{} | undefined, object>
mixed.typeError('type error');
mixed.typeError(() => 'type error');
mixed.oneOf(['hello', 'world'], 'message');
mixed.oneOf(['hello', 'world'], () => 'message');
mixed.oneOf(['hello', 'world'], ({ values }) => `one of ${values}`);
// $ExpectError
mixed.oneOf(['hello', 'world'], ({ random }) => `one of ${random}`);
mixed.oneOf(["hello", 1] as const); // $ExpectType MixedSchema<"hello" | 1 | undefined, object>
mixed.equals(["hello", 1] as const); // $ExpectType MixedSchema<"hello" | 1 | undefined, object>
mixed.notOneOf(['hello', 'world'], 'message');
mixed.notOneOf(['hello', 'world'], () => 'message');
mixed.when('isBig', {
    is: value => true,
    then: yup.number().min(5),
    otherwise: yup.number().min(0),
});
mixed.when(['isBig', 'isSpecial'], {
    is: (isBig, isSpecial) => isBig && isSpecial,
    then: yup.number().min(5),
    otherwise: yup.number().min(0),
});
mixed
    .when('isBig', {
        is: true,
        then: yup.number().min(5),
        otherwise: yup.number().min(0),
    })
    .when('$other', (value: any, schema: MixedSchema) => (value === 4 ? schema.required() : schema));
// tslint:disable-next-line:no-invalid-template-strings
mixed.test('is-jimmy', '${path} is not Jimmy', value => value === 'jimmy');
mixed.test(
    'is-jimmy',
    ({ path, value }) => `${path} has an error, it is ${value}`,
    value => value === 'jimmy',
);
mixed.test({
    name: 'lessThan5',
    exclusive: true,
    // tslint:disable-next-line:no-invalid-template-strings
    message: '${path} must be less than 5 characters',
    test: value => value == null || value.length <= 5,
});
// $ExpectType MixedSchema<Set<any>, object>
mixed.test(
    'is-function',
    // tslint:disable-next-line:no-invalid-template-strings
    "${path} is not a function",
    (value): value is Set<any> => value instanceof Set,
);
// $ExpectType MixedSchema<Set<any>, object>
mixed.test({
    name: 'is-function',
    exclusive: true,
    // tslint:disable-next-line:no-invalid-template-strings
    message: '${path} is not a function',
    test: (value): value is Set<any> => value instanceof Set,
});
// Name is required for exclusive tests:
// $ExpectError
mixed.test({
    exclusive: true,
    // tslint:disable-next-line:no-invalid-template-strings
    message: '${path} must be less than 5 characters',
    test: value => value == null || value.length <= 5,
});
mixed.test('with-promise', 'It contains invalid value', value => new Promise<boolean>(resolve => resolve(true)));
const testContext = function(this: TestContext) {
    // $ExpectType string
    this.path;
    // $ExpectType ValidateOptions<object>
    this.options;
    // $ExpectType any
    this.parent;
    // $ExpectType Schema<any, object>
    this.schema;
    // $ExpectType (value: any) => any
    this.resolve;
    // $ExpectType ValidationError
    this.createError({ path: '1', message: '1' });
    // $ExpectType ValidationError
    this.createError({ message: '1' });
    // $ExpectType ValidationError
    this.createError({ path: '1' });
    // $ExpectType ValidationError
    this.createError();
    return true;
};
mixed.test('with-context', 'it uses function context', testContext);
mixed.test({
    test: testContext,
});
mixed.test({
    message: ({ passed }) => (passed ? 'You passed' : 'You failed'),
    name: 'checkParams',
    params: { passed: true },
    test: value => !!value,
});

yup.mixed().oneOf(['hello', 1, null] as const).nullable(); // $ExpectType MixedSchema<"hello" | 1 | null | undefined, object>
yup.mixed().nullable().oneOf(['hello', 1, null] as const); // $ExpectType MixedSchema<"hello" | 1 | null | undefined, object>

// mixed with concat
yup.object({ name: yup.string().defined() }).defined().concat(yup.object({ when: yup.date().defined() }).defined()); // $ExpectType ObjectSchema<{ name: string; } & { when: Date; }, object>
yup.mixed<string>().defined().concat(yup.date().defined()); // $ExpectType MixedSchema<string | Date, object>

// Async ValidationError
const asyncValidationErrorTest = (includeParams: boolean) =>
    function(this: TestContext): Promise<ValidationError> {
        return new Promise(resolve =>
            resolve(
                includeParams
                    ? this.createError({ path: 'testPath', message: 'testMessage', params: { foo: 'bar' } })
                    : this.createError(),
            ),
        );
    };

mixed.test('async-validation-error', 'Returns async ValidationError', asyncValidationErrorTest(true));
mixed.test('async-validation-error', 'Returns async ValidationError', asyncValidationErrorTest(false));
mixed.test({ test: asyncValidationErrorTest(true) });
mixed.test({ test: asyncValidationErrorTest(false) });

// Sync ValidationError
const syncValidationErrorTest = (includeParams: boolean) =>
    function(this: TestContext): ValidationError {
        return includeParams
            ? this.createError({ path: 'testPath', message: 'testMessage', params: { foo: 'bar' } })
            : this.createError();
    };

mixed.test('sync-validation-error', 'Returns sync ValidationError', syncValidationErrorTest(true));
mixed.test('sync-validation-error', 'Returns sync ValidationError', syncValidationErrorTest(false));
mixed.test({ test: syncValidationErrorTest(true) });
mixed.test({ test: syncValidationErrorTest(false) });

yup.string().transform(function(this, value: any, originalvalue: any) {
    return this.isType(value) && value !== null && value !== undefined ? value.toUpperCase() : value;
});

// Extending Schema Types
class ExtendsMixed extends yup.mixed {}
mixed = new ExtendsMixed();

class ExtendsMixed2 extends yup.mixed {
    constructor() {
        super({ type: 'CustomType' });
    }
}
mixed = new ExtendsMixed2();

/**
 * Creating new Types
 */
class CustomDateSchema extends yup.date {
    isWednesday(message?: string): CustomDateSchema {
        return this.clone().test({
            name: 'Wednesday',
            // tslint:disable-next-line:no-invalid-template-strings
            message: message || '${path} must be Wednesday',
            test: value => true /* Check that day is Wednesday */,
        });
    }
}
yup.object()
    .shape({
        startDate: new CustomDateSchema().isWednesday().required(),
    })
    .isValidSync({
        startDate: '2017-11-29',
    });

// String schema
function strSchemaTests(strSchema: yup.StringSchema) {
    strSchema.type;
    strSchema.isValid('hello'); // => true
    strSchema.required();
    strSchema.required('req');
    strSchema.required(() => 'req');
    strSchema.length(5, 'message');
    strSchema.length(5, () => 'message');
    strSchema.length(5, ({ length }) => `must be ${length}`);
    // $ExpectError
    strSchema.length(5, ({ min }) => `must be ${min}`);
    strSchema.min(5, 'message');
    strSchema.min(5, () => 'message');
    strSchema.min(5, ({ min }) => `more than ${min}`);
    // $ExpectError
    strSchema.min(5, ({ max }) => `more than ${max}`);
    strSchema.max(5, 'message');
    strSchema.max(5, () => 'message');
    strSchema.max(5, ({ max }) => `less than ${max}`);
    // $ExpectError
    strSchema.max(5, ({ min }) => `less than ${min}`);
    strSchema.matches(/(hi|bye)/);
    strSchema.matches(/(hi|bye)/, 'invalid');
    strSchema.matches(/(hi|bye)/, () => 'invalid');
    strSchema.matches(/(hi|bye)/, ({ regex }) => `Does not match ${regex}`);
    strSchema.email();
    strSchema.email('invalid');
    strSchema.email(() => 'invalid');
    strSchema.email(({ regex }) => `Does not match ${regex}`);
    strSchema.url();
    strSchema.url('bad url');
    strSchema.url(() => 'bad url');
    strSchema.url(({ regex }) => `Does not match ${regex}`);
    strSchema.uuid();
    strSchema.uuid('invalid uuid');
    strSchema.uuid(() => 'invalid uuid');
    strSchema.ensure();
    strSchema.trim();
    strSchema.trim('trimmed');
    strSchema.trim(() => 'trimmed');
    strSchema.lowercase();
    strSchema.lowercase('lower');
    strSchema.lowercase(() => 'lower');
    strSchema.uppercase();
    strSchema.uppercase('upper');
    strSchema.uppercase(() => 'upper');
    strSchema.defined();
}

const strSchema = yup.string(); // $ExpectType StringSchema<string | undefined, object>
strSchema.oneOf(["hello", "world"] as const); // $ExpectType StringSchema<"hello" | "world" | undefined, object>
strSchema.required().oneOf(["hello", "world"] as const); // $ExpectType StringSchema<"hello" | "world", object>
strSchemaTests(strSchema);

// $ExpectError
yup.string<123>();

// Number schema
const numSchema = yup.number(); // $ExpectType NumberSchema<number | undefined, object>
numSchema.type;
numSchema.isValid(10); // => true
numSchema.min(5);
numSchema.min(5, 'message');
numSchema.min(5, () => 'message');
numSchema.min(5, ({ min }) => `more than ${min}`);
// $ExpectError
numSchema.min(5, ({ max }) => `more than ${max}`);
numSchema.max(5);
numSchema.max(5, 'message');
numSchema.max(5, () => 'message');
numSchema.max(5, ({ max }) => `less than ${max}`);
// $ExpectError
numSchema.max(5, ({ min }) => `more than ${min}`);
numSchema.positive();
numSchema.positive('pos');
numSchema.positive(() => 'pos');
numSchema.negative();
numSchema.negative('neg');
numSchema.negative(() => 'neg');
numSchema.lessThan(5);
numSchema.lessThan(5, 'lt');
numSchema.lessThan(5, () => 'lt');
numSchema.moreThan(5);
numSchema.moreThan(5, 'mt');
numSchema.moreThan(5, () => 'mt');
numSchema.integer();
numSchema.integer('int');
numSchema.integer(() => 'int');
numSchema.truncate();
numSchema.round('floor');
numSchema
    .validate(5, { strict: true })
    .then(value => value)
    .catch(err => err);
numSchema.oneOf([1, 2] as const); // $ExpectType NumberSchema<1 | 2 | undefined, object>
numSchema.equals([1, 2] as const); // $ExpectType NumberSchema<1 | 2 | undefined, object>
numSchema.required().oneOf([1, 2] as const); // $ExpectType NumberSchema<1 | 2, object>
numSchema.defined();

// Boolean Schema
const boolSchema = yup.boolean(); // $ExpectType BooleanSchema<boolean | undefined, object>
boolSchema.type;
boolSchema.isValid(true); // => true
boolSchema.oneOf([true] as const); // $ExpectType BooleanSchema<true | undefined, object>
boolSchema.equals([true] as const); // $ExpectType BooleanSchema<true | undefined, object>
boolSchema.required().oneOf([true] as const); // $ExpectType BooleanSchema<true, object>
boolSchema.defined();

// Date Schema
const dateSchema = yup.date(); // $ExpectType DateSchema<Date | undefined, object>
dateSchema.type;
dateSchema.isValid(new Date()); // => true
dateSchema.isValid('2017-11-12'); // => true
dateSchema.min(new Date());
dateSchema.min('2017-11-12');
dateSchema.min(new Date(), 'message');
dateSchema.min('2017-11-12', 'message');
dateSchema.min('2017-11-12', () => 'message');
dateSchema.max(new Date());
dateSchema.max('2017-11-12');
dateSchema.max(new Date(), 'message');
dateSchema.max('2017-11-12', 'message');
dateSchema.max('2017-11-12', () => 'message');
dateSchema.oneOf([new Date()] as const); // $ExpectType DateSchema<Date | undefined, object>
dateSchema.equals([new Date()] as const); // $ExpectType DateSchema<Date | undefined, object>
dateSchema.required().oneOf([new Date()] as const); // $ExpectType DateSchema<Date, object>

// Array Schema
const arrSchema = yup.array().of(yup.number().defined().min(2));
arrSchema.type;
arrSchema.innerType;
arrSchema.notRequired().innerType;
arrSchema.optional().innerType;
arrSchema.nullable().innerType;
arrSchema.notRequired().nullable().innerType;
arrSchema.optional().nullable().innerType;
arrSchema.innerType.type;
arrSchema.isValid([2, 3]); // => true
arrSchema.isValid([1, -24]); // => false
arrSchema.required();
arrSchema.required('req');
arrSchema.required(() => 'req');
arrSchema.ensure();
arrSchema.max(5);
arrSchema.max(5, 'max');
arrSchema.max(5, () => 'max');
arrSchema.min(5);
arrSchema.min(5, 'min');
arrSchema.min(5, () => 'min');
arrSchema.compact((value, index, array) => value === array[index]);
arrSchema.oneOf([]); // $ExpectType NotRequiredArraySchema<number, object>
arrSchema.equals([]); // $ExpectType NotRequiredArraySchema<number, object>
arrSchema.defined();

const arrOfObjSchema = yup.array().defined().of(
    yup.object().defined().shape({
        field: yup.number().defined(),
    }),
);
arrOfObjSchema.compact((value, index, array) => {
    return value.field > 10 && array[index].field > 10;
});

const arr = yup.array().defined();
const top = (<T>(x?: T): T => x!)();
const validArr: yup.ArraySchema<typeof top> = arr;
yup.array(yup.string().defined()); // $ExpectType NotRequiredArraySchema<string, object>
yup.array().of(yup.string().defined()); // $ExpectType NotRequiredArraySchema<string, object>

// Object Schema
const objSchema = yup.object().shape({
    name: yup.string().required(),
    age: yup
        .number()
        .required()
        .positive()
        .integer(),
    email: yup.string().email(),
    website: yup.string().url(),
});
yup.object().shape({
    num: yup.number(),
});
// or
yup.object({
    num: yup.number(),
});
objSchema.type;
objSchema.from('prop', 'myProp');
objSchema.from('prop', 'myProp', true);
objSchema.noUnknown();
objSchema.noUnknown(true);
objSchema.noUnknown(true, 'message');
objSchema.noUnknown(true, () => 'message');
objSchema.unknown();
objSchema.transformKeys(key => key.toUpperCase());
objSchema.camelCase();
objSchema.snakeCase();
objSchema.constantCase();
interface LiteralExampleObject {
    name: "John Doe";
    age: 35;
    email: "john@example.com";
    website: "example.com";
}
objSchema.oneOf([{name: "John Doe", age: 35, email: "john@example.com", website: "example.com"}] as LiteralExampleObject[]); // $ExpectType ObjectSchema<LiteralExampleObject, object>
objSchema.defined();

const description: SchemaDescription = {
    type: 'type',
    label: 'label',
    meta: { key: 'value' },
    tests: [
        { name: 'test1', params: {param1: 'param1'} },
        { name: 'test2', params: {} },
    ],
    fields: {
        refField: {
            type: 'ref',
            key: 'value',
        },
        noSubField: {
            type: 'type',
            label: 'label',
            meta: { key: 'value' },
            tests: [],
        },
        subField: {
            type: 'type',
            label: 'label',
            meta: { key: 'value' },
            tests: [],
            fields: { key: { type: 'ref', key: 'value' } }
        },
        withInnerType: {
            type: 'type',
            label: 'label',
            meta: { key: 'value' },
            tests: [],
            innerType: { type: 'ref', key: 'value' }
        },
     },
};

const param1: any = description.tests[0].params.param1;

const testOptions: TestOptions = {
    name: 'name',
    test: value => true,
    message: 'validation error message',
    params: { param1: 'value' },
    exclusive: true,
};

const testOptionsWithPromise: TestOptions = {
    name: 'name',
    test: value => new Promise(resolve => true),
    message: 'validation error message',
    params: { param1: 'value' },
    exclusive: true,
};

const validateOptions: ValidateOptions = {
    strict: true,
    abortEarly: true,
    stripUnknown: true,
    recursive: true,
    context: {
        key: 'value',
    },
};

const localeNotType1: LocaleObject = {
    mixed: {
        required: 'message',
        notType: 'message',
    },
};
const localeNotType2: LocaleObject = {
    mixed: {
        required: 'message',
        notType: () => 'message',
    },
};
const localeNotType3: LocaleObject = {
    mixed: {
        required: 'message',
        notType: _ref => {
            const isCast: boolean = _ref.originalValue != null && _ref.originalValue !== _ref.value;
            const finalPartOfTheMessage = isCast ? ` (cast from the value '${_ref.originalValue}').` : '.';

            return (
                `${_ref.path} must be a '${_ref.type}'` +
                ` but the final value was: '${_ref.value}'${finalPartOfTheMessage}`
            );
        },
    },
};
// tslint:disable:no-invalid-template-strings
const exhaustiveLocalObjectconst: LocaleObject = {
    mixed: {
        default: '${path} is invalid',
        required: '${path} is a required field',
        oneOf: '${path} must be one of the following values: ${values}',
        notOneOf: '${path} must not be one of the following values: ${values}',
        notType: '${path} is not the correct type',
    },
    string: {
        length: '${path} must be exactly ${length} characters',
        min: '${path} must be at least ${min} characters',
        max: '${path} must be at most ${max} characters',
        matches: '${path} must match the following: "${regex}"',
        email: '${path} must be a valid email',
        url: '${path} must be a valid URL',
        uuid: '${path} must be a valid UUID',
        trim: '${path} must be a trimmed string',
        lowercase: '${path} must be a lowercase string',
        uppercase: '${path} must be a upper case string',
    },
    number: {
        min: '${path} must be greater than or equal to ${min}',
        max: '${path} must be less than or equal to ${max}',
        lessThan: '${path} must be less than ${less}',
        moreThan: '${path} must be greater than ${more}',
        positive: '${path} must be a positive number',
        negative: '${path} must be a negative number',
        integer: '${path} must be an integer',
    },
    date: {
        min: '${path} field must be later than ${min}',
        max: '${path} field must be at earlier than ${max}',
    },
    boolean: {
        // NOOP
    },
    object: {
        noUnknown: '${path} field cannot have keys not specified in the object shape',
    },
    array: {
        min: '${path} field must have at least ${min} items',
        max: '${path} field must have less than or equal to ${max} items',
    },
};
// tslint:enable:no-invalid-template-strings

yup.setLocale({
    mixed: {
        required: options => options,
    },
    number: { max: 'Max message', min: 'Min message' },
    string: {
        email: 'String message',
        length: ({ length }) => ({ key: 'stringLength', options: { length } }),
    },
});

yup.setLocale({
    string: {
        // $ExpectError
        nullable: 'message',
    },
});

interface MyInterface {
    stringField: string;
    numberField: number;
    subFields: SubInterface;
    arrayField: string[];
}

interface SubInterface {
    testField: string;
}

// $ExpectType ObjectSchema<MyInterface, object>
const typedSchema = yup.object<MyInterface>({
    stringField: yup.string().required(), // $ExpectType StringSchema<string, object>
    numberField: yup.number().required(), // $ExpectType NumberSchema<number, object>
    subFields: yup
        .object({
            testField: yup.string().required(),
        })
        .required(),
    arrayField: yup.array(yup.string().defined()).required(), // $ExpectType ArraySchema<string, object>
}).defined();

const testObject: MyInterface = {
    stringField: 'test1',
    numberField: 123,
    subFields: {
        testField: 'test2',
    },
    arrayField: ['hi'],
};

typedSchema.validateSync(testObject); // $ExpectType MyInterface

// Shape<T, U> and shape function
interface AB {
    a: string;
    b: number;
}

interface BC {
    b: string;
    c: number;
}

interface ExpectedABC {
    a: string;
    b: string;
    c: number;
}

const expectedAbc: ExpectedABC = {
    a: 'qwerty',
    b: 'asdfg',
    c: 123,
};
const actualAbc: yup.Shape<AB, BC> = expectedAbc;

const definitionAB: yup.ObjectSchemaDefinition<AB> = {
    a: yup.string().defined(),
    b: yup.number().defined(),
};
const definitionBC: yup.ObjectSchemaDefinition<BC> = {
    b: yup.string().defined(),
    c: yup.number().defined(),
};
const combinedSchema = yup.object(definitionAB).defined().shape(definitionBC); // $ExpectType ObjectSchema<{ a: string; b: string; } & BC, object>

// $ExpectError
yup.object<MyInterface>({
    stringField: yup.string().required(),
    subFields: yup
        .object({
            testField: yup.string().required(),
        })
        .required(),
    arrayField: yup.array(yup.string().defined()).required(),
});

// $ExpectError
yup.object<MyInterface>({ stringField: yup.number().required(),
    numberField: yup.number().required(),
    subFields: yup
        .object({
            testField: yup.string().required(),
        })
        .required(),
    arrayField: yup.array(yup.string().defined()).required(),
});

// $ExpectError
yup.object<MyInterface>({
    stringField: yup.string().required(),
    numberField: yup.number().required(),
    arrayField: yup.array(yup.string().defined()).required(),
});

// $ExpectError
yup.object<MyInterface>({ subFields: yup
        .object({
            testField: yup.number().required(),
        })
        .required(),
    stringField: yup.string().required(),
    numberField: yup.number().required(),
    arrayField: yup.array(yup.string().defined()).required(),
});

enum Gender {
    Male = 'Male',
    Female = 'Female',
}

const personSchema = yup.object({
    firstName: yup.string().defined(), // $ExpectType StringSchema<string, object>
    gender: yup.mixed<Gender>().defined().oneOf([Gender.Male, Gender.Female]),
    // handle nested optional property
    address: yup.object({
        line1: yup.string().required(),
        line2: yup.string().optional(),
        area: yup.object({
            country: yup.string().required(),
            region: yup.string().optional()
        }).required(),
    }).required(),
    addressBook: yup.object({
        phoneNumbers: yup.array(yup.string()).defined(),
        lastUpdated: yup.date().optional()
    }).required(),
    email: yup
        .string()
        .nullable()
        .notRequired()
        .email(),
    birthDate: yup
        .date()
        .nullable()
        .notRequired()
        .min(new Date(1900, 0, 1)),
    canBeNull: yup.string().defined().nullable(true), // $ExpectType StringSchema<string | null, object>
    isAlive: yup
        .boolean()
        .nullable()
        .notRequired(),
    mustBeAString: yup
        .string()
        .nullable(true)
        .nullable(false)
        .notRequired()
        .required(),
    children: yup
        .array(yup.string())
        .nullable()
        .notRequired()
        .min(1),
    friends: yup
        .mixed()
        .test(
            "is-Set",
            // tslint:disable-next-line:no-invalid-template-strings
            "${path} must be a Set of strings",
            (value): value is undefined | null | Set<string> =>
                value === null || value === undefined || (value instanceof Set && Array.from(value.values()).every(el => typeof el === "string")))
}).defined();

type Person = yup.InferType<typeof personSchema>;
// Equivalent to:
// type Person = {
//     firstName: string;
//     gender: Gender;
//     email?: string | null | undefined;
//     birthDate?: Date | null | undefined;
//     canBeNull: string | null;
//     isAlive: boolean | null | undefined;
//     mustBeAString: string;
//     children?: string[] | null | undefined;
//     friends?: Set<string> | null | undefined;
// }

const minimalPerson: Person = {
    firstName: '',
    gender: Gender.Female,
    canBeNull: null,
    mustBeAString: '',
    address: {
        line1: '123 Fake Street',
        area: { country: 'Australia' }
    },
    addressBook: {
        phoneNumbers: ['123-456-789']
    }
};

const person: Person = {
    firstName: '',
    gender: Gender.Male,
    email: null,
    birthDate: null,
    canBeNull: null,
    isAlive: null,
    mustBeAString: '',
    children: null,
    address: {
        line1: 'Unit 1',
        line2: '456 Fake Street',
        area: { country: 'America', region: 'WA' }
    },
    addressBook: {
        phoneNumbers: []
    }
};

person.email = 'some@email.com';
person.email = undefined;
person.birthDate = new Date();
person.isAlive = true;
person.isAlive = undefined;
person.children = ['1', '2', '3'];
person.children = undefined;
person.friends = new Set(["Amy", "Beth"]);

// $ExpectError
person.address = {};
// $ExpectError
person.address = { area: {}, line1: '' };
// $ExpectError
person.addressBook = {};
// $ExpectError
person.addressBook = { phoneNumbers: null };
// $ExpectError
person.gender = 1;
// $ExpectError
person.firstName = null;
// $ExpectError
person.firstName = undefined;
// $ExpectError
person.mustBeAString = null;
// $ExpectError
person.mustBeAString = undefined;
// $ExpectError
person.friends = new Set([1, 2, 3]);
// $ExpectError
person.friends = ["Amy", "Beth"];
// $ExpectError
person.birthDate = '2017-11-12';

const castPerson = personSchema.cast({});
castPerson.firstName = '';
// $ExpectError
castPerson.firstName = null;
// $ExpectError
castPerson.firstName = undefined;
castPerson.email = 'some@email.com';
castPerson.email = null;
castPerson.email = undefined;
castPerson.birthDate = new Date();
castPerson.birthDate = null;
castPerson.birthDate = undefined;
castPerson.isAlive = true;
castPerson.isAlive = null;
castPerson.isAlive = undefined;
castPerson.children = ['1', '2', '3'];
castPerson.children = null;
castPerson.children = undefined;

// date validations on a string field
const stringDateSchema = yup.object({
    stringyDateRequired: yup
        .date<string>()
        .required(),
    stringyDateOptional: yup
        .date<string>()
        .nullable()
        .notRequired(),
    flexibleDate: yup.date<Date | string>().required(),
    realDate: yup.date().required()
}).defined();

type StringDate = yup.InferType<typeof stringDateSchema>;
const stringDate: StringDate = {
    stringyDateRequired: "2020-01-01",
    stringyDateOptional: null,
    flexibleDate: "2020-01-01",
    realDate: new Date(),
};

stringDate.stringyDateRequired = "2020-01-01";
// $ExpectError
stringDate.stringyDateRequired = new Date();
// $ExpectError
stringDate.stringyDateRequired = null;

stringDate.stringyDateOptional = "2020-01-01";
stringDate.stringyDateOptional = undefined;
stringDate.stringyDateOptional = null;
// $ExpectError
stringDate.stringyDateOptional = new Date();

stringDate.flexibleDate = new Date();
stringDate.flexibleDate = "2020-01-01";
// $ExpectError
stringDate.flexibleDate = null;
// $ExpectError
stringDate.flexibleDate = undefined;

stringDate.realDate = new Date();
// $ExpectError
stringDate.realDate = "2020-01-01";

const loginSchema = yup.object({
    password: yup.string(),
    confirmPassword: yup
        .string()
        .nullable()
        .oneOf([yup.ref('password'), null]),
});

function wrapper<T>(b: false, msx: MixedSchema<T>): MixedSchema<T>;
function wrapper<T>(b: true, msx: MixedSchema<T>): MixedSchema<T | null>;

function wrapper<T>(b: boolean, msx: MixedSchema<T>): MixedSchema<T> {
    return msx.nullable(b);
}

const resultingSchema1 = wrapper<string | number | undefined>(false, yup.mixed().oneOf(['1', 2])); // $ExpectType MixedSchema<string | number | undefined, object>
const resultingSchema2 = wrapper<string | number | undefined>(true, yup.mixed().oneOf(['1', 2])); // $ExpectType MixedSchema<string | number | null | undefined, object>

const arrayOfStringsSchema = yup.array().of(yup.string().defined()).defined();
type ArrayOfStrings = yup.InferType<typeof arrayOfStringsSchema>;
function returnTheArray(data: ArrayOfStrings): any[] {
    return data;
}

const topLevelStringNullable = yup.string().nullable();
const topLevelStringNullableExample: yup.InferType<typeof topLevelStringNullable> = null;

const topLevelObjectNullable = yup.object().nullable();
const topLevelObjectNullableExample: yup.InferType<typeof topLevelObjectNullable> = null;

const topLevelArrayNullable = yup.array().nullable();
const topLevelArrayNullableExample: yup.InferType<typeof topLevelArrayNullable> = null;

const nestedNullableShape = yup.object().shape({
    foo: yup.object().nullable().shape<{}>({})
});
const nestedNullableShapeExample: yup.InferType<typeof nestedNullableShape> = {
    foo: null
};

const nestedShapeNullable = yup.object().shape({
    foo: yup.object().shape({}).nullable()
});
const nestedShapeNullableExample: yup.InferType<typeof nestedShapeNullable> = {
    foo: null
};

const nestedArrayNullable = yup.object().shape({
    foo: yup.array().nullable()
});
const nestedArrayNullableExample: yup.InferType<typeof nestedArrayNullable> = {
    foo: null
};

const arrayOfOptional = yup.array().of(
  yup.object({ bar: yup.string() }),
).defined();
const arrayOfOptionalExample: yup.InferType<typeof arrayOfOptional> = [{}];

// augment locale
declare module './index' {
    interface StringLocale {
        chineseMobilePhoneNumber?: TestOptionsMessage;
    }

    interface StringSchema<T extends string | null | undefined = string | undefined, C = object> extends Schema<T, C> {
        chineseMobilePhoneNumber(message?: StringLocale['chineseMobilePhoneNumber']): StringSchema<T, C>;
    }
}
yup.setLocale({
    string: {
        // tslint:disable-next-line:no-invalid-template-strings
        chineseMobilePhoneNumber: '${path} must be a Chinese mobile phone number',
    },
});
yup.addMethod(
    yup.string,
    'chineseMobilePhoneNumber',
    function(this: yup.MixedSchema<any>, message: string) {
        return this.test(
            'chineseMobilePhoneNumber',
            message,
            () => true,
        );
    },
);
yup.string().chineseMobilePhoneNumber('please input a Chinese mobile phone number');

yup.object({
    name: yup.string().nullable().test('', '', (value) => {
        // $ExpectType string | null | undefined
        const v = value;
        return true;
    }),
    colors: yup.string().required().oneOf(['blue', 'red']).test('', '', (value) => {
        // $ExpectError
        return value === 'yellow';
    }),
    age: yup.number().required().test('', '', (value) => {
        if (typeof value === 'string') {
            // $ExpectError
            return value.toLowerCase();
        }
        return true;
    }),
    dateOfBirth: yup.date().required().test('', '', (value) => {
        // $ExpectError
        const x = Number.parseFloat(value);
        return false;
    }),
    resident: yup.boolean().required().test('', '', (value) => {
        // $ExpectError
        return value === 'true';
    }),
    log: yup.object({
        date: yup.date().required(),
        place: yup.string().nullable(),
    }).required().test('', '', (values) => {
        // $ExpectError
        const mstime =  values.date.getTime();
        if (values !== null && values !== undefined) {
            // $ExpectError
            if (values.place === 1) {}
            return mstime > 1000;
        } else {
            return false;
        }
    }),
    items: yup.array().of(yup.object({
        code: yup.number().required(),
        price: yup.number().required(),
        name: yup.string().required()
    }).required()).required().test('', '', (values) => {
        return Array.isArray(values) && values.some((value) => {
            // $ExpectError
            const test1 = value.code === '1';
            // $ExpectError
            const test2 = value.price === new Date();
            // $ExpectError
            const test3 = value.name * 1;
            return false;
        });
    })
});

interface MyContext {
    a: string;
}
// $ExpectType MixedSchema<any, MyContext>
const schemaWithMyContext = yup.mixed<any, MyContext>().test({
    test() {
        const context = this.options.context; // $ExpectType MyContext | undefined
        return false;
    },
});
schemaWithMyContext.validateSync('test value', { context: { a: 'context value' }});
// $ExpectError
schemaWithMyContext.validateSync('test value', { context: { x: 1 }});

const schemaWithDifferentContext = yup.mixed<any, { abc: number }>();

const arraySchemaWithMyContext = yup.array<any, MyContext>();
arraySchemaWithMyContext.of(schemaWithMyContext);
// $ExpectError
arraySchemaWithMyContext.of(schemaWithDifferentContext);

const objectSchemaWithMyContext = yup.object<any, MyContext>();
objectSchemaWithMyContext.shape({
    prop1: schemaWithMyContext,
    // $ExpectError
    prop2: schemaWithDifferentContext,
});
