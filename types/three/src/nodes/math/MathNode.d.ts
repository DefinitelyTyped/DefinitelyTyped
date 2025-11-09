import { Vector3 } from "../../math/Vector3.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import OperatorNode from "./OperatorNode.js";

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
    static EQUALS: "equals";

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

export const EPSILON: Node;
export const INFINITY: Node;
export const PI: Node;

/**
 * @deprecated Please use the non-deprecated version `TWO_PI`.
 */
export const PI2: Node;

export const TWO_PI: Node;

export const HALF_PI: Node;

type MathNodeParameter = Node | number;

type Unary = (a: MathNodeParameter) => MathNode;

export const all: Unary;
export const any: Unary;

/**
 * @deprecated "equals" is deprecated. Use "equal" inside a vector instead, like: "bvec*( equal( ... ) )"
 */
export const equals: Unary;

export const radians: Unary;
export const degrees: Unary;
export const exp: Unary;
export const exp2: Unary;
export const log: Unary;
export const log2: Unary;
export const sqrt: Unary;
export const inverseSqrt: Unary;
export const floor: Unary;
export const ceil: Unary;
export const normalize: (a: Node | Vector3) => MathNode;
export const fract: Unary;
export const sin: Unary;
export const cos: Unary;
export const tan: Unary;
export const asin: Unary;
export const acos: Unary;
export const atan: (a: MathNodeParameter, b?: MathNodeParameter) => MathNode;
export const abs: Unary;
export const sign: Unary;
export const length: Unary;
export const negate: Unary;
export const oneMinus: Unary;
export const dFdx: Unary;
export const dFdy: Unary;
export const round: Unary;
export const reciprocal: Unary;
export const trunc: Unary;
export const fwidth: Unary;
export const transpose: Unary;
export const determinant: (x: Node) => MathNode;
export const inverse: (x: Node) => MathNode;

type Binary = (a: MathNodeParameter, b: MathNodeParameter) => MathNode;

export const min: (
    x: MathNodeParameter,
    y: MathNodeParameter,
    ...values: MathNodeParameter[]
) => MathNode;
export const max: (
    x: MathNodeParameter,
    y: MathNodeParameter,
    ...values: MathNodeParameter[]
) => MathNode;
export const step: Binary;
export const reflect: Binary;
export const distance: Binary;
export const difference: Binary;
export const dot: Binary;
export const cross: (x: Node, y: Node) => MathNode;
export const pow: Binary;
export const pow2: Unary;
export const pow3: Unary;
export const pow4: Unary;
export const transformDirection: Binary;
export const cbrt: Unary;
export const lengthSq: Unary;

type Ternary = (a: MathNodeParameter, b: MathNodeParameter, c: MathNodeParameter) => MathNode;

export const mix: Ternary;
export const clamp: (
    a: MathNodeParameter,
    b?: MathNodeParameter,
    c?: MathNodeParameter,
) => MathNode;
export const saturate: Unary;
export const refract: Ternary;
export const smoothstep: Ternary;
export const faceForward: Ternary;

export const rand: (uv: MathNodeParameter) => OperatorNode;

export const mixElement: Ternary;
export const smoothstepElement: Ternary;
export const stepElement: Binary;

/**
 * @deprecated
 */
export const atan2: Binary;

// GLSL alias function

export const faceforward: typeof faceForward;
export const inversesqrt: typeof inverseSqrt;

// Method chaining

declare module "../Nodes.js" {
    interface Node {
        all: () => MathNode;
        allAssign: () => this;

        any: () => MathNode;
        anyAssign: () => this;

        /**
         * @deprecated "equals" is deprecated. Use "equal" inside a vector instead, like: "bvec*( equal( ... ) )"
         */
        equals: () => MathNode;
        /**
         * @deprecated "equals" is deprecated. Use "equal" inside a vector instead, like: "bvec*( equal( ... ) )"
         */
        equalsAssign: () => this;

        radians: () => MathNode;
        radiansAssign: () => this;

        degrees: () => MathNode;
        degreesAssign: () => this;

        exp: () => MathNode;
        expAssign: () => this;

        exp2: () => MathNode;
        exp2Assign: () => this;

        log: () => MathNode;
        logAssign: () => this;

        log2: () => MathNode;
        log2Assign: () => this;

        sqrt: () => MathNode;
        sqrtAssign: () => this;

        inverseSqrt: () => MathNode;
        inverseSqrtAssign: () => this;

        floor: () => MathNode;
        floorAssign: () => this;

        ceil: () => MathNode;
        ceilAssign: () => this;

        normalize: () => MathNode;
        normalizeAssign: () => this;

        fract: () => MathNode;
        fractAssign: () => this;

        sin: () => MathNode;
        sinAssign: () => this;

        cos: () => MathNode;
        cosAssign: () => this;

        tan: () => MathNode;
        tanAssign: () => this;

        asin: () => MathNode;
        asinAssign: () => this;

        acos: () => MathNode;
        acosAssign: () => this;

        atan: (b?: MathNodeParameter) => MathNode;
        atanAssign: (b?: MathNodeParameter) => this;

        abs: () => MathNode;
        absAssign: () => this;

        sign: () => MathNode;
        signAssign: () => this;

        length: () => MathNode;
        lengthAssign: () => this;

        lengthSq: () => MathNode;
        lengthSqAssign: () => this;

        negate: () => MathNode;
        negateAssign: () => this;

        oneMinus: () => MathNode;
        oneMinusAssign: () => this;

        dFdx: () => MathNode;
        dFdxAssign: () => this;

        dFdy: () => MathNode;
        dFdyAssign: () => this;

        round: () => MathNode;
        roundAssign: () => this;

        reciprocal: () => MathNode;
        reciprocalAssign: () => this;

        trunc: () => MathNode;
        truncAssign: () => this;

        fwidth: () => MathNode;
        fwidthAssign: () => this;

        /**
         * @deprecated
         */
        atan2: (b: MathNodeParameter) => MathNode;
        /**
         * @deprecated
         */
        atan2Assign: (b: MathNodeParameter) => this;

        min: (
            y: MathNodeParameter,
            ...values: MathNodeParameter[]
        ) => MathNode;
        minAssign: (
            y: MathNodeParameter,
            ...values: MathNodeParameter[]
        ) => this;

        max: (
            y: MathNodeParameter,
            ...values: MathNodeParameter[]
        ) => MathNode;
        maxAssign: (
            y: MathNodeParameter,
            ...values: MathNodeParameter[]
        ) => this;

        step: (b: MathNodeParameter) => MathNode;
        stepAssign: (b: MathNodeParameter) => this;

        reflect: (b: MathNodeParameter) => MathNode;
        reflectAssign: (b: MathNodeParameter) => this;

        distance: (b: MathNodeParameter) => MathNode;
        distanceAssign: (b: MathNodeParameter) => this;

        dot: (b: MathNodeParameter) => MathNode;
        dotAssign: (b: MathNodeParameter) => this;

        cross: (y: Node) => MathNode;
        crossAssign: (y: Node) => this;

        pow: (b: MathNodeParameter) => MathNode;
        powAssign: (b: MathNodeParameter) => this;

        pow2: () => MathNode;
        pow2Assign: () => this;

        pow3: () => MathNode;
        pow3Assign: () => this;

        pow4: () => MathNode;
        pow4Assign: () => this;

        transformDirection: (b: MathNodeParameter) => MathNode;
        transformDirectionAssign: (b: MathNodeParameter) => this;

        mix: (b: MathNodeParameter, c: MathNodeParameter) => MathNode;
        mixAssign: (b: MathNodeParameter, c: MathNodeParameter) => this;

        clamp: (b?: MathNodeParameter, c?: MathNodeParameter) => MathNode;
        clampAssign: (b?: MathNodeParameter, c?: MathNodeParameter) => this;

        refract: (b: MathNodeParameter, c: MathNodeParameter) => MathNode;
        refractAssign: (b: MathNodeParameter, c: MathNodeParameter) => this;

        smoothstep: (b: MathNodeParameter, c: MathNodeParameter) => MathNode;
        smoothstepAssign: (b: MathNodeParameter, c: MathNodeParameter) => this;

        faceForward: (b: MathNodeParameter, c: MathNodeParameter) => MathNode;
        faceForwardAssign: (b: MathNodeParameter, c: MathNodeParameter) => this;

        difference: (b: MathNodeParameter) => MathNode;
        differenceAssign: (b: MathNodeParameter) => this;

        saturate: () => MathNode;
        saturateAssign: () => this;

        cbrt: () => MathNode;
        cbrtAssign: () => this;

        transpose: () => MathNode;
        transposeAssign: () => this;

        determinant: () => MathNode;
        determinantAssign: () => this;

        inverse: () => MathNode;
        inverseAssign: () => this;

        rand: () => OperatorNode;
        randAssign: () => this;
    }
}
