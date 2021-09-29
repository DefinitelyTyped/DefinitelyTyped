/**
 * Base geometry shape class.
 * @class
 * @param {Object} options - Shape parameters:
 * @param {og.Vec3} [options.position] - Shape position.
 * @param {og.Quat} [options.orientation] - Shape orientation(rotation).
 * @param {og.Vec3} [options.scale] - Scale vector.
 * @param {Array.<number,number,number,number>} [options.color] - Shape RGBA color.
 * @param {string} [options.src] - Texture image url source.
 * @param {boolean} [options.visibility] - Shape visibility.
 */
export class BaseShape {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(options: any);
    /**
     * Unic identifier.
     * @public
     * @readonly
     * @type {number}
     */
    public readonly id: number;
    /**
     * Shape position.
     * @public
     * @type {og.Vec3}
     */
    public position: any;
    /**
     * Shape orientation(rotation)
     * @public
     * @type {og.Quat}
     */
    public orientation: any;
    /**
     * Scale.
     * @public
     * @type {og.Vec3}
     */
    public scale: any;
    /**
     * Shape RGBA color.
     * @public
     * @type {Array.<number,number,number,number>}
     */
    public color: Array<number, number, number, number>;
    /**
     * Shape visibility.
     * @public
     * @type {boolean}
     */
    public visibility: boolean;
    /**
     * Image url source.
     * @protected
     * @type {string}
     */
    protected _src: string;
    /**
     * Vertices position gl buffer.
     * @protected
     */
    protected _positionBuffer: any;
    /**
     * Vertices normal gl buffer.
     * @protected
     */
    protected _normalBuffer: any;
    /**
     * Vertices indexes gl buffer.
     * @protected
     */
    protected _indexBuffer: any;
    /**
     * Vertex texture coordinates gl buffer.
     * @protected
     */
    protected _textureCoordBuffer: any;
    /**
     * Vertex positions.
     * @protected
     * @type {Array.<number>}
     */
    protected _positionData: Array<number>;
    /**
     * Vertex normals.
     * @protected
     * @type {Array.<number>}
     */
    protected _normalData: Array<number>;
    /**
     * Vertex indeces.
     * @protected
     * @type {Array.<number>}
     */
    protected _indexData: Array<number>;
    /**
     * Vertex texture coordinates.
     * @protected
     * @type {Array.<number>}
     */
    protected _textureCoordData: Array<number>;
    /**
     * Scale matrix.
     * @protected
     * @type {og.Mat4}
     */
    protected _mxScale: any;
    /**
     * Translation matrix.
     * @protected
     * @type {og.Mat4}
     */
    protected _mxTranslation: any;
    /**
     * Model matrix.
     * @protected
     * @type {og.Mat4}
     */
    protected _mxModel: any;
    /**
     * Gl texture pointer.
     * @protected
     */
    protected texture: any;
    /**
     * Assigned render node.
     * @protected
     * @type {og.scene.RenderNode}
     */
    protected _renderNode: any;
    /**
     * Assigned picking color.
     * @protected
     * @type {Array.<number,number,number>}
     */
    protected _pickingColor: Array<number, number, number>;
    /**
     * Entity instance that holds this shape.
     * @protected
     * @type {og.Entity}
     */
    protected _entity: any;
    /**
     * Handler that stores and renders this shape object.
     * @protected
     * @type {og.ShapeHandler}
     */
    protected _handler: any;
    /**
     * Shape handler array index.
     * @protected
     * @type {number}
     */
    protected _handlerIndex: number;
    /**
     * Clear shape parameters.
     * @public
     */
    public clear(): void;
    /**
     * Sets shape color.
     * @public
     * @param {Array.<number,number,number,number>} color - RGBA color values array.
     */
    public setColor(color: Array<number, number, number, number>): void;
    /**
     * Sets shape color.
     * @public
     * @param {og.Vec4} color - RGBA color vector.
     */
    public setColor4v(color: any): void;
    /**
     * Sets shape opacity value.
     * @public
     * @param {number} opacity - Opacity value.
     */
    public setOpacity(opacity: number): void;
    /**
     * Delete gl buffers.
     * @protected
     */
    protected _deleteBuffers(): void;
    /**
     * Sets shape visibility.
     * @public
     * @param {boolean} visibility - Visibility.
     */
    public setVisibility(visibility: boolean): void;
    /**
     * Gets visibilty flag.
     * @public
     * @returns {boolean} -
     */
    public getVisibility(): boolean;
    /**
     * Assign render node.
     * @public
     * @param {og.scene.RenderNode} renderNode - Render node to assign.
     */
    public setRenderNode(renderNode: any): void;
    /**
     * Sets shape position.
     * @public
     * @param {og.Vec3} position - Shape position.
     */
    public setPosition3v(position: any): void;
    /**
     * Translate shape position to vector.
     * @public
     * @param {og.Vec3} vec - Translation vector.
     */
    public translate3v(vec: any): void;
    /**
     * Sets shape scale.
     * @param {og.Vec3} scale - Scale vector.
     */
    setScale3v(scale: any): void;
    setScale(scale: any): void;
    /**
     * Removes shape from shape handler.
     * @public
     */
    public remove(): void;
    /**
     * Assign picking color.
     * @protected
     * @param {og.Vec3} color - Picking RGB color.
     */
    protected setPickingColor3v(color: any): void;
    /**
     * Creates buffers.
     * @protected
     */
    protected _createBuffers(): void;
    /**
     * Update model matrix.
     * @public
     */
    public refresh(): void;
    /**
     * Shape rendering.
     * @public
     */
    public draw(): void;
    drawPicking(): void;
}
