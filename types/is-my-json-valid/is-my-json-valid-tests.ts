import validator = require('is-my-json-valid');

//
// Usage
//
let jsonSchema = {
  required: true,
  type: 'object',
  properties: {
    hello: {
      required: true,
      type: 'string'
    }
  }
};

let validate = validator(jsonSchema);
validate = validator(jsonSchema, { verbose: true });

let result = validate({ hello: 'world' });
console.assert(validate({ hello: 'world' }) === true, "is valid");

console.log(validate.errors);
console.log(validate.errors[0].field);
console.log(validate.errors[0].message);
console.log(validate.errors[0].value);
console.log(validate.errors[0].type);


//
// Filtering away additional properties
//
let filter = validator.filter({
  required: true,
  type: 'object',
  properties: {
    hello: {type: 'string', required: true}
  },
  additionalProperties: false
});
