import { Camera } from "../../cameras/Camera.js";
import { BufferAttribute } from "../../core/BufferAttribute.js";
import { BufferGeometry } from "../../core/BufferGeometry.js";
import { InterleavedBuffer } from "../../core/InterleavedBuffer.js";
import { InterleavedBufferAttribute } from "../../core/InterleavedBufferAttribute.js";
import { Object3D } from "../../core/Object3D.js";
import { Material } from "../../materials/Material.js";
import { LightsNode } from "../../nodes/Nodes.js";
import { Scene } from "../../scenes/Scene.js";
import BindGroup from "./BindGroup.js";
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
    _bindings: BindGroup[] | null;
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
    getBindings(): BindGroup[];
    getIndex(): BufferAttribute | null;
    getChainArray(): readonly [
        Object3D<import("../../core/Object3D.js").Object3DEventMap>,
        Material,
        RenderContext,
        LightsNode,
    ];
    getAttributes(): (InterleavedBufferAttribute | BufferAttribute)[];
    getVertexBuffers(): (InterleavedBuffer | BufferAttribute)[] | null;
    getMaterialCacheKey(): string;
    get needsUpdate(): boolean;
    getDynamicCacheKey(): string;
    getCacheKey(): string;
    dispose(): void;
}
