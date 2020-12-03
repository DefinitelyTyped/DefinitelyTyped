// Type definitions for mongoose-aggregate-paginate-v2 1.0
// Project: https://github.com/webgangster/mongoose-aggregate-paginate-v2
// Definitions by: Alexandre Croteau <https://github.com/acrilex1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2
//
// Based on type declarations for mongoose-paginate-v2 1.3.
//
// Thanks to knyuwork <https://github.com/knyuwork>
// and LiRen Tu <https://github.com/tuliren> for their contribution

declare module 'mongoose' {
    interface CustomLabels {
        totalDocs?: string;
        limit?: string;
        page?: string;
        totalPages?: string;
        docs?: string;
        nextPage?: string;
        prevPage?: string;
        pagingCounter?: string;
        hasPrevPage?: string;
        hasNextPage?: string;
    }

    interface PaginateOptions {
        sort?: object | string;
        offset?: number;
        page?: number;
        limit?: number;
        customLabels?: CustomLabels;
        /* If pagination is set to `false`, it will return all docs without adding limit condition. (Default: `true`) */
        pagination?: boolean;
        allowDiskUse?: boolean;
        countQuery?: object;
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

    interface AggregatePaginateResult<T> {
        docs: T[];
        totalDocs: number;
        limit: number;
        page?: number;
        totalPages: number;
        nextPage?: number | null;
        prevPage?: number | null;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        meta?: any;
        [customLabel: string]: T[] | number | boolean | null | undefined;
    }

    interface AggregatePaginateModel<T extends Document> extends Model<T> {
        aggregatePaginate(
            query?: Aggregate<T[]>,
            options?: PaginateOptions,
            callback?: (err: any, result: AggregatePaginateResult<T>) => void,
        ): Promise<AggregatePaginateResult<T>>;
    }

    function model(name: string, schema?: Schema, collection?: string, skipInit?: boolean): AggregatePaginateModel<any>;
}

import mongoose = require('mongoose');
declare function mongooseAggregatePaginate(schema: mongoose.Schema): void;
export = mongooseAggregatePaginate;
declare namespace _ {
    const aggregatePaginate: { options: mongoose.PaginateOptions };
}
