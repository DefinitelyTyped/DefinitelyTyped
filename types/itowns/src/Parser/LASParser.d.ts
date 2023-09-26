import * as THREE from "three";

declare namespace _default {
    interface ParsingOptions {
        in?: {
            colorDepth?: "auto" | 8 | 16;
        };
        out?: {
            skip?: number;
        };
    }

    function parse(
        data: ArrayBuffer,
        options?: ParsingOptions,
    ): Promise<THREE.BufferGeometry>;
}
export default _default;
