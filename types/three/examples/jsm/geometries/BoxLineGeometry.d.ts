import { BufferGeometry } from '../../../src/Three.js';

export class BoxLineGeometry extends BufferGeometry {
    constructor(
        width?: number,
        height?: number,
        depth?: number,
        widthSegments?: number,
        heightSegments?: number,
        depthSegments?: number,
    );
}
