//
// Based on type declarations for mongoose-paginate-v2 1.3.
//
// Thanks to knyuwork <https://github.com/knyuwork>
// and LiRen Tu <https://github.com/tuliren> for their contribution

declare module "mongoose" {
    interface CustomLabels<T = string | undefined | boolean> {
        totalDocs?: T | undefined;
        docs?: T | undefined;
        limit?: T | undefined;
        page?: T | undefined;
        nextPage?: T | undefined;
        prevPage?: T | undefined;
        hasNextPage?: T | undefined;
        hasPrevPage?: T | undefined;
        totalPages?: T | undefined;
        pagingCounter?: T | undefined;
        meta?: T | undefined;
    }

    interface PaginateOptions {
        sort?: object | string | undefined;
        offset?: number | undefined;
        page?: number | undefined;
        limit?: number | undefined;
        customLabels?: CustomLabels | undefined;
        /* If pagination is set to `false`, it will return all docs without adding limit condition. (Default: `true`) */
        pagination?: boolean | undefined;
        allowDiskUse?: boolean | undefined;
        countQuery?: object | undefined;
        useFacet?: boolean | undefined;
    }

    interface QueryPopulateOptions {
        /** space delimited path(s) to populate */
        path: string;
        /** optional fields to select */
        select?: any;
        /** optional query conditions to match */
        match?: any;
        /** optional model to use for population */
        model?: string | Model<any> | undefined;
        /** optional query options like sort, limit, etc */
        options?: any;
        /** deep populate */
        populate?: QueryPopulateOptions | QueryPopulateOptions[] | undefined;
    }

    interface AggregatePaginateResult<T> {
        docs: T[];
        totalDocs: number;
        limit: number;
        page?: number | undefined;
        totalPages: number;
        nextPage?: number | null | undefined;
        prevPage?: number | null | undefined;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        meta?: any;
        [customLabel: string]: T[] | number | boolean | null | undefined;
    }

    interface AggregatePaginateModel<D> extends Model<D> {
        aggregatePaginate<T>(
            query?: Aggregate<T[]>,
            options?: PaginateOptions,
            callback?: (err: any, result: AggregatePaginateResult<T>) => void,
        ): Promise<AggregatePaginateResult<T>>;
    }

    function model(name: string, schema?: Schema, collection?: string, skipInit?: boolean): AggregatePaginateModel<any>;
}

import mongoose = require("mongoose");
declare function mongooseAggregatePaginate(schema: mongoose.Schema): void;
export = mongooseAggregatePaginate;
declare namespace _ {
    const aggregatePaginate: { options: mongoose.PaginateOptions };
}
