// Type definitions for node-geocoder 3.24
// Project: https://github.com/nchaulet/node-geocoder#readme
// Definitions by: Krzysztof Rosinski <https://github.com/rosek86>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace node_geocoder {
    type Providers =
        'freegeoip' | 'datasciencetoolkit' |
        'locationiq' | 'mapquest' | 'mapbox' |
        'openmapquest' | 'tomtom' | 'nominatimmapquest' |
        'opencage' | 'geocodio' |
        'yandex' | 'teleport' | 'pickpoint';

    interface BaseOptions {
        provider: string;
        httpAdapter?: 'https' | 'http' | 'request' | undefined;
        timeout?: number | undefined;
        formatterPattern?: string | undefined;
        formatter?: any;
    }

    interface HereOptions {
        provider: 'here';
        appId: string;
        apiKey: string;
        appCode?: string;
        language?: string | undefined;
        politicalView?: string | undefined;
        country?: string | undefined;
        state?: string | undefined;
        production?: boolean | undefined;
    }

    interface OpenStreetMapOptions {
        provider: 'openstreetmap';
        language?: string | undefined;
        email?: string | undefined;
        apiKey?: string | undefined;
        osmServer?: string | undefined;
    }

    interface OpenDataFranceOptions {
        provider: 'opendatafrance';
        language?: string | undefined;
        email?: string | undefined;
        apiKey?: string | undefined;
    }

    interface AgolOptions {
        provider: 'agol';
        client_id?: string | undefined;
        client_secret?: string | undefined;
    }

    interface SmartyStreetsOptions {
        provider: 'smartyStreet';
        auth_id: string;
        auth_token: string;
    }

    interface GoogleOptions {
        provider: 'google';
        clientId?: string | undefined;
        apiKey?: string | undefined;
        language?: string | undefined;
        region?: string | undefined;
        excludePartialMatches?: boolean | undefined;
        channel?: string | undefined;
    }

    interface GenericOptions {
        provider: Providers;
        apiKey?: string | undefined;
        language?: string | undefined;
        host?: string | undefined;
    }

    type Options = BaseOptions & (GenericOptions | HereOptions | OpenStreetMapOptions | OpenDataFranceOptions | AgolOptions | SmartyStreetsOptions | GoogleOptions);

    interface Location {
        lat: number;
        lon: number;
    }

    interface Entry {
        formattedAddress?: string | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        extra?: {
            googlePlaceId?: string | undefined;
            confidence?: number | undefined;
        } | undefined;
        administrativeLevels?: {
            level1long?: string | undefined;
            level1short?: string | undefined;
            level2long?: string | undefined;
            level2short?: string | undefined;
        } | undefined;
        city?: string | undefined;
        streetName?: string | undefined;
        streetNumber?: string | undefined;
        country?: string | undefined;
        countryCode?: string | undefined;
        zipcode?: string | undefined;
        provider?: string | undefined;
        state?: string | undefined;
        stateCode?: string | undefined;
        county?: string | undefined;
        district?: string | undefined;
        building?: string | undefined;
    }

    interface Query {
        address?: string | undefined;
        country?: string | undefined;
        countryCode?: string | undefined;
        zipcode?: string | undefined;
        minConfidence?: number | undefined;
        limit?: number | undefined;
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
