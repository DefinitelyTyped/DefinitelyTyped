/// <reference types="mongoose" />

declare module "mongoose" {
    export interface PaginateOptions {
        select?: Object | string | undefined;
        sort?: Object | string | undefined;
        populate?:
            | Array<Object>
            | Array<string>
            | Object
            | string
            | QueryPopulateOptions
            | undefined;
        lean?: boolean | undefined;
        leanWithId?: boolean | undefined;
        offset?: number | undefined;
        page?: number | undefined;
        limit?: number | undefined;
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

    export interface PaginateResult<T> {
        docs: Array<T>;
        total: number;
        limit: number;
        page?: number | undefined;
        pages?: number | undefined;
        offset?: number | undefined;
    }

    interface PaginateModel<T extends Document> extends Model<T> {
        paginate(
            query?: Object,
            options?: PaginateOptions,
            callback?: (err: any, result: PaginateResult<T>) => void,
        ): Promise<PaginateResult<T>>;
    }

    export function model<T extends Document>(
        name: string,
        schema?: Schema,
        collection?: string,
        skipInit?: boolean,
    ): PaginateModel<T>;

    export function model<T extends Document, U extends PaginateModel<T>>(
        name: string,
        schema?: Schema,
        collection?: string,
        skipInit?: boolean,
    ): U;
}

declare module "mongoose-paginate" {
    import mongoose = require("mongoose");
    var _: (schema: mongoose.Schema) => void;
    export = _;
}
