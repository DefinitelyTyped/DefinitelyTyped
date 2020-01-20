// Type definitions for to-json-schema 0.2
// Project: https://github.com/ruzicka/to-json-schema#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { JSONSchema4, JSONSchema4TypeName } from 'json-schema';

export = toJsonSchema;

/**
 * `to-json-schema` exports function that converts most javascript values to
 * JSON schema. Such a schema can be used to further validation of similar
 * objects/values
 *
 * @param value Any javascript value
 * @param options optional options object
 */
declare function toJsonSchema(
    value: any,
    options?: toJsonSchema.Options
): toJsonSchema.JSONSchema3or4;

declare namespace toJsonSchema {
    interface JSONSchema3or4 {
        id?: JSONSchema4['id'];
        $ref?: JSONSchema4['$ref'];
        $schema?: JSONSchema4['$schema'];
        title?: JSONSchema4['title'];
        description?: JSONSchema4['description'];

        default?: JSONSchema4['default'];
        multipleOf?: JSONSchema4['multipleOf'];
        /** JSON Schema 3 uses `divisibleBy` instead of `multipleOf`. */
        divisibleBy?: JSONSchema4['multipleOf'];
        maximum?: JSONSchema4['maximum'];
        exclusiveMaximum?: JSONSchema4['exclusiveMaximum'];
        minimum?: JSONSchema4['minimum'];
        exclusiveMinimum?: JSONSchema4['exclusiveMinimum'];
        maxLength?: JSONSchema4['maxLength'];
        minLength?: JSONSchema4['minLength'];
        pattern?: JSONSchema4['pattern'];

        additionalItems?: boolean | JSONSchema3or4;
        items?: JSONSchema3or4 | JSONSchema3or4[];

        maxItems?: JSONSchema4['maxItems'];
        minItems?: JSONSchema4['minItems'];
        uniqueItems?: JSONSchema4['uniqueItems'];
        maxProperties?: JSONSchema4['maxProperties'];
        minProperties?: JSONSchema4['minProperties'];

        required?: boolean | JSONSchema4['required'];
        additionalProperties?: boolean | JSONSchema3or4;

        definitions?: JSONSchema4['definitions'];

        properties?: {
            [k: string]: JSONSchema3or4
        };

        patternProperties?: {
            [k: string]: JSONSchema3or4
        };
        dependencies?: {
            [k: string]: JSONSchema3or4 | string | string[]
        };

        enum?: JSONSchema4['enum'];
        type?: JSONSchema4['type'];

        allOf?: JSONSchema4['allOf'];
        anyOf?: JSONSchema4['anyOf'];
        oneOf?: JSONSchema4['oneOf'];
        not?: JSONSchema4['not'];

        /** JSON Schema 3 only */
        disallow?: string | Array<string | JSONSchema3or4>;

        extends?: JSONSchema3or4 | JSONSchema3or4[];

        [k: string]: any;

        format?: string;
    }

    interface Options {
        /**
         * specify `true` to make all properties required.
         *
         * @default false
         * @example
         * const schema = toJsonSchema(33, {required: false});
         * // { type: "integer" }
         * const schema = toJsonSchema(33, {required: true});
         * // { type: "integer", "required": true }
         */
        required?: boolean;
        /**
         * By providing `postProcessFnc`, you can modify or replace generated
         * schema. This function will be called recursively for all the properties
         * and sub-properties and array items from leaves to the root. If you want
         * to preserve default functionality, don't forget to call defaultFunc
         * which is currently responsible for setting `required` for the schema
         * items if there is common option `required` set to true.
         *
         * @param type JSON schema type of the `value`
         * @param schema Generated JSON schema
         * @param value - input value
         * @param defaultFunc standard function that is used to post-process
         *                    generated schema. Takes the `type`, `schema`,
         *                    `value` params.
         */
        postProcessFnc?(
            type: JSONSchema4TypeName,
            schema: JSONSchema3or4,
            value: any,
            defaultFunc: (
                type: JSONSchema4TypeName,
                schema: JSONSchema3or4,
                value: any
            ) => JSONSchema3or4
        ): JSONSchema3or4;

        arrays?: {
            /**
             * * `all` option causes parser to go through all array items, finding
             *   the most compatible yet most descriptive schema possible. If
             *   multiple types are found, the type is omitted so it can be
             *   validated.
             * * `first` option takes only first item in the array into account. If
             *   performance is a concern, you may consider this option.
             * * `uniform` option requires all items in array to have same structure
             *   (to convert to the same schema). If not, error is thrown.
             * * `tuple` option generates a
             *   [tuple array](https://json-schema.org/understanding-json-schema/reference/array.html#tuple-validation)
             *   (array of objects) from arrays.
             *
             * @default 'all'
             */
            mode?: 'all' | 'first' | 'uniform' | 'tuple';
        };
        objects?: {
            /**
             * By providing custom function you will be able to modify any object
             * value (including nested ones) and pre-process it before it gets
             * converted into schema or modify generated schema or do the schema
             * conversion entirely by yourself.
             *
             * @param obj input object value that is supposed to be converted into
             *            JSON schema
             * @param defaultFunc standard function that is used to generate schema
             *                    from object. Takes just the `obj` param.
             */
            preProcessFnc?(
                obj: any,
                defaultFunc: (obj: any) => JSONSchema3or4
            ): JSONSchema3or4;
            /**
             * By providing `postProcessFnc`, you can modify or replace generated
             * schema. This function will be called recursively for all the
             * properties and sub-properties and array items from leaves to the root
             * of the `obj` object.
             *
             * @param schema Generated JSON schema
             * @param obj input value
             * @param defaultFunc standard function that is used to post-process
             *                    generated schema. Takes the `schema`, `obj`
             *                    params.
             */
            postProcessFnc?(
                schema: JSONSchema3or4,
                obj: any,
                defaultFnc: (schema: JSONSchema3or4, obj: any) => JSONSchema3or4
            ): JSONSchema3or4;
            /**
             * if set to `false`, all object schemas will include JSON schema
             * property `additionalProperties: false` which makes generated schema
             * to perevent any extra properties.
             *
             * @default true
             */
            additionalProperties?: boolean;
        };
        strings?: {
            /**
             * By providing custom function you will be able to modify any string
             * value (including nested ones) and pre-process it before it gets
             * converted to schema, modify generated schema or do the schema
             * conversion entirely by yourself.
             *
             * @param value `string` to be converted into JSON schema
             * @param defaultFnc default function that normally generates the
             *                   schema. This function receives only `string` to be
             *                   converted to JSON schema
             */
            preProcessFnc?(
                value: string,
                defaultFnc: (value: string) => JSONSchema3or4
            ): JSONSchema3or4;
            /**
             * When set to true format of the strings values may be detected based
             * on it's content.
             *
             * These JSON schema string formats can be detected:
             *
             * * date-time
             * * date
             * * time
             * * utc-millisec
             * * color
             * * style
             * * phone
             * * uri
             * * email
             * * ip-address
             * * ipv6
             *
             * @default true
             */
            detectFormat?: boolean;
        };
    }
}
