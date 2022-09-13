// Type definitions for jest-json-schema 6.1
// Project: https://github.com/americanexpress/jest-json-schema#readme
// Definitions by: Matt Scheurich <https://github.com/lvl99>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

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
export type Options = ajv.Options & { AjvClass?: any };
export function matchersWithOptions(options: Options, extendAjv?: (ajv: ajv.Ajv) => void): jest.ExpectExtendMap;
