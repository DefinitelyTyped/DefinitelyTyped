import osmtogeojson from 'osmtogeojson';
import { OsmJSON, GeoJSON } from 'osmtogeojson';
import * as xmldom from 'xmldom';

let xml: Document = (new xmldom.DOMParser()).parseFromString("<osm><node id='1' lat='1.234' lon='4.321' /></osm>", 'text/xml');
let geojson: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "node/1",
      properties: {
        type: "node",
        id: 1,
        tags: {},
        relations: [],
        meta: {}
      },
      geometry: {
        type: "Point",
        coordinates: [4.321, 1.234]
      }
    }
  ]
};

osmtogeojson.toGeojson(xml);
osmtogeojson(xml, {
  flatProperties: true,
  uninterestingTags: {foo:true}
});

let json: OsmJSON.OsmJSONObject = {
  elements: [
    {
      type: "node",
      id:   1,
      lat:  1.234,
      lon:  4.321,
      timestamp: "2013-01-13T22:56:07Z",
      version:   7,
      changeset: 1234,
      user:      "johndoe",
      uid:       666
    },
    {
      type: "relation",
      tags: {"type": "multipolygon"},
      id:   1,
      members: [
        {
          type: "way",
          ref:  2,
          role: "outer"
        },
        {
          type: "way",
          ref:  3,
          role: "outer"
        }
      ]
    },
    {
      type: "way",
      id:   2,
      nodes: [4,5,6,4]
    },
    {
      type: "node",
      id:   4,
      lat:  0.0,
      lon:  0.0
    },
    {
      type: "node",
      id:   5,
      lat:  0.0,
      lon:  1.0
    },
    {
      type: "node",
      id:   6,
      lat:  1.0,
      lon:  0.0
    }
  ]
};

osmtogeojson.toGeojson(json);
osmtogeojson(json, {
  flatProperties: true,
  uninterestingTags: {foo:true}
});
