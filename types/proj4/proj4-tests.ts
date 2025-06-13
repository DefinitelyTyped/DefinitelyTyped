import proj4 = require("proj4");

///////////////////////////////////////////
// Tests data initialisation
///////////////////////////////////////////
const epsg = {
    4269:
        "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees",
    4326: "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees",
};
const firstProjection = epsg[4269];
const secondProjection = epsg[4326];

const firstProjectionObj = {
    "$schema": "https://proj.org/schemas/v0.7/projjson.schema.json",
    "type": "GeographicCRS",
    "name": "NAD83",
    "datum": {
        "type": "GeodeticReferenceFrame",
        "name": "North American Datum 1983",
        "ellipsoid": { "name": "GRS 1980", "semi_major_axis": 6378137, "inverse_flattening": 298.257222101 },
    },
    "coordinate_system": {
        "subtype": "ellipsoidal",
        "axis": [{ "name": "Geodetic latitude", "abbreviation": "Lat", "direction": "north", "unit": "degree" }, {
            "name": "Geodetic longitude",
            "abbreviation": "Lon",
            "direction": "east",
            "unit": "degree",
        }],
    },
    "scope": "Geodesy.",
    "area":
        "North America - onshore and offshore: Canada - Alberta; British Columbia; Manitoba; New Brunswick; Newfoundland and Labrador; Northwest Territories; Nova Scotia; Nunavut; Ontario; Prince Edward Island; Quebec; Saskatchewan; Yukon. Puerto Rico. United States (USA) - Alabama; Alaska; Arizona; Arkansas; California; Colorado; Connecticut; Delaware; Florida; Georgia; Hawaii; Idaho; Illinois; Indiana; Iowa; Kansas; Kentucky; Louisiana; Maine; Maryland; Massachusetts; Michigan; Minnesota; Mississippi; Missouri; Montana; Nebraska; Nevada; New Hampshire; New Jersey; New Mexico; New York; North Carolina; North Dakota; Ohio; Oklahoma; Oregon; Pennsylvania; Rhode Island; South Carolina; South Dakota; Tennessee; Texas; Utah; Vermont; Virginia; Washington; West Virginia; Wisconsin; Wyoming. US Virgin Islands. British Virgin Islands.",
    "bbox": { "south_latitude": 14.92, "west_longitude": 167.65, "north_latitude": 86.45, "east_longitude": -40.73 },
    "id": { "authority": "EPSG", "code": 4269 },
};

const pointArr = [-71, 41];
const pointObj = { x: 2, y: 5 };

///////////////////////////////////////////
// Tests Measurement
///////////////////////////////////////////
proj4(firstProjection, secondProjection, pointArr);
proj4(firstProjection, pointArr);

// $ExpectType number[]
proj4(firstProjection, secondProjection, pointArr);
// $ExpectType { x: number; y: number; }
proj4(firstProjection, secondProjection, pointObj);

// $ExpectType number[]
proj4(firstProjection, pointArr);
// $ExpectType { x: number; y: number; }
proj4(firstProjection, pointObj);

// $ExpectType Converter
proj4(firstProjection, secondProjection);
// $ExpectType Converter
proj4(firstProjection);
// $ExpectType Converter
proj4(firstProjectionObj);

// $ExpectType number[]
proj4(firstProjection, secondProjection).forward(pointArr);
// $ExpectType { x: number; y: number; }
proj4(firstProjection, secondProjection).forward(pointObj);
// $ExpectType number[]
proj4(firstProjection, secondProjection).inverse(pointArr);
// $ExpectType { x: number; y: number; }
proj4(firstProjection, secondProjection).inverse(pointObj);

///////////////////////////////////
// Named Projections
///////////////////////////////////

// $ExpectType ProjectionDefinition
proj4.defs("WGS84");
proj4.defs("WGS84", secondProjection);
// $ExpectType undefined[]
proj4.defs([["EPSG:4326", secondProjection], ["EPSG:4269", firstProjection]]);
proj4.defs("urn:x-ogc:def:crs:EPSG:4326", proj4.defs("EPSG:4326"));

///////////////////////////////////
// Utils
///////////////////////////////////
// WGS84
proj4.WGS84;

// Proj
proj4.Proj("WGS84");

// toPoint
proj4.toPoint([1, 2]);
proj4.toPoint([1, 2, 3]);
proj4.toPoint([1, 2, 3, 4]);

// Point
// WARNING: Deprecated in v3
proj4.Point([1, 2, 3, 4]);
