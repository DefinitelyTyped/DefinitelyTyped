/// <reference path="leaflet-awesome-markers.d.ts" />

var map: L.Map;
//var markerClusterGroup: L.MarkerClusterGroup;

//// CircleMarker
//var circleMarker: L.CircleMarker = new L.CircleMarker(new L.LatLng(0, 0));

//markerClusterGroup.addLayer(circleMarker);
//map.addLayer(markerClusterGroup);
//map.removeLayer(markerClusterGroup);

//// Marker
//var marker = new L.Marker(new L.LatLng(0, 0));

//markerClusterGroup.addLayers([circleMarker, marker]);
//map.addLayer(markerClusterGroup);
//markerClusterGroup.refreshClusters();
//map.removeLayer(markerClusterGroup);

var redMarker = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'red'
});

var blueMarker = new L.AwesomeMarkers.Icon({
    icon: 'star',
    markerColor: 'blue'
});

L.marker([51.941196, 4.512291], { icon: redMarker }).addTo(map);
L.marker([51.941196, 4.512291], { icon: blueMarker }).addTo(map);

L.AwesomeMarkers.Icon.prototype.options.prefix = 'ion';