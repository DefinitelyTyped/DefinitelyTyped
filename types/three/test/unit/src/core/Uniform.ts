import * as THREE from "three";

const unknownUniform = new THREE.Uniform("abc" as unknown);
const genericUniform = new THREE.Uniform<number>(4);
const inferredUniform = new THREE.Uniform(4);
