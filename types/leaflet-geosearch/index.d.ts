// Type definitions for leaflet-geosearch 2.7
// Project: https://github.com/smeijer/leaflet-geosearch#readme
// Definitions by: Dmytro Borysovskyi <https://github.com/dimabory>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { MarkerOptions, Control } from 'leaflet';

type BoundsTuple = [[number, number], [number, number]];
type PointTuple = [number, number];

interface LatLngLiteral {
    lat: number;
    lng: number;
}

interface SearchResult<Raw> {
    x: string;
    y: string;
    label: string;
    bounds: BoundsTuple;
    raw: Raw;
}

interface SearchQuery {
    query: string;
}

export class BaseProvider<ProviderOptions = {}, Raw = {}> {
    constructor(options?: ProviderOptions);

    search(options: SearchQuery): Promise<Array<SearchResult<Raw>>>;
}

/**
 * OpenStreetMap
 */

interface OpenStreetMapProviderResultRaw {
    boundingbox: [string, string, string, string];
    class: string;
    display_name: string;
    icon: string;
    importance: number;
    lat: string;
    licence: string;
    lon: string;
    osm_id: number;
    osm_type: string;
    place_id: number;
    type: string;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type OpenStreetMapProviderReverseResult = Omit<SearchResult<OpenStreetMapProviderResultRaw>, 'raw'> & {
    raw: {
        address: {
            house_number: string;
            road: string;
            town: string;
            city: string;
            county: string;
            state_district: string;
            state: string;
            postcode: string;
            country: string;
            country_code: string;
        };
    };
};

interface OpenStreetMapProviderOptionsOutputFormat {
    json_callback?: string;
}

interface OpenStreetMapProviderOptionsOutputDetails {
    addressdetails?: 0 | 1;
    extratags?: 0 | 1;
    namedetails?: 0 | 1;
}

interface OpenStreetMapProviderOptionsResultLanguage {
    'accept-language'?: string;
}

interface OpenStreetMapProviderOptionsResultLimitation {
    countrycodes?: string;
    exclude_place_ids?: string;
    limit?: number;
    viewbox?: string;
    bounded?: 0 | 1;
    zoom?: number;
}

interface OpenStreetMapProviderOptionsPolygonOutput {
    polygon_geojson?: number;
    polygon_kml?: number;
    polygon_svg?: number;
    polygon_text?: number;
    polygon_threshold?: string;
}

interface OpenStreetMapProviderOptionsOther {
    email?: string;
    dedupe?: 0 | 1;
    debug?: 0 | 1;
}

type OpenStreetMapProviderOptions = OpenStreetMapProviderOptionsOutputFormat &
    OpenStreetMapProviderOptionsOutputDetails &
    OpenStreetMapProviderOptionsResultLanguage &
    OpenStreetMapProviderOptionsResultLimitation &
    OpenStreetMapProviderOptionsPolygonOutput &
    OpenStreetMapProviderOptionsOther;

interface OpenStreetMapProviderReverseSearch {
    data: { raw: { osm_id?: number; osm_type?: 'node' | 'way' | 'relation' } };
}

export class OpenStreetMapProvider extends BaseProvider<
    OpenStreetMapProviderOptions,
    OpenStreetMapProviderResultRaw | OpenStreetMapProviderReverseResult
> {
    /** https://nominatim.org/release-docs/develop/api/Search/ */
    search(options: SearchQuery): Promise<Array<SearchResult<OpenStreetMapProviderResultRaw>>>;
    /** https://nominatim.org/release-docs/develop/api/Reverse/ */
    search(options: OpenStreetMapProviderReverseSearch): Promise<OpenStreetMapProviderReverseResult[]>;
}

/**
 * Bing Maps
 */

interface BingProviderCultureOptions {
    culture?: string;
    c?: string;
}

interface BingProviderUserContextOptions {
    userMapView?: string;
    umv?: string;
    userLocation?: string;
    ul?: string;
    userIp?: string;
    userRegion?: string;
    ur?: string;
}

export type BingProviderOptions = {
    key: string;
    adminDistrict?: string;
    includeNeighborhood?: -1 | 0 | 1;
    inclnb?: -1 | 0 | 1;
    include?: string;
    incl?: string;
    maxResults?: number;
} & BingProviderCultureOptions &
    BingProviderUserContextOptions;

export interface BingProviderResultPoint {
    type: string;
    coordinates: PointTuple;
}

export interface BingProviderResultRaw {
    __type: string;
    bbox: [number, number, number, number];
    name: string;
    point: BingProviderResultPoint;
    address: {
        adminDistrict: string;
        adminDistrict2: string;
        countryRegion: string;
        formattedAddress: string;
        locality: string;
        neighborhood: string;
        landmark: string;
    };
    confidence: string;
    entityType: string;
    geocodePoints: Array<BingProviderResultPoint & { calculationMethod: string; usageTypes: string[] }>;
    matchCodes: string[];
}

/** https://docs.microsoft.com/en-us/bingmaps/rest-services/locations/find-a-location-by-query */
export class BingProvider<Options = BingProviderOptions> extends BaseProvider<Options, BingProviderResultRaw> {
    constructor(options: Options);
}

/** ArcGIS Online Geocoding Service */
export class EsriProvider extends BaseProvider<BingProviderOptions> {}

/**
 *  Google Maps Service
 */

export interface GoogleProviderOptions {
    key: string;
    language?: string;
    bounds?: string;
    region?: string;
}

interface GoogleProviderResultAddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

export interface GoogleProviderResultRaw {
    address_components: GoogleProviderResultAddressComponent[];
    formatted_address: string;
    geometry: {
        location: LatLngLiteral;
        location_type: string;
        viewport: {
            northeast: LatLngLiteral;
            southwest: LatLngLiteral;
        };
    };
    place_id: string;
    types: string[];
}

/** https://developers.google.com/maps/documentation/geocoding/intro#geocoding */
export class GoogleProvider<Options = GoogleProviderOptions> extends BaseProvider<Options, GoogleProviderResultRaw> {
    constructor(options: Options);
}

/**
 * GeoSearchControl
 */

interface GeoSearchControlOptions {
    provider: BaseProvider;
    /** @default 'topleft' */
    position?: string;
    /** @default 'button' */
    style?: 'button' | 'bar';
    /** @default true */
    showMarker?: boolean;
    /** @default false */
    showPopup?: boolean;

    /** @default ({ result }) => `${result.label}` */
    popupFormat?({ query, result }: { query: string; result: SearchResult<object> }): string;

    /**
     *  @default {
     *      icon: new L.Icon.Default(),
     *      draggable: false,
     *  }
     */
    marker?: MarkerOptions;
    /** @default false */
    maxMarkers?: number;
    /** @default false */
    retainZoomLevel?: boolean;
    /** @default true */
    animateZoom?: boolean;
    /** @default 'Enter address' */
    searchLabel?: string;
    /** @default 'Sorry; that address could not be found.' */
    notFoundMessage?: string;
    /** @default 3000 */
    messageHideDelay?: number;
    /** @default 18 */
    zoomLevel?: number;
    /**
     * @default {
     *      container: 'leaflet-bar leaflet-control leaflet-control-geosearch';
     *      button: 'leaflet-bar-part leaflet-bar-part-single';
     *      resetButton: 'reset';
     *      msgbox: 'leaflet-bar message';
     *      form: '';
     *      input: '';
     * }
     */
    classNames?: {
        container?: string;
        button?: string;
        resetButton?: string;
        msgbox?: string;
        form?: string;
        input?: string;
    };
    /** @default true */
    autoComplete?: boolean;
    /** @default 250 */
    autoCompleteDelay?: number;
    /** @default false */
    autoClose?: boolean;
    /** @default false */
    keepResult?: boolean;
}

export class GeoSearchControl extends Control {
    constructor(options: GeoSearchControlOptions);
}

export {};
