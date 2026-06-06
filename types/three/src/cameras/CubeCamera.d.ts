import { CoordinateSystem } from "../constants.js";
import { Object3D } from "../core/Object3D.js";
import { RenderTarget } from "../core/RenderTarget.js";
import CubeRenderTarget from "../renderers/common/CubeRenderTarget.js";
import { WebGLCubeRenderTarget } from "../renderers/WebGLCubeRenderTarget.js";
import { Camera } from "./Camera.js";

export interface CubeCameraRenderer {
    coordinateSystem: CoordinateSystem;
    getRenderTarget(): RenderTarget | null;
    getActiveCubeFace(): number;
    getActiveMipmapLevel(): number;
    xr: {
        enabled: boolean;
    };
    setRenderTarget(
        renderTarget: WebGLCubeRenderTarget | null,
        activeCubeFace?: number,
        activeMipmapLevel?: number,
    ): void;
    render(scene: Object3D, camera: Camera): void;
}

/**
 * A special type of camera that is positioned in 3D space to render its surroundings into a
 * cube render target. The render target can then be used as an environment map for rendering
 * realtime reflections in your scene.
 *
 * ```js
 * // Create cube render target
 * const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 256, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );
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
 */
export class CubeCamera extends Object3D {
    /**
     * Constructs a new cube camera.
     *
     * @param {number} near - The camera's near plane.
     * @param {number} far - The camera's far plane.
     * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
     */
    constructor(near: number, far: number, renderTarget: WebGLCubeRenderTarget | CubeRenderTarget);
    /**
     * A reference to the cube render target.
     */
    renderTarget: WebGLCubeRenderTarget;
    /**
     * The current active coordinate system.
     *
     * @default null
     */
    coordinateSystem: CoordinateSystem | null;
    /**
     * The current active mipmap level
     *
     * @default 0
     */
    activeMipmapLevel: number;
    /**
     * Must be called when the coordinate system of the cube camera is changed.
     */
    updateCoordinateSystem(): void;
    /**
     * Calling this method will render the given scene with the given renderer
     * into the cube render target of the camera.
     *
     * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
     * @param {Scene} scene - The scene to render.
     */
    update(renderer: CubeCameraRenderer, scene: Object3D): void;
}
