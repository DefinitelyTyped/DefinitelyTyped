/**
 * {@link NodeBuilder} is going to create instances of this class during the build process
 * of nodes. They represent the final shader variables that are going to be generated
 * by the builder. A dictionary of node variables is maintained in {@link NodeBuilder#vars} for
 * this purpose.
 */
declare class NodeVar {
    /**
     * Constructs a new node variable.
     *
     * @param {string} name - The name of the variable.
     * @param {string} type - The type of the variable.
     * @param {boolean} [readOnly=false] - The read-only flag.
     * @param {?number} [count=null] - The size.
     */
    constructor(name: string, type: string, readOnly?: boolean, count?: number | null);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isNodeVar: boolean;
    /**
     * The name of the variable.
     *
     * @type {string}
     */
    name: string;
    /**
     * The type of the variable.
     *
     * @type {string}
     */
    type: string;
    /**
     *  The read-only flag.
     *
     * @type {boolean}
     */
    readOnly: boolean;
    /**
     * The size.
     *
     * @type {?number}
     */
    count: number | null;
}

export default NodeVar;
