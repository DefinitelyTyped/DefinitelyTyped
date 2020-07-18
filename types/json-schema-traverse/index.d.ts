// Type definitions for json-schema-traverse 0.4
// Project: https://github.com/epoberezkin/json-schema-traverse#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Traverse JSON Schema passing each schema object to callback
 */
declare function traverse(schema: object, cb: TraverseCallback): void;
declare function traverse(schema: object, opts: TraverseOptions, cb?: TraverseCallback): void;

// aliases
type TraverseCallback = traverse.TraverseCallback;
type TraverseOptions = traverse.TraverseOptions;
type TraverseCallbackDef = traverse.TraverseCallbackDef;

declare namespace traverse {
    const keywords: {
        additionalItems: true;
        items: true;
        contains: true;
        additionalProperties: true;
        propertyNames: true;
        not: true;
        if: true;
        then: true;
        else: true;
    };

    const arrayKeywords: {
        items: true;
        allOf: true;
        anyOf: true;
        oneOf: true;
    };

    const propsKeywords: {
        definitions: true;
        properties: true;
        patternProperties: true;
        dependencies: true;
    };

    const skipKeywords: {
        default: true;
        enum: true;
        const: true;
        required: true;
        maximum: true;
        minimum: true;
        exclusiveMaximum: true;
        exclusiveMinimum: true;
        multipleOf: true;
        maxLength: true;
        minLength: true;
        pattern: true;
        format: true;
        maxItems: true;
        minItems: true;
        uniqueItems: true;
        maxProperties: true;
        minProperties: true;
    };

    interface TraverseOptions {
        /**
         * Callback function `cb` is called for each schema object (not including draft-06 boolean schemas),
         * including the root schema, in pre-order traversal. Schema references (`$ref`) are not resolved,
         * they are passed as is. Alternatively, you can pass a `{pre, post}` object as `cb`, and then `pre`
         * will be called before traversing child elements, and `post` will be called
         * after all child elementshave been traversed.
         */
        cb?: TraverseCallback;
        /** Without option allKeys: true callback will be called only with root schema. */
        allKeys?: boolean;
    }

    type TraverseCallback =
        | TraverseCallbackDef
        | {
              pre?: TraverseCallbackDef;
              post?: TraverseCallbackDef;
          };

    interface TraverseCallbackDef {
        (
            /** the current schema object */
            schema: object,
            /** from the root schema to the current schema object */
            jsonPtr: string,
            /** the schema passed to traverse object */
            rootSchema: object,
            /** from the root schema to the parent schema object */
            parentJsonPtr: string,
            /** the keyword inside which this schema appears (e.g. `properties`, `anyOf`, etc.) */
            parentKeyword: string,
            /**
             * not necessarily parent `object`/`array`;
             * in the example above the parent schema for `{type: 'string'}` is the root schema
             */
            parentSchema: object,
            /**
             * index or property name in the `array`/`object` containing multiple schemas;
             * in the example above for `{type: 'string'}` the property name is `foo`
             */
            keyIndex: string | number,
        ): void;
    }
}

export = traverse;
