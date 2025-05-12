declare function lerp(a: number, b: number, t: number): number;
declare function unlerp(a: number, b: number, v: number): number;
declare function blerp(a00: number, a01: number, a10: number, a11: number, tx: number, ty: number): number;
declare function trilerp(
    a000: number,
    a010: number,
    a100: number,
    a110: number,
    a001: number,
    a011: number,
    a101: number,
    a111: number,
    tx: number,
    ty: number,
    tz: number,
): number;

export { blerp, lerp, trilerp, unlerp };
