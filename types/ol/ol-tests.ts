import { Map, View } from 'ol';
import { defaults as defaultControls } from 'ol/control';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';

const view = new View({
    center: [0, 0],
    zoom: 5,
    minZoom: 1,
    maxZoom: 21,
    projection: 'EPSG:4326'
});

const map = new Map({
    view,
    controls: defaultControls(),
    layers: [
        new TileLayer({
            source: new OSM({
                crossOrigin: 'anonymous'
            })
        })
    ]
});


map.once('postrender', event => {
    console.log(view.getProjection());
});
