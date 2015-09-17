/// <reference path="chai-json-schema.d.ts" />

import chai = require('chai');
import chaiJsonSchema = require('chai-json-schema');

chai.use(chaiJsonSchema);
var expect = chai.expect;
var assert = chai.assert;

function test_JsonSchema() {
    const schema:any = {
        name: 'properties',
        schema: {
            "properties": {
                "intKey": {
                    "type": "integer"
                },
                "stringKey": {
                    "type": "string"
                }
            }
        }
    };

    const valid:any = {
        "intKey": 1,
        "stringKey": "one"
    };

    const invalid:any = {
        "intKey": 3,
        "stringKey": false
    };

    expect(valid).to.jsonSchema(schema);
    valid.should.jsonSchema(schema);

    expect(invalid).to.notJsonSchema(schema);
    invalid.should.notJsonSchema(schema);
}
