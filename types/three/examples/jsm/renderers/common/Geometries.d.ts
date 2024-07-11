import { BufferAttribute, BufferGeometry, InterleavedBuffer, InterleavedBufferAttribute } from "three";
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
    getIndex(renderObject: RenderObject): BufferAttribute | null;
}
export default Geometries;
