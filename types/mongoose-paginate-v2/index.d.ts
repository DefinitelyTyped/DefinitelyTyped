// Type definitions for mongoose-paginate-v2 1.3
// Project: https://github.com/webgangster/mongoose-paginate-v2
// Definitions by: Linus Brolin <https://github.com/linusbrolin>
//                 simonxca <https://github.com/simonxca>
//                 woutgg <https://github.com/woutgg>
//                 oktapodia <https://github.com/oktapodia>
//                 Dongjun Lee <https://github.com/ChazEpps>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0
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

    interface ReadOptions {
        pref: string;
        tags?: any[];
    }

    interface PaginateOptions {
        /* tslint:disable-next-line: ban-types */
        select?: Object | string;
        /* tslint:disable-next-line: ban-types */
        sort?: Object | string;
        customLabels?: CustomLabels;
        collation?: CollationOptions;
        /* tslint:disable-next-line: ban-types */
        populate?: Object[] | string[] | Object | string | QueryPopulateOptions;
        lean?: boolean;
        leanWithId?: boolean;
        offset?: number;
        page?: number;
        limit?: number;
        read?: ReadOptions;
        /* If pagination is set to `false`, it will return all docs without adding limit condition. (Default: `true`) */
        pagination?: boolean;
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
        paginate(
            query?: object,
            options?: PaginateOptions,
            callback?: (err: any, result: PaginateResult<T>) => void,
        ): Promise<PaginateResult<T>>;
    }

    function model(name: string, schema?: Schema, collection?: string, skipInit?: boolean): PaginateModel<any>;
}

import mongoose = require('mongoose');
declare function _(schema: mongoose.Schema): void;
export = _;
