import * as THREE from "three";

const material = new THREE.MeshBasicMaterial();

material.id; // $ExpectType number

// @ts-expect-error -- id is readonly
material.id = 0;
