import Node, { IntegerType, NumType } from "../core/Node.js";
import TempNode from "../core/TempNode.js";

export type OperatorNodeOp =
    | "%"
    | "&"
    | "|"
    | "^"
    | ">>"
    | "<<"
    | "=="
    | "!="
    | "&&"
    | "||"
    | "^^"
    | "<"
    | ">"
    | "<="
    | ">="
    | "+"
    | "-"
    | "*"
    | "/";

export default class OperatorNode extends TempNode {
    aNode: Node;
    bNode: Node;
    op: OperatorNodeOp;

    readonly isOperatorNode: true;

    constructor(op: OperatorNodeOp, ...params: [Node, Node, ...Node[]]);
}

type Vec2OrLess = Node<"vec2">;
type Vec3OrLess = Vec2OrLess | Node<"vec3">;
type Vec4OrLess = Vec3OrLess | Node<"vec4">;

interface NumberToVec {
    float: "vec";
    int: "ivec";
    uint: "uvec";
}

type NumberToVec2<TNum extends NumType> = `${NumberToVec[TNum]}2`;
type NumberToVec3<TNum extends NumType> = `${NumberToVec[TNum]}3`;
type NumberToVec4<TNum extends NumType> = `${NumberToVec[TNum]}4`;

type Number<TNum extends NumType> = AnyNumber; // FIXME Number<TNum> | number
type Vec2OrLessOrNumber<TNum extends NumType> = Number<TNum> | Node<NumberToVec2<TNum>>;
type Vec3OrLessOrNumber<TNum extends NumType> = Vec2OrLessOrNumber<TNum> | Node<NumberToVec3<TNum>>;
type Vec4OrLessOrNumber<TNum extends NumType> = Vec3OrLessOrNumber<TNum> | Node<NumberToVec4<TNum>>;

type AnyNumber = Node<"float"> | Node<"int"> | Node<"uint"> | number;

// add/sub/mul/div

// add/sub/mul/div numbers and/or vecs
// Every parameter gets converted to the longest type
// If the parameters are the same length, it gets converted to the first type
// FIXME We handle the case of converting number types, but not converting between vectors of different number types

interface AddSubMulDivNumberVec<TNum extends NumType> {
    (a: Number<TNum>, b: AnyNumber, ...params: AnyNumber[]): Node<TNum>;
    (
        a: Vec2OrLessOrNumber<TNum>,
        b: Vec2OrLessOrNumber<TNum>,
        ...params: Vec2OrLessOrNumber<TNum>[]
    ): Node<NumberToVec2<TNum>>;
    (
        a: Vec3OrLessOrNumber<TNum>,
        b: Vec3OrLessOrNumber<TNum>,
        ...params: Vec3OrLessOrNumber<TNum>[]
    ): Node<NumberToVec3<TNum>>;
    (
        a: Vec4OrLessOrNumber<TNum>,
        b: Vec4OrLessOrNumber<TNum>,
        ...params: Vec4OrLessOrNumber<TNum>[]
    ): Node<NumberToVec4<TNum>>;
}

interface AddSubMulDivNumberVecNumExtensions<TNum extends NumType> {
    (b: AnyNumber, ...params: AnyNumber[]): Node<TNum>;
    (b: Vec2OrLessOrNumber<TNum>, ...params: Vec2OrLessOrNumber<TNum>[]): Node<NumberToVec2<TNum>>;
    (b: Vec3OrLessOrNumber<TNum>, ...params: Vec3OrLessOrNumber<TNum>[]): Node<NumberToVec3<TNum>>;
    (b: Vec4OrLessOrNumber<TNum>, ...params: Vec4OrLessOrNumber<TNum>[]): Node<NumberToVec4<TNum>>;
}

interface AddSubMulDivNumberVecNumberAssignExtensions {
    (
        b: Vec4OrLessOrNumber<"float"> | Vec4OrLessOrNumber<"int"> | Vec4OrLessOrNumber<"uint">,
        ...params: (Vec4OrLessOrNumber<"float"> | Vec4OrLessOrNumber<"int"> | Vec4OrLessOrNumber<"uint">)[]
    ): this;
}

interface AddSubMulDivNumberVecVec2Extensions<TNum extends NumType> {
    (b: Vec2OrLessOrNumber<TNum>, ...params: Vec2OrLessOrNumber<TNum>[]): Node<NumberToVec2<TNum>>;
    (b: Vec3OrLessOrNumber<TNum>, ...params: Vec3OrLessOrNumber<TNum>[]): Node<NumberToVec3<TNum>>;
    (b: Vec4OrLessOrNumber<TNum>, ...params: Vec4OrLessOrNumber<TNum>[]): Node<NumberToVec4<TNum>>;
}

interface AddSubMulDivNumberVecVec2AssignExtensions<TNum extends NumType> {
    (b: Vec4OrLessOrNumber<TNum>, ...params: Vec4OrLessOrNumber<TNum>[]): this;
}

interface AddSubMulDivNumberVecVec3Extensions<TNum extends NumType> {
    (b: Vec3OrLessOrNumber<TNum>, ...params: Vec3OrLessOrNumber<TNum>[]): Node<NumberToVec3<TNum>>;
    (b: Vec4OrLessOrNumber<TNum>, ...params: Vec4OrLessOrNumber<TNum>[]): Node<NumberToVec4<TNum>>;
}

interface AddSubMulDivNumberVecVec3AssignExtensions<TNum extends NumType> {
    (b: Vec4OrLessOrNumber<TNum>, ...params: Vec4OrLessOrNumber<TNum>[]): this;
}

interface AddSubMulDivNumberVecVec4Extensions<TNum extends NumType> {
    (b: Vec4OrLessOrNumber<TNum>, ...params: Vec4OrLessOrNumber<TNum>[]): Node<NumberToVec4<TNum>>;
}

interface AddSubMulDivNumberVecVec4AssignExtensions<TNum extends NumType> {
    (b: Vec4OrLessOrNumber<TNum>, ...params: Vec4OrLessOrNumber<TNum>[]): this;
}

// add/sub/mul mats

interface AddSubMulMat {
    (a: Node<"mat2">, b: Node<"mat2">): Node<"mat2">;
    (a: Node<"mat3">, b: Node<"mat3">): Node<"mat3">;
    (a: Node<"mat4">, b: Node<"mat4">): Node<"mat4">;
}

interface AddSubMulMat2Extensions {
    (b: Node<"mat2">): Node<"mat2">;
}

interface AddSubMulMat2AssignExtensions {
    (b: Node<"mat2">): this;
}

interface AddSubMulMat3Extensions {
    (b: Node<"mat3">): Node<"mat3">;
}

interface AddSubMulMat3AssignExtensions {
    (b: Node<"mat3">): this;
}

interface AddSubMulMat4Extensions {
    (b: Node<"mat4">): Node<"mat4">;
}

interface AddSubMulMat4AssignExtensions {
    (b: Node<"mat3">): this;
}

// mut mats and vecs
// The vec parameter gets converted to matrix length

interface MulMatVec {
    (a: Node<"mat2">, b: Vec4OrLess): Node<"vec2">;
    (a: Node<"mat3">, b: Vec4OrLess): Node<"vec3">;
    (a: Node<"mat4">, b: Vec4OrLess): Node<"vec4">;
    (a: Vec4OrLess, b: Node<"mat2">): Node<"vec2">;
    (a: Vec4OrLess, b: Node<"mat3">): Node<"vec3">;
    (a: Vec4OrLess, b: Node<"mat4">): Node<"vec4">;
}

interface MulVecMatMat2Extensions {
    (b: Vec4OrLess): Node<"vec2">;
}

interface MulVecMatMat3Extensions {
    (b: Vec4OrLess): Node<"vec3">;
}

interface MulVecMatMat4Extensions {
    (b: Vec4OrLess): Node<"vec4">;
}

interface MulVecMatVecExtensions {
    (b: Node<"mat2">): Node<"vec2">;
    (b: Node<"mat3">): Node<"vec3">;
    (b: Node<"mat4">): Node<"vec4">;
}

// Exports

interface AddSub
    extends AddSubMulDivNumberVec<"float">, AddSubMulDivNumberVec<"int">, AddSubMulDivNumberVec<"uint">, AddSubMulMat
{}

export const add: AddSub;
export const sub: AddSub;

interface Mul
    extends
        AddSubMulDivNumberVec<"float">,
        AddSubMulDivNumberVec<"int">,
        AddSubMulDivNumberVec<"uint">,
        AddSubMulMat,
        MulMatVec
{
}

interface MulVec2Extensions<TNum extends NumType>
    extends AddSubMulDivNumberVecVec2Extensions<TNum>, MulVecMatVecExtensions
{
}

interface MulVec3Extensions<TNum extends NumType>
    extends AddSubMulDivNumberVecVec3Extensions<TNum>, MulVecMatVecExtensions
{
}

interface MulVec4Extensions<TNum extends NumType>
    extends AddSubMulDivNumberVecVec4Extensions<TNum>, MulVecMatVecExtensions
{
}

interface MulMat2Extensions extends AddSubMulMat2Extensions, MulVecMatMat2Extensions {
}

interface MulMat3Extensions extends AddSubMulMat3Extensions, MulVecMatMat3Extensions {
}

interface MulMat4Extensions extends AddSubMulMat4Extensions, MulVecMatMat4Extensions {
}

export const mul: Mul;

interface Div extends AddSubMulDivNumberVec<"float">, AddSubMulDivNumberVec<"int">, AddSubMulDivNumberVec<"uint"> {
}
export const div: Div;

declare module "../core/Node.js" {
    interface FloatExtensions {
        mul: (b: Node<"color">) => Node<"vec3">;
    }

    interface NumExtensions<TNum extends NumType> {
        add: AddSubMulDivNumberVecNumExtensions<TNum>;
        sub: AddSubMulDivNumberVecNumExtensions<TNum>;
        mul: AddSubMulDivNumberVecNumExtensions<TNum>;
        div: AddSubMulDivNumberVecNumExtensions<TNum>;

        addAssign: AddSubMulDivNumberVecNumberAssignExtensions;
        subAssign: AddSubMulDivNumberVecNumberAssignExtensions;
        mulAssign: AddSubMulDivNumberVecNumberAssignExtensions;
        divAssign: AddSubMulDivNumberVecNumberAssignExtensions;
    }

    interface Vec2Extensions {
        add: (b: Node<"color">) => Node<"vec3">;
        mul: (b: Node<"color">) => Node<"vec3">;
    }

    interface Vec3Extensions {
        add: (b: Node<"color">) => Node<"vec3">;
        mul: (b: Node<"color">) => Node<"vec3">;
    }

    interface Vec4Extensions {
        add: (b: Node<"color">) => Node<"vec4">;
        mul: (b: Node<"color">) => Node<"vec4">;
    }

    interface ColorExtensions {
        add: (b: Number<"float">) => Node<"vec3">;
        sub: (b: Number<"float">) => Node<"vec3">;
        mul: (b: Number<"float">) => Node<"vec3">;
        div: (b: Number<"float">) => Node<"vec3">;
    }

    interface NumVec2Extensions<TNum extends NumType> {
        add: AddSubMulDivNumberVecVec2Extensions<TNum>;
        sub: AddSubMulDivNumberVecVec2Extensions<TNum>;
        mul: MulVec2Extensions<TNum>;
        div: AddSubMulDivNumberVecVec2Extensions<TNum>;

        addAssign: AddSubMulDivNumberVecVec2AssignExtensions<TNum>;
        subAssign: AddSubMulDivNumberVecVec2AssignExtensions<TNum>;
        mulAssign: AddSubMulDivNumberVecVec2AssignExtensions<TNum>;
        divAssign: AddSubMulDivNumberVecVec2AssignExtensions<TNum>;
    }

    interface NumVec3Extensions<TNum extends NumType> {
        add: AddSubMulDivNumberVecVec3Extensions<TNum>;
        sub: AddSubMulDivNumberVecVec3Extensions<TNum>;
        mul: MulVec3Extensions<TNum>;
        div: AddSubMulDivNumberVecVec3Extensions<TNum>;

        addAssign: AddSubMulDivNumberVecVec3AssignExtensions<TNum>;
        subAssign: AddSubMulDivNumberVecVec3AssignExtensions<TNum>;
        mulAssign: AddSubMulDivNumberVecVec3AssignExtensions<TNum>;
        divAssign: AddSubMulDivNumberVecVec3AssignExtensions<TNum>;
    }

    interface NumVec4Extensions<TNum extends NumType> {
        add: AddSubMulDivNumberVecVec4Extensions<TNum>;
        sub: AddSubMulDivNumberVecVec4Extensions<TNum>;
        mul: MulVec4Extensions<TNum>;
        div: AddSubMulDivNumberVecVec4Extensions<TNum>;

        addAssign: AddSubMulDivNumberVecVec4AssignExtensions<TNum>;
        subAssign: AddSubMulDivNumberVecVec4AssignExtensions<TNum>;
        mulAssign: AddSubMulDivNumberVecVec4AssignExtensions<TNum>;
        divAssign: AddSubMulDivNumberVecVec4AssignExtensions<TNum>;
    }

    interface Mat2Extensions {
        add: AddSubMulMat2Extensions;
        sub: AddSubMulMat2Extensions;
        mul: MulMat2Extensions;

        addAssign: AddSubMulMat2AssignExtensions;
        subAssign: AddSubMulMat2AssignExtensions;
        mulAssign: AddSubMulMat2AssignExtensions;
    }

    interface Mat3Extensions {
        add: AddSubMulMat3Extensions;
        sub: AddSubMulMat3Extensions;
        mul: MulMat3Extensions;

        addAssign: AddSubMulMat3AssignExtensions;
        subAssign: AddSubMulMat3AssignExtensions;
        mulAssign: AddSubMulMat3AssignExtensions;
    }

    interface Mat4Extensions {
        add: AddSubMulMat4Extensions;
        sub: AddSubMulMat4Extensions;
        mul: MulMat4Extensions;

        addAssign: AddSubMulMat4AssignExtensions;
        subAssign: AddSubMulMat4AssignExtensions;
        mulAssign: AddSubMulMat4AssignExtensions;
    }
}

// mod

interface Mod {
    (a: Number<"float">, b: Vec4OrLessOrNumber<"float">): Node<"float">;
    (a: Node<"vec2">, b: Vec4OrLessOrNumber<"float">): Node<"vec2">;
    (a: Node<"vec3">, b: Vec4OrLessOrNumber<"float">): Node<"vec3">;
    (a: Node<"vec4">, b: Vec4OrLessOrNumber<"float">): Node<"vec4">;

    (a: Number<"int">, b: Vec4OrLessOrNumber<"int">): Node<"int">;
    (a: Node<"ivec2">, b: Vec4OrLessOrNumber<"int">): Node<"ivec2">;
    (a: Node<"ivec3">, b: Vec4OrLessOrNumber<"int">): Node<"ivec3">;
    (a: Node<"ivec4">, b: Vec4OrLessOrNumber<"int">): Node<"ivec4">;

    (a: Number<"uint">, b: Vec4OrLessOrNumber<"uint">): Node<"uint">;
    (a: Node<"uvec2">, b: Vec4OrLessOrNumber<"uint">): Node<"uvec2">;
    (a: Node<"uvec3">, b: Vec4OrLessOrNumber<"uint">): Node<"uvec3">;
    (a: Node<"uvec4">, b: Vec4OrLessOrNumber<"uint">): Node<"uvec4">;
}

export const mod: Mod;

declare module "../core/Node.js" {
    interface NumExtensions<TNum extends NumType> {
        mod: (b: Vec4OrLessOrNumber<TNum>) => Node<TNum>;
        modAssign: (b: Vec4OrLessOrNumber<TNum>) => this;
    }
    interface NumVec2Extensions<TNum extends NumType> {
        mod: (b: Vec4OrLessOrNumber<TNum>) => Node<NumberToVec2<TNum>>;
        modAssign: (b: Vec4OrLessOrNumber<TNum>) => this;
    }
    interface NumVec3Extensions<TNum extends NumType> {
        mod: (b: Vec4OrLessOrNumber<TNum>) => Node<NumberToVec3<TNum>>;
        modAssign: (b: Vec4OrLessOrNumber<TNum>) => this;
    }
    interface NumVec4Extensions<TNum extends NumType> {
        mod: (b: Vec4OrLessOrNumber<TNum>) => Node<NumberToVec4<TNum>>;
        modAssign: (b: Vec4OrLessOrNumber<TNum>) => this;
    }
}

// Comparison operators

interface ComparisonOperator {
    (a: Number<"float">, b: Number<"float">): Node<"bool">;
    (a: Number<"int"> | Number<"uint">, b: Number<"int"> | Number<"uint">): Node<"bool">;
}
export const equal: ComparisonOperator;
export const notEqual: ComparisonOperator;
export const lessThan: ComparisonOperator;
export const greaterThan: ComparisonOperator;
export const lessThanEqual: ComparisonOperator;
export const greaterThanEqual: ComparisonOperator;

interface ComparisonOperatorNumExtensions<TNum extends NumType> {
    (b: Number<TNum>): Node<"bool">;
}

declare module "../core/Node.js" {
    interface FloatExtensions {
        equal: ComparisonOperatorNumExtensions<"float">;
        notEqual: ComparisonOperatorNumExtensions<"float">;
        lessThan: ComparisonOperatorNumExtensions<"float">;
        greaterThan: ComparisonOperatorNumExtensions<"float">;
        lessThanEqual: ComparisonOperatorNumExtensions<"float">;
        greaterThanEqual: ComparisonOperatorNumExtensions<"float">;
    }

    interface IntExtensions {
        equal: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
        notEqual: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
        lessThan: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
        greaterThan: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
        lessThanEqual: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
        greaterThanEqual: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
    }

    interface UintExtensions {
        equal: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
        notEqual: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
        lessThan: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
        greaterThan: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
        lessThanEqual: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
        greaterThanEqual: (b: Number<"int"> | Number<"uint">) => Node<"bool">;
    }
}

// and/or/not/xor

interface AndOr {
    (a: Node<"bool">, b: Node<"bool">, ...params: Node<"bool">[]): Node<"bool">;
}
export const and: AndOr;
export const or: AndOr;

interface AndOrBoolExtensions {
    (b: Node<"bool">, ...params: Node<"bool">[]): Node<"bool">;
}

export const not: (a: Node<"bool">) => Node<"bool">;
export const xor: (a: Node<"bool">, b: Node<"bool">) => Node<"bool">;

declare module "../core/Node.js" {
    interface BoolExtensions {
        and: AndOrBoolExtensions;
        or: AndOrBoolExtensions;
        not: () => Node<"bool">;
        xor: (b: Node<"bool">) => Node<"bool">;
    }
}

// bit operators

interface UnaryBitOperator {
    (a: Number<"int">): Node<"int">;
    (a: Number<"uint">): Node<"uint">;
}

interface BinaryBitOperator {
    (a: Number<"int">, b: Number<"int">): Node<"int">;
    (a: Number<"uint">, b: Number<"uint">): Node<"uint">;
}

export const bitAnd: BinaryBitOperator;
export const bitNot: UnaryBitOperator;
export const bitOr: BinaryBitOperator;
export const bitXor: BinaryBitOperator;
export const shiftLeft: BinaryBitOperator;
export const shiftRight: BinaryBitOperator;

interface BinaryBitOperatorIntegerExtensions<TInteger extends IntegerType> {
    (b: Number<TInteger>): Node<TInteger>;
}

interface BinaryBitOperatorIntegerAssignExtensions<TInteger extends IntegerType> {
    (b: Number<TInteger>): this;
}

declare module "../core/Node.js" {
    interface IntegerExtensions<TInteger extends IntegerType> {
        bitAnd: BinaryBitOperatorIntegerExtensions<TInteger>;
        bitNot: () => Node<TInteger>;
        bitOr: BinaryBitOperatorIntegerExtensions<TInteger>;
        bitXor: BinaryBitOperatorIntegerExtensions<TInteger>;
        shiftLeft: BinaryBitOperatorIntegerExtensions<TInteger>;
        shiftRight: BinaryBitOperatorIntegerExtensions<TInteger>;

        bitAndAssign: BinaryBitOperatorIntegerAssignExtensions<TInteger>;
        bitNotAssign: () => this;
        bitOrAssign: BinaryBitOperatorIntegerAssignExtensions<TInteger>;
        bitXorAssign: BinaryBitOperatorIntegerAssignExtensions<TInteger>;
        shiftLeftAssign: BinaryBitOperatorIntegerAssignExtensions<TInteger>;
        shiftRightAssign: BinaryBitOperatorIntegerAssignExtensions<TInteger>;
    }
}

// increment/decrement

interface IncrementDecrement {
    (a: Number<"int">): Node<"int">;
    (a: Number<"uint">): Node<"uint">;
}

export const incrementBefore: IncrementDecrement;
export const decrementBefore: IncrementDecrement;
export const increment: IncrementDecrement;
export const decrement: IncrementDecrement;

interface IncrementDecrementIntegerExtensions<TInteger extends IntegerType> {
    (): Node<TInteger>;
}

declare module "../core/Node.js" {
    interface IntegerExtensions<TInteger extends IntegerType> {
        incrementBefore: IncrementDecrementIntegerExtensions<TInteger>;
        decrementBefore: IncrementDecrementIntegerExtensions<TInteger>;
        increment: IncrementDecrementIntegerExtensions<TInteger>;
        decrement: IncrementDecrementIntegerExtensions<TInteger>;
    }
}

/**
 * @deprecated "modInt()" is deprecated. Use "mod( int( ... ) )" instead.
 */
export const modInt: Mod;

declare module "../core/Node.js" {
    interface NumExtensions<TNum extends NumType> {
        /**
         * @deprecated "modInt()" is deprecated. Use "mod( int( ... ) )" instead.
         */
        modInt: (b: Number<TNum>) => Node<TNum>;
        /**
         * @deprecated "modInt()" is deprecated. Use "mod( int( ... ) )" instead.
         */
        modIntAssign: (b: Number<TNum>) => this;
    }
}

export {};
