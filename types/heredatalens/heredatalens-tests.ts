/**
 * Typescript definition tests for heredatalens
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import './index';


let service: H.datalens.Service;
let serviceOptions: H.datalens.Service.Options = {
  subDomain: 'sub',
  version: 'version',
  access_token: 'token',
  refresh_token: 'token',
  domainSharding: ['a', 'b'],
  baseUrl: 'url'
};

let queryTileProviderTileParamNames: H.datalens.QueryTileProvider.TileParamNames = {
  x: 'x',
  y: 'y',
  z: 'z'
};

let queryTileProviderOptions: H.datalens.QueryTileProvider.Options = {
  queryId: 'id',
  queryParams: 'params',
  tileParamNames: queryTileProviderTileParamNames
};

let queryTileProvider = new H.datalens.QueryTileProvider(service, queryTileProviderOptions);
queryTileProvider.setQueryId('some id');
queryTileProvider.setQueryParams('some params');
queryTileProvider.setTileParamNames(queryTileProviderTileParamNames);


service = new H.datalens.Service(serviceOptions);
service.request('method', 'endpoint', 'params', 'body', function(result) {}, function(error) {}).then(data => {});
service.fetchQueryData('id', 'params', function(result) {}, function(error) {}).then(data => {});
service.fetchQueryStats('id', 'query', function(result) {}, function(error) {}).then(data => {});
service.fetchLayer('name', 'params', function(result) {}, function(error) {}).then(data => {});
service.fetchLayerTile('name', 1, 2, 3, 'params', function(result) {}, function(error) {}).then(data => {});
service.setTokens('token', 'refresh_token');
service.configure('app_id', 'app_code', true, true, new H.service.Url('scheme', 'host'));


let provider = new H.datalens.Provider({ columns: ['1', '2'], rows: [[], []]});
provider.getData();
provider.setData({ columns: ['3', '4'], rows: [[], []]});


let queryProviderOptions: H.datalens.QueryProvider.Options = {
  queryId: 'id',
  queryParams: 'params'
};
let queryProvider = new H.datalens.QueryProvider({ columns: ['1', '2'], rows: [[], []]}, queryProviderOptions);
queryProvider.setQueryId('id');
queryProvider.setQueryParams('params');
queryProvider.reload();
queryProvider.getData();
queryProvider.setData({ columns: ['3', '4'], rows: [[], []]});


let rasterLayerOptions: H.datalens.RasterLayer.Options = {
  dataToRows: (): H.datalens.RasterLayer.Row[] => { return []; },
  rowToTilePoint: (): H.datalens.RasterLayer.TilePoint => { return { x: 1, y: 2 }; },
  buffer: (): number => { return 1; },
  renderTile: () => {}
};

let rasterLayer = new H.datalens.RasterLayer();
rasterLayer.redraw();


let heatmapLayerOptions: H.datalens.HeatmapLayer.Options = {
  dataToRows: (): H.datalens.HeatmapLayer.Row[] => { return []; },
  rowToTilePoint: (): H.datalens.HeatmapLayer.TilePoint => { return { x: 1, y: 2, value: 5, count: 5 }; },
  bandwidth: 5,
  valueRange: (): number[] => { return []; },
  countRange: (): number[] => { return []; },
  colorScale: (): string => { return '2'; },
  alphaScale: (): number => { return 1; },
  aggregation: H.datalens.HeatmapLayer.Aggregation.SUM,
  inputScale: H.datalens.HeatmapLayer.InputScale.LINEAR
};

let heatmapLayer = new H.datalens.HeatmapLayer(queryTileProvider, heatmapLayerOptions);
heatmapLayer.getOptionsPerZoom(5);
heatmapLayer.dispose();
heatmapLayer.redraw();


let objectLayerOptions: H.datalens.ObjectLayer.Options = {
  dataToRows: (): H.datalens.ObjectLayer.Row[] => { return []; },
  rowToMapObject: (): H.map.Object => { return new H.map.Object() },
  rowToStyle: (): H.datalens.ObjectLayer.ObjectStyleOptions => { return { icon: new H.map.Icon('x'), style: {}, arrows: {}, zIndex: 1 }; },
  dataDomains: 2,
  clustering: { rowToDataPoint: (): H.clustering.DataPoint => { return; }, options: (): H.clustering.Provider.ClusteringOptions => { return {}; } }
}

let objectLayer = new H.datalens.ObjectLayer(provider, objectLayerOptions);
objectLayer.redraw();
objectLayer.updateObjectStyle(new H.map.Object, { icon: new H.map.Icon('x'), style: {}, arrows: {}, zIndex: 1 });


let rawDataProviderOptions: H.datalens.RawDataProvider.Options = {
  dataUrl: 'url',
  dataToFeatures: (): H.datalens.RawDataProvider.Feature[] => { return []; },
  featuresToRows: (): H.datalens.ObjectLayer.Row[] => { return []; }
};

let rawDataProvider = new H.datalens.RawDataProvider(rawDataProviderOptions);


let spatialTileProviderOptions: H.datalens.SpatialTileProvider.Options = {
  layerName: 'name',
  queryParams: 'params'
};

let spatialProvider: H.datalens.SpatialTileProvider = new H.datalens.SpatialTileProvider(service, spatialTileProviderOptions);

let spatialLayerOptions: H.datalens.SpatialLayer.Options = {
  dataToRows: (): H.datalens.SpatialLayer.Row[] => { return []; },
  rowToSpatialId: (): string => { return 'asd'; },
  featureToSpatialId: (): string => { return 'asd'; },
  rowToStyle: (): any => { return; },
  defaultStyle: (): any => { return; },
  transformFeature: 1
};

let spatialLayer = new H.datalens.SpatialLayer(provider, spatialProvider, spatialLayerOptions);


