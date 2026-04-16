import * as THREE from "three";

const texture = new THREE.CubeDepthTexture(512);
texture.isCubeDepthTexture; // $ExpectType true
texture.isCubeTexture; // $ExpectType true
texture.images; // $ExpectType CubeDepthTextureImageData
