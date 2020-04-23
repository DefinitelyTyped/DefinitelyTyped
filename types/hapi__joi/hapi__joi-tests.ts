import Joi = require('@hapi/joi');

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

const x: any = null;
declare const value: any;
const num = 0;
const str = '';
declare const bool: boolean;
declare const exp: RegExp;
declare const obj: object;
declare const date: Date;
declare const err: Error;
declare const func: () => void;

declare const numArr: number[];
declare const strArr: string[];
declare const expArr: RegExp[];

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let schema: Joi.Schema = Joi.any();
declare const schemaLike: Joi.SchemaLike;

let anySchema: Joi.AnySchema = Joi.any();
let numSchema: Joi.NumberSchema = Joi.number();
let strSchema: Joi.StringSchema = Joi.string();
let arrSchema: Joi.ArraySchema = Joi.array();
let boolSchema: Joi.BooleanSchema = Joi.boolean();
let binSchema: Joi.BinarySchema = Joi.binary();
let dateSchema: Joi.DateSchema = Joi.date();
let funcSchema: Joi.FunctionSchema = Joi.func();
let objSchema: Joi.ObjectSchema = Joi.object();

declare const schemaArr: Joi.Schema[];

let ref: Joi.Reference = Joi.ref('test');
let description: Joi.Description = {};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let validOpts: Joi.ValidationOptions = {};

validOpts = { abortEarly: bool };
validOpts = { convert: bool };
validOpts = { allowUnknown: bool };
validOpts = { skipFunctions: bool };
validOpts = { stripUnknown: bool };
validOpts = { stripUnknown: { arrays: bool } };
validOpts = { stripUnknown: { objects: bool } };
validOpts = { stripUnknown: { arrays: bool, objects: bool } };
validOpts = { presence: 'optional' || 'required' || 'forbidden' };
validOpts = { context: obj };
validOpts = { noDefaults: bool };
validOpts = {
    abortEarly: true,
    errors: { wrapArrays: bool },
    messages: {
        'any.ref': str,
        'string.email': str
    },
    dateFormat: 'iso'
};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let renOpts: Joi.RenameOptions = {};

renOpts = { alias: bool };
renOpts = { multiple: bool };
renOpts = { override: bool };
renOpts = { ignoreUndefined: bool };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let emailOpts: Joi.EmailOptions = {};

emailOpts = { allowUnicode: bool };
emailOpts = { tlds: { allow: strArr } };
emailOpts = { minDomainSegments: num };
emailOpts = { tlds: false };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let domainOpts: Joi.DomainOptions = {};

domainOpts = { allowUnicode: bool };
domainOpts = { tlds: { allow: strArr } };
domainOpts = { minDomainSegments: num };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let hexOpts: Joi.HexOptions = {};

hexOpts = { byteAligned: bool };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let ipOpts: Joi.IpOptions = {};

ipOpts = { version: str };
ipOpts = { version: strArr };
ipOpts = { cidr: 'forbidden' };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let uriOpts: Joi.UriOptions = {};

uriOpts = { scheme: str };
uriOpts = { scheme: exp };
uriOpts = { scheme: strArr };
uriOpts = { scheme: expArr };
uriOpts = { domain: domainOpts };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let base64Opts: Joi.Base64Options = {};

base64Opts = { paddingRequired: bool };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let dataUriOpts: Joi.DataUriOptions = {};

dataUriOpts = { paddingRequired: bool };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let whenOpts: Joi.WhenOptions = {
    is: Joi.any(),
};

whenOpts = { is: x };
whenOpts = { is: schema, then: schema };
whenOpts = { is: schema, otherwise: schema };
whenOpts = { is: schemaLike, then: schemaLike, otherwise: schemaLike };
whenOpts = { not: schema, then: schema };
whenOpts = { not: schema, otherwise: schema };
whenOpts = { not: schemaLike, then: schemaLike, otherwise: schemaLike };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let whenSchemaOpts: Joi.WhenSchemaOptions = {};

whenSchemaOpts = { then: schema };
whenSchemaOpts = { otherwise: schema };
whenSchemaOpts = { then: schemaLike, otherwise: schemaLike };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let refOpts: Joi.ReferenceOptions = {};

refOpts = { separator: str };
refOpts = { prefix: { local: str } };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let stringRegexOpts: Joi.StringRegexOptions = {};

stringRegexOpts = { name: str };
stringRegexOpts = { invert: bool };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

declare const validErr: Joi.ValidationError;
let validErrItem: Joi.ValidationErrorItem;
let validErrFunc: Joi.ValidationErrorFunction;

validErrItem = {
    message: str,
    type: str,
    path: [str]
};

validErrItem = {
    message: str,
    type: str,
    path: [str],
    context: obj
};

validErrItem = {
    message: str,
    type: str,
    path: [str, num, str],
    context: obj,
};

validErrFunc = errs => errs[0];
validErrFunc = errs => 'Some error';
validErrFunc = errs => err;

// error() can take function with ErrorReport argument
validErrFunc = errors => {
    const path: string = errors[0].path[0];
    const code: string = errors[0].code;
    const messages = errors[0].prefs.messages;

    const message: string = messages ? messages[code].rendered : 'Error';

    const validationErr = new Error();
    validationErr.message = `[${path}]: ${message}`;
    return validationErr;
};

Joi.any().error(validErrFunc);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = anySchema;
schema = numSchema;
schema = strSchema;
schema = arrSchema;
schema = boolSchema;
schema = binSchema;
schema = dateSchema;
schema = funcSchema;
schema = objSchema;

anySchema = anySchema;
anySchema = numSchema;
anySchema = strSchema;
anySchema = arrSchema;
anySchema = boolSchema;
anySchema = binSchema;
anySchema = dateSchema;
anySchema = funcSchema;
anySchema = objSchema;

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let schemaMap: Joi.SchemaMap = {};

schemaMap = {
    a: numSchema,
    b: strSchema
};
schemaMap = {
    a: numSchema,
    b: {
        b1: strSchema,
        b2: anySchema
    }
};
schemaMap = {
    a: numSchema,
    b: [
        { b1: strSchema },
        { b2: anySchema }
    ],
    c: arrSchema,
    d: schemaLike
};
schemaMap = {
    a: 1,
    b: {
        b1: '1',
        b2: 2
    },
    c: [
        { c1: true },
        { c2: null }
    ]
};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

anySchema = Joi.any();

{ // common
    anySchema = anySchema.allow(x);
    anySchema = anySchema.allow(x, x);
    anySchema = anySchema.allow(...[x, x, x]);
    anySchema = anySchema.bind();
    anySchema = anySchema.valid(x);
    anySchema = anySchema.valid(x, x);
    anySchema = anySchema.valid(...[x, x, x]);
    anySchema = anySchema.only();
    anySchema = anySchema.equal(x);
    anySchema = anySchema.equal(x, x);
    anySchema = anySchema.equal(...[x, x, x]);
    anySchema = anySchema.invalid(x);
    anySchema = anySchema.invalid(x, x);
    anySchema = anySchema.invalid(...[x, x, x]);
    anySchema = anySchema.disallow(x);
    anySchema = anySchema.disallow(x, x);
    anySchema = anySchema.disallow(...[x, x, x]);
    anySchema = anySchema.not(x);
    anySchema = anySchema.not(x, x);
    anySchema = anySchema.not(...[x, x, x]);

    anySchema = anySchema.default();
    anySchema = anySchema.default(x);

    anySchema = anySchema.required();
    anySchema = anySchema.optional();
    anySchema = anySchema.forbidden();
    anySchema = anySchema.strip();

    anySchema = anySchema.description(str);
    anySchema = anySchema.note(str);
    anySchema = anySchema.note(str).note(str);
    anySchema = anySchema.tag(str);
    anySchema = anySchema.tag(str).tag(str);

    anySchema = anySchema.meta(obj);
    anySchema = anySchema.example(obj);
    anySchema = anySchema.unit(str);

    anySchema = anySchema.preferences(validOpts);
    anySchema = anySchema.strict();
    anySchema = anySchema.strict(bool);
    anySchema = anySchema.concat(x);

    anySchema = anySchema.when(str, whenOpts);
    anySchema = anySchema.when(ref, whenOpts);
    anySchema = anySchema.when(schema, whenSchemaOpts);

    anySchema = anySchema.label(str);
    anySchema = anySchema.raw();
    anySchema = anySchema.raw(bool);
    anySchema = anySchema.empty();
    anySchema = anySchema.empty(str);
    anySchema = anySchema.empty(anySchema);

    anySchema = anySchema.error(err);
    anySchema = anySchema.error(validErrFunc);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

arrSchema = Joi.array();

arrSchema = arrSchema.has(Joi.any());
arrSchema = arrSchema.sparse();
arrSchema = arrSchema.sparse(bool);
arrSchema = arrSchema.single();
arrSchema = arrSchema.single(bool);
arrSchema = arrSchema.sort();
arrSchema = arrSchema.sort({ order: 'descending' });
arrSchema = arrSchema.sort({ by: 'n' });
arrSchema = arrSchema.sort({ by: ref });
arrSchema = arrSchema.sort();
arrSchema = arrSchema.ordered(anySchema);
arrSchema = arrSchema.ordered(anySchema, numSchema, strSchema, arrSchema, boolSchema, binSchema, dateSchema, funcSchema, objSchema, schemaLike);
arrSchema = arrSchema.ordered(schemaMap);
arrSchema = arrSchema.ordered([schemaMap, schemaMap, schemaLike]);
arrSchema = arrSchema.min(num);
arrSchema = arrSchema.max(num);
arrSchema = arrSchema.length(num);
arrSchema = arrSchema.length(ref);
arrSchema = arrSchema.unique();
arrSchema = arrSchema.unique((a, b) => a.test === b.test);
arrSchema = arrSchema.unique('customer.id');

arrSchema = arrSchema.items(numSchema);
arrSchema = arrSchema.items(numSchema, strSchema, schemaLike);
arrSchema = arrSchema.items([numSchema, strSchema, schemaLike]);
arrSchema = arrSchema.items(schemaMap);
arrSchema = arrSchema.items(schemaMap, schemaMap, schemaLike);
arrSchema = arrSchema.items([schemaMap, schemaMap, schemaLike]);

// - - - - - - - -

{ // common copy paste
    // use search & replace from any
    arrSchema = arrSchema.allow(x);
    arrSchema = arrSchema.allow(x, x);
    arrSchema = arrSchema.allow(...[x, x, x]);
    arrSchema = arrSchema.valid(x);
    arrSchema = arrSchema.valid(x, x);
    arrSchema = arrSchema.valid(...[x, x, x]);
    arrSchema = arrSchema.only();
    arrSchema = arrSchema.equal(x);
    arrSchema = arrSchema.equal(x, x);
    arrSchema = arrSchema.equal(...[x, x, x]);
    arrSchema = arrSchema.invalid(x);
    arrSchema = arrSchema.invalid(x, x);
    arrSchema = arrSchema.invalid(...[x, x, x]);
    arrSchema = arrSchema.disallow(x);
    arrSchema = arrSchema.disallow(x, x);
    arrSchema = arrSchema.disallow(...[x, x, x]);
    arrSchema = arrSchema.not(x);
    arrSchema = arrSchema.not(x, x);
    arrSchema = arrSchema.not(...[x, x, x]);

    arrSchema = arrSchema.default(x);

    arrSchema = arrSchema.required();
    arrSchema = arrSchema.optional();
    arrSchema = arrSchema.forbidden();

    arrSchema = arrSchema.description(str);
    arrSchema = arrSchema.note(str);
    arrSchema = arrSchema.note(str).note(str);
    arrSchema = arrSchema.tag(str);
    arrSchema = arrSchema.tag(str).tag(str);

    arrSchema = arrSchema.meta(obj);
    arrSchema = arrSchema.example(obj);
    arrSchema = arrSchema.unit(str);

    arrSchema = arrSchema.preferences(validOpts);
    arrSchema = arrSchema.strict();
    arrSchema = arrSchema.concat(x);

    arrSchema = arrSchema.when(str, whenOpts);
    arrSchema = arrSchema.when(ref, whenOpts);
    arrSchema = arrSchema.when(schema, whenSchemaOpts);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

boolSchema = Joi.bool();
boolSchema = Joi.boolean();

{ // common copy paste
    boolSchema = boolSchema.allow(x);
    boolSchema = boolSchema.allow(x, x);
    boolSchema = boolSchema.allow(...[x, x, x]);
    boolSchema = boolSchema.valid(x);
    boolSchema = boolSchema.valid(x, x);
    boolSchema = boolSchema.valid(...[x, x, x]);
    boolSchema = boolSchema.only();
    boolSchema = boolSchema.equal(x);
    boolSchema = boolSchema.equal(x, x);
    boolSchema = boolSchema.equal(...[x, x, x]);
    boolSchema = boolSchema.invalid(x);
    boolSchema = boolSchema.invalid(x, x);
    boolSchema = boolSchema.invalid(...[x, x, x]);
    boolSchema = boolSchema.disallow(x);
    boolSchema = boolSchema.disallow(x, x);
    boolSchema = boolSchema.disallow(...[x, x, x]);
    boolSchema = boolSchema.not(x);
    boolSchema = boolSchema.not(x, x);
    boolSchema = boolSchema.not(...[x, x, x]);

    boolSchema = boolSchema.default(x);

    boolSchema = boolSchema.required();
    boolSchema = boolSchema.optional();
    boolSchema = boolSchema.forbidden();

    boolSchema = boolSchema.description(str);
    boolSchema = boolSchema.note(str);
    boolSchema = boolSchema.note(str).note(str);
    boolSchema = boolSchema.tag(str);
    boolSchema = boolSchema.tag(str).tag(str);

    boolSchema = boolSchema.meta(obj);
    boolSchema = boolSchema.example(obj);
    boolSchema = boolSchema.unit(str);

    boolSchema = boolSchema.preferences(validOpts);
    boolSchema = boolSchema.strict();
    boolSchema = boolSchema.concat(x);

    boolSchema = boolSchema.truthy(str);
    boolSchema = boolSchema.truthy(num);
    boolSchema = boolSchema.truthy(str, str);
    boolSchema = boolSchema.truthy(num, num);
    boolSchema = boolSchema.falsy(str);
    boolSchema = boolSchema.falsy(num);
    boolSchema = boolSchema.falsy(str, str);
    boolSchema = boolSchema.falsy(num, num);
    boolSchema = boolSchema.sensitive(bool);

    boolSchema = boolSchema.when(str, whenOpts);
    boolSchema = boolSchema.when(ref, whenOpts);
    boolSchema = boolSchema.when(schema, whenSchemaOpts);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

binSchema = Joi.binary();

binSchema = binSchema.encoding(str);
binSchema = binSchema.min(num);
binSchema = binSchema.max(num);
binSchema = binSchema.length(num);

{ // common
    binSchema = binSchema.allow(x);
    binSchema = binSchema.allow(x, x);
    binSchema = binSchema.allow(...[x, x, x]);
    binSchema = binSchema.valid(x);
    binSchema = binSchema.valid(x, x);
    binSchema = binSchema.valid(...[x, x, x]);
    binSchema = binSchema.only();
    binSchema = binSchema.equal(x);
    binSchema = binSchema.equal(x, x);
    binSchema = binSchema.equal(...[x, x, x]);
    binSchema = binSchema.invalid(x);
    binSchema = binSchema.invalid(x, x);
    binSchema = binSchema.invalid(...[x, x, x]);
    binSchema = binSchema.disallow(x);
    binSchema = binSchema.disallow(x, x);
    binSchema = binSchema.disallow(...[x, x, x]);
    binSchema = binSchema.not(x);
    binSchema = binSchema.not(x, x);
    binSchema = binSchema.not(...[x, x, x]);

    binSchema = binSchema.default(x);

    binSchema = binSchema.required();
    binSchema = binSchema.optional();
    binSchema = binSchema.forbidden();

    binSchema = binSchema.description(str);
    binSchema = binSchema.note(str);
    binSchema = binSchema.note(str).note(str);
    binSchema = binSchema.tag(str);
    binSchema = binSchema.tag(str).tag(str);

    binSchema = binSchema.meta(obj);
    binSchema = binSchema.example(obj);
    binSchema = binSchema.unit(str);

    binSchema = binSchema.preferences(validOpts);
    binSchema = binSchema.strict();
    binSchema = binSchema.concat(x);

    binSchema = binSchema.when(str, whenOpts);
    binSchema = binSchema.when(ref, whenOpts);
    binSchema = binSchema.when(schema, whenSchemaOpts);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

dateSchema = Joi.date();

dateSchema = dateSchema.greater('now');
dateSchema = dateSchema.less('now');
dateSchema = dateSchema.min('now');
dateSchema = dateSchema.max('now');

dateSchema = dateSchema.greater(date);
dateSchema = dateSchema.less(date);
dateSchema = dateSchema.min(date);
dateSchema = dateSchema.max(date);

dateSchema = dateSchema.greater(str);
dateSchema = dateSchema.less(str);
dateSchema = dateSchema.min(str);
dateSchema = dateSchema.max(str);

dateSchema = dateSchema.greater(num);
dateSchema = dateSchema.less(num);
dateSchema = dateSchema.min(num);
dateSchema = dateSchema.max(num);

dateSchema = dateSchema.greater(ref);
dateSchema = dateSchema.less(ref);
dateSchema = dateSchema.min(ref);
dateSchema = dateSchema.max(ref);

dateSchema = dateSchema.iso();

dateSchema = dateSchema.timestamp();
dateSchema = dateSchema.timestamp('javascript');
dateSchema = dateSchema.timestamp('unix');

{ // common
    dateSchema = dateSchema.allow(x);
    dateSchema = dateSchema.allow(x, x);
    dateSchema = dateSchema.allow(...[x, x, x]);
    dateSchema = dateSchema.valid(x);
    dateSchema = dateSchema.valid(x, x);
    dateSchema = dateSchema.valid(...[x, x, x]);
    dateSchema = dateSchema.only();
    dateSchema = dateSchema.equal(x);
    dateSchema = dateSchema.equal(x, x);
    dateSchema = dateSchema.equal(...[x, x, x]);
    dateSchema = dateSchema.invalid(x);
    dateSchema = dateSchema.invalid(x, x);
    dateSchema = dateSchema.invalid(...[x, x, x]);
    dateSchema = dateSchema.disallow(x);
    dateSchema = dateSchema.disallow(x, x);
    dateSchema = dateSchema.disallow(...[x, x, x]);
    dateSchema = dateSchema.not(x);
    dateSchema = dateSchema.not(x, x);
    dateSchema = dateSchema.not(...[x, x, x]);

    dateSchema = dateSchema.default(x);

    dateSchema = dateSchema.required();
    dateSchema = dateSchema.optional();
    dateSchema = dateSchema.forbidden();

    dateSchema = dateSchema.description(str);
    dateSchema = dateSchema.note(str);
    dateSchema = dateSchema.note(str).note(str);
    dateSchema = dateSchema.tag(str);
    dateSchema = dateSchema.tag(str).tag(str);

    dateSchema = dateSchema.meta(obj);
    dateSchema = dateSchema.example(obj);
    dateSchema = dateSchema.unit(str);

    dateSchema = dateSchema.preferences(validOpts);
    dateSchema = dateSchema.strict();
    dateSchema = dateSchema.concat(x);

    dateSchema = dateSchema.when(str, whenOpts);
    dateSchema = dateSchema.when(ref, whenOpts);
    dateSchema = dateSchema.when(schema, whenSchemaOpts);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

funcSchema = Joi.func();
funcSchema = Joi.function();

funcSchema = funcSchema.arity(num);
funcSchema = funcSchema.minArity(num);
funcSchema = funcSchema.maxArity(num);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

numSchema = Joi.number();

numSchema = numSchema.min(num);
numSchema = numSchema.min(ref);
numSchema = numSchema.max(num);
numSchema = numSchema.max(ref);
numSchema = numSchema.greater(num);
numSchema = numSchema.greater(ref);
numSchema = numSchema.less(num);
numSchema = numSchema.less(ref);
numSchema = numSchema.integer();
numSchema = numSchema.unsafe();
numSchema = numSchema.precision(num);
numSchema = numSchema.multiple(num);
numSchema = numSchema.positive();
numSchema = numSchema.negative();
numSchema = numSchema.port();

{ // common
    numSchema = numSchema.allow(x);
    numSchema = numSchema.allow(x, x);
    numSchema = numSchema.allow(...[x, x, x]);
    numSchema = numSchema.valid(x);
    numSchema = numSchema.valid(x, x);
    numSchema = numSchema.valid(...[x, x, x]);
    numSchema = numSchema.only();
    numSchema = numSchema.equal(x);
    numSchema = numSchema.equal(x, x);
    numSchema = numSchema.equal(...[x, x, x]);
    numSchema = numSchema.invalid(x);
    numSchema = numSchema.invalid(x, x);
    numSchema = numSchema.invalid(...[x, x, x]);
    numSchema = numSchema.disallow(x);
    numSchema = numSchema.disallow(x, x);
    numSchema = numSchema.disallow(...[x, x, x]);
    numSchema = numSchema.not(x);
    numSchema = numSchema.not(x, x);
    numSchema = numSchema.not(...[x, x, x]);

    numSchema = numSchema.default(x);

    numSchema = numSchema.required();
    numSchema = numSchema.optional();
    numSchema = numSchema.forbidden();

    numSchema = numSchema.description(str);
    numSchema = numSchema.note(str);
    numSchema = numSchema.note(str).note(str);
    numSchema = numSchema.tag(str);
    numSchema = numSchema.tag(str).tag(str);

    numSchema = numSchema.meta(obj);
    numSchema = numSchema.example(obj);
    numSchema = numSchema.unit(str);

    numSchema = numSchema.preferences(validOpts);
    numSchema = numSchema.strict();
    numSchema = numSchema.concat(x);

    numSchema = numSchema.when(str, whenOpts);
    numSchema = numSchema.when(ref, whenOpts);
    numSchema = numSchema.when(schema, whenSchemaOpts);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

objSchema = Joi.object();
objSchema = Joi.object(schemaMap);

objSchema = objSchema.keys();
objSchema = objSchema.keys(schemaMap);

objSchema = objSchema.append();
objSchema = objSchema.append(schemaMap);

objSchema = objSchema.min(num);
objSchema = objSchema.max(num);
objSchema = objSchema.length(num);

objSchema = objSchema.pattern(exp, schema);
objSchema = objSchema.pattern(exp, schemaLike);

objSchema = objSchema.and(str);
objSchema = objSchema.and(str, str);
objSchema = objSchema.and(str, str, { separator: ',' });

objSchema = objSchema.nand(str);
objSchema = objSchema.nand(str, str);
objSchema = objSchema.nand(str, str, { separator: ',' });

objSchema = objSchema.schema();

objSchema = objSchema.or(str);
objSchema = objSchema.or(str, str);
objSchema = objSchema.or(str, str, { separator: ',' });

objSchema = objSchema.oxor(str);
objSchema = objSchema.oxor(str, str);
objSchema = objSchema.oxor(str, str, { separator: ',' });

objSchema = objSchema.xor(str);
objSchema = objSchema.xor(str, str);
objSchema = objSchema.xor(str, str, { separator: ',' });

objSchema = objSchema.with(str, str);
objSchema = objSchema.with(str, strArr);

objSchema = objSchema.without(str, str);
objSchema = objSchema.without(str, strArr);

objSchema = objSchema.rename(str, str);
objSchema = objSchema.rename(str, str, renOpts);

objSchema = objSchema.assert(str, schema);
objSchema = objSchema.assert(str, schema, str);
objSchema = objSchema.assert(ref, schema);
objSchema = objSchema.assert(ref, schema, str);

objSchema = objSchema.unknown();
objSchema = objSchema.unknown(bool);

objSchema = objSchema.instance(func);
objSchema = objSchema.instance(func, str);

objSchema = objSchema.ref();

{ // common
    objSchema = objSchema.allow(x);
    objSchema = objSchema.allow(x, x);
    objSchema = objSchema.allow(...[x, x, x]);
    objSchema = objSchema.valid(x);
    objSchema = objSchema.valid(x, x);
    objSchema = objSchema.valid(...[x, x, x]);
    objSchema = objSchema.only();
    objSchema = objSchema.equal(x);
    objSchema = objSchema.equal(x, x);
    objSchema = objSchema.equal(...[x, x, x]);
    objSchema = objSchema.invalid(x);
    objSchema = objSchema.invalid(x, x);
    objSchema = objSchema.invalid(...[x, x, x]);
    objSchema = objSchema.disallow(x);
    objSchema = objSchema.disallow(x, x);
    objSchema = objSchema.disallow(...[x, x, x]);
    objSchema = objSchema.not(x);
    objSchema = objSchema.not(x, x);
    objSchema = objSchema.not(...[x, x, x]);

    objSchema = objSchema.default(x);

    objSchema = objSchema.required();
    objSchema = objSchema.optional();
    objSchema = objSchema.forbidden();

    objSchema = objSchema.description(str);
    objSchema = objSchema.note(str);
    objSchema = objSchema.note(str).note(str);
    objSchema = objSchema.tag(str);
    objSchema = objSchema.tag(str).tag(str);

    objSchema = objSchema.meta(obj);
    objSchema = objSchema.example(obj);
    objSchema = objSchema.unit(str);

    objSchema = objSchema.preferences(validOpts);
    objSchema = objSchema.strict();
    objSchema = objSchema.concat(x);

    objSchema = objSchema.when(str, whenOpts);
    objSchema = objSchema.when(ref, whenOpts);
    objSchema = objSchema.when(schema, whenSchemaOpts);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

strSchema = Joi.string();

strSchema = strSchema.insensitive();
strSchema = strSchema.min(num);
strSchema = strSchema.min(num, str);
strSchema = strSchema.min(ref);
strSchema = strSchema.min(ref, str);
strSchema = strSchema.max(num);
strSchema = strSchema.max(num, str);
strSchema = strSchema.max(ref);
strSchema = strSchema.max(ref, str);
strSchema = strSchema.creditCard();
strSchema = strSchema.length(num);
strSchema = strSchema.length(num, str);
strSchema = strSchema.length(ref);
strSchema = strSchema.length(ref, str);
strSchema = strSchema.pattern(exp);
strSchema = strSchema.pattern(exp, str);
strSchema = strSchema.pattern(exp, stringRegexOpts);
strSchema = strSchema.regex(exp);
strSchema = strSchema.regex(exp, str);
strSchema = strSchema.regex(exp, stringRegexOpts);
strSchema = strSchema.replace(exp, str);
strSchema = strSchema.replace(str, str);
strSchema = strSchema.alphanum();
strSchema = strSchema.token();
strSchema = strSchema.email();
strSchema = strSchema.email(emailOpts);
strSchema = strSchema.domain();
strSchema = strSchema.domain(domainOpts);
strSchema = strSchema.ip();
strSchema = strSchema.ip(ipOpts);
strSchema = strSchema.uri();
strSchema = strSchema.uri(uriOpts);
strSchema = strSchema.guid();
strSchema = strSchema.guid({
    version: ['uuidv1', 'uuidv2', 'uuidv3', 'uuidv4', 'uuidv5']
});
strSchema = strSchema.guid({ version: 'uuidv4' });
strSchema = strSchema.uuid();
strSchema = strSchema.uuid({
    version: ['uuidv1', 'uuidv2', 'uuidv3', 'uuidv4', 'uuidv5'],
});
strSchema = strSchema.uuid({ version: 'uuidv4' });
strSchema = strSchema.hex();
strSchema = strSchema.hex(hexOpts);
strSchema = strSchema.hostname();
strSchema = strSchema.isoDate();
strSchema = strSchema.lowercase();
strSchema = strSchema.uppercase();
strSchema = strSchema.trim();
strSchema = strSchema.truncate();
strSchema = strSchema.truncate(false);
strSchema = strSchema.normalize();
strSchema = strSchema.normalize('NFKC');
strSchema = strSchema.base64();
strSchema = strSchema.base64(base64Opts);
strSchema = strSchema.dataUri();
strSchema = strSchema.dataUri(dataUriOpts);

{ // common
    strSchema = strSchema.allow(x);
    strSchema = strSchema.allow(x, x);
    strSchema = strSchema.allow(...[x, x, x]);
    strSchema = strSchema.valid(x);
    strSchema = strSchema.valid(x, x);
    strSchema = strSchema.valid(...[x, x, x]);
    strSchema = strSchema.only();
    strSchema = strSchema.equal(x);
    strSchema = strSchema.equal(x, x);
    strSchema = strSchema.equal(...[x, x, x]);
    strSchema = strSchema.invalid(x);
    strSchema = strSchema.invalid(x, x);
    strSchema = strSchema.invalid(...[x, x, x]);
    strSchema = strSchema.disallow(x);
    strSchema = strSchema.disallow(x, x);
    strSchema = strSchema.disallow(...[x, x, x]);
    strSchema = strSchema.not(x);
    strSchema = strSchema.not(x, x);
    strSchema = strSchema.not(...[x, x, x]);

    strSchema = strSchema.default(x);

    strSchema = strSchema.required();
    strSchema = strSchema.optional();
    strSchema = strSchema.forbidden();

    strSchema = strSchema.description(str);
    strSchema = strSchema.note(str);
    strSchema = strSchema.note(str).note(str);
    strSchema = strSchema.tag(str);
    strSchema = strSchema.tag(str).tag(str);

    strSchema = strSchema.meta(obj);
    strSchema = strSchema.example(obj);
    strSchema = strSchema.unit(str);

    strSchema = strSchema.preferences(validOpts);
    strSchema = strSchema.strict();
    strSchema = strSchema.concat(x);

    strSchema = strSchema.when(str, whenOpts);
    strSchema = strSchema.when(ref, whenOpts);
    strSchema = strSchema.when(schema, whenSchemaOpts);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Joi.checkPreferences(validOpts);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let expr;

expr = Joi.expression('{{foo}}');
expr = Joi.expression('{{foo}}', { adjust: (value) => value });
expr = Joi.expression('{{foo}}', { ancestor: 3 });
expr = Joi.expression('{{foo}}', { in: true });
expr = Joi.expression('{{foo}}', { iterables: true });
expr = Joi.expression('{{foo}}', { map: [['key', 'value']] });
expr = Joi.expression('{{foo}}', { prefix: { local: '%' } });
expr = Joi.expression('{{foo}}', { separator: '_' });

expr = Joi.x('{{foo}}');
expr = Joi.x('{{foo}}', { adjust: (value) => value });
expr = Joi.x('{{foo}}', { ancestor: 3 });
expr = Joi.x('{{foo}}', { in: true });
expr = Joi.x('{{foo}}', { iterables: true });
expr = Joi.x('{{foo}}', { map: [['key', 'value']] });
expr = Joi.x('{{foo}}', { prefix: { local: '%' } });
expr = Joi.x('{{foo}}', { separator: '_' });

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

const { string, object } = Joi.types();

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = Joi.alternatives();
schema = Joi.alternatives().try(schemaArr);
schema = Joi.alternatives().try(schema, schema);

schema = Joi.alternatives(schemaArr);
schema = Joi.alternatives(schema, anySchema, boolSchema);

schema = Joi.alt();
schema = Joi.alt().try(schemaArr);
schema = Joi.alt().try(schema, schema);

schema = Joi.alt(schemaArr);
schema = Joi.alt(schema, anySchema, boolSchema);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = Joi.link(str);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

{ // validate tests
    {
        let value = { username: 'example', password: 'example' };
        const schema = Joi.object().keys({
            username: Joi.string().max(255).required(),
            password: Joi.string().pattern(/^[a-zA-Z0-9]{3,255}$/).required(),
        });
        let result: Joi.ValidationResult;
        let asyncResult: Promise<any>;

        value = schema.validate(value).value;

        result = schema.validate(value);
        if (result.error) {
            throw Error('error should not be set');
        }
        result = schema.validate(value, validOpts);
        asyncResult = schema.validateAsync(value);
        asyncResult = schema.validateAsync(value, validOpts);

        asyncResult
            .then(val => JSON.stringify(val, null, 2))
            .then(val => { throw new Error('one error'); })
            .catch(e => { });

        const falsyValue = { username: 'example' };
        result = schema.validate(falsyValue);
        if (!result.error) {
            throw Error('error should be set');
        }
    }
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = Joi.compile(obj);
schema = Joi.compile(schemaMap);

Joi.assert(obj, schema);
Joi.assert(obj, schema, str);
Joi.assert(obj, schema, str, validOpts);
Joi.assert(obj, schema, err);
Joi.assert(obj, schema, err, validOpts);
Joi.assert(obj, schema, validOpts);
Joi.assert(obj, schemaLike);

{
    let value = { username: 'example', password: 'example' };
    value = Joi.attempt(obj, schema);
    value = Joi.attempt(obj, schema, str);
    value = Joi.attempt(obj, schema, str, validOpts);
    value = Joi.attempt(obj, schema, err);
    value = Joi.attempt(obj, schema, err, validOpts);
    value = Joi.attempt(obj, schema, validOpts);
    value = Joi.attempt(obj, schemaLike);
}

ref = Joi.ref(str, refOpts);
ref = Joi.ref(str);

Joi.isExpression(expr);
Joi.isRef(ref);
Joi.isSchema(schema);

description = schema.describe();

const Joi2 = Joi.extend({ type: '', base: schema });

const Joi3 = Joi.extend({
    type: 'string',
    base: Joi.string(),
    messages: {
        asd: 'must be exactly asd(f)'
    },
    coerce(schema, value) {
        return { value };
    },
    rules: {
        asd: {
            args: [
                {
                    name: 'allowFalse',
                    ref: true,
                    assert: Joi.boolean(),
                }
            ],
            method(allowFalse: boolean) {
                return this.$_addRule({
                    name: 'asd',
                    args: {
                        allowFalse,
                    }
                });
            },
            validate(value: boolean, helpers, params, options) {
                if (value || params.allowFalse && !value) {
                    return value;
                }

                return helpers.error('asd', { v: value }, options);
            }
        }
    }
});

const Joi4 = Joi.extend({ type: '', base: schema }, { type: '', base: schema });

const Joi5 = Joi.extend({ type: '', base: schema }, { type: '', base: schema }, { type: '', base: schema });

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

const defaultsJoi = Joi.defaults((schema) => {
    switch (schema.type) {
        case 'string':
            return schema.allow('');
        case 'object':
            return (schema as Joi.ObjectSchema).min(1);
        default:
            return schema;
    }
});

schema = Joi.allow(x, x);
schema = Joi.allow(...[x, x, x]);
schema = Joi.valid(x);
schema = Joi.valid(x, x);
schema = Joi.valid(...[x, x, x]);
schema = Joi.equal(x);
schema = Joi.equal(x, x);
schema = Joi.equal(...[x, x, x]);
schema = Joi.invalid(x);
schema = Joi.invalid(x, x);
schema = Joi.invalid(...[x, x, x]);
schema = Joi.disallow(x);
schema = Joi.disallow(x, x);
schema = Joi.disallow(...[x, x, x]);
schema = Joi.not(x);
schema = Joi.not(x, x);
schema = Joi.not(...[x, x, x]);

schema = Joi.required();
schema = Joi.optional();
schema = Joi.forbidden();

schema = Joi.preferences(validOpts);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = Joi.allow(x, x);
schema = Joi.allow(...[x, x, x]);
schema = Joi.valid(x);
schema = Joi.valid(x, x);
schema = Joi.valid(...[x, x, x]);
schema = Joi.equal(x);
schema = Joi.equal(x, x);
schema = Joi.equal(...[x, x, x]);
schema = Joi.invalid(x);
schema = Joi.invalid(x, x);
schema = Joi.invalid(...[x, x, x]);
schema = Joi.disallow(x);
schema = Joi.disallow(x, x);
schema = Joi.disallow(...[x, x, x]);
schema = Joi.not(x);
schema = Joi.not(x, x);
schema = Joi.not(...[x, x, x]);

schema = Joi.required();
schema = Joi.exist();
schema = Joi.optional();
schema = Joi.forbidden();

schema = Joi.preferences(validOpts);

schema = Joi.when(str, whenOpts);
schema = Joi.when(ref, whenOpts);
schema = Joi.when(schema, whenSchemaOpts);

ref = Joi.in(str);
ref = Joi.in(str, refOpts);

schema = Joi.symbol();
schema = Joi.symbol().map(new Map<string, symbol>());
schema = Joi.symbol().map({
    key: Symbol('asd'),
});

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = Joi.any();
const terms = schema.$_terms;

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// Test Joi.object, Joi.append and Joi.extends (with `any` type)

// should be able to append any new properties
let anyObject = Joi.object({
    name: Joi.string().required(),
    family: Joi.string(),
});

anyObject = anyObject.append({
    age: Joi.number(),
}).append({
    height: Joi.number(),
});

anyObject = anyObject.keys({
    length: Joi.string()
});

// test with keys
Joi.object().keys({
    name: Joi.string().required(),
    family: Joi.string(),
}).append({
    age: Joi.number(),
}).append({
    height: Joi.number(),
}).keys({
    length: Joi.string()
});

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// Test generic types

interface User {
    name: string;
    family?: string;
    age: number;
}

const userSchemaObject = Joi.object<User>({
    name: Joi.string().required(),
    family: Joi.string(),
});

let userSchema = Joi.object<User>().keys({
    name: Joi.string().required(),
    family: Joi.string(),
});

userSchema = userSchema.append({
    age: Joi.number(),
});

userSchema = userSchema.append({
    height: Joi.number(), // $ExpectError
});

const userSchema2 = Joi.object<User>().keys({
    name: Joi.string().required(),
}).keys({
    family: Joi.string(),
});

const userSchemaError = Joi.object<User>().keys({
    name: Joi.string().required(),
    family: Joi.string(),
    height: Joi.number(), // $ExpectError
});

const userSchemaObjectError = Joi.object<User>({
    name: Joi.string().required(),
    family: Joi.string(),
    height: Joi.number(), // $ExpectError
});
