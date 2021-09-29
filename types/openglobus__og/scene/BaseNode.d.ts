/**
 * Scene node base class.
 * @class
 * @param {string} name - Node name.
 */
export class BaseNode {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(name: any);
    /**
     * Node name.
     * @public
     * @type {string}
     */
    public name: string;
    /**
     * Top scene tree node pointer.
     * @public
     * @type {og.RenderNode}
     */
    public topNode: any;
    _dictionary: BaseNode[];
    /**
     * Children nodes.
     * @public
     * @type {Array.<og.RenderNode>}
     */
    public childNodes: Array<any>;
    /**
     * Parent node pointer.
     * @public
     * @type {og.RenderNode}
     */
    public parentNode: any;
    __staticId: number;
    /**
     * Adds node to the current hierarchy.
     * @public
     * @type {og.BaseNode}
     */
    public addNode(node: any): void;
    /**
     * Destroy node.
     * @public
     */
    public destroy(): void;
    /**
     * Gets node by name in the current.
     * @public
     * @param {string} name - Node name.
     * @return {og.RenderNode} Node object in the current node.
     */
    public getNodeByName(name: string): any;
    /**
     * Clear current node.
     * @protected
     */
    protected _clear(): void;
    isEqual(node: any): boolean;
}
