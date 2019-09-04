// Type definitions for json-schema-merge-allof 0.6
// Project: https://github.com/mokkabonna/json-schema-merge-allof#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { JSONSchema4, JSONSchema6, JSONSchema7 } from 'json-schema';

export = merger;

type JSONSchema = JSONSchema4 | JSONSchema6 | JSONSchema7;

declare function merger(rootSchema: JSONSchema4, options?: merger.Options<JSONSchema4>): JSONSchema4;
declare function merger(rootSchema: JSONSchema6, options?: merger.Options<JSONSchema6>): JSONSchema6;
declare function merger(rootSchema: JSONSchema7, options?: merger.Options<JSONSchema7>): JSONSchema7;
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
        (schemas: ReadonlyArray<JSONSchema7>): JSONSchema7;
        (schemas: ReadonlyArray<JSONSchema>): JSONSchema;
    }
    interface MergeChildSchemas {
        (schemas: ReadonlyArray<JSONSchema4>, childSchemaName: string): JSONSchema4;
        (schemas: ReadonlyArray<JSONSchema6>, childSchemaName: string): JSONSchema6;
        (schemas: ReadonlyArray<JSONSchema7>, childSchemaName: string): JSONSchema7;
        (schemas: ReadonlyArray<JSONSchema>, childSchemaName: string): JSONSchema;
    }
    interface Resolvers<Schema extends JSONSchema = JSONSchema> {
        $id(
            values: Extract<Schema, { $id?: any }>['$id'][],
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options,
        ): Extract<Schema, { $id?: any }>['$id'];
        $ref(values: Schema['$ref'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['$ref'];
        $schema(values: Schema['$schema'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['$schema'];
        additionalItems(values: Schema['additionalItems'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['additionalItems'];
        additionalProperties(values: Schema['additionalProperties'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['additionalProperties'];
        anyOf(values: Schema['anyOf'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['anyOf'];
        contains(
            values: Extract<Schema, { contains?: any }>['contains'][],
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options,
        ): Extract<Schema, { contains?: any }>['contains'];
        default(values: Schema['default'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['default'];
        definitions(values: Schema['definitions'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['definitions'];
        dependencies(values: Schema['dependencies'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['dependencies'];
        description(values: Schema['description'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['description'];
        enum(values: Schema['enum'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['enum'];
        examples(
            values: Extract<Schema, { examples?: any }>['examples'][],
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options,
        ): Extract<Schema, { examples?: any }>['examples'];
        exclusiveMaximum(values: Schema['exclusiveMaximum'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['exclusiveMaximum'];
        exclusiveMinimum(values: Schema['exclusiveMinimum'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['exclusiveMinimum'];
        items(values: Schema['items'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['items'];
        maxItems(values: Schema['maxItems'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['maxItems'];
        maxLength(values: Schema['maxLength'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['maxLength'];
        maxProperties(values: Schema['maxProperties'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['maxProperties'];
        maximum(values: Schema['maximum'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['maximum'];
        minItems(values: Schema['minItems'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['minItems'];
        minLength(values: Schema['minLength'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['minLength'];
        minProperties(values: Schema['minProperties'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['minProperties'];
        minimum(values: Schema['minimum'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['minimum'];
        multipleOf(values: Schema['multipleOf'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['multipleOf'];
        not(values: Schema['not'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['not'];
        oneOf(values: Schema['oneOf'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['oneOf'];
        pattern(values: Schema['pattern'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['pattern'];
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
            values: Extract<Schema, { propertyNames?: any }>['propertyNames'][],
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options,
        ): Extract<Schema, { propertyNames?: any }>['propertyNames'];
        required(
            values: Schema['required'][],
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options,
        ): Schema['required'];
        title(values: Schema['title'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['title'];
        type(values: Schema['type'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['type'];
        uniqueItems(values: Schema['uniqueItems'][], path: string[], mergeSchemas: MergeSchemas, options: Options): Schema['uniqueItems'];
    }
    const options: {
        resolvers: Resolvers;
    };
}
