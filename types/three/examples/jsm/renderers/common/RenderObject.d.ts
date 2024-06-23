import {
    BufferAttribute,
    BufferGeometry,
    Camera,
    InterleavedBuffer,
    InterleavedBufferAttribute,
    Material,
    Object3D,
    Scene,
} from "three";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import Binding from "./Binding.js";
import ClippingContext from "./ClippingContext.js";
import Geometries from "./Geometries.js";
import NodeBuilderState from "./nodes/NodeBuilderState.js";
import Nodes from "./nodes/Nodes.js";
import RenderContext from "./RenderContext.js";
import Renderer from "./Renderer.js";
import RenderPipeline from "./RenderPipeline.js";
export default class RenderObject {
    _nodes: Nodes;
    _geometries: Geometries;
    id: number;
    renderer: Renderer;
    object: Object3D;
    material: Material;
    scene: Scene;
    camera: Camera;
    lightsNode: LightsNode;
    context: RenderContext;
    geometry: BufferGeometry;
    version: number;
    drawRange: {
        start: number;
        count: number;
    } | null;
    attributes: Array<BufferAttribute | InterleavedBufferAttribute> | null;
    pipeline: RenderPipeline | null;
    vertexBuffers: Array<BufferAttribute | InterleavedBuffer> | null;
    clippingContext: ClippingContext;
    clippingContextVersion: number;
    initialNodesCacheKey: string;
    initialCacheKey: string;
    _nodeBuilderState: NodeBuilderState | null;
    _bindings: Binding[] | null;
    onDispose: (() => void) | null;
    readonly isRenderObject: true;
    onMaterialDispose: () => void;
    constructor(
        nodes: Nodes,
        geometries: Geometries,
        renderer: Renderer,
        object: Object3D,
        material: Material,
        scene: Scene,
        camera: Camera,
        lightsNode: LightsNode,
        renderContext: RenderContext,
    );
    updateClipping(parent: ClippingContext): void;
    get clippingNeedsUpdate(): boolean;
    getNodeBuilderState(): NodeBuilderState;
    getBindings(): Binding[];
    getIndex(): BufferAttribute | null;
    getChainArray(): readonly [Object3D<import("three").Object3DEventMap>, Material, RenderContext, LightsNode];
    getAttributes(): (InterleavedBufferAttribute | BufferAttribute)[];
    getVertexBuffers(): (InterleavedBuffer | BufferAttribute)[] | null;
    getMaterialCacheKey(): string;
    get needsUpdate(): boolean;
    getNodesCacheKey(): string;
    getCacheKey(): string;
    dispose(): void;
}
