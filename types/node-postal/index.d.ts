// Source: https://github.com/openvenues/libpostal#parser-labels
export type PostalLabels =
    | "category"
    | "city_district"
    | "city"
    | "country_region"
    | "country"
    | "entrance"
    | "house_number"
    | "house"
    | "island"
    | "level"
    | "near"
    | "po_box"
    | "postcode"
    | "road"
    | "staircase"
    | "state_district"
    | "state"
    | "suburb"
    | "unit"
    | "world_region";

export interface PostalResult {
    component: PostalLabels;
    value: string;
}

declare function expand_address(address: string): string[];

declare function parse_address(address: string): PostalResult[];

export const expand: {
    expand_address: typeof expand_address;
};

export const parser: {
    parse_address: typeof parse_address;
};

export {};
