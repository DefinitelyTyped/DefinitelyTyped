/// <reference path="../mongoose/mongoose.d.ts" />

declare module 'mongoose' {
  export interface PaginateOptions {
    select?: Object | string;
    sort?: Object | string;
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
  }

  export type PaginateModel<T> = _PaginateModel<T> & Model<T>;
  interface _PaginateModel<T> {
    paginate(query?: Object, options?: PaginateOptions, callback?: (err: any, result: PaginateResult<T>) => void): Promise<PaginateResult<T>>;
  }

  export function model<T extends Document, Statics>(
    name: string,
    schema?: Schema,
    collection?: string,
    skipInit?: boolean): Statics & PaginateModel<T>;
}

declare module 'mongoose-paginate' {
  import mongoose = require('mongoose');
  var _: (schema: mongoose.Schema) => void;
  export = _;
}
