import { Camera } from "../../cameras/Camera.js";
import { ToneMapping } from "../../constants.js";
import { BufferGeometry, GeometryGroup } from "../../core/BufferGeometry.js";
import { Object3D } from "../../core/Object3D.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import { Material } from "../../materials/Material.js";
import { Color } from "../../math/Color.js";
import MRTNode from "../../nodes/core/MRTNode.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import { Scene } from "../../scenes/Scene.js";
import { CubeTexture } from "../../textures/CubeTexture.js";
import { Texture } from "../../textures/Texture.js";
import Color4 from "./Color4.js";
import Renderer from "./Renderer.js";

// renderer state

export interface RendererState {
    toneMapping: ToneMapping;
    toneMappingExposure: number;
    outputColorSpace: string;
    renderTarget: RenderTarget | null;
    activeCubeFace: number;
    activeMipmapLevel: number;
    renderObjectFunction:
        | ((
            object: Object3D,
            scene: Scene,
            camera: Camera,
            geometry: BufferGeometry,
            material: Material,
            group: GeometryGroup,
            lightsNode: LightsNode,
        ) => void)
        | null;
    pixelRatio: number;
    mrt: MRTNode | null;
    clearColor: Color4;
    clearAlpha: number;
    autoClear: boolean;
    scissorTest: boolean;
}

export function saveRendererState(renderer: Renderer, state?: RendererState): RendererState;

export function resetRendererState(renderer: Renderer, state?: RendererState): RendererState;

export function restoreRendererState(renderer: Renderer, state: RendererState): void;

// renderer and scene state

export interface RendererAndSceneState extends RendererState {
    background: Color | Texture | CubeTexture | null;
    backgroundNode: Node | null | undefined;
    overrideMaterial: Material | null;
}

export function saveRendererAndSceneState(
    renderer: RendererState,
    scene: Scene,
    state?: RendererAndSceneState,
): RendererAndSceneState;

export function resetRendererAndSceneState(renderer: Renderer, state?: RendererAndSceneState): RendererAndSceneState;

export function restoreRendererAndSceneState(renderer: Renderer, state: RendererAndSceneState): void;
