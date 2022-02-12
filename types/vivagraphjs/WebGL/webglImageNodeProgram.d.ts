export = webglImageNodeProgram;
/**
 * Defines simple UI for nodes in webgl renderer. Each node is rendered as an image.
 *
 * @param {number} tilesPerTexture
 *
 */
declare function webglImageNodeProgram(tilesPerTexture: number): {
    load: (glContext: any) => void;
    /**
     * Updates position of current node in the buffer of nodes.
     *
     * @param idx - index of current node.
     * @param pos - new position of the node.
     */
    position: (nodeUI: any, pos: any) => void;
    createNode: (ui: any) => void;
    removeNode: (nodeUI: any) => void;
    replaceProperties: (replacedNode: any, newNode: any) => void;
    updateTransform: (newTransform: any) => void;
    updateSize: (w: any, h: any) => void;
    render: () => void;
};
