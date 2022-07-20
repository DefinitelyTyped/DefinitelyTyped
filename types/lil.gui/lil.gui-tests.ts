import { GUI } from 'lil.gui';
import * as THREE from 'three';
const params = {
planeConstant: 1.1,
};
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.localClippingEnabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
const gui = new GUI();
gui.add(params, 'planeConstant' , 0, 1.1).step(0.1).name('plane constant');
