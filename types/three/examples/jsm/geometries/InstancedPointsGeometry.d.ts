import { InstancedBufferGeometry } from "three";

declare class InstancedPointsGeometry extends InstancedBufferGeometry {
    readonly isInstancedPointsGeometry: true;

    constructor();

    setPositions(array: Float32Array | ArrayLike<number>): this;

    setColors(array: Float32Array | ArrayLike<number>): this;
}

export default InstancedPointsGeometry;
