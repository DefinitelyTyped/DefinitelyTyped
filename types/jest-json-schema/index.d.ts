// Type definitions for jest-json-schema 2.1
// Project: https://github.com/americanexpress/jest-json-schema#readme
// Definitions by: Igor Korolev <https://github.com/deadNightTiger>
//                 Matt Scheurich <https://github.com/lvl99>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="jest" />
import * as ajv from 'ajv';

declare global {
    namespace jest {
        interface Matchers<R, T> {
            toBeValidSchema(): R;
            toMatchSchema(schema: object): R;
        }
    }
}

export const matchers: jest.ExpectExtendMap;
export function matchersWithOptions(options: ajv.Options, extendAjv?: (ajv: ajv.Ajv) => void): jest.ExpectExtendMap;
