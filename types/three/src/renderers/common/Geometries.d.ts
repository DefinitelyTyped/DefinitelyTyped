import { BufferAttribute } from "../../core/BufferAttribute.js";
import { BufferGeometry } from "../../core/BufferGeometry.js";
import { InterleavedBuffer } from "../../core/InterleavedBuffer.js";
import { InterleavedBufferAttribute } from "../../core/InterleavedBufferAttribute.js";
import Attributes from "./Attributes.js";
import { AttributeType } from "./Constants.js";
import DataMap from "./DataMap.js";
import Info from "./Info.js";
import RenderObject from "./RenderObject.js";
interface GeometryData {
    initialized?: boolean | undefined;
}
declare class Geometries extends DataMap<{
    geometry: {
        key: BufferGeometry;
        value: GeometryData;
    };
}> {
    attributes: Attributes;
    info: Info;
    wireframes: WeakMap<BufferGeometry, BufferAttribute>;
    attributeCall: WeakMap<BufferAttribute | InterleavedBufferAttribute | InterleavedBuffer, number>;
    constructor(attributes: Attributes, info: Info);
    has(renderObject: RenderObject | BufferGeometry): boolean;
    updateForRender(renderObject: RenderObject): void;
    initGeometry(renderObject: RenderObject): void;
    updateAttributes(renderObject: RenderObject): void;
    updateAttribute(attribute: BufferAttribute | InterleavedBufferAttribute, type: AttributeType): void;
    getIndirect(renderObject: RenderObject): import("./IndirectStorageBufferAttribute.js").default | null;
    getIndex(renderObject: RenderObject): BufferAttribute | null;
}
export default Geometries;
