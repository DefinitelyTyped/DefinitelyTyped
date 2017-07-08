

var map: L.Map;

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

L.AwesomeMarkers.Icon.prototype.options.prefix = 'fa';
