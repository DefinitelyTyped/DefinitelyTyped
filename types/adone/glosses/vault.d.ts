declare namespace adone {
    namespace vault {
        namespace I {
            interface VaultConstructorOptions {
                // TODO: leveldb options
                location: string;
                ValuableClass?: object;
            }

            interface VaultClearOptions {
                hosts?: boolean;
                tags?: boolean;
            }

            interface VaultToJSONOptions {
                valuable?: ValuableToJSONOptions;
                includeStats?: boolean;
            }

            interface ValuableToJSONOptions {
                includeId?: boolean;
                includeEntryId?: boolean;
                entriesAsArray?: boolean;
                tags?: "normal" | "onlyName" | "onlyId" | "none";
            }

            interface VaultJSONStats {
                location: string;
                created: number;
                updated: number;
            }
        }

        class Vault<T extends Valuable = Valuable> {
            constructor(options: I.VaultConstructorOptions);

            open(): Promise<void>;

            close(): Promise<void>;

            location(): string;

            create(name: string, tags?: string[]): Promise<T>;

            get(name: string): Promise<T>;

            release(name: string): void;

            delete(name: string): Promise<void>;

            clear(options?: I.VaultClearOptions): Promise<number>;

            has(name: string): boolean;

            keys(): string[];

            values(): Promise<any[]>;

            entries(): Promise<{ [key: string]: any }>;

            toJSON(options: I.VaultToJSONOptions & { valuable: object, includeStats: true }): Promise<{
                valuables: object[],
                stats: I.VaultJSONStats
            }>;
            toJSON(options: I.VaultToJSONOptions & { valuable: object }): Promise<{
                valuables: object[]
            }>;
            toJSON(options: I.VaultToJSONOptions & { includeStats: true }): Promise<{
                stats: I.VaultJSONStats
            }>;
            toJSON(): {};

            addTag(tag: string, vid?: number): Promise<number| null>;

            deleteTag(tag: string): Promise<boolean>;

            tags(ids?: number[], opts?: { privateProps?: boolean }): object[];

            tagNames(ids?: number[]): string[];

            getNotes(): string;

            setNotes(notes: string): Promise<void>;
        }

        namespace I {
            interface ValueableEntriesOptions {
                entriesAsArray?: boolean;
                includeEntryId?: boolean;
            }

            interface ValuableEntry {
                name: string;
                value: any;
                type: string;
            }

            interface ValuableClearOptions {
                includeNotes?: boolean;
                includeTags?: boolean;
            }

            interface ValuableJSON {
                name: string;
                notes: string;
                entries: I.ValuableEntry[];
            }
        }

        class Valuable {
            constructor(vaule: Vault, id: number, metaData: object, tags: object[]);

            name(): string;

            internalId(): number;

            getNotes(): string;

            setNotes(notes: string): Promise<void>;

            set(name: string, value: any, type?: string): Promise<number>;

            setMulti(entries: object): Promise<void>;

            get(name: string): Promise<any>;

            type(name: string): any;

            has(name: string): boolean;

            keys(): string[];

            entries(opts: I.ValueableEntriesOptions & { entriesAsArray: true }): Promise<I.ValuableEntry[]>;
            entries(opts: I.ValueableEntriesOptions & { entriesAsArray: true, includeEntryId: true }): Promise<Array<I.ValuableEntry & { id: number }>>;
            entries(opts?: I.ValueableEntriesOptions): Promise<object>;

            delete(name: string): Promise<number>;

            clear(opts?: I.ValuableClearOptions): Promise<number>;

            toJSON(opts?: I.ValuableToJSONOptions): object; // TODO

            fromJSON(json: object): Promise<number>;

            addTag(tag: string): Promise<void>;

            hasTag(tag: string): boolean;

            deleteTag(tag: string): Promise<boolean>;

            deleteAllTags(): Promise<void>;

            tags(): object[];
        }

        function open(options?: I.VaultConstructorOptions): Promise<Vault>;

        namespace I {
            interface SlicedValuable {
                name(): string;

                internalId(): number;

                getNotes(): string;

                setNotes(notes: string): Promise<number>;

                set(name: string, value: any, type?: string): Promise<number>;

                setMulti(entries: object): Promise<void>;

                get(name: string): Promise<any>;

                type(name: string): any;

                has(name: string): boolean;

                keys(): string[];

                entries(opts: I.ValueableEntriesOptions & { entriesAsArray: true }): Promise<I.ValuableEntry[]>;
                entries(opts: I.ValueableEntriesOptions & { entriesAsArray: true, includeEntryId: true }): Promise<Array<I.ValuableEntry & { id: number }>>;
                entries(opts?: I.ValueableEntriesOptions): Promise<object>;

                delete(name: string): Promise<number>;

                toJSON(opts?: I.ValuableToJSONOptions): object;

                fromJSON(json: object): Promise<number>;

                addTag(tag: string): Promise<void>;

                hasTag(tag: string): boolean;

                deleteTag(tag: string): Promise<boolean>;

                deleteAllTags(): Promise<void>;

                tags(): object[];
            }
        }

        function slice(valuable: Valuable, prefix: string | string[], separator?: string): I.SlicedValuable;
    }
}
