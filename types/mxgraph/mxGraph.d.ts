/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */

declare namespace mxgraph {
	export class mxGraph {
		//#region variables

		// Holds the mouse event listeners.
		mouseListeners: any[];

		// Holds the state of the mouse button.
		isMouseDown: boolean;

		// Holds the mxGraphModel that contains the cells to be displayed.
		model: mxGraphModel;

		// Holds the mxGraphView that caches the mxCellStates for the cells.
		view: mxGraphView;

		// Holds the mxStylesheet that defines the appearance of the cells.
		stylesheet: mxStylesheet;

		// Holds the mxGraphSelectionModel that models the current selection.
		selectionModel: mxGraphSelectionModel;

		// Holds the mxCellEditor that is used as the in-place editing.

		cellEditor: mxCellEditor;

		cellRenderer: mxCellRenderer;

		multiplicities: mxMultiplicity;

		renderHint: any;

		dialect: mxDialectConstants;

		gridSize: number;

		gridEnabled: boolean;

		portsEnabled: boolean;

		nativeDoubleClickEnabled: boolean;

		doubleTapEnabled: boolean;

		doubleTapTimeout: number;

		doubleTapTolerance: number;

		lastTouchX: number;

		lastTouchY: number;

		lastTouchTime: number;

		tapAndHoldEnabled: boolean;

		tapAndHoldDelay: number;

		tapAndHoldInProgress: boolean;

		tapAndHoldValid: boolean;

		initialTouchX: number;

		initialTouchY: number;

		tolerance: number;

		defaultOverlap: number;

		defaultParent: mxCell;

		alternateEdgeStyle: mxCell;

		backgroundImage: mxImage;

		pageVisible: boolean;

		pageBreaksVisible: boolean;

		pageBreakColor: string;

		pageBreakDashed: boolean;

		minPageBreakDist: number;

		preferPageSize: boolean;

		pageFormat: mxRectangle;

		pageScale: number;

		enabled: boolean;

		escapeEnabled: boolean;

		invokesStopCellEditing: boolean;

		enterStopsCellEditing: boolean;

		useScrollbarsForPanning: boolean;

		exportEnabled: boolean;

		importEnabled: boolean;

		cellsLocked: boolean;

		cellsCloneable: boolean;

		foldingEnabled: boolean;

		cellsEditable: boolean;

		cellsDeletable: boolean;

		cellsMovable: boolean

		edgeLabelsMovable: boolean;

		vertexLabelsMovable: boolean;

		dropEnabled: boolean;

		splitEnabled: boolean;

		cellsResizable: boolean;

		cellsBendable: boolean;

		cellsSelectable: boolean;

		cellsDisconnectable: boolean;

		autoSizeCells: boolean;

		autoSizeCellsOnAdd: boolean;

		autoScroll: boolean;

		ignoreScrollbars: boolean;

		translateToScrollPosition: boolean;

		timerAutoScroll: boolean;

		allowAutoPanning: boolean;

		autoExtend: boolean;

		maximumGraphBounds: mxRectangle;

		minimumGraphSize: mxRectangle;

		minimumContainerSize: mxRectangle;

		maximumContainerSize: mxRectangle;

		resizeContainer: boolean;

		border: number;

		keepEdgesInForeground: boolean;

		keepEdgesInBackground: boolean;

		allowNegativeCoordinates: boolean;

		constrainChildren: boolean;

		constrainRelativeChildren: boolean;

		extendParents: boolean;

		extendParentsOnAdd: boolean;

		recursiveResize: boolean;

		collapseToPreferredSize: boolean;

		zoomFactor: number;

		keepSelectionVisibleOnZoom: boolean;

		centerZoom: boolean;

		resetViewOnRootChange: boolean;

		resetEdgesOnResize: boolean;

		resetEdgesOnMove: boolean;

		resetEdgesOnConnect: boolean;

		allowLoops: boolean;

		defaultLoopStyle: mxEdgeStyle;

		multigraph: boolean;

		connectableEdges: boolean;

		allowDanglingEdges: boolean;

		cloneInvalidEdges: boolean;

		disconnectOnMove: boolean;

		labelsVisible: boolean;

		htmlLabels: boolean;

		swimlaneSelectionEnabled: boolean;

		swimlaneNesting: boolean;

		swimlaneIndicatorColorAttribute: string;

		imageBundles: any;

		minFitScale: number;

		maxFitScale: number;

		panDx: number;

		panDy: number;

		collapsedImage: mxImage;

		expandedImage: mxImage;

		warningImage: mxImage;

		alreadyConnectedResource: 'alreadyConnected' | '';

		containsValidationErrorsResource: 'containsValidationErrors' | '';

		collapseExpandResource: 'collapse-expand' | '';

		//#endregion

		/**
	 * Function: init
	 *
	 * Initializes the <container> and creates the respective datastructures.
	 *
	 * Parameters:
	 *
	 * container - DOM node that will contain the graph display.
	 */
		init(container: Element): void;

		/**
		 * Function: createHandlers
		 *
		 * Creates the tooltip-, panning-, connection- and graph-handler (in this
		 * order). This is called in the constructor before <init> is called.
		 */
		createHandlers(): void;

		/**
		 * Function: createTooltipHandler
		 *
		 * Creates and returns a new <mxTooltipHandler> to be used in this graph.
		 */
		createTooltipHandler(): mxTooltipHandler;

		/**
		 * Function: createSelectionCellsHandler
		 *
		 * Creates and returns a new <mxTooltipHandler> to be used in this graph.
		 */
		createSelectionCellsHandler(): mxSelectionCellsHandler;

		/**
		 * Function: createConnectionHandler
		 *
		 * Creates and returns a new <mxConnectionHandler> to be used in this graph.
		 */
		createConnectionHandler(): mxConnectionHandler;

		/**
		 * Function: createGraphHandler
		 *
		 * Creates and returns a new <mxGraphHandler> to be used in this graph.
		 */
		createGraphHandler(): mxGraphHandler;

		/**
		 * Function: createPanningHandler
		 *
		 * Creates and returns a new <mxPanningHandler> to be used in this graph.
		 */
		createPanningHandler(): mxPanningHandler;

		/**
		 * Function: createPopupMenuHandler
		 *
		 * Creates and returns a new <mxPopupMenuHandler> to be used in this graph.
		 */
		createPopupMenuHandler(): mxPopupMenuHandler;

		/**
		 * Function: createSelectionModel
		 *
		 * Creates a new <mxGraphSelectionModel> to be used in this graph.
		 */
		createSelectionModel(): mxGraphSelectionModel;

		/**
		 * Function: createStylesheet
		 *
		 * Creates a new <mxGraphSelectionModel> to be used in this graph.
		 */
		createStylesheet(): mxStylesheet;

		/**
		 * Function: createGraphView
		 *
		 * Creates a new <mxGraphView> to be used in this graph.
		 */
		createGraphView(): mxGraphView;

		/**
		 * Function: createCellRenderer
		 *
		 * Creates a new <mxCellRenderer> to be used in this graph.
		 */
		createCellRenderer(): mxCellRenderer;

		/**
		 * Function: createCellEditor
		 *
		 * Creates a new <mxCellEditor> to be used in this graph.
		 */
		createCellEditor(): mxCellEditor;

		/**
		 * Function: getModel
		 *
		 * Returns the <mxGraphModel> that contains the cells.
		 */
		getModel(): mxGraphModel;

		/**
		 * Function: getView
		 *
		 * Returns the <mxGraphView> that contains the <mxCellStates>.
		 */
		getView(): mxGraphView;

		/**
		 * Function: getStylesheet
		 *
		 * Returns the <mxStylesheet> that defines the style.
		 */
		getStylesheet(): mxStylesheet;

		/**
		 * Function: setStylesheet
		 *
		 * Sets the <mxStylesheet> that defines the style.
		 */
		setStylesheet(stylesheet: mxStylesheet): void;

		/**
		 * Function: getSelectionModel
		 *
		 * Returns the <mxGraphSelectionModel> that contains the selection.
		 */
		getSelectionModel(): mxGraphSelectionModel;

		/**
		 * Function: setSelectionModel
		 *
		 * Sets the <mxSelectionModel> that contains the selection.
		 */
		setSelectionModel(selectionModel: mxSelectionModel): void;

		/**
		 * Function: getSelectionCellsForChanges
		 *
		 * Returns the cells to be selected for the given array of changes.
		 */
		getSelectionCellsForChanges(changes): mxCell[];

		/**
		 * Function: graphModelChanged
		 *
		 * Called when the graph model changes. Invokes <processChange> on each
		 * item of the given array to update the view accordingly.
		 *
		 * Parameters:
		 *
		 * changes - Array that contains the individual changes.
		 */
		graphModelChanged(changes: mxRootChange | mxChildChange | mxTerminalChange | mxGeometryChange | mxValueChange | mxStyleChange): void;

		/**
		 * Function: getRemovedCellsForChanges
		 *
		 * Returns the cells that have been removed from the model.
		 */
		getRemovedCellsForChanges(changes: mxRootChange | mxChildChange | mxTerminalChange | mxGeometryChange | mxValueChange | mxStyleChange): mxCell[];

		/**
		 * Function: processChange
		 *
		 * Processes the given change and invalidates the respective cached data
		 * in <view>. This fires a <root> event if the root has changed in the
		 * model.
		 *
		 * Parameters:
		 *
		 * change - Object that represents the change on the model.
		 */
		processChange(change: mxRootChange | mxChildChange | mxTerminalChange | mxGeometryChange | mxValueChange | mxStyleChange): void;

		/**
		 * Function: removeStateForCell
		 *
		 * Removes all cached information for the given cell and its descendants.
		 * This is called when a cell was removed from the model.
		 *
		 * Paramters:
		 *
		 * cell - <mxCell> that was removed from the model.
		 */
		removeStateForCell(cell: mxCell): void;

		/**
		 * Group: Overlays
		 */

		/**
		 * Function: addCellOverlay
		 *
		 * Adds an <mxCellOverlay> for the specified cell. This method fires an
		 * <addoverlay> event and returns the new <mxCellOverlay>.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> to add the overlay for.
		 * overlay - <mxCellOverlay> to be added for the cell.
		 */
		addCellOverlay(cell: mxCell, overlay: mxCellOverlay): mxCellOverlay;

		/**
		 * Function: getCellOverlays
		 *
		 * Returns the array of <mxCellOverlays> for the given cell or null, if
		 * no overlays are defined.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose overlays should be returned.
		 */
		getCellOverlays(cell: mxCell): mxCellOverlay[];

		/**
		 * Function: removeCellOverlay
		 *
		 * Removes and returns the given <mxCellOverlay> from the given cell. This
		 * method fires a <removeoverlay> event. If no overlay is given, then all
		 * overlays are removed using <removeOverlays>.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose overlay should be removed.
		 * overlay - Optional <mxCellOverlay> to be removed.
		 */
		removeCellOverlay(cell: mxCell, overlay: mxCellOverlay): mxCellOverlay;

		/**
		 * Function: removeCellOverlays
		 *
		 * Removes all <mxCellOverlays> from the given cell. This method
		 * fires a <removeoverlay> event for each <mxCellOverlay> and returns
		 * the array of <mxCellOverlays> that was removed from the cell.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose overlays should be removed
		 */
		removeCellOverlays(cell: mxCell): mxCellOverlay[];

		/**
		 * Function: clearCellOverlays
		 *
		 * Removes all <mxCellOverlays> in the graph for the given cell and all its
		 * descendants. If no cell is specified then all overlays are removed from
		 * the graph. This implementation uses <removeCellOverlays> to remove the
		 * overlays from the individual cells.
		 *
		 * Parameters:
		 *
		 * cell - Optional <mxCell> that represents the root of the subtree to
		 * remove the overlays from. Default is the root in the model.
		 */
		clearCellOverlays(cell?: mxCell): void;

		/**
		 * Function: setCellWarning
		 *
		 * Creates an overlay for the given cell using the warning and image or
		 * <warningImage> and returns the new <mxCellOverlay>. The warning is
		 * displayed as a tooltip in a red font and may contain HTML markup. If
		 * the warning is null or a zero length string, then all overlays are
		 * removed from the cell.
		 *
		 * Example:
		 *
		 * (code)
		 * graph.setCellWarning(cell, '<b>Warning:</b>: Hello, World!');
		 * (end)
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose warning should be set.
		 * warning - String that represents the warning to be displayed.
		 * img - Optional <mxImage> to be used for the overlay. Default is
		 * <warningImage>.
		 * isSelect - Optional boolean indicating if a click on the overlay
		 * should select the corresponding cell. Default is false.
		 */
		setCellWarning(cell: mxCell, warning: string, img?: mxImage, isSelect?: boolean): mxCellOverlay;

		/**
		 * Group: In-place editing
		 */

		/**
		 * Function: startEditing
		 *
		 * Calls <startEditingAtCell> using the given cell or the first selection
		 * cell.
		 *
		 * Parameters:
		 *
		 * evt - Optional mouse event that triggered the editing.
		 */
		startEditing(evt?: Event): void;

		/**
		 * Function: startEditingAtCell
		 *
		 * Fires a <startEditing> event and invokes <mxCellEditor.startEditing>
		 * on <editor>. After editing was started, a <editingStarted> event is
		 * fired.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> to start the in-place editor for.
		 * evt - Optional mouse event that triggered the editing.
		 */
		startEditingAtCell(cell: mxCell, evt?: Event): void;

		/**
		 * Function: getEditingValue
		 *
		 * Returns the initial value for in-place editing. This implementation
		 * returns <convertValueToString> for the given cell. If this function is
		 * overridden, then <mxGraphModel.valueForCellChanged> should take care
		 * of correctly storing the actual new value inside the user object.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> for which the initial editing value should be returned.
		 * evt - Optional mouse event that triggered the editor.
		 */
		getEditingValue(cell: mxCell, evt: Event): string;

		/**
		 * Function: stopEditing
		 *
		 * Stops the current editing  and fires a <editingStopped> event.
		 *
		 * Parameters:
		 *
		 * cancel - Boolean that specifies if the current editing value
		 * should be stored.
		 */
		stopEditing(cancel: boolean): void;

		/**
		 * Function: labelChanged
		 *
		 * Sets the label of the specified cell to the given value using
		 * <cellLabelChanged> and fires <mxEvent.LABEL_CHANGED> while the
		 * transaction is in progress. Returns the cell whose label was changed.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose label should be changed.
		 * value - New label to be assigned.
		 * evt - Optional event that triggered the change.
		 */
		labelChanged(cell: mxCell, value: string, evt: Event): mxCell;

		/**
		 * Function: cellLabelChanged
		 *
		 * Sets the new label for a cell. If autoSize is true then
		 * <cellSizeUpdated> will be called.
		 *
		 * In the following example, the function is extended to map changes to
		 * attributes in an XML node, as shown in <convertValueToString>.
		 * Alternatively, the handling of this can be implemented as shown in
		 * <mxGraphModel.valueForCellChanged> without the need to clone the
		 * user object.
		 *
		 * (code)
		 * var graphCellLabelChanged = graph.cellLabelChanged;
		 hanged(cell, newValue, autoSize)
		 * {
		 * 	// Cloned for correct undo/redo
		 * 	var elt = cell.value.cloneNode(true);
		 *  elt.setAttribute('label', newValue);
		 *
		 *  newValue = elt;
		 *  graphCellLabelChanged.apply(this, arguments);
		 * };
		 * (end)
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose label should be changed.
		 * value - New label to be assigned.
		 * autoSize - Boolean that specifies if <cellSizeUpdated> should be called.
		 */
		cellLabelChanged(cell: mxCell, value: string, autoSize: boolean): void;

		/**
		 * Group: Event processing
		 */

		/**
		 * Function: escape
		 *
		 * Processes an escape keystroke.
		 *
		 * Parameters:
		 *
		 * evt - Mouseevent that represents the keystroke.
		 */
		escape(evt: Event): void;

		/**
		 * Function: click
		 *
		 * Processes a singleclick on an optional cell and fires a <click> event.
		 * The click event is fired initially. If the graph is enabled and the
		 * event has not been consumed, then the cell is selected using
		 * <selectCellForEvent> or the selection is cleared using
		 * <clearSelection>. The events consumed state is set to true if the
		 * corresponding <mxMouseEvent> has been consumed.
		 *
		 * To handle a click event, use the following code.
		 *
		 * (code)
		 * graph.addListener(mxEvent.CLICK, function(sender, evt)
		 * {
		 *   var e = evt.getProperty('event'); // mouse event
		 *   var cell = evt.getProperty('cell'); // cell may be null
		 *
		 *   if (cell != null)
		 *   {
		 *     // Do something useful with cell and consume the event
		 *     evt.consume();
		 *   }
		 * });
		 * (end)
		 *
		 * Parameters:
		 *
		 * me - <mxMouseEvent> that represents the single click.
		 */
		click(me: mxMouseEvent): void;

		/**
		 * Function: dblClick
		 *
		 * Processes a doubleclick on an optional cell and fires a <dblclick>
		 * event. The event is fired initially. If the graph is enabled and the
		 * event has not been consumed, then <edit> is called with the given
		 * cell. The event is ignored if no cell was specified.
		 *
		 * Example for overriding this method.
		 *
		 * (code)
		 vt, cell)
		 * {
		 *   var mxe = new mxEventObject(mxEvent.DOUBLE_CLICK, 'event', evt, 'cell', cell);
		 *   this.fireEvent(mxe);
		 *
		 *   if (this.isEnabled() && !mxEvent.isConsumed(evt) && !mxe.isConsumed())
		 *   {
		 * 	   mxUtils.alert('Hello, World!');
		 *     mxe.consume();
		 *   }
		 * }
		 * (end)
		 *
		 * Example listener for this event.
		 *
		 * (code)
		 * graph.addListener(mxEvent.DOUBLE_CLICK, function(sender, evt)
		 * {
		 *   var cell = evt.getProperty('cell');
		 *   // do something with the cell and consume the
		 *   // event to prevent in-place editing from start
		 * });
		 * (end)
		 *
		 * Parameters:
		 *
		 * evt - Mouseevent that represents the doubleclick.
		 * cell - Optional <mxCell> under the mousepointer.
		 */
		dblClick(evt: Event, cell?: mxCell): void;

		/**
		 * Function: tapAndHold
		 *
		 * Handles the <mxMouseEvent> by highlighting the <mxCellState>.
		 *
		 * Parameters:
		 *
		 * me - <mxMouseEvent> that represents the touch event.
		 * state - Optional <mxCellState> that is associated with the event.
		 */
		tapAndHold(me: mxMouseEvent): void;

		/**
		 * Function: scrollPointToVisible
		 *
		 * Scrolls the graph to the given point, extending the graph container if
		 * specified.
		 */
		scrollPointToVisible(x: number, y: number, extend: boolean, border: number): void;


		/**
		 * Function: createPanningManager
		 *
		 * Creates and returns an <mxPanningManager>.
		 */
		createPanningManager(): mxPanningManager;

		/**
		 * Function: getBorderSizes
		 *
		 * Returns the size of the border and padding on all four sides of the
		 * container. The left, top, right and bottom borders are stored in the x, y,
		 * width and height of the returned <mxRectangle>, respectively.
		 */
		getBorderSizes(): mxRectangle;

		/**
		 * Function: getPreferredPageSize
		 *
		 * Returns the preferred size of the background page if <preferPageSize> is true.
		 */
		getPreferredPageSize(bounds: number, width: number, height: number): mxRectangle;

		/**
		 * Function: fit
		 *
		 * Scales the graph such that the complete diagram fits into <container> and
		 * returns the current scale in the view. To fit an initial graph prior to
		 * rendering, set <mxGraphView.rendering> to false prior to changing the model
		 * and execute the following after changing the model.
		 *
		 * (code)
		 * graph.fit();
		 * graph.view.rendering = true;
		 * graph.refresh();
		 * (end)
		 *
		 * To fit and center the graph, the following code can be used.
		 *
		 * (code)
		 * var margin = 2;
		 * var max = 3;
		 *
		 * var bounds = graph.getGraphBounds();
		 * var cw = graph.container.clientWidth - margin;
		 * var ch = graph.container.clientHeight - margin;
		 * var w = bounds.width / graph.view.scale;
		 * var h = bounds.height / graph.view.scale;
		 * var s = Math.min(max, Math.min(cw / w, ch / h));
		 *
		 * graph.view.scaleAndTranslate(s,
		 *   (margin + cw - w * s) / (2 * s) - bounds.x / graph.view.scale,
		 *   (margin + ch - h * s) / (2 * s) - bounds.y / graph.view.scale);
		 * (end)
		 *
		 * Parameters:
		 *
		 * border - Optional number that specifies the border. Default is <border>.
		 * keepOrigin - Optional boolean that specifies if the translate should be
		 * changed. Default is false.
		 * margin - Optional margin in pixels. Default is 0.
		 * enabled - Optional boolean that specifies if the scale should be set or
		 * just returned. Default is true.
		 * ignoreWidth - Optional boolean that specifies if the width should be
		 * ignored. Default is false.
		 * ignoreHeight - Optional boolean that specifies if the height should be
		 * ignored. Default is false.
		 * maxHeight - Optional maximum height.
		 */
		fit(border?: number, keepOrigin?: boolean, margin?: number, enabled?: boolean, ignoreWidth?: boolean, ignoreHeight?: boolean, maxHeight?: number): number;

		/**
		 * Function: sizeDidChange
		 *
		 * Called when the size of the graph has changed. This implementation fires
		 * a <size> event after updating the clipping region of the SVG element in
		 * SVG-bases browsers.
		 */
		sizeDidChange(): void;

		/**
		 * Function: doResizeContainer
		 *
		 * Resizes the container for the given graph width and height.
		 */
		doResizeContainer(width: number, height: number): void;

		/**
		 * Function: updatePageBreaks
		 *
		 * Invokes from <sizeDidChange> to redraw the page breaks.
		 *
		 * Parameters:
		 *
		 * visible - Boolean that specifies if page breaks should be shown.
		 * width - Specifies the width of the container in pixels.
		 * height - Specifies the height of the container in pixels.
		 */
		updatePageBreaks(visible: boolean, width: number, height: number): void;

		/**
		 * Group: Cell styles
		 */

		/**
		 * Function: getCellStyle
		 *
		 * Returns an array of key, value pairs representing the cell style for the
		 * given cell. If no string is defined in the model that specifies the
		 * style, then the default style for the cell is returned or <EMPTY_ARRAY>,
		 * if not style can be found. Note: You should try and get the cell state
		 * for the given cell and use the cached style in the state before using
		 * this method.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose style should be returned as an array.
		 */
		getCellStyle(cell: mxCell): StyleMap;

		/**
		 * Function: postProcessCellStyle
		 *
		 * Tries to resolve the value for the image style in the image bundles and
		 * turns short data URIs as defined in mxImageBundle to data URIs as
		 * defined in RFC 2397 of the IETF.
		 */
		postProcessCellStyle(style: StyleMap): void;

		/**
		 * Function: setCellStyle
		 *
		 * Sets the style of the specified cells. If no cells are given, then the
		 * selection cells are changed.
		 *
		 * Parameters:
		 *
		 * style - String representing the new style of the cells.
		 * cells - Optional array of <mxCells> to set the style for. Default is the
		 * selection cells.
		 */
		setCellStyle(style: string, cells?: mxCell[]): void;

		/**
		 * Function: toggleCellStyle
		 *
		 * Toggles the boolean value for the given key in the style of the given cell
		 * and returns the new value as 0 or 1. If no cell is specified then the
		 * selection cell is used.
		 *
		 * Parameter:
		 *
		 * key - String representing the key for the boolean value to be toggled.
		 * defaultValue - Optional boolean default value if no value is defined.
		 * Default is false.
		 * cell - Optional <mxCell> whose style should be modified. Default is
		 * the selection cell.
		 */
		toggleCellStyle(key: string, defaultValue?: boolean, cell?: mxCell): 0 | 1;

		/**
		 * Function: toggleCellStyles
		 *
		 * Toggles the boolean value for the given key in the style of the given cells
		 * and returns the new value as 0 or 1. If no cells are specified, then the
		 * selection cells are used. For example, this can be used to toggle
		 * <mxConstants.STYLE_ROUNDED> or any other style with a boolean value.
		 *
		 * Parameter:
		 *
		 * key - String representing the key for the boolean value to be toggled.
		 * defaultValue - Optional boolean default value if no value is defined.
		 * Default is false.
		 * cells - Optional array of <mxCells> whose styles should be modified.
		 * Default is the selection cells.
		 */
		toggleCellStyles(key: string, defaultValue?: boolean, cells?: mxCell[]): 0 | 1;

		/**
		 * Function: setCellStyles
		 *
		 * Sets the key to value in the styles of the given cells. This will modify
		 * the existing cell styles in-place and override any existing assignment
		 * for the given key. If no cells are specified, then the selection cells
		 * are changed. If no value is specified, then the respective key is
		 * removed from the styles.
		 *
		 * Parameters:
		 *
		 * key - String representing the key to be assigned.
		 * value - String representing the new value for the key.
		 * cells - Optional array of <mxCells> to change the style for. Default is
		 * the selection cells.
		 */
		setCellStyles(key: string, value: string, cells?: mxCell[]): void;

		/**
		 * Function: toggleCellStyleFlags
		 *
		 * Toggles the given bit for the given key in the styles of the specified
		 * cells.
		 *
		 * Parameters:
		 *
		 * key - String representing the key to toggle the flag in.
		 * flag - Integer that represents the bit to be toggled.
		 * cells - Optional array of <mxCells> to change the style for. Default is
		 * the selection cells.
		 */
		toggleCellStyleFlags(key: string, flag: number, cells?: mxCell[]): void;

		/**
		 * Function: setCellStyleFlags
		 *
		 * Sets or toggles the given bit for the given key in the styles of the
		 * specified cells.
		 *
		 * Parameters:
		 *
		 * key - String representing the key to toggle the flag in.
		 * flag - Integer that represents the bit to be toggled.
		 * value - Boolean value to be used or null if the value should be toggled.
		 * cells - Optional array of <mxCells> to change the style for. Default is
		 * the selection cells.
		 */
		setCellStyleFlags(key: string, flag: number, value: boolean, cells?: mxCell[]): void;

		/**
		 * Group: Cell alignment and orientation
		 */

		/**
		 * Function: alignCells
		 *
		 * Aligns the given cells vertically or horizontally according to the given
		 * alignment using the optional parameter as the coordinate.
		 *
		 * Parameters:
		 *
		 * align - Specifies the alignment. Possible values are all constants in
		 * mxConstants with an ALIGN prefix.
		 * cells - Array of <mxCells> to be aligned.
		 * param - Optional coordinate for the alignment.
		 */
		alignCells(align: string, cells: mxCell[], param?: number): mxCell[];

		/**
		 * Function: flipEdge
		 *
		 * Toggles the style of the given edge between null (or empty) and
		 * <alternateEdgeStyle>. This method fires <mxEvent.FLIP_EDGE> while the
		 * transaction is in progress. Returns the edge that was flipped.
		 *
		 * Here is an example that overrides this implementation to invert the
		 * value of <mxConstants.STYLE_ELBOW> without removing any existing styles.
		 *
		 * (code)
		 dge)
		 * {
		 *   if (edge != null)
		 *   {
		 *     var state = this.view.getState(edge);
		 *     var style = (state != null) ? state.style : this.getCellStyle(edge);
		 *
		 *     if (style != null)
		 *     {
		 *       var elbow = mxUtils.getValue(style, mxConstants.STYLE_ELBOW,
		 *           mxConstants.ELBOW_HORIZONTAL);
		 *       var value = (elbow == mxConstants.ELBOW_HORIZONTAL) ?
		 *           mxConstants.ELBOW_VERTICAL : mxConstants.ELBOW_HORIZONTAL;
		 *       this.setCellStyles(mxConstants.STYLE_ELBOW, value, [edge]);
		 *     }
		 *   }
		 * };
		 * (end)
		 *
		 * Parameters:
		 *
		 * edge - <mxCell> whose style should be changed.
		 */
		flipEdge(edge: mxCell): mxCell;

		/**
		 * Function: addImageBundle
		 *
		 * Adds the specified <mxImageBundle>.
		 */
		addImageBundle(bundle: mxImageBundle): void;

		/**
		 * Function: removeImageBundle
		 *
		 * Removes the specified <mxImageBundle>.
		 */
		removeImageBundle(bundle: mxImageBundle): void;

		/**
		 * Function: getImageFromBundles
		 *
		 * Searches all <imageBundles> for the specified key and returns the value
		 * for the first match or null if the key is not found.
		 */
		getImageFromBundles(key: string): string;

		/**
		 * Group: Order
		 */

		/**
		 * Function: orderCells
		 *
		 * Moves the given cells to the front or back. The change is carried out
		 * using <cellsOrdered>. This method fires <mxEvent.ORDER_CELLS> while the
		 * transaction is in progress.
		 *
		 * Parameters:
		 *
		 * back - Boolean that specifies if the cells should be moved to back.
		 * cells - Array of <mxCells> to move to the background. If null is
		 * specified then the selection cells are used.
		 */
		orderCells(back: boolean, cells: mxCell[]): mxCell[];

		/**
		 * Function: cellsOrdered
		 *
		 * Moves the given cells to the front or back. This method fires
		 * <mxEvent.CELLS_ORDERED> while the transaction is in progress.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> whose order should be changed.
		 * back - Boolean that specifies if the cells should be moved to back.
		 */
		cellsOrdered(cells: mxCell[], back: boolean): void;

		/**
		 * Group: Grouping
		 */

		/**
		 * Function: groupCells
		 *
		 * Adds the cells into the given group. The change is carried out using
		 * <cellsAdded>, <cellsMoved> and <cellsResized>. This method fires
		 * <mxEvent.GROUP_CELLS> while the transaction is in progress. Returns the
		 * new group. A group is only created if there is at least one entry in the
		 * given array of cells.
		 *
		 * Parameters:
		 *
		 * group - <mxCell> that represents the target group. If null is specified
		 * then a new group is created using <createGroupCell>.
		 * border - Optional integer that specifies the border between the child
		 * area and the group bounds. Default is 0.
		 * cells - Optional array of <mxCells> to be grouped. If null is specified
		 * then the selection cells are used.
		 */
		groupCells(group: mxCell, border?: number, cells?: mxCell[]): mxCell;

		/**
		 * Function: getCellsForGroup
		 *
		 * Returns the cells with the same parent as the first cell
		 * in the given array.
		 */
		getCellsForGroup(cells: mxCell[]): mxCell[];

		/**
		 * Function: getBoundsForGroup
		 *
		 * Returns the bounds to be used for the given group and children.
		 */
		getBoundsForGroup(group: mxCell, children: mxCell[], border: number): mxRectangle;

		/**
		 * Function: createGroupCell
		 *
		 * Hook for creating the group cell to hold the given array of <mxCells> if
		 * no group cell was given to the <group> function.
		 *
		 * The following code can be used to set the style of new group cells.
		 *
		 * (code)
		 * var graphCreateGroupCell = graph.createGroupCell;
		 pCell(cells)
		 * {
		 *   var group = graphCreateGroupCell.apply(this, arguments);
		 *   group.setStyle('group');
		 *
		 *   return group;
		 * };
		 */
		createGroupCell(cells: mxCell[]): mxCell;

		/**
		 * Function: ungroupCells
		 *
		 * Ungroups the given cells by moving the children the children to their
		 * parents parent and removing the empty groups. Returns the children that
		 * have been removed from the groups.
		 *
		 * Parameters:
		 *
		 * cells - Array of cells to be ungrouped. If null is specified then the
		 * selection cells are used.
		 */
		ungroupCells(cells: mxCell[]): mxCell[];

		/**
		 * Function: removeCellsAfterUngroup
		 *
		 * Hook to remove the groups after <ungroupCells>.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> that were ungrouped.
		 */
		removeCellsAfterUngroup(cells: mxCell[]): void;

		/**
		 * Function: removeCellsFromParent
		 *
		 * Removes the specified cells from their parents and adds them to the
		 * default parent. Returns the cells that were removed from their parents.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to be removed from their parents.
		 */
		removeCellsFromParent(cells: mxCell[]): mxCell[];

		/**
		 * Function: updateGroupBounds
		 *
		 * Updates the bounds of the given groups to include all children and returns
		 * the passed-in cells. Call this with the groups in parent to child order,
		 * top-most group first, the cells are processed in reverse order and cells
		 * with no children are ignored.
		 *
		 * Parameters:
		 *
		 * cells - The groups whose bounds should be updated. If this is null, then
		 * the selection cells are used.
		 * border - Optional border to be added in the group. Default is 0.
		 * moveGroup - Optional boolean that allows the group to be moved. Default
		 * is false.
		 * topBorder - Optional top border to be added in the group. Default is 0.
		 * rightBorder - Optional top border to be added in the group. Default is 0.
		 * bottomBorder - Optional top border to be added in the group. Default is 0.
		 * leftBorder - Optional top border to be added in the group. Default is 0.
		 */
		updateGroupBounds(cells: mxCell[], border?: number, moveGroup?: boolean, topBorder?: number, rightBorder?: number, bottomBorder?: number, leftBorder?: number): mxCell[];

		/**
		 * Function: getBoundingBox
		 *
		 * Returns the bounding box for the given array of <mxCells>. The bounding box for
		 * each cell and its descendants is computed using <mxGraphView.getBoundingBox>.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> whose bounding box should be returned.
		 */
		getBoundingBox(cells: mxCell[]): mxRectangle;

		/**
		 * Group: Cell cloning, insertion and removal
		 */

		/**
		 * Function: cloneCells
		 *
		 * Returns the clones for the given cells. The clones are created recursively
		 * using <mxGraphModel.cloneCells>. If the terminal of an edge is not in the
		 * given array, then the respective end is assigned a terminal point and the
		 * terminal is removed.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to be cloned.
		 * allowInvalidEdges - Optional boolean that specifies if invalid edges
		 * should be cloned. Default is true.
		 * mapping - Optional mapping for existing clones.
		 */
		cloneCells(cells: mxCell[], allowInvalidEdges?: boolean, mapping?: any): mxCell[];

		/**
		 * Function: insertVertex
		 *
		 * Adds a new vertex into the given parent <mxCell> using value as the user
		 * object and the given coordinates as the <mxGeometry> of the new vertex.
		 * The id and style are used for the respective properties of the new
		 * <mxCell>, which is returned.
		 *
		 * When adding new vertices from a mouse event, one should take into
		 * account the offset of the graph container and the scale and translation
		 * of the view in order to find the correct unscaled, untranslated
		 * coordinates using <mxGraph.getPointForEvent> as follows:
		 *
		 * (code)
		 * var pt = graph.getPointForEvent(evt);
		 * var parent = graph.getDefaultParent();
		 * graph.insertVertex(parent, null,
		 * 			'Hello, World!', x, y, 220, 30);
		 * (end)
		 *
		 * For adding image cells, the style parameter can be assigned as
		 *
		 * (code)
		 * stylename;image=imageUrl
		 * (end)
		 *
		 * See <mxGraph> for more information on using images.
		 *
		 * Parameters:
		 *
		 * parent - <mxCell> that specifies the parent of the new vertex.
		 * id - Optional string that defines the Id of the new vertex.
		 * value - Object to be used as the user object.
		 * x - Integer that defines the x coordinate of the vertex.
		 * y - Integer that defines the y coordinate of the vertex.
		 * width - Integer that defines the width of the vertex.
		 * height - Integer that defines the height of the vertex.
		 * style - Optional string that defines the cell style.
		 * relative - Optional boolean that specifies if the geometry is relative.
		 * Default is false.
		 */
		insertVertex(parent: mxCell, id: string, value: any,
			x: number, y: number, width: number, height: number, style?: string, relative?: boolean): mxCell;

		/**
		 * Function: createVertex
		 *
		 * Hook method that creates the new vertex for <insertVertex>.
		 */
		createVertex(parent: mxCell, id: string, value: any,
			x: string, y: string, width: string, height: string, style?: string, relative?: boolean): mxCell;

		/**
		 * Function: insertEdge
		 *
		 * Adds a new edge into the given parent <mxCell> using value as the user
		 * object and the given source and target as the terminals of the new edge.
		 * The id and style are used for the respective properties of the new
		 * <mxCell>, which is returned.
		 *
		 * Parameters:
		 *
		 * parent - <mxCell> that specifies the parent of the new edge.
		 * id - Optional string that defines the Id of the new edge.
		 * value - JavaScript object to be used as the user object.
		 * source - <mxCell> that defines the source of the edge.
		 * target - <mxCell> that defines the target of the edge.
		 * style - Optional string that defines the cell style.
		 */
		insertEdge(parent: mxCell, id: string, value: any, source: mxCell, target: mxCell, style?: string): mxCell;

		/**
		 * Function: createEdge
		 *
		 * Hook method that creates the new edge for <insertEdge>. This
		 * implementation does not set the source and target of the edge, these
		 * are set when the edge is added to the model.
		 *
		 */
		createEdge(parent: mxCell, id: string, value: any, source: mxCell, target: mxCell, style?: string): mxCell;

		/**
		 * Function: addEdge
		 *
		 * Adds the edge to the parent and connects it to the given source and
		 * target terminals. This is a shortcut method. Returns the edge that was
		 * added.
		 *
		 * Parameters:
		 *
		 * edge - <mxCell> to be inserted into the given parent.
		 * parent - <mxCell> that represents the new parent. If no parent is
		 * given then the default parent is used.
		 * source - Optional <mxCell> that represents the source terminal.
		 * target - Optional <mxCell> that represents the target terminal.
		 * index - Optional index to insert the cells at. Default is to append.
		 */
		addEdge(edge: mxCell, parent: mxCell, source?: mxCell, target?: mxCell, index?: number): mxCell;

		/**
		 * Function: addCell
		 *
		 * Adds the cell to the parent and connects it to the given source and
		 * target terminals. This is a shortcut method. Returns the cell that was
		 * added.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> to be inserted into the given parent.
		 * parent - <mxCell> that represents the new parent. If no parent is
		 * given then the default parent is used.
		 * index - Optional index to insert the cells at. Default is to append.
		 * source - Optional <mxCell> that represents the source terminal.
		 * target - Optional <mxCell> that represents the target terminal.
		 */
		addCell(cell: mxCell, parent: mxCell, index?: number, source?: mxCell, target?: mxCell): mxCell;

		/**
		 * Function: addCells
		 *
		 * Adds the cells to the parent at the given index, connecting each cell to
		 * the optional source and target terminal. The change is carried out using
		 * <cellsAdded>. This method fires <mxEvent.ADD_CELLS> while the
		 * transaction is in progress. Returns the cells that were added.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to be inserted.
		 * parent - <mxCell> that represents the new parent. If no parent is
		 * given then the default parent is used.
		 * index - Optional index to insert the cells at. Default is to append.
		 * source - Optional source <mxCell> for all inserted cells.
		 * target - Optional target <mxCell> for all inserted cells.
		 */
		addCells(cells: mxCell[], parent: mxCell, index?: number, source?: mxCell, target?: mxCell): mxCell[];

		/**
		 * Function: cellsAdded
		 *
		 * Adds the specified cells to the given parent. This method fires
		 * <mxEvent.CELLS_ADDED> while the transaction is in progress.
		 */
		cellsAdded(cells: mxCell[], parent: mxCell, index: number, source?: mxCell, target?: mxCell, absolute?: boolean, constrain?: boolean, extend?: boolean): void;

		/**
		 * Function: autoSizeCell
		 *
		 * Resizes the specified cell to just fit around the its label and/or children
		 *
		 * Parameters:
		 *
		 * cell - <mxCells> to be resized.
		 * recurse - Optional boolean which specifies if all descendants should be
		 * autosized. Default is true.
		 */
		autoSizeCell(cell: mxCell[], recurse?: boolean): void;

		/**
		 * Function: removeCells
		 *
		 * Removes the given cells from the graph including all connected edges if
		 * includeEdges is true. The change is carried out using <cellsRemoved>.
		 * This method fires <mxEvent.REMOVE_CELLS> while the transaction is in
		 * progress. The removed cells are returned as an array.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to remove. If null is specified then the
		 * selection cells which are deletable are used.
		 * includeEdges - Optional boolean which specifies if all connected edges
		 * should be removed as well. Default is true.
		 */
		removeCells(cells: mxCell[], includeEdges: boolean): mxCell[];

		/**
		 * Function: cellsRemoved
		 *
		 * Removes the given cells from the model. This method fires
		 * <mxEvent.CELLS_REMOVED> while the transaction is in progress.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to remove.
		 */
		cellsRemoved(cells: mxCell[]): void;

		/**
		 * Function: splitEdge
		 *
		 * Splits the given edge by adding the newEdge between the previous source
		 * and the given cell and reconnecting the source of the given edge to the
		 * given cell. This method fires <mxEvent.SPLIT_EDGE> while the transaction
		 * is in progress. Returns the new edge that was inserted.
		 *
		 * Parameters:
		 *
		 * edge - <mxCell> that represents the edge to be splitted.
		 * cells - <mxCells> that represents the cells to insert into the edge.
		 * newEdge - <mxCell> that represents the edge to be inserted.
		 * dx - Optional integer that specifies the vector to move the cells.
		 * dy - Optional integer that specifies the vector to move the cells.
		 */
		splitEdge(edge: mxCell, cells: mxCell[], newEdge: mxCell, dx?: number, dy?: number): void;

		/**
		 * Group: Cell visibility
		 */

		/**
		 * Function: toggleCells
		 *
		 * Sets the visible state of the specified cells and all connected edges
		 * if includeEdges is true. The change is carried out using <cellsToggled>.
		 * This method fires <mxEvent.TOGGLE_CELLS> while the transaction is in
		 * progress. Returns the cells whose visible state was changed.
		 *
		 * Parameters:
		 *
		 * show - Boolean that specifies the visible state to be assigned.
		 * cells - Array of <mxCells> whose visible state should be changed. If
		 * null is specified then the selection cells are used.
		 * includeEdges - Optional boolean indicating if the visible state of all
		 * connected edges should be changed as well. Default is true.
		 */
		toggleCells(show: boolean, cells: mxCell[], includeEdges?: boolean): void;

		/**
		 * Function: cellsToggled
		 *
		 * Sets the visible state of the specified cells.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> whose visible state should be changed.
		 * show - Boolean that specifies the visible state to be assigned.
		 */
		cellsToggled(cells: mxCell[], show: boolean): void;

		/**
		 * Group: Folding
		 */

		/**
		 * Function: foldCells
		 *
		 * Sets the collapsed state of the specified cells and all descendants
		 * if recurse is true. The change is carried out using <cellsFolded>.
		 * This method fires <mxEvent.FOLD_CELLS> while the transaction is in
		 * progress. Returns the cells whose collapsed state was changed.
		 *
		 * Parameters:
		 *
		 * collapsed - Boolean indicating the collapsed state to be assigned.
		 * recurse - Optional boolean indicating if the collapsed state of all
		 * descendants should be set. Default is false.
		 * cells - Array of <mxCells> whose collapsed state should be set. If
		 * null is specified then the foldable selection cells are used.
		 * checkFoldable - Optional boolean indicating of isCellFoldable should be
		 * checked. Default is false.
		 * evt - Optional native event that triggered the invocation.
		 */
		foldCells(collapse: boolean, recurse: boolean, cells: mxCell[], checkFoldable?: boolean, evt?: Event): mxCell[];

		/**
		 * Function: cellsFolded
		 *
		 * Sets the collapsed state of the specified cells. This method fires
		 * <mxEvent.CELLS_FOLDED> while the transaction is in progress. Returns the
		 * cells whose collapsed state was changed.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> whose collapsed state should be set.
		 * collapsed - Boolean indicating the collapsed state to be assigned.
		 * recurse - Boolean indicating if the collapsed state of all descendants
		 * should be set.
		 * checkFoldable - Optional boolean indicating of isCellFoldable should be
		 * checked. Default is false.
		 */
		cellsFolded(cells: mxCell[], collapse: boolean, recurse: boolean, checkFoldable?: boolean): void;

		/**
		 * Function: swapBounds
		 *
		 * Swaps the alternate and the actual bounds in the geometry of the given
		 * cell invoking <updateAlternateBounds> before carrying out the swap.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> for which the bounds should be swapped.
		 * willCollapse - Boolean indicating if the cell is going to be collapsed.
		 */
		swapBounds(cell: mxCell, willCollapse: boolean): void;

		/**
		 * Function: updateAlternateBounds
		 *
		 * Updates or sets the alternate bounds in the given geometry for the given
		 * cell depending on whether the cell is going to be collapsed. If no
		 * alternate bounds are defined in the geometry and
		 * <collapseToPreferredSize> is true, then the preferred size is used for
		 * the alternate bounds. The top, left corner is always kept at the same
		 * location.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> for which the geometry is being udpated.
		 * g - <mxGeometry> for which the alternate bounds should be updated.
		 * willCollapse - Boolean indicating if the cell is going to be collapsed.
		 */
		updateAlternateBounds(cell: mxCell, geo: mxGeometry, willCollapse: boolean): void;

		/**
		 * Function: addAllEdges
		 *
		 * Returns an array with the given cells and all edges that are connected
		 * to a cell or one of its descendants.
		 */
		addAllEdges(cells: mxCell[]): mxCell[];

		/**
		 * Function: getAllEdges
		 *
		 * Returns all edges connected to the given cells or its descendants.
		 */
		getAllEdges(cells: mxCell[]): mxCell[];

		/**
		 * Group: Cell sizing
		 */

		/**
		 * Function: updateCellSize
		 *
		 * Updates the size of the given cell in the model using <cellSizeUpdated>.
		 * This method fires <mxEvent.UPDATE_CELL_SIZE> while the transaction is in
		 * progress. Returns the cell whose size was updated.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose size should be updated.
		 */
		updateCellSize(cell: mxCell, ignoreChildren: boolean): mxCell;

		/**
		 * Function: cellSizeUpdated
		 *
		 * Updates the size of the given cell in the model using
		 * <getPreferredSizeForCell> to get the new size.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> for which the size should be changed.
		 */
		cellSizeUpdated(cell: mxCell, ignoreChildren: boolean): void;

		/**
		 * Function: getPreferredSizeForCell
		 *
		 * Returns the preferred width and height of the given <mxCell> as an
		 * <mxRectangle>. To implement a minimum width, add a new style eg.
		 * minWidth in the vertex and override this method as follows.
		 *
		 * (code)
		 * var graphGetPreferredSizeForCell = graph.getPreferredSizeForCell;
		 edSizeForCell(cell)
		 * {
		 *   var result = graphGetPreferredSizeForCell.apply(this, arguments);
		 *   var style = this.getCellStyle(cell);
		 *
		 *   if (style['minWidth'] > 0)
		 *   {
		 *     result.width = Math.max(style['minWidth'], result.width);
		 *   }
		 *
		 *   return result;
		 * };
		 * (end)
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> for which the preferred size should be returned.
		 */
		getPreferredSizeForCell(cell: mxCell): mxRectangle;

		/**
		 * Function: resizeCell
		 *
		 * Sets the bounds of the given cell using <resizeCells>. Returns the
		 * cell which was passed to the function.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose bounds should be changed.
		 * bounds - <mxRectangle> that represents the new bounds.
		 */
		resizeCell(cell: mxCell, bounds: mxRectangle, recurse: boolean): mxCell[];

		/**
		 * Function: resizeCells
		 *
		 * Sets the bounds of the given cells and fires a <mxEvent.RESIZE_CELLS>
		 * event while the transaction is in progress. Returns the cells which
		 * have been passed to the function.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> whose bounds should be changed.
		 * bounds - Array of <mxRectangles> that represent the new bounds.
		 */
		resizeCells(cells: mxCell[], bounds: mxRectangle[], recurse: boolean): mxCell[];

		/**
		 * Function: cellsResized
		 *
		 * Sets the bounds of the given cells and fires a <mxEvent.CELLS_RESIZED>
		 * event. If <extendParents> is true, then the parent is extended if a
		 * child size is changed so that it overlaps with the parent.
		 *
		 * The following example shows how to control group resizes to make sure
		 * that all child cells stay within the group.
		 *
		 * (code)
		 * graph.addListener(mxEvent.CELLS_RESIZED, function(sender, evt)
		 * {
		 *   var cells = evt.getProperty('cells');
		 *
		 *   if (cells != null)
		 *   {
		 *     for (var i = 0; i < cells.length; i++)
		 *     {
		 *       if (graph.getModel().getChildCount(cells[i]) > 0)
		 *       {
		 *         var geo = graph.getCellGeometry(cells[i]);
		 *
		 *         if (geo != null)
		 *         {
		 *           var children = graph.getChildCells(cells[i], true, true);
		 *           var bounds = graph.getBoundingBoxFromGeometry(children, true);
		 *
		 *           geo = geo.clone();
		 *           geo.width = Math.max(geo.width, bounds.width);
		 *           geo.height = Math.max(geo.height, bounds.height);
		 *
		 *           graph.getModel().setGeometry(cells[i], geo);
		 *         }
		 *       }
		 *     }
		 *   }
		 * });
		 * (end)
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> whose bounds should be changed.
		 * bounds - Array of <mxRectangles> that represent the new bounds.
		 * recurse - Optional boolean that specifies if the children should be resized.
		 */
		cellsResized(cells: mxCell[], bounds: mxRectangle[], recurse?: boolean): void;

		/**
		 * Function: cellResized
		 *
		 * Resizes the parents recursively so that they contain the complete area
		 * of the resized child cell.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose bounds should be changed.
		 * bounds - <mxRectangles> that represent the new bounds.
		 * ignoreRelative - Boolean that indicates if relative cells should be ignored.
		 * recurse - Optional boolean that specifies if the children should be resized.
		 */
		cellResized(cell: mxCell, bounds: mxRectangle[], ignoreRelative: boolean, recurse?: boolean): void;

		/**
		 * Function: resizeChildCells
		 *
		 * Resizes the child cells of the given cell for the given new geometry with
		 * respect to the current geometry of the cell.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that has been resized.
		 * newGeo - <mxGeometry> that represents the new bounds.
		 */
		resizeChildCells(cell: mxCell, newGeo: mxGeometry): void;

		/**
		 * Function: constrainChildCells
		 *
		 * Constrains the children of the given cell using <constrainChild>.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that has been resized.
		 */
		constrainChildCells(cell: mxCell): void;

		/**
		 * Function: scaleCell
		 *
		 * Scales the points, position and size of the given cell according to the
		 * given vertical and horizontal scaling factors.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose geometry should be scaled.
		 * dx - Horizontal scaling factor.
		 * dy - Vertical scaling factor.
		 * recurse - Boolean indicating if the child cells should be scaled.
		 */
		scaleCell(cell: mxCell, dx: number, dy: number, recurse: boolean): void;

		/**
		 * Function: extendParent
		 *
		 * Resizes the parents recursively so that they contain the complete area
		 * of the resized child cell.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that has been resized.
		 */
		extendParent(cell: mxCell): void;

		/**
		 * Group: Cell moving
		 */

		/**
		 * Function: importCells
		 *
		 * Clones and inserts the given cells into the graph using the move
		 * method and returns the inserted cells. This shortcut is used if
		 * cells are inserted via datatransfer.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to be imported.
		 * dx - Integer that specifies the x-coordinate of the vector. Default is 0.
		 * dy - Integer that specifies the y-coordinate of the vector. Default is 0.
		 * target - <mxCell> that represents the new parent of the cells.
		 * evt - Mouseevent that triggered the invocation.
		 * mapping - Optional mapping for existing clones.
		 */
		importCells(cells: mxCell[], dx: number, dy: number, target: mxCell, evt: Event, mapping: any): mxCell[];

		/**
		 * Function: moveCells
		 *
		 * Moves or clones the specified cells and moves the cells or clones by the
		 * given amount, adding them to the optional target cell. The evt is the
		 * mouse event as the mouse was released. The change is carried out using
		 * <cellsMoved>. This method fires <mxEvent.MOVE_CELLS> while the
		 * transaction is in progress. Returns the cells that were moved.
		 *
		 * Use the following code to move all cells in the graph.
		 *
		 * (code)
		 * graph.moveCells(graph.getChildCells(null, true, true), 10, 10);
		 * (end)
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to be moved, cloned or added to the target.
		 * dx - Integer that specifies the x-coordinate of the vector. Default is 0.
		 * dy - Integer that specifies the y-coordinate of the vector. Default is 0.
		 * clone - Boolean indicating if the cells should be cloned. Default is false.
		 * target - <mxCell> that represents the new parent of the cells.
		 * evt - Mouseevent that triggered the invocation.
		 * mapping - Optional mapping for existing clones.
		 */
		moveCells(cells: mxCell[], dx: number, dy: number, clone: boolean, target: mxCell, evt: Event, mapping: any): mxCell[];

		/**
		 * Function: cellsMoved
		 *
		 * Moves the specified cells by the given vector, disconnecting the cells
		 * using disconnectGraph is disconnect is true. This method fires
		 * <mxEvent.CELLS_MOVED> while the transaction is in progress.
		 */
		cellsMoved(cells: mxCell[], dx: number, dy: number, disconnect: boolean, constrain: boolean, extend: boolean): void;

		/**
		 * Function: translateCell
		 *
		 * Translates the geometry of the given cell and stores the new,
		 * translated geometry in the model as an atomic change.
		 */
		translateCell(cell: mxCell, dx: number, dy: number): void;

		/**
		 * Function: getCellContainmentArea
		 *
		 * Returns the <mxRectangle> inside which a cell is to be kept.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> for which the area should be returned.
		 */
		getCellContainmentArea(cell: mxCell): mxRectangle;

		/**
		 * Function: getMaximumGraphBounds
		 *
		 * Returns the bounds inside which the diagram should be kept as an
		 * <mxRectangle>.
		 */
		getMaximumGraphBounds(): mxRectangle;

		/**
		 * Function: constrainChild
		 *
		 * Keeps the given cell inside the bounds returned by
		 * <getCellContainmentArea> for its parent, according to the rules defined by
		 * <getOverlap> and <isConstrainChild>. This modifies the cell's geometry
		 * in-place and does not clone it.
		 *
		 * Parameters:
		 *
		 * cells - <mxCell> which should be constrained.
		 * sizeFirst - Specifies if the size should be changed first. Default is true.
		 */
		constrainChild(cell: mxCell, sizeFirst?: boolean): void;

		/**
		 * Function: resetEdges
		 *
		 * Resets the control points of the edges that are connected to the given
		 * cells if not both ends of the edge are in the given cells array.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> for which the connected edges should be
		 * reset.
		 */
		resetEdges(cells: mxCell[]): void;

		/**
		 * Function: resetEdge
		 *
		 * Resets the control points of the given edge.
		 *
		 * Parameters:
		 *
		 * edge - <mxCell> whose points should be reset.
		 */
		resetEdge(edge: mxCell);

		/**
		 * Group: Cell connecting and connection constraints
		 */

		/**
		 * Function: getOutlineConstraint
		 *
		 * Returns the constraint used to connect to the outline of the given state.
		 */
		getOutlineConstraint(point: mxPoint, terminalState: mxCellState, me: any): mxConnectionConstraint;

		/**
		 * Function: getAllConnectionConstraints
		 *
		 * Returns an array of all <mxConnectionConstraints> for the given terminal. If
		 * the shape of the given terminal is a <mxStencilShape> then the constraints
		 * of the corresponding <mxStencil> are returned.
		 *
		 * Parameters:
		 *
		 * terminal - <mxCellState> that represents the terminal.
		 * source - Boolean that specifies if the terminal is the source or target.
		 */
		getAllConnectionConstraints(terminal: mxCellState, source: boolean): mxConnectionConstraint[];

		/**
		 * Function: getConnectionConstraint
		 *
		 * Returns an <mxConnectionConstraint> that describes the given connection
		 * point. This result can then be passed to <getConnectionPoint>.
		 *
		 * Parameters:
		 *
		 * edge - <mxCellState> that represents the edge.
		 * terminal - <mxCellState> that represents the terminal.
		 * source - Boolean indicating if the terminal is the source or target.
		 */
		getConnectionConstraint(edge: mxCellState, terminal: mxCellState, source: boolean): mxConnectionConstraint;

		/**
		 * Function: setConnectionConstraint
		 *
		 * Sets the <mxConnectionConstraint> that describes the given connection point.
		 * If no constraint is given then nothing is changed. To remove an existing
		 * constraint from the given edge, use an empty constraint instead.
		 *
		 * Parameters:
		 *
		 * edge - <mxCell> that represents the edge.
		 * terminal - <mxCell> that represents the terminal.
		 * source - Boolean indicating if the terminal is the source or target.
		 * constraint - Optional <mxConnectionConstraint> to be used for this
		 * connection.
		 */
		setConnectionConstraint(edge: mxCell, terminal: mxCell, source: boolean, constraint: mxConnectionConstraint): void;

		/**
		 * Function: getConnectionPoint
		 *
		 * Returns the nearest point in the list of absolute points or the center
		 * of the opposite terminal.
		 *
		 * Parameters:
		 *
		 * vertex - <mxCellState> that represents the vertex.
		 * constraint - <mxConnectionConstraint> that represents the connection point
		 * constraint as returned by <getConnectionConstraint>.
		 */
		getConnectionPoint(vertex: mxCellState, constraint: mxConnectionConstraint): mxPoint;

		/**
		 * Function: connectCell
		 *
		 * Connects the specified end of the given edge to the given terminal
		 * using <cellConnected> and fires <mxEvent.CONNECT_CELL> while the
		 * transaction is in progress. Returns the updated edge.
		 *
		 * Parameters:
		 *
		 * edge - <mxCell> whose terminal should be updated.
		 * terminal - <mxCell> that represents the new terminal to be used.
		 * source - Boolean indicating if the new terminal is the source or target.
		 * constraint - Optional <mxConnectionConstraint> to be used for this
		 * connection.
		 */
		connectCell(edge: mxCell, terminal: mxCell, source: boolean, constraint?: mxConnectionConstraint): mxCell;

		/**
		 * Function: cellConnected
		 *
		 * Sets the new terminal for the given edge and resets the edge points if
		 * <resetEdgesOnConnect> is true. This method fires
		 * <mxEvent.CELL_CONNECTED> while the transaction is in progress.
		 *
		 * Parameters:
		 *
		 * edge - <mxCell> whose terminal should be updated.
		 * terminal - <mxCell> that represents the new terminal to be used.
		 * source - Boolean indicating if the new terminal is the source or target.
		 * constraint - <mxConnectionConstraint> to be used for this connection.
		 */
		cellConnected(edge: mxCell, terminal: mxCell, source: boolean, constraint: mxConnectionConstraint): void;

		/**
		 * Function: disconnectGraph
		 *
		 * Disconnects the given edges from the terminals which are not in the
		 * given array.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to be disconnected.
		 */
		disconnectGraph(cells: mxCell[]): void;

		/**
		 * Group: Drilldown
		 */

		/**
		 * Function: getCurrentRoot
		 *
		 * Returns the current root of the displayed cell hierarchy. This is a
		 * shortcut to <mxGraphView.currentRoot> in <view>.
		 */
		getCurrentRoot(): mxCell;

		/**
		 * Function: getTranslateForRoot
		 *
		 * Returns the translation to be used if the given cell is the root cell as
		 * an <mxPoint>. This implementation returns null.
		 *
		 * Example:
		 *
		 * To keep the children at their absolute position while stepping into groups,
		 * this function can be overridden as follows.
		 *
		 * (code)
		 * var offset = new mxPoint(0, 0);
		 *
		 * while (cell != null)
		 * {
		 *   var geo = this.model.getGeometry(cell);
		 *
		 *   if (geo != null)
		 *   {
		 *     offset.x -= geo.x;
		 *     offset.y -= geo.y;
		 *   }
		 *
		 *   cell = this.model.getParent(cell);
		 * }
		 *
		 * return offset;
		 * (end)
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that represents the root.
		 */
		getTranslateForRoot(cell: mxCell): mxPoint;

		/**
		 * Function: isPort
		 *
		 * Returns true if the given cell is a "port", that is, when connecting to
		 * it, the cell returned by getTerminalForPort should be used as the
		 * terminal and the port should be referenced by the ID in either the
		 * mxConstants.STYLE_SOURCE_PORT or the or the
		 * mxConstants.STYLE_TARGET_PORT. Note that a port should not be movable.
		 * This implementation always returns false.
		 *
		 * A typical implementation is the following:
		 *
		 * (code)
		 l)
		 * {
		 *   var geo = this.getCellGeometry(cell);
		 *
		 *   return (geo != null) ? geo.relative : false;
		 * };
		 * (end)
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that represents the port.
		 */
		isPort(cell: mxCell): boolean;

		/**
		 * Function: getTerminalForPort
		 *
		 * Returns the terminal to be used for a given port. This implementation
		 * always returns the parent cell.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that represents the port.
		 * source - If the cell is the source or target port.
		 */
		getTerminalForPort(cell: mxCell, source: boolean): mxCell;

		/**
		 * Function: getChildOffsetForCell
		 *
		 * Returns the offset to be used for the cells inside the given cell. The
		 * root and layer cells may be identified using <mxGraphModel.isRoot> and
		 * <mxGraphModel.isLayer>. For all other current roots, the
		 * <mxGraphView.currentRoot> field points to the respective cell, so that
		 * the following holds: cell == this.view.currentRoot. This implementation
		 * returns null.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose offset should be returned.
		 */
		getChildOffsetForCell(cell: mxCell): number;

		/**
		 * Function: enterGroup
		 *
		 * Uses the given cell as the root of the displayed cell hierarchy. If no
		 * cell is specified then the selection cell is used. The cell is only used
		 * if <isValidRoot> returns true.
		 *
		 * Parameters:
		 *
		 * cell - Optional <mxCell> to be used as the new root. Default is the
		 * selection cell.
		 */
		enterGroup(cell: mxCell): void;

		/**
		 * Function: exitGroup
		 *
		 * Changes the current root to the next valid root in the displayed cell
		 * hierarchy.
		 */
		exitGroup(): void;

		/**
		 * Function: home
		 *
		 * Uses the root of the model as the root of the displayed cell hierarchy
		 * and selects the previous root.
		 */
		home(): void;

		/**
		 * Function: isValidRoot
		 *
		 * Returns true if the given cell is a valid root for the cell display
		 * hierarchy. This implementation returns true for all non-null values.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> which should be checked as a possible root.
		 */
		isValidRoot(cell: mxCell): boolean;

		/**
		 * Group: Graph display
		 */

		/**
		 * Function: getGraphBounds
		 *
		 * Returns the bounds of the visible graph. Shortcut to
		 * <mxGraphView.getGraphBounds>. See also: <getBoundingBoxFromGeometry>.
		 */
		getGraphBounds(): mxRectangle;

		/**
		 * Function: getCellBounds
		 *
		 * Returns the scaled, translated bounds for the given cell. See
		 * <mxGraphView.getBounds> for arrays.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose bounds should be returned.
		 * includeEdge - Optional boolean that specifies if the bounds of
		 * the connected edges should be included. Default is false.
		 * includeDescendants - Optional boolean that specifies if the bounds
		 * of all descendants should be included. Default is false.
		 */
		getCellBounds(cell: mxCell, includeEdges?: boolean, includeDescendants?: boolean): mxRectangle;

		/**
		 * Function: getBoundingBoxFromGeometry
		 *
		 * Returns the bounding box for the geometries of the vertices in the
		 * given array of cells. This can be used to find the graph bounds during
		 * a layout operation (ie. before the last endUpdate) as follows:
		 *
		 * (code)
		 * var cells = graph.getChildCells(graph.getDefaultParent(), true, true);
		 * var bounds = graph.getBoundingBoxFromGeometry(cells, true);
		 * (end)
		 *
		 * This can then be used to move cells to the origin:
		 *
		 * (code)
		 * if (bounds.x < 0 || bounds.y < 0)
		 * {
		 *   graph.moveCells(cells, -Math.min(bounds.x, 0), -Math.min(bounds.y, 0))
		 * }
		 * (end)
		 *
		 * Or to translate the graph view:
		 *
		 * (code)
		 * if (bounds.x < 0 || bounds.y < 0)
		 * {
		 *   graph.view.setTranslate(-Math.min(bounds.x, 0), -Math.min(bounds.y, 0));
		 * }
		 * (end)
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> whose bounds should be returned.
		 * includeEdges - Specifies if edge bounds should be included by computing
		 * the bounding box for all points in geometry. Default is false.
		 */
		getBoundingBoxFromGeometry(cells: mxCell[], includeEdges?: boolean): mxRectangle;
		/**
		 * Function: refresh
		 *
		 * Clears all cell states or the states for the hierarchy starting at the
		 * given cell and validates the graph. This fires a refresh event as the
		 * last step.
		 *
		 * Parameters:
		 *
		 * cell - Optional <mxCell> for which the cell states should be cleared.
		 */
		refresh(cell?: mxCell): void;

		/**
		 * Function: snap
		 *
		 * Snaps the given numeric value to the grid if <gridEnabled> is true.
		 *
		 * Parameters:
		 *
		 * value - Numeric value to be snapped to the grid.
		 */
		snap(value: number): number;

		/**
		 * Function: panGraph
		 *
		 * Shifts the graph display by the given amount. This is used to preview
		 * panning operations, use <mxGraphView.setTranslate> to set a persistent
		 * translation of the view. Fires <mxEvent.PAN>.
		 *
		 * Parameters:
		 *
		 * dx - Amount to shift the graph along the x-axis.
		 * dy - Amount to shift the graph along the y-axis.
		 */
		panGraph(dx: number, dy: number): void;

		/**
		 * Function: zoomIn
		 *
		 * Zooms into the graph by <zoomFactor>.
		 */
		zoomIn(): void;

		/**
		 * Function: zoomOut
		 *
		 * Zooms out of the graph by <zoomFactor>.
		 */
		zoomOut(): void;

		/**
		 * Function: zoomActual
		 *
		 * Resets the zoom and panning in the view.
		 */
		zoomActual(): void;

		/**
		 * Function: zoomTo
		 *
		 * Zooms the graph to the given scale with an optional boolean center
		 * argument, which is passd to <zoom>.
		 */
		zoomTo(scale: number, center: boolean): void;

		/**
		 * Function: center
		 *
		 * Centers the graph in the container.
		 *
		 * Parameters:
		 *
		 * horizontal - Optional boolean that specifies if the graph should be centered
		 * horizontally. Default is true.
		 * vertical - Optional boolean that specifies if the graph should be centered
		 * vertically. Default is true.
		 * cx - Optional float that specifies the horizontal center. Default is 0.5.
		 * cy - Optional float that specifies the vertical center. Default is 0.5.
		 */
		center(horizontal?: boolean, vertical?: boolean, cx?: number, cy?: number): void;

		/**
		 * Function: zoom
		 *
		 * Zooms the graph using the given factor. Center is an optional boolean
		 * argument that keeps the graph scrolled to the center. If the center argument
		 * is omitted, then <centerZoom> will be used as its value.
		 */
		zoom(factor: number, center: boolean);

		/**
		 * Function: zoomToRect
		 *
		 * Zooms the graph to the specified rectangle. If the rectangle does not have same aspect
		 * ratio as the display container, it is increased in the smaller relative dimension only
		 * until the aspect match. The original rectangle is centralised within this expanded one.
		 *
		 * Note that the input rectangular must be un-scaled and un-translated.
		 *
		 * Parameters:
		 *
		 * rect - The un-scaled and un-translated rectangluar region that should be just visible
		 * after the operation
		 */
		zoomToRect(rect: mxRectangle): void;

		/**
		 * Function: scrollCellToVisible
		 *
		 * Pans the graph so that it shows the given cell. Optionally the cell may
		 * be centered in the container.
		 *
		 * To center a given graph if the <container> has no scrollbars, use the following code.
		 *
		 * [code]
		 * var bounds = graph.getGraphBounds();
		 * graph.view.setTranslate(-bounds.x - (bounds.width - container.clientWidth) / 2,
		 * 						   -bounds.y - (bounds.height - container.clientHeight) / 2);
		 * [/code]
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> to be made visible.
		 * center - Optional boolean flag. Default is false.
		 */
		scrollCellToVisible(cell: mxCell, center?: boolean): void;

		/**
		 * Function: scrollRectToVisible
		 *
		 * Pans the graph so that it shows the given rectangle.
		 *
		 * Parameters:
		 *
		 * rect - <mxRectangle> to be made visible.
		 */
		scrollRectToVisible(rect: mxRectangle): boolean;

		/**
		 * Function: getCellGeometry
		 *
		 * Returns the <mxGeometry> for the given cell. This implementation uses
		 * <mxGraphModel.getGeometry>. Subclasses can override this to implement
		 * specific geometries for cells in only one graph, that is, it can return
		 * geometries that depend on the current state of the view.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose geometry should be returned.
		 */
		getCellGeometry(cell: mxCell): mxGeometry;

		/**
		 * Function: isCellVisible
		 *
		 * Returns true if the given cell is visible in this graph. This
		 * implementation uses <mxGraphModel.isVisible>. Subclassers can override
		 * this to implement specific visibility for cells in only one graph, that
		 * is, without affecting the visible state of the cell.
		 *
		 * When using dynamic filter expressions for cell visibility, then the
		 * graph should be revalidated after the filter expression has changed.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose visible state should be returned.
		 */
		isCellVisible(cell: mxCell): boolean;

		/**
		 * Function: isCellCollapsed
		 *
		 * Returns true if the given cell is collapsed in this graph. This
		 * implementation uses <mxGraphModel.isCollapsed>. Subclassers can override
		 * this to implement specific collapsed states for cells in only one graph,
		 * that is, without affecting the collapsed state of the cell.
		 *
		 * When using dynamic filter expressions for the collapsed state, then the
		 * graph should be revalidated after the filter expression has changed.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose collapsed state should be returned.
		 */
		isCellCollapsed(cell: mxCell): boolean;

		/**
		 * Function: isCellConnectable
		 *
		 * Returns true if the given cell is connectable in this graph. This
		 * implementation uses <mxGraphModel.isConnectable>. Subclassers can override
		 * this to implement specific connectable states for cells in only one graph,
		 * that is, without affecting the connectable state of the cell in the model.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose connectable state should be returned.
		 */
		isCellConnectable(cell: mxCell): boolean;

		/**
		 * Function: isOrthogonal
		 *
		 * Returns true if perimeter points should be computed such that the
		 * resulting edge has only horizontal or vertical segments.
		 *
		 * Parameters:
		 *
		 * edge - <mxCellState> that represents the edge.
		 */
		isOrthogonal(edge: mxCell): boolean;

		/**
		 * Function: isLoop
		 *
		 * Returns true if the given cell state is a loop.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> that represents a potential loop.
		 */
		isLoop(state: mxCellState): boolean;

		/**
		 * Function: isCloneEvent
		 *
		 * Returns true if the given event is a clone event. This implementation
		 * returns true if control is pressed.
		 */
		isCloneEvent(evt: Event): boolean;

		/**
		 * Function: isTransparentClickEvent
		 *
		 * Hook for implementing click-through behaviour on selected cells. If this
		 * returns true the cell behind the selected cell will be selected. This
		 * implementation returns false;
		 */
		isTransparentClickEvent(evt: Event): boolean;

		/**
		 * Function: isToggleEvent
		 *
		 * Returns true if the given event is a toggle event. This implementation
		 * returns true if the meta key (Cmd) is pressed on Macs or if control is
		 * pressed on any other platform.
		 */
		isToggleEvent(evt: Event): boolean;

		/**
		 * Function: isGridEnabledEvent
		 *
		 * Returns true if the given mouse event should be aligned to the grid.
		 */
		isGridEnabledEvent(evt: Event): boolean;

		/**
		 * Function: isConstrainedEvent
		 *
		 * Returns true if the given mouse event should be aligned to the grid.
		 */
		isConstrainedEvent(evt: Event): boolean;

		/**
		 * Function: isIgnoreTerminalEvent
		 *
		 * Returns true if the given mouse event should not allow any connections to be
		 * made. This implementation returns false.
		 */
		isIgnoreTerminalEvent(evt: Event): boolean;

		/**
		 * Group: Validation
		 */

		/**
		 * Function: validationAlert
		 *
		 * Displays the given validation error in a dialog. This implementation uses
		 * mxUtils.alert.
		 */
		validationAlert(message: string): void;

		/**
		 * Function: isEdgeValid
		 *
		 * Checks if the return value of <getEdgeValidationError> for the given
		 * arguments is null.
		 *
		 * Parameters:
		 *
		 * edge - <mxCell> that represents the edge to validate.
		 * source - <mxCell> that represents the source terminal.
		 * target - <mxCell> that represents the target terminal.
		 */
		isEdgeValid(edge: mxCell, source: mxCell, target: mxCell): boolean;

		/**
		 * Function: getEdgeValidationError
		 *
		 * Returns the validation error message to be displayed when inserting or
		 * changing an edges' connectivity. A return value of null means the edge
		 * is valid, a return value of '' means it's not valid, but do not display
		 * an error message. Any other (non-empty) string returned from this method
		 * is displayed as an error message when trying to connect an edge to a
		 * source and target. This implementation uses the <multiplicities>, and
		 * checks <multigraph>, <allowDanglingEdges> and <allowLoops> to generate
		 * validation errors.
		 *
		 * For extending this method with specific checks for source/target cells,
		 * the method can be extended as follows. Returning an empty string means
		 * the edge is invalid with no error message, a non-null string specifies
		 * the error message, and null means the edge is valid.
		 *
		 * (code)
		 idationError(edge, source, target)
		 * {
		 *   if (source != null && target != null &&
		 *     this.model.getValue(source) != null &&
		 *     this.model.getValue(target) != null)
		 *   {
		 *     if (target is not valid for source)
		 *     {
		 *       return 'Invalid Target';
		 *     }
		 *   }
		 *
		 *   // "Supercall"
		 *   return mxGraph.prototype.getEdgeValidationError.apply(this, arguments);
		 * }
		 * (end)
		 *
		 * Parameters:
		 *
		 * edge - <mxCell> that represents the edge to validate.
		 * source - <mxCell> that represents the source terminal.
		 * target - <mxCell> that represents the target terminal.
		 */
		getEdgeValidationError(edge: mxCell, source: mxCell, target: mxCell): string;

		/**
		 * Function: validateEdge
		 *
		 * Hook method for subclassers to return an error message for the given
		 * edge and terminals. This implementation returns null.
		 *
		 * Parameters:
		 *
		 * edge - <mxCell> that represents the edge to validate.
		 * source - <mxCell> that represents the source terminal.
		 * target - <mxCell> that represents the target terminal.
		 */
		validateEdge(edge: mxCell, source: mxCell, target: mxCell): string;

		/**
		 * Function: validateGraph
		 *
		 * Validates the graph by validating each descendant of the given cell or
		 * the root of the model. Context is an object that contains the validation
		 * state for the complete validation run. The validation errors are
		 * attached to their cells using <setCellWarning>. Returns null in the case of
		 * successful validation or an array of strings (warnings) in the case of
		 * failed validations.
		 *
		 * Paramters:
		 *
		 * cell - Optional <mxCell> to start the validation recursion. Default is
		 * the graph root.
		 * context - Object that represents the global validation state.
		 */
		validateGraph(cell: mxCell, context: any): string;

		/**
		 * Function: getCellValidationError
		 *
		 * Checks all <multiplicities> that cannot be enforced while the graph is
		 * being modified, namely, all multiplicities that require a minimum of
		 * 1 edge.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> for which the multiplicities should be checked.
		 */
		getCellValidationError(cell: mxCell): string;

		/**
		 * Function: validateCell
		 *
		 * Hook method for subclassers to return an error message for the given
		 * cell and validation context. This implementation returns null. Any HTML
		 * breaks will be converted to linefeeds in the calling method.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that represents the cell to validate.
		 * context - Object that represents the global validation state.
		 */
		validateCell(cell: mxCell, context: any): string;

		/**
		 * Group: Graph appearance
		 */

		/**
		 * Function: getBackgroundImage
		 *
		 * Returns the <backgroundImage> as an <mxImage>.
		 */
		getBackgroundImage(): mxImage;

		/**
		 * Function: setBackgroundImage
		 *
		 * Sets the new <backgroundImage>.
		 *
		 * Parameters:
		 *
		 * image - New <mxImage> to be used for the background.
		 */
		setBackgroundImage(image: mxImage): void;

		/**
		 * Function: getFoldingImage
		 *
		 * Returns the <mxImage> used to display the collapsed state of
		 * the specified cell state. This returns null for all edges.
		 */
		getFoldingImage(state: mxCellState): mxImage;

		/**
		 * Function: convertValueToString
		 *
		 * Returns the textual representation for the given cell. This
		 * implementation returns the nodename or string-representation of the user
		 * object.
		 *
		 * Example:
		 *
		 * The following returns the label attribute from the cells user
		 * object if it is an XML node.
		 *
		 * (code)
		 ueToString(cell)
		 * {
		 * 	return cell.getAttribute('label');
		 * }
		 * (end)
		 *
		 * See also: <cellLabelChanged>.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose textual representation should be returned.
		 */
		convertValueToString(cell: mxCell): string;

		/**
		 * Function: getLabel
		 *
		 * Returns a string or DOM node that represents the label for the given
		 * cell. This implementation uses <convertValueToString> if <labelsVisible>
		 * is true. Otherwise it returns an empty string.
		 *
		 * To truncate a label to match the size of the cell, the following code
		 * can be used.
		 *
		 * (code)
		 ell)
		 * {
		 *   var label = mxGraph.prototype.getLabel.apply(this, arguments);
		 *
		 *   if (label != null && this.model.isVertex(cell))
		 *   {
		 *     var geo = this.getCellGeometry(cell);
		 *
		 *     if (geo != null)
		 *     {
		 *       var max = parseInt(geo.width / 8);
		 *
		 *       if (label.length > max)
		 *       {
		 *         label = label.substring(0, max)+'...';
		 *       }
		 *     }
		 *   }
		 *   return mxUtils.htmlEntities(label);
		 * }
		 * (end)
		 *
		 * A resize listener is needed in the graph to force a repaint of the label
		 * after a resize.
		 *
		 * (code)
		 * graph.addListener(mxEvent.RESIZE_CELLS, function(sender, evt)
		 * {
		 *   var cells = evt.getProperty('cells');
		 *
		 *   for (var i = 0; i < cells.length; i++)
		 *   {
		 *     this.view.removeState(cells[i]);
		 *   }
		 * });
		 * (end)
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose label should be returned.
		 */
		getLabel(cell: mxCell): string;

		/**
		 * Function: isHtmlLabel
		 *
		 * Returns true if the label must be rendered as HTML markup. The default
		 * implementation returns <htmlLabels>.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose label should be displayed as HTML markup.
		 */
		isHtmlLabel(cell: mxCell): boolean;

		/**
		 * Function: isHtmlLabels
		 *
		 * Returns <htmlLabels>.
		 */
		isHtmlLabels(): boolean;

		/**
		 * Function: setHtmlLabels
		 *
		 * Sets <htmlLabels>.
		 */
		setHtmlLabels(value: boolean): void;

		/**
		 * Function: isWrapping
		 *
		 * This enables wrapping for HTML labels.
		 *
		 * Returns true if no white-space CSS style directive should be used for
		 * displaying the given cells label. This implementation returns true if
		 * <mxConstants.STYLE_WHITE_SPACE> in the style of the given cell is 'wrap'.
		 *
		 * This is used as a workaround for IE ignoring the white-space directive
		 * of child elements if the directive appears in a parent element. It
		 * should be overridden to return true if a white-space directive is used
		 * in the HTML markup that represents the given cells label. In order for
		 * HTML markup to work in labels, <isHtmlLabel> must also return true
		 * for the given cell.
		 *
		 * Example:
		 *
		 * (code)
		 ell)
		 * {
		 *   var tmp = mxGraph.prototype.getLabel.apply(this, arguments); // "supercall"
		 *
		 *   if (this.model.isEdge(cell))
		 *   {
		 *     tmp = '<div style="width: 150px; white-space:normal;">'+tmp+'</div>';
		 *   }
		 *
		 *   return tmp;
		 * }
		 *
		 (state)
		 * {
		 * 	 return this.model.isEdge(state.cell);
		 * }
		 * (end)
		 *
		 * Makes sure no edge label is wider than 150 pixels, otherwise the content
		 * is wrapped. Note: No width must be specified for wrapped vertex labels as
		 * the vertex defines the width in its geometry.
		 *
		 * Parameters:
		 *
		 * state - <mxCell> whose label should be wrapped.
		 */
		isWrapping(cell: mxCell): boolean;

		/**
		 * Function: isLabelClipped
		 *
		 * Returns true if the overflow portion of labels should be hidden. If this
		 * returns true then vertex labels will be clipped to the size of the vertices.
		 * This implementation returns true if <mxConstants.STYLE_OVERFLOW> in the
		 * style of the given cell is 'hidden'.
		 *
		 * Parameters:
		 *
		 * state - <mxCell> whose label should be clipped.
		 */
		isLabelClipped(cell: mxCell): boolean;

		/**
		 * Function: getTooltip
		 *
		 * Returns the string or DOM node that represents the tooltip for the given
		 * state, node and coordinate pair. This implementation checks if the given
		 * node is a folding icon or overlay and returns the respective tooltip. If
		 * this does not result in a tooltip, the handler for the cell is retrieved
		 * from <selectionCellsHandler> and the optional getTooltipForNode method is
		 * called. If no special tooltip exists here then <getTooltipForCell> is used
		 * with the cell in the given state as the argument to return a tooltip for the
		 * given state.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> whose tooltip should be returned.
		 * node - DOM node that is currently under the mouse.
		 * x - X-coordinate of the mouse.
		 * y - Y-coordinate of the mouse.
		 */
		getTooltip(state: mxCellState, node: Element, x: number, y: number): string;

		/**
		 * Function: getTooltipForCell
		 *
		 * Returns the string or DOM node to be used as the tooltip for the given
		 * cell. This implementation uses the cells getTooltip function if it
		 * exists, or else it returns <convertValueToString> for the cell.
		 *
		 * Example:
		 *
		 * (code)
		 ForCell(cell)
		 * {
		 *   return 'Hello, World!';
		 * }
		 * (end)
		 *
		 * Replaces all tooltips with the string Hello, World!
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose tooltip should be returned.
		 */
		getTooltipForCell(cell: mxCell): string;

		/**
		 * Function: getLinkForCell
		 *
		 * Returns the string to be used as the link for the given cell. This
		 * implementation returns null.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose tooltip should be returned.
		 */
		getLinkForCell(cell: mxCell): string;

		/**
		 * Function: getCursorForMouseEvent
		 *
		 * Returns the cursor value to be used for the CSS of the shape for the
		 * given event. This implementation calls <getCursorForCell>.
		 *
		 * Parameters:
		 *
		 * me - <mxMouseEvent> whose cursor should be returned.
		 */
		getCursorForMouseEvent(me: mxMouseEvent): string;

		/**
		 * Function: getCursorForCell
		 *
		 * Returns the cursor value to be used for the CSS of the shape for the
		 * given cell. This implementation returns null.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose cursor should be returned.
		 */
		getCursorForCell(cell: mxCell): string;

		/**
		 * Function: getStartSize
		 *
		 * Returns the start size of the given swimlane, that is, the width or
		 * height of the part that contains the title, depending on the
		 * horizontal style. The return value is an <mxRectangle> with either
		 * width or height set as appropriate.
		 *
		 * Parameters:
		 *
		 * swimlane - <mxCell> whose start size should be returned.
		 */
		getStartSize(swimlane: mxCell): mxRectangle;

		/**
		 * Function: getImage
		 *
		 * Returns the image URL for the given cell state. This implementation
		 * returns the value stored under <mxConstants.STYLE_IMAGE> in the cell
		 * style.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> whose image URL should be returned.
		 */
		getImage(state: mxCellState): string;

		/**
		 * Function: getVerticalAlign
		 *
		 * Returns the vertical alignment for the given cell state. This
		 * implementation returns the value stored under
		 * <mxConstants.STYLE_VERTICAL_ALIGN> in the cell style.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> whose vertical alignment should be
		 * returned.
		 */
		getVerticalAlign(state: mxCellState): string;

		/**
		 * Function: getIndicatorColor
		 *
		 * Returns the indicator color for the given cell state. This
		 * implementation returns the value stored under
		 * <mxConstants.STYLE_INDICATOR_COLOR> in the cell style.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> whose indicator color should be
		 * returned.
		 */
		getIndicatorColor(state: mxCellState): string;

		/**
		 * Function: getIndicatorGradientColor
		 *
		 * Returns the indicator gradient color for the given cell state. This
		 * implementation returns the value stored under
		 * <mxConstants.STYLE_INDICATOR_GRADIENTCOLOR> in the cell style.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> whose indicator gradient color should be
		 * returned.
		 */
		getIndicatorGradientColor(state: mxCellState): string;

		/**
		 * Function: getIndicatorShape
		 *
		 * Returns the indicator shape for the given cell state. This
		 * implementation returns the value stored under
		 * <mxConstants.STYLE_INDICATOR_SHAPE> in the cell style.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> whose indicator shape should be returned.
		 */
		getIndicatorShape(state: mxCellState): string;

		/**
		 * Function: getIndicatorImage
		 *
		 * Returns the indicator image for the given cell state. This
		 * implementation returns the value stored under
		 * <mxConstants.STYLE_INDICATOR_IMAGE> in the cell style.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> whose indicator image should be returned.
		 */
		getIndicatorImage(state: mxCellState): string;

		/**
		 * Function: getBorder
		 *
		 * Returns the value of <border>.
		 */
		getBorder(): number;

		/**
		 * Function: setBorder
		 *
		 * Sets the value of <border>.
		 *
		 * Parameters:
		 *
		 * value - Positive integer that represents the border to be used.
		 */
		setBorder(value: number): void;

		/**
		 * Function: isSwimlane
		 *
		 * Returns true if the given cell is a swimlane in the graph. A swimlane is
		 * a container cell with some specific behaviour. This implementation
		 * checks if the shape associated with the given cell is a <mxSwimlane>.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> to be checked.
		 */
		isSwimlane(cell: mxCell): boolean;

		/**
		 * Group: Graph behaviour
		 */

		/**
		 * Function: isResizeContainer
		 *
		 * Returns <resizeContainer>.
		 */
		isResizeContainer(): boolean;

		/**
		 * Function: setResizeContainer
		 *
		 * Sets <resizeContainer>.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if the container should be resized.
		 */
		setResizeContainer(value: boolean): void;

		/**
		 * Function: isEnabled
		 *
		 * Returns true if the graph is <enabled>.
		 */
		isEnabled(): boolean;

		/**
		 * Function: setEnabled
		 *
		 * Specifies if the graph should allow any interactions. This
		 * implementation updates <enabled>.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if the graph should be enabled.
		 */
		setEnabled(value: boolean): void;

		/**
		 * Function: isEscapeEnabled
		 *
		 * Returns <escapeEnabled>.
		 */
		isEscapeEnabled(): boolean;

		/**
		 * Function: setEscapeEnabled
		 *
		 * Sets <escapeEnabled>.
		 *
		 * Parameters:
		 *
		 * enabled - Boolean indicating if escape should be enabled.
		 */
		setEscapeEnabled(value: boolean): void;

		/**
		 * Function: isInvokesStopCellEditing
		 *
		 * Returns <invokesStopCellEditing>.
		 */
		isInvokesStopCellEditing(): boolean;

		/**
		 * Function: setInvokesStopCellEditing
		 *
		 * Sets <invokesStopCellEditing>.
		 */
		setInvokesStopCellEditing(value: boolean): void;

		/**
		 * Function: isEnterStopsCellEditing
		 *
		 * Returns <enterStopsCellEditing>.
		 */
		isEnterStopsCellEditing(): boolean;

		/**
		 * Function: setEnterStopsCellEditing
		 *
		 * Sets <enterStopsCellEditing>.
		 */
		setEnterStopsCellEditing(value: boolean): void;

		/**
		 * Function: isCellLocked
		 *
		 * Returns true if the given cell may not be moved, sized, bended,
		 * disconnected, edited or selected. This implementation returns true for
		 * all vertices with a relative geometry if <locked> is false.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose locked state should be returned.
		 */
		isCellLocked(cell: mxCell): boolean;

		/**
		 * Function: isCellsLocked
		 *
		 * Returns true if the given cell may not be moved, sized, bended,
		 * disconnected, edited or selected. This implementation returns true for
		 * all vertices with a relative geometry if <locked> is false.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose locked state should be returned.
		 */
		isCellsLocked(): boolean;

		/**
		 * Function: setCellsLocked
		 *
		 * Sets if any cell may be moved, sized, bended, disconnected, edited or
		 * selected.
		 *
		 * Parameters:
		 *
		 * value - Boolean that defines the new value for <cellsLocked>.
		 */
		setCellsLocked(value: boolean): void;

		/**
		 * Function: getCloneableCells
		 *
		 * Returns the cells which may be exported in the given array of cells.
		 */
		getCloneableCells(cells: mxCell[]): mxCell[];

		/**
		 * Function: isCellCloneable
		 *
		 * Returns true if the given cell is cloneable. This implementation returns
		 * <isCellsCloneable> for all cells unless a cell style specifies
		 * <mxConstants.STYLE_CLONEABLE> to be 0.
		 *
		 * Parameters:
		 *
		 * cell - Optional <mxCell> whose cloneable state should be returned.
		 */
		isCellCloneable(cell?: mxCell): boolean;

		/**
		 * Function: isCellsCloneable
		 *
		 * Returns <cellsCloneable>, that is, if the graph allows cloning of cells
		 * by using control-drag.
		 */
		isCellsCloneable(): boolean;

		/**
		 * Function: setCellsCloneable
		 *
		 * Specifies if the graph should allow cloning of cells by holding down the
		 * control key while cells are being moved. This implementation updates
		 * <cellsCloneable>.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if the graph should be cloneable.
		 */
		setCellsCloneable(value: boolean): void;

		/**
		 * Function: getExportableCells
		 *
		 * Returns the cells which may be exported in the given array of cells.
		 */
		getExportableCells(cells: mxCell[]): mxCell[];

		/**
		 * Function: canExportCell
		 *
		 * Returns true if the given cell may be exported to the clipboard. This
		 * implementation returns <exportEnabled> for all cells.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that represents the cell to be exported.
		 */
		canExportCell(cell: mxCell): boolean;

		/**
		 * Function: getImportableCells
		 *
		 * Returns the cells which may be imported in the given array of cells.
		 */
		getImportableCells(cells: mxCell[]): mxCell[];

		/**
		 * Function: canImportCell
		 *
		 * Returns true if the given cell may be imported from the clipboard.
		 * This implementation returns <importEnabled> for all cells.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that represents the cell to be imported.
		 */
		canImportCell(cell: mxCell): boolean;

		/**
		 * Function: isCellSelectable
		 *
		 * Returns true if the given cell is selectable. This implementation
		 * returns <cellsSelectable>.
		 *
		 * To add a new style for making cells (un)selectable, use the following code.
		 *
		 * (code)
		 e.isCellSelectable(cell)
		 * {
		 *   var state = this.view.getState(cell);
		 *   var style = (state != null) ? state.style : this.getCellStyle(cell);
		 *
		 *   return this.isCellsSelectable() && !this.isCellLocked(cell) && style['selectable'] != 0;
		 * };
		 * (end)
		 *
		 * You can then use the new style as shown in this example.
		 *
		 * (code)
		 * graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30, 'selectable=0');
		 * (end)
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose selectable state should be returned.
		 */
		isCellSelectable(cell: mxCell): boolean;

		/**
		 * Function: isCellsSelectable
		 *
		 * Returns <cellsSelectable>.
		 */
		isCellsSelectable(): boolean;

		/**
		 * Function: setCellsSelectable
		 *
		 * Sets <cellsSelectable>.
		 */
		setCellsSelectable(value: boolean): void;

		/**
		 * Function: getDeletableCells
		 *
		 * Returns the cells which may be exported in the given array of cells.
		 */
		getDeletableCells(cells: mxCell[]): mxCell[];

		/**
		 * Function: isCellDeletable
		 *
		 * Returns true if the given cell is moveable. This returns
		 * <cellsDeletable> for all given cells if a cells style does not specify
		 * <mxConstants.STYLE_DELETABLE> to be 0.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose deletable state should be returned.
		 */
		isCellDeletable(cell: mxCell): boolean;

		/**
		 * Function: isCellsDeletable
		 *
		 * Returns <cellsDeletable>.
		 */
		isCellsDeletable(): boolean;

		/**
		 * Function: setCellsDeletable
		 *
		 * Sets <cellsDeletable>.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if the graph should allow deletion of cells.
		 */
		setCellsDeletable(value: boolean): void;

		/**
		 * Function: isLabelMovable
		 *
		 * Returns true if the given edges's label is moveable. This returns
		 * <movable> for all given cells if <isLocked> does not return true
		 * for the given cell.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose label should be moved.
		 */
		isLabelMovable(cell: mxCell): boolean;

		/**
		 * Function: isCellRotatable
		 *
		 * Returns true if the given cell is rotatable. This returns true for the given
		 * cell if its style does not specify <mxConstants.STYLE_ROTATABLE> to be 0.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose rotatable state should be returned.
		 */
		isCellRotatable(cell: mxCell): boolean;

		/**
		 * Function: getMovableCells
		 *
		 * Returns the cells which are movable in the given array of cells.
		 */
		getMovableCells(cells: mxCell[]): mxCell[];

		/**
		 * Function: isCellMovable
		 *
		 * Returns true if the given cell is moveable. This returns <cellsMovable>
		 * for all given cells if <isCellLocked> does not return true for the given
		 * cell and its style does not specify <mxConstants.STYLE_MOVABLE> to be 0.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose movable state should be returned.
		 */
		isCellMovable(cell: mxCell): boolean;

		/**
		 * Function: isCellsMovable
		 *
		 * Returns <cellsMovable>.
		 */
		isCellsMovable(): boolean;

		/**
		 * Function: setCellsMovable
		 *
		 * Specifies if the graph should allow moving of cells. This implementation
		 * updates <cellsMsovable>.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if the graph should allow moving of cells.
		 */
		setCellsMovable(value: boolean): void;

		/**
		 * Function: isGridEnabled
		 *
		 * Returns <gridEnabled> as a boolean.
		 */
		isGridEnabled(): boolean;

		/**
		 * Function: setGridEnabled
		 *
		 * Specifies if the grid should be enabled.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if the grid should be enabled.
		 */
		setGridEnabled(value: boolean): void;

		/**
		 * Function: isPortsEnabled
		 *
		 * Returns <portsEnabled> as a boolean.
		 */
		isPortsEnabled(): boolean;

		/**
		 * Function: setPortsEnabled
		 *
		 * Specifies if the ports should be enabled.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if the ports should be enabled.
		 */
		setPortsEnabled(value: boolean): void;

		/**
		 * Function: getGridSize
		 *
		 * Returns <gridSize>.
		 */
		getGridSize(): number;

		/**
		 * Function: setGridSize
		 *
		 * Sets <gridSize>.
		 */
		setGridSize(value: number): void;

		/**
		 * Function: getTolerance
		 *
		 * Returns <tolerance>.
		 */
		getTolerance(): number;

		/**
		 * Function: setTolerance
		 *
		 * Sets <tolerance>.
		 */
		setTolerance(value: number): void;

		/**
		 * Function: isVertexLabelsMovable
		 *
		 * Returns <vertexLabelsMovable>.
		 */
		isVertexLabelsMovable(): boolean;

		/**
		 * Function: setVertexLabelsMovable
		 *
		 * Sets <vertexLabelsMovable>.
		 */
		setVertexLabelsMovable(value: boolean): void;

		/**
		 * Function: isEdgeLabelsMovable
		 *
		 * Returns <edgeLabelsMovable>.
		 */
		isEdgeLabelsMovable(): boolean;

		/**
		 * Function: isEdgeLabelsMovable
		 *
		 * Sets <edgeLabelsMovable>.
		 */
		setEdgeLabelsMovable(value: boolean): void;

		/**
		 * Function: isSwimlaneNesting
		 *
		 * Returns <swimlaneNesting> as a boolean.
		 */
		isSwimlaneNesting(): boolean;

		/**
		 * Function: setSwimlaneNesting
		 *
		 * Specifies if swimlanes can be nested by drag and drop. This is only
		 * taken into account if dropEnabled is true.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if swimlanes can be nested.
		 */
		setSwimlaneNesting(value: boolean): void;

		/**
		 * Function: isSwimlaneSelectionEnabled
		 *
		 * Returns <swimlaneSelectionEnabled> as a boolean.
		 */
		isSwimlaneSelectionEnabled(): boolean;

		/**
		 * Function: setSwimlaneSelectionEnabled
		 *
		 * Specifies if swimlanes should be selected if the mouse is released
		 * over their content area.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if swimlanes content areas
		 * should be selected when the mouse is released over them.
		 */
		setSwimlaneSelectionEnabled(value: boolean): void;

		/**
		 * Function: isMultigraph
		 *
		 * Returns <multigraph> as a boolean.
		 */
		isMultigraph(): boolean;

		/**
		 * Function: setMultigraph
		 *
		 * Specifies if the graph should allow multiple connections between the
		 * same pair of vertices.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if the graph allows multiple connections
		 * between the same pair of vertices.
		 */
		setMultigraph(value: boolean): void;

		/**
		 * Function: isAllowLoops
		 *
		 * Returns <allowLoops> as a boolean.
		 */
		isAllowLoops(): boolean;

		/**
		 * Function: setAllowDanglingEdges
		 *
		 * Specifies if dangling edges are allowed, that is, if edges are allowed
		 * that do not have a source and/or target terminal defined.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if dangling edges are allowed.
		 */
		setAllowDanglingEdges(value: boolean): void;

		/**
		 * Function: isAllowDanglingEdges
		 *
		 * Returns <allowDanglingEdges> as a boolean.
		 */
		isAllowDanglingEdges(): void;

		/**
		 * Function: setConnectableEdges
		 *
		 * Specifies if edges should be connectable.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if edges should be connectable.
		 */
		setConnectableEdges(value: boolean): void;

		/**
		 * Function: isConnectableEdges
		 *
		 * Returns <connectableEdges> as a boolean.
		 */
		isConnectableEdges(): boolean;

		/**
		 * Function: setCloneInvalidEdges
		 *
		 * Specifies if edges should be inserted when cloned but not valid wrt.
		 * <getEdgeValidationError>. If false such edges will be silently ignored.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if cloned invalid edges should be
		 * inserted into the graph or ignored.
		 */
		setCloneInvalidEdges(value: boolean): void;

		/**
		 * Function: isCloneInvalidEdges
		 *
		 * Returns <cloneInvalidEdges> as a boolean.
		 */
		isCloneInvalidEdges(): boolean;

		/**
		 * Function: setAllowLoops
		 *
		 * Specifies if loops are allowed.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if loops are allowed.
		 */
		setAllowLoops(value: boolean): void;

		/**
		 * Function: isDisconnectOnMove
		 *
		 * Returns <disconnectOnMove> as a boolean.
		 */
		isDisconnectOnMove(): boolean;

		/**
		 * Function: setDisconnectOnMove
		 *
		 * Specifies if edges should be disconnected when moved. (Note: Cloned
		 * edges are always disconnected.)
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if edges should be disconnected
		 * when moved.
		 */
		setDisconnectOnMove(value: boolean): void;

		/**
		 * Function: isDropEnabled
		 *
		 * Returns <dropEnabled> as a boolean.
		 */
		isDropEnabled(): boolean;

		/**
		 * Function: setDropEnabled
		 *
		 * Specifies if the graph should allow dropping of cells onto or into other
		 * cells.
		 *
		 * Parameters:
		 *
		 * dropEnabled - Boolean indicating if the graph should allow dropping
		 * of cells into other cells.
		 */
		setDropEnabled(value: boolean): void;

		/**
		 * Function: isSplitEnabled
		 *
		 * Returns <splitEnabled> as a boolean.
		 */
		isSplitEnabled(): boolean;

		/**
		 * Function: setSplitEnabled
		 *
		 * Specifies if the graph should allow dropping of cells onto or into other
		 * cells.
		 *
		 * Parameters:
		 *
		 * dropEnabled - Boolean indicating if the graph should allow dropping
		 * of cells into other cells.
		 */
		setSplitEnabled(value: boolean): void;

		/**
		 * Function: isCellResizable
		 *
		 * Returns true if the given cell is resizable. This returns
		 * <cellsResizable> for all given cells if <isCellLocked> does not return
		 * true for the given cell and its style does not specify
		 * <mxConstants.STYLE_RESIZABLE> to be 0.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose resizable state should be returned.
		 */
		isCellResizable(cell: mxCell): boolean;

		/**
		 * Function: isCellsResizable
		 *
		 * Returns <cellsResizable>.
		 */
		isCellsResizable(): boolean;

		/**
		 * Function: setCellsResizable
		 *
		 * Specifies if the graph should allow resizing of cells. This
		 * implementation updates <cellsResizable>.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if the graph should allow resizing of
		 * cells.
		 */
		setCellsResizable(value: boolean): void;

		/**
		 * Function: isTerminalPointMovable
		 *
		 * Returns true if the given terminal point is movable. This is independent
		 * from <isCellConnectable> and <isCellDisconnectable> and controls if terminal
		 * points can be moved in the graph if the edge is not connected. Note that it
		 * is required for this to return true to connect unconnected edges. This
		 * implementation returns true.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose terminal point should be moved.
		 * source - Boolean indicating if the source or target terminal should be moved.
		 */
		isTerminalPointMovable(cell: mxCell, source: boolean): boolean;

		/**
		 * Function: isCellBendable
		 *
		 * Returns true if the given cell is bendable. This returns <cellsBendable>
		 * for all given cells if <isLocked> does not return true for the given
		 * cell and its style does not specify <mxConstants.STYLE_BENDABLE> to be 0.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose bendable state should be returned.
		 */
		isCellBendable(cell: mxCell): boolean;

		/**
		 * Function: isCellsBendable
		 *
		 * Returns <cellsBenadable>.
		 */
		isCellsBendable(): boolean;

		/**
		 * Function: setCellsBendable
		 *
		 * Specifies if the graph should allow bending of edges. This
		 * implementation updates <bendable>.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if the graph should allow bending of
		 * edges.
		 */
		setCellsBendable(value: boolean): void;

		/**
		 * Function: isCellEditable
		 *
		 * Returns true if the given cell is editable. This returns <cellsEditable> for
		 * all given cells if <isCellLocked> does not return true for the given cell
		 * and its style does not specify <mxConstants.STYLE_EDITABLE> to be 0.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose editable state should be returned.
		 */
		isCellEditable(cell: mxCell): boolean;

		/**
		 * Function: isCellsEditable
		 *
		 * Returns <cellsEditable>.
		 */
		isCellsEditable(): boolean;

		/**
		 * Function: setCellsEditable
		 *
		 * Specifies if the graph should allow in-place editing for cell labels.
		 * This implementation updates <cellsEditable>.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if the graph should allow in-place
		 * editing.
		 */
		setCellsEditable(value: boolean): void;

		/**
		 * Function: isCellDisconnectable
		 *
		 * Returns true if the given cell is disconnectable from the source or
		 * target terminal. This returns <isCellsDisconnectable> for all given
		 * cells if <isCellLocked> does not return true for the given cell.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose disconnectable state should be returned.
		 * terminal - <mxCell> that represents the source or target terminal.
		 * source - Boolean indicating if the source or target terminal is to be
		 * disconnected.
		 */
		isCellDisconnectable(cell: mxCell, terminal: mxCell, source: boolean): boolean;

		/**
		 * Function: isCellsDisconnectable
		 *
		 * Returns <cellsDisconnectable>.
		 */
		isCellsDisconnectable(): boolean;

		/**
		 * Function: setCellsDisconnectable
		 *
		 * Sets <cellsDisconnectable>.
		 */
		setCellsDisconnectable(value: boolean): void;

		/**
		 * Function: isValidSource
		 *
		 * Returns true if the given cell is a valid source for new connections.
		 * This implementation returns true for all non-null values and is
		 * called by is called by <isValidConnection>.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that represents a possible source or null.
		 */
		isValidSource(cell: mxCell): boolean;

		/**
		 * Function: isValidTarget
		 *
		 * Returns <isValidSource> for the given cell. This is called by
		 * <isValidConnection>.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that represents a possible target or null.
		 */
		isValidTarget(cell: mxCell): boolean;

		/**
		 * Function: isValidConnection
		 *
		 * Returns true if the given target cell is a valid target for source.
		 * This is a boolean implementation for not allowing connections between
		 * certain pairs of vertices and is called by <getEdgeValidationError>.
		 * This implementation returns true if <isValidSource> returns true for
		 * the source and <isValidTarget> returns true for the target.
		 *
		 * Parameters:
		 *
		 * source - <mxCell> that represents the source cell.
		 * target - <mxCell> that represents the target cell.
		 */
		isValidConnection(source: mxCell, target: mxCell): boolean;

		/**
		 * Function: setConnectable
		 *
		 * Specifies if the graph should allow new connections. This implementation
		 * updates <mxConnectionHandler.enabled> in <connectionHandler>.
		 *
		 * Parameters:
		 *
		 * connectable - Boolean indicating if new connections should be allowed.
		 */
		setConnectable(connectable: boolean): void;

		/**
		 * Function: isConnectable
		 *
		 * Returns true if the <connectionHandler> is enabled.
		 */
		isConnectable(): boolean;

		/**
		 * Function: setTooltips
		 *
		 * Specifies if tooltips should be enabled. This implementation updates
		 * <mxTooltipHandler.enabled> in <tooltipHandler>.
		 *
		 * Parameters:
		 *
		 * enabled - Boolean indicating if tooltips should be enabled.
		 */
		setTooltips(enabled: boolean): void;

		/**
		 * Function: setPanning
		 *
		 * Specifies if panning should be enabled. This implementation updates
		 * <mxPanningHandler.panningEnabled> in <panningHandler>.
		 *
		 * Parameters:
		 *
		 * enabled - Boolean indicating if panning should be enabled.
		 */
		setPanning(enabled: boolean): void;

		/**
		 * Function: isEditing
		 *
		 * Returns true if the given cell is currently being edited.
		 * If no cell is specified then this returns true if any
		 * cell is currently being edited.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that should be checked.
		 */
		isEditing(cell: mxCell): boolean;

		/**
		 * Function: isAutoSizeCell
		 *
		 * Returns true if the size of the given cell should automatically be
		 * updated after a change of the label. This implementation returns
		 * <autoSizeCells> or checks if the cell style does specify
		 * <mxConstants.STYLE_AUTOSIZE> to be 1.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that should be resized.
		 */
		isAutoSizeCell(cell: mxCell): boolean;

		/**
		 * Function: isAutoSizeCells
		 *
		 * Returns <autoSizeCells>.
		 */
		isAutoSizeCells(): boolean;

		/**
		 * Function: setAutoSizeCells
		 *
		 * Specifies if cell sizes should be automatically updated after a label
		 * change. This implementation sets <autoSizeCells> to the given parameter.
		 * To update the size of cells when the cells are added, set
		 * <autoSizeCellsOnAdd> to true.
		 *
		 * Parameters:
		 *
		 * value - Boolean indicating if cells should be resized
		 * automatically.
		 */
		setAutoSizeCells(value: boolean): void;

		/**
		 * Function: isExtendParent
		 *
		 * Returns true if the parent of the given cell should be extended if the
		 * child has been resized so that it overlaps the parent. This
		 * implementation returns <isExtendParents> if the cell is not an edge.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that has been resized.
		 */
		isExtendParent(cell: mxCell): boolean;

		/**
		 * Function: isExtendParents
		 *
		 * Returns <extendParents>.
		 */
		isExtendParents(): boolean;

		/**
		 * Function: setExtendParents
		 *
		 * Sets <extendParents>.
		 *
		 * Parameters:
		 *
		 * value - New boolean value for <extendParents>.
		 */
		setExtendParents(value: boolean): void;

		/**
		 * Function: isExtendParentsOnAdd
		 *
		 * Returns <extendParentsOnAdd>.
		 */
		isExtendParentsOnAdd(): boolean;

		/**
		 * Function: setExtendParentsOnAdd
		 *
		 * Sets <extendParentsOnAdd>.
		 *
		 * Parameters:
		 *
		 * value - New boolean value for <extendParentsOnAdd>.
		 */
		setExtendParentsOnAdd(value: boolean): void;

		/**
		 * Function: isExtendParentsOnMove
		 *
		 * Returns <extendParentsOnMove>.
		 */
		isExtendParentsOnMove(): boolean;

		/**
		 * Function: setExtendParentsOnMove
		 *
		 * Sets <extendParentsOnMove>.
		 *
		 * Parameters:
		 *
		 * value - New boolean value for <extendParentsOnAdd>.
		 */
		setExtendParentsOnMove(value: boolean): void;

		/**
		 * Function: isRecursiveResize
		 *
		 * Returns <recursiveResize>.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> that is being resized.
		 */
		isRecursiveResize(): boolean;

		/**
		 * Function: setRecursiveResize
		 *
		 * Sets <recursiveResize>.
		 *
		 * Parameters:
		 *
		 * value - New boolean value for <recursiveResize>.
		 */
		setRecursiveResize(value: boolean): void;

		/**
		 * Function: isConstrainChild
		 *
		 * Returns true if the given cell should be kept inside the bounds of its
		 * parent according to the rules defined by <getOverlap> and
		 * <isAllowOverlapParent>. This implementation returns false for all children
		 * of edges and <isConstrainChildren> otherwise.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that should be constrained.
		 */
		isConstrainChild(cell: mxCell): boolean;

		/**
		 * Function: isConstrainChildren
		 *
		 * Returns <constrainChildren>.
		 */
		isConstrainChildren(): boolean;

		/**
		 * Function: setConstrainChildren
		 *
		 * Sets <constrainChildren>.
		 */
		setConstrainChildren(value: boolean): void;

		/**
		 * Function: isConstrainRelativeChildren
		 *
		 * Returns <constrainRelativeChildren>.
		 */
		isConstrainRelativeChildren(): boolean;

		/**
		 * Function: setConstrainRelativeChildren
		 *
		 * Sets <constrainRelativeChildren>.
		 */
		setConstrainRelativeChildren(value: boolean): void;

		/**
		 * Function: isConstrainChildren
		 *
		 * Returns <allowNegativeCoordinates>.
		 */
		isAllowNegativeCoordinates(): boolean;

		/**
		 * Function: setConstrainChildren
		 *
		 * Sets <allowNegativeCoordinates>.
		 */
		setAllowNegativeCoordinates(value: boolean): void;

		/**
		 * Function: getOverlap
		 *
		 * Returns a decimal number representing the amount of the width and height
		 * of the given cell that is allowed to overlap its parent. A value of 0
		 * means all children must stay inside the parent, 1 means the child is
		 * allowed to be placed outside of the parent such that it touches one of
		 * the parents sides. If <isAllowOverlapParent> returns false for the given
		 * cell, then this method returns 0.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> for which the overlap ratio should be returned.
		 */
		getOverlap(cell: mxCell): number;

		/**
		 * Function: isAllowOverlapParent
		 *
		 * Returns true if the given cell is allowed to be placed outside of the
		 * parents area.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that represents the child to be checked.
		 */
		isAllowOverlapParent(cell: mxCell): boolean;

		/**
		 * Function: getFoldableCells
		 *
		 * Returns the cells which are movable in the given array of cells.
		 */
		getFoldableCells(cells: mxCell[], collapse: boolean): mxCell[];

		/**
		 * Function: isCellFoldable
		 *
		 * Returns true if the given cell is foldable. This implementation
		 * returns true if the cell has at least one child and its style
		 * does not specify <mxConstants.STYLE_FOLDABLE> to be 0.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose foldable state should be returned.
		 */
		isCellFoldable(cell: mxCell, collapse: boolean): boolean;

		/**
		 * Function: isValidDropTarget
		 *
		 * Returns true if the given cell is a valid drop target for the specified
		 * cells. If <splitEnabled> is true then this returns <isSplitTarget> for
		 * the given arguments else it returns true if the cell is not collapsed
		 * and its child count is greater than 0.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> that represents the possible drop target.
		 * cells - <mxCells> that should be dropped into the target.
		 * evt - Mouseevent that triggered the invocation.
		 */
		isValidDropTarget(cell: mxCell, cells: mxCell[], evt: Event): boolean;

		/**
		 * Function: isSplitTarget
		 *
		 * Returns true if the given edge may be splitted into two edges with the
		 * given cell as a new terminal between the two.
		 *
		 * Parameters:
		 *
		 * target - <mxCell> that represents the edge to be splitted.
		 * cells - <mxCells> that should split the edge.
		 * evt - Mouseevent that triggered the invocation.
		 */
		isSplitTarget(target: mxCell, cells: mxCell[], evt: Event): boolean;

		/**
		 * Function: getDropTarget
		 *
		 * Returns the given cell if it is a drop target for the given cells or the
		 * nearest ancestor that may be used as a drop target for the given cells.
		 * If the given array contains a swimlane and <swimlaneNesting> is false
		 * then this always returns null. If no cell is given, then the bottommost
		 * swimlane at the location of the given event is returned.
		 *
		 * This function should only be used if <isDropEnabled> returns true.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> which are to be dropped onto the target.
		 * evt - Mouseevent for the drag and drop.
		 * cell - <mxCell> that is under the mousepointer.
		 * clone - Optional boolean to indicate of cells will be cloned.
		 */
		getDropTarget(cells: mxCell[], evt: Event, cell: mxCell, clone?: boolean): mxCell;

		/**
		 * Group: Cell retrieval
		 */

		/**
		 * Function: getDefaultParent
		 *
		 * Returns <defaultParent> or <mxGraphView.currentRoot> or the first child
		 * child of <mxGraphModel.root> if both are null. The value returned by
		 * this function should be used as the parent for new cells (aka default
		 * layer).
		 */
		getDefaultParent(): mxCell;

		/**
		 * Function: setDefaultParent
		 *
		 * Sets the <defaultParent> to the given cell. Set this to null to return
		 * the first child of the root in getDefaultParent.
		 */
		setDefaultParent(cell: mxCell): void;

		/**
		 * Function: getSwimlane
		 *
		 * Returns the nearest ancestor of the given cell which is a swimlane, or
		 * the given cell, if it is itself a swimlane.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> for which the ancestor swimlane should be returned.
		 */
		getSwimlane(cell: mxCell): mxCell;

		/**
		 * Function: getSwimlaneAt
		 *
		 * Returns the bottom-most swimlane that intersects the given point (x, y)
		 * in the cell hierarchy that starts at the given parent.
		 *
		 * Parameters:
		 *
		 * x - X-coordinate of the location to be checked.
		 * y - Y-coordinate of the location to be checked.
		 * parent - <mxCell> that should be used as the root of the recursion.
		 * Default is <defaultParent>.
		 */
		getSwimlaneAt(x: number, y: number, parent: mxCell): mxCell;

		/**
		 * Function: getCellAt
		 *
		 * Returns the bottom-most cell that intersects the given point (x, y) in
		 * the cell hierarchy starting at the given parent. This will also return
		 * swimlanes if the given location intersects the content area of the
		 * swimlane. If this is not desired, then the <hitsSwimlaneContent> may be
		 * used if the returned cell is a swimlane to determine if the location
		 * is inside the content area or on the actual title of the swimlane.
		 *
		 * Parameters:
		 *
		 * x - X-coordinate of the location to be checked.
		 * y - Y-coordinate of the location to be checked.
		 * parent - <mxCell> that should be used as the root of the recursion.
		 * Default is current root of the view or the root of the model.
		 * vertices - Optional boolean indicating if vertices should be returned.
		 * Default is true.
		 * edges - Optional boolean indicating if edges should be returned. Default
		 * is true.
		 * ignoreFn - Optional function that returns true if cell should be ignored.
		 * The function is passed the cell state and the x and y parameter.
		 */
		getCellAt(x: number, y: number, parent: mxCell, vertices?: boolean, edges?: boolean, ignoreFn?: Function): mxCell;

		/**
		 * Function: intersects
		 *
		 * Returns the bottom-most cell that intersects the given point (x, y) in
		 * the cell hierarchy that starts at the given parent.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> that represents the cell state.
		 * x - X-coordinate of the location to be checked.
		 * y - Y-coordinate of the location to be checked.
		 */
		intersects(state: mxCellState, x: number, y: number): mxCell;

		/**
		 * Function: hitsSwimlaneContent
		 *
		 * Returns true if the given coordinate pair is inside the content
		 * are of the given swimlane.
		 *
		 * Parameters:
		 *
		 * swimlane - <mxCell> that specifies the swimlane.
		 * x - X-coordinate of the mouse event.
		 * y - Y-coordinate of the mouse event.
		 */
		hitsSwimlaneContent(swimlane: mxCell, x: number, y: number): boolean;

		/**
		 * Function: getChildVertices
		 *
		 * Returns the visible child vertices of the given parent.
		 *
		 * Parameters:
		 *
		 * parent - <mxCell> whose children should be returned.
		 */
		getChildVertices(parent: mxCell): mxCell[];

		/**
		 * Function: getChildEdges
		 *
		 * Returns the visible child edges of the given parent.
		 *
		 * Parameters:
		 *
		 * parent - <mxCell> whose child vertices should be returned.
		 */
		getChildEdges(parent: mxCell): mxCell[];

		/**
		 * Function: getChildCells
		 *
		 * Returns the visible child vertices or edges in the given parent. If
		 * vertices and edges is false, then all children are returned.
		 *
		 * Parameters:
		 *
		 * parent - <mxCell> whose children should be returned.
		 * vertices - Optional boolean that specifies if child vertices should
		 * be returned. Default is false.
		 * edges - Optional boolean that specifies if child edges should
		 * be returned. Default is false.
		 */
		getChildCells(parent: mxCell, vertices?: boolean, edges?: boolean): mxCell[];

		/**
		 * Function: getConnections
		 *
		 * Returns all visible edges connected to the given cell without loops.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose connections should be returned.
		 * parent - Optional parent of the opposite end for a connection to be
		 * returned.
		 */
		getConnections(cell: mxCell, parent?: mxCell): mxCell[];

		/**
		 * Function: getIncomingEdges
		 *
		 * Returns the visible incoming edges for the given cell. If the optional
		 * parent argument is specified, then only child edges of the given parent
		 * are returned.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose incoming edges should be returned.
		 * parent - Optional parent of the opposite end for an edge to be
		 * returned.
		 */
		getIncomingEdges(cell: mxCell, parent?: mxCell): mxCell[];

		/**
		 * Function: getOutgoingEdges
		 *
		 * Returns the visible outgoing edges for the given cell. If the optional
		 * parent argument is specified, then only child edges of the given parent
		 * are returned.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose outgoing edges should be returned.
		 * parent - Optional parent of the opposite end for an edge to be
		 * returned.
		 */
		getOutgoingEdges(cell: mxCell, parent?: mxCell): mxCell[];

		/**
		 * Function: getEdges
		 *
		 * Returns the incoming and/or outgoing edges for the given cell.
		 * If the optional parent argument is specified, then only edges are returned
		 * where the opposite is in the given parent cell. If at least one of incoming
		 * or outgoing is true, then loops are ignored, if both are false, then all
		 * edges connected to the given cell are returned including loops.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> whose edges should be returned.
		 * parent - Optional parent of the opposite end for an edge to be
		 * returned.
		 * incoming - Optional boolean that specifies if incoming edges should
		 * be included in the result. Default is true.
		 * outgoing - Optional boolean that specifies if outgoing edges should
		 * be included in the result. Default is true.
		 * includeLoops - Optional boolean that specifies if loops should be
		 * included in the result. Default is true.
		 * recurse - Optional boolean the specifies if the parent specified only
		 * need be an ancestral parent, true, or the direct parent, false.
		 * Default is false
		 */
		getEdges(cell: mxCell, parent?: boolean, incoming?: boolean, outgoing?: boolean, includeLoops?: boolean, recurse?: boolean): mxCell[];

		/**
		 * Function: isValidAncestor
		 *
		 * Returns whether or not the specified parent is a valid
		 * ancestor of the specified cell, either direct or indirectly
		 * based on whether ancestor recursion is enabled.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> the possible child cell
		 * parent - <mxCell> the possible parent cell
		 * recurse - boolean whether or not to recurse the child ancestors
		 */
		isValidAncestor(cell: mxCell, parent: mxCell, recurse: boolean): boolean;

		/**
		 * Function: getOpposites
		 *
		 * Returns all distinct visible opposite cells for the specified terminal
		 * on the given edges.
		 *
		 * Parameters:
		 *
		 * edges - Array of <mxCells> that contains the edges whose opposite
		 * terminals should be returned.
		 * terminal - Terminal that specifies the end whose opposite should be
		 * returned.
		 * source - Optional boolean that specifies if source terminals should be
		 * included in the result. Default is true.
		 * targets - Optional boolean that specifies if targer terminals should be
		 * included in the result. Default is true.
		 */
		getOpposites(edges: mxCell[], terminal: mxCellState, sources?: boolean, targets?: boolean): mxCell[];

		/**
		 * Function: getEdgesBetween
		 *
		 * Returns the edges between the given source and target. This takes into
		 * account collapsed and invisible cells and returns the connected edges
		 * as displayed on the screen.
		 *
		 * Parameters:
		 *
		 * source -
		 * target -
		 * directed -
		 */
		getEdgesBetween(source: mxCell, target: mxCell, directed?: boolean): mxCell[];

		/**
		 * Function: getPointForEvent
		 *
		 * Returns an <mxPoint> representing the given event in the unscaled,
		 * non-translated coordinate space of <container> and applies the grid.
		 *
		 * Parameters:
		 *
		 * evt - Mousevent that contains the mouse pointer location.
		 * addOffset - Optional boolean that specifies if the position should be
		 * offset by half of the <gridSize>. Default is true.
		 */
		getPointForEvent(evt: Event, addOffset?: boolean): mxPoint;

		/**
		 * Function: getCells
		 *
		 * Returns the child vertices and edges of the given parent that are contained
		 * in the given rectangle. The result is added to the optional result array,
		 * which is returned. If no result array is specified then a new array is
		 * created and returned.
		 *
		 * Parameters:
		 *
		 * x - X-coordinate of the rectangle.
		 * y - Y-coordinate of the rectangle.
		 * width - Width of the rectangle.
		 * height - Height of the rectangle.
		 * parent - <mxCell> that should be used as the root of the recursion.
		 * Default is current root of the view or the root of the model.
		 * result - Optional array to store the result in.
		 */
		getCells(x: number, y: number, width: number, height: number, parent: mxCell, result?: mxCell[]): mxCell[];

		/**
		 * Function: getCellsBeyond
		 *
		 * Returns the children of the given parent that are contained in the
		 * halfpane from the given point (x0, y0) rightwards or downwards
		 * depending on rightHalfpane and bottomHalfpane.
		 *
		 * Parameters:
		 *
		 * x0 - X-coordinate of the origin.
		 * y0 - Y-coordinate of the origin.
		 * parent - Optional <mxCell> whose children should be checked. Default is
		 * <defaultParent>.
		 * rightHalfpane - Boolean indicating if the cells in the right halfpane
		 * from the origin should be returned.
		 * bottomHalfpane - Boolean indicating if the cells in the bottom halfpane
		 * from the origin should be returned.
		 */
		getCellsBeyond(x0: number, y0: number, parent?: mxCell, rightHalfpane?: boolean, bottomHalfpane?: boolean): mxCell[];

		/**
		 * Function: findTreeRoots
		 *
		 * Returns all children in the given parent which do not have incoming
		 * edges. If the result is empty then the with the greatest difference
		 * between incoming and outgoing edges is returned.
		 *
		 * Parameters:
		 *
		 * parent - <mxCell> whose children should be checked.
		 * isolate - Optional boolean that specifies if edges should be ignored if
		 * the opposite end is not a child of the given parent cell. Default is
		 * false.
		 * invert - Optional boolean that specifies if outgoing or incoming edges
		 * should be counted for a tree root. If false then outgoing edges will be
		 * counted. Default is false.
		 */
		findTreeRoots(parent: mxCell, isolate?: boolean, invert?: boolean): mxCell[];

		/**
		 * Function: traverse
		 *
		 * Traverses the (directed) graph invoking the given function for each
		 * visited vertex and edge. The function is invoked with the current vertex
		 * and the incoming edge as a parameter. This implementation makes sure
		 * each vertex is only visited once. The function may return false if the
		 * traversal should stop at the given vertex.
		 *
		 * Example:
		 *
		 * (code)
		 * mxLog.show();
		 * var cell = graph.getSelectionCell();
		 * graph.traverse(cell, false, function(vertex, edge)
		 * {
		 *   mxLog.debug(graph.getLabel(vertex));
		 * });
		 * (end)
		 *
		 * Parameters:
		 *
		 * vertex - <mxCell> that represents the vertex where the traversal starts.
		 * directed - Optional boolean indicating if edges should only be traversed
		 * from source to target. Default is true.
		 * func - Visitor function that takes the current vertex and the incoming
		 * edge as arguments. The traversal stops if the function returns false.
		 * edge - Optional <mxCell> that represents the incoming edge. This is
		 * null for the first step of the traversal.
		 * visited - Optional <mxDictionary> from cells to true for the visited cells.
		 * inverse - Optional boolean to traverse in inverse direction. Default is false.
		 * This is ignored if directed is false.
		 */
		traverse(vertex: mxCell, directed: boolean, func: Function, edge?: mxCell, visited?: mxDictionary<boolean>, inverse?: boolean): void;

		/**
		 * Group: Selection
		 */

		/**
		 * Function: isCellSelected
		 *
		 * Returns true if the given cell is selected.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> for which the selection state should be returned.
		 */
		isCellSelected(cell: mxCell): boolean;

		/**
		 * Function: isSelectionEmpty
		 *
		 * Returns true if the selection is empty.
		 */
		isSelectionEmpty(): boolean;

		/**
		 * Function: clearSelection
		 *
		 * Clears the selection using <mxGraphSelectionModel.clear>.
		 */
		clearSelection(): void;

		/**
		 * Function: getSelectionCount
		 *
		 * Returns the number of selected cells.
		 */
		getSelectionCount(): number;

		/**
		 * Function: getSelectionCell
		 *
		 * Returns the first cell from the array of selected <mxCells>.
		 */
		getSelectionCell(): mxCell;

		/**
		 * Function: getSelectionCells
		 *
		 * Returns the array of selected <mxCells>.
		 */
		getSelectionCells(): mxCell[];

		/**
		 * Function: setSelectionCell
		 *
		 * Sets the selection cell.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> to be selected.
		 */
		setSelectionCell(cell: mxCell): void;

		/**
		 * Function: setSelectionCells
		 *
		 * Sets the selection cell.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to be selected.
		 */
		setSelectionCells(cells: mxCell[]): void;

		/**
		 * Function: addSelectionCell
		 *
		 * Adds the given cell to the selection.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> to be add to the selection.
		 */
		addSelectionCell(cell: mxCell): void;

		/**
		 * Function: addSelectionCells
		 *
		 * Adds the given cells to the selection.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to be added to the selection.
		 */
		addSelectionCells(cells: mxCell[]): void;

		/**
		 * Function: removeSelectionCell
		 *
		 * Removes the given cell from the selection.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> to be removed from the selection.
		 */
		removeSelectionCell(cell: mxCell): void;

		/**
		 * Function: removeSelectionCells
		 *
		 * Removes the given cells from the selection.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to be removed from the selection.
		 */
		removeSelectionCells(cells: mxCell[]): void;

		/**
		 * Function: selectRegion
		 *
		 * Selects and returns the cells inside the given rectangle for the
		 * specified event.
		 *
		 * Parameters:
		 *
		 * rect - <mxRectangle> that represents the region to be selected.
		 * evt - Mouseevent that triggered the selection.
		 */
		selectRegion(rect: mxRectangle, evt: Event): mxCell[];

		/**
		 * Function: selectNextCell
		 *
		 * Selects the next cell.
		 */
		selectNextCell(): void;

		/**
		 * Function: selectPreviousCell
		 *
		 * Selects the previous cell.
		 */
		selectPreviousCell(): void;

		/**
		 * Function: selectParentCell
		 *
		 * Selects the parent cell.
		 */
		selectParentCell(): void;

		/**
		 * Function: selectChildCell
		 *
		 * Selects the first child cell.
		 */
		selectChildCell(): void;

		/**
		 * Function: selectCell
		 *
		 * Selects the next, parent, first child or previous cell, if all arguments
		 * are false.
		 *
		 * Parameters:
		 *
		 * isNext - Boolean indicating if the next cell should be selected.
		 * isParent - Boolean indicating if the parent cell should be selected.
		 * isChild - Boolean indicating if the first child cell should be selected.
		 */
		selectCell(isNext: boolean, isParent: boolean, isChild: boolean): void;

		/**
		 * Function: selectAll
		 *
		 * Selects all children of the given parent cell or the children of the
		 * default parent if no parent is specified. To select leaf vertices and/or
		 * edges use <selectCells>.
		 *
		 * Parameters:
		 *
		 * parent - Optional <mxCell> whose children should be selected.
		 * Default is <defaultParent>.
		 * descendants - Optional boolean specifying whether all descendants should be
		 * selected. Default is false.
		 */
		selectAll(parent?: mxCell, descendants?: mxCell[]): void;

		/**
		 * Function: selectVertices
		 *
		 * Select all vertices inside the given parent or the default parent.
		 */
		selectVertices(parent: mxCell): void;

		/**
		 * Function: selectVertices
		 *
		 * Select all vertices inside the given parent or the default parent.
		 */
		selectEdges(parent: mxCell): void;

		/**
		 * Function: selectCells
		 *
		 * Selects all vertices and/or edges depending on the given boolean
		 * arguments recursively, starting at the given parent or the default
		 * parent if no parent is specified. Use <selectAll> to select all cells.
		 * For vertices, only cells with no children are selected.
		 *
		 * Parameters:
		 *
		 * vertices - Boolean indicating if vertices should be selected.
		 * edges - Boolean indicating if edges should be selected.
		 * parent - Optional <mxCell> that acts as the root of the recursion.
		 * Default is <defaultParent>.
		 */
		selectCells(vertices: boolean, edges: boolean, parent?: mxCell): void;

		/**
		 * Function: selectCellForEvent
		 *
		 * Selects the given cell by either adding it to the selection or
		 * replacing the selection depending on whether the given mouse event is a
		 * toggle event.
		 *
		 * Parameters:
		 *
		 * cell - <mxCell> to be selected.
		 * evt - Optional mouseevent that triggered the selection.
		 */
		selectCellForEvent(cell: mxCell, evt: Event): void;

		/**
		 * Function: selectCellsForEvent
		 *
		 * Selects the given cells by either adding them to the selection or
		 * replacing the selection depending on whether the given mouse event is a
		 * toggle event.
		 *
		 * Parameters:
		 *
		 * cells - Array of <mxCells> to be selected.
		 * evt - Optional mouseevent that triggered the selection.
		 */
		selectCellsForEvent(cells: mxCell[], evt: Event): void;

		/**
		 * Group: Selection state
		 */

		/**
		 * Function: createHandler
		 *
		 * Creates a new handler for the given cell state. This implementation
		 * returns a new <mxEdgeHandler> of the corresponding cell is an edge,
		 * otherwise it returns an <mxVertexHandler>.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> whose handler should be created.
		 */
		createHandler(state: mxCellState): void;

		/**
		 * Function: createVertexHandler
		 *
		 * Hooks to create a new <mxVertexHandler> for the given <mxCellState>.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> to create the handler for.
		 */
		createVertexHandler(state: mxCellState): mxVertexHandler;

		/**
		 * Function: createEdgeHandler
		 *
		 * Hooks to create a new <mxEdgeHandler> for the given <mxCellState>.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> to create the handler for.
		 */
		createEdgeHandler(state: mxCellState, edgeStyle: string): mxEdgeHandler;

		/**
		 * Function: createEdgeSegmentHandler
		 *
		 * Hooks to create a new <mxEdgeSegmentHandler> for the given <mxCellState>.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> to create the handler for.
		 */
		createEdgeSegmentHandler(state: mxCellState): mxEdgeSegmentHandler;

		/**
		 * Function: createElbowEdgeHandler
		 *
		 * Hooks to create a new <mxElbowEdgeHandler> for the given <mxCellState>.
		 *
		 * Parameters:
		 *
		 * state - <mxCellState> to create the handler for.
		 */
		createElbowEdgeHandler(state: mxCellState): mxElbowEdgeHandler;

		/**
		 * Group: Graph events
		 */

		/**
		 * Function: addMouseListener
		 *
		 * Adds a listener to the graph event dispatch loop. The listener
		 * must implement the mouseDown, mouseMove and mouseUp methods
		 * as shown in the <mxMouseEvent> class.
		 *
		 * Parameters:
		 *
		 * listener - Listener to be added to the graph event listeners.
		 */
		addMouseListener(listener: Function): void;

		/**
		 * Function: removeMouseListener
		 *
		 * Removes the specified graph listener.
		 *
		 * Parameters:
		 *
		 * listener - Listener to be removed from the graph event listeners.
		 */
		removeMouseListener(listener: Function): void;

		/**
		 * Function: updateMouseEvent
		 *
		 * Sets the graphX and graphY properties if the given <mxMouseEvent> if
		 * required and returned the event.
		 *
		 * Parameters:
		 *
		 * me - <mxMouseEvent> to be updated.
		 * evtName - Name of the mouse event.
		 */
		updateMouseEvent(me: mxMouseEvent, evtName: string): void;

		/**
		 * Function: getStateForEvent
		 *
		 * Returns the state for the given touch event.
		 */
		getStateForTouchEvent(evt: Event): mxCellState;

		/**
		 * Function: isEventIgnored
		 *
		 * Returns true if the event should be ignored in <fireMouseEvent>.
		 */
		isEventIgnored(evtName: string, me: mxMouseEvent, sender: any): boolean;

		/**
		 * Function: isSyntheticEventIgnored
		 *
		 * Hook for ignoring synthetic mouse events after touchend in Firefox.
		 */
		isSyntheticEventIgnored(evtName: string, me: mxMouseEvent, sender: any): boolean;

		/**
		 * Function: isEventSourceIgnored
		 *
		 * Returns true if the event should be ignored in <fireMouseEvent>. This
		 * implementation returns true for select, option and input (if not of type
		 * checkbox, radio, button, submit or file) event sources if the event is not
		 * a mouse event or a left mouse button press event.
		 *
		 * Parameters:
		 *
		 * evtName - The name of the event.
		 * me - <mxMouseEvent> that should be ignored.
		 */
		isEventSourceIgnored(evtName: string, me: mxMouseEvent): boolean;

		/**
		 * Function: getEventState
		 *
		 * Returns the <mxCellState> to be used when firing the mouse event for the
		 * given state. This implementation returns the given state.
		 *
		 * Parameters:
		 *
		 * <mxCellState> - State whose event source should be returned.
		 */
		getEventState(state: mxCellState): mxCellState;

		/**
		 * Function: fireMouseEvent
		 *
		 * Dispatches the given event in the graph event dispatch loop. Possible
		 * event names are <mxEvent.MOUSE_DOWN>, <mxEvent.MOUSE_MOVE> and
		 * <mxEvent.MOUSE_UP>. All listeners are invoked for all events regardless
		 * of the consumed state of the event.
		 *
		 * Parameters:
		 *
		 * evtName - String that specifies the type of event to be dispatched.
		 * me - <mxMouseEvent> to be fired.
		 * sender - Optional sender argument. Default is this.
		 */
		fireMouseEvent(evtName: string, me: mxMouseEvent, sender: any): void;

		/**
		 * Function: consumeMouseEvent
		 *
		 * Consumes the given <mxMouseEvent> if it's a touchStart event.
		 */
		consumeMouseEvent(evtName: string, me: mxMouseEvent, sender: any): void;

		/**
		 * Function: fireGestureEvent
		 *
		 * Dispatches a <mxEvent.GESTURE> event. The following example will resize the
		 * cell under the mouse based on the scale property of the native touch event.
		 *
		 * (code)
		 * graph.addListener(mxEvent.GESTURE, function(sender, eo)
		 * {
		 *   var evt = eo.getProperty('event');
		 *   var state = graph.view.getState(eo.getProperty('cell'));
		 *
		 *   if (graph.isEnabled() && graph.isCellResizable(state.cell) && Math.abs(1 - evt.scale) > 0.2)
		 *   {
		 *     var scale = graph.view.scale;
		 *     var tr = graph.view.translate;
		 *
		 *     var w = state.width * evt.scale;
		 *     var h = state.height * evt.scale;
		 *     var x = state.x - (w - state.width) / 2;
		 *     var y = state.y - (h - state.height) / 2;
		 *
		 *     var bounds = new mxRectangle(graph.snap(x / scale) - tr.x,
		 *     		graph.snap(y / scale) - tr.y, graph.snap(w / scale), graph.snap(h / scale));
		 *     graph.resizeCell(state.cell, bounds);
		 *     eo.consume();
		 *   }
		 * });
		 * (end)
		 *
		 * Parameters:
		 *
		 * evt - Gestureend event that represents the gesture.
		 * cell - Optional <mxCell> associated with the gesture.
		 */
		fireGestureEvent(evt: Event, cell?: mxCell): void;

		/**
		 * Function: destroy
		 *
		 * Destroys the graph and all its resources.
		 */
		destroy(): void;

	}
}