import { Color } from "../../math/Color.js";
import { Matrix2 } from "../../math/Matrix2.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

export type MathNodeMethod1 =
    | typeof MathNode.RADIANS
    | typeof MathNode.DEGREES
    | typeof MathNode.EXP
    | typeof MathNode.EXP2
    | typeof MathNode.LOG
    | typeof MathNode.LOG2
    | typeof MathNode.SQRT
    | typeof MathNode.INVERSE_SQRT
    | typeof MathNode.FLOOR
    | typeof MathNode.CEIL
    | typeof MathNode.NORMALIZE
    | typeof MathNode.FRACT
    | typeof MathNode.SIN
    | typeof MathNode.SINH
    | typeof MathNode.COS
    | typeof MathNode.COSH
    | typeof MathNode.TAN
    | typeof MathNode.TANH
    | typeof MathNode.ASIN
    | typeof MathNode.ASINH
    | typeof MathNode.ACOS
    | typeof MathNode.ACOSH
    | typeof MathNode.ATAN
    | typeof MathNode.ATANH
    | typeof MathNode.ABS
    | typeof MathNode.SIGN
    | typeof MathNode.LENGTH
    | typeof MathNode.NEGATE
    | typeof MathNode.ONE_MINUS
    | typeof MathNode.DFDX
    | typeof MathNode.DFDY
    | typeof MathNode.ROUND
    | typeof MathNode.RECIPROCAL
    | typeof MathNode.TRUNC
    | typeof MathNode.FWIDTH
    | typeof MathNode.TRANSPOSE
    | typeof MathNode.DETERMINANT
    | typeof MathNode.INVERSE;

export type MathNodeMethod2 =
    | typeof MathNode.MIN
    | typeof MathNode.MAX
    | typeof MathNode.STEP
    | typeof MathNode.REFLECT
    | typeof MathNode.DISTANCE
    | typeof MathNode.DOT
    | typeof MathNode.CROSS
    | typeof MathNode.POW
    | typeof MathNode.TRANSFORM_DIRECTION;

export type MathNodeMethod3 =
    | typeof MathNode.MIX
    | typeof MathNode.CLAMP
    | typeof MathNode.REFRACT
    | typeof MathNode.SMOOTHSTEP
    | typeof MathNode.FACEFORWARD;

export type MathNodeMethod = MathNodeMethod1 | MathNodeMethod2 | MathNodeMethod3;

export default class MathNode extends TempNode {
    // 1 input

    static ALL: "all";
    static ANY: "any";

    static RADIANS: "radians";
    static DEGREES: "degrees";
    static EXP: "exp";
    static EXP2: "exp2";
    static LOG: "log";
    static LOG2: "log2";
    static SQRT: "sqrt";
    static INVERSE_SQRT: "inversesqrt";
    static FLOOR: "floor";
    static CEIL: "ceil";
    static NORMALIZE: "normalize";
    static FRACT: "fract";
    static SIN: "sin";
    static SINH: "sinh";
    static COS: "cos";
    static COSH: "cosh";
    static TAN: "tan";
    static TANH: "tanh";
    static ASIN: "asin";
    static ASINH: "asinh";
    static ACOS: "acos";
    static ACOSH: "acosh";
    static ATAN: "atan";
    static ATANH: "atanh";
    static ABS: "abs";
    static SIGN: "sign";
    static LENGTH: "length";
    static NEGATE: "negate";
    static ONE_MINUS: "oneMinus";
    static DFDX: "dFdx";
    static DFDY: "dFdy";
    static ROUND: "round";
    static RECIPROCAL: "reciprocal";
    static TRUNC: "trunc";
    static FWIDTH: "fwidth";
    static TRANSPOSE: "transpose";
    static DETERMINANT: "determinant";
    static INVERSE: "inverse";

    // 2 inputs

    static EQUALS: "equals";
    static MIN: "min";
    static MAX: "max";
    static STEP: "step";
    static REFLECT: "reflect";
    static DISTANCE: "distance";
    static DOT: "dot";
    static CROSS: "cross";
    static POW: "pow";
    static TRANSFORM_DIRECTION: "transformDirection";

    // 3 inputs

    static MIX: "mix";
    static CLAMP: "clamp";
    static REFRACT: "refract";
    static SMOOTHSTEP: "smoothstep";
    static FACEFORWARD: "faceforward";

    method: MathNodeMethod;
    aNode: Node;
    bNode: Node | null;
    cNode: Node | null;

    readonly isMathNode: true;

    constructor(method: MathNodeMethod1, aNode: Node);
    constructor(method: MathNodeMethod2, aNode: Node, bNode: Node);
    constructor(method: MathNodeMethod3, aNode: Node, bNode: Node, cNode: Node);
}

type FloatOrNumber = Node<"float"> | number;
type FloatVector = Node<"vec2"> | Node<"vec3"> | Node<"vec4">;
type FloatVectorOrNumber = FloatOrNumber | Node<"vec2"> | Node<"vec3"> | Node<"vec4">;

type NumberVectorOrNumber =
    | FloatVectorOrNumber
    | Node<"int">
    | Node<"uint">
    | Node<"ivec2">
    | Node<"ivec3">
    | Node<"ivec4">
    | Node<"uvec2">
    | Node<"uvec3">
    | Node<"uvec4">;

type Vec2 = Node<"vec2"> | Vector2;
type Vec3 = Node<"vec3"> | Vector3 | Node<"color"> | Color;
type Vec4 = Node<"vec4"> | Vector4;

type Vec2OrFloat = Vec2 | FloatOrNumber;
type Vec3OrFloat = Vec3 | FloatOrNumber;
type Vec4OrFloat = Vec4 | FloatOrNumber;

type Mat2 = Node<"mat2"> | Matrix2;
type Mat3 = Node<"mat3"> | Matrix3;
type Mat4 = Node<"mat4"> | Matrix4;

type Matrix = Mat2 | Mat3 | Mat4;

export const EPSILON: Node<"float">;
export const INFINITY: Node<"float">;
export const PI: Node<"float">;

/**
 * @deprecated Please use the non-deprecated version `TWO_PI`.
 */
export const PI2: Node<"float">;

export const TWO_PI: Node<"float">;

export const HALF_PI: Node<"float">;

type BoolOrVector = Node<"bool"> | boolean | Node<"bvec2"> | Node<"bvec3"> | Node<"bvec4">;

export const all: (x: BoolOrVector) => Node<"bool">;
export const any: (x: BoolOrVector) => Node<"bool">;
declare module "../core/Node.js" {
    interface BoolOrVecExtensions<TNodeType> {
        all: () => Node<"bool">;
        any: () => Node<"bool">;
    }
}

interface UnaryFloatVecFunction {
    (x: FloatOrNumber): Node<"float">;
    (x: Vec2): Node<"vec2">;
    (x: Vec3): Node<"vec3">;
    (x: Vec4): Node<"vec4">;
}
export const radians: UnaryFloatVecFunction;
export const degrees: UnaryFloatVecFunction;
export const exp: UnaryFloatVecFunction;
export const exp2: UnaryFloatVecFunction;
export const log: UnaryFloatVecFunction;
export const log2: UnaryFloatVecFunction;
export const sqrt: UnaryFloatVecFunction;
export const inverseSqrt: UnaryFloatVecFunction;
export const floor: UnaryFloatVecFunction;
export const ceil: UnaryFloatVecFunction;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        radians: () => Node<TNodeType>;
        degrees: () => Node<TNodeType>;
        exp: () => Node<TNodeType>;
        exp2: () => Node<TNodeType>;
        log: () => Node<TNodeType>;
        log2: () => Node<TNodeType>;
        sqrt: () => Node<TNodeType>;
        inverseSqrt: () => Node<TNodeType>;
        floor: () => Node<TNodeType>;
        ceil: () => Node<TNodeType>;
    }
}

interface Normalize {
    (x: Vec2): Node<"vec2">;
    (x: Vec3): Node<"vec3">;
    (x: Vec4): Node<"vec4">;
}
export const normalize: Normalize;
declare module "../core/Node.js" {
    interface FloatVecExtensions<TVec extends FloatVecType> {
        normalize: () => Node<TVec>;
    }
}

interface ArcTanFunction {
    (y: FloatOrNumber, x?: FloatOrNumber): Node<"float">;
    (y: Vec2OrFloat, x?: Vec2OrFloat): Node<"vec2">;
    (y: Vec3OrFloat, x?: Vec3OrFloat): Node<"vec3">;
    (y: Vec4OrFloat, x?: Vec4OrFloat): Node<"vec4">;
}

export const fract: UnaryFloatVecFunction;
export const sin: UnaryFloatVecFunction;
export const sinh: UnaryFloatVecFunction;
export const cos: UnaryFloatVecFunction;
export const cosh: UnaryFloatVecFunction;
export const tan: UnaryFloatVecFunction;
export const tanh: UnaryFloatVecFunction;
export const asin: UnaryFloatVecFunction;
export const asinh: UnaryFloatVecFunction;
export const acos: UnaryFloatVecFunction;
export const acosh: UnaryFloatVecFunction;
export const atan: ArcTanFunction;
export const atanh: UnaryFloatVecFunction;

declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        fract: () => Node<TNodeType>;
        sin: () => Node<TNodeType>;
        sinh: () => Node<TNodeType>;
        cos: () => Node<TNodeType>;
        cosh: () => Node<TNodeType>;
        tan: () => Node<TNodeType>;
        tanh: () => Node<TNodeType>;
        asin: () => Node<TNodeType>;
        asinh: () => Node<TNodeType>;
        acos: () => Node<TNodeType>;
        acosh: () => Node<TNodeType>;
        atanh: () => Node<TNodeType>;
    }
}

declare module "../core/Node.js" {
    interface FloatExtensions {
        atan: (x?: FloatOrNumber) => Node<"float">;
    }
    interface Vec2Extensions {
        atan: (x?: Vec2OrFloat) => Node<"vec2">;
    }
    interface Vec3Extensions {
        atan: (x?: Vec3OrFloat) => Node<"vec3">;
    }
    interface Vec4Extensions {
        atan: (x?: Vec4OrFloat) => Node<"vec4">;
    }
}

interface UnaryNumVecFunction {
    (x: FloatOrNumber): Node<"float">;
    (x: Node<"int">): Node<"int">;
    (x: Node<"uint">): Node<"uint">;
    (x: Vec2): Node<"vec2">;
    (x: Node<"ivec2">): Node<"ivec2">;
    (x: Node<"uvec2">): Node<"uvec2">;
    (x: Vec3): Node<"vec3">;
    (x: Node<"ivec3">): Node<"ivec3">;
    (x: Node<"uvec3">): Node<"uvec3">;
    (x: Vec4): Node<"vec4">;
    (x: Node<"ivec4">): Node<"ivec4">;
    (x: Node<"uvec4">): Node<"uvec4">;
}

export const abs: UnaryNumVecFunction;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        abs: () => Node<TNodeType>;
    }
    interface IntOrVecExtensions<TNodeType> {
        abs: () => Node<TNodeType>;
    }
    interface UintOrVecExtensions<TNodeType> {
        abs: () => Node<TNodeType>;
    }
}

interface SignFunction {
    (x: FloatOrNumber): Node<"float">;
    (x: Node<"int">): Node<"int">;
    (x: Vec2): Node<"vec2">;
    (x: Node<"ivec2">): Node<"ivec2">;
    (x: Vec3): Node<"vec3">;
    (x: Node<"ivec3">): Node<"ivec3">;
    (x: Vec4): Node<"vec4">;
    (x: Node<"ivec4">): Node<"ivec4">;
}
export const sign: SignFunction;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        sign: () => Node<TNodeType>;
    }
    interface IntOrVecExtensions<TNodeType> {
        sign: () => Node<TNodeType>;
    }
}

export const length: (x: NumberVectorOrNumber) => Node<"float">;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        length: () => Node<"float">;
    }
    interface IntOrVecExtensions<TNodeType> {
        length: () => Node<"float">;
    }
}

interface NegateFunction {
    (x: FloatOrNumber): Node<"float">;
    (x: Node<"int">): Node<"int">;
    (x: Vec2): Node<"vec2">;
    (x: Node<"ivec2">): Node<"ivec2">;
    (x: Vec3): Node<"vec3">;
    (x: Node<"ivec3">): Node<"ivec3">;
    (x: Vec4): Node<"vec4">;
    (x: Node<"ivec4">): Node<"ivec4">;
}
export const negate: NegateFunction;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        negate: () => Node<TNodeType>;
    }
    interface IntOrVecExtensions<TNodeType> {
        negate: () => Node<TNodeType>;
    }
}

export const oneMinus: UnaryFloatVecFunction;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        oneMinus: () => Node<TNodeType>;
    }
}

export const dFdx: UnaryFloatVecFunction;
export const dFdy: UnaryFloatVecFunction;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        dFdx: () => Node<TNodeType>;
        dFdy: () => Node<TNodeType>;
    }
}

export const round: UnaryNumVecFunction;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        round: () => Node<TNodeType>;
    }
    interface IntOrVecExtensions<TNodeType> {
        round: () => Node<TNodeType>;
    }
    interface UintOrVecExtensions<TNodeType> {
        round: () => Node<TNodeType>;
    }
}

export const reciprocal: UnaryFloatVecFunction;
export const trunc: UnaryFloatVecFunction;
export const fwidth: UnaryFloatVecFunction;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        reciprocal: () => Node<TNodeType>;
        trunc: () => Node<TNodeType>;
        fwidth: () => Node<TNodeType>;
    }
}

interface Transpose {
    (x: Mat2): Node<"mat2">;
    (x: Mat3): Node<"mat3">;
    (x: Mat4): Node<"mat4">;
}
export const transpose: Transpose;
declare module "../core/Node.js" {
    interface MatExtensions<TMat extends MatType> {
        transpose: () => Node<TMat>;
    }
}

export const determinant: (x: Matrix) => Node<"float">;
declare module "../core/Node.js" {
    interface MatExtensions<TMat extends MatType> {
        determinant: () => Node<"float">;
    }
}

interface Inverse {
    (x: Mat2): Node<"mat2">;
    (x: Mat3): Node<"mat3">;
    (x: Mat4): Node<"mat4">;
}
export const inverse: Inverse;
declare module "../core/Node.js" {
    interface MatExtensions<TMat extends MatType> {
        inverse: () => Node<TMat>;
    }
}

// TODO Allow int/uint
interface MinMax {
    (x: FloatOrNumber, y: FloatOrNumber, ...params: FloatOrNumber[]): Node<"float">;
    (x: Vec2OrFloat, y: Vec2OrFloat, ...params: Vec2OrFloat[]): Node<"vec2">;
    (x: Vec3OrFloat, y: Vec3OrFloat, ...params: Vec3OrFloat[]): Node<"vec3">;
    (x: Vec4OrFloat, y: Vec4OrFloat, ...params: Vec4OrFloat[]): Node<"vec4">;
}
export const min: MinMax;
export const max: MinMax;
interface MinMaxFloatExtension {
    (y: FloatOrNumber, ...params: FloatOrNumber[]): Node<"float">;
    (y: Vec2OrFloat, ...params: Vec2OrFloat[]): Node<"vec2">;
    (y: Vec3OrFloat, ...params: Vec3OrFloat[]): Node<"vec3">;
    (y: Vec4OrFloat, ...params: Vec4OrFloat[]): Node<"vec4">;
}
interface MinMaxVec2Extension {
    (y: Vec2OrFloat, ...params: Vec2OrFloat[]): Node<"vec2">;
    (y: Vec3OrFloat, ...params: Vec3OrFloat[]): Node<"vec3">;
    (y: Vec4OrFloat, ...params: Vec4OrFloat[]): Node<"vec4">;
}
interface MinMaxVec3Extension {
    (y: Vec3OrFloat, ...params: Vec3OrFloat[]): Node<"vec3">;
    (y: Vec4OrFloat, ...params: Vec4OrFloat[]): Node<"vec4">;
}
interface MinMaxVec4Extension {
    (y: Vec4OrFloat, ...params: Vec4OrFloat[]): Node<"vec4">;
}
declare module "../core/Node.js" {
    interface FloatExtensions {
        min: MinMaxFloatExtension;
        max: MinMaxFloatExtension;
    }
    interface Vec2Extensions {
        min: MinMaxVec2Extension;
        max: MinMaxVec2Extension;
    }
    interface Vec3Extensions {
        min: MinMaxVec3Extension;
        max: MinMaxVec3Extension;
    }
    interface Vec4Extensions {
        min: MinMaxVec4Extension;
        max: MinMaxVec4Extension;
    }
}

interface Step {
    (edge: FloatOrNumber, x: FloatOrNumber): Node<"float">;
    (edge: Vec2OrFloat, x: Vec2OrFloat): Node<"vec2">;
    (edge: Vec3OrFloat, x: Vec3OrFloat): Node<"vec3">;
    (edge: Vec4OrFloat, x: Vec4OrFloat): Node<"vec4">;
}
export const step: Step;

interface Reflect {
    (I: Vec2OrFloat, N: Vec2OrFloat): Node<"vec2">;
    (I: Vec3OrFloat, N: Vec3OrFloat): Node<"vec3">;
    (I: Vec4OrFloat, N: Vec4OrFloat): Node<"vec4">;
}
export const reflect: Reflect;
interface ReflectVec2Extension {
    (N: Vec2OrFloat): Node<"vec2">;
}
interface ReflectVec3Extension {
    (N: Vec3OrFloat): Node<"vec3">;
}
interface ReflectVec4Extension {
    (N: Vec4OrFloat): Node<"vec4">;
}
declare module "../core/Node.js" {
    interface Vec2Extensions {
        reflect: ReflectVec2Extension;
    }
    interface Vec3Extensions {
        reflect: ReflectVec3Extension;
    }
    interface Vec4Extensions {
        reflect: ReflectVec4Extension;
    }
}

export const distance: (x: FloatVectorOrNumber, y: FloatVectorOrNumber) => Node<"float">;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        distance: (y: FloatVectorOrNumber) => Node<"float">;
    }
}

// TODO Allow int/uint
interface Difference {
    (x: FloatOrNumber, y: FloatOrNumber): Node<"float">;
    (x: Vec2OrFloat, y: Vec2OrFloat): Node<"vec2">;
    (x: Vec3OrFloat, y: Vec3OrFloat): Node<"vec3">;
    (x: Vec4OrFloat, y: Vec4OrFloat): Node<"vec4">;
}
export const difference: Difference;
interface DifferenceFloatExtension {
    (y: FloatOrNumber): Node<"float">;
    (y: Vec2OrFloat): Node<"vec2">;
    (y: Vec3OrFloat): Node<"vec3">;
    (y: Vec4OrFloat): Node<"vec4">;
}
interface DifferenceVec2Extension {
    (y: Vec2OrFloat): Node<"vec2">;
}
interface DifferenceVec3Extension {
    (y: Vec3OrFloat): Node<"vec3">;
}
interface DifferenceVec4Extension {
    (y: Vec4OrFloat): Node<"vec4">;
}
declare module "../core/Node.js" {
    interface FloatExtensions {
        difference: DifferenceFloatExtension;
    }
    interface Vec2Extensions {
        difference: DifferenceVec2Extension;
    }
    interface Vec3Extensions {
        difference: DifferenceVec3Extension;
    }
    interface Vec4Extensions {
        difference: DifferenceVec4Extension;
    }
}

// TODO Allow int/uint
export const dot: (x: FloatVector, y: FloatVector) => Node<"float">;
declare module "../core/Node.js" {
    interface FloatVecExtensions<TVec extends FloatVecType> {
        dot: (y: FloatVector) => Node<"float">;
    }
}

export const cross: (x: Vec3, y: Vec3) => Node<"vec3">;
declare module "../core/Node.js" {
    interface Vec3Extensions {
        cross: (y: Vec3) => Node<"vec3">;
    }
}

interface Pow {
    (x: FloatOrNumber, y: FloatOrNumber): Node<"float">;
    (x: Vec2OrFloat, y: Vec2OrFloat): Node<"vec2">;
    (x: Vec3OrFloat, y: Vec3OrFloat): Node<"vec3">;
    (x: Vec4OrFloat, y: Vec4OrFloat): Node<"vec4">;
}
export const pow: Pow;
interface PowFloatExtension {
    (y: FloatOrNumber): Node<"float">;
    (y: Vec2OrFloat): Node<"vec2">;
    (y: Vec3OrFloat): Node<"vec3">;
    (y: Vec4OrFloat): Node<"vec4">;
}
interface PowVec2Extension {
    (y: Vec2OrFloat): Node<"vec2">;
}
interface PowVec3Extension {
    (y: Vec3OrFloat): Node<"vec3">;
}
interface PowVec4Extension {
    (y: Vec4OrFloat): Node<"vec4">;
}
declare module "../core/Node.js" {
    interface FloatExtensions {
        pow: PowFloatExtension;
    }
    interface Vec2Extensions {
        pow: PowVec2Extension;
    }
    interface Vec3Extensions {
        pow: PowVec3Extension;
    }
    interface Vec4Extensions {
        pow: PowVec4Extension;
    }
}

interface PowConstant {
    (x: FloatOrNumber): Node<"float">;
    (x: Vec2): Node<"vec2">;
    (x: Vec3): Node<"vec3">;
    (x: Vec4): Node<"vec4">;
}
export const pow2: PowConstant;
export const pow3: PowConstant;
export const pow4: PowConstant;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        pow2: () => Node<TNodeType>;
        pow3: () => Node<TNodeType>;
        pow4: () => Node<TNodeType>;
    }
}

interface TransformDirection {
    (direction: Vec3, matrix: Mat3 | Mat4): Node<"vec3">;
    (matrix: Mat3 | Mat4, direction: Vec3): Node<"vec3">;
}

export const transformDirection: TransformDirection;
declare module "../core/Node.js" {
    interface Vec3Extensions {
        transformDirection: (matrix: Mat3 | Mat4) => Node<"vec3">;
    }
    interface Mat3Extensions {
        transformDirection: (direction: Vec3) => Node<"vec3">;
    }
    interface Mat4Extensions {
        transformDirection: (direction: Vec3) => Node<"vec3">;
    }
}

interface TransformNormalByViewMatrix {
    (normal: Vec3, viewMatrix: Mat3 | Mat4): Node<"vec3">;
}

export const transformNormalByViewMatrix: TransformNormalByViewMatrix;
export const transformNormalByInverseViewMatrix: TransformNormalByViewMatrix;
declare module "../core/Node.js" {
    interface Vec3Extensions {
        transformNormalByViewMatrix: (matrix: Mat3 | Mat4) => Node<"vec3">;
        transformNormalByInverseViewMatrix: (matrix: Mat3 | Mat4) => Node<"vec3">;
    }
}

export const cbrt: (a: FloatOrNumber) => Node<"float">;
declare module "../core/Node.js" {
    interface FloatExtensions {
        cbrt: () => Node<"float">;
    }
}

export const lengthSq: (a: FloatVector) => Node<"float">;
declare module "../core/Node.js" {
    interface FloatVecExtensions<TVec extends FloatVecType> {
        lengthSq: () => Node<"float">;
    }
}

interface Mix {
    (a: FloatOrNumber, b: FloatOrNumber, t: FloatOrNumber): Node<"float">;
    (a: Vec2OrFloat, b: Vec2OrFloat, t: FloatOrNumber): Node<"vec2">;
    (a: Vec3OrFloat, b: Vec3OrFloat, t: FloatOrNumber): Node<"vec3">;
    (a: Vec4OrFloat | Vec3, b: Vec4OrFloat | Vec3, t: FloatOrNumber): Node<"vec4">;
}
export const mix: Mix;

// TODO Allow int/uint
interface Clamp {
    (value: FloatOrNumber, low?: FloatOrNumber, high?: FloatOrNumber): Node<"float">;
    (value: Vec2OrFloat, low?: Vec2OrFloat, high?: Vec2OrFloat): Node<"vec2">;
    (value: Vec3OrFloat, low?: Vec3OrFloat, high?: Vec3OrFloat): Node<"vec3">;
    (value: Vec4OrFloat, low?: Vec4OrFloat, high?: Vec4OrFloat): Node<"vec4">;
}
export const clamp: Clamp;
interface ClampFloatExtension {
    (low?: FloatOrNumber, high?: FloatOrNumber): Node<"float">;
    (low?: Vec2OrFloat, high?: Vec2OrFloat): Node<"vec2">;
    (low?: Vec3OrFloat, high?: Vec3OrFloat): Node<"vec3">;
    (low?: Vec4OrFloat, high?: Vec4OrFloat): Node<"vec4">;
}
interface ClampVec2Extension {
    (low?: Vec2OrFloat, high?: Vec2OrFloat): Node<"vec2">;
}
interface ClampVec3Extension {
    (low?: Vec3OrFloat, high?: Vec3OrFloat): Node<"vec3">;
}
interface ClampVec4Extension {
    (low?: Vec4OrFloat, high?: Vec4OrFloat): Node<"vec4">;
}
declare module "../core/Node.js" {
    interface FloatExtensions {
        clamp: ClampFloatExtension;
    }
    interface Vec2Extensions {
        clamp: ClampVec2Extension;
    }
    interface Vec3Extensions {
        clamp: ClampVec3Extension;
    }
    interface Vec4Extensions {
        clamp: ClampVec4Extension;
    }
}

interface Saturate {
    (value: FloatOrNumber): Node<"float">;
    (value: Vec2): Node<"vec2">;
    (value: Vec3): Node<"vec3">;
    (value: Vec4): Node<"vec4">;
}
export const saturate: Saturate;
declare module "../core/Node.js" {
    interface FloatOrVecExtensions<TNodeType> {
        saturate: () => Node<TNodeType>;
    }
}

interface Refract {
    (I: Vec2OrFloat, N: Vec2OrFloat, ratio: FloatOrNumber): Node<"vec2">;
    (I: Vec3OrFloat, N: Vec3OrFloat, ratio: FloatOrNumber): Node<"vec3">;
    (I: Vec4OrFloat, N: Vec4OrFloat, ratio: FloatOrNumber): Node<"vec4">;
}
export const refract: Refract;
interface RefractVec2Extension {
    (N: Vec2OrFloat, ratio: FloatOrNumber): Node<"vec2">;
}
interface RefractVec3Extension {
    (N: Vec3OrFloat, ratio: FloatOrNumber): Node<"vec3">;
}
interface RefractVec4Extension {
    (N: Vec4OrFloat, ratio: FloatOrNumber): Node<"vec4">;
}
declare module "../core/Node.js" {
    interface Vec2Extensions {
        refract: RefractVec2Extension;
    }
    interface Vec3Extensions {
        refract: RefractVec3Extension;
    }
    interface Vec4Extensions {
        refract: RefractVec4Extension;
    }
}

interface Smoothstep {
    (low: FloatOrNumber, high: FloatOrNumber, x: FloatOrNumber): Node<"float">;
    (low: Vec2OrFloat, high: Vec2OrFloat, x: Vec2OrFloat): Node<"vec2">;
    (low: Vec3OrFloat, high: Vec3OrFloat, x: Vec3OrFloat): Node<"vec3">;
    (low: Vec4OrFloat, high: Vec4OrFloat, x: Vec4OrFloat): Node<"vec4">;
}
export const smoothstep: Smoothstep;

interface FaceForward {
    (N: Vec2OrFloat, I: Vec2OrFloat, Nref: Vec2OrFloat): Node<"vec2">;
    (N: Vec3OrFloat, I: Vec3OrFloat, Nref: Vec3OrFloat): Node<"vec3">;
    (N: Vec4OrFloat, I: Vec4OrFloat, Nref: Vec4OrFloat): Node<"vec4">;
}
export const faceForward: FaceForward;
interface FaceForwardVec2Extension {
    (I: Vec2OrFloat, Nref: Vec2OrFloat): Node<"vec2">;
}
interface FaceForwardVec3Extension {
    (N: Vec3OrFloat, ratio: Vec3OrFloat): Node<"vec3">;
}
interface FaceForwardVec4Extension {
    (N: Vec4OrFloat, ratio: Vec4OrFloat): Node<"vec4">;
}
declare module "../core/Node.js" {
    interface Vec2Extensions {
        faceForward: FaceForwardVec2Extension;
    }
    interface Vec3Extensions {
        faceForward: FaceForwardVec3Extension;
    }
    interface Vec4Extensions {
        faceForward: FaceForwardVec4Extension;
    }
}

export const rand: (uv: Vec2) => Node<"float">;
declare module "../core/Node.js" {
    interface Vec2Extensions {
        rand: () => Node<"float">;
    }
}

interface MixElement {
    (t: FloatOrNumber, e1: FloatOrNumber, e2: FloatOrNumber): Node<"float">;
    (t: FloatOrNumber, e1: Vec2OrFloat, e2: Vec2OrFloat): Node<"vec2">;
    (t: FloatOrNumber, e1: Vec3OrFloat, e2: Vec3OrFloat): Node<"vec3">;
    (t: FloatOrNumber, e1: Vec4OrFloat | Vec3, e2: Vec4OrFloat | Vec3): Node<"vec4">;
}
export const mixElement: MixElement;
interface MixExtension {
    (e1: FloatOrNumber, e2: FloatOrNumber): Node<"float">;
    (e1: Vec2OrFloat, e2: Vec2OrFloat): Node<"vec2">;
    (e1: Vec3OrFloat, e2: Vec3OrFloat): Node<"vec3">;
    (e1: Vec4OrFloat | Vec3, e2: Vec4OrFloat | Vec3): Node<"vec4">;
}
declare module "../core/Node.js" {
    interface FloatExtensions {
        mix: MixExtension;
    }
}

interface SmoothstepElement {
    (x: FloatOrNumber, low: FloatOrNumber, high: FloatOrNumber): Node<"float">;
    (x: Vec2OrFloat, low: Vec2OrFloat, high: Vec2OrFloat): Node<"vec2">;
    (x: Vec3OrFloat, low: Vec3OrFloat, high: Vec3OrFloat): Node<"vec3">;
    (x: Vec4OrFloat, low: Vec4OrFloat, high: Vec4OrFloat): Node<"vec4">;
}
export const smoothstepElement: SmoothstepElement;
interface SmoothstepFloatExtension {
    (low: FloatOrNumber, high: FloatOrNumber): Node<"float">;
}
interface SmoothstepVec2Extension {
    (low: Vec2OrFloat, high: Vec2OrFloat): Node<"vec2">;
}
interface SmoothstepVec3Extension {
    (low: Vec3OrFloat, high: Vec3OrFloat): Node<"vec3">;
}
interface SmoothstepVec4Extension {
    (low: Vec4OrFloat, high: Vec4OrFloat): Node<"vec4">;
}
declare module "../core/Node.js" {
    interface FloatExtensions {
        smoothstep: SmoothstepFloatExtension;
    }
    interface Vec2Extensions {
        smoothstep: SmoothstepVec2Extension;
    }
    interface Vec3Extensions {
        smoothstep: SmoothstepVec3Extension;
    }
    interface Vec4Extensions {
        smoothstep: SmoothstepVec4Extension;
    }
}

interface StepElement {
    (x: FloatOrNumber, edge: FloatOrNumber): Node<"float">;
    (x: Vec2OrFloat, edge: Vec2OrFloat): Node<"vec2">;
    (x: Vec3OrFloat, edge: Vec3OrFloat): Node<"vec3">;
    (x: Vec4OrFloat, edge: Vec4OrFloat): Node<"vec4">;
}
export const stepElement: StepElement;
declare module "../core/Node.js" {
    interface FloatExtensions {
        step: (edge: FloatOrNumber) => Node<"float">;
    }
    interface Vec2Extensions {
        step: (edge: Vec2OrFloat) => Node<"vec2">;
    }
    interface Vec3Extensions {
        step: (edge: Vec3OrFloat) => Node<"vec3">;
    }
    interface Vec4Extensions {
        step: (edge: Vec4OrFloat) => Node<"vec4">;
    }
}

// GLSL alias function

export const faceforward: typeof faceForward;
export const inversesqrt: typeof inverseSqrt;

export {};
