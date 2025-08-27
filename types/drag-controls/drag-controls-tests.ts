import DragControls from "drag-controls";
import * as THREE from "three";

DragControls.install({ THREE });

const objects = [new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "#00ff00" }))];
const camera = new THREE.PerspectiveCamera(60, 1, 0.01, 1000);
const renderer = new THREE.WebGLRenderer();

const domElement = document.getElementsByTagName("canvas")[0];

const dragControls = new DragControls(objects, camera, domElement);

dragControls.deactivate();
