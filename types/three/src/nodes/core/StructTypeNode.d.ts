import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export interface MembersLayout {
    [name: string]: string | {
        type: string;
        atomic?: boolean;
    };
}

export interface MemberLayout {
    name: string;
    type: string;
    atomic: boolean;
}

/**
 * Represents a struct type node in the node-based system.
 * This class is used to define and manage the layout and types of struct members.
 * It extends the base Node class and provides methods to get the length of the struct,
 * retrieve member types, and generate the struct type for a builder.
 *
 * @augments Node
 */
declare class StructTypeNode extends Node {
    /**
     * Creates an instance of StructTypeNode.
     *
     * @param {Object} membersLayout - The layout of the members for the struct.
     * @param {?string} [name=null] - The optional name of the struct.
     */
    constructor(membersLayout: MembersLayout, name?: string | null);
    /**
     * The layout of the members for the struct
     *
     * @type {Array.<{name: string, type: string, atomic: boolean}>}
     */
    membersLayout: Array<MemberLayout>;
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isStructLayoutNode: boolean;
    /**
     * Returns the length of the struct.
     * The length is calculated by summing the lengths of the struct's members.
     *
     * @returns {number} The length of the struct.
     */
    getLength(): number;
    getMemberType(builder: NodeBuilder, name: string): string;
    getNodeType(builder: NodeBuilder): string;
    setup(builder: NodeBuilder): undefined;
    generate(builder: NodeBuilder): string;
}

export default StructTypeNode;
