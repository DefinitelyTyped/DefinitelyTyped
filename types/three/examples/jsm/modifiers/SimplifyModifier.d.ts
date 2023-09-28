import { BufferGeometry } from '../../../src/Three.js';

export class SimplifyModifier {
    constructor();
    modify(geometry: BufferGeometry, count: number): BufferGeometry;
}
