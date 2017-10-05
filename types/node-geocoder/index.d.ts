// Type definitions for node-geocoder 3.19
// Project: https://github.com/nchaulet/node-geocoder#readme
// Definitions by: Krzysztof Rosinski <https://github.com/rosek86>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace node_geocoder {
    type Providers =
        'google' | 'here' | 'freegeoip' |
        'datasciencetoolkit' | 'openstreetmap' |
        'locationiq' | 'mapquest' | 'openmapquest' |
        'agol' | 'tomtom' | 'nominatimmapquest' |
        'opencage' | 'smartyStreet' | 'geocodio' |
        'yandex' | 'teleport' | 'opendatafrance' |
        'pickpoint';

    interface Options {
        provider: Providers;
        httpAdapter?: 'https' | 'http' | 'request';
        clientId?: string;
        apiKey?: string;
        language?: string;
        region?: string;
        appId?: string;
        appCode?: string;
        politicalView?: string;
        country?: string;
        state?: string;
        host?: string;
        email?: string;
        client_id?: string;
        client_secret?: string;
        auth_id?: string;
        auth_token?: string;
        timeout?: number;
        formatterPattern?: string;
        formatter?: any;
    }

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
