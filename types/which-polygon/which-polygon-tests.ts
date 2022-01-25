import WhichPolygon = require('which-polygon');

interface City {
    name: string;
    population: number;
}

const cities: WhichPolygon.GeoJson<City> = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { name: 'Ōtepoti', population: 123_456 },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [174, -36],
                        [174, -35],
                        [175, -35],
                        [174, -36],
                    ],
                ],
            },
        },
    ],
};

const lookup = WhichPolygon(cities);

// $ExpectType City | null
const p1 = lookup([174, -36]);
// $ExpectType City | null
const p2 = lookup([174, -36], false);

// $ExpectType City[] | null
const p3 = lookup([174, -36], true);

// $ExpectType number | undefined
p3?.[0].population;

// @ts-expect-error typo
p3?.[0].populationnnnn;

lookup.bbox([1, 2, 3, 4]);
// @ts-expect-error invalid bbox
lookup.bbox([1, 2, 3]);

lookup.tree.clear(); // internal data structure is accessible
