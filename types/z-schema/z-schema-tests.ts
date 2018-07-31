
import Validator = require('z-schema');

var options: Validator.Options = {
  noTypeless: true,
  forceItems: true,
};

var validator: Validator = new Validator(options);
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

var error: Validator.SchemaError = validator.getLastError();
var errors: Validator.SchemaErrorDetail[] = validator.getLastErrors();
