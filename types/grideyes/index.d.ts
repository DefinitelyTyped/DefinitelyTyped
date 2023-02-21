// Type definitions for non-npm package grideyes 0.1
// Project: https://github.com/StormGeo/getypes
// Definitions by: StormGeo <https://github.com/StormGeo>
//                 Ryan J. Dillon <https://github.com/ryanjdillon>
//                 Matthijs Wolzak <https://github.com/mrimrme>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * This file was automatically generated from pydantic models by running pydantic2ts.
 * Do not modify it by hand - just update the pydantic models and then re-run the script
 */
export interface Corridor {
    uid?: string;
    powerline_uid: string;
    powerline_segment_uid: string;
    geometry: {
        [k: string]: unknown;
    };
    line_length_km: number;
    area_km2: number;
    crs_epsg: number;
    created_timestamp: string;
    updated_timestamp: string;
    ignore_ingestion?: boolean;
}
export interface IngestionArea {
    uid?: string;
    corridor_uids: string[];
    area_km2: number;
    line_length_km: number;
    crs_epsg: number;
    created_timestamp: string;
    updated_timestamp: string;
    clipping_geometry?: {
        [k: string]: unknown;
    };
}
export interface Mast {
    uid?: string;
    object_type: string;
    nve_uid: string;
    nve_name: string;
    nve_network_level: number;
    nve_network_level_name: string;
    owner: string;
    owner_organization: number;
    name: string;
    crs_epsg: number;
    commissioned_year: number;
    mast_height: number;
    nve_created: string;
    nve_updated: string;
    source_updated: string;
    measurement_method: string;
    accuracy: number;
    height_measurement_method: number;
    height_accuracy: number;
    retrieval_date: string;
    export_type: string;
    geometry: {
        [k: string]: unknown;
    };
    created_timestamp: string;
    updated_timestamp: string;
}
export interface Powerline {
    uid?: string;
    object_uid: string;
    object_type: string;
    name: string;
    nve_name?: string;
    nve_id?: number;
    nve_network_level: number;
    nve_network_level_name: string;
    owner: string;
    owner_organization: number;
    voltage_kv: number;
    commissioned_year: number;
    nve_created: string;
    nve_updated: string;
    source_updated?: string;
    measurement_method?: string;
    accuracy?: string;
    retrieval_date: string;
    export_type: string;
    geometry: {
        [k: string]: unknown;
    };
    length_km: number;
    centroid: {
        [k: string]: unknown;
    };
    crs_epsg: number;
    created_timestamp: string;
    updated_timestamp: string;
    ignore_ingestion: boolean;
}
