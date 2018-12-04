import * as THREE from 'three';
import TDSLoader = require('three-tds-loader');

const loader = new TDSLoader(THREE);

const onSuccess = (object3D: THREE.Object3D) => {};
const onProgress = () => {};
const onError = () => {};

loader.load(
    'folder/file.3ds',
    onSuccess,
    onProgress,
    onError
);
