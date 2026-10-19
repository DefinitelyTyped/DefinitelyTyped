import { Color } from "../../math/Color.js";
import { Matrix2 } from "../../math/Matrix2.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
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

type FloatOrNumber = Node<"float"> | number;

type AnyNumber = Node<"float"> | Node<"int"> | Node<"uint"> | number;

type Vec2 = Node<"vec2"> | Vector2;
type Vec3 = Node<"vec3"> | Vector3 | Node<"color"> | Color;
type Vec4 = Node<"vec4"> | Vector4;

type Vec2OrFloat = Vec2 | FloatOrNumber;
type Vec3OrFloat = Vec3 | FloatOrNumber;
type Vec4OrFloat = Vec4 | FloatOrNumber;

type Vec2OrLess = Vec2;
type Vec3OrLess = Vec2OrLess | Vec3;
type Vec4OrLess = Vec3OrLess | Vec4;

type Mat2 = Node<"mat2"> | Matrix2;
type Mat3 = Node<"mat3"> | Matrix3;
type Mat4 = Node<"mat4"> | Matrix4;

type Bool = Node<"bool"> | boolean;

interface NumberToVec {
    float: "vec";
    int: "ivec";
    uint: "uvec";
}

type NumberToVec2<TNum extends NumType> = `${NumberToVec[TNum]}2`;
type NumberToVec3<TNum extends NumType> = `${NumberToVec[TNum]}3`;
type NumberToVec4<TNum extends NumType> = `${NumberToVec[TNum]}4`;

type Number<TNum extends NumType> = Node<TNum> | number;
type Vec2OrLessOrNumber<TNum extends NumType> = Number<TNum> | Node<NumberToVec2<TNum>>;
type Vec3OrLessOrNumber<TNum extends NumType> = Vec2OrLessOrNumber<TNum> | Node<NumberToVec3<TNum>>;
type Vec4OrLessOrNumber<TNum extends NumType> = Vec3OrLessOrNumber<TNum> | Node<NumberToVec4<TNum>>;

interface NodeParameterForNumType {
    float: Node<"float"> | Node<"int"> | Node<"uint">;
    int: Node<"int">;
    uint: Node<"uint">;
}
type NumberParameterForNumType<TNum extends NumType> = NodeParameterForNumType[TNum] | number;

interface Vec2NodeParameterForNumType {
    float: Node<"vec2"> | Node<"ivec2"> | Node<"uvec2">;
    int: Node<"ivec2">;
    uint: Node<"uvec2">;
}
type Vec2OrLessOrNumberParameterForNumType<TNum extends NumType> =
    | Vec2NodeParameterForNumType[TNum]
    | NumberParameterForNumType<TNum>;

interface Vec3NodeParameterForNumType {
    float: Node<"vec3"> | Node<"ivec3"> | Node<"uvec3">;
    int: Node<"ivec3">;
    uint: Node<"uvec3">;
}
type Vec3OrLessOrNumberParameterForNumType<TNum extends NumType> =
    | Vec3NodeParameterForNumType[TNum]
    | Vec2OrLessOrNumberParameterForNumType<TNum>;

interface Vec4NodeParameterForNumType {
    float: Node<"vec4"> | Node<"ivec4"> | Node<"uvec4">;
    int: Node<"ivec4">;
    uint: Node<"uvec4">;
}
type Vec4OrLessOrNumberParameterForNumType<TNum extends NumType> =
    | Vec4NodeParameterForNumType[TNum]
    | Vec3OrLessOrNumberParameterForNumType<TNum>;

// add/sub/mul/div

// add/sub/mul/div numbers and/or vecs
// Every parameter gets converted to the longest type
// If the parameters are the same length, it gets converted to the first type

interface AddSubMulDivNumberVec<TNum extends NumType> {
    (a: Number<TNum>, b: NumberParameterForNumType<TNum>, ...params: NumberParameterForNumType<TNum>[]): Node<TNum>;
    (
        a: Vec2OrLessOrNumber<TNum>,
        b: Vec2OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec2OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec2<TNum>>;
    (
        a: Vec3OrLessOrNumber<TNum>,
        b: Vec3OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec3OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec3<TNum>>;
    (
        a: Vec4OrLessOrNumber<TNum>,
        b: Vec4OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec4OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec4<TNum>>;
}

interface AddSubMulDivNumberVecNumExtensions<TNum extends NumType> {
    (b: NumberParameterForNumType<TNum>, ...params: NumberParameterForNumType<TNum>[]): Node<TNum>;
    (
        b: Vec2OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec2OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec2<TNum>>;
    (
        b: Vec3OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec3OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec3<TNum>>;
    (
        b: Vec4OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec4OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec4<TNum>>;
}

interface AddSubMulDivNumberVecNumberAssignExtensions<TNum extends NumType> {
    (
        b: Vec4OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec4OrLessOrNumberParameterForNumType<TNum>[]
    ): this;
}

interface AddSubMulDivNumberVecVec2Extensions<TNum extends NumType> {
    (
        b: Vec2OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec2OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec2<TNum>>;
    (
        b: Vec3OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec3OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec3<TNum>>;
    (
        b: Vec4OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec4OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec4<TNum>>;
}

interface AddSubMulDivNumberVecVec2AssignExtensions<TNum extends NumType> {
    (b: Vec4OrLessOrNumberParameterForNumType<TNum>, ...params: Vec4OrLessOrNumberParameterForNumType<TNum>[]): this;
}

interface AddSubMulDivNumberVecVec3Extensions<TNum extends NumType> {
    (
        b: Vec3OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec3OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec3<TNum>>;
    (
        b: Vec4OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec4OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec4<TNum>>;
}

interface AddSubMulDivNumberVecVec3AssignExtensions<TNum extends NumType> {
    (b: Vec4OrLessOrNumberParameterForNumType<TNum>, ...params: Vec4OrLessOrNumberParameterForNumType<TNum>[]): this;
}

interface AddSubMulDivNumberVecVec4Extensions<TNum extends NumType> {
    (
        b: Vec4OrLessOrNumberParameterForNumType<TNum>,
        ...params: Vec4OrLessOrNumberParameterForNumType<TNum>[]
    ): Node<NumberToVec4<TNum>>;
}

interface AddSubMulDivNumberVecVec4AssignExtensions<TNum extends NumType> {
    (b: Vec4OrLessOrNumberParameterForNumType<TNum>, ...params: Vec4OrLessOrNumberParameterForNumType<TNum>[]): this;
}

// add/sub/mul mats

interface AddSubMulMat {
    (a: Mat2, b: Mat2, ...params: Mat2[]): Node<"mat2">;
    (a: Mat3, b: Mat3, ...params: Mat3[]): Node<"mat3">;
    (a: Mat4, b: Mat4, ...params: Mat4[]): Node<"mat4">;
}

interface AddSubMulMat2Extensions {
    (b: Mat2): Node<"mat2">;
}

interface AddSubMulMat2AssignExtensions {
    (b: Mat2): this;
}

interface AddSubMulMat3Extensions {
    (b: Mat3): Node<"mat3">;
}

interface AddSubMulMat3AssignExtensions {
    (b: Mat3): this;
}

interface AddSubMulMat4Extensions {
    (b: Mat4): Node<"mat4">;
}

interface AddSubMulMat4AssignExtensions {
    (b: Mat3): this;
}

// mut mats and nums

interface MulMatNum {
    (a: Mat2, b: AnyNumber): Node<"mat2">;
    (a: Mat3, b: AnyNumber): Node<"mat3">;
    (a: Mat4, b: AnyNumber): Node<"mat4">;
    (a: AnyNumber, b: Mat2): Node<"mat2">;
    (a: AnyNumber, b: Mat3): Node<"mat3">;
    (a: AnyNumber, b: Mat4): Node<"mat4">;
}

interface MulMatNumNumExtensions {
    (b: Mat2): Node<"mat2">;
    (b: Mat3): Node<"mat3">;
    (b: Mat4): Node<"mat4">;
}

interface MulMatNumMat2Extensions {
    (b: AnyNumber): Node<"mat2">;
}

interface MulMatNumMat3Extensions {
    (b: AnyNumber): Node<"mat3">;
}

interface MulMatNumMat4Extensions {
    (b: AnyNumber): Node<"mat4">;
}

interface MulMatNumMat2AssignExtensions {
    (b: AnyNumber): this;
}

interface MulMatNumMat3AssignExtensions {
    (b: AnyNumber): this;
}

interface MulMatNumMat4AssignExtensions {
    (b: AnyNumber): this;
}

// mut mats and vecs
// The vec parameter gets converted to matrix length

interface MulMatVec {
    (a: Mat2, b: Vec4OrLess): Node<"vec2">;
    (a: Mat3, b: Vec4OrLess): Node<"vec3">;
    (a: Mat4, b: Vec4OrLess): Node<"vec4">;
    (a: Vec4OrLess, b: Mat2): Node<"vec2">;
    (a: Vec4OrLess, b: Mat3): Node<"vec3">;
    (a: Vec4OrLess, b: Mat4): Node<"vec4">;
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
    (b: Mat2): Node<"vec2">;
    (b: Mat3): Node<"vec3">;
    (b: Mat4): Node<"vec4">;
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
        MulMatNum,
        MulMatVec
{
}

interface MulNumExtension<TNum extends NumType>
    extends AddSubMulDivNumberVecNumExtensions<TNum>, MulMatNumNumExtensions
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

interface MulMat2Extensions extends AddSubMulMat2Extensions, MulMatNumMat2Extensions, MulVecMatMat2Extensions {
}

interface MulMat3Extensions extends AddSubMulMat3Extensions, MulMatNumMat3Extensions, MulVecMatMat3Extensions {
}

interface MulMat4Extensions extends AddSubMulMat4Extensions, MulMatNumMat4Extensions, MulVecMatMat4Extensions {
}

interface MulMat2AssignExtensions extends AddSubMulMat2AssignExtensions, MulMatNumMat2AssignExtensions {
}

interface MulMat3AssignExtensions extends AddSubMulMat3AssignExtensions, MulMatNumMat3AssignExtensions {
}

interface MulMat4AssignExtensions extends AddSubMulMat4AssignExtensions, MulMatNumMat4AssignExtensions {
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
        mul: MulNumExtension<TNum>;
        div: AddSubMulDivNumberVecNumExtensions<TNum>;

        addAssign: AddSubMulDivNumberVecNumberAssignExtensions<TNum>;
        subAssign: AddSubMulDivNumberVecNumberAssignExtensions<TNum>;
        mulAssign: AddSubMulDivNumberVecNumberAssignExtensions<TNum>;
        divAssign: AddSubMulDivNumberVecNumberAssignExtensions<TNum>;
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
        mulAssign: MulMat2AssignExtensions;
    }

    interface Mat3Extensions {
        add: AddSubMulMat3Extensions;
        sub: AddSubMulMat3Extensions;
        mul: MulMat3Extensions;

        addAssign: AddSubMulMat3AssignExtensions;
        subAssign: AddSubMulMat3AssignExtensions;
        mulAssign: MulMat3AssignExtensions;
    }

    interface Mat4Extensions {
        add: AddSubMulMat4Extensions;
        sub: AddSubMulMat4Extensions;
        mul: MulMat4Extensions;

        addAssign: AddSubMulMat4AssignExtensions;
        subAssign: AddSubMulMat4AssignExtensions;
        mulAssign: MulMat4AssignExtensions;
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
    // TODO Accept non-float vectors
    (a: Vec2OrFloat, b: Vec2OrFloat): Node<"bvec2">;
    (a: Vec3OrFloat, b: Vec3OrFloat): Node<"bvec3">;
    (a: Vec4OrFloat, b: Vec4OrFloat): Node<"bvec4">;
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
interface ComparisonOperatorVec2Extensions {
    (b: Vec2OrFloat): Node<"bvec2">;
}
interface ComparisonOperatorVec3Extensions {
    (b: Vec3OrFloat): Node<"bvec3">;
}
interface ComparisonOperatorVec4Extensions {
    (b: Vec4OrFloat): Node<"bvec4">;
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

    interface Vec2Extensions {
        equal: ComparisonOperatorVec2Extensions;
        notEqual: ComparisonOperatorVec2Extensions;
        lessThan: ComparisonOperatorVec2Extensions;
        greaterThan: ComparisonOperatorVec2Extensions;
        lessThanEqual: ComparisonOperatorVec2Extensions;
        greaterThanEqual: ComparisonOperatorVec2Extensions;
    }

    interface Vec3Extensions {
        equal: ComparisonOperatorVec3Extensions;
        notEqual: ComparisonOperatorVec3Extensions;
        lessThan: ComparisonOperatorVec3Extensions;
        greaterThan: ComparisonOperatorVec3Extensions;
        lessThanEqual: ComparisonOperatorVec3Extensions;
        greaterThanEqual: ComparisonOperatorVec3Extensions;
    }

    interface Vec4Extensions {
        equal: ComparisonOperatorVec4Extensions;
        notEqual: ComparisonOperatorVec4Extensions;
        lessThan: ComparisonOperatorVec4Extensions;
        greaterThan: ComparisonOperatorVec4Extensions;
        lessThanEqual: ComparisonOperatorVec4Extensions;
        greaterThanEqual: ComparisonOperatorVec4Extensions;
    }
}

// and/or/not/xor

interface AndOr {
    (a: Bool, b: Bool, ...params: Bool[]): Node<"bool">;
}
export const and: AndOr;
export const or: AndOr;

interface AndOrBoolExtensions {
    (b: Bool, ...params: Bool[]): Node<"bool">;
}

interface NotFunction {
    (a: Bool): Node<"bool">;
    (a: Node<"bvec2">): Node<"bvec2">;
    (a: Node<"bvec3">): Node<"bvec3">;
    (a: Node<"bvec4">): Node<"bvec4">;
}
export const not: NotFunction;

export const xor: (a: Bool, b: Bool) => Node<"bool">;

declare module "../core/Node.js" {
    interface BoolExtensions {
        and: AndOrBoolExtensions;
        or: AndOrBoolExtensions;
        xor: (b: Bool) => Node<"bool">;
    }

    interface BoolOrVecExtensions<TNodeType> {
        not: () => Node<TNodeType>;
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

export {};
