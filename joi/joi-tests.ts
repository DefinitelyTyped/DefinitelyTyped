/// <reference path="joi.d.ts" />
/// <reference path="../node/node.d.ts" />

import Joi = require('joi');

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var x: any = null;
var value: any = null;
var num: number = 0;
var str: string = '';
var bool: boolean = false;
var exp: RegExp = null;
var obj: Object = null;
var date: Date = null;
var bin: NodeBuffer = null;
var err: Error = null;
var func: Function = null;

var anyArr: any[] = [];
var numArr: number[] = [];
var strArr: string[] = [];
var boolArr: boolean[] = [];
var expArr: RegExp[] = [];
var objArr: Object[] = [];
var bufArr: NodeBuffer[] = [];
var errArr: Error[] = [];
var funcArr: Function[] = [];

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var schema: Joi.Schema = null;

var anySchema: Joi.AnySchema<Joi.Schema> = null;
var numSchema: Joi.NumberSchema = null;
var strSchema: Joi.StringSchema = null;
var arrSchema: Joi.ArraySchema = null;
var boolSchema: Joi.BooleanSchema = null;
var binSchema: Joi.BinarySchema = null;
var dateSchema: Joi.DateSchema = null;
var funcSchema: Joi.FunctionSchema = null;
var objSchema: Joi.ObjectSchema = null;
var altSchema: Joi.AlternativesSchema = null;

var schemaArr: Joi.Schema[] = [];

var ref: Joi.Reference = null;

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var validOpts: Joi.ValidationOptions = null;

validOpts = {abortEarly: bool};
validOpts = {convert: bool};
validOpts = {allowUnknown: bool};
validOpts = {skipFunctions: bool};
validOpts = {stripUnknown: bool};
validOpts = {language: bool};
validOpts = {presence: str};
validOpts = {context: obj};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var renOpts: Joi.RenameOptions = null;

renOpts = {alias: bool};
renOpts = {multiple: bool};
renOpts = {override: bool};
renOpts = {ignoreUndefined: bool};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var emailOpts: Joi.EmailOptions = null;

emailOpts = {errorLevel: num};
emailOpts = {errorLevel: bool};
emailOpts = {tldWhitelist: strArr};
emailOpts = {tldWhitelist: obj};
emailOpts = {minDomainAtoms: num};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var ipOpts: Joi.IpOptions = null;

ipOpts = {version: str};
ipOpts = {version: strArr};
ipOpts = {cidr: str};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var uriOpts: Joi.UriOptions = null;

uriOpts = {scheme: str};
uriOpts = {scheme: exp};
uriOpts = {scheme: strArr};
uriOpts = {scheme: expArr};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var whenOpts: Joi.WhenOptions<any> = null;

whenOpts = {is: x};
whenOpts = {is: schema, then: schema};
whenOpts = {is: schema, otherwise: schema};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var refOpts: Joi.ReferenceOptions = null;

refOpts = {separator: str};
refOpts = {contextPrefix: str};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var validErr: Joi.ValidationError = null;
var validErrItem: Joi.ValidationErrorItem;

validErrItem= {
	message: str,
	type: str,
	path: str
};

validErrItem = {
	message: str,
	type: str,
	path: str,
	options: validOpts
};

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

schema = ref;

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

var schemaMap: Joi.SchemaMap = null;

schemaMap = {
	a: numSchema,
	b: strSchema
};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

anySchema = Joi.any();

namespace common {
	anySchema = anySchema.allow(x);
	anySchema = anySchema.allow(x, x);
	anySchema = anySchema.allow([x, x, x]);
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

	anySchema = anySchema.label(str);
	anySchema = anySchema.raw();
	anySchema = anySchema.raw(bool);
	anySchema = anySchema.empty();
	anySchema = anySchema.empty(str);
	anySchema = anySchema.empty(anySchema);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

arrSchema = Joi.array();

arrSchema = arrSchema.sparse();
arrSchema = arrSchema.sparse(bool);
arrSchema = arrSchema.single();
arrSchema = arrSchema.single(bool);
arrSchema = arrSchema.ordered(anySchema);
arrSchema = arrSchema.ordered(anySchema, numSchema, strSchema, arrSchema, boolSchema, binSchema, dateSchema, funcSchema, objSchema);
arrSchema = arrSchema.min(num);
arrSchema = arrSchema.max(num);
arrSchema = arrSchema.length(num);
arrSchema = arrSchema.unique();


arrSchema = arrSchema.items(numSchema);
arrSchema = arrSchema.items(numSchema, strSchema);
arrSchema = arrSchema.items([numSchema, strSchema]);

// - - - - - - - -

namespace common_copy_paste {
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
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

boolSchema = Joi.bool();
boolSchema = Joi.boolean();

namespace common_copy_paste {
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

	altSchema = boolSchema.when(str, whenOpts);
	altSchema = boolSchema.when(ref, whenOpts);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

binSchema = Joi.binary();

binSchema = binSchema.encoding(str);
binSchema = binSchema.min(num);
binSchema = binSchema.max(num);
binSchema = binSchema.length(num);

namespace common {
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
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

dateSchema = Joi.date();

dateSchema = dateSchema.min(date);
dateSchema = dateSchema.max(date);

dateSchema = dateSchema.min(str);
dateSchema = dateSchema.max(str);

dateSchema = dateSchema.min(num);
dateSchema = dateSchema.max(num);

dateSchema = dateSchema.min(ref);
dateSchema = dateSchema.max(ref);

dateSchema = dateSchema.format(str);
dateSchema = dateSchema.format(strArr);

dateSchema = dateSchema.iso();

dateSchema = dateSchema.timestamp();
dateSchema = dateSchema.timestamp('javascript');
dateSchema = dateSchema.timestamp('unix');

namespace common {
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
numSchema = numSchema.precision(num);
numSchema = numSchema.multiple(num);
numSchema = numSchema.positive();
numSchema = numSchema.negative();

namespace common {
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
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

objSchema = Joi.object();
objSchema = Joi.object(schemaMap);

objSchema = objSchema.keys();
objSchema = objSchema.keys(schemaMap);

objSchema = objSchema.min(num);
objSchema = objSchema.max(num);
objSchema = objSchema.length(num);

objSchema = objSchema.pattern(exp, schema);

objSchema = objSchema.and(str);
objSchema = objSchema.and(str, str);
objSchema = objSchema.and(str, str, str);
objSchema = objSchema.and(strArr);

objSchema = objSchema.nand(str);
objSchema = objSchema.nand(str, str);
objSchema = objSchema.nand(str, str, str);
objSchema = objSchema.nand(strArr);

objSchema = objSchema.or(str);
objSchema = objSchema.or(str, str);
objSchema = objSchema.or(str, str, str);
objSchema = objSchema.or(strArr);

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

namespace common {
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
strSchema = strSchema.hex();
strSchema = strSchema.hostname();
strSchema = strSchema.isoDate();
strSchema = strSchema.lowercase();
strSchema = strSchema.uppercase();
strSchema = strSchema.trim();

namespace common {
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
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = Joi.alternatives();
schema = Joi.alternatives().try(schemaArr);
schema = Joi.alternatives().try(schema, schema);

schema = Joi.alternatives(schemaArr);
schema = Joi.alternatives(schema, anySchema, boolSchema);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Joi.validate(value, obj);
Joi.validate(value, schema);
Joi.validate(value, schema, validOpts);
Joi.validate(value, schema, validOpts, (err, value) => {
	x = value;
	str = err.message;
	str = err.details[0].path;
	str = err.details[0].message;
	str = err.details[0].type;
});
Joi.validate(value, schema, (err, value) => {
	x = value;
	str = err.message;
	str = err.details[0].path;
	str = err.details[0].message;
	str = err.details[0].type;
});
// variant
Joi.validate(num, schema, validOpts, (err, value) => {
	num = value;
});

// plain opts
Joi.validate(value, {});

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = Joi.compile(obj);

Joi.assert(obj, schema);
Joi.assert(obj, schema, str);
Joi.assert(obj, schema, err);

Joi.attempt(obj, schema);
Joi.attempt(obj, schema, str);
Joi.attempt(obj, schema, err);

ref = Joi.ref(str, refOpts);
ref = Joi.ref(str);

Joi.isRef(ref);

schema = Joi.reach(schema, '');

const Joi2 = Joi.extend({ name: '', base: schema });
