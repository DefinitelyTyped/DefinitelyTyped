import 'leaflet.markercluster';

import * as L from 'leaflet';

const polylineOptions: L.PolylineOptions = {};
const icon: L.Icon = L.icon({ iconUrl: 'foo' });

let markerClusterGroupOptions: L.MarkerClusterGroupOptions = {};
markerClusterGroupOptions = {
    spiderfyOnEveryZoom: true,
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
        cluster.zoomToBounds({ padding: [1, 2] });
        const bounds: L.LatLngBounds = cluster.getBounds();
        return icon;
    },
    chunkedLoading: false,
    chunkDelay: 100,
    chunkInterval: 200,
    chunkProgress: (processedMarkers, totalMarkers, timeElapsed) => {
        console.log(`Reporting chunkProgress, processedMarkers: ${processedMarkers}, totalMarkers: ${totalMarkers}, timeElapsed: ${timeElapsed}.`);
    }
};

markerClusterGroupOptions.iconCreateFunction = (cluster: L.MarkerCluster) => {
    return L.divIcon();
};

markerClusterGroupOptions.clusterPane = "foobarPane";

let markerClusterGroup: L.MarkerClusterGroup;
markerClusterGroup = L.markerClusterGroup();
markerClusterGroup = L.markerClusterGroup(markerClusterGroupOptions);

let map = L.map('foo');

markerClusterGroup = markerClusterGroup.addTo(map);
map = map
    .addLayer(markerClusterGroup)
    .removeLayer(markerClusterGroup);

const latLng: L.LatLng = L.latLng(10, 10);

const layer: L.Layer = L.marker(latLng);
const layers: L.Layer[] = [layer];

let marker: L.Marker = L.marker(latLng);
let markers: L.Marker[] = [marker];

const layerGroup: L.LayerGroup = L.layerGroup(layers);

marker = markerClusterGroup.getVisibleParent(marker);

const spiderfyEventHandler: L.SpiderfyEventHandlerFn = event => event.cluster.getChildCount() === event.markers.length;
const animationEndEventHandler: L.AnimationEndEventHandlerFn = () => { };

markerClusterGroup = markerClusterGroup
    // Layers
    .addLayer(layer)
    .removeLayer(layer)
    .addLayers(layers)
    .removeLayers(layers)
    .addLayers(layers, true)
    .clearLayers()
    // RefreshClusters
    .refreshClusters()
    .refreshClusters(layerGroup)
    .refreshClusters(marker)
    .refreshClusters(markers)
    .refreshClusters(markerClusterGroup)
    .refreshClusters({ id_any: layer })
    // Cluster Events
    .on('spiderfied', spiderfyEventHandler)
    .on('unspiderfied', spiderfyEventHandler)
    .on('animationend', animationEndEventHandler)
    .on({
        spiderfied: spiderfyEventHandler,
        unspiderfied: spiderfyEventHandler,
        animationend: animationEndEventHandler,
    })
    .once('spiderfied', spiderfyEventHandler)
    .once('unspiderfied', spiderfyEventHandler)
    .once('animationend', animationEndEventHandler)
    .once({
        spiderfied: spiderfyEventHandler,
        unspiderfied: spiderfyEventHandler,
        animationend: animationEndEventHandler,
    })
    .off('spiderfied', spiderfyEventHandler)
    .off('unspiderfied', spiderfyEventHandler)
    .off('animationend', animationEndEventHandler)
    .off({
        spiderfied: spiderfyEventHandler,
        unspiderfied: spiderfyEventHandler,
        animationend: animationEndEventHandler,
    })
    .addEventListener('spiderfied', spiderfyEventHandler)
    .addEventListener('unspiderfied', spiderfyEventHandler)
    .addEventListener('animationend', animationEndEventHandler)
    .addEventListener({
        spiderfied: spiderfyEventHandler,
        unspiderfied: spiderfyEventHandler,
        animationend: animationEndEventHandler,
    })
    .addOneTimeEventListener('spiderfied', spiderfyEventHandler)
    .addOneTimeEventListener('unspiderfied', spiderfyEventHandler)
    .addOneTimeEventListener('animationend', animationEndEventHandler)
    .addOneTimeEventListener({
        spiderfied: spiderfyEventHandler,
        unspiderfied: spiderfyEventHandler,
        animationend: animationEndEventHandler,
    })
    .removeEventListener('spiderfied', spiderfyEventHandler)
    .removeEventListener('unspiderfied', spiderfyEventHandler)
    .removeEventListener('animationend', animationEndEventHandler)
    .removeEventListener({
        spiderfied: spiderfyEventHandler,
        unspiderfied: spiderfyEventHandler,
        animationend: animationEndEventHandler,
    });

const childCount: number = markerClusterGroup.getChildCount();

markers = markerClusterGroup.getAllChildMarkers();

markerClusterGroup.zoomToShowLayer(marker);
markerClusterGroup.zoomToShowLayer(marker, () => { });

let hasLayer: boolean;
hasLayer = markerClusterGroup.hasLayer(layer);
hasLayer = markerClusterGroup.hasLayer(marker);

// inheritance
const Subclass1 = L.MarkerClusterGroup.extend({
    myFunction() { }
});
class Subclass2 extends L.MarkerClusterGroup {
    myFunction() { }
}
const Subclass3 = L.MarkerCluster.extend({
    myFunction() { }
});
class Subclass4 extends L.MarkerCluster {
    myFunction() { }
}

const s1 = new Subclass1(); // any
const s2 = new Subclass2();
const s3 = new Subclass3(); // any
const s4 = new Subclass4([1, 2]);

// call subclass function
s1.myFunction();
s2.myFunction();
s3.myFunction();
s4.myFunction();

// call base class function
s1.refreshClusters();
s2.refreshClusters();
s3.getAllChildMarkers();
s4.getAllChildMarkers();

if (marker instanceof L.MarkerCluster) {
    marker.spiderfy();
    marker.unspiderfy();
}
