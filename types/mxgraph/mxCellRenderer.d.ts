/**
 * Copyright (c) 2006-2017, JGraph Ltd
 * Copyright (c) 2006-2017, Gaudenz Alder
 */
/**
 * Class: mxCellRenderer
 *
 * Renders cells into a document object model. The <defaultShapes> is a global
 * map of shapename, constructor pairs that is used in all instances. You can
 * get a list of all available shape names using the following code.
 *
 * In general the cell renderer is in charge of creating, redrawing and
 * destroying the shape and label associated with a cell state, as well as
 * some other graphical objects, namely controls and overlays. The shape
 * hieararchy in the display (ie. the hierarchy in which the DOM nodes
 * appear in the document) does not reflect the cell hierarchy. The shapes
 * are a (flat) sequence of shapes and labels inside the draw pane of the
 * graph view, with some exceptions, namely the HTML labels being placed
 * directly inside the graph container for certain browsers.
 *
 * (code)
 * mxLog.show();
 * for (var i in mxCellRenderer.defaultShapes)
 * {
 *   mxLog.debug(i);
 * }
 * (end)
 *
 * Constructor: mxCellRenderer
 *
 * Constructs a new cell renderer with the following built-in shapes:
 * arrow, rectangle, ellipse, rhombus, image, line, label, cylinder,
 * swimlane, connector, actor and cloud.
 */
declare namespace mxgraph {
  export class mxCellRenderer {
    constructor();

    /**
     * Variable: defaultShapes
     *
     * Static array that contains the globally registered shapes which are
     * known to all instances of this class. For adding new shapes you should
     * use the static <mxCellRenderer.registerShape> function.
     */
    defaultShapes: Object;

    /**
     * Variable: defaultEdgeShape
     *
     * Defines the default shape for edges. Default is <mxConnector>.
     */
    defaultEdgeShape: mxConnector;

    /**
     * Variable: defaultVertexShape
     *
     * Defines the default shape for vertices. Default is <mxRectangleShape>.
     */
    defaultVertexShape: mxRectangleShape;

    /**
     * Variable: defaultTextShape
     *
     * Defines the default shape for labels. Default is <mxText>.
     */
    defaultTextShape: mxText;

    /**
     * Variable: legacyControlPosition
     *
     * Specifies if the folding icon should ignore the horizontal
     * orientation of a swimlane. Default is true.
     */
    legacyControlPosition: boolean;

    /**
     * Variable: legacySpacing
     *
     * Specifies if spacing and label position should be ignored if overflow is
     * fill or width. Default is true for backwards compatiblity.
     */
    legacySpacing: boolean;

    /**
     * Variable: antiAlias
     *
     * Anti-aliasing option for new shapes. Default is true.
     */
    antiAlias: boolean;

    /**
     * Variable: minSvgStrokeWidth
     *
     * Minimum stroke width for SVG output.
     */
    minSvgStrokeWidth: number;

    /**
     * Variable: forceControlClickHandler
     *
     * Specifies if the enabled state of the graph should be ignored in the control
     * click handler (to allow folding in disabled graphs). Default is false.
     */
    forceControlClickHandler: boolean;

    /**
     * Function: registerShape
     *
     * Registers the given constructor under the specified key in this instance
     * of the renderer.
     *
     * Example:
     *
     * (code)
     * mxCellRenderer.registerShape(mxConstants.SHAPE_RECTANGLE, mxRectangleShape);
     * (end)
     *
     * Parameters:
     *
     * key - String representing the shape name.
     * shape - Constructor of the <mxShape> subclass.
     */
    private registerShape(key: string, shape: any);

    /**
     * Function: initializeShape
     *
     * Initializes the shape in the given state by calling its init method with
     * the correct container after configuring it using <configureShape>.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the shape should be initialized.
     */
    initializeShape(state: mxCellState): void;

    /**
     * Function: createShape
     *
     * Creates and returns the shape for the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the shape should be created.
     */
    createShape(state: mxCellState): mxShape;

    /**
     * Function: createIndicatorShape
     *
     * Creates the indicator shape for the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the indicator shape should be created.
     */
    createIndicatorShape(state: mxCellState): void;

    /**
     * Function: getShape
     *
     * Returns the shape for the given name from <defaultShapes>.
     */
    getShape(name: string): mxShape;

    /**
     * Function: getShapeConstructor
     *
     * Returns the constructor to be used for creating the shape.
     */
    getShapeConstructor(state: mxCellState): any;

    /**
     * Function: configureShape
     *
     * Configures the shape for the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the shape should be configured.
     */
    configureShape(state: mxCellState): void;

    /**
     * Function: postConfigureShape
     *
     * Replaces any reserved words used for attributes, eg. inherit,
     * indicated or swimlane for colors in the shape for the given state.
     * This implementation resolves these keywords on the fill, stroke
     * and gradient color keys.
     */
    postConfigureShape(state: mxCellState): void;

    /**
     * Function: checkPlaceholderStyles
     *
     * Resolves special keywords 'inherit', 'indicated' and 'swimlane' and sets
     * the respective color on the shape.
     */
    checkPlaceholderStyles(state: mxCellState): boolean;

    /**
     * Function: resolveColor
     *
     * Resolves special keywords 'inherit', 'indicated' and 'swimlane' and sets
     * the respective color on the shape.
     */
    resolveColor(state: mxCellState, field: string, key: string): void;

    /**
     * Function: getLabelValue
     *
     * Returns the value to be used for the label.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the label should be created.
     */
    getLabelValue(state: mxCellState): string;

    /**
     * Function: createLabel
     *
     * Creates the label for the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the label should be created.
     */
    createLabel(state: mxCellState, value: string): void;

    /**
     * Function: initializeLabel
     *
     * Initiailzes the label with a suitable container.
     *
     * Parameters:
     *
     * state - <mxCellState> whose label should be initialized.
     */
    initializeLabel(state: mxCellState, shape: mxShape): void;

    /**
     * Function: createCellOverlays
     *
     * Creates the actual shape for showing the overlay for the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the overlay should be created.
     */
    createCellOverlays(state: mxCellState): void;

    /**
     * Function: initializeOverlay
     *
     * Initializes the given overlay.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the overlay should be created.
     * overlay - <mxImageShape> that represents the overlay.
     */
    initializeOverlay(state: mxCellState, overlay: mxImageShape): void;

    /**
     * Function: installOverlayListeners
     *
     * Installs the listeners for the given <mxCellState>, <mxCellOverlay> and
     * <mxShape> that represents the overlay.
     */
    installCellOverlayListeners(state: mxCellState, overlay: mxCellOverlay, shape: mxShape): void;

    /**
     * Function: createControl
     *
     * Creates the control for the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the control should be created.
     */
    createControl(state: mxCellState): void;

    /**
     * Function: createControlClickHandler
     *
     * Hook for creating the click handler for the folding icon.
     *
     * Parameters:
     *
     * state - <mxCellState> whose control click handler should be returned.
     */
    createControlClickHandler(state: mxCellState): void;

    /**
     * Function: initControl
     *
     * Initializes the given control and returns the corresponding DOM node.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the control should be initialized.
     * control - <mxShape> to be initialized.
     * handleEvents - Boolean indicating if mousedown and mousemove should fire events via the graph.
     * clickHandler - Optional function to implement clicks on the control.
     */
    initControl(state: mxCellState, control: mxShape, handleEvents: boolean, clickHandler?: Function): Element;

    /**
     * Function: isShapeEvent
     *
     * Returns true if the event is for the shape of the given state. This
     * implementation always returns true.
     *
     * Parameters:
     *
     * state - <mxCellState> whose shape fired the event.
     * evt - Mouse event which was fired.
     */
    isShapeEvent(state: mxCellState, evt: MouseEvent): boolean;

    /**
     * Function: isLabelEvent
     *
     * Returns true if the event is for the label of the given state. This
     * implementation always returns true.
     *
     * Parameters:
     *
     * state - <mxCellState> whose label fired the event.
     * evt - Mouse event which was fired.
     */
    isLabelEvent(state: mxCellState, evt: MouseEvent): boolean;

    /**
     * Function: installListeners
     *
     * Installs the event listeners for the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the event listeners should be isntalled.
     */
    installListeners(state: mxCellState): void;

    /**
     * Function: redrawLabel
     *
     * Redraws the label for the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> whose label should be redrawn.
     */
    redrawLabel(state: mxCellState, forced?: boolean): void;

    /**
     * Function: isTextShapeInvalid
     *
     * Returns true if the style for the text shape has changed.
     *
     * Parameters:
     *
     * state - <mxCellState> whose label should be checked.
     * shape - <mxText> shape to be checked.
     */
    isTextShapeInvalid(state: mxCellState, shape: mxText): boolean;

    /**
     * Function: redrawLabelShape
     *
     * Called to invoked redraw on the given text shape.
     *
     * Parameters:
     *
     * shape - <mxText> shape to be redrawn.
     */
    redrawLabelShape(shape: mxText): void;

    /**
     * Function: getTextScale
     *
     * Returns the scaling used for the label of the given state
     *
     * Parameters:
     *
     * state - <mxCellState> whose label scale should be returned.
     */
    getTextScale(state: mxCellState): number;

    /**
     * Function: getLabelBounds
     *
     * Returns the bounds to be used to draw the label of the given state.
     *
     * Parameters:
     *
     * state - <mxCellState> whose label bounds should be returned.
     */
    getLabelBounds(state: mxCellState): mxRectangle;

    /**
     * Function: rotateLabelBounds
     *
     * Adds the shape rotation to the given label bounds and
     * applies the alignment and offsets.
     *
     * Parameters:
     *
     * state - <mxCellState> whose label bounds should be rotated.
     * bounds - <mxRectangle> the rectangle to be rotated.
     */
    rotateLabelBounds(state: mxCellState, bounds: mxRectangle): void;

    /**
     * Function: redrawCellOverlays
     *
     * Redraws the overlays for the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> whose overlays should be redrawn.
     */
    redrawCellOverlays(state: mxCellState, forced?: boolean): void;

    /**
     * Function: redrawControl
     *
     * Redraws the control for the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> whose control should be redrawn.
     */
    redrawControl(state: mxCellState, forced?: boolean): void;

    /**
     * Function: getControlBounds
     *
     * Returns the bounds to be used to draw the control (folding icon) of the
     * given state.
     */
    getControlBounds(state: mxCellState, w: number, h: number): mxRectangle;

    /**
     * Function: insertStateAfter
     *
     * Inserts the given array of <mxShapes> after the given nodes in the DOM.
     *
     * Parameters:
     *
     * shapes - Array of <mxShapes> to be inserted.
     * node - Node in <drawPane> after which the shapes should be inserted.
     * htmlNode - Node in the graph container after which the shapes should be inserted that
     * will not go into the <drawPane> (eg. HTML labels without foreignObjects).
     */
    insertStateAfter(state: mxCellState, node: Element, htmlNode: HTMLElement): void;

    /**
     * Function: getShapesForState
     *
     * Returns the <mxShapes> for the given cell state in the order in which they should
     * appear in the DOM.
     *
     * Parameters:
     *
     * state - <mxCellState> whose shapes should be returned.
     */
    getShapesForState(state: mxCellState): mxShape[];

    /**
     * Function: redraw
     *
     * Updates the bounds or points and scale of the shapes for the given cell
     * state. This is called in mxGraphView.validatePoints as the last step of
     * updating all cells.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the shapes should be updated.
     * force - Optional boolean that specifies if the cell should be reconfiured
     * and redrawn without any additional checks.
     * rendering - Optional boolean that specifies if the cell should actually
     * be drawn into the DOM. If this is false then redraw and/or reconfigure
     * will not be called on the shape.
     */
    redraw(state: mxCellState, force?: boolean, rendering?: boolean): void;

    /**
     * Function: redrawShape
     *
     * Redraws the shape for the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> whose label should be redrawn.
     */
    redrawShape(state: mxCellState, force?: boolean, rendering?: boolean): void;

    /**
     * Function: doRedrawShape
     *
     * Invokes redraw on the shape of the given state.
     */
    doRedrawShape(state: mxCellState): void;

    /**
     * Function: isShapeInvalid
     *
     * Returns true if the given shape must be repainted.
     */
    isShapeInvalid(state: mxCellState, shape: mxShape): boolean;

    /**
     * Function: destroy
     *
     * Destroys the shapes associated with the given cell state.
     *
     * Parameters:
     *
     * state - <mxCellState> for which the shapes should be destroyed.
     */
    destroy(state: mxCellState): void;
  }
}