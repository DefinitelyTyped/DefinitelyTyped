import * as L from 'leaflet';
import 'esri-leaflet';

const latlng: L.LatLng = new L.LatLng(0, 0);
const latlngbounds: L.LatLngBounds = new L.LatLngBounds(latlng, latlng);
const map: L.Map = new L.Map('map');

const marker: L.Marker = new L.Marker(latlng);
const polygon: L.Polygon = new L.Polygon([latlng, latlng]);
const polyline: L.Polyline = new L.Polyline([latlng, latlng]);
const geojson: L.GeoJSON = new L.GeoJSON();

let basemapLayer: L.esri.BasemapLayer;
basemapLayer = L.esri.basemapLayer('Streets');
basemapLayer = L.esri.basemapLayer('Topographic');
basemapLayer = L.esri.basemapLayer('NationalGeographic');
basemapLayer = L.esri.basemapLayer('Oceans');
basemapLayer = L.esri.basemapLayer('Gray');
basemapLayer = L.esri.basemapLayer('DarkGray');
basemapLayer = L.esri.basemapLayer('Imagery');
basemapLayer = L.esri.basemapLayer('ShadedRelief');
basemapLayer = L.esri.basemapLayer('Terrain');
basemapLayer = L.esri.basemapLayer('USATopo');
basemapLayer = L.esri.basemapLayer('OceansLabels');
basemapLayer = L.esri.basemapLayer('GrayLabels');
basemapLayer = L.esri.basemapLayer('DarkGrayLabels');
basemapLayer = L.esri.basemapLayer('ImageryLabels');
basemapLayer = L.esri.basemapLayer('ImageryTransportation');
basemapLayer = L.esri.basemapLayer('ShadedReliefLabels');
basemapLayer = L.esri.basemapLayer('TerrainLabels');

// should be an error
// basemapLayer = L.esri.basemapLayer('Test');

basemapLayer = new L.esri.BasemapLayer('Streets');
basemapLayer = new L.esri.BasemapLayer('Topographic');
basemapLayer = new L.esri.BasemapLayer('NationalGeographic');
basemapLayer = new L.esri.BasemapLayer('Oceans');
basemapLayer = new L.esri.BasemapLayer('Gray');
basemapLayer = new L.esri.BasemapLayer('DarkGray');
basemapLayer = new L.esri.BasemapLayer('Imagery');
basemapLayer = new L.esri.BasemapLayer('ShadedRelief');
basemapLayer = new L.esri.BasemapLayer('Terrain');
basemapLayer = new L.esri.BasemapLayer('USATopo');
basemapLayer = new L.esri.BasemapLayer('OceansLabels');
basemapLayer = new L.esri.BasemapLayer('GrayLabels');
basemapLayer = new L.esri.BasemapLayer('DarkGrayLabels');
basemapLayer = new L.esri.BasemapLayer('ImageryLabels');
basemapLayer = new L.esri.BasemapLayer('ImageryTransportation');
basemapLayer = new L.esri.BasemapLayer('ShadedReliefLabels');
basemapLayer = new L.esri.BasemapLayer('TerrainLabels');

// should be an error
// basemapLayer = new L.esri.BasemapLayer('Test');

basemapLayer = L.esri.basemapLayer('Streets', { token: 'token' });
basemapLayer = new L.esri.BasemapLayer('Streets', { token: 'token' });

let tiledMapLayer: L.esri.TiledMapLayer;

let tiledMapLayerOptions: L.esri.TiledMapLayerOptions;
tiledMapLayerOptions = {
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer',
};
tiledMapLayerOptions = {
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer',
    maxZoom: 15,
    zoomOffsetAllowance: 0.5,
    proxy: '//localhost/proxy',
    useCors: true,
    token: 'token'
};

tiledMapLayer = L.esri.tiledMapLayer(tiledMapLayerOptions);
tiledMapLayer = L.esri.tiledMapLayer({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer',
});
tiledMapLayer = L.esri.tiledMapLayer({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer',
    maxZoom: 15,
    zoomOffsetAllowance: 0.5,
    proxy: '//localhost/proxy',
    useCors: true,
    token: 'token'
});

tiledMapLayer = new L.esri.TiledMapLayer(tiledMapLayerOptions);
tiledMapLayer = new L.esri.TiledMapLayer({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer',
});
tiledMapLayer = new L.esri.TiledMapLayer({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer',
    maxZoom: 15,
    zoomOffsetAllowance: 0.5,
    proxy: '//localhost/proxy',
    useCors: true,
    token: 'token'
});

tiledMapLayer.authenticate('secret');
tiledMapLayer.metadata((err, metadata) => { });

tiledMapLayer.identify()
    .at(latlng)
    .run((error, featureCollection) => {});
tiledMapLayer.find()
    .layers('18')
    .text('Colorado')
    .run((error, featureCollection) => {});
tiledMapLayer.query()
    .layer(0)
    .within(latlngbounds)
    .run((error, featureCollection, response) => {});

let dynamicMapLayer: L.esri.DynamicMapLayer;
let dynamicMapLayerOptions: L.esri.DynamicMapLayerOptions;

dynamicMapLayerOptions = {
    url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Petroleum/KGS_OilGasFields_Kansas/MapServer',
};
dynamicMapLayerOptions = {
    url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Petroleum/KGS_OilGasFields_Kansas/MapServer',
    opacity: 0.5,
    format: 'jpg',
    transparent: false,
    f: 'html',
    attribution: 'MIT',
    layers: [1, 2, 3],
    layerDefs: { 3: "STATE_NAME='Kansas'", 9: "POP2007>25000" },
    position: 'front',
    maxZoom: 1,
    minZoom: 1,
    disableCache: true,
    dynamicLayers: [{
        id: 501,
        source: {
            type: 'mapLayer',
            mapLayerId: 0
        },
        drawingInfo: {
            showLabels: false
        },
        layerTimeOptions: {
            useTime: false
        }
    }],
    proxy: '//localhost/proxy',
    useCors: true,
    token: 'token'
};

dynamicMapLayer = L.esri.dynamicMapLayer(dynamicMapLayerOptions);
dynamicMapLayer = L.esri.dynamicMapLayer({
    url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Petroleum/KGS_OilGasFields_Kansas/MapServer',
});
dynamicMapLayer = L.esri.dynamicMapLayer({
    url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Petroleum/KGS_OilGasFields_Kansas/MapServer',
    opacity: 0.5,
    format: 'jpg',
    transparent: false,
    f: 'html',
    attribution: 'MIT',
    layers: [1, 2, 3],
    layerDefs: { 3: "STATE_NAME='Kansas'", 9: "POP2007>25000" },
    position: 'front',
    maxZoom: 1,
    minZoom: 1,
    disableCache: true,
    dynamicLayers: [{
        id: 501,
        source: {
            type: 'mapLayer',
            mapLayerId: 0
        },
        drawingInfo: {
            showLabels: false
        },
        layerTimeOptions: {
            useTime: false
        }
    }],
    proxy: '//localhost/proxy',
    useCors: true,
    token: 'token'
});

dynamicMapLayer = new L.esri.DynamicMapLayer(dynamicMapLayerOptions);
dynamicMapLayer = new L.esri.DynamicMapLayer({
    url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Petroleum/KGS_OilGasFields_Kansas/MapServer',
});
dynamicMapLayer = new L.esri.DynamicMapLayer({
    url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Petroleum/KGS_OilGasFields_Kansas/MapServer',
    opacity: 0.5,
    format: 'jpg',
    transparent: false,
    f: 'html',
    attribution: 'MIT',
    layers: [1, 2, 3],
    layerDefs: { 3: "STATE_NAME='Kansas'", 9: "POP2007>25000" },
    position: 'front',
    maxZoom: 1,
    minZoom: 1,
    disableCache: true,
    dynamicLayers: [{
        id: 501,
        source: {
            type: 'mapLayer',
            mapLayerId: 0
        },
        drawingInfo: {
            showLabels: false
        },
        layerTimeOptions: {
            useTime: false
        }
    }],
    proxy: '//localhost/proxy',
    useCors: true,
    token: 'token'
});

dynamicMapLayer.bindPopup((err, featureCollection, response) => {
    const count = featureCollection.features.length;
    return (count) ? count + ' features' : false;
});

dynamicMapLayer.metadata((error, metadata) => {});

dynamicMapLayer.identify()
    .at(latlng)
    .run((error, featureCollection) => {});
dynamicMapLayer.find()
    .layers('18')
    .text('Colorado')
    .run((error, featureCollection) => {});
dynamicMapLayer.query()
    .layer(0)
    .within(latlngbounds)
    .run((error, featureCollection, response) => {});

let featureLayerOptions: L.esri.FeatureLayerOptions;
let featureLayer: L.esri.FeatureLayer;

featureLayerOptions = {
    url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0/'
};
featureLayerOptions = {
    url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0/',
    pointToLayer: (feature, latLng) => { },
    style: (feature, layer) => { },
    onEachFeature: (feature, layer) => { },
    where: '1=1',
    maxZoom: 19,
    minZoom: 3,
    cacheLayers: true,
    fields: ['a', 'b'],
    from: new Date(),
    to: new Date(),
    timeField: { start: 'startTime', end: 'endTime' },
    timeFilterMode: 'client',
    simplifyFactor: 0.1,
    precision: 0.1,
    renderer: new L.SVG(),
    isModern: true,
    ignoreRenderer: true,
};

featureLayer = L.esri.featureLayer(featureLayerOptions);
featureLayer = L.esri.featureLayer({
    url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0/'
});
featureLayer = L.esri.featureLayer({
    url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0/',
    pointToLayer: (feature, latLng) => { },
    style: (feature, layer) => { },
    onEachFeature: (feature, layer) => { },
    where: '1=1',
    maxZoom: 19,
    minZoom: 3,
    cacheLayers: true,
    fields: ['a', 'b'],
    from: new Date(),
    to: new Date(),
    timeField: { start: 'startTime', end: 'endTime' },
    timeFilterMode: 'client',
    simplifyFactor: 0.1,
    precision: 0.1,
    renderer: new L.SVG(),
    isModern: true,
    ignoreRenderer: true,
});

featureLayer = new L.esri.FeatureLayer(featureLayerOptions);
featureLayer = new L.esri.FeatureLayer({
    url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0/'
});
featureLayer = new L.esri.FeatureLayer({
    url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0/',
    pointToLayer: (feature, latLng) => { },
    style: (feature, layer) => { },
    onEachFeature: (feature, layer) => { },
    where: '1=1',
    maxZoom: 19,
    minZoom: 3,
    cacheLayers: true,
    fields: ['a', 'b'],
    from: new Date(),
    to: new Date(),
    timeField: { start: 'startTime', end: 'endTime' },
    timeFilterMode: 'client',
    simplifyFactor: 0.1,
    precision: 0.1,
    renderer: new L.SVG(),
    isModern: true,
    ignoreRenderer: true,
});

featureLayer.setStyle({
    color: 'white'
});
featureLayer.setStyle(feature => {
    return {
        weight: feature.properties.pixelWidth
    };
});

featureLayer.eachFeature(layer => {});

featureLayer.query()
    .within(latlngbounds)
    .where("Direction = 'WEST'")
    .run((error, featureCollection) => {});

featureLayer.metadata((error, metadata) => {});

let mapServiceOptions: L.esri.MapServiceOptions;
let mapService: L.esri.MapService;

mapServiceOptions = {
};
mapServiceOptions = {
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
};

mapService = L.esri.mapService(mapServiceOptions);
mapService = L.esri.mapService({});
mapService = L.esri.mapService({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

mapService = new L.esri.MapService(mapServiceOptions);
mapService = new L.esri.MapService({});
mapService = new L.esri.MapService({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

mapService.query()
    .layer(0)
    .within(latlngbounds)
    .run((error, featureCollection, response) => {});
mapService.identify()
    .on(map)
    .at(latlng)
    .run((error, featureCollection, response) => {});
mapService.find()
    .layers('18')
    .text('Colorado')
    .fields('name')
    .run((error, featureCollection, response) => {});

mapService.identify()
    .on(map)
    .at([45.543, -122.621])
    .layers('visible:1')
    .run((error, featureCollection, response) => {});
mapService.find()
    .layers('18')
    .text('Colorado')
    .fields('GNIS_NAME')
    .run((error, featureCollection, response) => {});

let imageServiceOptions: L.esri.ImageServiceOptions;
let imageService: L.esri.ImageService;

imageServiceOptions = {
};
imageServiceOptions = {
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
};

imageService = L.esri.imageService(imageServiceOptions);
imageService = L.esri.imageService({});
imageService = L.esri.imageService({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

imageService = new L.esri.ImageService(imageServiceOptions);
imageService = new L.esri.ImageService({});
imageService = new L.esri.ImageService({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

let featureLayerServiceOptions: L.esri.FeatureLayerServiceOptions;
let featureLayerService: L.esri.FeatureLayerService;

featureLayerServiceOptions = {
};
featureLayerServiceOptions = {
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
};

featureLayerService = L.esri.featureLayerService(featureLayerServiceOptions);
featureLayerService = L.esri.featureLayerService({});
featureLayerService = L.esri.featureLayerService({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

featureLayerService = new L.esri.FeatureLayerService(featureLayerServiceOptions);
featureLayerService = new L.esri.FeatureLayerService({});
featureLayerService = new L.esri.FeatureLayerService({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

featureLayerService.query()
    .within(latlngbounds)
    .where("Direction = 'WEST'")
    .run((error, featureCollection, response) => {});

const feature = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [-122, 45]
    },
    properties: {
        name: 'Hello World'
    }
};
featureLayerService.addFeature(feature, (error, response) => {});

const feature2 = {
    type: 'Feature',
    id: 2,
    geometry: {
        type: 'Point',
        coordinates: [-122, 45]
    },
    properties: {
        name: 'Hi I\'m Feature 2'
    }
};
featureLayerService.updateFeature(feature2, (error, response) => {});

featureLayerService.deleteFeature(2, (error, response) => {});

featureLayerService
    .query()
    .where("name='Hello World'")
    .run((error, featureCollection, response) => {});

let queryOptions: L.esri.QueryOptions;
let query: L.esri.Query;

queryOptions = {
};
queryOptions = {
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
};

query = L.esri.query(queryOptions);
query = L.esri.query({});
query = L.esri.query({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

query = new L.esri.Query(queryOptions);
query = new L.esri.Query({});
query = new L.esri.Query({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

query.within(latlngbounds);
query.run((error, featureCollection, response) => {});
query.bounds((error, latLngBounds, response) => {});

query.nearby(latlng, 500);
query.run((error, featureCollection, response) => {});

query.nearby(latlng, 2000).where("direction='East'").orderBy('stop_id', 'ASC');
query.count((error, count, response) => {});
query.ids((error, ids, response) => {});

query.where("zone_id='B'").bounds((error, latLngBounds, response) => {});

query.transform(15851);
query.transform({wkid: 15851 });
query.transform({wkt: "GEOGTRAN[\..."});

query.format(false);

let identifyFeaturesOptions: L.esri.IdentifyFeaturesOptions;
let identifyFeatures: L.esri.IdentifyFeatures;

identifyFeaturesOptions = {
};
identifyFeaturesOptions = {
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
};

identifyFeatures = L.esri.identifyFeatures(identifyFeaturesOptions);
identifyFeatures = L.esri.identifyFeatures({});
identifyFeatures = L.esri.identifyFeatures({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

identifyFeatures = new L.esri.IdentifyFeatures(identifyFeaturesOptions);
identifyFeatures = new L.esri.IdentifyFeatures({});
identifyFeatures = new L.esri.IdentifyFeatures({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

identifyFeatures
    .on(map)
    .at([45.543, -122.621])
    .layers('visible:1')
    .run((error, featureCollection, response) => {});

identifyFeatures.at(marker);
identifyFeatures.at(polygon);
identifyFeatures.at(polyline);
identifyFeatures.at(latlngbounds);
identifyFeatures.at(geojson);

let findOptions: L.esri.FindOptions;
let find: L.esri.Find;

findOptions = {
};
findOptions = {
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
};

find = L.esri.find(findOptions);
find = L.esri.find({});
find = L.esri.find({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

find = new L.esri.Find(findOptions);
find = new L.esri.Find({});
find = new L.esri.Find({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0',
    proxy: '//localhost/proxy',
    useCors: true,
    timeout: 1000
});

find.layers('18')
    .text('Colorado');
find.run((error, featureCollection, response) => {});

find.layers('13')
    .text('198133')
    .fields('GNIS_ID');
find.run((error, featureCollection, response) => {});
