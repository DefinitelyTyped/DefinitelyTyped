// Type definitions for mongoose-paginate-v2 1.4
// Project: https://github.com/webgangster/mongoose-paginate-v2
// Definitions by: Linus Brolin <https://github.com/linusbrolin>
//                 woutgg <https://github.com/woutgg>
//                 oktapodia <https://github.com/oktapodia>
//                 Dongjun Lee <https://github.com/ChazEpps>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

declare module 'mongoose' {
    interface CustomLabels {
        totalDocs?: string | undefined;
        docs?: string | undefined;
        limit?: string | undefined;
        page?: string | undefined;
        nextPage?: string | undefined;
        prevPage?: string | undefined;
        hasNextPage?: string | undefined;
        hasPrevPage?: string | undefined;
        totalPages?: string | undefined;
        pagingCounter?: string | undefined;
        meta?: string | undefined;
    }

    interface ReadOptions {
        pref: string;
        tags?: any[] | undefined;
    }

    interface PaginateOptions {
        select?: object | string | undefined;
        collation?: import('mongodb').CollationOptions | undefined;
        sort?: object | string | undefined;
        populate?: PopulateOptions[] | string[] | PopulateOptions | string | PopulateOptions | undefined;
        projection?: any;
        lean?: boolean | undefined;
        leanWithId?: boolean | undefined;
        offset?: number | undefined;
        page?: number | undefined;
        limit?: number | undefined;
        customLabels?: CustomLabels | undefined;
        /* If pagination is set to `false`, it will return all docs without adding limit condition. (Default: `true`) */
        pagination?: boolean | undefined;
        useEstimatedCount?: boolean | undefined;
        useCustomCountFn?: (() => Promise<number>) | undefined;
        forceCountFn?: boolean | undefined;
        allowDiskUse?: boolean | undefined;
        read?: ReadOptions | undefined;
        options?: QueryOptions | undefined;
    }

    interface PaginateResult<T> {
        docs: T[];
        totalDocs: number;
        limit: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        page?: number | undefined;
        totalPages: number;
        offset: number;
        prevPage?: number | null | undefined;
        nextPage?: number | null | undefined;
        pagingCounter: number;
        meta?: any;
        [customLabel: string]: T[] | number | boolean | null | undefined;
    }

    type PaginateDocument<T, TMethods, TVirtuals, O extends PaginateOptions = {}> = O['lean'] extends true
        ? O['leanWithId'] extends true
            ? LeanDocument<T & { id: string }>
            : LeanDocument<T>
        : HydratedDocument<T, TMethods, TVirtuals>;

    interface PaginateModel<T, TQueryHelpers = {}, TMethods = {}, TVirtuals = {}>
        extends Model<T, TQueryHelpers, TMethods, TVirtuals> {
        paginate<O extends PaginateOptions>(
            query?: FilterQuery<T>,
            options?: O,
            callback?: (err: any, result: PaginateResult<PaginateDocument<T, TMethods, TVirtuals, O>>) => void,
        ): Promise<PaginateResult<PaginateDocument<T, TMethods, TVirtuals, O>>>;
    }
}

import mongoose = require('mongoose');
declare function _(schema: mongoose.Schema): void;
export = _;
declare namespace _ {
    const paginate: { options: mongoose.PaginateOptions };
}
