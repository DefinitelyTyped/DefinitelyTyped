// Type definitions for airtable 0.5
// Project: https://github.com/airtable/airtable.js
// Definitions by: Brandon Valosek <https://github.com/bvalosek>
//                 Max Chehab <https://github.com/maxchehab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = Airtable;

declare global {
    class Airtable {
        constructor(options?: Airtable.AirtableOptions);
        base(appId: string): Airtable.Base;
    }

    namespace Airtable {
        interface FieldSet {
            [key: string]: undefined | string | ReadonlyArray<Attachment>;
        }

        interface AirtableOptions {
            apiKey?: string;
            endpointUrl?: string;
            apiVersion?: string;
            allowUnauthorizedSsl?: boolean;
            noRetryIfRateLimited?: boolean;
            requestTimeout?: number;
        }

        interface Base {
            (tableName: string): Table<{}>;
        }

        interface Table<TFields extends FieldSet> {
            select(opt?: SelectOptions): Query<TFields>;
        }

        interface SelectOptions {
            view?: string;
        }

        interface Query<TFields extends object> {
            all(): Promise<Response<TFields>>;
            firstPage(): Promise<Response<TFields>>;
        }

        type Response<TFields> = ReadonlyArray<Row<TFields>>;

        interface Row<TFields> {
            id: string;
            fields: TFields;
        }

        interface Attachment {
            id: string;
            url: string;
            filename: string;
            size: number;
            type: string;
            thumbnails?: {
                small: Thumbnail;
                large: Thumbnail;
                full: Thumbnail;
            };
        }

        interface Thumbnail {
            url: string;
            width: number;
            height: number;
        }
    }
}
