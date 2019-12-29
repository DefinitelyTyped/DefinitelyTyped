/**
 * Typescript definition tests for heredatalens
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

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

let service: H.datalens.Service = new H.datalens.Service(serviceOptions);
service.request('method', 'endpoint', 'params', 'body', (result: any) => {}, (error: any) => {}).then((data: any) => {});
service.fetchQueryData('id', 'params', (result: any) => {}, (error: any) => {}).then((data: any) => {});
service.fetchQueryStats('id', 'query', (result: any) => {}, (error: any) => {}).then((data: any) => {});
service.fetchLayer('name', 'params', (result: any) => {}, (error: any) => {}).then((data: any) => {});
service.fetchLayerTile('name', 1, 2, 3, 'params', (result: any) => {}, (error: any) => {}).then((data: any) => {});
service.setTokens('token', 'refresh_token');
service.configure('app_id', 'app_code', true, true, new H.service.Url('scheme', 'host'));

let queryTileProvider = new H.datalens.QueryTileProvider(service, queryTileProviderOptions);
queryTileProvider.setQueryId('some id');
queryTileProvider.setQueryParams('some params');
queryTileProvider.setTileParamNames(queryTileProviderTileParamNames);

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
  dataToRows: (): H.datalens.RasterLayer.Row[] => [],
  rowToTilePoint: (): H.datalens.RasterLayer.TilePoint => ({ x: 1, y: 2 }),
  buffer: (): number => 1,
  renderTile: () => {}
};

let rasterLayer = new H.datalens.RasterLayer();
rasterLayer.redraw();

let heatmapLayerOptions: H.datalens.HeatmapLayer.Options = {
  dataToRows: (): H.datalens.HeatmapLayer.Row[] => [],
  rowToTilePoint: (): H.datalens.HeatmapLayer.TilePoint => ({ x: 1, y: 2, value: 5, count: 5 }),
  bandwidth: 5,
  valueRange: (): number[] => [],
  countRange: (): number[] => [],
  colorScale: (): string => '2',
  alphaScale: (): number => 1,
  aggregation: H.datalens.HeatmapLayer.Aggregation.SUM,
  inputScale: H.datalens.HeatmapLayer.InputScale.LINEAR
};

let heatmapLayer = new H.datalens.HeatmapLayer(queryTileProvider, heatmapLayerOptions);
heatmapLayer.getOptionsPerZoom(5);
heatmapLayer.dispose();
heatmapLayer.redraw();

let objectLayerOptions: H.datalens.ObjectLayer.Options = {
  dataToRows: (): H.datalens.ObjectLayer.Row[] => [],
  rowToMapObject: (): H.map.Object => new H.map.Object(),
  rowToStyle: (): H.datalens.ObjectLayer.ObjectStyleOptions => ({ icon: new H.map.Icon('x'), style: {}, arrows: {}, zIndex: 1 }),
  dataDomains: 2,
  clustering: { rowToDataPoint: (): H.clustering.DataPoint => ({ lat: 12.1, lng: 1.12, alt: 5, ctx: H.geo.AltitudeContext.GL, wt: 2, data: {} }),
                options: (): H.clustering.Provider.ClusteringOptions => ({}) }
};

let objectLayer = new H.datalens.ObjectLayer(provider, objectLayerOptions);
objectLayer.redraw();
objectLayer.updateObjectStyle(new H.map.Object(), { icon: new H.map.Icon('x'), style: {}, arrows: {}, zIndex: 1 });

let rawDataProviderOptions: H.datalens.RawDataProvider.Options = {
  dataUrl: 'url',
  dataToFeatures: (): H.datalens.RawDataProvider.Feature[] => [],
  featuresToRows: (): H.datalens.ObjectLayer.Row[] => []
};

let rawDataProvider = new H.datalens.RawDataProvider(rawDataProviderOptions);

let spatialTileProviderOptions: H.datalens.SpatialTileProvider.Options = {
  layerName: 'name',
  queryParams: 'params'
};

let spatialProvider: H.datalens.SpatialTileProvider = new H.datalens.SpatialTileProvider(service, spatialTileProviderOptions);

let spatialLayerOptions: H.datalens.SpatialLayer.Options = {
  dataToRows: (): H.datalens.SpatialLayer.Row[] => [],
  rowToSpatialId: (): string => 'asd',
  featureToSpatialId: (): string => 'asd',
  rowToStyle: (): any => { return; },
  defaultStyle: (): any => { return; },
  transformFeature: 1
};

let spatialLayer = new H.datalens.SpatialLayer(provider, spatialProvider, spatialLayerOptions);

let layer = new H.datalens.ObjectLayer(
  provider,
  {
    rowToMapObject: (cluster) => {
      return new H.map.Marker(cluster.getPosition());
    },
    clustering: {
      rowToDataPoint: (row) => {
        return new H.clustering.DataPoint(row.lat, row.lng, 1);
      },
      options: () => {
        return {
          eps: 25 * devicePixelRatio, // px
          minWeight: 20
        };
      }
    },
    rowToStyle: (cluster) => {
      const size = 32;

      const icon = H.datalens.ObjectLayer.createIcon([
        'svg',
        {
          viewBox: [-size, -size, 2 * size, 2 * size]
        },
        ['circle', {
          cx: 0,
          cy: 0,
          r: size,
          fill: cluster.isCluster() ? 'orange' : 'transparent'
        }]
      ], { size, crossOrigin: false });

      return { icon };
    }
  }
);
