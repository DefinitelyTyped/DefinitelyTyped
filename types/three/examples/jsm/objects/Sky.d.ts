import { BoxGeometry, Mesh, ShaderMaterial } from "three";

/**
 * {@link Sky} creates a ready to go sky environment for your scenes.
 *
 * @example
 * const sky = new Sky();
 * sky.scale.setScalar( 450000 );
 *
 * const phi = MathUtils.degToRad( 90 );
 * const theta = MathUtils.degToRad( 180 );
 * const sunPosition = new Vector3().setFromSphericalCoords( 1, phi, theta );
 *
 * sky.material.uniforms.sunPosition.value = sunPosition;
 *
 * scene.add( sky );
 */
export class Sky extends Mesh {
    /**
     * Create a new {@link Sky} instance.
     */
    constructor();

    geometry: BoxGeometry;
    material: ShaderMaterial;

    static SkyShader: object;
}
