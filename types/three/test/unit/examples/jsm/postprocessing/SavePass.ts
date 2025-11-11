import * as THREE from "three";
import { SavePass } from "three/addons/postprocessing/SavePass.js";

let pass = new SavePass(); // $ExpectType SavePass
let rt = pass.renderTarget; // $ExpectType WebGLRenderTarget<Texture<unknown>>

pass = new SavePass(new THREE.WebGLRenderTarget(128, 128)); // $ExpectType SavePass
rt = pass.renderTarget; // $ExpectType WebGLRenderTarget<Texture<unknown>>
