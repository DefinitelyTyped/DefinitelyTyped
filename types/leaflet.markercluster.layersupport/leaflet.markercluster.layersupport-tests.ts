import * as L from 'leaflet';
import 'leaflet.markercluster.layersupport';

const polylineOptions: L.PolylineOptions = {};
const icon: L.Icon = L.icon({ iconUrl: 'foo' });

let markerClusterGroupOptions: L.MarkerClusterGroupLayerSupportOptions;
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
    iconCreateFunction: (cluster: L.MarkerCluster) => {
        const childMarkers: L.Marker[] = cluster.getAllChildMarkers();
        const childCount: number = cluster.getChildCount();
        cluster.zoomToBounds();
        const bounds: L.LatLngBounds = cluster.getBounds();
        return icon;
    },
    chunkedLoading: false,
    chunkDelay: 100,
    singleAddRemoveBufferDuration: 200,
};

markerClusterGroupOptions.iconCreateFunction = (cluster: L.MarkerCluster) => {
    return L.divIcon();
};

let mcgLayerSupportGroup: L.MarkerClusterGroup.LayerSupport;
mcgLayerSupportGroup = L.markerClusterGroup.layerSupport();
mcgLayerSupportGroup = L.markerClusterGroup.layerSupport(markerClusterGroupOptions);

let map = L.map('foo');

mcgLayerSupportGroup = mcgLayerSupportGroup.addTo(map);
map = map
    .addLayer(mcgLayerSupportGroup)
    .removeLayer(mcgLayerSupportGroup);

const latLng: L.LatLng = L.latLng(10, 10);

const layer: L.Layer = L.marker(latLng);
const layers: L.Layer[] = [layer];

let marker: L.Marker = L.marker(latLng);
let markers: L.Marker[] = [marker];

const layerGroup: L.LayerGroup = L.layerGroup(layers);

layerGroup.addTo(map);

marker = mcgLayerSupportGroup.getVisibleParent(marker);

mcgLayerSupportGroup = mcgLayerSupportGroup
    // Sub layers
    .checkIn(layerGroup)
    .checkOut(layerGroup)
    // Layers
    .addLayer(layer)
    .removeLayer(layer)
    .addLayers(layers)
    .removeLayers(layers)
    .clearLayers()
    // RefreshClusters
    .refreshClusters()
    .refreshClusters(layerGroup)
    .refreshClusters(marker)
    .refreshClusters(markers)
    .refreshClusters(mcgLayerSupportGroup)
    .refreshClusters({ id_any: layer });

const childCount: number = mcgLayerSupportGroup.getChildCount();

markers = mcgLayerSupportGroup.getAllChildMarkers();

mcgLayerSupportGroup.zoomToShowLayer(marker);
mcgLayerSupportGroup.zoomToShowLayer(marker, () => {});

let hasLayer: boolean;
hasLayer = mcgLayerSupportGroup.hasLayer(layer);
hasLayer = mcgLayerSupportGroup.hasLayer(marker);
hasLayer = mcgLayerSupportGroup.hasLayer(layerGroup);
