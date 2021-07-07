export class Transform {
    reset(): void;
    m: number[];
    clone(): Transform;
    multiply(matrix: any): void;
    invert(): void;
    rotate(rad: any): void;
    translate(x: any, y: any): void;
    scale(sx: any, sy: any): void;
    transformPoint(px: any, py: any): {
        x: any;
        y: any;
    };
}
