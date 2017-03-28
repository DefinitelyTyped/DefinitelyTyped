var map: L.Map;

// Defaults
L.control.locate().addTo(map);

// Simple
var lc = L.control.locate({
    position: 'topright',
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);

// Locate Options
map.addControl(L.control.locate({
    locateOptions: {
        maxZoom: 10,
        enableHighAccuracy: true
}}));