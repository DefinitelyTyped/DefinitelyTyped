

var map: L.Map;
var markerClusterGroup: L.MarkerClusterGroup;

// CircleMarker
var circleMarker: L.CircleMarker = new L.CircleMarker(new L.LatLng(0, 0));

markerClusterGroup.addLayer(circleMarker);
map.addLayer(markerClusterGroup);
map.removeLayer(markerClusterGroup);

// Marker
var marker = new L.Marker(new L.LatLng(0, 0));

markerClusterGroup.addLayers([circleMarker, marker]);
map.addLayer(markerClusterGroup);
markerClusterGroup.refreshClusters();
map.removeLayer(markerClusterGroup);
