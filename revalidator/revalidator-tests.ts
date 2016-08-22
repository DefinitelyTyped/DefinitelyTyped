/// <reference path="./revalidator.d.ts" />
import revalidator = require('revalidator');

let someObject: any = {};

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
    }
  }
}, {
  validateFormats: true,
  validateFormatsStrict: false,
  validateFormatExtensions: true,
  additionalProperties: false,
  cast: false
}).valid === true;

