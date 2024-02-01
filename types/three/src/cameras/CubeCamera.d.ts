import { CoordinateSystem } from "../constants.js";
import { Object3D } from "../core/Object3D.js";
import { WebGLCubeRenderTarget } from "../renderers/WebGLCubeRenderTarget.js";
import { WebGLRenderer } from "../renderers/WebGLRenderer.js";

/**
 * Creates **6** {@link THREE.PerspectiveCamera | cameras} that render to a {@link THREE.WebGLCubeRenderTarget | WebGLCubeRenderTarget}.
 * @remarks The cameras are added to the {@link children} array.
 * @example
 * ```typescript
 * // Create cube render target
 * const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );
 *
 * // Create cube camera
 * const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget );
 * scene.add( cubeCamera );
 *
 * // Create car
 * const chromeMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: cubeRenderTarget.texture } );
 * const car = new THREE.Mesh( carGeometry, chromeMaterial );
 * scene.add( car );
 *
 * // Update the render target cube
 * car.visible = false;
 * cubeCamera.position.copy( car.position );
 * cubeCamera.update( renderer, scene );
 *
 * // Render the scene
 * car.visible = true;
 * renderer.render( scene, camera );
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic | materials / cubemap / dynamic }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/CubeCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/CubeCamera.js | Source}
 */
export class CubeCamera extends Object3D {
    /**
     * Constructs a {@link CubeCamera} that contains 6 {@link PerspectiveCamera | PerspectiveCameras} that render to a {@link THREE.WebGLCubeRenderTarget | WebGLCubeRenderTarget}.
     * @param near The near clipping distance.
     * @param far The far clipping distance.
     * @param renderTarget The destination cube render target.
     */
    constructor(near: number, far: number, renderTarget: WebGLCubeRenderTarget);

    /**
     * @override
     * @defaultValue `CubeCamera`
     */
    override readonly type: string | "CubeCamera";

    /**
     * The destination cube render target.
     */
    renderTarget: WebGLCubeRenderTarget;

    coordinateSystem: CoordinateSystem;

    activeMipmapLevel: number;

    updateCoordinateSystem(): void;

    /**
     * Call this to update the {@link CubeCamera.renderTarget | renderTarget}.
     * @param renderer The current WebGL renderer
     * @param scene The current scene
     */
    update(renderer: WebGLRenderer, scene: Object3D): void;
}
