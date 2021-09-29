/**
 * Billboard text label.
 * @class
 * @extends {og.BaseBillboard}
 * @param {Object} [options] - Label options:
 * @param {og.Vec3|Array.<number>} [options.position] - Billboard spatial position.
 * @param {number} [options.rotation] - Screen angle rotaion.
 * @param {og.Vec4|string|Array.<number>} [options.color] - Billboard color.
 * @param {og.Vec3|Array.<number>} [options.alignedAxis] - Billboard aligned vector.
 * @param {og.Vec3|Array.<number>} [options.offset] - Billboard center screen offset.
 * @param {boolean} [options.visibility] - Visibility.
 * @param {string} [options.text] - Text string.
 * @param {string} [options.face] - HTML5 font face.
 * @param {number} [options.size] - Font size in pixels.
 * @param {string} [options.style] - HTML5 font style. Example 'normal', 'italic'.
 * @param {string} [options.weight] - HTML5 font weight. Example 'normal', 'bold'.
 * @param {number} [options.outline] - Text outline size. 0 - no outline, 1 - maximum outline. Default 0.58.
 * @param {og.Vec4|string|Array.<number>} [options.outlineColor] - Outline color.
 * @param {og.Label.ALIGN} [options.align] - Text horizontal align: "left", "right" and "center".
 */
export class Label {
    constructor(options: any);
    /**
     * Label text string.
     * @private
     * @type {string}
     */
    private _text;
    /**
     * HTML5 font face.
     * @private
     * @type {string}
     */
    private _face;
    /**
     * Font size in pixels.
     * @private
     * @type {number}
     */
    private _size;
    /**
     * Label outline.
     * @private
     * @type {number}
     */
    private _outline;
    /**
     * Label outline color.
     * @private
     * @type {og.Vec4}
     */
    private _outlineColor;
    /**
     * Text horizontal align: "left", "right" and "center".
     * @private
     * @type {og.Label.ALIGN}
     */
    private _align;
    /**
     * Label font atlas index.
     * @private
     * @type {number}
     */
    private _fontIndex;
    /**
     * Font atlas pointer.
     * @private
     * @type {og.utils.FontAtlas}
     */
    private _fontAtlas;
    /**
     * Sets lablel text.
     * @public
     * @param {string} text - Text string.
     * It can't be bigger than maximum labelHandler _maxLetters value.
     */
    public setText(text: string): void;
    /**
     * Gets current text string.
     * @public
     * @returns {string}
     */
    public getText(): string;
    /**
     * Sets label text align. Could be center, left or right. Left is default.
     * @public
     * @param {og.Label.ALIGN} align - Text align.
     */
    public setAlign(align: any): void;
    /**
     * Gets label text current alignment.
     * @public
     * @returns {og.Label.ALIGN}
     */
    public getAlign(): any;
    /**
     * Sets font face family.
     * @public
     * @param {string} face - Font face family.
     */
    public setFace(face: string): void;
    /**
     * Gets current font face.
     * @public
     * @returns {string}
     */
    public getFace(): string;
    /**
     * Sets label font size in pixels.
     * @public
     * @param {number} size - Label size in pixels.
     */
    public setSize(size: number): void;
    /**
     * Gets label size in pixels.
     * @public
     * @returns {number}
     */
    public getSize(): number;
    /**
     * Sets text outline border size. Where 0 - is no outline and 1 - is the maximum outline size.
     * @public
     * @param {number} outline - Text outline size.
     */
    public setOutline(outline: number): void;
    /**
     * Gets text current outline size.
     * @public
     * @returns {number}
     */
    public getOutline(): number;
    /**
     * Sets label opacity.
     * @public
     * @param {number} a - Label opacity.
     */
    public setOpacity(a: number): void;
    /**
     * Sets text outline color.
     * @public
     * @param {number} r - Red.
     * @param {number} g - Green.
     * @param {number} b - Blue.
     * @param {number} a - Alpha.
     */
    public setOutlineColor(r: number, g: number, b: number, a: number): void;
    /**
     * Sets text outline color.
     * @public
     * @param {og.Vec4} rgba - Color vector.
     */
    public setOutlineColor4v(rgba: any): void;
    /**
     * Sets text outline color HTML string.
     * @public
     * @param {string} color - HTML string color.
     */
    public setOutlineColorHTML(color: string): void;
    /**
     * Gets outline color vector.
     * @public
     * @returns {og.Vec4}
     */
    public getOutlineColor(): any;
    /**
     * Sets outline opacity. Actually outline color alpha value.
     * @public
     * @param {number} opacity - Outline opacity.
     */
    public setOutlineOpacity(opacity: number): void;
    /**
     * Gets outline opacity value.
     * @public
     * @returns {number}
     */
    public getOutlineOpacity(): number;
    /**
     * Updates label parameters.
     * @public
     */
    public update(): void;
    _applyFontIndex(fontIndex: any): void;
    /**
     * Assigns font atlas and update.
     * @public
     * @param {og.utils.FontAtlas} fontAtlas - Font atlas.
     */
    public assignFontAtlas(fontAtlas: any): void;
}
export namespace ALIGN {
    const RIGHT: number;
    const LEFT: number;
    const CENTER: number;
}
