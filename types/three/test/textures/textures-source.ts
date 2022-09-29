import * as THREE from 'three';

// part of the code is taken from https://github.com/mrdoob/three.js/pull/22846

const imageLoader = new THREE.ImageLoader();
imageLoader.load('/path/to/image.png', image => {
    const source = new THREE.Source(image);

    const material = new THREE.MeshBasicMaterial();
    material.map = new THREE.Texture();
    material.map.source = source;
    material.map.offset.x = 0.5;
});
