import revalidator = require('revalidator');

let someObject = {
  hello: true,
  there: 'string'
};

let schema: Revalidator.JSONSchema<typeof someObject> = {

};

revalidator.validate(someObject, {
  properties: {
    url: {
      description: 'the url the object should be stored at',
      type: 'string',
      pattern: '^/[^#%&*{}\\:<>?\/+]+$',
      required: true
    },
    challenge: {
      description: 'a means of protecting data (insufficient for production, used as example)',
      type: 'string',
      minLength: 5
    },
    body: {
      description: 'what to store at the url',
      type: 'any',
      default: null
    },
    obj: {
      type: 'object',
      properties: {
        items: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              maxLength: 140
            },
            date: { type: 'string', format: 'date', messages: { format: "must be a valid %{expected} and nothing else" } },
            body: { type: 'string' },
            tags: {
              type: 'array',
              uniqueItems: true,
              minItems: 2,
              items: {
                type: 'string',
                pattern: /[a-z ]+/
              }
            },
            tuple: {
              type: 'array',
              minItems: 2,
              maxItems: 2,
              items: {
                type: ['string', 'number']
              }
            },
            author: { type: 'string', pattern: /^[\w ]+$/i, required: true, messages: { required: "is essential for survival" } },
            published: { type: 'boolean', 'default': false },
            category: { type: 'string' },
            palindrome: {
              type: 'string', conform: function (val) {
                return val == val.split("").reverse().join("");
              }
            },
            name: {
              type: 'string', default: '', conform: function (val, data) {
                return (val === data.hello);
              }
            }
          },
          patternProperties: {
            '^_': {
              type: 'boolean', default: false
            }
          }
        }
      }
    }
  }
}, {
    validateFormats: true,
    validateFormatsStrict: false,
    validateFormatExtensions: true,
    additionalProperties: false,
    cast: false
  }).valid === true;

