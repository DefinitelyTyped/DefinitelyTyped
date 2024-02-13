import * as THREE from "three";

import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";

const color1 = new LineMaterial({
    color: new THREE.Color("blue"),
});

const color2 = new LineMaterial({
    color: "red",
});

const color3 = new LineMaterial({
    color: 0xaabbcc,
});
