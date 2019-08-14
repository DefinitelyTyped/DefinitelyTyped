declare namespace pc {

    /**
     * @name pc.Node
     * @class A animation node has a name and contains an array of keyframes.
     * @description Create a new animation node
     * @returns {pc.Node} A new pc.Node.
     */
    class Node {

    }

    /**
     * @name pc.Animation
     * @property {String} name Human-readable name of the animation
     * @property {Number} duration Duration of the animation in seconds.
     * @class An animation is a sequence of keyframe arrays which map to the nodes of a skeletal hierarchy.
     * It controls how the nodes of the hierarchy are transformed over time.
     * @returns {pc.Animation} A new pc.Animation object.
     */
    class Animation {
        name: string;
        duration: number;

        /**
         * @function
         * @name pc.Animation#getNode
         * @description Gets a {@link pc.Node} by name
         * @param {String} name The name of the pc.Node
         * @returns {pc.Node} The pc.Node with the specified name
         * @author Will Eastcott
         */
        getNode(name: string): pc.Node;

        /**
         * @readonly
         * @name pc.Animation#nodes
         * @type pc.Node[]
         * @description A read-only property to get array of animation nodes
         */
        readonly nodes: pc.Node[];

        /**
         * @function
         * @name pc.Animation#addNode
         * @description Adds a node to the internal nodes array.
         * @param {pc.Node} node The node to add.
         * @author Will Eastcott
         */
        addNode(node: pc.Node): void;
    }
}
