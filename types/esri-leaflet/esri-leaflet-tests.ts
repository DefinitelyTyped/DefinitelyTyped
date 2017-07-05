import L = require('esri-leaflet');

let latlng: L.LatLng = new L.LatLng(0, 0);;
let latlngbounds: L.LatLngBounds = new L.LatLngBounds(latlng, latlng);
let map: L.Map = new L.Map('map');

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

// TODO: 
tiledMapLayer.identify();
tiledMapLayer.find();
tiledMapLayer.query();

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
    dynamicLayers: [{
        "id": 501,
        "source": {
            "type": "mapLayer",
            "mapLayerId": 0
        },
        "drawingInfo": {
            "showLabels": false
        },
        "layerTimeOptions": {
            "useTime": false
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
    dynamicLayers: [{
        "id": 501,
        "source": {
            "type": "mapLayer",
            "mapLayerId": 0
        },
        "drawingInfo": {
            "showLabels": false
        },
        "layerTimeOptions": {
            "useTime": false
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
    dynamicLayers: [{
        "id": 501,
        "source": {
            "type": "mapLayer",
            "mapLayerId": 0
        },
        "drawingInfo": {
            "showLabels": false
        },
        "layerTimeOptions": {
            "useTime": false
        }
    }],
    proxy: '//localhost/proxy',
    useCors: true,
    token: 'token'
});

dynamicMapLayer.bindPopup(
    function (err, featureCollection, response) {
        var count = featureCollection.features.length;
        return (count) ? count + ' features' : false;
    });

dynamicMapLayer.metadata(function (error, metadata) {
    // console.log(metadata);
});

// TODO:
// dynamicMapLayer.identify()
//   .at(latlng)
//   .run(function(error, featureCollection){
//     // console.log(featureCollection);
//   });
// dynamicMapLayer.find()
//   .layers('18')
//   .searchText('Colorado')
//   .run(function(error, featureCollection){
//     // console.log(featureCollection);
//   });
// dynamicMapLayer.query()
//   .layer(0)
//   .within(latlngbounds)
//   .run(function(error, featureCollection, response){
//     // console.log(featureCollection);
//   });

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

// TODO:
// mapService.query()
//         .layer(0)
//         .within(latlngbounds)
//         .run(function(error, featureCollection, response){
//           // console.log(featureCollection);
//         });
// mapService.identify()
//         .on(map)
//         .at(latlng)
//         .run(function(error, featureCollection, response){
//             // console.log(featureCollection)
//         });
// mapService.find()
//         .layers('18')
//         .text('Colorado')
//         .fields('name')
//         .run(function(error, featureCollection, response){
//             // console.log(featureCollection)
//         });

// mapService.identify()
//     .on(map)
//     .at([45.543, -122.621])
//     .layers('visible:1')
//     .run(function(error, featureCollection, response){
//         // console.log("UTC Offset: " + featureCollection.features[0].properties.ZONE);
//     });
// mapService.find()
//     .layers('18')
//     .searchText('Colorado')
//     .searchFields('GNIS_NAME')
//     .run(function(error, featureCollection, response){
//         // console.log('Found GNIS ID: ' + featureCollection.features[0].properties.GNIS_ID + ' for the state of ' + featureCollection.features[0].properties.STATE_NAME);
//     });

let imageServiceOptions : L.esri.ImageServiceOptions;
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

let featureLayerServiceOptions : L.esri.FeatureLayerServiceOptions;
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

// TODO:
// featureLayerService.query()
//   .within(latlngbounds)
//   .where("Direction = 'WEST'")
//   .run(function(error, featureCollection, response){
//     // console.log(featureCollection);
//   });

// let feature = {
//     type: 'Feature',
//     geometry: {
//         type: 'Point',
//         coordinates: [-122, 45]
//     },
//     properties: {
//         name: 'Hello World'
//     }
// };

// featureLayerService.addFeature(feature, function(error, response){
//     // console.log()
// });

// feature2 = {
//     type: 'Feature',
//     id: 2,
//     geometry: {
//         type: 'Point',
//         coordinates: [-122, 45]
//     },
//     properties: {
//         name: 'Hi I\'m Feature 2'
//     }
// };

// featureLayerService.updateFeature(feature2, function(error, response){
//     // console.log()
// });

// featureLayerService.deleteFeature(2, function(error, response){
//     // console.log()
// });

// featureLayerService
//     .query()
//     .where("name='Hello World'")
//     .run(function(error, featureCollection, response){
//     // console.log()
// });
