// Type definitions for mongoose-paginate-v2 1.0.13
// Project: https://github.com/edwardhotchkiss/mongoose-paginate
// Definitions by: Linus Brolin <https://github.com/linusbrolin>
//                 simonxca <https://github.com/simonxca>
//                 woutgg <https://github.com/woutgg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
//
// Based on type declarations for mongoose-paginate 5.0.0.

/// <reference types="mongoose" />

declare module 'mongoose' {
  export interface CustomLabels {
    totalDocs?: string,
    limit?: string,
    page?: string,
    totalPages?: string,
    docs?: string,
    nextPage?: string,
    prevPage?: string,
  }

  export interface PaginateOptions {
    select?: Object | string;
    sort?: Object | string;
    customLabels?: CustomLabels,
    collation?: CollationOptions,
    populate?: Array<Object> | Array<string> | Object | string;
    lean?: boolean;
    leanWithId?: boolean;
    offset?: number;
    page?: number;
    limit?: number;
  }

  export interface PaginateResult<T> {
    docs: Array<T>;
    total: number;
    limit: number;
    page?: number;
    pages?: number;
    offset?: number;
    [customLabel: string]: Array<T> | number | undefined;
  }

  interface PaginateModel<T extends Document> extends Model<T> {
    paginate(query?: Object, options?: PaginateOptions, callback?: (err: any, result: PaginateResult<T>) => void): Promise<PaginateResult<T>>;
  }

  export function model<T extends Document>(
    name: string,
    schema?: Schema,
    collection?: string,
    skipInit?: boolean): PaginateModel<T>;

  export function model<T extends Document, U extends PaginateModel<T>>(
    name: string,
    schema?: Schema,
    collection?: string,
    skipInit?: boolean): U;
}

declare module 'mongoose-paginate-v2' {
  import mongoose = require('mongoose');
  var _: (schema: mongoose.Schema) => void;
  export = _;
}
