

import ZSchema = require('z-schema');

var options = {
  noTypeless: true,
  forceItems: true,
};

var validator = new ZSchema(options);
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

validator.validateSchema(schema);
validator.validate(json, schema);
validator.validate(json, schema, function (err: any, valid: boolean) {
    if (err) {
        console.log(err);
    } else {
        console.log('valid = ' + valid);
    }
});

var error = validator.getLastError();
var errors = validator.getLastErrors();
