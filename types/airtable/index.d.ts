// Type definitions for airtable 0.8
// Project: https://github.com/airtable/airtable.js
// Definitions by: Brandon Valosek <https://github.com/bvalosek>
//                 Max Chehab <https://github.com/maxchehab>
//                 Evan Hahn <https://github.com/EvanHahn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = Airtable;

declare global {
    class Airtable {
        constructor(options?: Airtable.AirtableOptions);
        base(appId: string): Airtable.Base;
        static base(appId: string): Airtable.Base;
        static configure(options?: Airtable.AirtableOptions): Airtable;
    }

    namespace Airtable {
        interface FieldSet {
            [key: string]:
                | undefined
                | string
                | number
                | boolean
                | Collaborator
                | ReadonlyArray<Collaborator>
                | ReadonlyArray<string>
                | ReadonlyArray<Attachment>;
        }

        interface AirtableOptions {
            apiKey?: string;
            endpointUrl?: string;
            apiVersion?: string;
            noRetryIfRateLimited?: boolean;
            requestTimeout?: number;
        }

        interface Base {
            (tableName: string): Table<{}>;
        }

        interface Table<TFields extends FieldSet> {
            select(opt?: SelectOptions): Query<TFields>;
            find(id: string): Promise<Record<TFields>>;
            create(record: TFields, opts?: { typecast: boolean }): Promise<Record<TFields>>;
            create(records: TFields[], opts?: { typecast: boolean }): Promise<Records<TFields>>;
            update(...args: any[]): Promise<any>;
            replace(...args: any[]): Promise<any>;
            destroy(...args: any[]): Promise<any>;
        }

        interface SortParameter {
            field: string;
            direction?: 'asc' | 'desc';
        }

        interface SelectOptions {
            fields?: string[];
            filterByFormula?: string;
            maxRecords?: number;
            pageSize?: number;
            sort?: SortParameter[];
            view?: string;
            cellFormat?: 'json' | 'string';
            timeZone?: string;
            userLocale?: string;
        }

        interface Query<TFields extends object> {
            all(): Promise<Records<TFields>>;
            firstPage(): Promise<Records<TFields>>;
            eachPage(pageCallback: (records: Records<TFields>, next: () => void) => void): Promise<void>;
        }

        interface Record<TFields> {
            id: string;
            fields: TFields;
        }

        type Records<TFields> = ReadonlyArray<Record<TFields>>;

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

        interface Collaborator {
            id: string;
            email: string;
            name: string;
        }
    }
}
