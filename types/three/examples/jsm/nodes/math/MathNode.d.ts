import Node from '../core/Node';
import TempNode from '../core/TempNode';

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
    | typeof MathNode.INVERT
    | typeof MathNode.DFDX
    | typeof MathNode.DFDY
    | typeof MathNode.SATURATE
    | typeof MathNode.ROUND;

export type MathNodeMethod2 =
    | typeof MathNode.ATAN2
    | typeof MathNode.MIN
    | typeof MathNode.MAX
    | typeof MathNode.MOD
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

    static RADIANS: 'radians';
    static DEGREES: 'degrees';
    static EXP: 'exp';
    static EXP2: 'exp2';
    static LOG: 'log';
    static LOG2: 'log2';
    static SQRT: 'sqrt';
    static INVERSE_SQRT: 'inversesqrt';
    static FLOOR: 'floor';
    static CEIL: 'ceil';
    static NORMALIZE: 'normalize';
    static FRACT: 'fract';
    static SIN: 'sin';
    static COS: 'cos';
    static TAN: 'tan';
    static ASIN: 'asin';
    static ACOS: 'acos';
    static ATAN: 'atan';
    static ABS: 'abs';
    static SIGN: 'sign';
    static LENGTH: 'length';
    static NEGATE: 'negate';
    static INVERT: 'invert';
    static DFDX: 'dFdx';
    static DFDY: 'dFdy';
    static SATURATE: 'saturate';
    static ROUND: 'round';

    // 2 inputs

    static ATAN2: 'atan2';
    static MIN: 'min';
    static MAX: 'max';
    static MOD: 'mod';
    static STEP: 'step';
    static REFLECT: 'reflect';
    static DISTANCE: 'distance';
    static DOT: 'dot';
    static CROSS: 'cross';
    static POW: 'pow';
    static TRANSFORM_DIRECTION: 'transformDirection';

    // 3 inputs

    static MIX: 'mix';
    static CLAMP: 'clamp';
    static REFRACT: 'refract';
    static SMOOTHSTEP: 'smoothstep';
    static FACEFORWARD: 'faceforward';

    method: MathNodeMethod;
    aNode: Node;
    bNode: Node | null;
    cNode: Node | null;

    constructor(method: MathNodeMethod1, aNode: Node);
    constructor(method: MathNodeMethod2, aNode: Node, bNode: Node);
    constructor(method: MathNodeMethod3, aNode: Node, bNode: Node, cNode: Node);
}
