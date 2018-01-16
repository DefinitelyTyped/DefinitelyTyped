// Type definitions for jest-json-schema 1.2
// Project: https://github.com/americanexpress/jest-json-schema#readme
// Definitions by: Igor Korolev <https://github.com/deadNightTiger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jest" />
import * as ajv from "ajv";

declare global {
    namespace jest {
        interface Matchers<R> {
            toMatchSchema(schema: object): R;
        }
    }
}

export const matchers: jest.ExpectExtendMap;
export function matchersWithOptions(options: ajv.Options): jest.ExpectExtendMap;
