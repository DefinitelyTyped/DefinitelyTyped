import * as yup from "yup";

// tslint:disable-next-line:no-duplicate-imports
import {
    reach,
    isSchema,
    date,
    Schema,
    ObjectSchema,
    ValidationError,
    MixedSchema,
    SchemaDescription,
    TestOptions,
    ValidateOptions,
    NumberSchema,
    TestContext
} from "yup";

// reach function
const schema1 = yup.object().shape({
    nested: yup.object().shape({
        arr: yup.array().of(yup.object().shape({ num: yup.number().max(4) }))
    })
});
reach(schema1, "nested.arr.num");
reach(schema1, "nested.arr[].num");

// isSchema function
const isSchemaResult1: boolean = isSchema(schema1);
const isSchemaResult2: boolean = isSchema({});

// addMethod function
yup.addMethod<NumberSchema>(yup.number, "minimum", function(
    this,
    minValue: number,
    message: string
) {
    return this.min(minValue, message);
});
yup.addMethod(yup.date, "newMethod", function(
    this: yup.DateSchema,
    date: Date,
    message?: string
) {
    return this.max(date, message);
});

// ref function
const schema2 = yup.object().shape({
    baz: yup.ref("foo.bar"),
    foo: yup.object().shape({
        bar: yup.string()
    }),
    x: yup.ref("$x")
});

let ref: yup.Ref = yup.ref("foo.bar");

// $ExpectError
ref = {};

// $ExpectError
ref = { __isYupRef: true };

// cast function
schema2.cast({ foo: { bar: "boom" } }, { context: { x: 5 } });

// lazy function
const node: ObjectSchema<any> = yup.object().shape({
    id: yup.number(),
    child: yup.lazy(() => node.default(undefined))
});
const renderable = yup.lazy(value => {
    switch (typeof value) {
        case "number":
            return yup.number();
        case "string":
            return yup.string();
        default:
            return yup.mixed();
    }
});
const renderables = yup.array().of(renderable);

// ValidationError static methods
// $ExpectType boolean
ValidationError.isError(new ValidationError("error", "value", "path"));
// $ExpectType string | ((params?: any) => string)
ValidationError.formatError("error", { path: "path" });
ValidationError.formatError("error");
ValidationError.formatError(() => "error");
ValidationError.formatError(() => "error", { path: "path" });

// ValidationError
let error: ValidationError = new yup.ValidationError("error", "value", "path");
error = new yup.ValidationError(["error", "error2"], true, "path");
error = new yup.ValidationError(["error", "error2"], 5, "path");
error = new yup.ValidationError(["error", "error2"], { name: "value" }, "path");
error = new yup.ValidationError(
    ["error", "error2"],
    { name: "value" },
    "path",
    "type"
);
error = {
    name: "ValidationError",
    message: "error",
    path: "path",
    errors: ["error"],
    inner: [new yup.ValidationError("error", true, "path")],
    type: "date",
    value: { start: "2017-11-10" }
};
error.value = "value";
error.value = true;
error.value = 5;
error.value = { name: "value" };
error.type = {};
error.type = [];
error.errors = ["error"];

// mixed
let mixed: MixedSchema = yup.mixed();
mixed.clone();
mixed.label("label");
mixed.meta({ meta: "value" });
mixed.describe().label;
mixed.describe().meta;
mixed.describe().tests;
mixed.describe().type;
mixed.concat(yup.string());
mixed.validate({});
mixed.validate({ hello: "world" }, { strict: true }).then(value => value);
mixed.validateSync({ hello: "world" }, { strict: true });
mixed.validateAt("path", {}, { strict: true, context: {} });
mixed
    .validateAt("path", {}, { strict: true, context: {} })
    .then(value => value);
mixed.validateSyncAt("path", {}, { strict: true, context: {} });
mixed.isValid(undefined, (valid: true) => true);
mixed.isValid({ hello: "world" }).then(valid => valid);
mixed.cast({});
mixed.isType("hello");
mixed.strict(true);
mixed.strip(true);
mixed.withMutation(schema => {});
mixed.default({ number: 5 });
mixed.default(() => ({ number: 5 }));
mixed.default();
mixed.nullable(true);
mixed.nullable();
mixed.required();
mixed.required("Foo");
mixed.required(() => "Foo");
mixed.notRequired(); // $ExpectType MixedSchema
mixed.typeError("type error");
mixed.typeError(() => "type error");
mixed.oneOf(["hello", "world"], "message");
mixed.oneOf(["hello", "world"], () => "message");
mixed.notOneOf(["hello", "world"], "message");
mixed.notOneOf(["hello", "world"], () => "message");
mixed.when("isBig", {
    is: value => true,
    then: yup.number().min(5),
    otherwise: yup.number().min(0)
});
mixed
    .when("isBig", {
        is: true,
        then: yup.number().min(5),
        otherwise: yup.number().min(0)
    })
    .when("$other", (value: any, schema: MixedSchema) =>
        value === 4 ? schema.required() : schema
    );
// tslint:disable-next-line:no-invalid-template-strings
mixed.test("is-jimmy", "${path} is not Jimmy", value => value === "jimmy");
mixed.test(
    "is-jimmy",
    ({ path, value }) => `${path} has an error, it is ${value}`,
    value => value === "jimmy"
);
mixed.test({
    name: "lessThan5",
    exclusive: true,
    // tslint:disable-next-line:no-invalid-template-strings
    message: "${path} must be less than 5 characters",
    test: value => value == null || value.length <= 5
});
mixed.test(
    "with-promise",
    "It contains invalid value",
    value => new Promise(resolve => true)
);
const testContext = function(this: TestContext) {
    // $ExpectType string
    this.path;
    // $ExpectType ValidateOptions
    this.options;
    // $ExpectType any
    this.parent;
    // $ExpectType Schema<any>
    this.schema;
    // $ExpectType (value: any) => any
    this.resolve;
    // $ExpectType ValidationError
    this.createError({ path: "1", message: "1" });
    // $ExpectType ValidationError
    this.createError({ message: "1" });
    // $ExpectType ValidationError
    this.createError({ path: "1"});
    // $ExpectType ValidationError
    this.createError();
    return true;
};
mixed.test("with-context", "it uses function context", testContext);
mixed.test({
    test: testContext
});

// Async ValidationError
const asyncValidationErrorTest = function(
    this: TestContext
): Promise<ValidationError> {
    return new Promise(resolve =>
        resolve(this.createError({ path: "testPath", message: "testMessage" }))
    );
};

mixed.test(
    "async-validation-error",
    "Returns async ValidationError",
    asyncValidationErrorTest
);
mixed.test({
    test: asyncValidationErrorTest
});

// Sync ValidationError
const syncValidationErrorTest = function(this: TestContext): ValidationError {
    return this.createError({ path: "testPath", message: "testMessage" });
};

mixed.test(
    "sync-validation-error",
    "Returns sync ValidationError",
    syncValidationErrorTest
);
mixed.test({
    test: syncValidationErrorTest
});

yup.string().transform(function(this, value: any, originalvalue: any) {
    return this.isType(value) && value !== null ? value.toUpperCase() : value;
});

// Extending Schema Types
class ExtendsMixed extends yup.mixed {}
mixed = new ExtendsMixed();

class ExtendsMixed2 extends yup.mixed {
    constructor() {
        super({ type: "CustomType" });
    }
}
mixed = new ExtendsMixed2();

/**
 * Creating new Types
 */
class DateSchema extends yup.date {
    isWednesday(message?: string): DateSchema {
        return this.clone().test({
            name: "Wednesday",
            // tslint:disable-next-line:no-invalid-template-strings
            message: message || "${path} must be Wednesday",
            test: value => true /* Check that day is Wednesday */
        });
    }
}
yup.object()
    .shape({
        startDate: new DateSchema().isWednesday().required()
    })
    .isValidSync({
        startDate: "2017-11-29"
    });

// String schema
const strSchema = yup.string(); // $ExpectType StringSchema
strSchema.isValid("hello"); // => true
strSchema.required();
strSchema.required("req");
strSchema.required(() => "req");
strSchema.length(5, "message");
strSchema.length(5, () => "message");
strSchema.min(5, "message");
strSchema.min(5, () => "message");
strSchema.max(5, "message");
strSchema.max(5, () => "message");
strSchema.matches(/(hi|bye)/);
strSchema.matches(/(hi|bye)/, "invalid");
strSchema.matches(/(hi|bye)/, () => "invalid");
strSchema.email();
strSchema.email("invalid");
strSchema.email(() => "invalid");
strSchema.url();
strSchema.url("bad url");
strSchema.url(() => "bad url");
strSchema.ensure();
strSchema.trim();
strSchema.trim("trimmed");
strSchema.trim(() => "trimmed");
strSchema.lowercase();
strSchema.lowercase("lower");
strSchema.lowercase(() => "lower");
strSchema.uppercase();
strSchema.uppercase("upper");
strSchema.uppercase(() => "upper");

// Number schema
const numSchema = yup.number(); // $ExpectType NumberSchema
numSchema.isValid(10); // => true
numSchema.min(5);
numSchema.min(5, "message");
numSchema.min(5, () => "message");
numSchema.max(5);
numSchema.max(5, "message");
numSchema.max(5, () => "message");
numSchema.positive();
numSchema.positive("pos");
numSchema.positive(() => "pos");
numSchema.negative();
numSchema.negative("neg");
numSchema.negative(() => "neg");
numSchema.lessThan(5);
numSchema.lessThan(5, "lt");
numSchema.lessThan(5, () => "lt");
numSchema.moreThan(5);
numSchema.moreThan(5, "mt");
numSchema.moreThan(5, () => "mt");
numSchema.integer();
numSchema.integer("int");
numSchema.integer(() => "int");
numSchema.truncate();
numSchema.round("floor");
numSchema
    .validate(5, { strict: true })
    .then(value => value)
    .catch(err => err);

// Boolean Schema
const boolSchema = yup.boolean();
boolSchema.isValid(true); // => true

// Date Schema
const dateSchema = yup.date();
dateSchema.isValid(new Date()); // => true
dateSchema.min(new Date());
dateSchema.min("2017-11-12");
dateSchema.min(new Date(), "message");
dateSchema.min("2017-11-12", "message");
dateSchema.min("2017-11-12", () => "message");
dateSchema.max(new Date());
dateSchema.max("2017-11-12");
dateSchema.max(new Date(), "message");
dateSchema.max("2017-11-12", "message");
dateSchema.max("2017-11-12", () => "message");

// Array Schema
const arrSchema = yup.array().of(yup.number().min(2));
arrSchema.isValid([2, 3]); // => true
arrSchema.isValid([1, -24]); // => false
arrSchema.required();
arrSchema.required("req");
arrSchema.required(() => "req");
arrSchema.ensure();
arrSchema.max(5);
arrSchema.max(5, "max");
arrSchema.max(5, () => "max");
arrSchema.min(5);
arrSchema.min(5, "min");
arrSchema.min(5, () => "min");
arrSchema.compact((value, index, array) => value === array[index]);

yup.array(); // $ExpectType ArraySchema<{}>
yup.array(yup.string()); // $ExpectType ArraySchema<string>
yup.array().of(yup.string()); // $ExpectType ArraySchema<string>

// Object Schema
const objSchema = yup.object().shape({
    name: yup.string().required(),
    age: yup
        .number()
        .required()
        .positive()
        .integer(),
    email: yup.string().email(),
    website: yup.string().url()
});
yup.object().shape({
    num: yup.number()
});
// or
yup.object({
    num: yup.number()
});

objSchema.from("prop", "myProp");
objSchema.from("prop", "myProp", true);
objSchema.noUnknown();
objSchema.noUnknown(true);
objSchema.noUnknown(true, "message");
objSchema.noUnknown(true, () => "message");
objSchema.transformKeys(key => key.toUpperCase());
objSchema.camelCase();
objSchema.constantCase();

const description: SchemaDescription = {
    type: "type",
    label: "label",
    meta: { key: "value" },
    tests: [{ name: "test1", params: {} }, { name: "test2", params: {} }],
    fields: { key: "value" }
};

const testOptions: TestOptions = {
    name: "name",
    test: value => true,
    message: "validation error message",
    params: { param1: "value" },
    exclusive: true
};

const testOptionsWithPromise: TestOptions = {
    name: "name",
    test: value => new Promise(resolve => true),
    message: "validation error message",
    params: { param1: "value" },
    exclusive: true
};

const validateOptions: ValidateOptions = {
    strict: true,
    abortEarly: true,
    stripUnknown: true,
    recursive: true,
    context: {
        key: "value"
    }
};

yup.setLocale({
    number: { max: "Max message", min: "Min message" },
    string: { email: "String message" }
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

// $ExpectType ObjectSchema<MyInterface>
const typedSchema = yup.object<MyInterface>({
    stringField: yup.string().required(), // $ExpectType StringSchema
    numberField: yup.number().required(), // $ExpectType NumberSchema
    subFields: yup
        .object({
            testField: yup.string().required()
        })
        .required(),
    arrayField: yup.array(yup.string()).required() // $ExpectType ArraySchema<string>
});

const testObject: MyInterface = {
    stringField: "test1",
    numberField: 123,
    subFields: {
        testField: "test2"
    },
    arrayField: ["hi"]
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
    a: "qwerty",
    b: "asdfg",
    c: 123
};
const actualAbc: yup.Shape<AB, BC> = expectedAbc;

const definitionAB: yup.ObjectSchemaDefinition<AB> = {
    a: yup.string(),
    b: yup.number()
};
const definitionBC: yup.ObjectSchemaDefinition<BC> = {
    b: yup.string(),
    c: yup.number()
};
const combinedSchema = yup.object(definitionAB).shape(definitionBC); // $ExpectType ObjectSchema<Shape<AB, BC>>

// $ExpectError
yup.object<MyInterface>({
    stringField: yup.string().required(),
    subFields: yup
        .object({
            testField: yup.string().required()
        })
        .required(),
    arrayField: yup.array(yup.string()).required()
});

// $ExpectError
yup.object<MyInterface>({
    stringField: yup.number().required(),
    numberField: yup.number().required(),
    subFields: yup
        .object({
            testField: yup.string().required()
        })
        .required(),
    arrayField: yup.array(yup.string()).required()
});

// $ExpectError
yup.object<MyInterface>({
    stringField: yup.string().required(),
    numberField: yup.number().required(),
    arrayField: yup.array(yup.string()).required()
});

// $ExpectError
yup.object<MyInterface>({
    stringField: yup.string().required(),
    numberField: yup.number().required(),
    subFields: yup
        .object({
            testField: yup.number().required()
        })
        .required(),
    arrayField: yup.array(yup.string()).required()
});
