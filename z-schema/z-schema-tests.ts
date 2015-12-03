/// <reference path="z-schema.d.ts" />

import ZSchema = require('z-schema');

var options: ZSchema.Options = {
  noTypeless: true,
  forceItems: true,
};

var validator: ZSchema.Validator = new ZSchema(options);
var json: any = {
    foo: 'bar',
};

var schema: any = {
    'type': 'object',
    properties: {
        foo: {
            'type': 'string',
        },
    },
};

validator.validate(json, schema);
validator.validate(json, schema, function (err: any, valid: boolean) {
    if (err) {
        console.log(err);
    } else {
        console.log('valid = ' + valid);
    }
});

var error: ZSchema.SchemaError = validator.getLastError();
var errors: ZSchema.SchemaError[] = validator.getLastErrors();
