/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxCellEditor
 *
 * In-place editor for the graph. To control this editor, use
 * <mxGraph.invokesStopCellEditing>, <mxGraph.enterStopsCellEditing> and
 * <mxGraph.escapeEnabled>. If <mxGraph.enterStopsCellEditing> is true then
 * ctrl-enter or shift-enter can be used to create a linefeed. The F2 and
 * escape keys can always be used to stop editing.
 *
 * To customize the location of the textbox in the graph, override
 * <getEditorBounds> as follows:
 *
 * (code)
 * graph.cellEditor.getEditorBounds(state)
 * {
 *   var result = getEditorBounds.apply(this, arguments);
 *
 *   if (this.graph.getModel().isEdge(state.cell))
 *   {
 *     result.x = state.getCenterX() - result.width / 2;
 *     result.y = state.getCenterY() - result.height / 2;
 *   }
 *
 *   return result;
 * };
 * (end)
 *
 * Note that this hook is only called if <autoSize> is false. If <autoSize> is true,
 * then <mxShape.getLabelBounds> is used to compute the current bounds of the textbox.
 *
 * The textarea uses the mxCellEditor CSS class. You can modify this class in
 * your custom CSS. Note: You should modify the CSS after loading the client
 * in the page.
 *
 * Example:
 *
 * To only allow numeric input in the in-place editor, use the following code.
 *
 * (code)
 * var text = graph.cellEditor.textarea;
 *
 * mxEvent.addListener(text, 'keydown', function (evt)
 * {
 *   if (!(evt.keyCode >= 48 && evt.keyCode <= 57) &&
 *       !(evt.keyCode >= 96 && evt.keyCode <= 105))
 *   {
 *     mxEvent.consume(evt);
 *   }
 * });
 * (end)
 *
 * Placeholder:
 *
 * To implement a placeholder for cells without a label, use the
 * <emptyLabelText> variable.
 *
 * Resize in Chrome:
 *
 * Resize of the textarea is disabled by default. If you want to enable
 * this feature extend <init> and set this.textarea.style.resize = ''.
 *
 * To start editing on a key press event, the container of the graph
 * should have focus or a focusable parent should be used to add the
 * key press handler as follows.
 *
 * (code)
 * mxEvent.addListener(graph.container, 'keypress', mxUtils.bind(this, function(evt)
 * {
 *   if (!graph.isEditing() && !graph.isSelectionEmpty() && evt.which !== 0 &&
 *       !mxEvent.isAltDown(evt) && !mxEvent.isControlDown(evt) && !mxEvent.isMetaDown(evt))
 *   {
 *     graph.startEditing();
 *
 *     if (mxClient.IS_FF)
 *     {
 *       graph.cellEditor.textarea.value = String.fromCharCode(evt.which);
 *     }
 *   }
 * }));
 * (end)
 *
 * To allow focus for a DIV, and hence to receive key press events, some browsers
 * require it to have a valid tabindex attribute. In this case the following
 * code may be used to keep the container focused.
 *
 * (code)
 * var graphFireMouseEvent = graph.fireMouseEvent;
 * graph.fireMouseEvent(evtName, me, sender)
 * {
 *   if (evtName == mxEvent.MOUSE_DOWN)
 *   {
 *     this.container.focus();
 *   }
 *
 *   graphFireMouseEvent.apply(this, arguments);
 * };
 * (end)
 *
 * Constructor: mxCellEditor
 *
 * Constructs a new in-place editor for the specified graph.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 */

declare namespace mxgraph {
  export class mxCellEditor {

    /**
     * Variable: graph
     *
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph;

    /**
     * Variable: textarea
     *
     * Holds the DIV that is used for text editing. Note that this may be null before the first
     * edit. Instantiated in <init>.
     */
    textarea: Element;

    /**
     * Variable: editingCell
     *
     * Reference to the <mxCell> that is currently being edited.
     */
    editingCell: mxCell;

    /**
     * Variable: trigger
     *
     * Reference to the event that was used to start editing.
     */
    trigger: MouseEvent;

    /**
     * Variable: modified
     *
     * Specifies if the label has been modified.
     */
    modified: boolean;

    /**
     * Variable: autoSize
     *
     * Specifies if the textarea should be resized while the text is being edited.
     * Default is true.
     */
    autoSize: boolean;

    /**
     * Variable: selectText
     *
     * Specifies if the text should be selected when editing starts. Default is
     * true.
     */
    selectText: boolean;

    /**
     * Variable: emptyLabelText
     *
     * Text to be displayed for empty labels. Default is '' or '<br>' in Firefox as
     * a workaround for the missing cursor bug for empty content editable. This can
     * be set to eg. "[Type Here]" to easier visualize editing of empty labels. The
     * value is only displayed before the first keystroke and is never used as the
     * actual editing value.
     */
    emptyLabelText: '<br>' | '';

    /**
     * Variable: escapeCancelsEditing
     *
     * If true, pressing the escape key will stop editing and not accept the new
     * value. Change this to false to accept the new value on escape, and cancel
     * editing on Shift+Escape instead. Default is true.
     */
    escapeCancelsEditing: boolean;

    /**
     * Variable: textNode
     *
     * Reference to the label DOM node that has been hidden.
     */
    textNode: string;

    /**
     * Variable: zIndex
     *
     * Specifies the zIndex for the textarea. Default is 5.
     */
    zIndex: number;

    /**
     * Variable: minResize
     *
     * Defines the minimum width and height to be used in <resize>. Default is 0x20px.
     */
    minResize: mxRectangle;

    /**
     * Variable: wordWrapPadding
     *
     * Correction factor for word wrapping width. Default is 2 in quirks, 0 in IE
     * 11 and 1 in all other browsers and modes.
     */
    wordWrapPadding: 2 | 1 | 0;

    /**
     * Variable: blurEnabled
     *
     * If <focusLost> should be called if <textarea> loses the focus. Default is false.
     */
    blurEnabled: boolean;

    /**
     * Variable: initialValue
     *
     * Holds the initial editing value to check if the current value was modified.
     */
    initialValue: string;


    constructor(graph: mxGraph);

    /**
     * Function: init
     *
     * Creates the <textarea> and installs the event listeners. The key handler
     * updates the <modified> state.
     */
    init(): void;

    /**
     * Function: applyValue
     *
     * Called in <stopEditing> if cancel is false to invoke <mxGraph.labelChanged>.
     */
    applyValue(state: mxCellState, value: string): void;

    /**
     * Function: getInitialValue
     *
     * Gets the initial editing value for the given cell.
     */
    getInitialValue(state: mxCellState, trigger: Event): string;

    /**
     * Function: getCurrentValue
     *
     * Returns the current editing value.
     */
    getCurrentValue(state: mxCellState): string;

    /**
     * Function: isCancelEditingKeyEvent
     *
     * Returns true if <escapeCancelsEditing> is true and shift, control and meta
     * are not pressed.
     */
    isCancelEditingKeyEvent(evt: Event): boolean;

    /**
     * Function: installListeners
     *
     * Installs listeners for focus, change and standard key event handling.
     */
    installListeners(elt: Element): void;

    /**
     * Function: isStopEditingEvent
     *
     * Returns true if the given keydown event should stop cell editing. This
     * returns true if F2 is pressed of if <mxGraph.enterStopsCellEditing> is true
     * and enter is pressed without control or shift.
     */
    isStopEditingEvent(evt: Event): boolean;

    /**
     * Function: isEventSource
     *
     * Returns true if this editor is the source for the given native event.
     */
    isEventSource(evt: Event): boolean;

    /**
     * Function: resize
     *
     * Returns <modified>.
     */
    resize(): void;

    /**
     * Function: focusLost
     *
     * Called if the textarea has lost focus.
     */
    focusLost(): void;

    /**
     * Function: getBackgroundColor
     *
     * Returns the background color for the in-place editor. This implementation
     * always returns null.
     */
    getBackgroundColor(state: mxCellState): string;

    /**
     * Function: isLegacyEditor
     *
     * Returns true if max-width is not supported or if the SVG root element in
     * in the graph does not have CSS position absolute. In these cases the text
     * editor must use CSS position absolute to avoid an offset but it will have
     * a less accurate line wrapping width during the text editing preview. This
     * implementation returns true for IE8- and quirks mode or if the CSS position
     * of the SVG element is not absolute.
     */
    isLegacyEditor(): boolean;

    /**
     * Function: startEditing
     *
     * Starts the editor for the given cell.
     *
     * Parameters:
     *
     * cell - <mxCell> to start editing.
     * trigger - Optional mouse event that triggered the editor.
     */
    startEditing(cell: mxCell, trigger?: MouseEvent): void;

    /**
     * Function: isSelectText
     *
     * Returns <selectText>.
     */
    isSelectText(): boolean;

    /**
     * Function: clearSelection
     */
    clearSelection(): void;

    /**
     * Function: stopEditing
     *
     * Stops the editor and applies the value if cancel is false.
     */
    stopEditing(cancel: boolean): void;

    /**
     * Function: prepareTextarea
     *
     * Prepares the textarea for getting its value in <stopEditing>.
     * This implementation removes the extra trailing linefeed in Firefox.
     */
    prepareTextarea(): void;

    /**
     * Function: isHideLabel
     *
     * Returns true if the label should be hidden while the cell is being
     * edited.
     */
    isHideLabel(state: mxCellState): boolean;

    /**
     * Function: getMinimumSize
     *
     * Returns the minimum width and height for editing the given state.
     */
    getMinimumSize(state: mxCellState): mxRectangle;

    /**
     * Function: getEditorBounds
     *
     * Returns the <mxRectangle> that defines the bounds of the editor.
     */
    getEditorBounds(state: mxCellState): mxRectangle;

    /**
     * Function: getEmptyLabelText
     *
     * Returns the initial label value to be used of the label of the given
     * cell is empty. This label is displayed and cleared on the first keystroke.
     * This implementation returns <emptyLabelText>.
     *
     * Parameters:
     *
     * cell - <mxCell> for which a text for an empty editing box should be
     * returned.
     */
    getEmptyLabelText(cell: mxCell): string;

    /**
     * Function: getEditingCell
     *
     * Returns the cell that is currently being edited or null if no cell is
     * being edited.
     */
    getEditingCell(): mxCell;

    /**
     * Function: destroy
     *
     * Destroys the editor and removes all associated resources.
     */
    destroy(): void;
  }
}