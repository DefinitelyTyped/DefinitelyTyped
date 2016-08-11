// Type definitions for jsonschema
// Project: https://github.com/tdegrunt/jsonschema
// Definitions by: Vlado Tešanovic <https://github.com/vladotesanovic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module "jsonschema" {

    export interface IJSONSchemaResult {
        errors: Array<IJSONSchemaValidationError>;
        instance: any;
        arguments: Array<{}>;
        propertyPath: string;
        name: string;
        schema: {};
        throwError: any;
        disableFormat: boolean;
    }

    export interface IJSONSchemaValidationError {
        message: string;
        property: string;
        stack: string;
        schema: {};
        name: string;
        instance: any;
        argument: {};
    }

    export interface IJSONSchemaOptions {
        propertyName?: string;
        base?: string;
    }

    /**
     * How to;
     *
     * const v: Validator = new Validator();
     *
     * const schema: {} = {
     *      "type": "object",
     *      "properties": {
     *          "key": {
     *              "type": "string",
     *              "required": true
     *          },
     *          "value": {
     *              "type": "string",
     *              "required": true
     *          }
     *       }
     *   };
     *
     * const validationResults: { errors: Array<IJSONSchemaValidationError> } =
     * v.validate({ key: "Name", value: "A10" }, {"type": "string"});
     *
     */
    export class Validator {

        /**
         * Creates a new Validator object
         * @name Validator
         * @constructor
         */
        new(): this;

        /**
         * Validates instance against the provided schema
         * @param instance
         * @param schema
         * @param [options]
         * @param [ctx]
         * @return {Array}
         */
        validate(instance: any, schema: {}, options?: IJSONSchemaOptions, ctx?: {}): IJSONSchemaResult;

        /**
         * Adds a schema with a certain urn to the Validator instance.
         * @param schema
         * @param urn
         * @return {Object}
         */
        addSchema(schema: {}, urn: string): {};

        /**
         * Add Sub schema to existing one
         * @param baseuri
         * @param schema
         */
        addSubSchema(baseuri: string, schema: {}): {}

        /**
         * Sets all the schemas of the Validator instance.
         * @param schemas
         */
        setSchemas (schemas: Array<{}>): void;

        /**
         * Returns the schema of a certain urn
         * @param urn
         */
        getSchema(urn: string): {};
    }
}

