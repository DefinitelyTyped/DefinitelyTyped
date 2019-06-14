import * as L from 'leaflet';
import 'leaflet-rastercoords';

const img = [
    3831,  // original width of image (here from `example/karta.jpg`)
    3101   // original height of image
];
// create the map
const map = L.map('map');

// assign map and image dimensions
const rc = new L.RasterCoords(map, img);
// set max zoom Level (might be `x` if gdal2tiles was called with `-z 0-x` option)
map.setMaxZoom(rc.zoomLevel());
// all coordinates need to be unprojected using the `unproject` method
// set the view in the lower right edge of the image
map.setView(rc.unproject([img[0], img[1]]), 2);

// the tile layer containing the image generated with `gdal2tiles --leaflet -p raster -w none <img> tiles`
L.tileLayer('./tiles/{z}/{x}/{y}.png', {
  noWrap: true
}).addTo(map);
