import { Corridor, Powerline } from 'grideyes';

const corridor: Corridor = {
    powerline_uid: 'abc-123',
    powerline_segment_uid: 'abc-123-uid',
    geometry: {
        lat: '',
    },
    line_length_km: 12,
    area_km2: 23,
    crs_epsg: 92,
    created_timestamp: '',
    updated_timestamp: '',
};
corridor; // $ExpectType Corridor
corridor.powerline_uid; // $ExpectType string

const powerline: Powerline = {
    object_uid: 'string',
    object_type: 'string',
    name: 'string',
    nve_network_level: 2,
    nve_network_level_name: 'string',
    owner: 'string',
    owner_organization: 1,
    voltage_kv: 47,
    commissioned_year: 1999,
    nve_created: 'string',
    nve_updated: 'string',
    retrieval_date: 'string',
    export_type: 'string',
    geometry: {
        lng: '12.23',
    },
    length_km: 1.5,
    centroid: {
        lng: '12.23',
    },
    crs_epsg: 1113,
    created_timestamp: 'string',
    updated_timestamp: 'string',
    ignore_ingestion: true,
};

powerline; // $ExpectType Powerline
powerline.object_uid; // $ExpectType string
