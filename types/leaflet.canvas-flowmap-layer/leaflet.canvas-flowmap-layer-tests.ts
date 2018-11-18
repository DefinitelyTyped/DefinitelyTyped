import * as L from 'leaflet';
import 'leaflet.polylinemeasure';

// const map = L.map('map', {center: L.latLng(43.24209, 76.87743), zoom: 15});

// L.tileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
//     subdomains: ['a', 'b', 'c'],
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// L.control.polylineMeasure().addTo(map);

const map = L.map('map');

if (L.Browser.mobile) {
  map.setView([15, -21.95], 2);
} else {
  map.setView([0, 0], 2);
}

// L.esri.basemapLayer('DarkGray').addTo(map);

fetch('./leaflet-canvas-flowmap-layer-test-data.json')
  .then(response => response.json())
  .then((geoJsonFeatureCollection) => {
    const oneToManyFlowmapLayer = L.canvasFlowmapLayer(geoJsonFeatureCollection, {
      originAndDestinationFieldIds: {
        originUniqueIdField: 's_city_id',
        originGeometry: {
          x: 's_lon',
          y: 's_lat'
        },
        destinationUniqueIdField: 'e_city_id',
        destinationGeometry: {
          x: 'e_lon',
          y: 'e_lat'
        }
      },
      pathDisplayMode: 'selection',
      animationStarted: true,
      animationEasingFamily: 'Cubic',
      animationEasingType: 'In',
      animationDuration: 2000
    }).addTo(map);
    
    // since this demo is using the optional "pathDisplayMode" as "selection",
    // it is up to the developer to wire up a click or mouseover listener
    // and then call the "selectFeaturesForPathDisplay()" method to inform the layer
    // which Bezier paths need to be drawn
    oneToManyFlowmapLayer.on('click', (e: any) => {
      if (e.sharedOriginFeatures.length) {
        oneToManyFlowmapLayer.selectFeaturesForPathDisplay(e.sharedOriginFeatures, 'SELECTION_NEW');
      }
      if (e.sharedDestinationFeatures.length) {
        oneToManyFlowmapLayer.selectFeaturesForPathDisplay(e.sharedDestinationFeatures, 'SELECTION_NEW');
      }
    });
    
    // immediately select an origin point for Bezier path display,
    // instead of waiting for the first user click event to fire
    oneToManyFlowmapLayer.selectFeaturesForPathDisplayById('s_city_id', 562, true, 'SELECTION_NEW');
  })

