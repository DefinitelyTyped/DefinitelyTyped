// Annex A Informative Examples

let referencing: CoverageJSON.ReferenceSystemConnection[] = [
    {
        coordinates: ["x", "y"],
        system: {
            type: "GeographicCRS",
            id: "http://www.opengis.net/def/crs/OGC/1.3/CRS84",
        },
    },
    {
        coordinates: ["z"],
        system: {
            type: "VerticalCRS",
            cs: {
                csAxes: [
                    {
                        name: {
                            en: "Pressure",
                        },
                        direction: "down",
                        unit: {
                            symbol: "Pa",
                        },
                    },
                ],
            },
        },
    },
    {
        coordinates: ["t"],
        system: {
            type: "TemporalRS",
            calendar: "Gregorian",
        },
    },
];
// A.1 Vertical Profile Coverage
const verticalProfileCoverage: CoverageJSON.Coverage = {
    type: "Coverage",
    domain: {
        type: "Domain",
        domainType: "VerticalProfile",
        axes: {
            x: { values: [-10.1] },
            y: { values: [-40.2] },
            z: {
                values: [
                    5.4562,
                    8.9282,
                    14.8802,
                    20.832,
                    26.7836,
                    32.735,
                    38.6863,
                    44.6374,
                    50.5883,
                    56.5391,
                    62.4897,
                    68.4401,
                    74.3903,
                    80.3404,
                    86.2902,
                    92.24,
                    98.1895,
                    104.1389,
                    110.0881,
                    116.0371,
                    121.9859,
                ],
            },
            t: { values: ["2013-01-13T11:12:20Z"] },
        },
        referencing: [
            {
                coordinates: ["x", "y"],
                system: {
                    type: "GeographicCRS",
                    id: "http://www.opengis.net/def/crs/OGC/1.3/CRS84",
                },
            },
            {
                coordinates: ["z"],
                system: {
                    type: "VerticalCRS",
                    cs: {
                        csAxes: [
                            {
                                name: {
                                    en: "Pressure",
                                },
                                direction: "down",
                                unit: {
                                    symbol: "Pa",
                                },
                            },
                        ],
                    },
                },
            },
            {
                coordinates: ["t"],
                system: {
                    type: "TemporalRS",
                    calendar: "Gregorian",
                },
            },
        ],
    },
    parameters: {
        PSAL: {
            type: "Parameter",
            description: {
                en: "The measured salinity, in practical salinity units (psu) of thesea water ",
            },
            unit: {
                symbol: "psu",
            },
            observedProperty: {
                id: "http://vocab.nerc.ac.uk/standard_name/sea_water_salinity/",
                label: {
                    en: "Sea Water Salinity",
                },
            },
        },
        POTM: {
            type: "Parameter",
            description: {
                en: "The potential temperature, in degrees celcius, of the sea water",
            },
            unit: {
                symbol: "°C",
            },
            observedProperty: {
                id: "http://vocab.nerc.ac.uk/standard_name/sea_water_potential_temperature/",
                label: {
                    en: "Sea Water Potential Temperature",
                },
            },
        },
    },
    ranges: {
        PSAL: {
            type: "NdArray",
            dataType: "float",
            shape: [21],
            axisNames: ["z"],
            values: [
                43.9599,
                43.9599,
                43.964,
                43.964,
                43.9679,
                43.9879,
                44.004,
                44.012,
                44.012,
                44.0159,
                44.032,
                44.032,
                44.048,
                44.0559,
                44.0559,
                44.0579,
                44.068,
                44.074,
                44.0779,
                44.088,
                44.094,
            ],
        },
        POTM: {
            type: "NdArray",
            dataType: "float",
            shape: [21],
            axisNames: ["z"],
            values: [
                23.8,
                23.7,
                23.5,
                23.4,
                23.2,
                22.4,
                21.8,
                21.7,
                21.5,
                21.3,
                21.0,
                20.6,
                20.1,
                19.7,
                19.4,
                19.1,
                18.9,
                18.8,
                18.7,
                18.6,
                18.5,
            ],
        },
    },
};

// A.2 Coverage Collection
const coverageCollection: CoverageJSON.CoverageCollection = {
    type: "CoverageCollection",
    domainType: "VerticalProfile",
    parameters: {
        PSAL: {
            type: "Parameter",
            description: {
                en: "The measured salinity, in practical salinity units (psu) of the  sea water",
            },
            unit: {
                symbol: "psu",
            },
            observedProperty: {
                id: "http://vocab.nerc.ac.uk/standard_name/sea_water_salinity/",
                label: {
                    en: "Sea Water Salinity",
                },
            },
        },
    },
    referencing: [
        {
            coordinates: ["x", "y"],
            system: {
                type: "GeographicCRS",
                id: "http://www.opengis.net/def/crs/OGC/1.3/CRS84",
            },
        },
        {
            coordinates: ["z"],
            system: {
                type: "VerticalCRS",
                cs: {
                    csAxes: [
                        {
                            name: {
                                en: "Pressure",
                            },
                            direction: "down",
                            unit: {
                                symbol: "Pa",
                            },
                        },
                    ],
                },
            },
        },
        {
            coordinates: ["t"],
            system: {
                type: "TemporalRS",
                calendar: "Gregorian",
            },
        },
    ],
    coverages: [
        {
            type: "Coverage",
            domain: {
                type: "Domain",
                domainType: "VerticalProfile",
                axes: {
                    x: { values: [-10.1] },
                    y: { values: [-40.2] },
                    z: { values: [5, 8, 14] },
                    t: { values: ["2013-01-13T11:12:20Z"] },
                },
            },
            ranges: {
                PSAL: {
                    type: "NdArray",
                    dataType: "float",
                    shape: [3],
                    axisNames: ["z"],
                    values: [43.7, 43.8, 43.9],
                },
            },
        },
        {
            type: "Coverage",
            domain: {
                type: "Domain",
                domainType: "VerticalProfile",
                axes: {
                    x: { values: [-11.1] },
                    y: { values: [-45.2] },
                    z: { values: [4, 7, 9] },
                    t: { values: ["2013-01-13T12:12:20Z"] },
                },
            },
            ranges: {
                PSAL: {
                    type: "NdArray",
                    dataType: "float",
                    shape: [3],
                    axisNames: ["z"],
                    values: [42.7, 41.8, 40.9],
                },
            },
        },
    ],
};

// Continous-Data Parameter
let continousDataParameter: CoverageJSON.Parameter = {
    type: "Parameter",
    description: {
        en: "The sea surface temperature in degrees Celsius.",
    },
    observedProperty: {
        id: "http://vocab.nerc.ac.uk/standard_name/sea_surface_temperature/",
        label: {
            en: "Sea Surface Temperature",
        },
        description: {
            en: "The temperature of sea water near the surface (including the part under sea-ice, if any), and not the skin temperature.",
        },
    },
    unit: {
        label: {
            en: "Degree Celsius",
        },
        symbol: {
            value: "Cel",
            type: "http://www.opengis.net/def/uom/UCUM/",
        },
    },
};

// Categorical-Data Parameter
let categoricalDataParameter: CoverageJSON.Parameter = {
    type: "Parameter",
    description: {
        en: "The land cover category.",
    },
    observedProperty: {
        id: "http://example.com/land_cover",
        label: {
            en: "Land Cover",
        },
        description: {
            en: "longer description...",
        },
        categories: [
            {
                id: "http://example.com/land_cover/categories/grass",
                label: {
                    en: "Grass",
                },
                description: {
                    en: "Very green grass.",
                },
            },
            {
                id: "http://example.com/land_cover/categories/forest",
                label: {
                    en: "Forest",
                },
            },
        ],
    },
    categoryEncoding: {
        "http://example.com/land_cover/categories/grass": 1,
        "http://example.com/land_cover/categories/forest": [2, 3],
    },
};

// vector Quantity Parameter Group

let vectorQuantityParameterGroup: CoverageJSON.ParameterGroup = {
    type: "ParameterGroup",
    observedProperty: {
        label: {
            en: "Wind velocity",
        },
    },
    // where "WIND_SPEED" and "WIND_DIR" reference existing parameters in a CoverageJSON coverage or collection object by their short identifiers
    members: ["WIND_SPEED", "WIND_DIR"],
};

// group decribing uncertainty of   a parameter
let uncertaintyParameterGroup: CoverageJSON.ParameterGroup = {
    type: "ParameterGroup",
    label: {
        en: "Daily sea surface temperature with uncertainty information",
    },
    observedProperty: {
        id: "http://vocab.nerc.ac.uk/standard_name/sea_surface_temperature/",
        label: {
            en: "Sea surface temperature",
        },
    },
    members: ["SST_mean", "SST_stddev"],
};

// SST mean parameter
let sstMeanParameter: CoverageJSON.Parameter = {
    type: "Parameter",
    observedProperty: {
        label: {
            en: "Sea surface temperature daily mean",
        },
        // ! Standard does not mention the presence of additional and optional keys at all
        // statisticalMeasure: "http://www.uncertml.org/statistics/mean",
        // statisticalPeriod: "P1D",
        // narrowerThan: [      "http://vocab.nerc.ac.uk/standard_name/sea_surface_temperature/",    ],
    },
    unit: {
        label: {
            en: "Kelvin",
        },
        symbol: {
            value: "K",
            type: "http://www.opengis.net/def/uom/UCUM/",
        },
    },
};

// 2D Geographic CRS (long-lat)
let geographicCRS: CoverageJSON.SpatialReferenceSystem = {
    id: "http://www.opengis.net/def/crs/EPSG/0/4979",
    type: "GeographicCRS",
};

// Projected CRS
let projectedCRS: CoverageJSON.SpatialReferenceSystem = {
    id: "http://www.opengis.net/def/crs/EPSG/0/32737",
    type: "ProjectedCRS",
};

// Vertical CRS
let verticalCRS: CoverageJSON.SpatialReferenceSystem = {
    type: "VerticalCRS",
    id: "http://www.opengis.net/def/crs/EPSG/0/5703",
};

let temporalCRS: CoverageJSON.TemporalReferenceSystem = {
    type: "TemporalRS",
    calendar: "Gregorian",
};

// Geographic Identifier Reference System
let geographicIdentifierReferenceSystem: CoverageJSON.IdentifierBasedReferenceSystem = {
    type: "IdentifierRS",
    id: "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",
    label: { en: "ISO 3166-1 alpha-2 codes" },
    targetConcept: {
        id: "http://dbpedia.org/resource/Country",
        label: { en: "Country", de: "Land" },
    },
    identifiers: {
        de: {
            id: "http://dbpedia.org/resource/Germany",
            label: { de: "Deutschland", en: "Germany" },
        },
        gb: {
            id: "http://dbpedia.org/resource/United_Kingdom",
            label: { de: "Vereinigtes Königreich", en: "United Kingdom" },
        },
    },
};

// Grid domain
let gridDomain: CoverageJSON.Grid = {
    type: "Domain",
    domainType: "Grid",
    axes: {
        x: { values: [1, 2, 3] },
        y: { values: [20, 21] },
        z: { values: [1] },
        t: { values: ["2008-01-01T04:00:00Z"] },
    },
    referencing: [
        {
            coordinates: ["t"],
            system: {
                type: "TemporalRS",
                calendar: "Gregorian",
            },
        },
        {
            coordinates: ["y", "x", "z"],
            system: {
                type: "GeographicCRS",
                id: "http://www.opengis.net/def/crs/EPSG/0/4979",
            },
        },
    ],
};

// Point domain
let pointDomain: CoverageJSON.PointSeries = {
    type: "Domain",
    domainType: "PointSeries",
    axes: {
        x: { values: [1] },
        y: { values: [20] },
        z: { values: [1] },
        t: { values: ["2008-01-01T04:00:00Z", "2008-01-01T05:00:00Z"] },
    },
    referencing,
};

// Trajectory domain
let trajectoryDomain: CoverageJSON.Trajectory = {
    type: "Domain",
    domainType: "Trajectory",
    axes: {
        composite: {
            dataType: "tuple",
            coordinates: ["t", "x", "y"],
            values: [
                ["2008-01-01T04:00:00Z", 1, 20],
                ["2008-01-01T04:30:00Z", 2, 21],
            ],
        },
    },
    referencing: [
        {
            coordinates: ["t"],
            system: {
                type: "TemporalRS",
                calendar: "Gregorian",
            },
        },
        {
            coordinates: ["x", "y"],
            system: {
                type: "GeographicCRS",
                id: "http://www.opengis.net/def/crs/OGC/1.3/CRS84",
            },
        },
    ],
};

// NdArray
let ndArray: CoverageJSON.NdArray = {
    type: "NdArray",
    dataType: "float",
    shape: [4, 2],
    axisNames: ["y", "x"],
    values: [12.3, 12.5, 11.5, 23.1, null, null, 10.1, 9.1],
};

// Tiled NdArray
let tiledNdArray: CoverageJSON.TiledNdArray = {
    type: "TiledNdArray",
    dataType: "integer",
    axisNames: ["t", "y", "x"],
    shape: [2, 5, 10],
    tileSets: [
        {
            tileShape: [null, null, null],
            urlTemplate: "http://example.com/a/all.covjson",
        },
        {
            tileShape: [1, null, null],
            urlTemplate: "http://example.com/b/{t}.covjson",
        },
        {
            tileShape: [null, 2, 3],
            urlTemplate: "http://example.com/c/{y}-{x}.covjson",
        },
    ],
};

// http://example.com/a/all.covjson
let tilesetA: CoverageJSON.NdArray = {
    type: "NdArray",
    dataType: "integer",
    axisNames: ["t", "y", "x"],
    shape: [2, 5, 10],
    values: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
    ],
};

// MultiPointSeries
let multiPointSeriesDomain: CoverageJSON.MultiPointSeries = {
    type: "Domain",
    domainType: "MultiPointSeries",
    axes: {
        t: { values: ["2008-01-01T04:00:00Z", "2008-01-01T05:00:00Z"] },
        composite: {
            dataType: "tuple",
            coordinates: ["x", "y", "z"],
            values: [
                [1, 20, 1],
                [2, 21, 3],
            ],
        },
    },
    referencing,
};

let multiPointSeriesWithoutZ: CoverageJSON.MultiPointSeries = {
    type: "Domain",
    domainType: "MultiPointSeries",
    axes: {
        t: { values: ["2008-01-01T04:00:00Z", "2008-01-01T05:00:00Z"] },
        composite: {
            dataType: "tuple",
            coordinates: ["x", "y"],
            values: [
                [1, 20],
                [2, 21],
            ],
        },
    },
    referencing,
};

let polygonDomain: CoverageJSON.Polygon = {
    type: "Domain",
    domainType: "Polygon",
    axes: {
        composite: {
            dataType: "polygon",
            coordinates: ["x", "y"],
            values: [
                [
                    [
                        [100.0, 0.0],
                        [101.0, 0.0],
                        [101.0, 1.0],
                        [100.0, 1.0],
                        [100.0, 0.0],
                    ],
                ],
            ],
        },
        z: { values: [2] },
        t: { values: ["2008-01-01T04:00:00Z"] },
    },
    referencing,
};

let sectionDomain: CoverageJSON.Section = {
    type: "Domain",
    domainType: "Section",
    axes: {
        z: { values: [10, 20, 30] },
        composite: {
            dataType: "tuple",
            coordinates: ["t", "x", "y"],
            values: [
                ["2008-01-01T04:00:00Z", 1, 20],
                ["2008-01-01T04:30:00Z", 2, 21],
            ],
        },
    },
    referencing,
};

let multipointDomain: CoverageJSON.MultiPoint = {
    type: "Domain",
    domainType: "MultiPoint",
    axes: {
        t: { values: ["2008-01-01T04:00:00Z"] },
        composite: {
            dataType: "tuple",
            coordinates: ["x", "y", "z"],
            values: [
                [1, 20, 1],
                [2, 21, 3],
            ],
        },
    },
    referencing,
};
let multiPointDomainWithoutTandZ: CoverageJSON.MultiPoint = {
    type: "Domain",
    domainType: "MultiPoint",
    axes: {
        composite: {
            dataType: "tuple",
            coordinates: ["x", "y"],
            values: [
                [1, 20],
                [2, 21],
            ],
        },
    },
    referencing,
};

let multipolygonDomain: CoverageJSON.MultiPolygon = {
    type: "Domain",
    domainType: "MultiPolygon",
    axes: {
        composite: {
            dataType: "polygon",
            coordinates: ["x", "y"],
            values: [
                [
                    [
                        [100.0, 0.0],
                        [101.0, 0.0],
                        [101.0, 1.0],
                        [100.0, 1.0],
                        [100.0, 0.0],
                    ],
                ],
                [
                    [
                        [200.0, 10.0],
                        [201.0, 10.0],
                        [201.0, 11.0],
                        [200.0, 11.0],
                        [200.0, 10.0],
                    ],
                ],
            ],
        },
        z: { values: [2] },
        t: { values: ["2008-01-01T04:00:00Z"] },
    },
    referencing,
};

let multipolygonseriesDomain: CoverageJSON.MultiPolygonSeries = {
    type: "Domain",
    domainType: "MultiPolygonSeries",
    axes: {
        composite: {
            dataType: "polygon",
            coordinates: ["x", "y"],
            values: [
                [
                    [
                        [100.0, 0.0],
                        [101.0, 0.0],
                        [101.0, 1.0],
                        [100.0, 1.0],
                        [100.0, 0.0],
                    ],
                ],
                [
                    [
                        [200.0, 10.0],
                        [201.0, 10.0],
                        [201.0, 11.0],
                        [200.0, 11.0],
                        [200.0, 10.0],
                    ],
                ],
            ],
        },
        z: { values: [2] },
        t: { values: ["2008-01-01T04:00:00Z", "2010-01-01T00:00:00Z"] },
    },
    referencing,
};
