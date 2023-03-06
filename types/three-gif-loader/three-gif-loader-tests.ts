import * as THREE from 'three';
import GifLoader from 'three-gif-loader';

// instantiate a loader
const loader = new GifLoader();

// load a image resource
const texture = loader.load(
    // resource URL
    'textures/animated-sparkles.gif',

    // onLoad callback
    reader => {
        // You probably don't need to set onLoad, as it is handled for you. However,
        // if you want to manipulate the reader, you can do so here:
        console.log(reader.numFrames());
    },

    // onProgress callback
    xhr => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },

    // onError callback
    () => {
        console.error('An error happened.');
    },
);
const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
});
