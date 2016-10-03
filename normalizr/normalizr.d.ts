// Type definitions for normalizr 2.0.1
// Project: https://github.com/gaearon/normalizr/
// Definitions by: Markus Peloso <https://github.com/ToastHawaii/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "normalizr" {
    export = Normalizr;
}

declare namespace Normalizr {
    type AttributeSetting = string | ((entity: any) => any);

    type SchemaClass = Schema | ArraySchema | UnionSchema;

    type SchemaObject = { [property: string]: SchemaClass | SchemaObject };

    type SchemaType = SchemaClass | SchemaObject | Object;

    export class Schema {
        /**
         * Schema lets you define a type of entity returned by your API.
         * This should correspond to model in your server code.
         * @param key The key parameter lets you specify the name of the dictionary for this kind of entity.
         * @param options
         */
        constructor(key: string, options?: { idAttribute: AttributeSetting; });

        /**
         * Lets you specify relationships between different entities.
         * @param nestedSchema
         */
        define(nestedSchema: SchemaObject): void;

        /**
         * Returns the key of the schema.
         */
        getKey(): string;

        /**
         * Returns the idAttribute of the schema.
         */
        getIdAttribute(): AttributeSetting;
    }

    interface UnionSchema {
        getItemSchema(): SchemaType;
        getSchemaKey(item: any): string;
    }

    interface ArraySchema {
        getItemSchema(): SchemaType;
    }

    /**
     * Describes an array of the schema passed as argument.
     * @param schema
     * @param options
     */
    export function arrayOf(schema: SchemaType, options?: {
        /**
         * If the array contains entities with different schemas, you can use the schemaAttribute option to specify which schema to use for each entity.
         */
        schemaAttribute: AttributeSetting
    }): ArraySchema;

    /**
     * Describes a map whose values follow the schema passed as argument.
     * @param schema
     * @param options
     */
    export function valuesOf(schema: SchemaType, options?: {
        /**
         * If the map contains entities with different schemas, you can use the schemaAttribute option to specify which schema to use for each entity.
         */
        schemaAttribute: AttributeSetting
    }): ArraySchema;

    /**
     * Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by arrayOf or valuesOf but for non-collection fields.
     * @param schemaMap
     * @param options
     */
    export function unionOf(schemaMap: SchemaType, options?: {
        /**
         * Use the required schemaAttribute option to specify which schema to use for each entity.
         */
        schemaAttribute: AttributeSetting
    }): UnionSchema;

    /**
     * Normalizes object according to schema.
     * Passed schema should be a nested object reflecting the structure of API response.
     * @param obj
     * @param schema
     * @param options
     */
    export function normalize(obj: any | Array<any>, schema: SchemaType, options?: {
        /**
         * This is useful if your backend emits additional fields, such as separate ID fields, you'd like to delete in the normalized entity.
         */
        assignEntity?: (normalized: any, key: string, entity: any) => any;

        /**
         * You can use this to resolve conflicts when merging entities with the same key.
         */
        mergeIntoEntity?: (stored: any, normalized: any, entityKey: string) => any;
    }): {
            entities: any;
            result: any;
        };
}
