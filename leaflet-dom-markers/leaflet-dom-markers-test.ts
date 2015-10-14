/// <reference path="leaflet-dom-markers.d.ts" />

var marker: L.Marker = L.marker(L.latLng(0, 0), {
    icon: L.DomMarkers.icon({
        element: L.DomUtil.create('div', '')
    })
});