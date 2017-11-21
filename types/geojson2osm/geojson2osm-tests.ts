import { geojson2osm } from 'geojson2osm'

const features: GeoJSON.FeatureCollection<any> = {
    type: 'FeatureCollection',
    features: [{
          type: 'Feature',
          properties: {
            'building:colour': '#9F8169',
            'building:levels': 21,
            building: 'yes',
            height: 57,
            },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [
              -434.2249470949173,
              -13.15996269397843,
            ],
            [
              -434.2249470949173,
              -13.159751140560356,
            ],
            [
              -434.2242631316185,
              -13.159751140560356,
            ],
            [
              -434.2242631316185,
              -13.15996269397843,
            ],
            [
              -434.2249470949173,
              -13.15996269397843,
            ],
          ],
        ],
      },
    },
  ],
}

geojson2osm(features)
