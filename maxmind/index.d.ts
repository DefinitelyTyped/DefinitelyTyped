// Type definitions for maxmind
// Project: https://github.com/runk/node-maxmind
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare function open(database: string, opts?: IOptions): IReader;
export declare function validate(ip: string): boolean;

export declare interface IReader {
    get(ip: string): IResponse | null;
    readonly metadata: IMetadata;
}

export declare interface IOptions {
    cache?: {
        max?: number;
        maxAge?: number;
    }
}

export declare interface IMetadata {
    readonly binaryFormatMajorVersion: number;
    readonly binaryFormatMinorVersion: number;
    readonly buildEpoch: Date;
    readonly databaseType: string;
    readonly languages: string[];
    readonly description: ITranslations;
    readonly ipVersion: number;
    readonly nodeCount: number;
    readonly recordSize: number;
    readonly nodeByteSize: number;
    readonly searchTreeSize: number;
    readonly treeDepth: number;
}

export declare interface IResponse {
    readonly continent?: {
        readonly geoname_id: number;
        readonly names: ITranslations;
        readonly code: string;
    };
    readonly country?: {
        readonly geoname_id: number;
        readonly names: ITranslations;
        readonly iso_code: string;
    };
    readonly registered_country?: {
        readonly geoname_id: number;
        readonly names: ITranslations;
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
        readonly names: ITranslations;
        readonly iso_code: string;
    }[];
    readonly city?: {
        readonly geoname_id: number;
        readonly names: ITranslations;
    };
    readonly postal?: { code: string };
}

export declare interface ITranslations {
    readonly [index: string]: string;
}
