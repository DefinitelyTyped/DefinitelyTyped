import { Color, Matrix3, Matrix4, Vector2, Vector3, Vector4 } from "three";
declare class Uniform<TValue> {
    name: string;
    value: TValue;
    boundary: number;
    itemSize: number;
    offset: number;
    constructor(name: string, value: TValue);
    setValue(value: TValue): void;
    getValue(): TValue;
}
declare class FloatUniform extends Uniform<number> {
    readonly isFloatUniform: true;
    constructor(name: string, value?: number);
}
declare class Vector2Uniform extends Uniform<Vector2> {
    readonly isVector2Uniform: true;
    constructor(name: string, value?: Vector2);
}
declare class Vector3Uniform extends Uniform<Vector3> {
    readonly isVector3Uniform: true;
    constructor(name: string, value?: Vector3);
}
declare class Vector4Uniform extends Uniform<Vector4> {
    readonly isVector4Uniform: true;
    constructor(name: string, value?: Vector4);
}
declare class ColorUniform extends Uniform<Color> {
    readonly isColorUniform: true;
    constructor(name: string, value?: Color);
}
declare class Matrix3Uniform extends Uniform<Matrix3> {
    readonly isMatrix3Uniform: true;
    constructor(name: string, value?: Matrix3);
}
declare class Matrix4Uniform extends Uniform<Matrix4> {
    readonly isMatrix4Uniform: true;
    constructor(name: string, value?: Matrix4);
}
export { ColorUniform, FloatUniform, Matrix3Uniform, Matrix4Uniform, Vector2Uniform, Vector3Uniform, Vector4Uniform };
