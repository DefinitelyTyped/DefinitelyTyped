import { Camera } from "../../../cameras/Camera.js";
import { Object3D } from "../../../core/Object3D.js";
import { Material } from "../../../materials/Material.js";
import { Color } from "../../../math/Color.js";
import {
    ComputeNode,
    LightsNode,
    Node,
    NodeBuilder,
    NodeFrame,
    ShaderNodeObject,
    UniformGroupNode,
} from "../../../nodes/Nodes.js";
import { Fog } from "../../../scenes/Fog.js";
import { FogExp2 } from "../../../scenes/FogExp2.js";
import { Scene } from "../../../scenes/Scene.js";
import { CubeTexture } from "../../../textures/CubeTexture.js";
import { Texture } from "../../../textures/Texture.js";
import Backend from "../Backend.js";
import ChainMap from "../ChainMap.js";
import DataMap from "../DataMap.js";
import Renderer from "../Renderer.js";
import RenderObject from "../RenderObject.js";
import NodeBuilderState from "./NodeBuilderState.js";
import NodeUniformsGroup from "./NodeUniformsGroup.js";
interface NodeUniformsGroupData {
    renderId?: number | undefined;
    frameId?: number | undefined;
}
interface RenderObjectData {
    nodeBuilderState?: NodeBuilderState | undefined;
}
interface ComputeNodeData {
    nodeBuilderState?: NodeBuilderState | undefined;
}
interface SceneData {
    background?: Color | Texture | CubeTexture | undefined;
    backgroundNode?: Node | undefined;
    fog?: Fog | FogExp2 | undefined;
    fogNode?: Node | undefined;
    environment?: Texture | undefined;
    environmentNode?: Node | undefined;
}
declare class Nodes extends DataMap<{
    nodeUniformsGroup: {
        key: NodeUniformsGroup;
        value: NodeUniformsGroupData;
    };
    renderObject: {
        key: RenderObject;
        value: RenderObjectData;
    };
    computeNode: {
        key: ComputeNode;
        value: ComputeNodeData;
    };
    scene: {
        key: Scene;
        value: SceneData;
    };
}> {
    renderer: Renderer;
    backend: Backend;
    nodeFrame: NodeFrame;
    nodeBuilderCache: Map<string, NodeBuilderState>;
    callHashCache: ChainMap<readonly [Scene, LightsNode], {
        callId: number;
        cacheKey: string;
    }>;
    groupsData: ChainMap<readonly [UniformGroupNode, NodeUniformsGroup], {
        version?: number;
    }>;
    constructor(renderer: Renderer, backend: Backend);
    updateGroup(nodeUniformsGroup: NodeUniformsGroup): boolean;
    getForRenderCacheKey(renderObject: RenderObject): string;
    getForRender(renderObject: RenderObject): NodeBuilderState;
    delete(
        object: NodeUniformsGroup | RenderObject | ComputeNode | Scene,
    ): SceneData | RenderObjectData | NodeUniformsGroupData | ComputeNodeData;
    getForCompute(computeNode: ComputeNode): NodeBuilderState;
    _createNodeBuilderState(nodeBuilder: NodeBuilder): NodeBuilderState;
    getEnvironmentNode(scene: Scene): Node | null;
    getBackgroundNode(scene: Scene): Node | null;
    getFogNode(scene: Scene): Node | null;
    getCacheKey(scene: Scene, lightsNode: LightsNode): string;
    updateScene(scene: Scene): void;
    get isToneMappingState(): boolean;
    updateBackground(scene: Scene): void;
    updateFog(scene: Scene): void;
    updateEnvironment(scene: Scene): void;
    getNodeFrame(
        renderer?: Renderer,
        scene?: Scene | null,
        object?: Object3D | null,
        camera?: Camera | null,
        material?: Material | null,
    ): NodeFrame;
    getNodeFrameForRender(renderObject: RenderObject): NodeFrame;
    getOutputCacheKey(): string;
    hasOutputChange(outputTarget: Texture): boolean;
    getOutputNode(outputTexture: Texture): ShaderNodeObject<Node>;
    updateBefore(renderObject: RenderObject): void;
    updateAfter(renderObject: RenderObject): void;
    updateForCompute(computeNode: ComputeNode): void;
    updateForRender(renderObject: RenderObject): void;
    dispose(): void;
}
export default Nodes;
