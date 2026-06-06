export {};

// base interfaces\
interface _BusinessesSearchRequest {
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

interface _BusinessesSearchResponse {
    total: number;
    region: Region;
}

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

export interface BusinessDetails extends Business {
    is_claimed: boolean;
    photos: string[];
    hours: Hour[];
}

interface Category {
    alias: string;
    title: string;
}

interface Coordinates {
    readonly latitude: number;
    readonly longitude: number;
}

interface Location {
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

interface Hour {
    open: Open[];
    hours_type: string;
    is_open_now: boolean;
}

interface Open {
    is_overnight: boolean;
    start: string;
    end: string;
    day: number;
}

interface Region {
    center: Coordinates;
}

// exportables
export interface LatLngBusinessesSearchRequest extends _BusinessesSearchRequest {
    latitude: number;
    longitude: number;
}

export interface LocationBusinessesSearchRequest extends _BusinessesSearchRequest {
    location: string;
}

export interface BusinessesSearchResponse extends _BusinessesSearchResponse {
    businesses?: Business[];
}

export interface BusinessesDetailsSearchResponse extends _BusinessesSearchResponse {
    businesses?: BusinessDetails[];
}

export namespace YelpFusionPlus {
    function CreateBusiness(business: Business): Business;

    function CreateLocationBusinessesSearchRequest(
        locationBusinessesSearchRequest: LocationBusinessesSearchRequest,
    ): LocationBusinessesSearchRequest;
}
