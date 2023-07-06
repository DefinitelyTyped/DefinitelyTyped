import { PerspectiveCamera } from './../cameras/PerspectiveCamera';
import { LightShadow } from './LightShadow';

/**
 * This is used internally by {@link SpotLight | SpotLights} for calculating shadows.
 * @example
 * ```typescript
 * //Create a WebGLRenderer and turn on shadows in the renderer
 * const renderer = new THREE.WebGLRenderer();
 * renderer.shadowMap.enabled = true;
 * renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
 * //Create a SpotLight and turn on shadows for the light
 * const light = new THREE.SpotLight(0xffffff);
 * light.castShadow = true; // default false
 * scene.add(light);
 * //Set up shadow properties for the light
 * light.shadow.mapSize.width = 512; // default
 * light.shadow.mapSize.height = 512; // default
 * light.shadow.camera.near = 0.5; // default
 * light.shadow.camera.far = 500; // default
 * light.shadow.focus = 1; // default
 * //Create a sphere that cast shadows (but does not receive them)
 * const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
 * const sphereMaterial = new THREE.MeshStandardMaterial({
 *     color: 0xff0000
 * });
 * const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
 * sphere.castShadow = true; //default is false
 * sphere.receiveShadow = false; //default
 * scene.add(sphere);
 * //Create a plane that receives shadows (but does not cast them)
 * const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
 * const planeMaterial = new THREE.MeshStandardMaterial({
 *     color: 0x00ff00
 * })
 * const plane = new THREE.Mesh(planeGeometry, planeMaterial);
 * plane.receiveShadow = true;
 * scene.add(plane);
 * //Create a helper for the shadow camera (optional)
 * const helper = new THREE.CameraHelper(light.shadow.camera);
 * scene.add(helper);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/SpotLightShadow | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLightShadow.js | Source}
 */
export class SpotLightShadow extends LightShadow<PerspectiveCamera> {
    /**
     * Read-only flag to check if a given object is of type {@link SpotLightShadow}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSpotLightShadow: true;

    /**
     * The light's view of the world.
     * @remarks This is used to generate a depth map of the scene; objects behind other objects from the light's perspective will be in shadow.
     * @remarks
     * The {@link THREE.PerspectiveCamera.fov | fov} will track the {@link THREE.SpotLight.angle | angle} property
     * of the owning {@link SpotLight | SpotLight} via the {@link SpotLightShadow.update | update} method.
     * Similarly, the {@link THREE.PerspectiveCamera.aspect | aspect} property will track the aspect of the {@link LightShadow.mapSize | mapSize}.
     * If the {@link SpotLight.distance | distance} property of the light is set, the {@link THREE.PerspectiveCamera.far | far} clipping plane will track that, otherwise it defaults to `500`.
     * @defaultValue is a {@link THREE.PerspectiveCamera | PerspectiveCamera} with {@link THREE.PerspectiveCamera.near | near} clipping plane at `0.5`.
     */
    camera: PerspectiveCamera;

    /**
     * Used to focus the shadow camera.
     * @remarks The camera's field of view is set as a percentage of the spotlight's field-of-view. Range is `[0, 1]`. 0`.
     * @defaultValue `1`
     */
    focus: number;
}
