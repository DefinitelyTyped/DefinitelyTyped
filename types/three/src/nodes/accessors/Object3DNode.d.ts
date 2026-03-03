import { Object3D } from "../../core/Object3D.js";
import Node from "../core/Node.js";

export type Object3DNodeScope =
    | typeof Object3DNode.WORLD_MATRIX
    | typeof Object3DNode.POSITION
    | typeof Object3DNode.SCALE
    | typeof Object3DNode.VIEW_POSITION
    | typeof Object3DNode.DIRECTION
    | typeof Object3DNode.RADIUS;

interface Object3DNodeInterface {
    scope: Object3DNodeScope;
    object3d: Object3D | null;
}

declare const Object3DNode: {
    new(scope: typeof Object3DNode.WORLD_MATRIX, object3d?: Object3D | null): Object3DNode<"mat4">;
    new(scope: typeof Object3DNode.POSITION, object3d?: Object3D | null): Object3DNode<"vec3">;
    new(scope: typeof Object3DNode.SCALE, object3d?: Object3D | null): Object3DNode<"vec3">;
    new(scope: typeof Object3DNode.VIEW_POSITION, object3d?: Object3D | null): Object3DNode<"vec3">;
    new(scope: typeof Object3DNode.DIRECTION, object3d?: Object3D | null): Object3DNode<"vec3">;
    new(scope: typeof Object3DNode.RADIUS, object3d?: Object3D | null): Object3DNode<"float">;

    WORLD_MATRIX: "worldMatrix";
    POSITION: "position";
    SCALE: "scale";
    VIEW_POSITION: "viewPosition";
    DIRECTION: "direction";
    RADIUS: "radius";
};

type Object3DNode<TNodeType> = Node<TNodeType> & Object3DNodeInterface;

export default Object3DNode;

export const objectDirection: (object3d: Object3D | null) => Object3DNode<"vec3">;
export const objectWorldMatrix: (object3d: Object3D | null) => Object3DNode<"mat4">;
export const objectPosition: (object3d: Object3D | null) => Object3DNode<"vec3">;
export const objectScale: (object3d: Object3D | null) => Object3DNode<"vec3">;
export const objectViewPosition: (object3d: Object3D | null) => Object3DNode<"vec3">;
export const objectRadius: (object3d: Object3D | null) => Object3DNode<"float">;
