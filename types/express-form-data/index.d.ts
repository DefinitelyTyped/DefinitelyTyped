// Type definitions for express-form-data 2.0
// Project: https://github.com/ortexx/express-form-data#readme
// Definitions by: nomnes <https://github.com/NomNes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// INFO: without 'single-declare-module' and 'declare-current-package' it not working correctly

declare module "express-form-data" {
    import { NextHandleFunction } from 'connect';
    import { FormOptions } from 'multiparty';

    interface FormDataOptions extends FormOptions {
        autoClean?: boolean;
    }

    interface FormDataOptions {
        autoClean?: boolean;
        autoFields?: boolean;
        autoFiles?: boolean;
        maxFields?: number;
        maxFieldsSize?: number;
        maxFilesSize?: number;
        uploadDir?: string;
        encoding?: string;

        [key: string]: any;
    }

    function parse(options?: FormDataOptions): NextHandleFunction;

    function format(): NextHandleFunction;

    function stream(): NextHandleFunction;

    function union(): NextHandleFunction;
}
