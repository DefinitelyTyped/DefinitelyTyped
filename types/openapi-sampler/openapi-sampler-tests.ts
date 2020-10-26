import { sample } from 'openapi-sampler';

const schema = { type: 'string'};
const spec = { openapi: '3.0.0'};

sample(schema, { quiet: true }, spec);

sample(schema);

sample(schema, undefined, spec);

sample(schema, {}, spec);
