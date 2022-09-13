import * as L from 'leaflet';
import 'leaflet-groupedlayercontrol';

const map: L.Map = L.map('#map');

const baseLayers = {
    street: L.tileLayer('...')
};

const groupedOverlays = {
    overlayGroup1: {
        overlay1: L.layerGroup(),
        overlay2: L.layerGroup()
    },
    overlayGroup2: {
        overlay3: L.layerGroup()
    }
};

const groupedLayersOptions: L.GroupedLayersOptions = {
    position: 'topleft',
    exclusiveGroups: ['overlayGroup1', 'overlayGroup2'],
    groupCheckboxes: false
};

L.control.groupedLayers(baseLayers, groupedOverlays, groupedLayersOptions).addTo(map);
