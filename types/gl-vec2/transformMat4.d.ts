/**
 * Transforms the vec2 with a mat4 3rd vector component is implicitly '0' 4th vector component is implicitly '1'
 */
declare function transformMat4(out: number[], a: number[], m: number[]): number[];

export = transformMat4;
