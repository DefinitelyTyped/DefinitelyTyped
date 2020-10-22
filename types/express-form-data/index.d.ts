// Type definitions for express-form-data 2.0
// Project: https://github.com/ortexx/express-form-data#readme
// Definitions by: nomnes <https://github.com/NomNes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { NextHandleFunction } from 'connect';
import { FormOptions } from 'multiparty';

export interface FormDataOptions extends FormOptions {
    autoClean?: boolean;
}

export function parse(options?: FormDataOptions): NextHandleFunction;

export function format(): NextHandleFunction;

export function stream(): NextHandleFunction;

export function union(): NextHandleFunction;
