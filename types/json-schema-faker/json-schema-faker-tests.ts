/// <reference types="node" />
import jsf = require('json-schema-faker');
import { Chance } from 'chance';
import { Schema } from 'json-schema-faker';

// custom chance extension
jsf.extend('chance', () => {
    const chance = new Chance();
    chance.mixin({
        user: () => {
            return {
                first: chance.first(),
                last: chance.last(),
                email: chance.email(),
            };
        },
    });

    return chance;
});

// extend with faker
jsf.extend('faker', () => require('faker'));

// custom faker extension
jsf.extend('faker', () => {
    const faker = require('faker/locale/de');

    faker.mixin = (namespace: string, fnObject: any) => {
        faker[namespace] = fnObject;
    };

    faker.mixin('custom', {
        statement(length: number) {
            return `${faker.name.firstName()} has ${faker.finance.amount()} on ${faker.finance.account(length)}.`;
        },
    });

    return faker;
});

// add custom format using arg input format
jsf.format('semver', () => jsf.random.randexp('\\d\\.\\d\\.[1-9]\\d?'));

// add custom format using object input format
jsf.format({ name: 'semver2', callback: () => jsf.random.randexp('\\d\\.\\d\\.[1-9]\\d?') });

// register an option using arg input format
jsf.option('failOnInvalidTypes', false);

// register an option using object input format
jsf.option({ alwaysFakeOptionals: true });
const testSchema: Schema = {
    type: 'object',
    properties: {
        user: {
            type: 'object',
            properties: {
                id: {
                    $ref: '#/definitions/positiveInt',
                },
                name: {
                    type: 'string',
                    faker: 'name.findName',
                },
                email: {
                    type: 'string',
                    format: 'email',
                    faker: 'internet.email',
                },
                version: {
                    type: 'string',
                    format: 'semver',
                },
                version2: {
                    type: 'string',
                    format: 'semver2',
                },
                reffed: {
                    $ref: '#/otherSchema',
                },
                subuser: {
                    type: 'object',
                    chance: 'user',
                },
            },
            required: ['id', 'name', 'email', 'version', 'version2', 'reffed', 'randomname'],
        },
    },
    required: ['user'],
    definitions: {
        positiveInt: {
            type: 'integer',
            minimum: 0,
            exclusiveMinimum: true,
        },
    },
};

const testListSchema: Schema = {
    type: 'array',
    minItems: 5,
    maxItems: 5,
    items: testSchema,
};

const testRef: jsf.Schema[] = [
    {
        id: 'otherSchema',
        type: 'string',
    },
];

// generate
const generated = jsf.generate(testSchema);
testItem(generated);

const generatedList = jsf.generate(testListSchema);
generatedList.forEach(testItem);

// resolve
jsf.resolve(testSchema, testRef).then(res => {
    res.forEach(testItem);
});

// test that item has all expected properties. If not, throw error.
function testItem(item: any): void {
    const user = item.user;
    if (!item.hasOwnProperty('user')) throw new Error();
    if (!user.hasOwnProperty('reffed')) throw new Error();
    if (!user.hasOwnProperty('version')) throw new Error();
    if (!user.hasOwnProperty('version2')) throw new Error();
    if (!user.hasOwnProperty('name')) throw new Error();
    if (!user.hasOwnProperty('email')) throw new Error();
    if (!user.hasOwnProperty('subuser')) throw new Error();
    if (!user.hasOwnProperty('id')) throw new Error();
}
