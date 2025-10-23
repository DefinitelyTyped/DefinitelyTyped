import * as THREE from "three";

declare namespace _default {
    interface ParsingOptions {
        in?: {
            colorDepth?: 8 | 16;
        };
    }

    function parse(
        data: ArrayBuffer,
        options?: ParsingOptions,
    ): Promise<THREE.BufferGeometry>;
}
export default _default;
