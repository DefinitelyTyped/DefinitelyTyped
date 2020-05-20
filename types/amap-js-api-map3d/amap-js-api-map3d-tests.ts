/**
 * preset.ts
 */

declare const map: AMap.Map;
declare const lnglat: AMap.LngLat;
declare const size: AMap.Size;
declare const lnglatTuple: [number, number];
declare const pixel: AMap.Pixel;
declare const layer: AMap.Layer;
declare const ambientLight: AMap.Lights.AmbientLight;
declare const directionLight: AMap.Lights.DirectionLight;
declare const line: AMap.Object3D.Line;
declare const mesh: AMap.Object3D.Mesh;
declare const object3d: AMap.Object3D;
declare const geometry: AMap.Geometry3D.Mesh;

/**
 * lights.ts
 */

// $ExpectType AmbientLight
const testAmbientLight = new AMap.Lights.AmbientLight([0.1, 0, 0.1], 1);

// $ExpectType void
testAmbientLight.setColor([0.1, 1, 0.5]);

// $ExpectType void
testAmbientLight.setIntensity(1);

// $ExpectType DirectionLight
const testDirectionLight = new AMap.Lights.DirectionLight([1, 2, 3], [1, 2, 3], 1);

// $ExpectType void
testDirectionLight.setColor([1, 2, 3]);

// $ExpectType void
testDirectionLight.setIntensity(1);

// $ExpectType void
testDirectionLight.setDirection([1, 2, 3]);

/**
 * map3d.ts
 */

// $ExpectType Object3DResult | null
map.getObject3DByContainerPos(pixel);

// $ExpectType Object3DResult | null
const containserPos = map.getObject3DByContainerPos(pixel, [layer], true);
if (containserPos) {
    // $ExpectType number
    containserPos.index;
    // $ExpectType Vector3
    containserPos.point;
    // $ExpectType number
    containserPos.distance;
    // $ExpectType Object3D
    containserPos.object;
} else {
    // $ExpectType null
    containserPos;
}

map.AmbientLight = ambientLight;
map.AmbientLight = undefined;

map.DirectionLight = directionLight;
map.DirectionLight = undefined;

/**
 * object3d-group.ts
 */

// $ExpectType Object3DGroup<Object3D>
const testObject3dGroup1 = new AMap.Object3DGroup();
// $ExpectType Object3DGroup<Mesh>
const testObject3dGroup2 = new AMap.Object3DGroup<AMap.Object3D.Mesh>();

// $ExpectType Object3D[]
testObject3dGroup1.children;
// $ExpectType Mesh[]
testObject3dGroup2.children;

// $ExoectType void
testObject3dGroup1.add(line);
// $ExoectType void
testObject3dGroup1.add(mesh);
// $ExoectType void
testObject3dGroup2.add(mesh);
// $ExpectError
testObject3dGroup2.add(line);

// $ExoectType void
testObject3dGroup1.remove(line);
// $ExoectType void
testObject3dGroup1.remove(mesh);
// $ExoectType void
testObject3dGroup2.remove(mesh);
// $ExpectError
testObject3dGroup2.remove(line);

/**
 * object3d-Layer.ts
 */

// $ExpectType Object3DLayer
new AMap.Object3DLayer();
// $ExpectType Object3DLayer
new AMap.Object3DLayer({});
// $ExpectType Object3DLayer
const testObject3DLayer = new AMap.Object3DLayer({
    map,
    visible: true,
    opacity: 0.1,
    zIndex: 2,
    zooms: [1, 2]
});

// $ExpectType void
testObject3DLayer.setMap(null);
// $ExpectType void
testObject3DLayer.setMap(map);

// $ExpectType Map | null | undefined
testObject3DLayer.getMap();

// $ExpectType void
testObject3DLayer.hide();

// $ExpectType void
testObject3DLayer.show();

// $ExpectType void
testObject3DLayer.setOpacity(1);

// $ExpectType number
testObject3DLayer.getOpacity();

// $ExpectType void
testObject3DLayer.setzIndex(1);

// $ExpectType number
testObject3DLayer.getzIndex();

// $ExpectType [number, number]
testObject3DLayer.getZooms();

// $ExpectType void
testObject3DLayer.add(object3d);

// $ExpectType void
testObject3DLayer.remove(object3d);

// $ExpectType void
testObject3DLayer.clear();

// $ExpectType void
testObject3DLayer.reDraw();

/**
 * vector3.ts
 */

// $ExpectType Vector3
const testVector = new AMap.Vector3([1, 2, 3]);
// $ExpectType Vector3
new AMap.Vector3(testVector);

// $ExpectType [number, number, number]
testVector.elements;

// $ExpectType void
testVector.set(1, 2, 3);

// $ExpectType number
testVector.dot();

// $ExpectType Vector3
testVector.clone();

// $ExpectType Vector3
testVector.add(testVector);
// $ExpectType Vector3
testVector.add([1, 2, 3]);

// $ExpectType Vector3
testVector.sub(testVector);
// $ExpectType Vector3
testVector.sub([1, 2, 3]);

// $ExpectType Vector3
testVector.addVectors(testVector, testVector);

// $ExpectType Vector3
testVector.subVectors(testVector, testVector);

// $ExpectType Vector3
testVector.crossVectors(testVector, testVector);

// $ExpectType Vector3
testVector.normalize();

// $ExpectType number
testVector.length();

/**
 * object3d/mesh.ts
 */

// $ExpectType Mesh
const testMesh = new AMap.Object3D.Mesh();

// $ExpectError
testMesh.geometry = geometry;

// $ExpectType number[]
testMesh.geometry.vertices;
// $ExpectError
testMesh.geometry.vertices = [];
testMesh.geometry.vertices.shift();

// $ExpectType number[]
testMesh.geometry.vertexColors;
// $ExpectError
testMesh.geometry.vertexColors = [];
testMesh.geometry.vertexColors.shift();

// $ExpectType number[]
testMesh.geometry.vertexUVs;
// $ExpectError
testMesh.geometry.vertexUVs = [];
testMesh.geometry.vertexUVs.shift();

// $ExpectType number[]
testMesh.geometry.faces;
// $ExpectError
testMesh.geometry.faces = [];
testMesh.geometry.faces.shift();

// $ExpectType number[]
testMesh.geometry.textureIndices;
// $ExpectError
testMesh.geometry.textureIndices = [];
testMesh.geometry.textureIndices.shift();

// $ExpectType (string | HTMLCanvasElement)[]
testMesh.textures;

// $ExpectType boolean
testMesh.needUpdate;

// $ExpectType boolean
testMesh.transparent;

// $ExpectType boolean
testMesh.DEPTH_TEST;

// $ExpectType void
testMesh.reDraw();

/**
 * object3d/meshAcceptLights.ts
 */

// $ExpectType MeshAcceptLights
const testMeshAcceptLights = new AMap.Object3D.MeshAcceptLights();

// $ExpectError
testMeshAcceptLights.geometry = geometry;

// $ExpectType number[]
testMeshAcceptLights.geometry.vertices;
// $ExpectError
testMeshAcceptLights.geometry.vertices = [];
testMeshAcceptLights.geometry.vertices.shift();

// $ExpectType number[]
testMeshAcceptLights.geometry.vertexColors;
// $ExpectError
testMeshAcceptLights.geometry.vertexColors = [];
testMeshAcceptLights.geometry.vertexColors.shift();

// $ExpectType number[]
testMeshAcceptLights.geometry.vertexUVs;
// $ExpectError
testMeshAcceptLights.geometry.vertexUVs = [];
testMeshAcceptLights.geometry.vertexUVs.shift();

// $ExpectType number[]
testMeshAcceptLights.geometry.faces;
// $ExpectError
testMeshAcceptLights.geometry.faces = [];
testMeshAcceptLights.geometry.faces.shift();

// $ExpectType number[]
testMeshAcceptLights.geometry.textureIndices;
// $ExpectError
testMeshAcceptLights.geometry.textureIndices = [];
testMeshAcceptLights.geometry.textureIndices.shift();

// $ExpectType number[]
testMeshAcceptLights.geometry.vertexNormals;
// $ExpectError
testMeshAcceptLights.geometry.vertexNormals = [];
testMeshAcceptLights.geometry.vertexNormals.shift();

// $ExpectType (string | HTMLCanvasElement)[]
testMeshAcceptLights.textures;

// $ExpectType boolean
testMeshAcceptLights.needUpdate;

// $ExpectType boolean
testMeshAcceptLights.transparent;

// $ExpectType boolean
testMeshAcceptLights.DEPTH_TEST;

// $ExpectType void
testMeshAcceptLights.reDraw();

/**
 * object3d/meshLine.ts
 */

// $ExpectError
new AMap.Object3D.MeshLine();
// $ExpectError
new AMap.Object3D.MeshLine({});
// $ExpectType MeshLine
const testMeshLine = new AMap.Object3D.MeshLine({
    path: [lnglat],
    width: 1,
    height: 1,
    color: 'red'
});
// $ExpectType MeshLine
new AMap.Object3D.MeshLine({
    path: [lnglat],
    color: [0, 0, 1, 1]
});
// $ExpectType MeshLine
new AMap.Object3D.MeshLine({
    path: [[1, 2]]
});
// $ExpectType MeshLine
new AMap.Object3D.MeshLine({
    path: [lnglat],
    unit: 'meter'
});
// $ExpectType MeshLine
new AMap.Object3D.MeshLine({
    path: [pixel],
    unit: 'px'
});
// $ExpectError
new AMap.Object3D.MeshLine({
    path: [lnglat],
    unit: 'px'
});
// $ExpectError
new AMap.Object3D.MeshLine({
    path: [pixel],
    unit: 'meter'
});

// $ExpectType number[]
testMeshLine.geometry.vertices;
// $ExpectError
testMeshLine.geometry.vertices = [];
testMeshLine.geometry.vertices.shift();

// $ExpectType number[]
testMeshLine.geometry.vertexUVs;
// $ExpectError
testMeshLine.geometry.vertexUVs = [];
testMeshLine.geometry.vertexUVs.shift();

// $ExpectType number[]
testMeshLine.geometry.vertexColors;
// $ExpectError
testMeshLine.geometry.vertexColors = [];
testMeshLine.geometry.vertexColors.shift();

// $ExpectType number[]
testMeshLine.geometry.vertexColors;
// $ExpectError
testMeshLine.geometry.vertexColors = [];
testMeshLine.geometry.vertexColors.shift();

// $ExpectType number[]
testMeshLine.geometry.vertexIndices;
// $ExpectError
testMeshLine.geometry.vertexIndices = [];
testMeshLine.geometry.vertexIndices.shift();

// $ExpectType number[]
testMeshLine.geometry.directions;
// $ExpectError
testMeshLine.geometry.directions = [];
testMeshLine.geometry.directions.shift();

// $ExpectType number[]
testMeshLine.geometry.textureIndices;
// $ExpectError
testMeshLine.geometry.textureIndices = [];
testMeshLine.geometry.textureIndices.shift();

// $ExpectType number
testMeshLine.width;

// $ExpectType void
testMeshLine.setPath([lnglat]);
// $ExpectType void
testMeshLine.setPath([lnglatTuple]);
// $ExpectType void
testMeshLine.setPath([pixel]);

// $ExpectType void
testMeshLine.setWidth(10);

// $ExpectType void
testMeshLine.setHeight(10);

// $ExpectType void
testMeshLine.setColor('red');

/**
 * object3d/prism.ts
 */

// $ExpectError
new AMap.Object3D.Prism();
// $ExpectError
new AMap.Object3D.Prism({});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: 'red',
    height: 1,
    color2: 'blue'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [pixel],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [[lnglat]],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [[pixel]],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [[lnglatTuple]],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: ['red']
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: [1, 1, 1, 1]
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: [[1, 1, 1, 1]]
});
