import Node from "../core/Node.js";
import ArrayElementNode from "../utils/ArrayElementNode.js";
import ReferenceBaseNode from "./ReferenceBaseNode.js";
import ReferenceNode from "./ReferenceNode.js";

export default class ReferenceElementNode extends ArrayElementNode<unknown> {
    referenceNode: ReferenceBaseNode<unknown> | ReferenceNode<unknown, unknown> | null;

    readonly isReferenceElementNode: true;

    constructor(
        referenceNode: ReferenceBaseNode<unknown> | ReferenceNode<unknown, unknown>,
        indexNode: Node,
    );
}
