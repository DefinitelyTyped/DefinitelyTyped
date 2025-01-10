import { BufferGeometry, Mesh } from "three";

/**
 * Make the input geometry's normal attribute encoded and compressed by 3 different methods.
 */
declare function compressNormals(
    geometry: BufferGeometry,
    encodeMethod: "DEFAULT" | "OCT1Byte" | "OCT2Byte" | "ANGLES",
): void;

/**
 * Make the input geometry's position attribute encoded and compressed.
 */
declare function compressPositions(geometry: BufferGeometry): void;

/**
 * Make the input geometry's uv attribute encoded and compressed.
 */
declare function compressUvs(geometry: BufferGeometry): void;

export { compressNormals, compressPositions, compressUvs };
