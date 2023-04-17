import { ContextMenuItemClickEvent, Map } from 'leaflet';
import 'leaflet-contextmenu';

const map = new Map('map', {
    center: [37.1259000, -4.7510700],
    zoom: 3,
    minZoom: 8,
    contextmenu: true,
    contextmenuItems: [{
        text: 'Center map here',
        callback: (event) => centerMap(event)
    }, {
        text: 'Zoom in',
        // icon: 'img/zoom-in.png',
        callback: (event) => zoomIn(event)
    }, {
        text: 'Zoom out',
        // icon: 'img/zoom-out.png',
        callback: (event) => zoomOut(event)
    }]
});

function centerMap(e: ContextMenuItemClickEvent) {
    map.panTo(e.latlng);
}

function zoomIn(e: ContextMenuItemClickEvent) {
    map.zoomIn();
}

function zoomOut(e: ContextMenuItemClickEvent) {
    map.zoomOut();
}
