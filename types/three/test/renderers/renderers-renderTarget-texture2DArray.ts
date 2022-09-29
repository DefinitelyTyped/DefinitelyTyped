import * as THREE from 'three';

import { unzipSync } from 'three/examples/jsm/libs/fflate.module.min';
import WEBGL from 'three/examples/jsm/capabilities/WebGL';

const vertextPostProcessingShader = /* glsl */ `
	out vec2 vUv;

    void main()
    {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
`;

const fragmentPostProcessingShader = /* glsl */ `
    precision highp sampler2DArray;
	precision mediump float;

	in vec2 vUv;

	uniform sampler2DArray uTexture;
	uniform int uDepth;
	uniform float uSampleLeft;
	uniform float uSampleWidth;

	void main()
	{
		float voxel = texture(uTexture, vec3( vUv, uDepth )).r;
		gl_FragColor.r = (voxel - uSampleLeft) / uSampleWidth;
	}
`;

const vertexShader = /* glsl */ `
    uniform vec2 size;
	out vec2 vUv;

	void main() {

		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		// Convert position.xy to 1.0-0.0

		vUv.xy = position.xy / size + 0.5;
		vUv.y = 1.0 - vUv.y; // original data is upside down

	}
`;

const fragmentShader = /* glsl */ `
    precision highp float;
	precision highp int;
	precision highp sampler2DArray;

	uniform sampler2DArray diffuse;
	in vec2 vUv;
	uniform int depth;

	void main() {

		vec4 color = texture( diffuse, vec3( vUv, depth ) );

		// lighten a bit
		gl_FragColor = vec4( color.rrr * 1.5, 1.0 );
	}
`;

if (!WEBGL.isWebGL2Available()) {
    document.body.appendChild(WEBGL.getWebGL2ErrorMessage());
}

const DIMENSIONS = {
    width: 256,
    height: 256,
    depth: 109,
};

const App = {
    mousePrevious: new THREE.Vector2(),
};

/** Post-processing objects */

const postProcessScene = new THREE.Scene();
const postProcessCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

const renderTarget = new THREE.WebGLArrayRenderTarget(DIMENSIONS.width, DIMENSIONS.height, DIMENSIONS.depth);
renderTarget.texture.format = THREE.RedFormat;

const postProcessMaterial = new THREE.ShaderMaterial({
    uniforms: {
        uTexture: { value: null },
        uDepth: { value: 55 },
        uSampleLeft: { value: 0 },
        uSampleWidth: { value: 1.0 },
    },
    vertexShader: vertextPostProcessingShader,
    fragmentShader: fragmentPostProcessingShader,
});

let depthStep = 0.4;
const planeWidth = 50;
const planeHeight = 50;

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let mesh: THREE.Mesh;
let renderer: THREE.WebGLRenderer;

init();

function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 70;

    scene = new THREE.Scene();

    /** Post-processing scene */

    const planeGeometry = new THREE.PlaneGeometry(2, 2);
    const screenQuad = new THREE.Mesh(planeGeometry, postProcessMaterial);
    postProcessScene.add(screenQuad);

    // 2D Texture array is available on WebGL 2.0

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    renderer.domElement.addEventListener('mousedown', onMouseDown);

    window.addEventListener('resize', onWindowResize, false);

    // width 256, height 256, depth 109, 8-bit, zip archived raw data

    new THREE.FileLoader().setResponseType('arraybuffer').load('textures/3d/head256x256x109.zip', data => {
        const zip = unzipSync(new Uint8Array(data as ArrayBuffer));
        const array = new Uint8Array(zip['head256x256x109'].buffer);

        const texture = new THREE.DataArrayTexture(array, DIMENSIONS.width, DIMENSIONS.height, DIMENSIONS.depth);
        texture.format = THREE.RedFormat;
        texture.type = THREE.UnsignedByteType;

        const material = new THREE.ShaderMaterial({
            uniforms: {
                diffuse: { value: renderTarget.texture },
                depth: { value: 55 },
                size: { value: new THREE.Vector2(planeWidth, planeHeight) },
            },
            vertexShader,
            fragmentShader,
        });

        const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);

        mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        postProcessMaterial.uniforms.uTexture.value = texture;

        animate();
    });
}

function onMouseDown(e: MouseEvent) {
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('mousemove', onMouseMove);

    App.mousePrevious.set(e.clientX, e.clientY);
}

function onMouseUp() {
    renderer.domElement.removeEventListener('mousemove', onMouseMove);
    renderer.domElement.removeEventListener('mouseup', onMouseUp);
}

function onMouseMove(e: MouseEvent) {
    const x = e.clientX;
    const y = e.clientY;
    const deltaX = (x - App.mousePrevious.x) * 0.001;
    const deltaY = (y - App.mousePrevious.y) * 0.001;
    postProcessMaterial.uniforms.uSampleLeft.value += deltaX;
    postProcessMaterial.uniforms.uSampleWidth.value += deltaY;

    App.mousePrevious.set(x, y);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    let value = (mesh.material as THREE.ShaderMaterial).uniforms['depth'].value;

    value += depthStep;

    if (value > 109.0 || value < 0.0) {
        if (value > 1.0) value = 109.0 * 2.0 - value;
        if (value < 0.0) value = -value;

        depthStep = -depthStep;
    }

    (mesh.material as THREE.ShaderMaterial).uniforms['depth'].value = value;

    render();
}

/**
 * Renders the 2D array into the render target `renderTarget`.
 */
function renderToArrayTexture() {
    const layer = Math.floor((mesh.material as THREE.ShaderMaterial).uniforms['depth'].value);
    postProcessMaterial.uniforms.uDepth.value = layer;
    renderer.setRenderTarget(renderTarget, layer);
    renderer.render(postProcessScene, postProcessCamera);
    renderer.setRenderTarget(null);
}

function render() {
    // Step 1 - Render the input DataArrayTexture into a
    // DataArrayTexture render target.
    renderToArrayTexture();

    // Step 2 - Renders the scene containing the plane with a material
    // sampling the render target texture.
    renderer.render(scene, camera);
}
