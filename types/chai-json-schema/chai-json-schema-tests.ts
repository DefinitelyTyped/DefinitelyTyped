import { assert, expect, use, should, tv4 } from 'chai';
import ChaiJsonSchema = require('chai-json-schema');

use(ChaiJsonSchema);
should();

const goodApple = {
    skin: 'thin',
    colors: ['red', 'green', 'yellow'],
    taste: 10
};

const badApple = {
    colors: ['brown'],
    taste: 0,
    worms: 2
};

const fruitSchema = {
    title: 'fresh fruit schema v1',
    type: 'object',
    required: ['skin', 'colors', 'taste'],
    properties: {
        colors: {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
                type: 'string'
            }
        },
        skin: {
            type: 'string'
        },
        taste: {
            type: 'number',
            minimum: 5
        }
    }
};

// bdd style
expect(goodApple).to.be.jsonSchema(fruitSchema);
expect(badApple).to.not.be.jsonSchema(fruitSchema);

goodApple.should.be.jsonSchema(fruitSchema);
badApple.should.not.be.jsonSchema(fruitSchema);

// tdd style
assert.jsonSchema(goodApple, fruitSchema);
assert.notJsonSchema(badApple, fruitSchema);

// tv4
const schema = {
    items: {
        type: 'boolean'
    }
};

const data1 = [true, false];
const data2 = [true, 123];

expect(tv4.validate(data1, schema)).to.be.true;
expect(tv4.validate(data2, schema)).to.be.false;
