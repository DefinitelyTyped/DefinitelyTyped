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
    | typeof MathNode.COS
    | typeof MathNode.TAN
    | typeof MathNode.ASIN
    | typeof MathNode.ACOS
    | typeof MathNode.ATAN
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
    static COS: "cos";
    static TAN: "tan";
    static ASIN: "asin";
    static ACOS: "acos";
    static ATAN: "atan";
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
type IntOrNumber = Node<"int"> | number;
type FloatVector = Node<"vec2"> | Node<"vec3"> | Node<"vec4">;
type FloatVectorOrNumber = FloatOrNumber | Node<"vec2"> | Node<"vec3"> | Node<"vec4">;

type BoolVector = Node<"bvec2"> | Node<"bvec3"> | Node<"bvec4">;

type Matrix = Node<"mat2"> | Node<"mat3"> | Node<"mat4">;

type Vec2OrLessOrFloat = FloatOrNumber | Node<"vec2">;
type Vec3OrLessOrFloat = Vec2OrLessOrFloat | Node<"vec3">;
type Vec4OrLessOrFloat = Vec3OrLessOrFloat | Node<"vec4">;

export const EPSILON: Node<"float">;
export const INFINITY: Node<"float">;
export const PI: Node<"float">;

/**
 * @deprecated Please use the non-deprecated version `TWO_PI`.
 */
export const PI2: Node<"float">;

export const TWO_PI: Node<"float">;

export const HALF_PI: Node<"float">;

export const all: (x: BoolVector) => Node<"bool">;
export const any: (x: BoolVector) => Node<"bool">;
declare module "../core/Node.js" {
    interface BvecExtensions {
        all: () => Node<"bool">;
        any: () => Node<"bool">;
    }
}

interface UnaryFunction {
    (x: FloatOrNumber): Node<"float">;
}
export const radians: UnaryFunction;
export const degrees: UnaryFunction;
export const exp: UnaryFunction;
export const exp2: UnaryFunction;
export const log: UnaryFunction;
export const log2: UnaryFunction;
export const sqrt: UnaryFunction;
export const inverseSqrt: UnaryFunction;
declare module "../core/Node.js" {
    interface FloatExtensions {
        radians: () => Node<"float">;
        degrees: () => Node<"float">;
        exp: () => Node<"float">;
        exp2: () => Node<"float">;
        log: () => Node<"float">;
        log2: () => Node<"float">;
        sqrt: () => Node<"float">;
        inverseSqrt: () => Node<"float">;
    }
}

interface FloorCeil {
    (x: FloatOrNumber): Node<"float">;
    (x: Node<"vec2">): Node<"vec2">;
    (x: Node<"vec3">): Node<"vec3">;
    (x: Node<"vec4">): Node<"vec4">;
}
export const floor: FloorCeil;
export const ceil: FloorCeil;
declare module "../core/Node.js" {
    interface FloatExtensions {
        floor: () => Node<"float">;
        ceil: () => Node<"float">;
    }
    interface FloatVecExtensions<TVec extends FloatVecType> {
        floor: () => Node<TVec>;
        ceil: () => Node<TVec>;
    }
}

interface Normalize {
    (x: Node<"vec2"> | Vector2): Node<"vec2">;
    (x: Node<"vec3"> | Vector3): Node<"vec3">;
    (x: Node<"vec4"> | Vector4): Node<"vec4">;
}
export const normalize: Normalize;
declare module "../core/Node.js" {
    interface FloatVecExtensions<TVec extends FloatVecType> {
        normalize: () => Node<TVec>;
    }
}

interface Fract {
    (x: FloatOrNumber): Node<"float">;
    (x: Node<"vec2">): Node<"vec2">;
    (x: Node<"vec3">): Node<"vec3">;
    (x: Node<"vec4">): Node<"vec4">;
}
export const fract: Fract;
declare module "../core/Node.js" {
    interface FloatExtensions {
        fract: () => Node<"float">;
    }
    interface FloatVecExtensions<TVec extends FloatVecType> {
        fract: () => Node<TVec>;
    }
}

export const sin: (x: FloatOrNumber) => Node<"float">;
export const cos: (x: FloatOrNumber) => Node<"float">;
export const tan: (x: FloatOrNumber) => Node<"float">;
export const asin: (x: FloatOrNumber) => Node<"float">;
export const acos: (x: FloatOrNumber) => Node<"float">;
export const atan: (y: FloatOrNumber, x?: FloatOrNumber) => Node<"float">;
declare module "../core/Node.js" {
    interface FloatExtensions {
        sin: () => Node<"float">;
        cos: () => Node<"float">;
        tan: () => Node<"float">;
        asin: () => Node<"float">;
        acos: () => Node<"float">;
        atan: (x?: FloatOrNumber) => Node<"float">;
    }
}

interface Abs {
    (x: FloatOrNumber): Node<"float">;
    (x: Node<"vec2">): Node<"vec2">;
    (x: Node<"vec3">): Node<"vec3">;
    (x: Node<"vec4">): Node<"vec4">;
    (x: IntOrNumber): Node<"int">;
}
export const abs: Abs;
declare module "../core/Node.js" {
    interface FloatExtensions {
        abs: () => Node<"float">;
    }
    interface IntExtensions {
        abs: () => Node<"int">;
    }
    interface FloatVecExtensions<TVec extends FloatVecType> {
        abs: () => Node<TVec>;
    }
}

interface Sign {
    (x: FloatOrNumber): Node<"float">;
    (x: Node<"vec2">): Node<"vec2">;
    (x: Node<"vec3">): Node<"vec3">;
    (x: Node<"vec4">): Node<"vec4">;
}
export const sign: Sign;
declare module "../core/Node.js" {
    interface FloatExtensions {
        sign: () => Node<"float">;
    }
    interface FloatVecExtensions<TVec extends FloatVecType> {
        sign: () => Node<TVec>;
    }
}

export const length: (x: FloatVector | Node) => Node<"float">;
declare module "../core/Node.js" {
    interface FloatVecExtensions<TVec extends FloatVecType> {
        length: () => Node<"float">;
    }
}

interface Negate {
    (x: FloatOrNumber): Node<"float">;
    (x: Node<"vec2">): Node<"vec2">;
    (x: Node<"vec3">): Node<"vec3">;
    (x: Node<"vec4">): Node<"vec4">;
}
export const negate: Negate;
declare module "../core/Node.js" {
    interface FloatExtensions {
        negate: () => Node<"float">;
    }
    interface FloatVecExtensions<TVec extends FloatVecType> {
        negate: () => Node<TVec>;
    }
}

interface OneMinus {
    (x: FloatOrNumber): Node<"float">;
    (x: Node<"vec2">): Node<"vec2">;
    (x: Node<"vec3">): Node<"vec3">;
    (x: Node<"vec4">): Node<"vec4">;
}
export const oneMinus: OneMinus;
declare module "../core/Node.js" {
    interface FloatExtensions {
        oneMinus: () => Node<"float">;
    }
    interface FloatVecExtensions<TVec extends FloatVecType> {
        oneMinus: () => Node<TVec>;
    }
}

interface Derivative {
    (x: Node<"vec2">): Node<"vec2">;
    (x: Node<"vec3">): Node<"vec3">;
    (x: Node<"vec4">): Node<"vec4">;
}
export const dFdx: Derivative;
export const dFdy: Derivative;
declare module "../core/Node.js" {
    interface FloatVecExtensions<TVec extends FloatVecType> {
        dFdx: () => Node<TVec>;
        dFdy: () => Node<TVec>;
    }
}

export const round: (x: FloatOrNumber) => Node<"float">;
export const reciprocal: (x: FloatOrNumber) => Node<"float">;
export const trunc: (x: FloatOrNumber) => Node<"float">;
declare module "../core/Node.js" {
    interface FloatExtensions {
        round: () => Node<"float">;
        reciprocal: () => Node<"float">;
        trunc: () => Node<"float">;
    }
}

interface Fwidth {
    (x: FloatOrNumber): Node<"float">;
    (x: Node<"vec2">): Node<"vec2">;
    (x: Node<"vec3">): Node<"vec3">;
    (x: Node<"vec4">): Node<"vec4">;
}
export const fwidth: Fwidth;
declare module "../core/Node.js" {
    interface FloatExtensions {
        fwidth: () => Node<"float">;
    }
    interface FloatVecExtensions<TVec extends FloatVecType> {
        fwidth: () => Node<TVec>;
    }
}

interface Transpose {
    (x: Node<"mat2">): Node<"mat2">;
    (x: Node<"mat3">): Node<"mat3">;
    (x: Node<"mat4">): Node<"mat4">;
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
    (x: Node<"mat2">): Node<"mat2">;
    (x: Node<"mat3">): Node<"mat3">;
    (x: Node<"mat4">): Node<"mat4">;
}
export const inverse: Inverse;
declare module "../core/Node.js" {
    interface MatExtensions<TMat extends MatType> {
        inverse: () => Node<TMat>;
    }
}

interface MinMax {
    (x: FloatOrNumber, y: FloatOrNumber, ...params: FloatOrNumber[]): Node<"float">;
    (x: Vec2OrLessOrFloat, y: Vec2OrLessOrFloat, ...params: Vec2OrLessOrFloat[]): Node<"vec2">;
    (x: Vec3OrLessOrFloat, y: Vec3OrLessOrFloat, ...params: Vec3OrLessOrFloat[]): Node<"vec3">;
    (x: Vec4OrLessOrFloat, y: Vec4OrLessOrFloat, ...params: Vec4OrLessOrFloat[]): Node<"vec4">;
}
export const min: MinMax;
export const max: MinMax;
interface MinMaxFloatExtension {
    (y: FloatOrNumber, ...params: FloatOrNumber[]): Node<"float">;
    (y: Vec2OrLessOrFloat, ...params: Vec2OrLessOrFloat[]): Node<"vec2">;
    (y: Vec3OrLessOrFloat, ...params: Vec3OrLessOrFloat[]): Node<"vec3">;
    (y: Vec4OrLessOrFloat, ...params: Vec4OrLessOrFloat[]): Node<"vec4">;
}
interface MinMaxVec2Extension {
    (y: Vec2OrLessOrFloat, ...params: Vec2OrLessOrFloat[]): Node<"vec2">;
    (y: Vec3OrLessOrFloat, ...params: Vec3OrLessOrFloat[]): Node<"vec3">;
    (y: Vec4OrLessOrFloat, ...params: Vec4OrLessOrFloat[]): Node<"vec4">;
}
interface MinMaxVec3Extension {
    (y: Vec3OrLessOrFloat, ...params: Vec3OrLessOrFloat[]): Node<"vec3">;
    (y: Vec4OrLessOrFloat, ...params: Vec4OrLessOrFloat[]): Node<"vec4">;
}
interface MinMaxVec4Extension {
    (y: Vec4OrLessOrFloat, ...params: Vec4OrLessOrFloat[]): Node<"vec4">;
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

export const step: (x: FloatOrNumber, y: FloatOrNumber) => Node<"float">;

interface Reflect {
    (I: Vec2OrLessOrFloat, N: Vec2OrLessOrFloat): Node<"vec2">;
    (I: Vec3OrLessOrFloat, N: Vec3OrLessOrFloat): Node<"vec3">;
    (I: Vec4OrLessOrFloat, N: Vec4OrLessOrFloat): Node<"vec4">;
}
export const reflect: Reflect;
interface ReflectVec2Extension {
    (N: Vec2OrLessOrFloat): Node<"vec2">;
    (N: Vec3OrLessOrFloat): Node<"vec3">;
    (N: Vec4OrLessOrFloat): Node<"vec4">;
}
interface ReflectVec3Extension {
    (N: Vec3OrLessOrFloat): Node<"vec3">;
    (N: Vec4OrLessOrFloat): Node<"vec4">;
}
interface ReflectVec4Extension {
    (N: Vec4OrLessOrFloat): Node<"vec4">;
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
    interface FloatExtensions {
        distance: (y: FloatVectorOrNumber) => Node<"float">;
    }
    interface FloatVecExtensions<TVec extends FloatVecType> {
        distance: (y: FloatVectorOrNumber) => Node<"float">;
    }
}

interface Difference {
    (x: FloatOrNumber, y: FloatOrNumber): Node<"float">;
    (x: Vec2OrLessOrFloat, y: Vec2OrLessOrFloat): Node<"vec2">;
    (x: Vec3OrLessOrFloat, y: Vec3OrLessOrFloat): Node<"vec3">;
    (x: Vec4OrLessOrFloat, y: Vec4OrLessOrFloat): Node<"vec4">;
}
export const difference: Difference;
interface DifferenceFloatExtension {
    (y: FloatOrNumber): Node<"float">;
    (y: Vec2OrLessOrFloat): Node<"vec2">;
    (y: Vec3OrLessOrFloat): Node<"vec3">;
    (y: Vec4OrLessOrFloat): Node<"vec4">;
}
interface DifferenceVec2Extension {
    (y: Vec2OrLessOrFloat): Node<"vec2">;
    (y: Vec3OrLessOrFloat): Node<"vec3">;
    (y: Vec4OrLessOrFloat): Node<"vec4">;
}
interface DifferenceVec3Extension {
    (y: Vec3OrLessOrFloat): Node<"vec3">;
    (y: Vec4OrLessOrFloat): Node<"vec4">;
}
interface DifferenceVec4Extension {
    (y: Vec4OrLessOrFloat): Node<"vec4">;
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

export const dot: (x: FloatVector, y: FloatVector) => Node<"float">;
declare module "../core/Node.js" {
    interface FloatVecExtensions<TVec extends FloatVecType> {
        dot: (y: FloatVector) => Node<"float">;
    }
}

export const cross: (x: Node<"vec3">, y: Node<"vec3">) => Node<"vec3">;
declare module "../core/Node.js" {
    interface Vec3Extensions {
        cross: (y: Node<"vec3">) => Node<"vec3">;
    }
}

interface Pow {
    (x: FloatOrNumber, y: FloatOrNumber): Node<"float">;
    (x: Node<"vec2">, y: Node<"vec2">): Node<"vec2">;
    (x: Node<"vec3">, y: Node<"vec3">): Node<"vec3">;
    (x: Node<"vec4">, y: Node<"vec4">): Node<"vec4">;
}
export const pow: (x: FloatOrNumber, y: FloatOrNumber) => Node<"float">;
declare module "../core/Node.js" {
    interface FloatExtensions {
        pow: (y: FloatOrNumber) => Node<"float">;
    }
    interface FloatVecExtensions<TVec extends FloatVecType> {
        pow: (y: Node<TVec>) => Node<TVec>;
    }
}

interface PowConstant {
    (x: FloatOrNumber): Node<"float">;
    (x: Node<"vec2">): Node<"vec2">;
    (x: Node<"vec3">): Node<"vec3">;
    (x: Node<"vec4">): Node<"vec4">;
}
export const pow2: PowConstant;
export const pow3: PowConstant;
export const pow4: PowConstant;
declare module "../core/Node.js" {
    interface FloatExtensions {
        pow2: () => Node<"float">;
        pow3: () => Node<"float">;
        pow4: () => Node<"float">;
    }
    interface FloatVecExtensions<TVec extends FloatVecType> {
        pow2: () => Node<TVec>;
        pow3: () => Node<TVec>;
        pow4: () => Node<TVec>;
    }
}

export const transformDirection: (direction: Node<"vec3">, matrix: Node<"mat3"> | Node<"mat4">) => Node<"vec3">;
declare module "../core/Node.js" {
    interface Vec3Extensions {
        transformDirection: (matrix: Node<"mat3"> | Node<"mat4">) => Node<"vec3">;
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
    (a: Vec2OrLessOrFloat, b: Vec2OrLessOrFloat, t: FloatOrNumber): Node<"vec2">;
    (a: Vec3OrLessOrFloat | Node<"color">, b: Vec3OrLessOrFloat | Node<"color">, t: FloatOrNumber): Node<"vec3">;
    (a: Vec4OrLessOrFloat, b: Vec4OrLessOrFloat, t: FloatOrNumber): Node<"vec4">;
}
export const mix: Mix;

interface Clamp {
    (value: FloatOrNumber, low?: FloatOrNumber, high?: FloatOrNumber): Node<"float">;
    (value: Vec2OrLessOrFloat, low?: Vec2OrLessOrFloat, high?: Vec2OrLessOrFloat): Node<"vec2">;
    (value: Vec3OrLessOrFloat, low?: Vec3OrLessOrFloat, high?: Vec3OrLessOrFloat): Node<"vec3">;
    (value: Vec4OrLessOrFloat, low?: Vec4OrLessOrFloat, high?: Vec4OrLessOrFloat): Node<"vec4">;
}
export const clamp: Clamp;
interface ClampFloatExtension {
    (low?: FloatOrNumber, high?: FloatOrNumber): Node<"float">;
    (low?: Vec2OrLessOrFloat, high?: Vec2OrLessOrFloat): Node<"vec2">;
    (low?: Vec3OrLessOrFloat, high?: Vec3OrLessOrFloat): Node<"vec3">;
    (low?: Vec4OrLessOrFloat, high?: Vec4OrLessOrFloat): Node<"vec4">;
}
interface ClampVec2Extension {
    (low?: Vec2OrLessOrFloat, high?: Vec2OrLessOrFloat): Node<"vec2">;
    (low?: Vec3OrLessOrFloat, high?: Vec3OrLessOrFloat): Node<"vec3">;
    (low?: Vec4OrLessOrFloat, high?: Vec4OrLessOrFloat): Node<"vec4">;
}
interface ClampVec3Extension {
    (low?: Vec3OrLessOrFloat, high?: Vec3OrLessOrFloat): Node<"vec3">;
    (low?: Vec4OrLessOrFloat, high?: Vec4OrLessOrFloat): Node<"vec4">;
}
interface ClampVec4Extension {
    (low?: Vec4OrLessOrFloat, high?: Vec4OrLessOrFloat): Node<"vec4">;
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
    (value: Node<"vec2">): Node<"vec2">;
    (value: Node<"vec3">): Node<"vec3">;
    (value: Node<"vec4">): Node<"vec4">;
}
export const saturate: Saturate;
declare module "../core/Node.js" {
    interface FloatExtensions {
        saturate: () => Node<"float">;
    }
    interface FloatVecExtensions<TVec extends FloatVecType> {
        saturate: () => Node<TVec>;
    }
}

interface Refract {
    (I: Vec2OrLessOrFloat, N: Vec2OrLessOrFloat, ratio: FloatOrNumber): Node<"vec2">;
    (I: Vec3OrLessOrFloat, N: Vec3OrLessOrFloat, ratio: FloatOrNumber): Node<"vec3">;
    (I: Vec4OrLessOrFloat, N: Vec4OrLessOrFloat, ratio: FloatOrNumber): Node<"vec4">;
}
export const refract: Refract;
interface RefractVec2Extension {
    (N: Vec2OrLessOrFloat, ratio: FloatOrNumber): Node<"vec2">;
    (N: Vec3OrLessOrFloat, ratio: FloatOrNumber): Node<"vec3">;
    (N: Vec4OrLessOrFloat, ratio: FloatOrNumber): Node<"vec4">;
}
interface RefractVec3Extension {
    (N: Vec3OrLessOrFloat, ratio: FloatOrNumber): Node<"vec3">;
    (N: Vec4OrLessOrFloat, ratio: FloatOrNumber): Node<"vec4">;
}
interface RefractVec4Extension {
    (N: Vec4OrLessOrFloat, ratio: FloatOrNumber): Node<"vec4">;
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
}
export const smoothstep: Smoothstep;

interface FaceForward {
    (N: Vec2OrLessOrFloat, I: Vec2OrLessOrFloat, Nref: Vec2OrLessOrFloat): Node<"vec2">;
    (N: Vec3OrLessOrFloat, I: Vec3OrLessOrFloat, Nref: Vec3OrLessOrFloat): Node<"vec3">;
    (N: Vec4OrLessOrFloat, I: Vec4OrLessOrFloat, Nref: Vec4OrLessOrFloat): Node<"vec4">;
}
export const faceForward: FaceForward;
interface FaceForwardVec2Extension {
    (I: Vec2OrLessOrFloat, Nref: Vec2OrLessOrFloat): Node<"vec2">;
    (I: Vec3OrLessOrFloat, Nref: Vec3OrLessOrFloat): Node<"vec3">;
    (I: Vec4OrLessOrFloat, Nref: Vec4OrLessOrFloat): Node<"vec4">;
}
interface FaceForwardVec3Extension {
    (N: Vec3OrLessOrFloat, ratio: Vec3OrLessOrFloat): Node<"vec3">;
    (N: Vec4OrLessOrFloat, ratio: Vec4OrLessOrFloat): Node<"vec4">;
}
interface FaceForwardVec4Extension {
    (N: Vec4OrLessOrFloat, ratio: Vec4OrLessOrFloat): Node<"vec4">;
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

export const rand: (uv: Node<"vec2">) => Node<"float">;
declare module "../core/Node.js" {
    interface Vec2Extensions {
        rand: () => Node<"float">;
    }
}

interface MixElement {
    (t: FloatOrNumber, e1: FloatOrNumber, e2: FloatOrNumber): Node<"float">;
    (t: FloatOrNumber, e1: Vec2OrLessOrFloat, e2: Vec2OrLessOrFloat): Node<"vec2">;
    (t: FloatOrNumber, e1: Vec3OrLessOrFloat | Node<"color">, e2: Vec3OrLessOrFloat | Node<"color">): Node<"vec3">;
    (t: FloatOrNumber, e1: Vec4OrLessOrFloat, e2: Vec4OrLessOrFloat): Node<"vec4">;
}
export const mixElement: MixElement;
interface MixExtension {
    (e1: FloatOrNumber, e2: FloatOrNumber): Node<"float">;
    (e1: Vec2OrLessOrFloat, e2: Vec2OrLessOrFloat): Node<"vec2">;
    (e1: Vec3OrLessOrFloat | Node<"color">, e2: Vec3OrLessOrFloat | Node<"color">): Node<"vec3">;
    (e1: Vec4OrLessOrFloat | Node<"color">, e2: Vec4OrLessOrFloat | Node<"color">): Node<"vec4">;
}
declare module "../core/Node.js" {
    interface FloatExtensions {
        mix: MixExtension;
    }
}

interface SmoothstepElement {
    (x: FloatOrNumber, low: FloatOrNumber, high: FloatOrNumber): Node<"float">;
}
export const smoothstepElement: SmoothstepElement;
interface SmoothstepExtension {
    (low: FloatOrNumber, high: FloatOrNumber): Node<"float">;
}
declare module "../core/Node.js" {
    interface FloatExtensions {
        smoothstep: SmoothstepExtension;
    }
}

export const stepElement: (x: FloatOrNumber, edge: FloatOrNumber) => Node<"float">;
declare module "../core/Node.js" {
    interface FloatExtensions {
        step: (edge: FloatOrNumber) => Node<"float">;
    }
}

// GLSL alias function

export const faceforward: typeof faceForward;
export const inversesqrt: typeof inverseSqrt;

export {};
