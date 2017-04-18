declare module goog {
    function require(name: 'goog.ui.Palette'): typeof goog.ui.Palette;
}

declare module goog.ui {

    /**
     * A palette is a grid of DOM nodes that the user can highlight or select via
     * the keyboard or the mouse.  The selection state of the palette is controlled
     * an ACTION event.  Event listeners may retrieve the selected item using the
     * {@link #getSelectedItem} or {@link #getSelectedIndex} method.
     *
     * Use this class as the base for components like color palettes or emoticon
     * pickers.  Use {@link #setContent} to set/change the items in the palette
     * after construction.  See palette.html demo for example usage.
     *
     * @param {Array<Node>} items Array of DOM nodes to be displayed as items
     *     in the palette grid (limited to one per cell).
     * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
     *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Palette extends goog.ui.Control {
        constructor(items: Array<Node>, opt_renderer?: goog.ui.PaletteRenderer, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Overrides {@link goog.ui.Control#setContentInternal} by also updating the
         * grid size and the selection model.  Considered protected.
         * @param {goog.ui.ControlContent} content Array of DOM nodes to be displayed
         *     as items in the palette grid (one item per cell).
         * @protected
         * @override
         */
        setContentInternal(content: goog.ui.ControlContent): void;
        
        /**
         * Overrides {@link goog.ui.Control#getCaption} to return the empty string,
         * since palettes don't have text captions.
         * @return {string} The empty string.
         * @override
         */
        getCaption(): string;
        
        /**
         * Overrides {@link goog.ui.Control#setCaption} to be a no-op, since palettes
         * don't have text captions.
         * @param {string} caption Ignored.
         * @override
         */
        setCaption(caption: string): void;
        
        /**
         * Handles mouseover events.  Overrides {@link goog.ui.Control#handleMouseOver}
         * by determining which palette item (if any) was moused over, highlighting it,
         * and un-highlighting any previously-highlighted item.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         * @override
         */
        handleMouseOver(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles mousedown events.  Overrides {@link goog.ui.Control#handleMouseDown}
         * by ensuring that the item on which the user moused down is highlighted.
         * @param {goog.events.Event} e Mouse event to handle.
         * @override
         */
        handleMouseDown(e: goog.events.Event): void;
        
        /**
         * Selects the currently highlighted palette item (triggered by mouseup or by
         * keyboard action).  Overrides {@link goog.ui.Control#performActionInternal}
         * by selecting the highlighted item and dispatching an ACTION event.
         * @param {goog.events.Event} e Mouse or key event that triggered the action.
         * @return {boolean} True if the action was allowed to proceed, false otherwise.
         * @override
         */
        performActionInternal(e: goog.events.Event): boolean;
        
        /**
         * Handles keyboard events dispatched while the palette has focus.  Moves the
         * highlight on arrow keys, and selects the highlighted item on Enter or Space.
         * Returns true if the event was handled, false otherwise.  In particular, if
         * the user attempts to navigate out of the grid, the highlight isn't changed,
         * and this method returns false; it is then up to the parent component to
         * handle the event (e.g. by wrapping the highlight around).  Overrides {@link
         * goog.ui.Control#handleKeyEvent}.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} True iff the key event was handled by the component.
         * @override
         */
        handleKeyEvent(e: goog.events.KeyEvent): boolean;
        
        /**
         * Handles selection change events dispatched by the selection model.
         * @param {goog.events.Event} e Selection event to handle.
         */
        handleSelectionChange(e: goog.events.Event): void;
        
        /**
         * Returns the size of the palette grid.
         * @return {goog.math.Size} Palette size (columns x rows).
         */
        getSize(): goog.math.Size;
        
        /**
         * Sets the size of the palette grid to the given size.  Callers can either
         * pass a single {@link goog.math.Size} or a pair of numbers (first the number
         * of columns, then the number of rows) to this method.  In both cases, the
         * number of rows is optional and will be calculated automatically if needed.
         * It is an error to attempt to change the size of the palette after it has
         * been rendered.
         * @param {goog.math.Size|number} size Either a size object or the number of
         *     columns.
         * @param {number=} opt_rows The number of rows (optional).
         */
        setSize(size: goog.math.Size|number, opt_rows?: number): void;
        
        /**
         * Returns the 0-based index of the currently highlighted palette item, or -1
         * if no item is highlighted.
         * @return {number} Index of the highlighted item (-1 if none).
         */
        getHighlightedIndex(): number;
        
        /**
         * Returns the currently highlighted palette item, or null if no item is
         * highlighted.
         * @return {Node} The highlighted item (undefined if none).
         */
        getHighlightedItem(): Node;
        
        /**
         * Highlights the item at the given 0-based index, or removes the highlight
         * if the argument is -1 or out of range.  Any previously-highlighted item
         * will be un-highlighted.
         * @param {number} index 0-based index of the item to highlight.
         */
        setHighlightedIndex(index: number): void;
        
        /**
         * Highlights the given item, or removes the highlight if the argument is null
         * or invalid.  Any previously-highlighted item will be un-highlighted.
         * @param {Node|undefined} item Item to highlight.
         */
        setHighlightedItem(item: Node|void): void;
        
        /**
         * Returns the 0-based index of the currently selected palette item, or -1
         * if no item is selected.
         * @return {number} Index of the selected item (-1 if none).
         */
        getSelectedIndex(): number;
        
        /**
         * Returns the currently selected palette item, or null if no item is selected.
         * @return {Node} The selected item (null if none).
         */
        getSelectedItem(): Node;
        
        /**
         * Selects the item at the given 0-based index, or clears the selection
         * if the argument is -1 or out of range.  Any previously-selected item
         * will be deselected.
         * @param {number} index 0-based index of the item to select.
         */
        setSelectedIndex(index: number): void;
        
        /**
         * Selects the given item, or clears the selection if the argument is null or
         * invalid.  Any previously-selected item will be deselected.
         * @param {Node} item Item to select.
         */
        setSelectedItem(item: Node): void;
    }
}

declare module goog.ui.Palette {

    /**
     * Events fired by the palette object
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        [index: string]: EventType;
        // AFTER_HIGHLIGHT: EventType;
    };

    /**
     * A component to represent the currently highlighted cell.
     * @constructor
     * @extends {goog.ui.Control}
     * @private
     */
    interface CurrentCell_ extends goog.ui.Control {
        
        /**
         * @param {boolean} highlight Whether to highlight or unhighlight the component.
         * @return {boolean} Whether it was successful.
         */
        tryHighlight(highlight: boolean): boolean;
    }
}
