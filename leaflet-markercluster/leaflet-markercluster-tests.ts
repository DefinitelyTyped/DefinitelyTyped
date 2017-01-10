

let map: L.Map;
let markerClusterGroup: L.MarkerClusterGroup;

markerClusterGroup.addTo(map);
map.addLayer(markerClusterGroup);
map.removeLayer(markerClusterGroup);

let polylineOptions: L.PolylineOptions;

let markerClusterGroupOptions: L.MarkerClusterGroupOptions = {};
markerClusterGroupOptions = {
    showCoverageOnHover: true,
    zoomToBoundsOnClick: false,
    spiderfyOnMaxZoom: true,
    removeOutsideVisibleBounds: false,
    animate: true,
    animateAddingMarkers: false,
    disableClusteringAtZoom: 12,
    maxClusterRadius: 40,
    polygonOptions: polylineOptions,
    singleMarkerMode: true,
    spiderLegPolylineOptions: polylineOptions,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: () => {},
    chunkedLoading: false,
    chunkDelay: 100
}

markerClusterGroup = L.markerClusterGroup();
markerClusterGroup = L.markerClusterGroup(markerClusterGroupOptions);

let layer: L.Layer;
let layers: L.Layer[];

markerClusterGroup = markerClusterGroup.addLayer(layer);
markerClusterGroup = markerClusterGroup.removeLayer(layer);
markerClusterGroup = markerClusterGroup.addLayers(layers);
markerClusterGroup = markerClusterGroup.removeLayers(layers);
markerClusterGroup = markerClusterGroup.clearLayers();

let marker: L.Marker;
marker = markerClusterGroup.getVisibleParent(marker);

let markers: L.Marker[];
let layerGroup: L.LayerGroup;

markerClusterGroup = markerClusterGroup.refreshClusters();
markerClusterGroup = markerClusterGroup.refreshClusters(layerGroup);
markerClusterGroup = markerClusterGroup.refreshClusters(marker);
markerClusterGroup = markerClusterGroup.refreshClusters(markers);

let childCount: number;
childCount = markerClusterGroup.getChildCount();

markers = markerClusterGroup.getAllChildMarkers();

markerClusterGroup.zoomToShowLayer(marker, () => {});

let hasLayer: boolean;
hasLayer = markerClusterGroup.hasLayer(layer);
hasLayer = markerClusterGroup.hasLayer(marker);
