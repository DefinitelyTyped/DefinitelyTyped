import { BufferGeometry } from "three";

export class TessellateModifier {
    constructor(maxEdgeLength?: number, maxIterations?: number);
    maxEdgeLength: number;
    maxIterations: number;

    modify<TGeometry extends BufferGeometry>(geometry: TGeometry): TGeometry;
}
