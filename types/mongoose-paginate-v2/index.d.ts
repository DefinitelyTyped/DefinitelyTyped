// Type definitions for mongoose-paginate-v2 1.0
// Project: https://github.com/aravindnc/mongoose-paginate-v2
// Definitions by: Linus Brolin <https://github.com/linusbrolin>
//                 simonxca <https://github.com/simonxca>
//                 woutgg <https://github.com/woutgg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
//
// Based on type declarations for mongoose-paginate 5.0.0.

declare module 'mongoose' {
  interface CustomLabels {
    totalDocs?: string;
    limit?: string;
    page?: string;
    totalPages?: string;
    docs?: string;
    nextPage?: string;
    prevPage?: string;
  }

  interface PaginateOptions {
    /* tslint:disable-next-line: ban-types */
    select?: Object | string;
    /* tslint:disable-next-line: ban-types */
    sort?: Object | string;
    customLabels?: CustomLabels;
    collation?: CollationOptions;
    /* tslint:disable-next-line: ban-types */
    populate?: Object[] | string[] | Object | string;
    lean?: boolean;
    leanWithId?: boolean;
    offset?: number;
    page?: number;
    limit?: number;
  }

  interface PaginateResult<T> {
    docs: T[];
    total: number;
    limit: number;
    page?: number;
    pages?: number;
    offset?: number;
    [customLabel: string]: T[] | number | undefined;
  }

  interface PaginateModel<T extends Document> extends Model<T> {
    paginate(query?: object, options?: PaginateOptions, callback?: (err: any, result: PaginateResult<T>) => void): Promise<PaginateResult<T>>;
  }

  function model(
    name: string,
    schema?: Schema,
    collection?: string,
    skipInit?: boolean): PaginateModel<any>;
}

import mongoose = require('mongoose');
export function _(schema: mongoose.Schema): void;
