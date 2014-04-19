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

var validOpts: Joi.ValidationOptions = null;

validOpts = {abortEarly: bool};
validOpts = {convert: bool};
validOpts = {allowUnknown: bool};
validOpts = {skipFunctions: bool};
validOpts = {stripUnknown: bool};
validOpts = {language: bool};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var renOpts: Joi.RenameOptions = null;

renOpts = {alias: bool};
renOpts = {multiple: bool};
renOpts = {override: bool};

var validErr: Joi.ValidationError = null;

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

var schemaArr: Joi.Schema[] = [];

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

var schemaMap: Joi.SchemaMap = null;

schemaMap = {
	a: numSchema,
	b: strSchema
};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

anySchema = Joi.any();

anySchema.validate(x, (err: Joi.ValidationError, value: any) => {

});

module common {
	anySchema = anySchema.allow(x);
	anySchema = anySchema.valid(x);
	anySchema = anySchema.invalid(x);
	anySchema = anySchema.default(x);

	anySchema = anySchema.required();
	anySchema = anySchema.optional();

	anySchema = anySchema.description(str);
	anySchema = anySchema.notes(str);
	anySchema = anySchema.notes(strArr);
	anySchema = anySchema.tags(str);
	anySchema = anySchema.tags(strArr);

	anySchema = anySchema.options(validOpts);
	anySchema = anySchema.strict();
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

arrSchema = Joi.array();

arrSchema = arrSchema.min(num);
arrSchema = arrSchema.max(num);
arrSchema = arrSchema.length(num);

arrSchema = arrSchema.includes(numSchema);
arrSchema = arrSchema.includes(numSchema, strSchema);
arrSchema = arrSchema.includes([numSchema, strSchema]);

arrSchema = arrSchema.excludes(numSchema);
arrSchema = arrSchema.excludes(numSchema, strSchema);
arrSchema = arrSchema.excludes([numSchema, strSchema]);

// - - - - - - - -

module common {
	arrSchema = arrSchema.allow(anyArr);
	arrSchema = arrSchema.valid(anyArr);
	arrSchema = arrSchema.invalid(anyArr);
	arrSchema = arrSchema.default(anyArr);

	arrSchema = arrSchema.required();
	arrSchema = arrSchema.optional();

	arrSchema = arrSchema.description(str);
	arrSchema = arrSchema.notes(str);
	arrSchema = arrSchema.notes(strArr);
	arrSchema = arrSchema.tags(str);
	arrSchema = arrSchema.tags(strArr);

	arrSchema = arrSchema.options(validOpts);
	arrSchema = arrSchema.strict();
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

boolSchema = Joi.bool();
boolSchema = Joi.boolean();

module common {
	boolSchema = boolSchema.allow(bool);
	boolSchema = boolSchema.valid(bool);
	boolSchema = boolSchema.invalid(bool);
	boolSchema = boolSchema.default(bool);

	boolSchema = boolSchema.required();
	boolSchema = boolSchema.optional();

	boolSchema = boolSchema.description(str);
	boolSchema = boolSchema.notes(str);
	boolSchema = boolSchema.notes(strArr);
	boolSchema = boolSchema.tags(str);
	boolSchema = boolSchema.tags(strArr);

	boolSchema = boolSchema.options(validOpts);
	boolSchema = boolSchema.strict();
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

binSchema = Joi.binary();

binSchema = binSchema.min(num);
binSchema = binSchema.max(num);
binSchema = binSchema.length(num);

module common {
	binSchema = binSchema.allow(bin);
	binSchema = binSchema.valid(bin);
	binSchema = binSchema.invalid(bin);
	binSchema = binSchema.default(bin);

	binSchema = binSchema.required();
	binSchema = binSchema.optional();

	binSchema = binSchema.description(str);
	binSchema = binSchema.notes(str);
	binSchema = binSchema.notes(strArr);
	binSchema = binSchema.tags(str);
	binSchema = binSchema.tags(strArr);

	binSchema = binSchema.options(validOpts);
	binSchema = binSchema.strict();
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

dateSchema = Joi.date();

dateSchema = dateSchema.min(date);
dateSchema = dateSchema.max(date);

dateSchema = dateSchema.min(str);
dateSchema = dateSchema.max(str);

dateSchema = dateSchema.min(num);
dateSchema = dateSchema.max(num);

module common {
	dateSchema = dateSchema.allow(date);
	dateSchema = dateSchema.valid(date);
	dateSchema = dateSchema.invalid(date);
	dateSchema = dateSchema.default(date);

	dateSchema = dateSchema.allow(num);
	dateSchema = dateSchema.valid(num);
	dateSchema = dateSchema.invalid(num);
	dateSchema = dateSchema.default(num);

	dateSchema = dateSchema.allow(str);
	dateSchema = dateSchema.valid(str);
	dateSchema = dateSchema.invalid(str);
	dateSchema = dateSchema.default(str);

	dateSchema = dateSchema.required();
	dateSchema = dateSchema.optional();

	dateSchema = dateSchema.description(str);
	dateSchema = dateSchema.notes(str);
	dateSchema = dateSchema.notes(strArr);
	dateSchema = dateSchema.tags(str);
	dateSchema = dateSchema.tags(strArr);

	dateSchema = dateSchema.options(validOpts);
	dateSchema = dateSchema.strict();
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

funcSchema = Joi.func();

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

numSchema = Joi.number();

numSchema = numSchema.min(num);
numSchema = numSchema.max(num);
numSchema = numSchema.integer();

module common {
	numSchema = numSchema.allow(num);
	numSchema = numSchema.valid(num);
	numSchema = numSchema.invalid(num);
	numSchema = numSchema.default(num);

	numSchema = numSchema.required();
	numSchema = numSchema.optional();

	numSchema = numSchema.description(str);
	numSchema = numSchema.notes(str);
	numSchema = numSchema.notes(strArr);
	numSchema = numSchema.tags(str);
	numSchema = numSchema.tags(strArr);

	numSchema = numSchema.options(validOpts);
	numSchema = numSchema.strict();
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

objSchema = Joi.object();
objSchema = Joi.object(schemaMap);

objSchema = objSchema.keys();
objSchema = objSchema.keys(schemaMap);

objSchema = objSchema.min(num);
objSchema = objSchema.max(num);
objSchema = objSchema.length(num);

objSchema = objSchema.with(str, str);
objSchema = objSchema.with(str, strArr);

objSchema = objSchema.without(str, str);
objSchema = objSchema.without(str, strArr);

objSchema = objSchema.xor(str, str, str);
objSchema = objSchema.xor(strArr);

objSchema = objSchema.or(str, str, str);
objSchema = objSchema.or(strArr);

objSchema = objSchema.rename(str, str);
objSchema = objSchema.rename(str, str, renOpts);

module common {
	objSchema = objSchema.allow(obj);
	objSchema = objSchema.valid(obj);
	objSchema = objSchema.invalid(obj);
	objSchema = objSchema.default(obj);

	objSchema = objSchema.required();
	objSchema = objSchema.optional();

	objSchema = objSchema.description(str);
	objSchema = objSchema.notes(str);
	objSchema = objSchema.notes(strArr);
	objSchema = objSchema.tags(str);
	objSchema = objSchema.tags(strArr);

	objSchema = objSchema.options(validOpts);
	objSchema = objSchema.strict();
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

strSchema = Joi.string();

strSchema = strSchema.insensitive();
strSchema = strSchema.min(num);
strSchema = strSchema.max(num);
strSchema = strSchema.length(num);
strSchema = strSchema.regex(exp);
strSchema = strSchema.alphanum();
strSchema = strSchema.token();
strSchema = strSchema.email();
strSchema = strSchema.guid();
strSchema = strSchema.isoDate();

module common {
	strSchema = strSchema.allow(x);
	strSchema = strSchema.allow(x, x);
	strSchema = strSchema.allow(anyArr);

	strSchema = strSchema.valid(x);
	strSchema = strSchema.valid(x, x);
	strSchema = strSchema.valid(anyArr);

	strSchema = strSchema.invalid(x);
	strSchema = strSchema.invalid(x, x);
	strSchema = strSchema.invalid(anyArr);

	strSchema = strSchema.required();

	strSchema = strSchema.optional();

	strSchema = strSchema.description(str);

	strSchema = strSchema.notes(str);
	strSchema = strSchema.notes(strArr);

	strSchema = strSchema.tags(str);
	strSchema = strSchema.tags(strArr);

	strSchema = strSchema.options(validOpts);
	strSchema = strSchema.strict();
	strSchema = strSchema.default(x);
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

schema = Joi.alternatives(schemaArr);
schema = Joi.alternatives(schema, anySchema, boolSchema);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Joi.validate(value, schema);
Joi.validate(value, schema, validOpts);
Joi.validate(value, schema, validOpts, (err, value) => {
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
