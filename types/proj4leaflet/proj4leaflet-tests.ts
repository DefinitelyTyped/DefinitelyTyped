import * as L from 'leaflet';
import 'proj4leaflet';

import * as proj4 from 'proj4';

import LatLngBoundsExpression = L.LatLngBoundsExpression;

const crs = new L.Proj.CRS('EPSG:2400',
  '+lon_0=15.808277777799999 +lat_0=0.0 +k=1.0 +x_0=1500000.0 ' +
  '+y_0=0.0 +proj=tmerc +ellps=bessel +units=m ' +
  '+towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +no_defs',
  {
    resolutions: [8192, 4096, 2048] // 3 example zoom level resolutions
  }
);

const map = L.map('map', {
  crs,
  worldCopyJump: false
});

L.tileLayer('http://tile.example.com/example/{z}/{x}/{y}.png').addTo(map);

const crs2 = new L.Proj.CRS('EPSG:3006',
  '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
  {
    origin: [218128.7031, 6126002.9379],
    resolutions: [8192, 4096, 2048] // 3 example zoom level resolutions
  }
);

const crs3 = new L.Proj.CRS('EPSG:3006',
  '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
  {
    origin: [218128.7031, 6126002.9379],
    resolutions: [8192, 4096, 2048],
    scales: [1, 2],
    bounds: new L.Bounds([[1, 2], [3, 4]]),
    transformation: new L.Transformation(1, 2, 3, 4),
  }
);

// geoJson
proj4.defs("urn:ogc:def:crs:EPSG::26915", "+proj=utm +zone=15 +ellps=GRS80 +datum=NAD83 +units=m +no_defs");

const geojson = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [481650, 4980105]
  },
  crs: {
    type: "name",
    properties: {
      name: "urn:ogc:def:crs:EPSG::26915"
    }
  }
};

const map2 = L.map('map');

L.Proj.geoJson(geojson).addTo(map);
new L.Proj.GeoJSON(geojson).addTo(map);

// imageOverlay
const imageBounds: LatLngBoundsExpression =
  [[145323.20011251318, 475418.56045463786], [175428.80013969325, 499072.9604685671]];

L.Proj.imageOverlay('http://geo.flevoland.nl/arcgis/rest/services/Groen_Natuur/Agrarische_Natuur/MapServer/export?' +
  'format=png24&transparent=true&f=image&bboxSR=28992&imageSR=28992&layers=show%3A0' +
  '&bbox=145323.20011251318%2C475418.56045463786%2C175428.80013969325%2C499072.9604685671&size=560%2C440',
  imageBounds);

new L.Proj.ImageOverlay('http://geo.flevoland.nl/arcgis/rest/services/Groen_Natuur/Agrarische_Natuur/MapServer/export?' +
  'format=png24&transparent=true&f=image&bboxSR=28992&imageSR=28992&layers=show%3A0' +
  '&bbox=145323.20011251318%2C475418.56045463786%2C175428.80013969325%2C499072.9604685671&size=560%2C440',
  imageBounds);
