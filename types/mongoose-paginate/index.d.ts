// Type definitions for mongoose-paginate 5.0.0
// Project: https://github.com/edwardhotchkiss/mongoose-paginate
// Definitions by: Linus Brolin <https://github.com/linusbrolin>, simonxca <https://github.com/simonxca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="mongoose" />

declare module 'mongoose' {
  export interface PaginateOptions {
    select?: Object | string;
    sort?: Object | string;
    populate?:
      | Array<Object>
      | Array<string>
      | Object
      | string
      | QueryPopulateOptions;
    lean?: boolean;
    leanWithId?: boolean;
    offset?: number;
    page?: number;
    limit?: number;
  }

  interface QueryPopulateOptions {
    /** space delimited path(s) to populate */
    path: string;
    /** optional fields to select */
    select?: any;
    /** optional query conditions to match */
    match?: any;
    /** optional model to use for population */
    model?: string | Model<any>;
    /** optional query options like sort, limit, etc */
    options?: any;
    /** deep populate */
    populate?: QueryPopulateOptions | QueryPopulateOptions[];
  }

  export interface PaginateResult<T> {
    docs: Array<T>;
    total: number;
    limit: number;
    page?: number;
    pages?: number;
    offset?: number;
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

declare module 'mongoose-paginate' {
  import mongoose = require('mongoose');
  var _: (schema: mongoose.Schema) => void;
  export = _;
}
