import * as THREE from 'three';
import { SavePass } from 'three/examples/jsm/postprocessing/SavePass';

let pass = new SavePass(); // $ExpectType SavePass
let rt = pass.renderTarget; // $ExpectType WebGLRenderTarget

pass = new SavePass(new THREE.WebGLRenderTarget(128, 128)); // $ExpectType SavePass
rt = pass.renderTarget; // $ExpectType WebGLRenderTarget
