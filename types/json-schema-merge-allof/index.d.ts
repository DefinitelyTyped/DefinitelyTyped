// Type definitions for json-schema-merge-allof 0.6
// Project: https://github.com/mokkabonna/json-schema-merge-allof#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { JSONSchema4, JSONSchema6, JSONSchema7 } from 'json-schema';

export = merger;

type JSONSchema = JSONSchema4 | JSONSchema6 | JSONSchema7;
type JSONSchema46 = JSONSchema4 | JSONSchema6;

declare function merger(rootSchema: JSONSchema4, options?: merger.Options<JSONSchema4>): JSONSchema4;
declare function merger(rootSchema: JSONSchema6, options?: merger.Options<JSONSchema6>): JSONSchema6;
declare function merger(rootSchema: JSONSchema7, options?: merger.Options<JSONSchema7>): JSONSchema7;
declare function merger(rootSchema: JSONSchema46, options?: merger.Options<JSONSchema46>): JSONSchema46;
declare function merger(rootSchema: JSONSchema, options?: merger.Options): JSONSchema;

declare namespace merger {
    interface Options<Schema extends JSONSchema = JSONSchema> {
        ignoreAdditionalProperties?: boolean;
        resolvers?: Partial<Resolvers<Schema>> & {
            defaultResolver?(values: any[], path: string[], mergeSchemas: MergeSchemas, options: Options): any;
        };
    }
    interface MergeSchemas {
        (schemas: ReadonlyArray<JSONSchema4>): JSONSchema4;
        (schemas: ReadonlyArray<JSONSchema6>): JSONSchema6;
        (schemas: ReadonlyArray<JSONSchema46>): JSONSchema46;
        (schemas: ReadonlyArray<JSONSchema7>): JSONSchema7;
        (schemas: ReadonlyArray<JSONSchema>): JSONSchema;
    }
    interface MergeChildSchemas {
        (schemas: ReadonlyArray<JSONSchema4>, childSchemaName: string): JSONSchema4;
        (schemas: ReadonlyArray<JSONSchema6>, childSchemaName: string): JSONSchema6;
        (schemas: ReadonlyArray<JSONSchema46>, childSchemaName: string): JSONSchema46;
        (schemas: ReadonlyArray<JSONSchema7>, childSchemaName: string): JSONSchema7;
        (schemas: ReadonlyArray<JSONSchema>, childSchemaName: string): JSONSchema;
    }
    interface Resolvers<Schema extends JSONSchema = JSONSchema> {
        $id(
            values: Array<Extract<Schema, { $id?: any }>['$id']>,
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options,
        ): Extract<Schema, { $id?: any }>['$id'];
        $ref(values: Array<Schema['$ref']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['$ref'];
        $schema(values: Array<Schema['$schema']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['$schema'];
        additionalItems(values: Array<Schema['additionalItems']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['additionalItems'];
        additionalProperties(values: Array<Schema['additionalProperties']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['additionalProperties'];
        anyOf(values: Array<Schema['anyOf']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['anyOf'];
        contains(
            values: Array<Extract<Schema, { contains?: any }>['contains']>,
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options,
        ): Extract<Schema, { contains?: any }>['contains'];
        default(values: Array<Schema['default']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['default'];
        definitions(values: Array<Schema['definitions']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['definitions'];
        dependencies(values: Array<Schema['dependencies']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['dependencies'];
        description(values: Array<Schema['description']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['description'];
        enum(values: Array<Schema['enum']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['enum'];
        examples(
            values: Array<Extract<Schema, { examples?: any }>['examples']>,
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options,
        ): Extract<Schema, { examples?: any }>['examples'];
        exclusiveMaximum(values: Array<Schema['exclusiveMaximum']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['exclusiveMaximum'];
        exclusiveMinimum(values: Array<Schema['exclusiveMinimum']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['exclusiveMinimum'];
        items(values: Array<Schema['items']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['items'];
        maxItems(values: Array<Schema['maxItems']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['maxItems'];
        maxLength(values: Array<Schema['maxLength']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['maxLength'];
        maxProperties(values: Array<Schema['maxProperties']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['maxProperties'];
        maximum(values: Array<Schema['maximum']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['maximum'];
        minItems(values: Array<Schema['minItems']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['minItems'];
        minLength(values: Array<Schema['minLength']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['minLength'];
        minProperties(values: Array<Schema['minProperties']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['minProperties'];
        minimum(values: Array<Schema['minimum']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['minimum'];
        multipleOf(values: Array<Schema['multipleOf']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['multipleOf'];
        not(values: Array<Schema['not']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['not'];
        oneOf(values: Array<Schema['oneOf']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['oneOf'];
        pattern(values: Array<Schema['pattern']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['pattern'];
        properties(
            values: Schema[],
            path: string[],
            mergers: {
                properties: MergeChildSchemas;
                patternProperties: MergeChildSchemas;
                additionalProperties: MergeSchemas;
            },
            options: Options,
        ): Schema;
        propertyNames(
            values: Array<Extract<Schema, { propertyNames?: any }>['propertyNames']>,
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options,
        ): Extract<Schema, { propertyNames?: any }>['propertyNames'];
        required(
            values: Array<Schema['required']>,
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options,
        ): Schema['required'];
        title(values: Array<Schema['title']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['title'];
        type(values: Array<Schema['type']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['type'];
        uniqueItems(values: Array<Schema['uniqueItems']>, path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['uniqueItems'];
    }
    const options: {
        resolvers: Resolvers;
    };
}
