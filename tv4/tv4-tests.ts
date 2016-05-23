import tv4 = require("tv4");
var str:string;
var strArr:string[];
var bool:boolean;
var num:number;
var obj:any;
var validator: tv4.TV4;
var err:tv4.ValidationError;
var errs:tv4.ValidationError[];
var single:tv4.SingleResult;
var multi:tv4.MultiResult;

single = validator.validateResult(obj, obj);
bool = single.valid;
strArr = single.missing;
err = single.error;

num = err.code;
str = err.message;
str = err.dataPath;
str = err.schemaPath;

multi = validator.validateMultiple(obj, obj);
bool = multi.valid;
strArr = multi.missing;
errs = multi.errors;

validator.addSchema(str, obj);
obj = validator.getSchema(str);
str = validator.resolveUrl(str, str);

validator = validator.freshApi();
validator.dropSchemas();
validator.reset();

strArr = validator.getMissingUris(/abc/);
strArr = validator.getSchemaUris(/abc/);
obj = validator.getSchemaMap()[str];
num = validator.errorCodes['bla'];

num = validator.errorCodes['MY_NAME'];


// Here are all the examples from the v1.2.3 documentation at https://www.npmjs.com/package/validator
var data = '';
var schema : tv4.JsonSchema = {type: "string"}
var valid = validator.validate(data, schema);
var url = 'http://example.com/schema';
validator.addSchema(url, schema);
var singleErrorResult = validator.validateResult(data, schema);
var multiErrorResult = validator.validateMultiple(data, schema);
// async
validator.validate(data, schema, function (isValid, validationError) {});

// checkRecursive
var a : tv4.JsonSchema = {};
var b = { a: a };
a['b'] = b;
var aSchema : tv4.JsonSchema = { properties: { b: { $ref: 'bSchema' }}};
var bSchema : tv4.JsonSchema = { properties: { a: { $ref: 'aSchema' }}};
validator.addSchema('aSchema', aSchema);
validator.addSchema('bSchema', bSchema);
validator.validate(a, aSchema, true);
validator.validateResult(data, aSchema, true);
validator.validateMultiple(data, aSchema, true);


// banUnknownProperties
var checkRecursive = true;
validator.validate(data, schema, checkRecursive, true);
validator.validateResult(data, schema, checkRecursive, true);
validator.validateMultiple(data, schema, checkRecursive, true);

// API
validator.addSchema('http://example.com/schema', {});
validator.addSchema({});
var schema = validator.getSchema('http://example.com/schema');
var map = validator.getSchemaMap();
var schema = map[uri];
var arr = validator.getSchemaUris();
// optional filter using a RegExp
arr = validator.getSchemaUris(/^https?:\/\/example.com/);
var arr = validator.getMissingUris();
// optional filter using a RegExp
var arr = validator.getMissingUris(/^https?:\/\/example.com/);
validator.dropSchemas();
var other_tv4 = validator.freshApi();
validator.reset();
validator.setErrorReporter(function (error, data, schema) {
    return "Error code: " + error.code;
});
validator.language('en-gb');
validator.addLanguage('fr', {});
validator.language('fr')
validator.addFormat('decimal-digits', function (data, schema) {
    if (typeof data === 'string' && !/^[0-9]+$/.test(data)) {
        return null;
    }
    return "must be string of decimal digits";
});
validator.addFormat({
    'my-format': function (data: any, schema: any): string {return null;},
    'other-format': function (data: any, schema: any): string {return 'oops';}
});
function simpleFailure() {return true;}
function detailedFailure() {return true;}
validator.defineKeyword('my-custom-keyword', function (data, value, schema) {
    if (simpleFailure()) {
        return "Failure";
    } else if (detailedFailure()) {
        return {code: validator.errorCodes['MY_CUSTOM_CODE'], message: {param1: 'a', param2: 'b'}};
    } else {
        return null;
    }
});


// Demos
schema = {
    "items": {
        "type": "boolean"
    }
};
{
    let data1 = [true, false];
    let data2 = [true, 123];
    alert("data 1: " + validator.validate(data1, schema)); // true
    alert("data 2: " + validator.validate(data2, schema)); // false
    alert("data 2 error: " + JSON.stringify(validator.error, null, 4));

    schema = {
        "type": "array",
        "items": {"$ref": "#"}
    };
}
{
let data1 : any = [[], [[]]];
let data2 : any = [[], [true, []]];
alert("data 1: " + validator.validate(data1, schema)); // true
alert("data 2: " + validator.validate(data2, schema)); // false
}

{
    schema = {
        "type": "array",
        "items": {"$ref": "http://example.com/schema" }
    };
    let data = [1, 2, 3];
    alert("Valid: " + validator.validate(data, schema)); // true
    alert("Missing schemas: " + JSON.stringify(validator.missing));
}
{
    validator.addSchema("http://example.com/schema", {
        "definitions": {
            "arrayItem": {"type": "boolean"}
        }
    });
    let schema : tv4.JsonSchema = {
        "type": "array",
        "items": {"$ref": "http://example.com/schema#/definitions/arrayItem" }
    };
    let data1 : any = [true, false, true];
    let data2 : any = [1, 2, 3];
    alert("data 1: " + validator.validate(data1, schema)); // true
    alert("data 2: " + validator.validate(data2, schema)); // false
}

// undocumented functions
var uri = '';
obj = validator.normSchema(schema, uri);



