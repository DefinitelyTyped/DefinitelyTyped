import { geometry, ring } from '@mapbox/geojson-area';

// Using a polygon argument
// $ExpectType number
geometry({
  type: "Polygon",
  coordinates: [
    [
      [170.0, 45.0], [180.0, 45.0]
    ], [
      [-180.0, 45.0], [-170.0, 45.0]
    ]
  ]
});

// Using a point argument
// $ExpectType number
geometry({
  type: "Point",
  coordinates: [12, 23]
});

ring([[170.0, 45.0], [180.0, 45.0], [-180.0, 45.0], [-170.0, 45.0]]);
