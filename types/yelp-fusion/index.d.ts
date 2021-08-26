// Type definitions for yelp 1.1
// Project: https://www.yelp.com/fusion
// Definitions by: Koby <https://github.com/kob490>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Business {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    categories?: Category[] | null;
    rating: number;
    coordinates: Coordinates;
    transactions?: Array<string | null> | null;
    price?: string | null;
    location: Location;
    phone: string;
    display_phone: string;
    distance: number;
}

export interface Coordinates {
    readonly latitude: number;
    readonly longitude: number;
}

export interface Category {
    alias: string;
    title: string;
}

export interface Location {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: string[];
    cross_streets: string;
}

///

export interface BusinessDetails extends Business {
    is_claimed: boolean;
    photos: string[];
    hours: Hour[];
}

export interface Hour {
    open: Open[];
    hours_type: string;
    is_open_now: boolean;
}

export interface Open {
    is_overnight: boolean;
    start: string;
    end: string;
    day: number;
}

///

export interface BusinessesSearchRequestBase {
    term?: string;
    radius?: number;
    categories?: string;
    locale?: string;
    limit?: number;
    offset?: number;
    sort_by?: string;
    price?: string;
    open_now?: boolean;
    open_at?: number;
    attributes?: string;
}

export interface LocationBusinessesSearchRequest extends BusinessesSearchRequestBase {
    location: string;
}

///

export interface BusinessesSearchResponse extends BusinessesSearchResponseBase {
    businesses?: Business[];
}

export interface BusinessesDetailsSearchResponse extends BusinessesSearchResponseBase {
    businesses?: BusinessDetails[];
}

export interface BusinessesSearchResponseBase {
    total: number;
    region: Region;
}

export interface Region {
    center: Coordinates;
}

export function LocationBusinessesSearchRequest(
    locationBusinessesSearchRequest: LocationBusinessesSearchRequest,
): LocationBusinessesSearchRequest;
