import { Color } from "../../math/Color.js";
import { Matrix2 } from "../../math/Matrix2.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";

/**
 * Represents a Number uniform.
 *
 * @private
 * @augments Uniform
 */
export class NumberUniform extends Uniform<number> {
    /**
     * Constructs a new Number uniform.
     *
     * @param {string} name - The uniform's name.
     * @param {number} value - The uniform's value.
     */
    constructor(name: string, value?: number);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isNumberUniform: boolean;
}
/**
 * Represents a Vector2 uniform.
 *
 * @private
 * @augments Uniform
 */
export class Vector2Uniform extends Uniform<Vector2> {
    /**
     * Constructs a new Number uniform.
     *
     * @param {string} name - The uniform's name.
     * @param {Vector2} value - The uniform's value.
     */
    constructor(name: string, value?: Vector2);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isVector2Uniform: boolean;
}
/**
 * Represents a Vector3 uniform.
 *
 * @private
 * @augments Uniform
 */
export class Vector3Uniform extends Uniform<Vector3> {
    /**
     * Constructs a new Number uniform.
     *
     * @param {string} name - The uniform's name.
     * @param {Vector3} value - The uniform's value.
     */
    constructor(name: string, value?: Vector3);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isVector3Uniform: boolean;
}
/**
 * Represents a Vector4 uniform.
 *
 * @private
 * @augments Uniform
 */
export class Vector4Uniform extends Uniform<Vector4> {
    /**
     * Constructs a new Number uniform.
     *
     * @param {string} name - The uniform's name.
     * @param {Vector4} value - The uniform's value.
     */
    constructor(name: string, value?: Vector4);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isVector4Uniform: boolean;
}
/**
 * Represents a Color uniform.
 *
 * @private
 * @augments Uniform
 */
export class ColorUniform extends Uniform<Color> {
    /**
     * Constructs a new Number uniform.
     *
     * @param {string} name - The uniform's name.
     * @param {Color} value - The uniform's value.
     */
    constructor(name: string, value?: Color);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isColorUniform: boolean;
}
/**
 * Represents a Matrix2 uniform.
 *
 * @private
 * @augments Uniform
 */
export class Matrix2Uniform extends Uniform<Matrix2> {
    /**
     * Constructs a new Number uniform.
     *
     * @param {string} name - The uniform's name.
     * @param {Matrix2} value - The uniform's value.
     */
    constructor(name: string, value?: Matrix2);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isMatrix2Uniform: boolean;
}
/**
 * Represents a Matrix3 uniform.
 *
 * @private
 * @augments Uniform
 */
export class Matrix3Uniform extends Uniform<Matrix3> {
    /**
     * Constructs a new Number uniform.
     *
     * @param {string} name - The uniform's name.
     * @param {Matrix3} value - The uniform's value.
     */
    constructor(name: string, value?: Matrix3);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isMatrix3Uniform: boolean;
}
/**
 * Represents a Matrix4 uniform.
 *
 * @private
 * @augments Uniform
 */
export class Matrix4Uniform extends Uniform<Matrix4> {
    /**
     * Constructs a new Number uniform.
     *
     * @param {string} name - The uniform's name.
     * @param {Matrix4} value - The uniform's value.
     */
    constructor(name: string, value?: Matrix4);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isMatrix4Uniform: boolean;
}
/**
 * Abstract base class for uniforms.
 *
 * @abstract
 * @private
 */
declare class Uniform<TValue> {
    /**
     * Constructs a new uniform.
     *
     * @param {string} name - The uniform's name.
     * @param {any} value - The uniform's value.
     */
    constructor(name: string, value: TValue);
    /**
     * The uniform's name.
     *
     * @type {string}
     */
    name: string;
    /**
     * The uniform's value.
     *
     * @type {any}
     */
    value: TValue;
    /**
     * Used to build the uniform buffer according to the STD140 layout.
     * Derived uniforms will set this property to a data type specific
     * value.
     *
     * @type {number}
     */
    boundary: number;
    /**
     * The item size. Derived uniforms will set this property to a data
     * type specific value.
     *
     * @type {number}
     */
    itemSize: number;
    /**
     * This property is set by {@link UniformsGroup} and marks
     * the start position in the uniform buffer.
     *
     * @type {number}
     */
    offset: number;
    /**
     * This property is set by {@link UniformsGroup} and marks
     * the index position in the uniform array.
     *
     * @type {number}
     */
    index: number;
    /**
     * Sets the uniform's value.
     *
     * @param {any} value - The value to set.
     */
    setValue(value: TValue): void;
    /**
     * Returns the uniform's value.
     *
     * @return {any} The value.
     */
    getValue(): TValue;
}

export type { Uniform };
