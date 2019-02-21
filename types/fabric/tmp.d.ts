export class Text extends Object {
    /**
     * Constructor
     * @param text Text string
     * @param [options] Options object
     */
    constructor(text: string, options?: TextOptions);
    /**
     * Return a context for measurement of text string.
     * if created it gets stored for reuse
     * @return {fabric.Text} thisArg
     */
    getMeasuringContext(): CanvasRenderingContext2D;
    /**
     * Initialize or update text dimensions.
     * Updates this.width and this.height with the proper values.
     * Does not return dimensions.
     */
    initDimensions(): void;
    /**
     * Enlarge space boxes and shift the others
     */
    enlargeSpaces(): void;
    /**
     * Detect if the text line is ended with an hard break
     * text and itext do not have wrapping, return false
     * @return {Boolean}
     */
    isEndOfWrapping(lineIndex: number): boolean;
    /**
     * Returns string representation of an instance
     */
    toString(): string;
    /**
     * Computes height of character at given position
     * @param {Number} line the line number
     * @param {Number} char the character number
     * @return {Number} fontSize of the character
     */
    getHeightOfChar(line: number, char: number): number;
    /**
     * measure a text line measuring all characters.
     * @param {Number} lineIndex line number
     * @return {Number} Line width
     */
    measureLine(lineIndex: number): number;
    /**
     * Calculate height of line at 'lineIndex'
     * @param {Number} lineIndex index of line to calculate
     * @return {Number}
     */
    getHeightOfLine(lineIndex: number): number;
    /**
     * Calculate text box height
     */
    calcTextHeight(): number;
    /**
     * Turns the character into a 'superior figure' (i.e. 'superscript')
     * @param {Number} start selection start
     * @param {Number} end selection end
     * @returns {fabric.Text} thisArg
     * @chainable
     */
    setSuperscript(start: number, end: number): Text;
    /**
     * Turns the character into an 'inferior figure' (i.e. 'subscript')
     * @param {Number} start selection start
     * @param {Number} end selection end
     * @returns {fabric.Text} thisArg
     * @chainable
     */
    setSubscript(start: number, end: number): Text;
    /**
     * Retrieves the value of property at given character position
     * @param {Number} lineIndex the line number
     * @param {Number} charIndex the charater number
     * @param {String} property the property name
     * @returns the value of 'property'
     */
    getValueOfPropertyAt(lineIndex: number, charIndex: number, property: string): any;
    static DEFAULT_SVG_FONT_SIZE: number;
    /**
     * Returns fabric.Text instance from an SVG element (<b>not yet implemented</b>)
     * @static
     * @memberOf fabric.Text
     * @param {SVGElement} element Element to parse
     * @param {Function} callback callback function invoked after parsing
     * @param {Object} [options] Options object
     */
    static fromElement(element: SVGElement, callback?: Function, options?: TextOptions): Text;
    /**
     * Returns fabric.Text instance from an object representation
     * @static
     * @memberOf fabric.Text
     * @param {Object} object Object to create an instance from
     * @param {Function} [callback] Callback to invoke when an fabric.Text instance is created
     */
    static fromObject(object: any, callback?: Function): Text;
    /**
     * Check if characters in a text have a value for a property
     * whose value matches the textbox's value for that property.  If so,
     * the character-level property is deleted.  If the character
     * has no other properties, then it is also deleted.  Finally,
     * if the line containing that character has no other characters
     * then it also is deleted.
     *
     * @param {string} property The property to compare between characters and text.
     */
    cleanStyle(property: string): void;
    /**
     * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
     * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
     * @param {Boolean} [skipWrapping] consider the location for unwrapped lines. usefull to manage styles.
     */
    get2DCursorLocation(selectionStart: number, skipWrapping: boolean): {lineIndex: number, charIndex: number};
    /**
     * return a new object that contains all the style property for a character
     * the object returned is newly created
     * @param {Number} lineIndex of the line where the character is
     * @param {Number} charIndex position of the character on the line
     * @return {Object} style object
     */
    getCompleteStyleDeclaration(lineIndex: number, charIndex: number): any;
    /**
     * Gets style of a current selection/cursor (at the start position)
     * if startIndex or endIndex are not provided, slectionStart or selectionEnd will be used.
     * @param {Number} [startIndex] Start index to get styles at
     * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
     * @param {Boolean} [complete] get full style or not
     * @return {Array} styles an array with one, zero or more Style objects
     */
    getSelectionStyles(startIndex: number, endIndex: number, complete?: boolean): any[];
    /**
     * Returns styles-string for svg-export
     * @param {Boolean} skipShadow a boolean to skip shadow filter output
     * @return {String}
     */
    getSvgStyles(skipShadow?: boolean): string;
    /**
     * Returns true if object has no styling or no styling in a line
     * @param {Number} lineIndex , lineIndex is on wrapped lines.
     * @return {Boolean}
     */
    isEmptyStyles(lineIndex: number): boolean;
    /**
     * Remove a style property or properties from all individual character styles
     * in a text object.  Deletes the character style object if it contains no other style
     * props.  Deletes a line style object if it contains no other character styles.
     *
     * @param {String} props The property to remove from character styles.
     */
    removeStyle(property: string): void;
    /**
     * Sets style of a current selection, if no selection exist, do not set anything.
     * @param {Object} [styles] Styles object
     * @param {Number} [startIndex] Start index to get styles at
     * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
     * @return {fabric.IText} thisArg
     * @chainable
     */
    setSelectionStyles(styles: any, startIndex: number, endIndex: number): Text;
    /**
     * Returns true if object has a style property or has it ina specified line
     * @param {Number} lineIndex
     * @return {Boolean}
     */
    styleHas(property: string, lineIndex?: number): boolean;
}
