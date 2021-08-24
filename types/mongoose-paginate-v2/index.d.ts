// Type definitions for mongoose-paginate-v2 1.3
// Project: https://github.com/webgangster/mongoose-paginate-v2
// Definitions by: Linus Brolin <https://github.com/linusbrolin>
//                 simonxca <https://github.com/simonxca>
//                 woutgg <https://github.com/woutgg>
//                 oktapodia <https://github.com/oktapodia>
//                 Dongjun Lee <https://github.com/ChazEpps>
//                 gamsterX <https://github.com/gamsterx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2
//
// Based on type declarations for mongoose-paginate 5.0.0.

declare module 'mongoose' {
    interface CustomLabels {
        totalDocs?: string | undefined;
        limit?: string | undefined;
        page?: string | undefined;
        totalPages?: string | undefined;
        docs?: string | undefined;
        nextPage?: string | undefined;
        prevPage?: string | undefined;
    }

    interface ReadOptions {
        pref: string;
        tags?: any[] | undefined;
    }

    interface PaginateOptions {
        select?: object | string | undefined;
        sort?: object | string | undefined;
        customLabels?: CustomLabels | undefined;
        collation?: CollationOptions | undefined;
        populate?: object[] | string[] | object | string | QueryPopulateOptions | undefined;
        lean?: boolean | undefined;
        leanWithId?: boolean | undefined;
        offset?: number | undefined;
        page?: number | undefined;
        limit?: number | undefined;
        read?: ReadOptions | undefined;
        /* If pagination is set to `false`, it will return all docs without adding limit condition. (Default: `true`) */
        pagination?: boolean | undefined;
        projection?: any;
        options?: QueryFindOptions | undefined;
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

    interface PaginateResult<T> {
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

    interface PaginateModel<T extends Document> extends Model<T> {
        paginate(
            query?: FilterQuery<T>,
            options?: PaginateOptions,
            callback?: (err: any, result: PaginateResult<T>) => void,
        ): Promise<PaginateResult<T>>;
    }

    function model(name: string, schema?: Schema, collection?: string, skipInit?: boolean): PaginateModel<any>;
}

import mongoose = require('mongoose');
declare function _(schema: mongoose.Schema): void;
export = _;
declare namespace _ {
    const paginate: { options: mongoose.PaginateOptions };
}
