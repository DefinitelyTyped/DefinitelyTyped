import { Color } from "../../math/Color.js";
import { Matrix2 } from "../../math/Matrix2.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import Node from "./Node.js";
import StructTypeNode, { MembersLayout } from "./StructTypeNode.js";

declare class StructNode extends Node {
    values: Node[];

    constructor(structLayoutNode: StructTypeNode, values: Node[]);
}

export default StructNode;

export type StructValue =
    | Node
    | number
    | boolean
    | Vector2
    | Vector3
    | Vector4
    | Matrix2
    | Matrix3
    | Matrix4
    | Color;

export interface Struct {
    (): StructNode;
    (values: Node[]): StructNode;
    (...values: StructValue[]): StructNode;
}

export const struct: (membersLayout: MembersLayout, name?: string | null) => Struct;
