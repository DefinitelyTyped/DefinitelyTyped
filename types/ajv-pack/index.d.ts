// Type definitions for ajv-pack 0.3
// Project: https://github.com/epoberezkin/ajv-pack
// Definitions by: Mihail Malo <https://github.com/qm3ster>
//                 Christian Murphy <https://github.com/ChristianMurphy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Ajv, ValidateFunction } from 'ajv';

declare namespace AjvPack {
    interface AjvPack {
        /**
         * validate data against the schema
         * @param schema JSON-schema
         * @param data data to validate
         * @return validation result
         */
        validate(this: Ajv, schema: object, data: any): boolean;

        /**
         * compile the schema and require the module
         * @param  schema JSON-schema
         * @return validation function
         */
        compile(this: Ajv, schema: object): ValidateFunction;

        /**
         * add schema to the instance
         * @return result from ajv instance
         */
        addSchema: Ajv['addSchema'];

        /**
         * add custom keyword to the instance
         * @return result from ajv instance
         */
        addKeyword: Ajv['addKeyword'];
    }

    function instance(ajv: Ajv): AjvPack;
}

declare function AjvPack(ajv: Ajv, validate: ValidateFunction): string;

export = AjvPack;
