import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let guiData: {
    currentURL: string;
    drawFillShapes: boolean;
    drawStrokes: boolean;
    fillShapesWireframe: boolean;
    strokesWireframe: boolean;
};

init();
animate();

//

function init() {
    const container = document.getElementById('container') as HTMLElement;

    //

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 200);

    //

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    //

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.screenSpacePanning = true;

    //

    window.addEventListener('resize', onWindowResize);

    guiData = {
        currentURL: 'models/svg/tiger.svg',
        drawFillShapes: true,
        drawStrokes: true,
        fillShapesWireframe: false,
        strokesWireframe: false,
    };

    loadSVG(guiData.currentURL);
}

function loadSVG(url: string) {
    //

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xb0b0b0);

    //

    const helper = new THREE.GridHelper(160, 10);
    helper.rotation.x = Math.PI / 2;
    scene.add(helper);

    //

    const loader = new SVGLoader();

    loader.load(url, data => {
        const paths = data.paths;

        const group = new THREE.Group();
        group.scale.multiplyScalar(0.25);
        group.position.x = -70;
        group.position.y = 70;
        group.scale.y *= -1;

        paths.forEach(path => {
            const fillColor = path.userData!.style.fill;
            if (guiData.drawFillShapes && fillColor !== undefined && fillColor !== 'none') {
                const material = new THREE.MeshBasicMaterial({
                    color: new THREE.Color().setStyle(fillColor),
                    opacity: path.userData!.style.fillOpacity,
                    transparent: path.userData!.style.fillOpacity < 1,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                    wireframe: guiData.fillShapesWireframe,
                });

                const shapes = SVGLoader.createShapes(path);

                shapes.forEach(shape => {
                    const geometry = new THREE.ShapeGeometry(shape);
                    const mesh = new THREE.Mesh(geometry, material);

                    group.add(mesh);
                });
            }

            const strokeColor = path.userData!.style.stroke;

            if (guiData.drawStrokes && strokeColor !== undefined && strokeColor !== 'none') {
                const material = new THREE.MeshBasicMaterial({
                    color: new THREE.Color().setStyle(strokeColor),
                    opacity: path.userData!.style.strokeOpacity,
                    transparent: path.userData!.style.strokeOpacity < 1,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                    wireframe: guiData.strokesWireframe,
                });

                for (let j = 0, jl = path.subPaths.length; j < jl; j++) {
                    const subPath = path.subPaths[j];

                    const geometry = SVGLoader.pointsToStroke(subPath.getPoints(), path.userData!.style);

                    if (geometry) {
                        const mesh = new THREE.Mesh(geometry, material);

                        group.add(mesh);
                    }
                }
            }
        });

        scene.add(group);
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    renderer.render(scene, camera);
}
