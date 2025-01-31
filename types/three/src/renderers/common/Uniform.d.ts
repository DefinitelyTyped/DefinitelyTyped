import { Color } from "../../math/Color.js";
import { Matrix2 } from "../../math/Matrix2.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
/**
 * Abstract base class for uniforms.
 *
 * @abstract
 * @private
 */
declare class Uniform<TValue> {
    name: string;
    value: TValue;
    boundary: number;
    itemSize: number;
    offset: number;
    /**
     * Constructs a new uniform.
     *
     * @param {String} name - The uniform's name.
     * @param {Any} value - The uniform's value.
     */
    constructor(name: string, value: TValue);
    /**
     * Sets the uniform's value.
     *
     * @param {Any} value - The value to set.
     */
    setValue(value: TValue): void;
    /**
     * Returns the uniform's value.
     *
     * @return {Any} The value.
     */
    getValue(): TValue;
}
/**
 * Represents a Number uniform.
 *
 * @private
 * @augments Uniform
 */
declare class NumberUniform extends Uniform<number> {
    readonly isNumberUniform: true;
    /**
     * Constructs a new Number uniform.
     *
     * @param {String} name - The uniform's name.
     * @param {Number} value - The uniform's value.
     */
    constructor(name: string, value?: number);
}
/**
 * Represents a Vector2 uniform.
 *
 * @private
 * @augments Uniform
 */
declare class Vector2Uniform extends Uniform<Vector2> {
    readonly isVector2Uniform: true;
    /**
     * Constructs a new Number uniform.
     *
     * @param {String} name - The uniform's name.
     * @param {Vector2} value - The uniform's value.
     */
    constructor(name: string, value?: Vector2);
}
/**
 * Represents a Vector3 uniform.
 *
 * @private
 * @augments Uniform
 */
declare class Vector3Uniform extends Uniform<Vector3> {
    readonly isVector3Uniform: true;
    /**
     * Constructs a new Number uniform.
     *
     * @param {String} name - The uniform's name.
     * @param {Vector3} value - The uniform's value.
     */
    constructor(name: string, value?: Vector3);
}
/**
 * Represents a Vector4 uniform.
 *
 * @private
 * @augments Uniform
 */
declare class Vector4Uniform extends Uniform<Vector4> {
    readonly isVector4Uniform: true;
    /**
     * Constructs a new Number uniform.
     *
     * @param {String} name - The uniform's name.
     * @param {Vector4} value - The uniform's value.
     */
    constructor(name: string, value?: Vector4);
}
/**
 * Represents a Color uniform.
 *
 * @private
 * @augments Uniform
 */
declare class ColorUniform extends Uniform<Color> {
    readonly isColorUniform: true;
    /**
     * Constructs a new Number uniform.
     *
     * @param {String} name - The uniform's name.
     * @param {Color} value - The uniform's value.
     */
    constructor(name: string, value?: Color);
}
/**
 * Represents a Matrix2 uniform.
 *
 * @private
 * @augments Uniform
 */
declare class Matrix2Uniform extends Uniform<Matrix2> {
    readonly isMatrix2Uniform: true;
    /**
     * Constructs a new Number uniform.
     *
     * @param {String} name - The uniform's name.
     * @param {Matrix2} value - The uniform's value.
     */
    constructor(name: string, value?: Matrix2);
}
/**
 * Represents a Matrix3 uniform.
 *
 * @private
 * @augments Uniform
 */
declare class Matrix3Uniform extends Uniform<Matrix3> {
    readonly isMatrix3Uniform: true;
    /**
     * Constructs a new Number uniform.
     *
     * @param {String} name - The uniform's name.
     * @param {Matrix3} value - The uniform's value.
     */
    constructor(name: string, value?: Matrix3);
}
/**
 * Represents a Matrix4 uniform.
 *
 * @private
 * @augments Uniform
 */
declare class Matrix4Uniform extends Uniform<Matrix4> {
    readonly isMatrix4Uniform: true;
    /**
     * Constructs a new Number uniform.
     *
     * @param {String} name - The uniform's name.
     * @param {Matrix4} value - The uniform's value.
     */
    constructor(name: string, value?: Matrix4);
}
export {
    ColorUniform,
    Matrix2Uniform,
    Matrix3Uniform,
    Matrix4Uniform,
    NumberUniform,
    Vector2Uniform,
    Vector3Uniform,
    Vector4Uniform,
};
