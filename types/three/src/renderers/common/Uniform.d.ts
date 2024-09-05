import { Color } from "../../math/Color.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
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
declare class NumberUniform extends Uniform<number> {
    readonly isNumberUniform: true;
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
export { ColorUniform, Matrix3Uniform, Matrix4Uniform, NumberUniform, Vector2Uniform, Vector3Uniform, Vector4Uniform };
