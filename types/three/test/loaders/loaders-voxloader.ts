import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { VOXLoader, VOXDataTexture3D } from 'three/examples/jsm/loaders/VOXLoader';

import { WEBGL } from 'three/examples/jsm/WebGL';

if (!WEBGL.isWebGL2Available()) {
    document.body.appendChild(WEBGL.getWebGL2ErrorMessage());
}

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let controls: OrbitControls;

init();
animate();

function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 4);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = -1.0;
    controls.enableDamping = true;

    // Material

    const vertexShader = /* glsl */ `
					in vec3 position;
					in mat4 instanceMatrix;

					uniform mat4 modelMatrix;
					uniform mat4 modelViewMatrix;
					uniform mat4 projectionMatrix;
					uniform vec3 cameraPos;

					out vec3 vOrigin;
					out vec3 vDirection;

					void main() {
						vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4( position, 1.0 );

						vOrigin = vec3( inverse( instanceMatrix * modelMatrix ) * vec4( cameraPos, 1.0 ) ).xyz;
						vDirection = position - vOrigin;

						gl_Position = projectionMatrix * mvPosition;
					}
				`;

    const fragmentShader = /* glsl */ `
					precision highp float;
					precision highp sampler3D;

					uniform mat4 modelViewMatrix;
					uniform mat4 projectionMatrix;

					in vec3 vOrigin;
					in vec3 vDirection;

					out vec4 color;

					uniform sampler3D map;

					uniform float threshold;
					uniform float steps;

					vec2 hitBox( vec3 orig, vec3 dir ) {
						const vec3 box_min = vec3( - 0.5 );
						const vec3 box_max = vec3( 0.5 );
						vec3 inv_dir = 1.0 / dir;
						vec3 tmin_tmp = ( box_min - orig ) * inv_dir;
						vec3 tmax_tmp = ( box_max - orig ) * inv_dir;
						vec3 tmin = min( tmin_tmp, tmax_tmp );
						vec3 tmax = max( tmin_tmp, tmax_tmp );
						float t0 = max( tmin.x, max( tmin.y, tmin.z ) );
						float t1 = min( tmax.x, min( tmax.y, tmax.z ) );
						return vec2( t0, t1 );
					}

					float sample1( vec3 p ) {
						return texture( map, p ).r;
					}

					#define epsilon .0001

					vec3 normal( vec3 coord ) {
						if ( coord.x < epsilon ) return vec3( 1.0, 0.0, 0.0 );
						if ( coord.y < epsilon ) return vec3( 0.0, 1.0, 0.0 );
						if ( coord.z < epsilon ) return vec3( 0.0, 0.0, 1.0 );
						if ( coord.x > 1.0 - epsilon ) return vec3( - 1.0, 0.0, 0.0 );
						if ( coord.y > 1.0 - epsilon ) return vec3( 0.0, - 1.0, 0.0 );
						if ( coord.z > 1.0 - epsilon ) return vec3( 0.0, 0.0, - 1.0 );

						float step = 0.01;
						float x = sample1( coord + vec3( - step, 0.0, 0.0 ) ) - sample1( coord + vec3( step, 0.0, 0.0 ) );
						float y = sample1( coord + vec3( 0.0, - step, 0.0 ) ) - sample1( coord + vec3( 0.0, step, 0.0 ) );
						float z = sample1( coord + vec3( 0.0, 0.0, - step ) ) - sample1( coord + vec3( 0.0, 0.0, step ) );

						return normalize( vec3( x, y, z ) );
					}

					void main(){

						vec3 rayDir = normalize( vDirection );
						vec2 bounds = hitBox( vOrigin, rayDir );

						if ( bounds.x > bounds.y ) discard;

						bounds.x = max( bounds.x, 0.0 );

						vec3 p = vOrigin + bounds.x * rayDir;
						vec3 inc = 1.0 / abs( rayDir );
						float delta = min( inc.x, min( inc.y, inc.z ) );
						delta /= 50.0;

						for ( float t = bounds.x; t < bounds.y; t += delta ) {

							float d = sample1( p + 0.5 );

							if ( d > 0.5 ) {

								color.rgb = p * 2.0; // normal( p + 0.5 ); // * 0.5 + ( p * 1.5 + 0.25 );
								color.a = 1.;
								break;

							}

							p += rayDir * delta;

						}

						if ( color.a == 0.0 ) discard;

					}
				`;

    const loader = new VOXLoader();
    loader.load('models/vox/menger.vox', chunks => {
        chunks.forEach(chunk => {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.RawShaderMaterial({
                glslVersion: THREE.GLSL3,
                uniforms: {
                    map: { value: new VOXDataTexture3D(chunk) },
                    cameraPos: { value: new THREE.Vector3() },
                },
                vertexShader,
                fragmentShader,
                side: THREE.BackSide,
            });

            const mesh = new THREE.InstancedMesh(geometry, material, 50000);
            mesh.onBeforeRender = (a, b, c, d, meshMat) => {
                (meshMat as THREE.RawShaderMaterial).uniforms.cameraPos.value.copy(camera.position);
            };

            const transform = new THREE.Object3D();

            for (let i = 0; i < mesh.count; i++) {
                transform.position.random().subScalar(0.5).multiplyScalar(150);
                transform.rotation.x = Math.random() * Math.PI;
                transform.rotation.y = Math.random() * Math.PI;
                transform.rotation.z = Math.random() * Math.PI;
                transform.updateMatrix();

                mesh.setMatrixAt(i, transform.matrix);
            }

            scene.add(mesh);
        });
    });

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}
