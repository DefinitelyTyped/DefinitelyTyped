import { Camera, Color, Object3D, Scene, Vector2, MeshBasicMaterial, ShaderMaterial, WebGLRenderTarget, IUniform, Matrix4 } from './three-core';
import {Pass} from "./three-effectcomposer";

export class OutlinePass extends Pass {
    constructor(resolution: Vector2, scene: Scene, camera: Camera, selectedObjects?: Object3D[]);
    selectedObjects: Object3D[];
    renderCamera: Camera;
    renderScene: Scene;
    visibleEdgeColor: Color;
    hiddenEdgeColor: Color;
    edgeGlow: number;
    usePatternTexture: boolean;
    edgeThickness: number;
    edgeStrength: number;
    downSampleRatio: number;
    pulsePeriod: number;
    resolution: Vector2;
    maskBufferMaterial: MeshBasicMaterial;
    prepareMaskMaterial: ShaderMaterial;
    renderTargetDepthBuffer: WebGLRenderTarget;
    renderTargetMaskDownSampleBuffer: WebGLRenderTarget;
    renderTargetBlurBuffer1: WebGLRenderTarget;
    renderTargetBlurBuffer2: WebGLRenderTarget;
    edgeDetectionMaterial: ShaderMaterial;
    separableBlurMaterial: ShaderMaterial;
    overlayMaterial: ShaderMaterial;
    copyUniforms: { [uniform: string]: IUniform };
    materialCopy: ShaderMaterial;
    oldClearColor: Color;
    tempPulseColor1: Color;
    tempPulseColor2: Color;
    textureMatrix: Matrix4;
    static BlurDirectionX: Vector2;
    static BlurDirectionY: Vector2;
    dispose(): void;
    changeVisibilityOfSelectedObjects(bVisible: boolean): void;
    changeVisibilityOfNonSelectedObjects(bVisible: boolean): void;
    updateTextureMatrix(): void;
}

