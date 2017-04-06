// Type definitions for maxmind v2.0
// Project: https://github.com/runk/node-maxmind
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare function open(database: string, cb: (err: Error, reader: Reader) => void): void;
export declare function open(database: string, opts: Options, cb: (err: Error, reader: Reader) => void): void;
export declare function openSync(database: string, opts?: Options): Reader;
export declare function validate(ip: string): boolean;

export declare interface Reader {
    get(ip: string): Response | null;
    readonly metadata: Metadata;
}

export declare interface Options {
    cache?: {
        max?: number;
        maxAge?: number;
    }
}

export declare interface Metadata {
    readonly binaryFormatMajorVersion: number;
    readonly binaryFormatMinorVersion: number;
    readonly buildEpoch: Date;
    readonly databaseType: string;
    readonly languages: string[];
    readonly description: Translations;
    readonly ipVersion: number;
    readonly nodeCount: number;
    readonly recordSize: number;
    readonly nodeByteSize: number;
    readonly searchTreeSize: number;
    readonly treeDepth: number;
}

export declare interface Response {
    readonly continent?: {
        readonly geoname_id: number;
        readonly names: Translations;
        readonly code: string;
    };
    readonly country?: {
        readonly geoname_id: number;
        readonly names: Translations;
        readonly iso_code: string;
    };
    readonly registered_country?: {
        readonly geoname_id: number;
        readonly names: Translations;
        readonly iso_code: string;
    };
    readonly location?: {
        readonly accuracy_radius: number;
        readonly latitude: number;
        readonly longitude: number;
        readonly metro_code?: number;
        readonly time_zone?: string;
    };
    readonly subdivisions?: {
        readonly geoname_id: number;
        readonly names: Translations;
        readonly iso_code: string;
    }[];
    readonly city?: {
        readonly geoname_id: number;
        readonly names: Translations;
    };
    readonly postal?: { code: string };
}

export declare interface Translations {
    readonly [index: string]: string;
}
