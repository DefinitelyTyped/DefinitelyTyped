import * as L from 'leaflet';
import 'leaflet-providers';

const map = L.map('map');
L.tileLayer.provider('Stamen.Watercolor').addTo(map);

L.tileLayer.provider('HERE.terrainDay', {
  app_id: '<insert ID here>',
  app_code: '<insert ID here>'
}).addTo(map);

L.tileLayer.provider('OpenStreetMap', {
  maxZoom: 21,
  maxNativeZoom: 19
}).addTo(map);

new L.TileLayer.Provider('MapBox').addTo(map);
new L.TileLayer.Provider('MapBox', {id: 'ID', accessToken: 'ACCESS_TOKEN'}).addTo(map);

L.TileLayer.Provider.providers['nlmaps'] = {
  url: 'https://geodata.nationaalgeoregister.nl/tiles/service/wmts/{variant}/EPSG:3857/{z}/{x}/{y}.png',
  options: {
    minZoom: 6,
    maxZoom: 19,
    bounds: [[50.5, 3.25], [54, 7.6]],
    attribution: 'Kaartgegevens &copy; <a href="kadaster.nl">Kadaster</a>'
  },
  variants: {
    standaard: 'brtachtergrondkaart',
    pastel: 'brtachtergrondkaartpastel',
    grijs: 'brtachtergrondkaartgrijs',
    luchtfoto: {
      url: 'https://geodata.nationaalgeoregister.nl/luchtfoto/rgb/wmts/1.0.0/2016_ortho25/EPSG:3857/{z}/{x}/{y}.png',
    }
  }
};
