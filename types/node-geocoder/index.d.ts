// Type definitions for node-geocoder 3.24
// Project: https://github.com/nchaulet/node-geocoder#readme
// Definitions by: Krzysztof Rosinski <https://github.com/rosek86>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace node_geocoder {
    type Providers =
        'freegeoip' | 'datasciencetoolkit' |
        'locationiq' | 'mapquest' | 'openmapquest' |
        'tomtom' | 'nominatimmapquest' |
        'opencage' | 'geocodio' |
        'yandex' | 'teleport' | 'pickpoint';

    interface BaseOptions {
        provider: string;
        httpAdapter?: 'https' | 'http' | 'request';
        timeout?: number;
        formatterPattern?: string;
        formatter?: any;
    }

    interface HereOptions {
        provider: 'here';
        appId: string;
        appCode: string;
        language?: string;
        politicalView?: string;
        country?: string;
        state?: string;
        production?: boolean;
    }

    interface OpenStreetMapOptions {
        provider: 'openstreetmap';
        language?: string;
        email?: string;
        apiKey?: string;
        osmServer?: string;
    }

    interface OpenDataFranceOptions {
        provider: 'opendatafrance';
        language?: string;
        email?: string;
        apiKey?: string;
    }

    interface AgolOptions {
        provider: 'agol';
        client_id?: string;
        client_secret?: string;
    }

    interface SmartyStreetsOptions {
        provider: 'smartyStreet';
        auth_id: string;
        auth_token: string;
    }

    interface GoogleOptions {
        provider: 'google';
        clientId?: string;
        apiKey?: string;
        language?: string;
        region?: string;
        excludePartialMatches?: boolean;
        channel?: string;
    }

    interface GenericOptions {
        provider: Providers;
        apiKey?: string;
        language?: string;
        host?: string;
    }

    type Options = BaseOptions & (GenericOptions | HereOptions | OpenStreetMapOptions | OpenDataFranceOptions | AgolOptions | SmartyStreetsOptions | GoogleOptions);

    interface Location {
        lat: number;
        lon: number;
    }

    interface Entry {
        formattedAddress?: string;
        latitude?: number;
        longitude?: number;
        extra?: {
            googlePlaceId?: string;
            confidence?: number;
        };
        administrativeLevels?: {
            level1long?: string;
            level1short?: string;
            level2long?: string;
            level2short?: string;
        };
        city?: string;
        streetName?: string;
        streetNumber?: string;
        country?: string;
        countryCode?: string;
        zipcode?: string;
        provider?: string;
        state?: string;
        stateCode?: string;
        county?: string;
        district?: string;
        building?: string;
    }

    interface Query {
        address?: string;
        country?: string;
        countryCode?: string;
        zipcode?: string;
        minConfidence?: number;
        limit?: number;
    }

    interface BatchResult {
        error: any;
        value: Entry[];
    }

    class Geocoder {
        geocode(query: string | Query, cb?: (err: any, data: Entry[]) => void): Promise<Entry[]>;
        batchGeocode(queries: string[] | Query[], cb?: (err: any, data: BatchResult[]) => void): Promise<BatchResult[]>;
        reverse(loc: Location, cb?: (err: any, data: Entry[]) => void): Promise<Entry[]>;
    }
}

declare function node_geocoder(options: node_geocoder.Options): node_geocoder.Geocoder;

export = node_geocoder;
