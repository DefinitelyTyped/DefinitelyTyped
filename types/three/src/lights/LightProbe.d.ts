import { SphericalHarmonics3 } from "../math/SphericalHarmonics3.js";
import { Light } from "./Light.js";

/**
 * Light probes are an alternative way of adding light to a 3D scene.
 * @remarks
 * Unlike classical light sources (e.g
 * directional, point or spot lights), light probes do not emit light
 * Instead they store information about light passing through 3D space
 * During rendering, the light that hits a 3D object is approximated by using the data from the light probe.
 * Light probes are usually created from (radiance) environment maps
 * The class {@link THREE.LightProbeGenerator | LightProbeGenerator} can be used to create light probes from
 * instances of {@link THREE.CubeTexture | CubeTexture} or {@link THREE.WebGLCubeRenderTarget | WebGLCubeRenderTarget}
 * However, light estimation data could also be provided in other forms e.g
 * by WebXR
 * This enables the rendering of augmented reality content that reacts to real world lighting.
 * The current probe implementation in three.js supports so-called diffuse light probes
 * This type of light probe is functionally equivalent to an irradiance environment map.
 * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe | WebGL / light probe }
 * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe_cubecamera | WebGL / light probe / cube camera }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/LightProbe | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightProbe.js | Source}
 */
export class LightProbe extends Light {
    /**
     * Creates a new LightProbe.
     * @param sh An instance of {@link THREE.SphericalHarmonics3 | SphericalHarmonics3}. Default `new THREE.SphericalHarmonics3()``.
     * @param intensity Numeric value of the light probe's intensity. Expects a `Float`. Default `1`.
     */
    constructor(sh?: SphericalHarmonics3, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link DirectionalLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLightProbe: true;

    /**
     * A light probe uses spherical harmonics to encode lighting information.
     * @defaultValue `new THREE.SphericalHarmonics3()`
     */
    sh: SphericalHarmonics3;

    /** @internal */
    fromJSON(json: {}): LightProbe;
}
