// <reference types="node"/>
// <reference types="chai" />
import tv4 = require("tv4");

declare global {
    namespace Chai {
        interface Assert {
            jsonSchema(value: any, schema: any, msg?: string): void;
            notJsonSchema(value: any, schema: any, msg?: string): void;
        }

        interface LanguageChains {
            jsonSchema(schema: any, msg?: string): void;
        }

        interface ChaiStatic {
            tv4: tv4.TV4;
        }
    }
}

declare const chaiJsonSchema: Chai.ChaiPlugin;
declare namespace chaiJsonSchema {}
export = chaiJsonSchema;
