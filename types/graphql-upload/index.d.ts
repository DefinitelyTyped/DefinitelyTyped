// Type definitions for graphql-upload 15.0
// Project: https://github.com/jaydenseric/graphql-upload#readme
// Definitions by: Mike Marcacci <https://github.com/mike-marcacci>
//                 Simon Feiden <https://github.com/rdsfj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.8

import { ReadStream } from 'fs-capacitor';

export interface FileUpload {
    filename: string;
    mimetype: string;
    encoding: string;
    createReadStream(): ReadStream;
}

export interface GraphQLOperation {
    query: string;
    operationName?: null | string | undefined;
    variables?: null | unknown | undefined;
}

export interface UploadOptions {
    maxFieldSize?: number | undefined;
    maxFileSize?: number | undefined;
    maxFiles?: number | undefined;
}
