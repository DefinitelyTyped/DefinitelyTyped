import { BufferGeometry } from "../../../src/Three.js";

export class TessellateModifier {
    constructor(maxEdgeLength?: number, maxIterations?: number);
    maxEdgeLength: number;
    maxIterations: number;

    modify<TGeometry extends BufferGeometry>(geometry: TGeometry): TGeometry;
}
