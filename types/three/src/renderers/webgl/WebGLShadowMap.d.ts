import { WebGLCapabilities } from './WebGLCapabilities.js';
import { Scene } from '../../scenes/Scene.js';
import { Camera } from '../../cameras/Camera.js';
import { WebGLRenderer } from '../WebGLRenderer.js';
import { ShadowMapType } from '../../constants.js';
import { WebGLObjects } from './WebGLObjects.js';
import { Light } from '../../lights/Light.js';

export class WebGLShadowMap {
    constructor(_renderer: WebGLRenderer, _objects: WebGLObjects, _capabilities: WebGLCapabilities);

    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default true
     */
    autoUpdate: boolean;

    /**
     * @default false
     */
    needsUpdate: boolean;

    /**
     * @default THREE.PCFShadowMap
     */
    type: ShadowMapType;

    render(shadowsArray: Light[], scene: Scene, camera: Camera): void;

    /**
     * @deprecated Use {@link Material#shadowSide} instead.
     */
    cullFace: any;
}
