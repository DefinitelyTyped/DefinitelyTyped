import mergeAllOf = require('json-schema-merge-allof');
import { JSONSchema4, JSONSchema6 } from 'json-schema';

type $RefParser_JSONSchema = JSONSchema4 | JSONSchema6;

const schema: $RefParser_JSONSchema = { type: 'string' };

mergeAllOf(schema);

type JSONSchemaExtra = JSONSchema6 & {
	[key: string]: any;
};

const schemaExtra: JSONSchemaExtra = { type: 'string' };

// $ExpectType JSONSchema6
mergeAllOf(schemaExtra);

// $ExpectType JSONSchemaExtra
mergeAllOf(schemaExtra, { ignoreAdditionalProperties: true, resolvers: {
    oneOf(values, path, mergeSchemas, options) {
        // $ExpectType (JSONSchema6Definition[] | undefined)[]
        values;
        // $ExpectType Options<JSONSchemaExtra>
        options;
        return values.reduce((prev, next) => (prev || []).concat(next || []))!;
    }
} });
