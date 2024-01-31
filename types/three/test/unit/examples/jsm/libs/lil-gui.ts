import * as THREE from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);

const layers = {
    "Toggle Name"() {
        camera.layers.toggle(0);
    },
    "Toggle Mass"() {
        camera.layers.toggle(1);
    },
    "Enable All"() {
        camera.layers.enableAll();
    },

    "Disable All"() {
        camera.layers.disableAll();
    },
};

const gui = new GUI();

gui.add(layers, "Toggle Name");
gui.add(layers, "Toggle Mass");
gui.add(layers, "Enable All");
gui.add(layers, "Disable All");
