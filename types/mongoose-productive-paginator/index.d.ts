// Type definitions for mongoose-productive-paginator 1.0
// Project: https://github.com/pr0n1x2/mongoose-productive-paginator
// Minimum TypeScript Version: 4.1

declare module 'mongoose' {
  interface CustomLabels {
    totalDocs?: string;
    docs?: string;
    limit?: string;
    page?: string;
    totalPages?: string;
    nextPage?: string;
    prevPage?: string;
    pagingCounter?: string;
    hasNextPage?: string;
    hasPrevPage?: string;
    meta?: string;
  }

  interface PaginateOptions {
    customLabels?: CustomLabels;
    limit?: number;
    aggregateOptions?: object;
    pagination?: boolean;
    useFacet?: boolean;
    debug?: boolean;
    offset?: number;
    page?: number;
  }

  interface AggregatePaginateResult<T> {
    totalDocs?: number;
    docs?: T[];
    limit?: number;
    page?: number;
    totalPages?: number;
    nextPage?: number;
    prevPage?: number;
    pagingCounter?: number;
    hasPrevPage?: boolean;
    hasNextPage?: boolean;
    meta?: object;
    offset?: number;
    [customLabel: string]: T[] | number | boolean | object | undefined;
  }

  interface AggregatePaginateModel<T extends Document> extends Model<T> {
    aggregatePaginate<R>(
      conditionsPipeline: object | object[] | null,
      sortPipeline?: object | object[] | null,
      docsPipeline?: object | object[] | null,
      options?: PaginateOptions,
      callback?: (err: any, result: AggregatePaginateResult<R>) => void,
    ): Promise<AggregatePaginateResult<R>>;
  }

  function model(name: string, schema?: Schema, collection?: string, skipInit?: boolean): AggregatePaginateModel<any>;
}

import mongoose = require('mongoose');
declare function mongooseProductivePaginator(schema: mongoose.Schema): void;
export = mongooseProductivePaginator;
declare namespace _ {
  const aggregatePaginate: { options: mongoose.PaginateOptions };
}
