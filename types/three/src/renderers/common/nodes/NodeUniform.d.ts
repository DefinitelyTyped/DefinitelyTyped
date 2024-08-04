import { Color } from "../../../math/Color.js";
import { Matrix3 } from "../../../math/Matrix3.js";
import { Matrix4 } from "../../../math/Matrix4.js";
import { Vector2 } from "../../../math/Vector2.js";
import { Vector3 } from "../../../math/Vector3.js";
import { Vector4 } from "../../../math/Vector4.js";
import NodeUniform from "../../../nodes/core/NodeUniform.js";
import {
    ColorUniform,
    Matrix3Uniform,
    Matrix4Uniform,
    NumberUniform,
    Vector2Uniform,
    Vector3Uniform,
    Vector4Uniform,
} from "../Uniform.js";
declare class NumberNodeUniform extends NumberUniform {
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
    Matrix3NodeUniform,
    Matrix4NodeUniform,
    NumberNodeUniform,
    Vector2NodeUniform,
    Vector3NodeUniform,
    Vector4NodeUniform,
};
export type NodeUniformGPU =
    | NumberNodeUniform
    | Vector2NodeUniform
    | Vector3NodeUniform
    | Vector4NodeUniform
    | ColorNodeUniform
    | Matrix3NodeUniform
    | Matrix4NodeUniform;
