import * as Ajv from 'ajv';
import * as pack from 'ajv-pack';

const ajv = new Ajv({ sourceCode: true });

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string',
      pattern: '^[a-z]+$',
    },
  },
};

const validate = ajv.compile(schema);
const moduleCode = pack(ajv, validate); // $ExpectType string
