let map: L.Map = L.map('map', {});
let baseLayers = {};
let groupedOverlays = {};
let cities = L.layerGroup([]);

let options: L.Control.GroupedLayersOptions = {
	collapsed: false,
	position: 'topright',
	autoZIndex: true,
	exclusiveGroups: ["Landmarks"],
	groupCheckboxes: true
};

let layerControl: L.Control.GroupedLayers = L.control.groupedLayers(baseLayers, groupedOverlays, options);
layerControl.addTo(map);

layerControl.addOverlay(cities, "Cities", "Landmarks");
layerControl.removeLayer(cities);

layerControl.addBaseLayer(cities, "Cities");
layerControl.removeLayer(cities);