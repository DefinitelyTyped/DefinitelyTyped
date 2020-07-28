import * as Joi from 'react-native-joi';

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let x: any = null;
declare const value: any;
let num = 0;
let str = '';
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
// $ExpectType AnySchema
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
let altSchema: Joi.AlternativesSchema = Joi.alternatives();

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
  language: {
    root: str,
    key: str,
    messages: { wrapArrays: bool },
    string: { base: str },
    number: { base: str },
    object: {
      base: false,
      children: { childRule: str },
    },
    customType: {
      customRule: str,
    },
  },
};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let renOpts: Joi.RenameOptions = {};

renOpts = { alias: bool };
renOpts = { multiple: bool };
renOpts = { override: bool };
renOpts = { ignoreUndefined: bool };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let emailOpts: Joi.EmailOptions = {};

emailOpts = { errorLevel: num };
emailOpts = { errorLevel: bool };
emailOpts = { tldWhitelist: strArr };
emailOpts = { tldWhitelist: obj };
emailOpts = { minDomainAtoms: num };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let hexOpts: Joi.HexOptions = {};

hexOpts = { byteAligned: bool };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let ipOpts: Joi.IpOptions = {};

ipOpts = { version: str };
ipOpts = { version: strArr };
ipOpts = { cidr: str };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let uriOpts: Joi.UriOptions = {};

uriOpts = { scheme: str };
uriOpts = { scheme: exp };
uriOpts = { scheme: strArr };
uriOpts = { scheme: expArr };

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

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let whenSchemaOpts: Joi.WhenSchemaOptions = {};

whenSchemaOpts = { then: schema };
whenSchemaOpts = { otherwise: schema };
whenSchemaOpts = { then: schemaLike, otherwise: schemaLike };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

let refOpts: Joi.ReferenceOptions = {};

refOpts = { separator: str };
refOpts = { contextPrefix: str };

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
  path: [str],
};

validErrItem = {
  message: str,
  type: str,
  path: [str],
  options: validOpts,
  context: obj,
};

validErrFunc = errs => errs;
validErrFunc = errs => errs[0];
validErrFunc = errs => 'Some error';
validErrFunc = errs => err;

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
  b: strSchema,
};
schemaMap = {
  a: numSchema,
  b: {
    b1: strSchema,
    b2: anySchema,
  },
};
schemaMap = {
  a: numSchema,
  b: [{ b1: strSchema }, { b2: anySchema }],
  c: arrSchema,
  d: schemaLike,
};
schemaMap = {
  a: 1,
  b: {
    b1: '1',
    b2: 2,
  },
  c: [{ c1: true }, { c2: null }],
};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

anySchema = Joi.any();

{
  // common
  anySchema = anySchema.allow(x);
  anySchema = anySchema.allow(x, x);
  anySchema = anySchema.allow([x, x, x]);
  anySchema = anySchema.bind();
  anySchema = anySchema.valid(x);
  anySchema = anySchema.valid(x, x);
  anySchema = anySchema.valid([x, x, x]);
  anySchema = anySchema.only(x);
  anySchema = anySchema.only(x, x);
  anySchema = anySchema.only([x, x, x]);
  anySchema = anySchema.equal(x);
  anySchema = anySchema.equal(x, x);
  anySchema = anySchema.equal([x, x, x]);
  anySchema = anySchema.invalid(x);
  anySchema = anySchema.invalid(x, x);
  anySchema = anySchema.invalid([x, x, x]);
  anySchema = anySchema.disallow(x);
  anySchema = anySchema.disallow(x, x);
  anySchema = anySchema.disallow([x, x, x]);
  anySchema = anySchema.not(x);
  anySchema = anySchema.not(x, x);
  anySchema = anySchema.not([x, x, x]);

  anySchema = anySchema.default();
  anySchema = anySchema.default(x);
  anySchema = anySchema.default(x, str);

  anySchema = anySchema.required();
  anySchema = anySchema.optional();
  anySchema = anySchema.forbidden();
  anySchema = anySchema.strip();

  anySchema = anySchema.description(str);
  anySchema = anySchema.notes(str);
  anySchema = anySchema.notes(strArr);
  anySchema = anySchema.tags(str);
  anySchema = anySchema.tags(strArr);

  anySchema = anySchema.meta(obj);
  anySchema = anySchema.example(obj);
  anySchema = anySchema.unit(str);

  anySchema = anySchema.options(validOpts);
  anySchema = anySchema.strict();
  anySchema = anySchema.strict(bool);
  anySchema = anySchema.concat(x);

  altSchema = anySchema.when(str, whenOpts);
  altSchema = anySchema.when(ref, whenOpts);
  altSchema = anySchema.when(schema, whenSchemaOpts);

  anySchema = anySchema.label(str);
  anySchema = anySchema.raw();
  anySchema = anySchema.raw(bool);
  anySchema = anySchema.empty();
  anySchema = anySchema.empty(str);
  anySchema = anySchema.empty(anySchema);

  anySchema = anySchema.error(err);
  anySchema = anySchema.error(validErrFunc);
  anySchema = anySchema.error(validErrFunc, { self: true });
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

arrSchema = Joi.array();

arrSchema = arrSchema.has(Joi.any());
arrSchema = arrSchema.sparse();
arrSchema = arrSchema.sparse(bool);
arrSchema = arrSchema.single();
arrSchema = arrSchema.single(bool);
arrSchema = arrSchema.ordered(anySchema);
arrSchema = arrSchema.ordered(
  anySchema,
  numSchema,
  strSchema,
  arrSchema,
  boolSchema,
  binSchema,
  dateSchema,
  funcSchema,
  objSchema,
  schemaLike,
);
arrSchema = arrSchema.ordered(schemaMap);
arrSchema = arrSchema.ordered([schemaMap, schemaMap, schemaLike]);
arrSchema = arrSchema.min(num);
arrSchema = arrSchema.max(num);
arrSchema = arrSchema.length(num);
arrSchema = arrSchema.length(ref);
arrSchema = arrSchema.unique();
arrSchema = arrSchema.unique((a, b) => a.test === b.test);
arrSchema = arrSchema.unique('customer.id');
arrSchema = arrSchema.unique('customer.id', { ignoreUndefined: true });

arrSchema = arrSchema.items(numSchema);
arrSchema = arrSchema.items(numSchema, strSchema, schemaLike);
arrSchema = arrSchema.items([numSchema, strSchema, schemaLike]);
arrSchema = arrSchema.items(schemaMap);
arrSchema = arrSchema.items(schemaMap, schemaMap, schemaLike);
arrSchema = arrSchema.items([schemaMap, schemaMap, schemaLike]);

// - - - - - - - -

{
  // common copy paste
  // use search & replace from any
  arrSchema = arrSchema.allow(x);
  arrSchema = arrSchema.allow(x, x);
  arrSchema = arrSchema.allow([x, x, x]);
  arrSchema = arrSchema.valid(x);
  arrSchema = arrSchema.valid(x, x);
  arrSchema = arrSchema.valid([x, x, x]);
  arrSchema = arrSchema.only(x);
  arrSchema = arrSchema.only(x, x);
  arrSchema = arrSchema.only([x, x, x]);
  arrSchema = arrSchema.equal(x);
  arrSchema = arrSchema.equal(x, x);
  arrSchema = arrSchema.equal([x, x, x]);
  arrSchema = arrSchema.invalid(x);
  arrSchema = arrSchema.invalid(x, x);
  arrSchema = arrSchema.invalid([x, x, x]);
  arrSchema = arrSchema.disallow(x);
  arrSchema = arrSchema.disallow(x, x);
  arrSchema = arrSchema.disallow([x, x, x]);
  arrSchema = arrSchema.not(x);
  arrSchema = arrSchema.not(x, x);
  arrSchema = arrSchema.not([x, x, x]);

  arrSchema = arrSchema.default(x);

  arrSchema = arrSchema.required();
  arrSchema = arrSchema.optional();
  arrSchema = arrSchema.forbidden();

  arrSchema = arrSchema.description(str);
  arrSchema = arrSchema.notes(str);
  arrSchema = arrSchema.notes(strArr);
  arrSchema = arrSchema.tags(str);
  arrSchema = arrSchema.tags(strArr);

  arrSchema = arrSchema.meta(obj);
  arrSchema = arrSchema.example(obj);
  arrSchema = arrSchema.unit(str);

  arrSchema = arrSchema.options(validOpts);
  arrSchema = arrSchema.strict();
  arrSchema = arrSchema.concat(x);

  altSchema = arrSchema.when(str, whenOpts);
  altSchema = arrSchema.when(ref, whenOpts);
  altSchema = arrSchema.when(schema, whenSchemaOpts);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

boolSchema = Joi.bool();
boolSchema = Joi.boolean();

{
  // common copy paste
  boolSchema = boolSchema.allow(x);
  boolSchema = boolSchema.allow(x, x);
  boolSchema = boolSchema.allow([x, x, x]);
  boolSchema = boolSchema.valid(x);
  boolSchema = boolSchema.valid(x, x);
  boolSchema = boolSchema.valid([x, x, x]);
  boolSchema = boolSchema.only(x);
  boolSchema = boolSchema.only(x, x);
  boolSchema = boolSchema.only([x, x, x]);
  boolSchema = boolSchema.equal(x);
  boolSchema = boolSchema.equal(x, x);
  boolSchema = boolSchema.equal([x, x, x]);
  boolSchema = boolSchema.invalid(x);
  boolSchema = boolSchema.invalid(x, x);
  boolSchema = boolSchema.invalid([x, x, x]);
  boolSchema = boolSchema.disallow(x);
  boolSchema = boolSchema.disallow(x, x);
  boolSchema = boolSchema.disallow([x, x, x]);
  boolSchema = boolSchema.not(x);
  boolSchema = boolSchema.not(x, x);
  boolSchema = boolSchema.not([x, x, x]);

  boolSchema = boolSchema.default(x);

  boolSchema = boolSchema.required();
  boolSchema = boolSchema.optional();
  boolSchema = boolSchema.forbidden();

  boolSchema = boolSchema.description(str);
  boolSchema = boolSchema.notes(str);
  boolSchema = boolSchema.notes(strArr);
  boolSchema = boolSchema.tags(str);
  boolSchema = boolSchema.tags(strArr);

  boolSchema = boolSchema.meta(obj);
  boolSchema = boolSchema.example(obj);
  boolSchema = boolSchema.unit(str);

  boolSchema = boolSchema.options(validOpts);
  boolSchema = boolSchema.strict();
  boolSchema = boolSchema.concat(x);

  boolSchema = boolSchema.truthy(str);
  boolSchema = boolSchema.truthy(num);
  boolSchema = boolSchema.truthy(strArr);
  boolSchema = boolSchema.truthy(numArr);
  boolSchema = boolSchema.truthy(str, str);
  boolSchema = boolSchema.truthy(strArr, str);
  boolSchema = boolSchema.truthy(str, strArr);
  boolSchema = boolSchema.truthy(strArr, strArr);
  boolSchema = boolSchema.falsy(str);
  boolSchema = boolSchema.falsy(num);
  boolSchema = boolSchema.falsy(strArr);
  boolSchema = boolSchema.falsy(numArr);
  boolSchema = boolSchema.falsy(str, str);
  boolSchema = boolSchema.falsy(strArr, str);
  boolSchema = boolSchema.falsy(str, strArr);
  boolSchema = boolSchema.falsy(strArr, strArr);
  boolSchema = boolSchema.insensitive(bool);

  altSchema = boolSchema.when(str, whenOpts);
  altSchema = boolSchema.when(ref, whenOpts);
  altSchema = boolSchema.when(schema, whenSchemaOpts);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

binSchema = Joi.binary();

binSchema = binSchema.encoding(str);
binSchema = binSchema.min(num);
binSchema = binSchema.max(num);
binSchema = binSchema.length(num);

{
  // common
  binSchema = binSchema.allow(x);
  binSchema = binSchema.allow(x, x);
  binSchema = binSchema.allow([x, x, x]);
  binSchema = binSchema.valid(x);
  binSchema = binSchema.valid(x, x);
  binSchema = binSchema.valid([x, x, x]);
  binSchema = binSchema.only(x);
  binSchema = binSchema.only(x, x);
  binSchema = binSchema.only([x, x, x]);
  binSchema = binSchema.equal(x);
  binSchema = binSchema.equal(x, x);
  binSchema = binSchema.equal([x, x, x]);
  binSchema = binSchema.invalid(x);
  binSchema = binSchema.invalid(x, x);
  binSchema = binSchema.invalid([x, x, x]);
  binSchema = binSchema.disallow(x);
  binSchema = binSchema.disallow(x, x);
  binSchema = binSchema.disallow([x, x, x]);
  binSchema = binSchema.not(x);
  binSchema = binSchema.not(x, x);
  binSchema = binSchema.not([x, x, x]);

  binSchema = binSchema.default(x);

  binSchema = binSchema.required();
  binSchema = binSchema.optional();
  binSchema = binSchema.forbidden();

  binSchema = binSchema.description(str);
  binSchema = binSchema.notes(str);
  binSchema = binSchema.notes(strArr);
  binSchema = binSchema.tags(str);
  binSchema = binSchema.tags(strArr);

  binSchema = binSchema.meta(obj);
  binSchema = binSchema.example(obj);
  binSchema = binSchema.unit(str);

  binSchema = binSchema.options(validOpts);
  binSchema = binSchema.strict();
  binSchema = binSchema.concat(x);

  altSchema = binSchema.when(str, whenOpts);
  altSchema = binSchema.when(ref, whenOpts);
  altSchema = binSchema.when(schema, whenSchemaOpts);
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

dateSchema = dateSchema.format(str);
dateSchema = dateSchema.format(strArr);

dateSchema = dateSchema.iso();

dateSchema = dateSchema.timestamp();
dateSchema = dateSchema.timestamp('javascript');
dateSchema = dateSchema.timestamp('unix');

{
  // common
  dateSchema = dateSchema.allow(x);
  dateSchema = dateSchema.allow(x, x);
  dateSchema = dateSchema.allow([x, x, x]);
  dateSchema = dateSchema.valid(x);
  dateSchema = dateSchema.valid(x, x);
  dateSchema = dateSchema.valid([x, x, x]);
  dateSchema = dateSchema.only(x);
  dateSchema = dateSchema.only(x, x);
  dateSchema = dateSchema.only([x, x, x]);
  dateSchema = dateSchema.equal(x);
  dateSchema = dateSchema.equal(x, x);
  dateSchema = dateSchema.equal([x, x, x]);
  dateSchema = dateSchema.invalid(x);
  dateSchema = dateSchema.invalid(x, x);
  dateSchema = dateSchema.invalid([x, x, x]);
  dateSchema = dateSchema.disallow(x);
  dateSchema = dateSchema.disallow(x, x);
  dateSchema = dateSchema.disallow([x, x, x]);
  dateSchema = dateSchema.not(x);
  dateSchema = dateSchema.not(x, x);
  dateSchema = dateSchema.not([x, x, x]);

  dateSchema = dateSchema.default(x);

  dateSchema = dateSchema.required();
  dateSchema = dateSchema.optional();
  dateSchema = dateSchema.forbidden();

  dateSchema = dateSchema.description(str);
  dateSchema = dateSchema.notes(str);
  dateSchema = dateSchema.notes(strArr);
  dateSchema = dateSchema.tags(str);
  dateSchema = dateSchema.tags(strArr);

  dateSchema = dateSchema.meta(obj);
  dateSchema = dateSchema.example(obj);
  dateSchema = dateSchema.unit(str);

  dateSchema = dateSchema.options(validOpts);
  dateSchema = dateSchema.strict();
  dateSchema = dateSchema.concat(x);

  altSchema = dateSchema.when(str, whenOpts);
  altSchema = dateSchema.when(ref, whenOpts);
  altSchema = dateSchema.when(schema, whenSchemaOpts);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

funcSchema = Joi.func();

funcSchema = funcSchema.arity(num);
funcSchema = funcSchema.minArity(num);
funcSchema = funcSchema.maxArity(num);
funcSchema = funcSchema.ref();

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

{
  // common
  numSchema = numSchema.allow(x);
  numSchema = numSchema.allow(x, x);
  numSchema = numSchema.allow([x, x, x]);
  numSchema = numSchema.valid(x);
  numSchema = numSchema.valid(x, x);
  numSchema = numSchema.valid([x, x, x]);
  numSchema = numSchema.only(x);
  numSchema = numSchema.only(x, x);
  numSchema = numSchema.only([x, x, x]);
  numSchema = numSchema.equal(x);
  numSchema = numSchema.equal(x, x);
  numSchema = numSchema.equal([x, x, x]);
  numSchema = numSchema.invalid(x);
  numSchema = numSchema.invalid(x, x);
  numSchema = numSchema.invalid([x, x, x]);
  numSchema = numSchema.disallow(x);
  numSchema = numSchema.disallow(x, x);
  numSchema = numSchema.disallow([x, x, x]);
  numSchema = numSchema.not(x);
  numSchema = numSchema.not(x, x);
  numSchema = numSchema.not([x, x, x]);

  numSchema = numSchema.default(x);

  numSchema = numSchema.required();
  numSchema = numSchema.optional();
  numSchema = numSchema.forbidden();

  numSchema = numSchema.description(str);
  numSchema = numSchema.notes(str);
  numSchema = numSchema.notes(strArr);
  numSchema = numSchema.tags(str);
  numSchema = numSchema.tags(strArr);

  numSchema = numSchema.meta(obj);
  numSchema = numSchema.example(obj);
  numSchema = numSchema.unit(str);

  numSchema = numSchema.options(validOpts);
  numSchema = numSchema.strict();
  numSchema = numSchema.concat(x);

  altSchema = numSchema.when(str, whenOpts);
  altSchema = numSchema.when(ref, whenOpts);
  altSchema = numSchema.when(schema, whenSchemaOpts);
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
objSchema = objSchema.and(str, str, str);
objSchema = objSchema.and(strArr);

objSchema = objSchema.nand(str);
objSchema = objSchema.nand(str, str);
objSchema = objSchema.nand(str, str, str);
objSchema = objSchema.nand(strArr);

objSchema = objSchema.schema();

objSchema = objSchema.or(str);
objSchema = objSchema.or(str, str);
objSchema = objSchema.or(str, str, str);
objSchema = objSchema.or(strArr);

objSchema = objSchema.oxor(str);
objSchema = objSchema.oxor(str, str);
objSchema = objSchema.oxor(str, str, str);
objSchema = objSchema.oxor(strArr);

objSchema = objSchema.xor(str);
objSchema = objSchema.xor(str, str);
objSchema = objSchema.xor(str, str, str);
objSchema = objSchema.xor(strArr);

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

objSchema = objSchema.type(func);
objSchema = objSchema.type(func, str);

objSchema = objSchema.requiredKeys(str);
objSchema = objSchema.requiredKeys(str, str);
objSchema = objSchema.requiredKeys(strArr);

objSchema = objSchema.optionalKeys(str);
objSchema = objSchema.optionalKeys(str, str);
objSchema = objSchema.optionalKeys(strArr);

objSchema = objSchema.forbiddenKeys(str);
objSchema = objSchema.forbiddenKeys(str, str);
objSchema = objSchema.forbiddenKeys(strArr);

{
  // common
  objSchema = objSchema.allow(x);
  objSchema = objSchema.allow(x, x);
  objSchema = objSchema.allow([x, x, x]);
  objSchema = objSchema.valid(x);
  objSchema = objSchema.valid(x, x);
  objSchema = objSchema.valid([x, x, x]);
  objSchema = objSchema.only(x);
  objSchema = objSchema.only(x, x);
  objSchema = objSchema.only([x, x, x]);
  objSchema = objSchema.equal(x);
  objSchema = objSchema.equal(x, x);
  objSchema = objSchema.equal([x, x, x]);
  objSchema = objSchema.invalid(x);
  objSchema = objSchema.invalid(x, x);
  objSchema = objSchema.invalid([x, x, x]);
  objSchema = objSchema.disallow(x);
  objSchema = objSchema.disallow(x, x);
  objSchema = objSchema.disallow([x, x, x]);
  objSchema = objSchema.not(x);
  objSchema = objSchema.not(x, x);
  objSchema = objSchema.not([x, x, x]);

  objSchema = objSchema.default(x);

  objSchema = objSchema.required();
  objSchema = objSchema.optional();
  objSchema = objSchema.forbidden();

  objSchema = objSchema.description(str);
  objSchema = objSchema.notes(str);
  objSchema = objSchema.notes(strArr);
  objSchema = objSchema.tags(str);
  objSchema = objSchema.tags(strArr);

  objSchema = objSchema.meta(obj);
  objSchema = objSchema.example(obj);
  objSchema = objSchema.unit(str);

  objSchema = objSchema.options(validOpts);
  objSchema = objSchema.strict();
  objSchema = objSchema.concat(x);

  altSchema = objSchema.when(str, whenOpts);
  altSchema = objSchema.when(ref, whenOpts);
  altSchema = objSchema.when(schema, whenSchemaOpts);
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
strSchema = strSchema.regex(exp);
strSchema = strSchema.regex(exp, str);
strSchema = strSchema.regex(exp, stringRegexOpts);
strSchema = strSchema.replace(exp, str);
strSchema = strSchema.replace(str, str);
strSchema = strSchema.alphanum();
strSchema = strSchema.token();
strSchema = strSchema.email();
strSchema = strSchema.email(emailOpts);
strSchema = strSchema.ip();
strSchema = strSchema.ip(ipOpts);
strSchema = strSchema.uri();
strSchema = strSchema.uri(uriOpts);
strSchema = strSchema.guid();
strSchema = strSchema.guid({
  version: ['uuidv1', 'uuidv2', 'uuidv3', 'uuidv4', 'uuidv5'],
});
strSchema = strSchema.guid({ version: 'uuidv4' });
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

{
  // common
  strSchema = strSchema.allow(x);
  strSchema = strSchema.allow(x, x);
  strSchema = strSchema.allow([x, x, x]);
  strSchema = strSchema.valid(x);
  strSchema = strSchema.valid(x, x);
  strSchema = strSchema.valid([x, x, x]);
  strSchema = strSchema.only(x);
  strSchema = strSchema.only(x, x);
  strSchema = strSchema.only([x, x, x]);
  strSchema = strSchema.equal(x);
  strSchema = strSchema.equal(x, x);
  strSchema = strSchema.equal([x, x, x]);
  strSchema = strSchema.invalid(x);
  strSchema = strSchema.invalid(x, x);
  strSchema = strSchema.invalid([x, x, x]);
  strSchema = strSchema.disallow(x);
  strSchema = strSchema.disallow(x, x);
  strSchema = strSchema.disallow([x, x, x]);
  strSchema = strSchema.not(x);
  strSchema = strSchema.not(x, x);
  strSchema = strSchema.not([x, x, x]);

  strSchema = strSchema.default(x);

  strSchema = strSchema.required();
  strSchema = strSchema.optional();
  strSchema = strSchema.forbidden();

  strSchema = strSchema.description(str);
  strSchema = strSchema.notes(str);
  strSchema = strSchema.notes(strArr);
  strSchema = strSchema.tags(str);
  strSchema = strSchema.tags(strArr);

  strSchema = strSchema.meta(obj);
  strSchema = strSchema.example(obj);
  strSchema = strSchema.unit(str);

  strSchema = strSchema.options(validOpts);
  strSchema = strSchema.strict();
  strSchema = strSchema.concat(x);

  altSchema = strSchema.when(str, whenOpts);
  altSchema = strSchema.when(ref, whenOpts);
  altSchema = strSchema.when(schema, whenSchemaOpts);
}

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

schema = Joi.lazy(() => schema, { once: true });

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

{
  // validate tests
  {
    Joi.validate(value, obj);
    Joi.validate(value, schema);
    Joi.validate(value, schema, validOpts);
    Joi.validate(value, schema, validOpts, (err, value) => {
      x = value;
      str = err.message;
      str = err.details[0].path[0];
      str = err.details[0].message;
      str = err.details[0].type;
    });
    Joi.validate(value, schema, (err, value) => {
      x = value;
      str = err.message;
      str = err.details[0].path.join('.');
      str = err.details[0].message;
      str = err.details[0].type;
    });
    // variant
    Joi.validate(num, schema, validOpts, (err, value) => {
      num = value;
    });

    // plain opts
    Joi.validate(value, {});
  }

  {
    let value = { username: 'example', password: 'example' };
    const schema = Joi.object().keys({
      username: Joi.string()
        .max(255)
        .required(),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,255}$/)
        .required(),
    });
    let returnValue: Joi.ValidationResult<typeof value>;

    returnValue = schema.validate(value);
    value = schema.validate(value, (err, value) => value);

    returnValue = Joi.validate(value, schema);
    returnValue = Joi.validate(value, obj);
    value = Joi.validate(value, obj, (err, value) => value);
    value = Joi.validate(value, schema, (err, value) => value);

    returnValue = Joi.validate(value, schema, validOpts);
    returnValue = Joi.validate(value, obj, validOpts);
    value = Joi.validate(value, obj, validOpts, (err, value) => value);
    value = Joi.validate(value, schema, validOpts, (err, value) => value);

    returnValue = schema.validate(value);
    returnValue = schema.validate(value, validOpts);
    value = schema.validate(value, (err, value) => value);
    value = schema.validate(value, validOpts, (err, value) => value);

    returnValue
      .then(val => JSON.stringify(val, null, 2))
      .then(val => {
        throw new Error('one error');
      })
      .catch(e => {});
  }
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = Joi.compile(obj);
schema = Joi.compile(schemaMap);

Joi.assert(obj, schema);
Joi.assert(obj, schema, str);
Joi.assert(obj, schema, err);
Joi.assert(obj, schemaLike);

Joi.attempt(obj, schema);
Joi.attempt(obj, schema, str);
Joi.attempt(obj, schema, err);
Joi.attempt(obj, schemaLike);

ref = Joi.ref(str, refOpts);
ref = Joi.ref(str);

Joi.isRef(ref);

description = Joi.describe(schema);
description = schema.describe();

schema = Joi.reach(objSchema, '');
schema = Joi.reach(objSchema, []);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = Joi.allow(x, x);
schema = Joi.allow([x, x, x]);
schema = Joi.valid(x);
schema = Joi.valid(x, x);
schema = Joi.valid([x, x, x]);
schema = Joi.only(x);
schema = Joi.only(x, x);
schema = Joi.only([x, x, x]);
schema = Joi.equal(x);
schema = Joi.equal(x, x);
schema = Joi.equal([x, x, x]);
schema = Joi.invalid(x);
schema = Joi.invalid(x, x);
schema = Joi.invalid([x, x, x]);
schema = Joi.disallow(x);
schema = Joi.disallow(x, x);
schema = Joi.disallow([x, x, x]);
schema = Joi.not(x);
schema = Joi.not(x, x);
schema = Joi.not([x, x, x]);

schema = Joi.required();
schema = Joi.optional();
schema = Joi.forbidden();
schema = Joi.strip();

schema = Joi.description(str);
schema = Joi.notes(str);
schema = Joi.notes(strArr);
schema = Joi.tags(str);
schema = Joi.tags(strArr);

schema = Joi.meta(obj);
schema = Joi.example(obj);
schema = Joi.unit(str);

schema = Joi.options(validOpts);
schema = Joi.strict();
schema = Joi.strict(bool);
schema = Joi.concat(x);

schema = Joi.when(str, whenOpts);
schema = Joi.when(ref, whenOpts);
schema = Joi.when(schema, whenSchemaOpts);

schema = Joi.label(str);
schema = Joi.raw();
schema = Joi.raw(bool);
schema = Joi.empty();
schema = Joi.empty(str);
schema = Joi.empty(anySchema);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = Joi.allow(x, x);
schema = Joi.allow([x, x, x]);
schema = Joi.valid(x);
schema = Joi.valid(x, x);
schema = Joi.valid([x, x, x]);
schema = Joi.only(x);
schema = Joi.only(x, x);
schema = Joi.only([x, x, x]);
schema = Joi.equal(x);
schema = Joi.equal(x, x);
schema = Joi.equal([x, x, x]);
schema = Joi.invalid(x);
schema = Joi.invalid(x, x);
schema = Joi.invalid([x, x, x]);
schema = Joi.disallow(x);
schema = Joi.disallow(x, x);
schema = Joi.disallow([x, x, x]);
schema = Joi.not(x);
schema = Joi.not(x, x);
schema = Joi.not([x, x, x]);

schema = Joi.required();
schema = Joi.exist();
schema = Joi.optional();
schema = Joi.forbidden();
schema = Joi.strip();

schema = Joi.description(str);
schema = Joi.notes(str);
schema = Joi.notes(strArr);
schema = Joi.tags(str);
schema = Joi.tags(strArr);

schema = Joi.meta(obj);
schema = Joi.example(obj);
schema = Joi.unit(str);

schema = Joi.options(validOpts);
schema = Joi.strict();
schema = Joi.strict(bool);
schema = Joi.concat(x);

schema = Joi.when(str, whenOpts);
schema = Joi.when(ref, whenOpts);
schema = Joi.when(schema, whenSchemaOpts);

schema = Joi.label(str);
schema = Joi.raw();
schema = Joi.raw(bool);
schema = Joi.empty();
schema = Joi.empty(str);
schema = Joi.empty(anySchema);

schema = Joi.symbol();
schema = Joi.symbol().map(new Map<string, symbol>());
schema = Joi.symbol().map({
  key: Symbol('asd'),
});

const version = Joi.version;
