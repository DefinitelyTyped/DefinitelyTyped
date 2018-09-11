Cesium.buildModuleUrl.setBaseUrl('/assets/cesium/');

const viewer = new Cesium.Viewer('#cesium', {
    sceneMode: Cesium.SceneMode.COLUMBUS_VIEW,
    imageryProvider: new Cesium.IonImageryProvider({ assetId: 3845 }),
    baseLayerPicker: false,
    geocoder: false,
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
