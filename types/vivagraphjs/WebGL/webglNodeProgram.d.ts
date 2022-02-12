export = webglNodeProgram;
/**
 * Defines simple UI for nodes in webgl renderer. Each node is rendered as square. Color and size can be changed.
 */
declare function webglNodeProgram(): {
    load: (glContext: any) => void;
    /**
     * Updates position of node in the buffer of nodes.
     *
     * @param idx - index of current node.
     * @param pos - new position of the node.
     */
    position: (nodeUI: any, pos: any) => void;
    updateTransform: (newTransform: any) => void;
    updateSize: (w: any, h: any) => void;
    removeNode: (node: any) => void;
    createNode: () => void;
    replaceProperties: () => void;
    render: () => void;
};
