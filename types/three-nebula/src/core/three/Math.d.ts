/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
export namespace _Math {
    const DEG2RAD: number;
    const RAD2DEG: number;
    function generateUUID(): string;
    function clamp(value: number, min: number, max: number): number;
    function euclideanModulo(n: number, m: number): number;
    function mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number;
    function lerp(x: number, y: number, t: number): number;
    function smoothstep(x: number, min: number, max: number): number;
    function smootherstep(x: number, min: number, max: number): number;
    function randInt(low: number, high: number): number;
    function randFloat(low: number, high: number): number;
    function randFloatSpread(range: number): number;
    function degToRad(degrees: number): number;
    function radToDeg(radians: number): number;
    function isPowerOfTwo(value: number): boolean;
    function ceilPowerOfTwo(value: number): number;
    function floorPowerOfTwo(value: number): number;
}
