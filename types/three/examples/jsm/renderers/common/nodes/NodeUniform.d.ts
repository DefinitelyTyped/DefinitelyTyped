import { Color, Matrix3, Matrix4, Vector2, Vector3, Vector4 } from "three";
import NodeUniform from "../../../nodes/core/NodeUniform.js";
import {
    ColorUniform,
    FloatUniform,
    Matrix3Uniform,
    Matrix4Uniform,
    Vector2Uniform,
    Vector3Uniform,
    Vector4Uniform,
} from "../Uniform.js";
declare class FloatNodeUniform extends FloatUniform {
    nodeUniform: NodeUniform<number>;
    constructor(nodeUniform: NodeUniform<number>);
    getValue(): number;
}
declare class Vector2NodeUniform extends Vector2Uniform {
    nodeUniform: NodeUniform<Vector2>;
    constructor(nodeUniform: NodeUniform<Vector2>);
    getValue(): Vector2;
}
declare class Vector3NodeUniform extends Vector3Uniform {
    nodeUniform: NodeUniform<Vector3>;
    constructor(nodeUniform: NodeUniform<Vector3>);
    getValue(): Vector3;
}
declare class Vector4NodeUniform extends Vector4Uniform {
    nodeUniform: NodeUniform<Vector4>;
    constructor(nodeUniform: NodeUniform<Vector4>);
    getValue(): Vector4;
}
declare class ColorNodeUniform extends ColorUniform {
    nodeUniform: NodeUniform<Color>;
    constructor(nodeUniform: NodeUniform<Color>);
    getValue(): Color;
}
declare class Matrix3NodeUniform extends Matrix3Uniform {
    nodeUniform: NodeUniform<Matrix3>;
    constructor(nodeUniform: NodeUniform<Matrix3>);
    getValue(): Matrix3;
}
declare class Matrix4NodeUniform extends Matrix4Uniform {
    nodeUniform: NodeUniform<Matrix4>;
    constructor(nodeUniform: NodeUniform<Matrix4>);
    getValue(): Matrix4;
}
export {
    ColorNodeUniform,
    FloatNodeUniform,
    Matrix3NodeUniform,
    Matrix4NodeUniform,
    Vector2NodeUniform,
    Vector3NodeUniform,
    Vector4NodeUniform,
};
export type NodeUniformGPU =
    | FloatNodeUniform
    | Vector2NodeUniform
    | Vector3NodeUniform
    | Vector4NodeUniform
    | ColorNodeUniform
    | Matrix3NodeUniform
    | Matrix4NodeUniform;
