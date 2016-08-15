/// <reference path="ajv.d.ts" />

import * as Ajv from 'ajv';
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
var validate = ajv.compile({});
var valid = validate({});
if (!valid) console.log(validate.errors);

var valid = ajv.validate({}, {});
if (!valid) console.log(ajv.errors);

ajv.addSchema({}, 'mySchema');
var valid = ajv.validate('mySchema', {});
if (!valid) console.log(ajv.errorsText());

ajv.addKeyword('range', {
    type: 'number', compile: function (sch, parentSchema) {
        var min: any = sch[0];
        var max: any = sch[1];

        return parentSchema.exclusiveRange === true
            ? function (data) { return data > min && data < max; }
            : function (data) { return data >= min && data <= max; }
    }
});

var schema = { "range": [2, 4], "exclusiveRange": true };
var validate = ajv.compile(schema);
console.log(validate(2.01)); // true
console.log(validate(3.99)); // true
console.log(validate(2)); // false
console.log(validate(4)); // false

declare var request: any;
function loadSchema(uri: any, callback: any) {
    request.json(uri, function (err: any, res: any, body: any) {
        if (err || res.statusCode >= 400)
            callback(err || new Error('Loading error: ' + res.statusCode));
        else
            callback(null, body);
    });
}
var ajv = new Ajv({ loadSchema: loadSchema });

ajv.compileAsync(schema, function (err, validate) {
    if (err) return;
    var valid = validate({});
});

declare var knex: any;
function checkIdExists(schema: any, data: any) {
    return knex(schema.table)
        .select('id')
        .where('id', data)
        .then(function (rows: any) {
            return true;
        });
}

var validate = ajv.compile(schema);

(validate({ userId: 1, postId: 19 }) as PromiseLike<boolean>)
    .then(function (valid) {
        // "valid" is always true here
        console.log('Data is valid');
    }, function (err) {
        if (!(err instanceof Ajv.ValidationError)) throw err;
        // data is invalid
        console.log('Validation errors:', err.errors);
    });

var ajv = new Ajv({ /* async: 'es7', */ transpile: 'nodent' });
var validate = ajv.compile(schema); // transpiled es7 async function
(validate({}) as PromiseLike<any>).then(() => { }, () => { });
