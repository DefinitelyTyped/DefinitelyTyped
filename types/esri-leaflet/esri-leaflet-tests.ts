import L = require('esri-leaflet');

let latlng : L.LatLng = new L.LatLng(0, 0);;
let latlngbounds : L.LatLngBounds = new L.LatLngBounds(latlng, latlng);

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
tiledMapLayer.metadata((err, metadata) => {});

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
  layers: [1,2,3],
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
  layers: [1,2,3],
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
  layers: [1,2,3],
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
  function(err, featureCollection, response){
    var count = featureCollection.features.length;
    return (count) ? count + ' features' : false;
});

dynamicMapLayer.metadata(function(error, metadata){
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