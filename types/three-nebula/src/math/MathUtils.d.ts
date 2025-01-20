export namespace MathUtils {
    function randomAToB(a: number, b: number, INT?: boolean): number;

    function randomFloating(center: number, f: number, INT?: boolean): number;

    function randomZone(display: any): void;

    function degreeTransform(a: number): number;

    function toColor16(num: number): string;

    function randomColor(): string;

    function lerp(a: number, b: number, energy: number): number;

    function getNormal(v: number, n: number): number;

    /**
     * Rodrigues' Rotation Formula
     * https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula
     * v′ = vcos(θ) + k(k⋅v)(1−cos(θ)) + (k*v)sin(θ)
     */
    function axisRotate(v0: any, v: any, k: any, tha: number): void;
}

export default MathUtils;
