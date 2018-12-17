import * as THREE from '../../../index'

const onSuccess = (object3D: THREE.Object3D) => {};
const onProgress = (progress: ProgressEvent) => {};
const onError = (event: ErrorEvent) => {};

() => {
    new THREE.TDSLoader(THREE).load(
        'folder/file.3ds',
        onSuccess,
        onProgress,
        onError
    );
}