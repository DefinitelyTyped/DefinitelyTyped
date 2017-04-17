// Type definitions for chai-json-schema
// Project: https://github.com/Bartvds/chai-json-schema
// Definitions by: SamuelMarks <https://github.com/SamuelMarks/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module Chai {

    interface Assertion {
        jsonSchema(schema: string, msg: string): Assertion;
    }

    interface Assert {
        jsonSchema(val, exp, msg?: string): string;
        notJsonSchema(val, exp, msg?: string): string;
    }
}

interface String {
    should: Chai.Assertion;
}

declare module "chai-json-schema" {
    export function formatResult(error: string, data: string, schema: string, indent: string): string;
    export function extractSchemaLabel(schema: string, max: number): string;
    export function valueStrim(value: string, cutoff?: number): string;
}
