/// <reference path="./index.d.ts" />

import Map from 'ol/map';
import View from 'ol/view';
import OSM from 'ol/source/osm';
import Tile from 'ol/layer/tile';
import proj from 'ol/proj';

const map = new Map({
    layers: [
        new Tile({
            source: new OSM()
        })
    ],
    view: new View({
        center: proj.fromLonLat([113.5, 23.4])
    }),
    target: 'map',
    renderer: 'canvas'
});
