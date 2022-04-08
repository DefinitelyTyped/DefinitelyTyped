Cesium.buildModuleUrl.setBaseUrl('/assets/cesium/');

const viewer = new Cesium.Viewer('#cesium', {
    sceneMode: Cesium.SceneMode.COLUMBUS_VIEW,
    imageryProvider: new Cesium.IonImageryProvider({ assetId: 3845 }),
    baseLayerPicker: false,
    geocoder: false,
});

// Mapbox tile provider
const mapboxImagery = new Cesium.MapboxImageryProvider({
    mapId: 'mapbox.streets',
    accessToken: 'thisIsMyAccessToken'
});
// Mapbox style provider
const mapboxStyle = new Cesium.MapboxStyleImageryProvider({
    styleId: 'streets-v11',
    accessToken: 'thisIsMyAccessToken'
});

const midnight = Cesium.JulianDate.fromDate(new Date(2018, 5, 14));
const prop = new Cesium.SampledPositionProperty();

const pos = Cesium.Cartesian3.fromDegrees(1, 2, 3);
const time = Cesium.JulianDate.addSeconds(midnight, 12345, new Cesium.JulianDate());
prop.addSample(time, pos);
viewer.entities.add(new Cesium.Entity({
    position: pos,
    point: new Cesium.PointGraphics({
        color: Cesium.Color.fromCssColorString('#123123'),
        pixelSize: 2
    })
}));

const objStart = Cesium.JulianDate.addSeconds(midnight, 12340, new Cesium.JulianDate());
const objStop = Cesium.JulianDate.addSeconds(midnight, 12350, new Cesium.JulianDate());

const entity = new Cesium.Entity({
    name: 'TEST',
    availability: new Cesium.TimeIntervalCollection([
        new Cesium.TimeInterval({
            start: objStart,
            stop: objStop
        })
    ]),
    position: prop,
    orientation: new Cesium.VelocityOrientationProperty(prop),
    path: new Cesium.PathGraphics({
        resolution: 5,
        width: 3,
        material: new Cesium.ColorMaterialProperty(Cesium.Color.fromCssColorString('#223344')),
        leadTime: 0
    }),
    model: new Cesium.ModelGraphics({
        uri: 'http://assets.agi.com/models/rv1.gltf',
        minimumPixelSize: 48
    })
});
viewer.entities.add(entity);

const hpr = new Cesium.HeadingPitchRoll(1.0, 2.2, 3.4);
const quat: Cesium.Quaternion = Cesium.Quaternion.fromHeadingPitchRoll(hpr);
const matrix: Cesium.Matrix3 = Cesium.Matrix3.fromHeadingPitchRoll(hpr);

const webgl = Cesium.WebGLConstants.ALPHA;

viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);

const billboard = new Cesium.BillboardGraphics({
    heightReference: new Cesium.ConstantProperty(Cesium.HeightReference.CLAMP_TO_GROUND),
});

const label = new Cesium.LabelGraphics({
    heightReference: new Cesium.ConstantProperty(Cesium.HeightReference.CLAMP_TO_GROUND),
});

viewer.scene.globe.tileLoadProgressEvent.addEventListener((progress: number) => progress);
viewer.scene.globe.terrainProviderChanged.addEventListener((provider: Cesium.TerrainProvider) => provider);

// Cesium3DTileset
const tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: 'http://localhost:8002/tilesets/Seattle/tileset.json',
    skipLevelOfDetail: true,
    baseScreenSpaceError: 1024,
    skipScreenSpaceErrorFactor: 16,
    skipLevels: 1,
    immediatelyLoadDesiredLevelOfDetail: false,
    loadSiblings: false,
    cullWithChildrenBounds: true
}));

// Cesium3DTilesetGraphics
const options = {
    uri: '0',
    show: false,
    maximumScreenSpaceError: 2
};

const tilesetModel = new Cesium.Cesium3DTilesetGraphics(options);

const polygonGraphics = new Cesium.PolygonGraphics({
    hierarchy: Cesium.Cartesian3.fromDegreesArray([
        -108.0,
        42.0,
        -100.0,
        42.0,
        -104.0,
        40.0,
    ]),
});

const polygonHierarchyProperty: Cesium.Property = polygonGraphics.hierarchy;

const polylineGraphics = new Cesium.PolylineGraphics({
    positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -75,
        42,
        250000,
        -125,
        42,
        250000,
    ]),
});

const polylinePositionsProperty: Cesium.Property = polylineGraphics.positions;
