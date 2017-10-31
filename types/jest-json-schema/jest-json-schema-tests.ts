import { matchers } from 'jest-json-schema';

expect.extend(matchers);

it('validates my json', () => {
    const schema = {
        properties: {
            hello: { type: 'string' },
        },
        required: ['hello'],
    };
    expect({ hello: 'world' }).toMatchSchema(schema);
});
