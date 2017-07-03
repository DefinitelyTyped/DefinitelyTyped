import L = require('esri-leaflet');

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

