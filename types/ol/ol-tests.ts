import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import proj from 'ol/proj';

new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        })
    ],
    view: new View({
        center: proj.fromLonLat([0, 0]),
        zoom: 2
    })
});
