import * as THREE from 'three';

import { GPUComputationRenderer, Variable } from 'three/examples/jsm/misc/GPUComputationRenderer';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise';

const heightmapFragmentShader = /* glsl */ `
	#include <common>

	uniform vec2 mousePos;
	uniform float mouseSize;
	uniform float viscosityConstant;
	uniform float heightCompensation;

	void main()	{

	vec2 cellSize = 1.0 / resolution.xy;

	vec2 uv = gl_FragCoord.xy * cellSize;

	// heightmapValue.x == height from previous frame
	// heightmapValue.y == height from penultimate frame
	// heightmapValue.z, heightmapValue.w not used
	vec4 heightmapValue = texture2D( heightmap, uv );

	// Get neighbours
	vec4 north = texture2D( heightmap, uv + vec2( 0.0, cellSize.y ) );
	vec4 south = texture2D( heightmap, uv + vec2( 0.0, - cellSize.y ) );
	vec4 east = texture2D( heightmap, uv + vec2( cellSize.x, 0.0 ) );
	vec4 west = texture2D( heightmap, uv + vec2( - cellSize.x, 0.0 ) );

	// https://web.archive.org/web/20080618181901/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm

	float newHeight = ( ( north.x + south.x + east.x + west.x ) * 0.5 - heightmapValue.y ) * viscosityConstant;

	// Mouse influence
	float mousePhase = clamp( length( ( uv - vec2( 0.5 ) ) * BOUNDS - vec2( mousePos.x, - mousePos.y ) ) * PI / mouseSize, 0.0, PI );
	newHeight += ( cos( mousePhase ) + 1.0 ) * 0.28;

	heightmapValue.y = heightmapValue.x;
	heightmapValue.x = newHeight;

	gl_FragColor = heightmapValue;

}
`;

const smoothFragmentShader = /* glsl */ `
			uniform sampler2D smoothTexture;

void main()	{

	vec2 cellSize = 1.0 / resolution.xy;

	vec2 uv = gl_FragCoord.xy * cellSize;

	// Computes the mean of texel and 4 neighbours
	vec4 textureValue = texture2D( smoothTexture, uv );
	textureValue += texture2D( smoothTexture, uv + vec2( 0.0, cellSize.y ) );
	textureValue += texture2D( smoothTexture, uv + vec2( 0.0, - cellSize.y ) );
	textureValue += texture2D( smoothTexture, uv + vec2( cellSize.x, 0.0 ) );
	textureValue += texture2D( smoothTexture, uv + vec2( - cellSize.x, 0.0 ) );

	textureValue /= 5.0;

	gl_FragColor = textureValue;

}
`;

const readWaterLevelFragmentShader = /* glsl */ `
uniform vec2 point1;

			uniform sampler2D levelTexture;

			// Integer to float conversion from https://stackoverflow.com/questions/17981163/webgl-read-pixels-from-floating-point-render-target

			float shift_right( float v, float amt ) {

				v = floor( v ) + 0.5;
				return floor( v / exp2( amt ) );

			}

			float shift_left( float v, float amt ) {

				return floor( v * exp2( amt ) + 0.5 );

			}

			float mask_last( float v, float bits ) {

				return mod( v, shift_left( 1.0, bits ) );

			}

			float extract_bits( float num, float from, float to ) {

				from = floor( from + 0.5 ); to = floor( to + 0.5 );
				return mask_last( shift_right( num, from ), to - from );

			}

			vec4 encode_float( float val ) {
				if ( val == 0.0 ) return vec4( 0, 0, 0, 0 );
				float sign = val > 0.0 ? 0.0 : 1.0;
				val = abs( val );
				float exponent = floor( log2( val ) );
				float biased_exponent = exponent + 127.0;
				float fraction = ( ( val / exp2( exponent ) ) - 1.0 ) * 8388608.0;
				float t = biased_exponent / 2.0;
				float last_bit_of_biased_exponent = fract( t ) * 2.0;
				float remaining_bits_of_biased_exponent = floor( t );
				float byte4 = extract_bits( fraction, 0.0, 8.0 ) / 255.0;
				float byte3 = extract_bits( fraction, 8.0, 16.0 ) / 255.0;
				float byte2 = ( last_bit_of_biased_exponent * 128.0 + extract_bits( fraction, 16.0, 23.0 ) ) / 255.0;
				float byte1 = ( sign * 128.0 + remaining_bits_of_biased_exponent ) / 255.0;
				return vec4( byte4, byte3, byte2, byte1 );
			}

			void main()	{

				vec2 cellSize = 1.0 / resolution.xy;

				float waterLevel = texture2D( levelTexture, point1 ).x;

				vec2 normal = vec2(
					( texture2D( levelTexture, point1 + vec2( - cellSize.x, 0 ) ).x - texture2D( levelTexture, point1 + vec2( cellSize.x, 0 ) ).x ) * WIDTH / BOUNDS,
					( texture2D( levelTexture, point1 + vec2( 0, - cellSize.y ) ).x - texture2D( levelTexture, point1 + vec2( 0, cellSize.y ) ).x ) * WIDTH / BOUNDS );

				if ( gl_FragCoord.x < 1.5 ) {

					gl_FragColor = encode_float( waterLevel );

				} else if ( gl_FragCoord.x < 2.5 ) {

					gl_FragColor = encode_float( normal.x );

				} else if ( gl_FragCoord.x < 3.5 ) {

					gl_FragColor = encode_float( normal.y );

				} else {

					gl_FragColor = encode_float( 0.0 );

				}

			}
`;

const waterVertexShader = /* glsl */ `
			uniform sampler2D heightmap;

#define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vec2 cellSize = vec2( 1.0 / WIDTH, 1.0 / WIDTH );

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	// # include <beginnormal_vertex>
	// Compute normal from heightmap
	vec3 objectNormal = vec3(
		( texture2D( heightmap, uv + vec2( - cellSize.x, 0 ) ).x - texture2D( heightmap, uv + vec2( cellSize.x, 0 ) ).x ) * WIDTH / BOUNDS,
		( texture2D( heightmap, uv + vec2( 0, - cellSize.y ) ).x - texture2D( heightmap, uv + vec2( 0, cellSize.y ) ).x ) * WIDTH / BOUNDS,
		1.0 );
	//<beginnormal_vertex>

	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	//# include <begin_vertex>
	float heightValue = texture2D( heightmap, uv ).x;
	vec3 transformed = vec3( position.x, position.y, heightValue );
	//<begin_vertex>

	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>

}`;

// Texture width for simulation
const WIDTH = 128;

// Water size in system units
const BOUNDS = 512;
const BOUNDS_HALF = BOUNDS * 0.5;

let container: HTMLDivElement;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let mouseMoved = false;
const mouseCoords = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

let waterMesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
let meshRay: THREE.Mesh;
let gpuCompute: GPUComputationRenderer;
let heightmapVariable: Variable;
let waterUniforms: {
    [uniform: string]: THREE.IUniform;
};
let smoothShader: THREE.ShaderMaterial;
let readWaterLevelShader: THREE.ShaderMaterial;
let readWaterLevelRenderTarget: THREE.WebGLRenderTarget;
let readWaterLevelImage: Uint8Array;
const waterNormal = new THREE.Vector3();

const NUM_SPHERES = 5;
const spheres: Array<THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial>> = [];
let spheresEnabled = true;

const simplex = new SimplexNoise();

init();
animate();

function init() {
    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.set(0, 200, 350);
    camera.lookAt(0, 0, 0);

    scene = new THREE.Scene();

    const sun = new THREE.DirectionalLight(0xffffff, 1.0);
    sun.position.set(300, 400, 175);
    scene.add(sun);

    const sun2 = new THREE.DirectionalLight(0x40a040, 0.6);
    sun2.position.set(-100, 350, -200);
    scene.add(sun2);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    container.style.touchAction = 'none';
    container.addEventListener('pointermove', onPointerMove);

    document.addEventListener('keydown', event => {
        // W Pressed: Toggle wireframe
        if (event.keyCode === 87) {
            waterMesh.material.wireframe = !waterMesh.material.wireframe;
            waterMesh.material.needsUpdate = true;
        }
    });

    window.addEventListener('resize', onWindowResize);

    const effectController = {
        mouseSize: 20.0,
        viscosity: 0.98,
        spheresEnabled,
    };

    const valuesChanger = () => {
        heightmapVariable.material.uniforms['mouseSize'].value = effectController.mouseSize;
        heightmapVariable.material.uniforms['viscosityConstant'].value = effectController.viscosity;
        spheresEnabled = effectController.spheresEnabled;
        for (let i = 0; i < NUM_SPHERES; i++) {
            if (spheres[i]) {
                spheres[i].visible = spheresEnabled;
            }
        }
    };

    initWater();

    createSpheres();

    valuesChanger();
}

function initWater() {
    const materialColor = 0x0040c0;

    const geometry = new THREE.PlaneGeometry(BOUNDS, BOUNDS, WIDTH - 1, WIDTH - 1);

    // material: make a THREE.ShaderMaterial clone of THREE.MeshPhongMaterial, with customized vertex shader
    const material = new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.merge([
            THREE.ShaderLib['phong'].uniforms,
            {
                heightmap: { value: null },
            },
        ]),
        vertexShader: waterVertexShader,
        fragmentShader: THREE.ShaderChunk['meshphong_frag'],
    });

    material.lights = true;

    // Sets the uniforms with the material values
    material.uniforms['diffuse'].value = new THREE.Color(materialColor);
    material.uniforms['specular'].value = new THREE.Color(0x111111);
    material.uniforms['shininess'].value = Math.max(50, 1e-4);
    material.uniforms['opacity'].value = material.opacity;

    // Defines
    material.defines.WIDTH = WIDTH.toFixed(1);
    material.defines.BOUNDS = BOUNDS.toFixed(1);

    waterUniforms = material.uniforms;

    waterMesh = new THREE.Mesh(geometry, material);
    waterMesh.rotation.x = -Math.PI / 2;
    waterMesh.matrixAutoUpdate = false;
    waterMesh.updateMatrix();

    scene.add(waterMesh);

    // THREE.Mesh just for mouse raycasting
    const geometryRay = new THREE.PlaneGeometry(BOUNDS, BOUNDS, 1, 1);
    meshRay = new THREE.Mesh(geometryRay, new THREE.MeshBasicMaterial({ color: 0xffffff, visible: false }));
    meshRay.rotation.x = -Math.PI / 2;
    meshRay.matrixAutoUpdate = false;
    meshRay.updateMatrix();
    scene.add(meshRay);

    // Creates the gpu computation class and sets it up

    gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, renderer);

    if (isSafari()) {
        gpuCompute.setDataType(THREE.HalfFloatType);
    }

    const heightmap0 = gpuCompute.createTexture();

    fillTexture(heightmap0);

    heightmapVariable = gpuCompute.addVariable('heightmap', heightmapFragmentShader, heightmap0);

    gpuCompute.setVariableDependencies(heightmapVariable, [heightmapVariable]);

    heightmapVariable.material.uniforms['mousePos'] = { value: new THREE.Vector2(10000, 10000) };
    heightmapVariable.material.uniforms['mouseSize'] = { value: 20.0 };
    heightmapVariable.material.uniforms['viscosityConstant'] = { value: 0.98 };
    heightmapVariable.material.uniforms['heightCompensation'] = { value: 0 };
    heightmapVariable.material.defines.BOUNDS = BOUNDS.toFixed(1);

    const error = gpuCompute.init();
    if (error !== null) {
        console.error(error);
    }

    // Create compute shader to smooth the water surface and velocity
    smoothShader = gpuCompute.createShaderMaterial(smoothFragmentShader, {
        smoothTexture: { value: null },
    });

    // Create compute shader to read water level
    readWaterLevelShader = gpuCompute.createShaderMaterial(readWaterLevelFragmentShader, {
        point1: { value: new THREE.Vector2() },
        levelTexture: { value: null },
    });
    readWaterLevelShader.defines.WIDTH = WIDTH.toFixed(1);
    readWaterLevelShader.defines.BOUNDS = BOUNDS.toFixed(1);

    // Create a 4x1 pixel image and a render target (Uint8, 4 channels, 1 byte per channel) to read water height and orientation
    readWaterLevelImage = new Uint8Array(4 * 1 * 4);

    readWaterLevelRenderTarget = new THREE.WebGLRenderTarget(4, 1, {
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        type: THREE.UnsignedByteType,
        depthBuffer: false,
    });
}

function isSafari() {
    return !!navigator.userAgent.match(/Safari/i) && !navigator.userAgent.match(/Chrome/i);
}

function fillTexture(texture: THREE.DataTexture) {
    const waterMaxHeight = 10;

    function noise(x: number, y: number) {
        let multR = waterMaxHeight;
        let mult = 0.025;
        let r = 0;
        for (let i = 0; i < 15; i++) {
            r += multR * simplex.noise(x * mult, y * mult);
            multR *= 0.53 + 0.025 * i;
            mult *= 1.25;
        }

        return r;
    }

    const pixels = texture.image.data;

    let p = 0;
    for (let j = 0; j < WIDTH; j++) {
        for (let i = 0; i < WIDTH; i++) {
            const x = (i * 128) / WIDTH;
            const y = (j * 128) / WIDTH;

            pixels[p + 0] = noise(x, y);
            pixels[p + 1] = pixels[p + 0];
            pixels[p + 2] = 0;
            pixels[p + 3] = 1;

            p += 4;
        }
    }
}

function createSpheres() {
    const sphereTemplate = new THREE.Mesh(
        new THREE.SphereGeometry(4, 24, 12),
        new THREE.MeshPhongMaterial({ color: 0xffff00 }),
    );

    for (let i = 0; i < NUM_SPHERES; i++) {
        let sphere = sphereTemplate;
        if (i < NUM_SPHERES - 1) {
            sphere = sphereTemplate.clone();
        }

        sphere.position.x = (Math.random() - 0.5) * BOUNDS * 0.7;
        sphere.position.z = (Math.random() - 0.5) * BOUNDS * 0.7;

        sphere.userData.velocity = new THREE.Vector3();

        scene.add(sphere);

        spheres[i] = sphere;
    }
}

function sphereDynamics() {
    const currentRenderTarget = gpuCompute.getCurrentRenderTarget(heightmapVariable);

    readWaterLevelShader.uniforms['levelTexture'].value = currentRenderTarget.texture;

    for (let i = 0; i < NUM_SPHERES; i++) {
        const sphere = spheres[i];

        if (sphere) {
            // Read water level and orientation
            const u = (0.5 * sphere.position.x) / BOUNDS_HALF + 0.5;
            const v = 1 - ((0.5 * sphere.position.z) / BOUNDS_HALF + 0.5);
            readWaterLevelShader.uniforms['point1'].value.set(u, v);
            gpuCompute.doRenderTarget(readWaterLevelShader, readWaterLevelRenderTarget);

            renderer.readRenderTargetPixels(readWaterLevelRenderTarget, 0, 0, 4, 1, readWaterLevelImage);
            const pixels = new Float32Array(readWaterLevelImage.buffer);

            // Get orientation
            waterNormal.set(pixels[1], 0, -pixels[2]);

            const pos = sphere.position;

            // Set height
            pos.y = pixels[0];

            // Move sphere
            waterNormal.multiplyScalar(0.1);
            sphere.userData.velocity.add(waterNormal);
            sphere.userData.velocity.multiplyScalar(0.998);
            pos.add(sphere.userData.velocity);

            if (pos.x < -BOUNDS_HALF) {
                pos.x = -BOUNDS_HALF + 0.001;
                sphere.userData.velocity.x *= -0.3;
            } else if (pos.x > BOUNDS_HALF) {
                pos.x = BOUNDS_HALF - 0.001;
                sphere.userData.velocity.x *= -0.3;
            }

            if (pos.z < -BOUNDS_HALF) {
                pos.z = -BOUNDS_HALF + 0.001;
                sphere.userData.velocity.z *= -0.3;
            } else if (pos.z > BOUNDS_HALF) {
                pos.z = BOUNDS_HALF - 0.001;
                sphere.userData.velocity.z *= -0.3;
            }
        }
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function setMouseCoords(x: number, y: number) {
    mouseCoords.set((x / renderer.domElement.clientWidth) * 2 - 1, -(y / renderer.domElement.clientHeight) * 2 + 1);
    mouseMoved = true;
}

function onPointerMove(event: PointerEvent) {
    if (event.isPrimary) return;

    setMouseCoords(event.clientX, event.clientY);
}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    // Set uniforms: mouse interaction
    const uniforms = heightmapVariable.material.uniforms;
    if (mouseMoved) {
        raycaster.setFromCamera(mouseCoords, camera);

        const intersects = raycaster.intersectObject(meshRay);

        if (intersects.length > 0) {
            const point = intersects[0].point;
            uniforms['mousePos'].value.set(point.x, point.z);
        } else {
            uniforms['mousePos'].value.set(10000, 10000);
        }

        mouseMoved = false;
    } else {
        uniforms['mousePos'].value.set(10000, 10000);
    }

    // Do the gpu computation
    gpuCompute.compute();

    if (spheresEnabled) {
        sphereDynamics();
    }

    // Get compute output in custom uniform
    waterUniforms['heightmap'].value = gpuCompute.getCurrentRenderTarget(heightmapVariable).texture;

    // Render
    renderer.render(scene, camera);
}
