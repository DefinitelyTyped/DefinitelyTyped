
/**
* Copyright (c) 2006-2015, JGraph Ltd
* Copyright (c) 2006-2015, Gaudenz Alder
*/


/**
* Class: mxCell
*
* Cells are the elements of the graph model. They represent the state
* of the groups, vertices and edges in a graph.
*
* Custom attributes:
*
* For custom attributes we recommend using an XML node as the value of a cell.
* The following code can be used to create a cell with an XML node as the
* value:
*
* (code)
* var doc = mxUtils.createXmlDocument();
* var node = doc.createElement('MyNode')
* node.setAttribute('label', 'MyLabel');
* node.setAttribute('attribute1', 'value1');
* graph.insertVertex(graph.getDefaultParent(), null, node, 40, 40, 80, 30);
* (end)
*
* For the label to work, <mxGraph.convertValueToString> and
* <mxGraph.cellLabelChanged> should be overridden as follows:
*
* (code)
* graph.convertValueToString(cell)
* {
*   if (mxUtils.isNode(cell.value))
*   {
*     return cell.getAttribute('label', '')
*   }
* };
*
* var cellLabelChanged = graph.cellLabelChanged;
* graph.cellLabelChanged(cell, newValue, autoSize)
* {
*   if (mxUtils.isNode(cell.value))
*   {
*     // Clones the value for correct undo/redo
*     var elt = cell.value.cloneNode(true);
*     elt.setAttribute('label', newValue);
*     newValue = elt;
*   }
*
*   cellLabelChanged.apply(this, arguments);
* };
* (end)
*
* Callback: onInit
*
* Called from within the constructor.
*
* Constructor: mxCell
*
* Constructs a new cell to be used in a graph model.
* This method invokes <onInit> upon completion.
*
* Parameters:
*
* value - Optional object that represents the cell value.
* geometry - Optional <mxGeometry> that specifies the geometry.
* style - Optional formatted string that defines the style.
*/
export class mxCell {

  constructor(value: Element, geometry, style);

  /**
   * Variable: id
   *
   * Holds the Id. Default is null.
   */
  id: string;

  /**
   * Variable: value
   *
   * Holds the user object. Default is null.
   */
  value: Element;

  /**
   * Variable: geometry
   *
   * Holds the <mxGeometry>. Default is null.
   */
  geometry: mxGeometry;

  /**
   * Variable: style
   *
   * Holds the style as a string of the form [(stylename|key=value);]. Default is
   * null.
   */
  style: string;

  /**
   * Variable: vertex
   *
   * Specifies whether the cell is a vertex. Default is false.
   */
  vertex: boolean;

  /**
   * Variable: edge
   *
   * Specifies whether the cell is an edge. Default is false.
   */
  edge: boolean;

  /**
   * Variable: connectable
   *
   * Specifies whether the cell is connectable. Default is true.
   */
  connectable: boolean;

  /**
   * Variable: visible
   *
   * Specifies whether the cell is visible. Default is true.
   */
  visible: boolean;

  /**
   * Variable: collapsed
   *
   * Specifies whether the cell is collapsed. Default is false.
   */
  collapsed: boolean;

  /**
   * Variable: parent
   *
   * Reference to the parent cell.
   */
  parent: mxCell;

  /**
   * Variable: source
   *
   * Reference to the source terminal.
   */
  source: mxCell;

  /**
   * Variable: target
   *
   * Reference to the target terminal.
   */
  target: mxCell;

  /**
   * Variable: children
   *
   * Holds the child cells.
   */
  children: mxCell[];

  /**
   * Variable: edges
   *
   * Holds the edges.
   */
  edges: mxCell[];

  /**
   * Function: getId
   *
   * Returns the Id of the cell as a string.
   */
  getId(): string;

  /**
   * Function: setId
   *
   * Sets the Id of the cell to the given string.
   */
  setId(id: string): void;

  /**
   * Function: getValue
   *
   * Returns the user object of the cell. The user
   * object is stored in <value>.
   */
  getValue(): Element;

  /**
   * Function: setValue
   *
   * Sets the user object of the cell. The user object
   * is stored in <value>.
   */
  setValue(value: Element): void;

  /**
   * Function: valueChanged
   *
   * Changes the user object after an in-place edit
   * and returns the previous value. This implementation
   * replaces the user object with the given value and
   * returns the old user object.
   */
  valueChanged(newValue: Element): Element;

  /**
   * Function: getGeometry
   *
   * Returns the <mxGeometry> that describes the <geometry>.
   */
  getGeometry(): mxGeometry;

  /**
   * Function: setGeometry
   *
   * Sets the <mxGeometry> to be used as the <geometry>.
   */
  setGeometry(geometry: mxGeometry): void;

  /**
   * Function: getStyle
   *
   * Returns a string that describes the <style>.
   */
  getStyle(): string;

  /**
   * Function: setStyle
   *
   * Sets the string to be used as the <style>.
   */
  setStyle(style: string): void;

  /**
   * Function: isVertex
   *
   * Returns true if the cell is a vertex.
   */
  isVertex(): boolean;

  /**
   * Function: setVertex
   *
   * Specifies if the cell is a vertex. This should only be assigned at
   * construction of the cell and not be changed during its lifecycle.
   *
   * Parameters:
   *
   * vertex - Boolean that specifies if the cell is a vertex.
   */
  setVertex(vertex: boolean): void;

  /**
   * Function: isEdge
   *
   * Returns true if the cell is an edge.
   */
  isEdge(): boolean;

  /**
   * Function: setEdge
   *
   * Specifies if the cell is an edge. This should only be assigned at
   * construction of the cell and not be changed during its lifecycle.
   *
   * Parameters:
   *
   * edge - Boolean that specifies if the cell is an edge.
   */
  setEdge(edge: boolean): void;

  /**
   * Function: isConnectable
   *
   * Returns true if the cell is connectable.
   */
  isConnectable(): boolean;

  /**
   * Function: setConnectable
   *
   * Sets the connectable state.
   *
   * Parameters:
   *
   * connectable - Boolean that specifies the new connectable state.
   */
  setConnectable(connectable: boolean): void;

  /**
   * Function: isVisible
   *
   * Returns true if the cell is visibile.
   */
  isVisible(): boolean;

  /**
   * Function: setVisible
   *
   * Specifies if the cell is visible.
   *
   * Parameters:
   *
   * visible - Boolean that specifies the new visible state.
   */
  setVisible(visible: boolean): void;

  /**
   * Function: isCollapsed
   *
   * Returns true if the cell is collapsed.
   */
  isCollapsed(): boolean;

  /**
   * Function: setCollapsed
   *
   * Sets the collapsed state.
   *
   * Parameters:
   *
   * collapsed - Boolean that specifies the new collapsed state.
   */
  setCollapsed(collapsed: boolean): void;

  /**
   * Function: getParent
   *
   * Returns the cell's parent.
   */
  getParent(): mxCell;

  /**
   * Function: setParent
   *
   * Sets the parent cell.
   *
   * Parameters:
   *
   * parent - <mxCell> that represents the new parent.
   */
  setParent(parent: mxCell): void;

  /**
   * Function: getTerminal
   *
   * Returns the source or target terminal.
   *
   * Parameters:
   *
   * source - Boolean that specifies if the source terminal should be
   * returned.
   */
  getTerminal(source: boolean): mxCell;

  /**
   * Function: setTerminal
   *
   * Sets the source or target terminal and returns the new terminal.
   *
   * Parameters:
   *
   * terminal - <mxCell> that represents the new source or target terminal.
   * isSource - Boolean that specifies if the source or target terminal
   * should be set.
   */
  setTerminal(terminal: mxCell, isSource: boolean): mxCell;

  /**
   * Function: getChildCount
   *
   * Returns the number of child cells.
   */
  getChildCount(): number;

  /**
   * Function: getIndex
   *
   * Returns the index of the specified child in the child array.
   *
   * Parameters:
   *
   * child - Child whose index should be returned.
   */
  getIndex(child: mxCell): number;

  /**
   * Function: getChildAt
   *
   * Returns the child at the specified index.
   *
   * Parameters:
   *
   * index - Integer that specifies the child to be returned.
   */
  getChildAt(index: number): mxCell;

  /**
   * Function: insert
   *
   * Inserts the specified child into the child array at the specified index
   * and updates the parent reference of the child. If not childIndex is
   * specified then the child is appended to the child array. Returns the
   * inserted child.
   *
   * Parameters:
   *
   * child - <mxCell> to be inserted or appended to the child array.
   * index - Optional integer that specifies the index at which the child
   * should be inserted into the child array.
   */
  insert(child: mxCell, index: number): mxCell;

  /**
   * Function: remove
   *
   * Removes the child at the specified index from the child array and
   * returns the child that was removed. Will remove the parent reference of
   * the child.
   *
   * Parameters:
   *
   * index - Integer that specifies the index of the child to be
   * removed.
   */
  remove(index: number): mxCell;

  /**
   * Function: removeFromParent
   *
   * Removes the cell from its parent.
   */
  removeFromParent(): void;

  /**
   * Function: getEdgeCount
   *
   * Returns the number of edges in the edge array.
   */
  getEdgeCount(): number;

  /**
   * Function: getEdgeIndex
   *
   * Returns the index of the specified edge in <edges>.
   *
   * Parameters:
   *
   * edge - <mxCell> whose index in <edges> should be returned.
   */
  getEdgeIndex(edge: mxCell): number;

  /**
   * Function: getEdgeAt
   *
   * Returns the edge at the specified index in <edges>.
   *
   * Parameters:
   *
   * index - Integer that specifies the index of the edge to be returned.
   */
  getEdgeAt(index: number): mxCell;

  /**
   * Function: insertEdge
   *
   * Inserts the specified edge into the edge array and returns the edge.
   * Will update the respective terminal reference of the edge.
   *
   * Parameters:
   *
   * edge - <mxCell> to be inserted into the edge array.
   * isOutgoing - Boolean that specifies if the edge is outgoing.
   */
  insertEdge(edge: mxCell, isOutgoing: boolean): mxCell;

  /**
   * Function: removeEdge
   *
   * Removes the specified edge from the edge array and returns the edge.
   * Will remove the respective terminal reference from the edge.
   *
   * Parameters:
   *
   * edge - <mxCell> to be removed from the edge array.
   * isOutgoing - Boolean that specifies if the edge is outgoing.
   */
  removeEdge(edge: mxCell, isOutgoing: boolean): mxCell;

  /**
   * Function: removeFromTerminal
   *
   * Removes the edge from its source or target terminal.
   *
   * Parameters:
   *
   * isSource - Boolean that specifies if the edge should be removed from its
   * source or target terminal.
   */
  removeFromTerminal(isSource: boolean): void;

  /**
   * Function: hasAttribute
   *
   * Returns true if the user object is an XML node that contains the given
   * attribute.
   *
   * Parameters:
   *
   * name - Name of the attribute.
   */
  hasAttribute(name: string): boolean;

  /**
   * Function: getAttribute
   *
   * Returns the specified attribute from the user object if it is an XML
   * node.
   *
   * Parameters:
   *
   * name - Name of the attribute whose value should be returned.
   * defaultValue - Optional default value to use if the attribute has no
   * value.
   */
  getAttribute(name: string, defaultValue?: string): string;

  /**
   * Function: setAttribute
   *
   * Sets the specified attribute on the user object if it is an XML node.
   *
   * Parameters:
   *
   * name - Name of the attribute whose value should be set.
   * value - New value of the attribute.
   */
  setAttribute(name: string, value: string): void;

  /**
   * Function: clone
   *
   * Returns a clone of the cell. Uses <cloneValue> to clone
   * the user object. All fields in <mxTransient> are ignored
   * during the cloning.
   */
  clone(): mxCell;

  /**
   * Function: cloneValue
   *
   * Returns a clone of the cell's user object.
   */
  cloneValue(): any;

}

/**
   *
   * Class: mxUrlConverter
   *
   * Converts relative and absolute URLs to absolute URLs with protocol and domain.
   */
export class mxUrlConverter {
  constructor();

  /**
   * Variable: enabled
   *
   * Specifies if the converter is enabled. Default is true.
   */
  enabled: boolean;

  /**
   * Variable: baseUrl
   *
   * Specifies the base URL to be used as a prefix for relative URLs.
   */
  baseUrl: string;

  /**
   * Variable: baseDomain
   *
   * Specifies the base domain to be used as a prefix for absolute URLs.
   */
  baseDomain: string;

  /**
   * Function: updateBaseUrl
   *
   * Private helper function to update the base URL.
   */
  updateBaseUrl(): void;

  /**
   * Function: isEnabled
   *
   * Returns <enabled>.
   */
  isEnabled(): boolean;

  /**
   * Function: setEnabled
   *
   * Sets <enabled>.
   */
  setEnabled(value: boolean): void;

  /**
   * Function: getBaseUrl
   *
   * Returns <baseUrl>.
   */
  getBaseUrl(): string;

  /**
   * Function: setBaseUrl
   *
   * Sets <baseUrl>.
   */
  setBaseUrl(value: string): void;

  /**
   * Function: getBaseDomain
   *
   * Returns <baseDomain>.
   */
  getBaseDomain(): string;

  /**
   * Function: setBaseDomain
   *
   * Sets <baseDomain>.
   */
  setBaseDomain(value: string): void;

  /**
   * Function: isRelativeUrl
   *
   * Returns true if the given URL is relative.
   */
  isRelativeUrl(url: string): boolean;

  /**
   * Function: convert
   *
   * Converts the given URL to an absolute URL with protol and domain.
   * Relative URLs are first converted to absolute URLs.
   */
  convert(url: string): string;
}


/**
 * Class: mxAbstractCanvas2D
 *
 * Base class for all canvases. A description of the public API is available in <mxXmlCanvas2D>.
 * All color values of <mxConstants.NONE> will be converted to null in the state.
 *
 * Constructor: mxAbstractCanvas2D
 *
 * Constructs a new abstract canvas.
 */
export class mxAbstractCanvas2D {
  constructor();

  /**
   * Variable: state
   *
   * Holds the current state.
   */
  state: HTMLCanvasElement;

  /**
   * Variable: states
   *
   * Stack of states.
   */
  states: HTMLCanvasElement[];

  /**
   * Variable: path
   *
   * Holds the current path as an array.
   */
  path: string[];

  /**
   * Variable: rotateHtml
   *
   * Switch for rotation of HTML. Default is false.
   */
  rotateHtml: boolean;

  /**
   * Variable: lastX
   *
   * Holds the last x coordinate.
   */
  lastX: number;

  /**
   * Variable: lastY
   *
   * Holds the last y coordinate.
   */
  lastY: number;

  /**
   * Variable: moveOp
   *
   * Contains the string used for moving in paths. Default is 'M'.
   */
  moveOp: string;

  /**
   * Variable: lineOp
   *
   * Contains the string used for moving in paths. Default is 'L'.
   */
  lineOp: string;

  /**
   * Variable: quadOp
   *
   * Contains the string used for quadratic paths. Default is 'Q'.
   */
  quadOp: string;

  /**
   * Variable: curveOp
   *
   * Contains the string used for bezier curves. Default is 'C'.
   */
  curveOp: string;

  /**
   * Variable: closeOp
   *
   * Holds the operator for closing curves. Default is 'Z'.
   */
  closeOp: string;

  /**
   * Variable: pointerEvents
   *
   * Boolean value that specifies if events should be handled. Default is false.
   */
  pointerEvents: boolean;

  /**
   * Function: createUrlConverter
   *
   * Create a new <mxUrlConverter> and returns it.
   */
  createUrlConverter(): mxUrlConverter;

  /**
   * Function: reset
   *
   * Resets the state of this canvas.
   */
  reset(): void;

  /**
   * Function: createState
   *
   * Creates the state of the this canvas.
   */
  createState(): HTMLCanvasElement;

  /**
   * Function: format
   *
   * Rounds all numbers to integers.
   */
  format(value: number): number;

  /**
   * Function: addOp
   *
   * Adds the given operation to the path.
   */
  addOp(): void;

  /**
   * Function: rotatePoint
   *
   * Rotates the given point and returns the result as an <mxPoint>.
   */
  rotatePoint(x: number, y: number, theta: number, cx: number, cy: number);

  /**
   * Function: save
   *
   * Saves the current state.
   */
  save(): void;

  /**
   * Function: restore
   *
   * Restores the current state.
   */
  restore(): void;

  /**
   * Function: setLink
   *
   * Sets the current link. Hook for subclassers.
   */
  setLink(link: string): void;

  /**
   * Function: scale
   *
   * Scales the current state.
   */
  scale(value: number): void;

  /**
   * Function: translate
   *
   * Translates the current state.
   */
  translate(dx: number, dy: number): void;

  /**
   * Function: rotate
   *
   * Rotates the current state.
   */
  rotate(theta: number, flipH: boolean, flipV: boolean, cx: number, cy: number): void;

  /**
   * Function: setAlpha
   *
   * Sets the current alpha.
   */
  setAlpha(value: number): void;

  /**
   * Function: setFillAlpha
   *
   * Sets the current solid fill alpha.
   */
  setFillAlpha(value: number): void;

  /**
   * Function: setStrokeAlpha
   *
   * Sets the current stroke alpha.
   */
  setStrokeAlpha(value: number): void;

  /**
   * Function: setFillColor
   *
   * Sets the current fill color.
   */
  setFillColor(value: string): void;

  /**
   * Function: setGradient
   *
   * Sets the current gradient.
   */
  setGradient(color1: string, color2: string, x: number, y: number, w: number, h: number, direction: string, alpha1: number, alpha2: number): void;

  /**
   * Function: setStrokeColor
   *
   * Sets the current stroke color.
   */
  setStrokeColor(value: string);

  /**
   * Function: setStrokeWidth
   *
   * Sets the current stroke width.
   */
  setStrokeWidth(value: number);

  /**
   * Function: setDashed
   *
   * Enables or disables dashed lines.
   */
  setDashed(value: boolean, fixDash: boolean): void;

  /**
   * Function: setDashPattern
   *
   * Sets the current dash pattern.
   */
  setDashPattern(value: boolean): void;
  /**
   * Function: setLineCap
   *
   * Sets the current line cap.
   */
  setLineCap(value: string): void;

  /**
   * Function: setLineJoin
   *
   * Sets the current line join.
   */
  setLineJoin(value: string): void;

  /**
   * Function: setMiterLimit
   *
   * Sets the current miter limit.
   */
  setMiterLimit(value: number): void;

  /**
   * Function: setFontColor
   *
   * Sets the current font color.
   */
  setFontColor(value: string): void;

  /**
   * Function: setFontColor
   *
   * Sets the current font color.
   */
  setFontBackgroundColor(value: string): void;

  /**
   * Function: setFontColor
   *
   * Sets the current font color.
   */
  setFontBorderColor(value: string): void;

  /**
   * Function: setFontSize
   *
   * Sets the current font size.
   */
  setFontSize(value: number): void;

  /**
   * Function: setFontFamily
   *
   * Sets the current font family.
   */
  setFontFamily(value: string): void;

  /**
   * Function: setFontStyle
   *
   * Sets the current font style.
   */
  setFontStyle(value: string): void;

  /**
   * Function: setShadow
   *
   * Enables or disables and configures the current shadow.
   */
  setShadow(enabled: boolean): void;

  /**
   * Function: setShadowColor
   *
   * Enables or disables and configures the current shadow.
   */
  setShadowColor(value: string): void;

  /**
   * Function: setShadowAlpha
   *
   * Enables or disables and configures the current shadow.
   */
  setShadowAlpha(value: boolean): void;

  /**
   * Function: setShadowOffset
   *
   * Enables or disables and configures the current shadow.
   */
  setShadowOffset(dx: number, dy: number): void;

  /**
   * Function: begin
   *
   * Starts a new path.
   */
  begin();

  /**
   * Function: moveTo
   *
   *  Moves the current path the given coordinates.
   */
  moveTo(x: number, y: number): void;

  /**
   * Function: lineTo
   *
   * Draws a line to the given coordinates. Uses moveTo with the op argument.
   */
  lineTo(x: number, y: number): void;

  /**
   * Function: quadTo
   *
   * Adds a quadratic curve to the current path.
   */
  quadTo(x1: number, y1: number, x2: number, y2: number): void;

  /**
   * Function: curveTo
   *
   * Adds a bezier curve to the current path.
   */
  curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

  /**
   * Function: arcTo
   *
   * Adds the given arc to the current path. This is a synthetic operation that
   * is broken down into curves.
   */
  arcTo(rx: number, ry: number, angle: number, largeArcFlag: number, sweepFlag: number, x: number, y: number): void;

  /**
   * Function: close
   *
   * Closes the current path.
   */
  close(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

  /**
   * Function: end
   *
   * Empty implementation for backwards compatibility. This will be removed.
   */
  end(): void;
}


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


/**
 * Class: mxCellMarker
 *
 * A helper class to process mouse locations and highlight cells.
 *
 * Helper class to highlight cells. To add a cell marker to an existing graph
 * for highlighting all cells, the following code is used:
 *
 * (code)
 * var marker = new mxCellMarker(graph);
 * graph.addMouseListener({
 *   mouseDown: function() {},
 *   mouseMove: function(sender, me)
 *   {
 *     marker.process(me);
 *   },
 *   mouseUp: function() {}
 * });
 * (end)
 *
 * Event: mxEvent.MARK
 *
 * Fires after a cell has been marked or unmarked. The <code>state</code>
 * property contains the marked <mxCellState> or null if no state is marked.
 *
 * Constructor: mxCellMarker
 *
 * Constructs a new cell marker.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 * validColor - Optional marker color for valid states. Default is
 * <mxConstants.DEFAULT_VALID_COLOR>.
 * invalidColor - Optional marker color for invalid states. Default is
 * <mxConstants.DEFAULT_INVALID_COLOR>.
 * hotspot - Portion of the width and hight where a state intersects a
 * given coordinate pair. A value of 0 means always highlight. Default is
 * <mxConstants.DEFAULT_HOTSPOT>.
 */
export class mxCellMarker extends mxEventSource {
  constructor(graph: mxGraph, validColor: string, invalidColor: string, hotspot: number);

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: enabled
   *
   * Specifies if the marker is enabled. Default is true.
   */
  enabled: boolean;

  /**
   * Variable: hotspot
   *
   * Specifies the portion of the width and height that should trigger
   * a highlight. The area around the center of the cell to be marked is used
   * as the hotspot. Possible values are between 0 and 1. Default is
   * mxConstants.DEFAULT_HOTSPOT.
   */
  hotspot: number;

  /**
   * Variable: hotspotEnabled
   *
   * Specifies if the hotspot is enabled. Default is false.
   */
  hotspotEnabled: boolean;

  /**
   * Variable: validColor
   *
   * Holds the valid marker color.
   */
  validColor: string;

  /**
   * Variable: invalidColor
   *
   * Holds the invalid marker color.
   */
  invalidColor: string;

  /**
   * Variable: currentColor
   *
   * Holds the current marker color.
   */
  currentColor: string;

  /**
   * Variable: validState
   *
   * Holds the marked <mxCellState> if it is valid.
   */
  validState: mxCellState;

  /**
   * Variable: markedState
   *
   * Holds the marked <mxCellState>.
   */
  markedState: mxCellState;

  /**
   * Function: setEnabled
   *
   * Enables or disables event handling. This implementation
   * updates <enabled>.
   *
   * Parameters:
   *
   * enabled - Boolean that specifies the new enabled state.
   */
  setEnabled(enabled: boolean): void;

  /**
   * Function: isEnabled
   *
   * Returns true if events are handled. This implementation
   * returns <enabled>.
   */
  isEnabled(): boolean;

  /**
   * Function: setHotspot
   *
   * Sets the <hotspot>.
   */
  setHotspot(hotspot: number): void;

  /**
   * Function: getHotspot
   *
   * Returns the <hotspot>.
   */
  getHotspot(): number;

  /**
   * Function: setHotspotEnabled
   *
   * Specifies whether the hotspot should be used in <intersects>.
   */
  setHotspotEnabled(enabled: boolean): void;

  /**
   * Function: isHotspotEnabled
   *
   * Returns true if hotspot is used in <intersects>.
   */
  isHotspotEnabled(): boolean;

  /**
   * Function: hasValidState
   *
   * Returns true if <validState> is not null.
   */
  hasValidState(): boolean;

  /**
   * Function: getValidState
   *
   * Returns the <validState>.
   */
  getValidState(): mxCellState;

  /**
   * Function: getMarkedState
   *
   * Returns the <markedState>.
   */
  getMarkedState(): mxCellState;

  /**
   * Function: reset
   *
   * Resets the state of the cell marker.
   */
  reset(): void;

  /**
   * Function: process
   *
   * Processes the given event and cell and marks the state returned by
   * <getState> with the color returned by <getMarkerColor>. If the
   * markerColor is not null, then the state is stored in <markedState>. If
   * <isValidState> returns true, then the state is stored in <validState>
   * regardless of the marker color. The state is returned regardless of the
   * marker color and valid state.
   */
  process(me: mxMouseEvent): mxCellState;

  /**
   * Function: setCurrentState
   *
   * Sets and marks the current valid state.
   */
  setCurrentState(state: mxCellState, me: mxMouseEvent, color: string): void;

  /**
   * Function: markCell
   *
   * Marks the given cell using the given color, or <validColor> if no color is specified.
   */
  markCell(cell: mxCell, color: string): void;

  /**
   * Function: mark
   *
   * Marks the <markedState> and fires a <mark> event.
   */
  mark(): void;

  /**
   * Function: unmark
   *
   * Hides the marker and fires a <mark> event.
   */
  unmark(): void;

  /**
   * Function: isValidState
   *
   * Returns true if the given <mxCellState> is a valid state. If this
   * returns true, then the state is stored in <validState>. The return value
   * of this method is used as the argument for <getMarkerColor>.
   */
  isValidState(state: mxCellState): boolean;

  /**
   * Function: getMarkerColor
   *
   * Returns the valid- or invalidColor depending on the value of isValid.
   * The given <mxCellState> is ignored by this implementation.
   */
  getMarkerColor(evt: Event, state: mxCellState, isValid: boolean): string;

  /**
   * Function: getState
   *
   * Uses <getCell>, <getStateToMark> and <intersects> to return the
   * <mxCellState> for the given <mxMouseEvent>.
   */
  getState(me: mxMouseEvent): mxCellState;

  /**
   * Function: getCell
   *
   * Returns the <mxCell> for the given event and cell. This returns the
   * given cell.
   */
  getCell(me: mxMouseEvent): mxCell;

  /**
   * Function: getStateToMark
   *
   * Returns the <mxCellState> to be marked for the given <mxCellState> under
   * the mouse. This returns the given state.
   */
  getStateToMark(state: mxCellState): mxCellState;

  /**
   * Function: intersects
   *
   * Returns true if the given coordinate pair intersects the given state.
   * This returns true if the <hotspot> is 0 or the coordinates are inside
   * the hotspot for the given cell state.
   */
  intersects(state: mxCellState, me: mxMouseEvent): boolean;

  /**
   * Function: destroy
   *
   * Destroys the handler and all its resources and DOM nodes.
   */
  destroy(): void;
}


/**
 * Class: mxCellOverlay
 *
 * Extends <mxEventSource> to implement a graph overlay, represented by an icon
 * and a tooltip. Overlays can handle and fire <click> events and are added to
 * the graph using <mxGraph.addCellOverlay>, and removed using
 * <mxGraph.removeCellOverlay>, or <mxGraph.removeCellOverlays> to remove all overlays.
 * The <mxGraph.getCellOverlays> function returns the array of overlays for a given
 * cell in a graph. If multiple overlays exist for the same cell, then
 * <getBounds> should be overridden in at least one of the overlays.
 *
 * Overlays appear on top of all cells in a special layer. If this is not
 * desirable, then the image must be rendered as part of the shape or label of
 * the cell instead.
 *
 * Example:
 *
 * The following adds a new overlays for a given vertex and selects the cell
 * if the overlay is clicked.
 *
 * (code)
 * var overlay = new mxCellOverlay(img, html);
 * graph.addCellOverlay(vertex, overlay);
 * overlay.addListener(mxEvent.CLICK, function(sender, evt)
 * {
 *   var cell = evt.getProperty('cell');
 *   graph.setSelectionCell(cell);
 * });
 * (end)
 *
 * For cell overlays to be printed use <mxPrintPreview.printOverlays>.
 *
 * Event: mxEvent.CLICK
 *
 * Fires when the user clicks on the overlay. The <code>event</code> property
 * contains the corresponding mouse event and the <code>cell</code> property
 * contains the cell. For touch devices this is fired if the element receives
 * a touchend event.
 *
 * Constructor: mxCellOverlay
 *
 * Constructs a new overlay using the given image and tooltip.
 *
 * Parameters:
 *
 * image - <mxImage> that represents the icon to be displayed.
 * tooltip - Optional string that specifies the tooltip.
 * align - Optional horizontal alignment for the overlay. Possible
 * values are <ALIGN_LEFT>, <ALIGN_CENTER> and <ALIGN_RIGHT>
 * (default).
 * verticalAlign - Vertical alignment for the overlay. Possible
 * values are <ALIGN_TOP>, <ALIGN_MIDDLE> and <ALIGN_BOTTOM>
 * (default).
 */
export class mxCellOverlay extends mxEventSource {
  constructor(image: mxImage, tooltip: string, align: string, verticalAlign: string, offset: mxPoint, cursor: string);
  /**
   * Variable: image
   *
   * Holds the <mxImage> to be used as the icon.
   */
  image: mxImage;

  /**
   * Variable: tooltip
   *
   * Holds the optional string to be used as the tooltip.
   */
  tooltip?: string;

  /**
   * Variable: align
   *
   * Holds the horizontal alignment for the overlay. Default is
   * <mxConstants.ALIGN_RIGHT>. For edges, the overlay always appears in the
   * center of the edge.
   */
  align: string;

  /**
   * Variable: verticalAlign
   *
   * Holds the vertical alignment for the overlay. Default is
   * <mxConstants.ALIGN_BOTTOM>. For edges, the overlay always appears in the
   * center of the edge.
   */
  verticalAlign: string;

  /**
   * Variable: offset
   *
   * Holds the offset as an <mxPoint>. The offset will be scaled according to the
   * current scale.
   */
  offset: mxPoint;

  /**
   * Variable: cursor
   *
   * Holds the cursor for the overlay. Default is 'help'.
   */
  cursor: string;

  /**
   * Variable: defaultOverlap
   *
   * Defines the overlapping for the overlay, that is, the proportional distance
   * from the origin to the point defined by the alignment. Default is 0.5.
   */
  defaultOverlap: number;

  /**
   * Function: getBounds
   *
   * Returns the bounds of the overlay for the given <mxCellState> as an
   * <mxRectangle>. This should be overridden when using multiple overlays
   * per cell so that the overlays do not overlap.
   *
   * The following example will place the overlay along an edge (where
   * x=[-1..1] from the start to the end of the edge and y is the
   * orthogonal offset in px).
   *
   * (code)
   * overlay.getBounds = function(state)
   * {
   *   var bounds = getBounds.apply(this, arguments);
   *
   *   if (state.view.graph.getModel().isEdge(state.cell))
   *   {
   *     var pt = state.view.getPoint(state, {x: 0, y: 0, relative: true});
   *
   *     bounds.x = pt.x - bounds.width / 2;
   *     bounds.y = pt.y - bounds.height / 2;
   *   }
   *
   *   return bounds;
   * };
   * (end)
   *
   * Parameters:
   *
   * state - <mxCellState> that represents the current state of the
   * associated cell.
   */
  getBounds(state: mxCellState): mxRectangle;

  /**
   * Function: toString
   *
   * Returns the textual representation of the overlay to be used as the
   * tooltip. This implementation returns <tooltip>.
   */
  toString(): string;
}

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


/**
 * Class: mxCellState
 *
 * Represents the current state of a cell in a given <mxGraphView>.
 *
 * For edges, the edge label position is stored in <absoluteOffset>.
 *
 * The size for oversize labels can be retrieved using the boundingBox property
 * of the <text> field as shown below.
 *
 * (code)
 * var bbox = (state.text != null) ? state.text.boundingBox : null;
 * (end)
 *
 * Constructor: mxCellState
 *
 * Constructs a new object that represents the current state of the given
 * cell in the specified view.
 *
 * Parameters:
 *
 * view - <mxGraphView> that contains the state.
 * cell - <mxCell> that this state represents.
 * style - Array of key, value pairs that constitute the style.
 */
export class mxCellState extends mxRectangle {

  constructor(view: mxGraphView, cell: mxCell, style: { [key: string]: any });

  /**
   * Variable: view
   *
   * Reference to the enclosing <mxGraphView>.
   */
  view: mxGraphView;

  /**
   * Variable: cell
   *
   * Reference to the <mxCell> that is represented by this state.
   */
  cell: mxCell;

  /**
   * Variable: style
   *
   * Contains an array of key, value pairs that represent the style of the
   * cell.
   */
  style: { [key: string]: any };

  /**
   * Variable: invalid
   *
   * Specifies if the state is invalid. Default is true.
   */
  invalid: boolean;

  /**
   * Variable: origin
   *
   * <mxPoint> that holds the origin for all child cells. Default is a new
   * empty <mxPoint>.
   */
  origin: mxPoint;

  /**
   * Variable: absolutePoints
   *
   * Holds an array of <mxPoints> that represent the absolute points of an
   * edge.
   */
  absolutePoints: mxPoint[];

  /**
   * Variable: absoluteOffset
   *
   * <mxPoint> that holds the absolute offset. For edges, this is the
   * absolute coordinates of the label position. For vertices, this is the
   * offset of the label relative to the top, left corner of the vertex.
   */
  absoluteOffset: mxPoint;

  /**
   * Variable: visibleSourceState
   *
   * Caches the visible source terminal state.
   */
  visibleSourceState: mxCellState;

  /**
   * Variable: visibleTargetState
   *
   * Caches the visible target terminal state.
   */
  visibleTargetState: mxCellState;

  /**
   * Variable: terminalDistance
   *
   * Caches the distance between the end points for an edge.
   */
  terminalDistance: number;

  /**
   * Variable: length
   *
   * Caches the length of an edge.
   */
  length: number;

  /**
   * Variable: segments
   *
   * Array of numbers that represent the cached length of each segment of the
   * edge.
   */
  segments: number[];

  /**
   * Variable: shape
   *
   * Holds the <mxShape> that represents the cell graphically.
   */
  shape: mxShape;

  /**
   * Variable: text
   *
   * Holds the <mxText> that represents the label of the cell. Thi smay be
   * null if the cell has no label.
   */
  text: mxText;

  /**
   * Variable: unscaledWidth
   *
   * Holds the unscaled width of the state.
   */
  unscaledWidth: number;

  /**
   * Function: getPerimeterBounds
   *
   * Returns the <mxRectangle> that should be used as the perimeter of the
   * cell.
   *
   * Parameters:
   *
   * border - Optional border to be added around the perimeter bounds.
   * bounds - Optional <mxRectangle> to be used as the initial bounds.
   */
  getPerimeterBounds(border?: number, bounds?: mxRectangle): mxRectangle;

  /**
   * Function: setAbsoluteTerminalPoint
   *
   * Sets the first or last point in <absolutePoints> depending on isSource.
   *
   * Parameters:
   *
   * point - <mxPoint> that represents the terminal point.
   * isSource - Boolean that specifies if the first or last point should
   * be assigned.
   */
  setAbsoluteTerminalPoint(point: mxPoint, isSource: boolean): void;

  /**
   * Function: setCursor
   *
   * Sets the given cursor on the shape and text shape.
   */
  setCursor(cursor: string): void;

  /**
   * Function: getVisibleTerminal
   *
   * Returns the visible source or target terminal cell.
   *
   * Parameters:
   *
   * source - Boolean that specifies if the source or target cell should be
   * returned.
   */
  getVisibleTerminal(source: boolean): mxCell;

  /**
   * Function: getVisibleTerminalState
   *
   * Returns the visible source or target terminal state.
   *
   * Parameters:
   *
   * source - Boolean that specifies if the source or target state should be
   * returned.
   */
  getVisibleTerminalState(source?: boolean): mxCellState;

  /**
   * Function: setVisibleTerminalState
   *
   * Sets the visible source or target terminal state.
   *
   * Parameters:
   *
   * terminalState - <mxCellState> that represents the terminal.
   * source - Boolean that specifies if the source or target state should be set.
   */
  setVisibleTerminalState(terminalState: mxCellState, source: boolean): void;

  /**
   * Function: getCellBounds
   *
   * Returns the unscaled, untranslated bounds.
   */
  getCellBounds(): mxRectangle;

  /**
   * Function: getPaintBounds
   *
   * Returns the unscaled, untranslated paint bounds. This is the same as
   * <getCellBounds> but with a 90 degree rotation if the shape's
   * isPaintBoundsInverted returns true.
   */
  getPaintBounds(): mxRectangle;

  /**
   * Function: updateCachedBounds
   *
   * Updates the cellBounds and paintBounds.
   */
  updateCachedBounds(): void;

  /**
   * Destructor: setState
   *
   * Copies all fields from the given state to this state.
   */
  setState(state: mxCellState);

  /**
   * Function: clone
   *
   * Returns a clone of this <mxPoint>.
   */
  clone(): mxCellState;

  /**
   * Destructor: destroy
   *
   * Destroys the state and all associated resources.
   */
  destroy(): void;

}


/**
 * Class: mxConnectionConstraint
 *
 * Defines an object that contains the constraints about how to connect one
 * side of an edge to its terminal.
 *
 * Constructor: mxConnectionConstraint
 *
 * Constructs a new connection constraint for the given point and boolean
 * arguments.
 *
 * Parameters:
 *
 * point - Optional <mxPoint> that specifies the fixed location of the point
 * in relative coordinates. Default is null.
 * perimeter - Optional boolean that specifies if the fixed point should be
 * projected onto the perimeter of the terminal. Default is true.
 */
export class mxConnectionConstraint {

  constructor(point: mxPoint, perimeter: boolean, name?: string);

  /**
   * Variable: point
   *
   * <mxPoint> that specifies the fixed location of the connection point.
   */
  point: mxPoint;

  /**
   * Variable: perimeter
   *
   * Boolean that specifies if the point should be projected onto the perimeter
   * of the terminal.
   */
  perimeter: boolean;

  /**
   * Variable: name
   *
   * Optional string that specifies the name of the constraint.
   */
  name: string;
}

/**
 * Class: mxConnectionHandler
 *
 * Graph event handler that creates new connections. Uses <mxTerminalMarker>
 * for finding and highlighting the source and target vertices and
 * <factoryMethod> to create the edge instance. This handler is built-into
 * <mxGraph.connectionHandler> and enabled using <mxGraph.setConnectable>.
 *
 * Example:
 *
 * (code)
 * new mxConnectionHandler(graph, function(source, target, style)
 * {
 *   edge = new mxCell('', new mxGeometry());
 *   edge.setEdge(true);
 *   edge.setStyle(style);
 *   edge.geometry.relative = true;
 *   return edge;
 * });
 * (end)
 *
 * Here is an alternative solution that just sets a specific user object for
 * new edges by overriding <insertEdge>.
 *
 * (code)
 * mxConnectionHandlerInsertEdge = mxConnectionHandler.prototype.insertEdge;
 * mxConnectionHandler.prototype.insertEdge(parent, id, value, source, target, style)
 * {
 *   value = 'Test';
 *
 *   return mxConnectionHandlerInsertEdge.apply(this, arguments);
 * };
 * (end)
 *
 * Using images to trigger connections:
 *
 * This handler uses mxTerminalMarker to find the source and target cell for
 * the new connection and creates a new edge using <connect>. The new edge is
 * created using <createEdge> which in turn uses <factoryMethod> or creates a
 * new default edge.
 *
 * The handler uses a "highlight-paradigm" for indicating if a cell is being
 * used as a source or target terminal, as seen in other diagramming products.
 * In order to allow both, moving and connecting cells at the same time,
 * <mxConstants.DEFAULT_HOTSPOT> is used in the handler to determine the hotspot
 * of a cell, that is, the region of the cell which is used to trigger a new
 * connection. The constant is a value between 0 and 1 that specifies the
 * amount of the width and height around the center to be used for the hotspot
 * of a cell and its default value is 0.5. In addition,
 * <mxConstants.MIN_HOTSPOT_SIZE> defines the minimum number of pixels for the
 * width and height of the hotspot.
 *
 * This solution, while standards compliant, may be somewhat confusing because
 * there is no visual indicator for the hotspot and the highlight is seen to
 * switch on and off while the mouse is being moved in and out. Furthermore,
 * this paradigm does not allow to create different connections depending on
 * the highlighted hotspot as there is only one hotspot per cell and it
 * normally does not allow cells to be moved and connected at the same time as
 * there is no clear indication of the connectable area of the cell.
 *
 * To come across these issues, the handle has an additional <createIcons> hook
 * with a default implementation that allows to create one icon to be used to
 * trigger new connections. If this icon is specified, then new connections can
 * only be created if the image is clicked while the cell is being highlighted.
 * The <createIcons> hook may be overridden to create more than one
 * <mxImageShape> for creating new connections, but the default implementation
 * supports one image and is used as follows:
 *
 * In order to display the "connect image" whenever the mouse is over the cell,
 * an DEFAULT_HOTSPOT of 1 should be used:
 *
 * (code)
 * mxConstants.DEFAULT_HOTSPOT = 1;
 * (end)
 *
 * In order to avoid confusion with the highlighting, the highlight color
 * should not be used with a connect image:
 *
 * (code)
 * mxConstants.HIGHLIGHT_COLOR = null;
 * (end)
 *
 * To install the image, the connectImage field of the mxConnectionHandler must
 * be assigned a new <mxImage> instance:
 *
 * (code)
 * mxConnectionHandler.prototype.connectImage = new mxImage('images/green-dot.gif', 14, 14);
 * (end)
 *
 * This will use the green-dot.gif with a width and height of 14 pixels as the
 * image to trigger new connections. In createIcons the icon field of the
 * handler will be set in order to remember the icon that has been clicked for
 * creating the new connection. This field will be available under selectedIcon
 * in the connect method, which may be overridden to take the icon that
 * triggered the new connection into account. This is useful if more than one
 * icon may be used to create a connection.
 *
 * Group: Events
 *
 * Event: mxEvent.START
 *
 * Fires when a new connection is being created by the user. The <code>state</code>
 * property contains the state of the source cell.
 *
 * Event: mxEvent.CONNECT
 *
 * Fires between begin- and endUpdate in <connect>. The <code>cell</code>
 * property contains the inserted edge, the <code>event</code> and <code>target</code>
 * properties contain the respective arguments that were passed to <connect> (where
 * target corresponds to the dropTarget argument). Finally, the <code>terminal</code>
 * property corresponds to the target argument in <connect> or the clone of the source
 * terminal if <createTarget> is enabled.
 *
 * Note that the target is the cell under the mouse where the mouse button was released.
 * Depending on the logic in the handler, this doesn't necessarily have to be the target
 * of the inserted edge. To print the source, target or any optional ports IDs that the
 * edge is connected to, the following code can be used. To get more details about the
 * actual connection point, <mxGraph.getConnectionConstraint> can be used. To resolve
 * the port IDs, use <mxGraphModel.getCell>.
 *
 * (code)
 * graph.connectionHandler.addListener(mxEvent.CONNECT, function(sender, evt)
 * {
 *   var edge = evt.getProperty('cell');
 *   var source = graph.getModel().getTerminal(edge, true);
 *   var target = graph.getModel().getTerminal(edge, false);
 *
 *   var style = graph.getCellStyle(edge);
 *   var sourcePortId = style[mxConstants.STYLE_SOURCE_PORT];
 *   var targetPortId = style[mxConstants.STYLE_TARGET_PORT];
 *
 *   mxLog.show();
 *   mxLog.debug('connect', edge, source.id, target.id, sourcePortId, targetPortId);
 * });
 * (end)
 *
 * Event: mxEvent.RESET
 *
 * Fires when the <reset> method is invoked.
 *
 * Constructor: mxConnectionHandler
 *
 * Constructs an event handler that connects vertices using the specified
 * factory method to create the new edges. Modify
 * <mxConstants.ACTIVE_REGION> to setup the region on a cell which triggers
 * the creation of a new connection or use connect icons as explained
 * above.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 * factoryMethod - Optional function to create the edge. The function takes
 * the source and target <mxCell> as the first and second argument and an
 * optional cell style from the preview as the third argument. It returns
 * the <mxCell> that represents the new edge.
 */
export class mxConnectionHandler extends mxEventSource {

  constructor(graph: mxGraph, factoryMethod: (source: mxCell, target: mxCell, style?: string) => mxCell);

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: factoryMethod
   *
   * Function that is used for creating new edges. The function takes the
   * source and target <mxCell> as the first and second argument and returns
   * a new <mxCell> that represents the edge. This is used in <createEdge>.
   */
  factoryMethod: (source: mxCell, target: mxCell, style?: string) => mxCell;

  /**
   * Variable: moveIconFront
   *
   * Specifies if icons should be displayed inside the graph container instead
   * of the overlay pane. This is used for HTML labels on vertices which hide
   * the connect icon. This has precendence over <moveIconBack> when set
   * to true. Default is false.
   */
  moveIconFront: boolean;

  /**
   * Variable: moveIconBack
   *
   * Specifies if icons should be moved to the back of the overlay pane. This can
   * be set to true if the icons of the connection handler conflict with other
   * handles, such as the vertex label move handle. Default is false.
   */
  moveIconBack: boolean;

  /**
   * Variable: connectImage
   *
   * <mxImage> that is used to trigger the creation of a new connection. This
   * is used in <createIcons>. Default is null.
   */
  connectImage: mxImage;

  /**
   * Variable: targetConnectImage
   *
   * Specifies if the connect icon should be centered on the target state
   * while connections are being previewed. Default is false.
   */
  targetConnectImage: boolean;

  /**
   * Variable: enabled
   *
   * Specifies if events are handled. Default is true.
   */
  enabled: boolean;

  /**
   * Variable: select
   *
   * Specifies if new edges should be selected. Default is true.
   */
  select: boolean;

  /**
   * Variable: createTarget
   *
   * Specifies if <createTargetVertex> should be called if no target was under the
   * mouse for the new connection. Setting this to true means the connection
   * will be drawn as valid if no target is under the mouse, and
   * <createTargetVertex> will be called before the connection is created between
   * the source cell and the newly created vertex in <createTargetVertex>, which
   * can be overridden to create a new target. Default is false.
   */
  createTarget: boolean;

  /**
   * Variable: marker
   *
   * Holds the <mxTerminalMarker> used for finding source and target cells.
   */
  marker: any;

  /**
   * Variable: constraintHandler
   *
   * Holds the <mxConstraintHandler> used for drawing and highlighting
   * constraints.
   */
  constraintHandler: mxConstraintHandler;

  /**
   * Variable: error
   *
   * Holds the current validation error while connections are being created.
   */
  error: any;

  /**
   * Variable: waypointsEnabled
   *
   * Specifies if single clicks should add waypoints on the new edge. Default is
   * false.
   */
  waypointsEnabled: boolean;

  /**
   * Variable: ignoreMouseDown
   *
   * Specifies if the connection handler should ignore the state of the mouse
   * button when highlighting the source. Default is false, that is, the
   * handler only highlights the source if no button is being pressed.
   */
  ignoreMouseDown: boolean;

  /**
   * Variable: first
   *
   * Holds the <mxPoint> where the mouseDown took place while the handler is
   * active.
   */
  first: mxPoint;

  /**
   * Variable: connectIconOffset
   *
   * Holds the offset for connect icons during connection preview.
   * Default is mxPoint(0, <mxConstants.TOOLTIP_VERTICAL_OFFSET>).
   * Note that placing the icon under the mouse pointer with an
   * offset of (0,0) will affect hit detection.
   */
  connectIconOffset: mxPoint;

  /**
   * Variable: edgeState
   *
   * Optional <mxCellState> that represents the preview edge while the
   * handler is active. This is created in <createEdgeState>.
   */
  edgeState: mxCellState;

  /**
   * Variable: changeHandler
   *
   * Holds the change event listener for later removal.
   */
  changeHandler: any;

  /**
   * Variable: drillHandler
   *
   * Holds the drill event listener for later removal.
   */
  drillHandler: any;

  /**
   * Variable: mouseDownCounter
   *
   * Counts the number of mouseDown events since the start. The initial mouse
   * down event counts as 1.
   */
  mouseDownCounter: number;

  /**
   * Variable: movePreviewAway
   *
   * Switch to enable moving the preview away from the mousepointer. This is required in browsers
   * where the preview cannot be made transparent to events and if the built-in hit detection on
   * the HTML elements in the page should be used. Default is the value of <mxClient.IS_VML>.
   */
  movePreviewAway: boolean;

  /**
   * Variable: outlineConnect
   *
   * Specifies if connections to the outline of a highlighted target should be
   * enabled. This will allow to place the connection point along the outline of
   * the highlighted target. Default is false.
   */
  outlineConnect: boolean;

  /**
   * Variable: livePreview
   *
   * Specifies if the actual shape of the edge state should be used for the preview.
   * Default is false. (Ignored if no edge state is created in <createEdgeState>.)
   */
  livePreview: boolean;

  /**
   * Variable: cursor
   *
   * Specifies the cursor to be used while the handler is active. Default is null.
   */
  cursor: string;

  /**
   * Variable: insertBeforeSource
   *
   * Specifies if new edges should be inserted before the source vertex in the
   * cell hierarchy. Default is false for backwards compatibility.
   */
  insertBeforeSource: boolean;

  /**
   * Function: isEnabled
   *
   * Returns true if events are handled. This implementation
   * returns <enabled>.
   */
  isEnabled(): boolean;

  /**
   * Function: setEnabled
   *
   * Enables or disables event handling. This implementation
   * updates <enabled>.
   *
   * Parameters:
   *
   * enabled - Boolean that specifies the new enabled state.
   */
  setEnabled(enabled: boolean): void;

  /**
   * Function: isInsertBefore
   *
   * Returns <insertBeforeSource> for non-loops and false for loops.
   *
   * Parameters:
   *
   * edge - <mxCell> that represents the edge to be inserted.
   * source - <mxCell> that represents the source terminal.
   * target - <mxCell> that represents the target terminal.
   * evt - Mousedown event of the connect gesture.
   * dropTarget - <mxCell> that represents the cell under the mouse when it was
   * released.
   */
  isInsertBefore(edge: mxCell, source: mxCell, target: mxCell, evt: MouseEvent, dropTarget: mxCell): boolean;

  /**
   * Function: isCreateTarget
   *
   * Returns <createTarget>.
   *
   * Parameters:
   *
   * evt - Current active native pointer event.
   */
  isCreateTarget(evt: Event): boolean;

  /**
   * Function: setCreateTarget
   *
   * Sets <createTarget>.
   */
  setCreateTarget(value: boolean): void;

  /**
   * Function: createShape
   *
   * Creates the preview shape for new connections.
   */
  createShape(): mxShape;

  /**
   * Function: init
   *
   * Initializes the shapes required for this connection handler. This should
   * be invoked if <mxGraph.container> is assigned after the connection
   * handler has been created.
   */
  init(): void;

  /**
   * Function: isConnectableCell
   *
   * Returns true if the given cell is connectable. This is a hook to
   * disable floating connections. This implementation returns true.
   */
  isConnectableCell(cell: mxCell): boolean;

  /**
   * Function: createMarker
   *
   * Creates and returns the <mxCellMarker> used in <marker>.
   */
  createMarker(): mxCellMarker;

  /**
   * Function: start
   *
   * Starts a new connection for the given state and coordinates.
   */
  start(state: mxCellState, x: number, y: number, edgeState: mxCellState): void;

  /**
   * Function: isConnecting
   *
   * Returns true if the source terminal has been clicked and a new
   * connection is currently being previewed.
   */
  isConnecting(): boolean;

  /**
   * Function: isValidSource
   *
   * Returns <mxGraph.isValidSource> for the given source terminal.
   *
   * Parameters:
   *
   * cell - <mxCell> that represents the source terminal.
   * me - <mxMouseEvent> that is associated with this call.
   */
  isValidSource(cell: mxCell, me: mxMouseEvent): boolean;

  /**
   * Function: isValidTarget
   *
   * Returns true. The call to <mxGraph.isValidTarget> is implicit by calling
   * <mxGraph.getEdgeValidationError> in <validateConnection>. This is an
   * additional hook for disabling certain targets in this specific handler.
   *
   * Parameters:
   *
   * cell - <mxCell> that represents the target terminal.
   */
  isValidTarget(cell: mxCell): boolean;

  /**
   * Function: validateConnection
   *
   * Returns the error message or an empty string if the connection for the
   * given source target pair is not valid. Otherwise it returns null. This
   * implementation uses <mxGraph.getEdgeValidationError>.
   *
   * Parameters:
   *
   * source - <mxCell> that represents the source terminal.
   * target - <mxCell> that represents the target terminal.
   */
  validateConnection(source: mxCell, target: mxCell): string;

  /**
   * Function: getConnectImage
   *
   * Hook to return the <mxImage> used for the connection icon of the given
   * <mxCellState>. This implementation returns <connectImage>.
   *
   * Parameters:
   *
   * state - <mxCellState> whose connect image should be returned.
   */
  getConnectImage(state: mxCellState): mxImage;

  /**
   * Function: isMoveIconToFrontForState
   *
   * Returns true if the state has a HTML label in the graph's container, otherwise
   * it returns <moveIconFront>.
   *
   * Parameters:
   *
   * state - <mxCellState> whose connect icons should be returned.
   */
  isMoveIconToFrontForState(state: mxCellState): boolean;

  /**
   * Function: createIcons
   *
   * Creates the array <mxImageShapes> that represent the connect icons for
   * the given <mxCellState>.
   *
   * Parameters:
   *
   * state - <mxCellState> whose connect icons should be returned.
   */
  createIcons(state: mxCellState): mxImageShape[];

  /**
   * Function: redrawIcons
   *
   * Redraws the given array of <mxImageShapes>.
   *
   * Parameters:
   *
   * icons - Optional array of <mxImageShapes> to be redrawn.
   */
  redrawIcons(icons?: mxImageShape[], state?: mxCellState): void;

  /**
   * Function: redrawIcons
   *
   * Redraws the given array of <mxImageShapes>.
   *
   * Parameters:
   *
   * icons - Optional array of <mxImageShapes> to be redrawn.
   */
  getIconPosition(icon?: mxImageShape[], state?: mxCellState): mxPoint;

  /**
   * Function: destroyIcons
   *
   * Destroys the connect icons and resets the respective state.
   */
  destroyIcons(): void;

  /**
   * Function: isStartEvent
   *
   * Returns true if the given mouse down event should start this handler. The
   * This implementation returns true if the event does not force marquee
   * selection, and the currentConstraint and currentFocus of the
   * <constraintHandler> are not null, or <previous> and <error> are not null and
   * <icons> is null or <icons> and <icon> are not null.
   */
  isStartEvent(me: mxMouseEvent): boolean;

  /**
   * Function: mouseDown
   *
   * Handles the event by initiating a new connection.
   */
  mouseDown(sender: Event, me: mxMouseEvent): void;

  /**
   * Function: isImmediateConnectSource
   *
   * Returns true if a tap on the given source state should immediately start
   * connecting. This implementation returns true if the state is not movable
   * in the graph.
   */
  isImmediateConnectSource(state: mxCellState): boolean;

  /**
   * Function: createEdgeState
   *
   * Hook to return an <mxCellState> which may be used during the preview.
   * This implementation returns null.
   *
   * Use the following code to create a preview for an existing edge style:
   *
   * (code)
   * graph.connectionHandler.createEdgeState(me)
   * {
   *   var edge = graph.createEdge(null, null, null, null, null, 'edgeStyle=elbowEdgeStyle');
   *
   *   return new mxCellState(this.graph.view, edge, this.graph.getCellStyle(edge));
   * };
   * (end)
   */
  createEdgeState(me: mxMouseEvent): mxCellState;

  /**
   * Function: isOutlineConnectEvent
   *
   * Returns true if <outlineConnect> is true and the source of the event is the outline shape
   * or shift is pressed.
   */
  isOutlineConnectEvent(me: mxMouseEvent): boolean;

  /**
   * Function: updateCurrentState
   *
   * Updates the current state for a given mouse move event by using
   * the <marker>.
   */
  updateCurrentState(me: mxMouseEvent, point: mxPoint): void;

  /**
   * Function: isCellEnabled
   *
   * Returns true if the given cell does not allow new connections to be created.
   */
  isCellEnabled(cell: mxCell): boolean;

  /**
   * Function: convertWaypoint
   *
   * Converts the given point from screen coordinates to model coordinates.
   */
  convertWaypoint(point: mxPoint): void;

  /**
   * Function: snapToPreview
   *
   * Called to snap the given point to the current preview. This snaps to the
   * first point of the preview if alt is not pressed.
   */
  snapToPreview(me: mxMouseEvent, point: mxPoint): void;

  /**
   * Function: mouseMove
   *
   * Handles the event by updating the preview edge or by highlighting
   * a possible source or target terminal.
   */
  mouseMove(sender: mxMouseEvent, me: mxMouseEvent): void;

  /**
   * Function: updateEdgeState
   *
   * Updates <edgeState>.
   */
  updateEdgeState(current: mxCellState, constraint: mxCellState): void;

  /**
   * Function: getTargetPerimeterPoint
   *
   * Returns the perimeter point for the given target state.
   *
   * Parameters:
   *
   * state - <mxCellState> that represents the target cell state.
   * me - <mxMouseEvent> that represents the mouse move.
   */
  getTargetPerimeterPoint(state: mxCellState, me: mxMouseEvent): mxPoint;

  /**
   * Function: getSourcePerimeterPoint
   *
   * Hook to update the icon position(s) based on a mouseOver event. This is
   * an empty implementation.
   *
   * Parameters:
   *
   * state - <mxCellState> that represents the target cell state.
   * next - <mxPoint> that represents the next point along the previewed edge.
   * me - <mxMouseEvent> that represents the mouse move.
   */
  getSourcePerimeterPoint(state: mxCellState, next: mxPoint, me: mxMouseEvent): mxPoint;


  /**
   * Function: updateIcons
   *
   * Hook to update the icon position(s) based on a mouseOver event. This is
   * an empty implementation.
   *
   * Parameters:
   *
   * state - <mxCellState> under the mouse.
   * icons - Array of currently displayed icons.
   * me - <mxMouseEvent> that contains the mouse event.
   */
  updateIcons(state: mxCellState, icons: string[], me: mxMouseEvent): void;

  /**
   * Function: isStopEvent
   *
   * Returns true if the given mouse up event should stop this handler. The
   * connection will be created if <error> is null. Note that this is only
   * called if <waypointsEnabled> is true. This implemtation returns true
   * if there is a cell state in the given event.
   */
  isStopEvent(me: mxMouseEvent): void;

  /**
   * Function: addWaypoint
   *
   * Adds the waypoint for the given event to <waypoints>.
   */
  addWaypointForEvent(me: mxMouseEvent): void;

  /**
   * Function: mouseUp
   *
   * Handles the event by inserting the new connection.
   */
  mouseUp(sender: mxMouseEvent, me: mxMouseEvent): void;

  /**
   * Function: reset
   *
   * Resets the state of this handler.
   */
  reset(): void;

  /**
   * Function: drawPreview
   *
   * Redraws the preview edge using the color and width returned by
   * <getEdgeColor> and <getEdgeWidth>.
   */
  drawPreview(): void;

  /**
   * Function: getEdgeColor
   *
   * Returns the color used to draw the preview edge. This returns green if
   * there is no edge validation error and red otherwise.
   *
   * Parameters:
   *
   * valid - Boolean indicating if the color for a valid edge should be
   * returned.
   */
  updatePreview(valid: boolean): void;

  /**
   * Function: getEdgeColor
   *
   * Returns the color used to draw the preview edge. This returns green if
   * there is no edge validation error and red otherwise.
   *
   * Parameters:
   *
   * valid - Boolean indicating if the color for a valid edge should be
   * returned.
   */
  getEdgeColor(valid: boolean): string;

  /**
   * Function: getEdgeWidth
   *
   * Returns the width used to draw the preview edge. This returns 3 if
   * there is no edge validation error and 1 otherwise.
   *
   * Parameters:
   *
   * valid - Boolean indicating if the width for a valid edge should be
   * returned.
   */
  getEdgeWidth(valid: boolean): number;

  /**
   * Function: connect
   *
   * Connects the given source and target using a new edge. This
   * implementation uses <createEdge> to create the edge.
   *
   * Parameters:
   *
   * source - <mxCell> that represents the source terminal.
   * target - <mxCell> that represents the target terminal.
   * evt - Mousedown event of the connect gesture.
   * dropTarget - <mxCell> that represents the cell under the mouse when it was
   * released.
   */
  connect(source: mxCell, target: mxCell, evt: MouseEvent, dropTarget: mxCell): void;

  /**
   * Function: selectCells
   *
   * Selects the given edge after adding a new connection. The target argument
   * contains the target vertex if one has been inserted.
   */
  selectCells(edge: mxCell, target: mxCell): void;

  /**
   * Function: insertEdge
   *
   * Creates, inserts and returns the new edge for the given parameters. This
   * implementation does only use <createEdge> if <factoryMethod> is defined,
   * otherwise <mxGraph.insertEdge> will be used.
   */
  insertEdge(parent: mxCell, id: string, value: Element, source: mxCell, target: mxCell, style: string): mxCell;

  /**
   * Function: createTargetVertex
   *
   * Hook method for creating new vertices on the fly if no target was
   * under the mouse. This is only called if <createTarget> is true and
   * returns null.
   *
   * Parameters:
   *
   * evt - Mousedown event of the connect gesture.
   * source - <mxCell> that represents the source terminal.
   */
  createTargetVertex(evt: MouseEvent, source: mxCell): mxCell;

  /**
   * Function: getAlignmentTolerance
   *
   * Returns the tolerance for aligning new targets to sources. This returns the grid size / 2.
   */
  getAlignmentTolerance(evt: MouseEvent): number;

  /**
   * Function: createEdge
   *
   * Creates and returns a new edge using <factoryMethod> if one exists. If
   * no factory method is defined, then a new default edge is returned. The
   * source and target arguments are informal, the actual connection is
   * setup later by the caller of this function.
   *
   * Parameters:
   *
   * value - Value to be used for creating the edge.
   * source - <mxCell> that represents the source terminal.
   * target - <mxCell> that represents the target terminal.
   * style - Optional style from the preview edge.
   */
  createEdge(value: Element, source: mxCell, target: mxCell, style: string): mxCell;

  /**
   * Function: destroy
   *
   * Destroys the handler and all its resources and DOM nodes. This should be
   * called on all instances. It is called automatically for the built-in
   * instance created for each <mxGraph>.
   */
  destroy(): void;

}


/**
 * Class: mxConnector
 *
 * Extends <mxShape> to implement a connector shape. The connector
 * shape allows for arrow heads on either side.
 *
 * This shape is registered under <mxConstants.SHAPE_CONNECTOR> in
 * <mxCellRenderer>.
 *
 * Constructor: mxConnector
 *
 * Constructs a new connector shape.
 *
 * Parameters:
 *
 * points - Array of <mxPoints> that define the points. This is stored in
 * <mxShape.points>.
 * stroke - String that defines the stroke color. This is stored in <stroke>.
 * Default is 'black'.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 1. This is stored in <strokewidth>.
 */
export class mxConnector extends mxPolyline {

  constructor(points: mxPoint[], stroke: string, strokewidth?: number);

  /**
   * Function: updateBoundingBox
   *
   * Updates the <boundingBox> for this shape using <createBoundingBox> and
   * <augmentBoundingBox> and stores the result in <boundingBox>.
   */
  updateBoundingBox(): void;

  /**
   * Function: paintEdgeShape
   *
   * Paints the line shape.
   */
  paintEdgeShape(c: mxAbstractCanvas2D, pts: mxPoint[]): void;

  /**
   * Function: createMarker
   *
   * Prepares the marker by adding offsets in pts and returning a function to
   * paint the marker.
   */
  createMarker(c: mxAbstractCanvas2D, pts: mxPoint[], source: boolean): mxMarker;

  /**
   * Function: augmentBoundingBox
   *
   * Augments the bounding box with the strokewidth and shadow offsets.
   */
  augmentBoundingBox(bbox: mxRectangle): void;
}



export interface mxConstants {
  /**
   * Class: mxConstants
   *
   * Defines various global constants.
   *
   * Variable: DEFAULT_HOTSPOT
   *
   * Defines the portion of the cell which is to be used as a connectable
   * region. Default is 0.3. Possible values are 0 < x <= 1.
   */
  DEFAULT_HOTSPOT: 0.3;

  /**
   * Variable: MIN_HOTSPOT_SIZE
   *
   * Defines the minimum size in pixels of the portion of the cell which is
   * to be used as a connectable region. Default is 8.
   */
  MIN_HOTSPOT_SIZE: 8;

  /**
   * Variable: MAX_HOTSPOT_SIZE
   *
   * Defines the maximum size in pixels of the portion of the cell which is
   * to be used as a connectable region. Use 0 for no maximum. Default is 0.
   */
  MAX_HOTSPOT_SIZE: 0;

  /**
   * Variable: RENDERING_HINT_EXACT
   *
   * Defines the exact rendering hint.
   */
  RENDERING_HINT_EXACT: 'exact';

  /**
   * Variable: RENDERING_HINT_FASTER
   *
   * Defines the faster rendering hint.
   */
  RENDERING_HINT_FASTER: 'faster';

  /**
   * Variable: RENDERING_HINT_FASTEST
   *
   * Defines the fastest rendering hint.
   */
  RENDERING_HINT_FASTEST: 'fastest';

  /**
   * Variable: DIALECT_SVG
   *
   * Defines the SVG display dialect name.
   */
  DIALECT_SVG: 'svg';

  /**
   * Variable: DIALECT_VML
   *
   * Defines the VML display dialect name.
   */
  DIALECT_VML: 'vml';

  /**
   * Variable: DIALECT_MIXEDHTML
   *
   * Defines the mixed HTML display dialect name.
   */
  DIALECT_MIXEDHTML: 'mixedHtml';

  /**
   * Variable: DIALECT_PREFERHTML
   *
   * Defines the preferred HTML display dialect name.
   */
  DIALECT_PREFERHTML: 'preferHtml';

  /**
   * Variable: DIALECT_STRICTHTML
   *
   * Defines the strict HTML display dialect.
   */
  DIALECT_STRICTHTML: 'strictHtml';

  /**
   * Variable: NS_SVG
   *
   * Defines the SVG namespace.
   */
  NS_SVG: 'http://www.w3.org/2000/svg';

  /**
   * Variable: NS_XHTML
   *
   * Defines the XHTML namespace.
   */
  NS_XHTML: 'http://www.w3.org/1999/xhtml';

  /**
   * Variable: NS_XLINK
   *
   * Defines the XLink namespace.
   */
  NS_XLINK: 'http://www.w3.org/1999/xlink';

  /**
   * Variable: SHADOWCOLOR
   *
   * Defines the color to be used to draw shadows in shapes and windows.
   * Default is gray.
   */
  SHADOWCOLOR: 'gray';

  /**
   * Variable: VML_SHADOWCOLOR
   *
   * Used for shadow color in filters where transparency is not supported
   * (Microsoft Internet Explorer). Default is gray.
   */
  VML_SHADOWCOLOR: 'gray';

  /**
   * Variable: SHADOW_OFFSET_X
   *
   * Specifies the x-offset of the shadow. Default is 2.
   */
  SHADOW_OFFSET_X: 2;

  /**
   * Variable: SHADOW_OFFSET_Y
   *
   * Specifies the y-offset of the shadow. Default is 3.
   */
  SHADOW_OFFSET_Y: 3;

  /**
   * Variable: SHADOW_OPACITY
   *
   * Defines the opacity for shadows. Default is 1.
   */
  SHADOW_OPACITY: 1;

  /**
   * Variable: NODETYPE_ELEMENT
   *
   * DOM node of type ELEMENT.
   */
  NODETYPE_ELEMENT: 1;

  /**
   * Variable: NODETYPE_ATTRIBUTE
   *
   * DOM node of type ATTRIBUTE.
   */
  NODETYPE_ATTRIBUTE: 2;

  /**
   * Variable: NODETYPE_TEXT
   *
   * DOM node of type TEXT.
   */
  NODETYPE_TEXT: 3;

  /**
   * Variable: NODETYPE_CDATA
   *
   * DOM node of type CDATA.
   */
  NODETYPE_CDATA: 4;

  /**
   * Variable: NODETYPE_ENTITY_REFERENCE
   *
   * DOM node of type ENTITY_REFERENCE.
   */
  NODETYPE_ENTITY_REFERENCE: 5;

  /**
   * Variable: NODETYPE_ENTITY
   *
   * DOM node of type ENTITY.
   */
  NODETYPE_ENTITY: 6;

  /**
   * Variable: NODETYPE_PROCESSING_INSTRUCTION
   *
   * DOM node of type PROCESSING_INSTRUCTION.
   */
  NODETYPE_PROCESSING_INSTRUCTION: 7;

  /**
   * Variable: NODETYPE_COMMENT
   *
   * DOM node of type COMMENT.
   */
  NODETYPE_COMMENT: 8;

  /**
   * Variable: NODETYPE_DOCUMENT
   *
   * DOM node of type DOCUMENT.
   */
  NODETYPE_DOCUMENT: 9;

  /**
   * Variable: NODETYPE_DOCUMENTTYPE
   *
   * DOM node of type DOCUMENTTYPE.
   */
  NODETYPE_DOCUMENTTYPE: 10;

  /**
   * Variable: NODETYPE_DOCUMENT_FRAGMENT
   *
   * DOM node of type DOCUMENT_FRAGMENT.
   */
  NODETYPE_DOCUMENT_FRAGMENT: 11;

  /**
   * Variable: NODETYPE_NOTATION
   *
   * DOM node of type NOTATION.
   */
  NODETYPE_NOTATION: 12;

  /**
   * Variable: TOOLTIP_VERTICAL_OFFSET
   *
   * Defines the vertical offset for the tooltip.
   * Default is 16.
   */
  TOOLTIP_VERTICAL_OFFSET: 16;

  /**
   * Variable: DEFAULT_VALID_COLOR
   *
   * Specifies the default valid color. Default is #0000FF.
   */
  DEFAULT_VALID_COLOR: '#00FF00';

  /**
   * Variable: DEFAULT_INVALID_COLOR
   *
   * Specifies the default invalid color. Default is #FF0000.
   */
  DEFAULT_INVALID_COLOR: '#FF0000';

  /**
   * Variable: OUTLINE_HIGHLIGHT_COLOR
   *
   * Specifies the default highlight color for shape outlines.
   * Default is #0000FF. This is used in <mxEdgeHandler>.
   */
  OUTLINE_HIGHLIGHT_COLOR: '#00FF00';

  /**
   * Variable: OUTLINE_HIGHLIGHT_COLOR
   *
   * Defines the strokewidth to be used for shape outlines.
   * Default is 5. This is used in <mxEdgeHandler>.
   */
  OUTLINE_HIGHLIGHT_STROKEWIDTH: 5;

  /**
   * Variable: HIGHLIGHT_STROKEWIDTH
   *
   * Defines the strokewidth to be used for the highlights.
   * Default is 3.
   */
  HIGHLIGHT_STROKEWIDTH: 3;

  /**
   * Variable: CONSTRAINT_HIGHLIGHT_SIZE
   *
   * Size of the constraint highlight (in px). Default is 2.
   */
  HIGHLIGHT_SIZE: 2;

  /**
   * Variable: HIGHLIGHT_OPACITY
   *
   * Opacity (in %) used for the highlights (including outline).
   * Default is 100.
   */
  HIGHLIGHT_OPACITY: 100;

  /**
   * Variable: CURSOR_MOVABLE_VERTEX
   *
   * Defines the cursor for a movable vertex. Default is 'move'.
   */
  CURSOR_MOVABLE_VERTEX: 'move';

  /**
   * Variable: CURSOR_MOVABLE_EDGE
   *
   * Defines the cursor for a movable edge. Default is 'move'.
   */
  CURSOR_MOVABLE_EDGE: 'move';

  /**
   * Variable: CURSOR_LABEL_HANDLE
   *
   * Defines the cursor for a movable label. Default is 'default'.
   */
  CURSOR_LABEL_HANDLE: 'default';

  /**
   * Variable: CURSOR_TERMINAL_HANDLE
   *
   * Defines the cursor for a terminal handle. Default is 'pointer'.
   */
  CURSOR_TERMINAL_HANDLE: 'pointer';

  /**
   * Variable: CURSOR_BEND_HANDLE
   *
   * Defines the cursor for a movable bend. Default is 'crosshair'.
   */
  CURSOR_BEND_HANDLE: 'crosshair';

  /**
   * Variable: CURSOR_VIRTUAL_BEND_HANDLE
   *
   * Defines the cursor for a movable bend. Default is 'crosshair'.
   */
  CURSOR_VIRTUAL_BEND_HANDLE: 'crosshair';

  /**
   * Variable: CURSOR_CONNECT
   *
   * Defines the cursor for a connectable state. Default is 'pointer'.
   */
  CURSOR_CONNECT: 'pointer';

  /**
   * Variable: HIGHLIGHT_COLOR
   *
   * Defines the color to be used for the cell highlighting.
   * Use 'none' for no color. Default is #00FF00.
   */
  HIGHLIGHT_COLOR: '#00FF00';

  /**
   * Variable: TARGET_HIGHLIGHT_COLOR
   *
   * Defines the color to be used for highlighting a target cell for a new
   * or changed connection. Note that this may be either a source or
   * target terminal in the graph. Use 'none' for no color.
   * Default is #0000FF.
   */
  CONNECT_TARGET_COLOR: '#0000FF';

  /**
   * Variable: INVALID_CONNECT_TARGET_COLOR
   *
   * Defines the color to be used for highlighting a invalid target cells
   * for a new or changed connections. Note that this may be either a source
   * or target terminal in the graph. Use 'none' for no color. Default is
   * #FF0000.
   */
  INVALID_CONNECT_TARGET_COLOR: '#FF0000';

  /**
   * Variable: DROP_TARGET_COLOR
   *
   * Defines the color to be used for the highlighting target parent cells
   * (for drag and drop). Use 'none' for no color. Default is #0000FF.
   */
  DROP_TARGET_COLOR: '#0000FF';

  /**
   * Variable: VALID_COLOR
   *
   * Defines the color to be used for the coloring valid connection
   * previews. Use 'none' for no color. Default is #FF0000.
   */
  VALID_COLOR: '#00FF00';

  /**
   * Variable: INVALID_COLOR
   *
   * Defines the color to be used for the coloring invalid connection
   * previews. Use 'none' for no color. Default is #FF0000.
   */
  INVALID_COLOR: '#FF0000';

  /**
   * Variable: EDGE_SELECTION_COLOR
   *
   * Defines the color to be used for the selection border of edges. Use
   * 'none' for no color. Default is #00FF00.
   */
  EDGE_SELECTION_COLOR: '#00FF00';

  /**
   * Variable: VERTEX_SELECTION_COLOR
   *
   * Defines the color to be used for the selection border of vertices. Use
   * 'none' for no color. Default is #00FF00.
   */
  VERTEX_SELECTION_COLOR: '#00FF00';

  /**
   * Variable: VERTEX_SELECTION_STROKEWIDTH
   *
   * Defines the strokewidth to be used for vertex selections.
   * Default is 1.
   */
  VERTEX_SELECTION_STROKEWIDTH: 1;

  /**
   * Variable: EDGE_SELECTION_STROKEWIDTH
   *
   * Defines the strokewidth to be used for edge selections.
   * Default is 1.
   */
  EDGE_SELECTION_STROKEWIDTH: 1;

  /**
   * Variable: SELECTION_DASHED
   *
   * Defines the dashed state to be used for the vertex selection
   * border. Default is true.
   */
  VERTEX_SELECTION_DASHED: true;

  /**
   * Variable: SELECTION_DASHED
   *
   * Defines the dashed state to be used for the edge selection
   * border. Default is true.
   */
  EDGE_SELECTION_DASHED: true;

  /**
   * Variable: GUIDE_COLOR
   *
   * Defines the color to be used for the guidelines in mxGraphHandler.
   * Default is #FF0000.
   */
  GUIDE_COLOR: '#FF0000';

  /**
   * Variable: GUIDE_STROKEWIDTH
   *
   * Defines the strokewidth to be used for the guidelines in mxGraphHandler.
   * Default is 1.
   */
  GUIDE_STROKEWIDTH: 1;

  /**
   * Variable: OUTLINE_COLOR
   *
   * Defines the color to be used for the outline rectangle
   * border.  Use 'none' for no color. Default is #0099FF.
   */
  OUTLINE_COLOR: '#0099FF';

  /**
   * Variable: OUTLINE_STROKEWIDTH
   *
   * Defines the strokewidth to be used for the outline rectangle
   * stroke width. Default is 3.
   */
  OUTLINE_STROKEWIDTH: number;

  /**
   * Variable: HANDLE_SIZE
   *
   * Defines the default size for handles. Default is 6.
   */
  HANDLE_SIZE: 6;

  /**
   * Variable: LABEL_HANDLE_SIZE
   *
   * Defines the default size for label handles. Default is 4.
   */
  LABEL_HANDLE_SIZE: 4;

  /**
   * Variable: HANDLE_FILLCOLOR
   *
   * Defines the color to be used for the handle fill color. Use 'none' for
   * no color. Default is #00FF00 (green).
   */
  HANDLE_FILLCOLOR: '#00FF00';

  /**
   * Variable: HANDLE_STROKECOLOR
   *
   * Defines the color to be used for the handle stroke color. Use 'none' for
   * no color. Default is black.
   */
  HANDLE_STROKECOLOR: 'black';

  /**
   * Variable: LABEL_HANDLE_FILLCOLOR
   *
   * Defines the color to be used for the label handle fill color. Use 'none'
   * for no color. Default is yellow.
   */
  LABEL_HANDLE_FILLCOLOR: 'yellow';

  /**
   * Variable: CONNECT_HANDLE_FILLCOLOR
   *
   * Defines the color to be used for the connect handle fill color. Use
   * 'none' for no color. Default is #0000FF (blue).
   */
  CONNECT_HANDLE_FILLCOLOR: '#0000FF';

  /**
   * Variable: LOCKED_HANDLE_FILLCOLOR
   *
   * Defines the color to be used for the locked handle fill color. Use
   * 'none' for no color. Default is #FF0000 (red).
   */
  LOCKED_HANDLE_FILLCOLOR: '#FF0000';

  /**
   * Variable: OUTLINE_HANDLE_FILLCOLOR
   *
   * Defines the color to be used for the outline sizer fill color. Use
   * 'none' for no color. Default is #00FFFF.
   */
  OUTLINE_HANDLE_FILLCOLOR: '#00FFFF';

  /**
   * Variable: OUTLINE_HANDLE_STROKECOLOR
   *
   * Defines the color to be used for the outline sizer stroke color. Use
   * 'none' for no color. Default is #0033FF.
   */
  OUTLINE_HANDLE_STROKECOLOR: '#0033FF';

  /**
   * Variable: DEFAULT_FONTFAMILY
   *
   * Defines the default family for all fonts. Default is Arial,Helvetica.
   */
  DEFAULT_FONTFAMILY: 'Arial,Helvetica';

  /**
   * Variable: DEFAULT_FONTSIZE
   *
   * Defines the default size (in px). Default is 11.
   */
  DEFAULT_FONTSIZE: 11;

  /**
   * Variable: DEFAULT_TEXT_DIRECTION
   *
   * Defines the default value for the <STYLE_TEXT_DIRECTION> if no value is
   * defined for it in the style. Default value is an empty string which means
   * the default system setting is used and no direction is set.
   */
  DEFAULT_TEXT_DIRECTION: '';

  /**
   * Variable: LINE_HEIGHT
   *
   * Defines the default line height for text labels. Default is 1.2.
   */
  LINE_HEIGHT: 1.2;

  /**
   * Variable: WORD_WRAP
   *
   * Defines the CSS value for the word-wrap property. Default is "normal".
   * Change this to "break-word" to allow long words to be able to be broken
   * and wrap onto the next line.
   */
  WORD_WRAP: 'normal';

  /**
   * Variable: ABSOLUTE_LINE_HEIGHT
   *
   * Specifies if absolute line heights should be used (px) in CSS. Default
   * is false. Set this to true for backwards compatibility.
   */
  ABSOLUTE_LINE_HEIGHT: false;

  /**
   * Variable: DEFAULT_FONTSTYLE
   *
   * Defines the default style for all fonts. Default is 0. This can be set
   * to any combination of font styles as follows.
   *
   * (code)
   * mxConstants.DEFAULT_FONTSTYLE = mxConstants.FONT_BOLD | mxConstants.FONT_ITALIC;
   * (end)
   */
  DEFAULT_FONTSTYLE: 0;

  /**
   * Variable: DEFAULT_STARTSIZE
   *
   * Defines the default start size for swimlanes. Default is 40.
   */
  DEFAULT_STARTSIZE: 40;

  /**
   * Variable: DEFAULT_MARKERSIZE
   *
   * Defines the default size for all markers. Default is 6.
   */
  DEFAULT_MARKERSIZE: 6;

  /**
   * Variable: DEFAULT_IMAGESIZE
   *
   * Defines the default width and height for images used in the
   * label shape. Default is 24.
   */
  DEFAULT_IMAGESIZE: 24;

  /**
   * Variable: ENTITY_SEGMENT
   *
   * Defines the length of the horizontal segment of an Entity Relation.
   * This can be overridden using <mxConstants.STYLE_SEGMENT> style.
   * Default is 30.
   */
  ENTITY_SEGMENT: 30;

  /**
   * Variable: RECTANGLE_ROUNDING_FACTOR
   *
   * Defines the rounding factor for rounded rectangles in percent between
   * 0 and 1. Values should be smaller than 0.5. Default is 0.15.
   */
  RECTANGLE_ROUNDING_FACTOR: 0.15;

  /**
   * Variable: LINE_ARCSIZE
   *
   * Defines the size of the arcs for rounded edges. Default is 20.
   */
  LINE_ARCSIZE: 20;

  /**
   * Variable: ARROW_SPACING
   *
   * Defines the spacing between the arrow shape and its terminals. Default is 0.
   */
  ARROW_SPACING: 0;

  /**
   * Variable: ARROW_WIDTH
   *
   * Defines the width of the arrow shape. Default is 30.
   */
  ARROW_WIDTH: 30;

  /**
   * Variable: ARROW_SIZE
   *
   * Defines the size of the arrowhead in the arrow shape. Default is 30.
   */
  ARROW_SIZE: 30;

  /**
   * Variable: PAGE_FORMAT_A4_PORTRAIT
   *
   * Defines the rectangle for the A4 portrait page format. The dimensions
   * of this page format are 826x1169 pixels.
   */
  PAGE_FORMAT_A4_PORTRAIT: mxRectangle;

  /**
   * Variable: PAGE_FORMAT_A4_PORTRAIT
   *
   * Defines the rectangle for the A4 portrait page format. The dimensions
   * of this page format are 826x1169 pixels.
   */
  PAGE_FORMAT_A4_LANDSCAPE: mxRectangle;

  /**
   * Variable: PAGE_FORMAT_LETTER_PORTRAIT
   *
   * Defines the rectangle for the Letter portrait page format. The
   * dimensions of this page format are 850x1100 pixels.
   */
  PAGE_FORMAT_LETTER_PORTRAIT: mxRectangle;

  /**
   * Variable: PAGE_FORMAT_LETTER_PORTRAIT
   *
   * Defines the rectangle for the Letter portrait page format. The dimensions
   * of this page format are 850x1100 pixels.
   */
  PAGE_FORMAT_LETTER_LANDSCAPE: mxRectangle;

  /**
   * Variable: NONE
   *
   * Defines the value for none. Default is "none".
   */
  NONE: 'none';

  /**
   * Variable: STYLE_PERIMETER
   *
   * Defines the key for the perimeter style. This is a function that defines
   * the perimeter around a particular shape. Possible values are the
   * functions defined in <mxPerimeter>. Alternatively, the constants in this
   * class that start with "PERIMETER_" may be used to access
   * perimeter styles in <mxStyleRegistry>. Value is "perimeter".
   */
  STYLE_PERIMETER: 'perimeter';

  /**
   * Variable: STYLE_SOURCE_PORT
   *
   * Defines the ID of the cell that should be used for computing the
   * perimeter point of the source for an edge. This allows for graphically
   * connecting to a cell while keeping the actual terminal of the edge.
   * Value is "sourcePort".
   */
  STYLE_SOURCE_PORT: 'sourcePort';

  /**
   * Variable: STYLE_TARGET_PORT
   *
   * Defines the ID of the cell that should be used for computing the
   * perimeter point of the target for an edge. This allows for graphically
   * connecting to a cell while keeping the actual terminal of the edge.
   * Value is "targetPort".
   */
  STYLE_TARGET_PORT: 'targetPort';

  /**
   * Variable: STYLE_PORT_CONSTRAINT
   *
   * Defines the direction(s) that edges are allowed to connect to cells in.
   * Possible values are "DIRECTION_NORTH, DIRECTION_SOUTH,
   * DIRECTION_EAST" and "DIRECTION_WEST". Value is
   * "portConstraint".
   */
  STYLE_PORT_CONSTRAINT: 'portConstraint';

  /**
   * Variable: STYLE_PORT_CONSTRAINT_ROTATION
   *
   * Define whether port constraint directions are rotated with vertex
   * rotation. 0 (default) causes port constraints to remain absolute,
   * relative to the graph, 1 causes the constraints to rotate with
   * the vertex. Value is "portConstraintRotation".
   */
  STYLE_PORT_CONSTRAINT_ROTATION: 'portConstraintRotation';

  /**
   * Variable: STYLE_SOURCE_PORT_CONSTRAINT
   *
   * Defines the direction(s) that edges are allowed to connect to sources in.
   * Possible values are "DIRECTION_NORTH, DIRECTION_SOUTH, DIRECTION_EAST"
   * and "DIRECTION_WEST". Value is "sourcePortConstraint".
   */
  STYLE_SOURCE_PORT_CONSTRAINT: 'sourcePortConstraint';

  /**
   * Variable: STYLE_TARGET_PORT_CONSTRAINT
   *
   * Defines the direction(s) that edges are allowed to connect to targets in.
   * Possible values are "DIRECTION_NORTH, DIRECTION_SOUTH, DIRECTION_EAST"
   * and "DIRECTION_WEST". Value is "targetPortConstraint".
   */
  STYLE_TARGET_PORT_CONSTRAINT: 'targetPortConstraint';

  /**
   * Variable: STYLE_OPACITY
   *
   * Defines the key for the opacity style. The type of the value is
   * numeric and the possible range is 0-100. Value is "opacity".
   */
  STYLE_OPACITY: 'opacity';

  /**
   * Variable: STYLE_FILL_OPACITY
   *
   * Defines the key for the fill opacity style. The type of the value is
   * numeric and the possible range is 0-100. Value is "fillOpacity".
   */
  STYLE_FILL_OPACITY: 'fillOpacity';

  /**
   * Variable: STYLE_STROKE_OPACITY
   *
   * Defines the key for the stroke opacity style. The type of the value is
   * numeric and the possible range is 0-100. Value is "strokeOpacity".
   */
  STYLE_STROKE_OPACITY: 'strokeOpacity';

  /**
   * Variable: STYLE_TEXT_OPACITY
   *
   * Defines the key for the text opacity style. The type of the value is
   * numeric and the possible range is 0-100. Value is "textOpacity".
   */
  STYLE_TEXT_OPACITY: 'textOpacity';

  /**
   * Variable: STYLE_TEXT_DIRECTION
   *
   * Defines the key for the text direction style. Possible values are
   * "TEXT_DIRECTION_DEFAULT, TEXT_DIRECTION_AUTO, TEXT_DIRECTION_LTR"
   * and "TEXT_DIRECTION_RTL". Value is "textDirection".
   * The default value for the style is defined in <DEFAULT_TEXT_DIRECTION>.
   * It is used is no value is defined for this key in a given style. This is
   * an experimental style that is currently ignored in the backends.
   */
  STYLE_TEXT_DIRECTION: 'textDirection';

  /**
   * Variable: STYLE_OVERFLOW
   *
   * Defines the key for the overflow style. Possible values are 'visible';
   * 'hidden', 'fill' and 'width'. The default value is 'visible'. This value
   * specifies how overlapping vertex labels are handled. A value of
   * 'visible' will show the complete label. A value of 'hidden' will clip
   * the label so that it does not overlap the vertex bounds. A value of
   * 'fill' will use the vertex bounds and a value of 'width' will use the
   * the vertex width for the label. See <mxGraph.isLabelClipped>. Note that
   * the vertical alignment is ignored for overflow fill and for horizontal
   * alignment, left should be used to avoid pixel offsets in Internet Explorer
   * 11 and earlier or if foreignObjects are disabled. Value is "overflow".
   */
  STYLE_OVERFLOW: 'overflow';

  /**
   * Variable: STYLE_ORTHOGONAL
   *
   * Defines if the connection points on either end of the edge should be
   * computed so that the edge is vertical or horizontal if possible and
   * if the point is not at a fixed location. Default is false. This is
   * used in <mxGraph.isOrthogonal>, which also returns true if the edgeStyle
   * of the edge is an elbow or entity. Value is "orthogonal".
   */
  STYLE_ORTHOGONAL: 'orthogonal';

  /**
   * Variable: STYLE_EXIT_X
   *
   * Defines the key for the horizontal relative coordinate connection point
   * of an edge with its source terminal. Value is "exitX".
   */
  STYLE_EXIT_X: 'exitX';

  /**
   * Variable: STYLE_EXIT_Y
   *
   * Defines the key for the vertical relative coordinate connection point
   * of an edge with its source terminal. Value is "exitY".
   */
  STYLE_EXIT_Y: 'exitY';

  /**
   * Variable: STYLE_EXIT_PERIMETER
   *
   * Defines if the perimeter should be used to find the exact entry point
   * along the perimeter of the source. Possible values are 0 (false) and
   * 1 (true). Default is 1 (true). Value is "exitPerimeter".
   */
  STYLE_EXIT_PERIMETER: 'exitPerimeter';

  /**
   * Variable: STYLE_ENTRY_X
   *
   * Defines the key for the horizontal relative coordinate connection point
   * of an edge with its target terminal. Value is "entryX".
   */
  STYLE_ENTRY_X: 'entryX';

  /**
   * Variable: STYLE_ENTRY_Y
   *
   * Defines the key for the vertical relative coordinate connection point
   * of an edge with its target terminal. Value is "entryY".
   */
  STYLE_ENTRY_Y: 'entryY';

  /**
   * Variable: STYLE_ENTRY_PERIMETER
   *
   * Defines if the perimeter should be used to find the exact entry point
   * along the perimeter of the target. Possible values are 0 (false) and
   * 1 (true). Default is 1 (true). Value is "entryPerimeter".
   */
  STYLE_ENTRY_PERIMETER: 'entryPerimeter';

  /**
   * Variable: STYLE_WHITE_SPACE
   *
   * Defines the key for the white-space style. Possible values are 'nowrap'
   * and 'wrap'. The default value is 'nowrap'. This value specifies how
   * white-space inside a HTML vertex label should be handled. A value of
   * 'nowrap' means the text will never wrap to the next line until a
   * linefeed is encountered. A value of 'wrap' means text will wrap when
   * necessary. This style is only used for HTML labels.
   * See <mxGraph.isWrapping>. Value is "whiteSpace".
   */
  STYLE_WHITE_SPACE: 'whiteSpace';

  /**
   * Variable: STYLE_ROTATION
   *
   * Defines the key for the rotation style. The type of the value is
   * numeric and the possible range is 0-360. Value is "rotation".
   */
  STYLE_ROTATION: 'rotation';

  /**
   * Variable: STYLE_FILLCOLOR
   *
   * Defines the key for the fill color. Possible values are all HTML color
   * names or HEX codes, as well as special keywords such as 'swimlane;
   * 'inherit' or 'indicated' to use the color code of a related cell or the
   * indicator shape. Value is "fillColor".
   */
  STYLE_FILLCOLOR: 'fillColor';

  /**
   * Variable: STYLE_POINTER_EVENTS
   *
   * Specifies if pointer events should be fired on transparent backgrounds.
   * This style is currently only supported in <mxRectangleShape>. Default
   * is true. Value is "pointerEvents". This is typically set to
   * false in groups where the transparent part should allow any underlying
   * cells to be clickable.
   */
  STYLE_POINTER_EVENTS: 'pointerEvents';

  /**
   * Variable: STYLE_SWIMLANE_FILLCOLOR
   *
   * Defines the key for the fill color of the swimlane background. Possible
   * values are all HTML color names or HEX codes. Default is no background.
   * Value is "swimlaneFillColor".
   */
  STYLE_SWIMLANE_FILLCOLOR: 'swimlaneFillColor';

  /**
   * Variable: STYLE_MARGIN
   *
   * Defines the key for the margin between the ellipses in the double ellipse shape.
   * Possible values are all positive numbers. Value is "margin".
   */
  STYLE_MARGIN: 'margin';

  /**
   * Variable: STYLE_GRADIENTCOLOR
   *
   * Defines the key for the gradient color. Possible values are all HTML color
   * names or HEX codes, as well as special keywords such as 'swimlane;
   * 'inherit' or 'indicated' to use the color code of a related cell or the
   * indicator shape. This is ignored if no fill color is defined. Value is
   * "gradientColor".
   */
  STYLE_GRADIENTCOLOR: 'gradientColor';

  /**
   * Variable: STYLE_GRADIENT_DIRECTION
   *
   * Defines the key for the gradient direction. Possible values are
   * <DIRECTION_EAST>, <DIRECTION_WEST>, <DIRECTION_NORTH> and
   * <DIRECTION_SOUTH>. Default is <DIRECTION_SOUTH>. Generally, and by
   * default in mxGraph, gradient painting is done from the value of
   * <STYLE_FILLCOLOR> to the value of <STYLE_GRADIENTCOLOR>. Taking the
   * example of <DIRECTION_NORTH>, this means <STYLE_FILLCOLOR> color at the
   * bottom of paint pattern and <STYLE_GRADIENTCOLOR> at top, with a
   * gradient in-between. Value is "gradientDirection".
   */
  STYLE_GRADIENT_DIRECTION: 'gradientDirection';

  /**
   * Variable: STYLE_STROKECOLOR
   *
   * Defines the key for the strokeColor style. Possible values are all HTML
   * color names or HEX codes, as well as special keywords such as 'swimlane;
   * 'inherit', 'indicated' to use the color code of a related cell or the
   * indicator shape or 'none' for no color. Value is "strokeColor".
   */
  STYLE_STROKECOLOR: 'strokeColor';

  /**
   * Variable: STYLE_SEPARATORCOLOR
   *
   * Defines the key for the separatorColor style. Possible values are all
   * HTML color names or HEX codes. This style is only used for
   * <SHAPE_SWIMLANE> shapes. Value is "separatorColor".
   */
  STYLE_SEPARATORCOLOR: 'separatorColor';

  /**
   * Variable: STYLE_STROKEWIDTH
   *
   * Defines the key for the strokeWidth style. The type of the value is
   * numeric and the possible range is any non-negative value larger or equal
   * to 1. The value defines the stroke width in pixels. Note: To hide a
   * stroke use strokeColor none. Value is "strokeWidth".
   */
  STYLE_STROKEWIDTH: 'strokeWidth';

  /**
   * Variable: STYLE_ALIGN
   *
   * Defines the key for the align style. Possible values are <ALIGN_LEFT>;
   * <ALIGN_CENTER> and <ALIGN_RIGHT>. This value defines how the lines of
   * the label are horizontally aligned. <ALIGN_LEFT> mean label text lines
   * are aligned to left of the label bounds, <ALIGN_RIGHT> to the right of
   * the label bounds and <ALIGN_CENTER> means the center of the text lines
   * are aligned in the center of the label bounds. Note this value doesn't
   * affect the positioning of the overall label bounds relative to the
   * vertex, to move the label bounds horizontally, use
   * <STYLE_LABEL_POSITION>. Value is "align".
   */
  STYLE_ALIGN: 'align';

  /**
   * Variable: STYLE_VERTICAL_ALIGN
   *
   * Defines the key for the verticalAlign style. Possible values are
   * <ALIGN_TOP>, <ALIGN_MIDDLE> and <ALIGN_BOTTOM>. This value defines how
   * the lines of the label are vertically aligned. <ALIGN_TOP> means the
   * topmost label text line is aligned against the top of the label bounds;
   * <ALIGN_BOTTOM> means the bottom-most label text line is aligned against
   * the bottom of the label bounds and <ALIGN_MIDDLE> means there is equal
   * spacing between the topmost text label line and the top of the label
   * bounds and the bottom-most text label line and the bottom of the label
   * bounds. Note this value doesn't affect the positioning of the overall
   * label bounds relative to the vertex, to move the label bounds
   * vertically, use <STYLE_VERTICAL_LABEL_POSITION>. Value is "verticalAlign".
   */
  STYLE_VERTICAL_ALIGN: 'verticalAlign';

  /**
   * Variable: STYLE_LABEL_WIDTH
   *
   * Defines the key for the width of the label if the label position is not
   * center. Value is "labelWidth".
   */
  STYLE_LABEL_WIDTH: 'labelWidth';

  /**
   * Variable: STYLE_LABEL_POSITION
   *
   * Defines the key for the horizontal label position of vertices. Possible
   * values are <ALIGN_LEFT>, <ALIGN_CENTER> and <ALIGN_RIGHT>. Default is
   * <ALIGN_CENTER>. The label align defines the position of the label
   * relative to the cell. <ALIGN_LEFT> means the entire label bounds is
   * placed completely just to the left of the vertex, <ALIGN_RIGHT> means
   * adjust to the right and <ALIGN_CENTER> means the label bounds are
   * vertically aligned with the bounds of the vertex. Note this value
   * doesn't affect the positioning of label within the label bounds, to move
   * the label horizontally within the label bounds, use <STYLE_ALIGN>.
   * Value is "labelPosition".
   */
  STYLE_LABEL_POSITION: 'labelPosition';

  /**
   * Variable: STYLE_VERTICAL_LABEL_POSITION
   *
   * Defines the key for the vertical label position of vertices. Possible
   * values are <ALIGN_TOP>, <ALIGN_BOTTOM> and <ALIGN_MIDDLE>. Default is
   * <ALIGN_MIDDLE>. The label align defines the position of the label
   * relative to the cell. <ALIGN_TOP> means the entire label bounds is
   * placed completely just on the top of the vertex, <ALIGN_BOTTOM> means
   * adjust on the bottom and <ALIGN_MIDDLE> means the label bounds are
   * horizontally aligned with the bounds of the vertex. Note this value
   * doesn't affect the positioning of label within the label bounds, to move
   * the label vertically within the label bounds, use
   * <STYLE_VERTICAL_ALIGN>. Value is "verticalLabelPosition".
   */
  STYLE_VERTICAL_LABEL_POSITION: 'verticalLabelPosition';

  /**
   * Variable: STYLE_IMAGE_ASPECT
   *
   * Defines the key for the image aspect style. Possible values are 0 (do
   * not preserve aspect) or 1 (keep aspect). This is only used in
   * <mxImageShape>. Default is 1. Value is "imageAspect".
   */
  STYLE_IMAGE_ASPECT: 'imageAspect';

  /**
   * Variable: STYLE_IMAGE_ALIGN
   *
   * Defines the key for the align style. Possible values are <ALIGN_LEFT>;
   * <ALIGN_CENTER> and <ALIGN_RIGHT>. The value defines how any image in the
   * vertex label is aligned horizontally within the label bounds of a
   * <SHAPE_LABEL> shape. Value is "imageAlign".
   */
  STYLE_IMAGE_ALIGN: 'imageAlign';

  /**
   * Variable: STYLE_IMAGE_VERTICAL_ALIGN
   *
   * Defines the key for the verticalAlign style. Possible values are
   * <ALIGN_TOP>, <ALIGN_MIDDLE> and <ALIGN_BOTTOM>. The value defines how
   * any image in the vertex label is aligned vertically within the label
   * bounds of a <SHAPE_LABEL> shape. Value is "imageVerticalAlign".
   */
  STYLE_IMAGE_VERTICAL_ALIGN: 'imageVerticalAlign';

  /**
   * Variable: STYLE_GLASS
   *
   * Defines the key for the glass style. Possible values are 0 (disabled) and
   * 1(enabled). The default value is 0. This is used in <mxLabel>. Value is
   * "glass".
   */
  STYLE_GLASS: 'glass';

  /**
   * Variable: STYLE_IMAGE
   *
   * Defines the key for the image style. Possible values are any image URL;
   * the type of the value is String. This is the path to the image that is
   * to be displayed within the label of a vertex. Data URLs should use the
   * following format: data:image/png,xyz where xyz is the base64 encoded
   * data (without the "base64"-prefix). Note that Data URLs are only
   * supported in modern browsers. Value is "image".
   */
  STYLE_IMAGE: 'image';

  /**
   * Variable: STYLE_IMAGE_WIDTH
   *
   * Defines the key for the imageWidth style. The type of this value is
   * int, the value is the image width in pixels and must be greater than 0.
   * Value is "imageWidth".
   */
  STYLE_IMAGE_WIDTH: 'imageWidth';

  /**
   * Variable: STYLE_IMAGE_HEIGHT
   *
   * Defines the key for the imageHeight style. The type of this value is
   * int, the value is the image height in pixels and must be greater than 0.
   * Value is "imageHeight".
   */
  STYLE_IMAGE_HEIGHT: 'imageHeight';

  /**
   * Variable: STYLE_IMAGE_BACKGROUND
   *
   * Defines the key for the image background color. This style is only used
   * in <mxImageShape>. Possible values are all HTML color names or HEX
   * codes. Value is "imageBackground".
   */
  STYLE_IMAGE_BACKGROUND: 'imageBackground';

  /**
   * Variable: STYLE_IMAGE_BORDER
   *
   * Defines the key for the image border color. This style is only used in
   * <mxImageShape>. Possible values are all HTML color names or HEX codes.
   * Value is "imageBorder".
   */
  STYLE_IMAGE_BORDER: 'imageBorder';

  /**
   * Variable: STYLE_FLIPH
   *
   * Defines the key for the horizontal image flip. This style is only used
   * in <mxImageShape>. Possible values are 0 and 1. Default is 0. Value is
   * "flipH".
   */
  STYLE_FLIPH: 'flipH';

  /**
   * Variable: STYLE_FLIPV
   *
   * Defines the key for the vertical flip. Possible values are 0 and 1.
   * Default is 0. Value is "flipV".
   */
  STYLE_FLIPV: 'flipV';

  /**
   * Variable: STYLE_NOLABEL
   *
   * Defines the key for the noLabel style. If this is true then no label is
   * visible for a given cell. Possible values are true or false (1 or 0).
   * Default is false. Value is "noLabel".
   */
  STYLE_NOLABEL: 'noLabel';

  /**
   * Variable: STYLE_NOEDGESTYLE
   *
   * Defines the key for the noEdgeStyle style. If this is true then no edge
   * style is applied for a given edge. Possible values are true or false
   * (1 or 0). Default is false. Value is "noEdgeStyle".
   */
  STYLE_NOEDGESTYLE: 'noEdgeStyle';

  /**
   * Variable: STYLE_LABEL_BACKGROUNDCOLOR
   *
   * Defines the key for the label background color. Possible values are all
   * HTML color names or HEX codes. Value is "labelBackgroundColor".
   */
  STYLE_LABEL_BACKGROUNDCOLOR: 'labelBackgroundColor';

  /**
   * Variable: STYLE_LABEL_BORDERCOLOR
   *
   * Defines the key for the label border color. Possible values are all
   * HTML color names or HEX codes. Value is "labelBorderColor".
   */
  STYLE_LABEL_BORDERCOLOR: 'labelBorderColor';

  /**
   * Variable: STYLE_LABEL_PADDING
   *
   * Defines the key for the label padding, ie. the space between the label
   * border and the label. Value is "labelPadding".
   */
  STYLE_LABEL_PADDING: 'labelPadding';

  /**
   * Variable: STYLE_INDICATOR_SHAPE
   *
   * Defines the key for the indicator shape used within an <mxLabel>.
   * Possible values are all SHAPE_* constants or the names of any new
   * shapes. The indicatorShape has precedence over the indicatorImage.
   * Value is "indicatorShape".
   */
  STYLE_INDICATOR_SHAPE: 'indicatorShape';

  /**
   * Variable: STYLE_INDICATOR_IMAGE
   *
   * Defines the key for the indicator image used within an <mxLabel>.
   * Possible values are all image URLs. The indicatorShape has
   * precedence over the indicatorImage. Value is "indicatorImage".
   */
  STYLE_INDICATOR_IMAGE: 'indicatorImage';

  /**
   * Variable: STYLE_INDICATOR_COLOR
   *
   * Defines the key for the indicatorColor style. Possible values are all
   * HTML color names or HEX codes, as well as the special 'swimlane' keyword
   * to refer to the color of the parent swimlane if one exists. Value is
   * "indicatorColor".
   */
  STYLE_INDICATOR_COLOR: 'indicatorColor';

  /**
   * Variable: STYLE_INDICATOR_STROKECOLOR
   *
   * Defines the key for the indicator stroke color in <mxLabel>.
   * Possible values are all color codes. Value is "indicatorStrokeColor".
   */
  STYLE_INDICATOR_STROKECOLOR: 'indicatorStrokeColor';

  /**
   * Variable: STYLE_INDICATOR_GRADIENTCOLOR
   *
   * Defines the key for the indicatorGradientColor style. Possible values
   * are all HTML color names or HEX codes. This style is only supported in
   * <SHAPE_LABEL> shapes. Value is "indicatorGradientColor".
   */
  STYLE_INDICATOR_GRADIENTCOLOR: 'indicatorGradientColor';

  /**
   * Variable: STYLE_INDICATOR_SPACING
   *
   * The defines the key for the spacing between the label and the
   * indicator in <mxLabel>. Possible values are in pixels. Value is
   * "indicatorSpacing".
   */
  STYLE_INDICATOR_SPACING: 'indicatorSpacing';

  /**
   * Variable: STYLE_INDICATOR_WIDTH
   *
   * Defines the key for the indicator width. Possible values start at 0 (in
   * pixels). Value is "indicatorWidth".
   */
  STYLE_INDICATOR_WIDTH: 'indicatorWidth';

  /**
   * Variable: STYLE_INDICATOR_HEIGHT
   *
   * Defines the key for the indicator height. Possible values start at 0 (in
   * pixels). Value is "indicatorHeight".
   */
  STYLE_INDICATOR_HEIGHT: 'indicatorHeight';

  /**
   * Variable: STYLE_INDICATOR_DIRECTION
   *
   * Defines the key for the indicatorDirection style. The direction style is
   * used to specify the direction of certain shapes (eg. <mxTriangle>).
   * Possible values are <DIRECTION_EAST> (default), <DIRECTION_WEST>;
   * <DIRECTION_NORTH> and <DIRECTION_SOUTH>. Value is "indicatorDirection".
   */
  STYLE_INDICATOR_DIRECTION: 'indicatorDirection';

  /**
   * Variable: STYLE_SHADOW
   *
   * Defines the key for the shadow style. The type of the value is Boolean.
   * Value is "shadow".
   */
  STYLE_SHADOW: 'shadow';

  /**
   * Variable: STYLE_SEGMENT
   *
   * Defines the key for the segment style. The type of this value is float
   * and the value represents the size of the horizontal segment of the
   * entity relation style. Default is ENTITY_SEGMENT. Value is "segment".
   */
  STYLE_SEGMENT: 'segment';

  /**
   * Variable: STYLE_ENDARROW
   *
   * Defines the key for the end arrow marker. Possible values are all
   * constants with an ARROW-prefix. This is only used in <mxConnector>.
   * Value is "endArrow".
   *
   * Example:
   * (code)
   * style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_CLASSIC;
   * (end)
   */
  STYLE_ENDARROW: 'endArrow';

  /**
   * Variable: STYLE_STARTARROW
   *
   * Defines the key for the start arrow marker. Possible values are all
   * constants with an ARROW-prefix. This is only used in <mxConnector>.
   * See <STYLE_ENDARROW>. Value is "startArrow".
   */
  STYLE_STARTARROW: 'startArrow';

  /**
   * Variable: STYLE_ENDSIZE
   *
   * Defines the key for the endSize style. The type of this value is numeric
   * and the value represents the size of the end marker in pixels. Value is
   * "endSize".
   */
  STYLE_ENDSIZE: 'endSize';

  /**
   * Variable: STYLE_STARTSIZE
   *
   * Defines the key for the startSize style. The type of this value is
   * numeric and the value represents the size of the start marker or the
   * size of the swimlane title region depending on the shape it is used for.
   * Value is "startSize".
   */
  STYLE_STARTSIZE: 'startSize';

  /**
   * Variable: STYLE_SWIMLANE_LINE
   *
   * Defines the key for the swimlaneLine style. This style specifies whether
   * the line between the title regio of a swimlane should be visible. Use 0
   * for hidden or 1 (default) for visible. Value is "swimlaneLine".
   */
  STYLE_SWIMLANE_LINE: 'swimlaneLine';

  /**
   * Variable: STYLE_ENDFILL
   *
   * Defines the key for the endFill style. Use 0 for no fill or 1 (default)
   * for fill. (This style is only exported via <mxImageExport>.) Value is
   * "endFill".
   */
  STYLE_ENDFILL: 'endFill';

  /**
   * Variable: STYLE_STARTFILL
   *
   * Defines the key for the startFill style. Use 0 for no fill or 1 (default)
   * for fill. (This style is only exported via <mxImageExport>.) Value is
   * "startFill".
   */
  STYLE_STARTFILL: 'startFill';

  /**
   * Variable: STYLE_DASHED
   *
   * Defines the key for the dashed style. Use 0 (default) for non-dashed or 1
   * for dashed. Value is "dashed".
   */
  STYLE_DASHED: 'dashed';

  /**
   * Defines the key for the dashed pattern style in SVG and image exports.
   * The type of this value is a space separated list of numbers that specify
   * a custom-defined dash pattern. Dash styles are defined in terms of the
   * length of the dash (the drawn part of the stroke) and the length of the
   * space between the dashes. The lengths are relative to the line width: a
   * length of "1" is equal to the line width. VML ignores this style and
   * uses dashStyle instead as defined in the VML specification. This style
   * is only used in the <mxConnector> shape. Value is "dashPattern".
   */
  STYLE_DASH_PATTERN: 'dashPattern';

  /**
   * Variable: STYLE_FIX_DASH
   *
   * Defines the key for the fixDash style. Use 0 (default) for dash patterns
   * that depend on the linewidth and 1 for dash patterns that ignore the
   * line width. Value is "fixDash".
   */
  STYLE_FIX_DASH: 'fixDash';

  /**
   * Variable: STYLE_ROUNDED
   *
   * Defines the key for the rounded style. The type of this value is
   * Boolean. For edges this determines whether or not joins between edges
   * segments are smoothed to a rounded finish. For vertices that have the
   * rectangle shape, this determines whether or not the rectangle is
   * rounded. Use 0 (default) for non-rounded or 1 for rounded. Value is
   * "rounded".
   */
  STYLE_ROUNDED: 'rounded';

  /**
   * Variable: STYLE_CURVED
   *
   * Defines the key for the curved style. The type of this value is
   * Boolean. It is only applicable for connector shapes. Use 0 (default)
   * for non-curved or 1 for curved. Value is "curved".
   */
  STYLE_CURVED: 'curved';

  /**
   * Variable: STYLE_ARCSIZE
   *
   * Defines the rounding factor for a rounded rectangle in percent (without
   * the percent sign). Possible values are between 0 and 100. If this value
   * is not specified then RECTANGLE_ROUNDING_FACTOR * 100 is used. For
   * edges, this defines the absolute size of rounded corners in pixels. If
   * this values is not specified then LINE_ARCSIZE is used.
   * (This style is only exported via <mxImageExport>.) Value is "arcSize".
   */
  STYLE_ARCSIZE: 'arcSize';

  /**
   * Variable: STYLE_ABSOLUTE_ARCSIZE
   *
   * Defines the key for the absolute arc size style. This specifies if
   * arcSize for rectangles is abolute or relative. Possible values are 1
   * and 0 (default). Value is "absoluteArcSize".
   */
  STYLE_ABSOLUTE_ARCSIZE: 'absoluteArcSize';

  /**
   * Variable: STYLE_SOURCE_PERIMETER_SPACING
   *
   * Defines the key for the source perimeter spacing. The type of this value
   * is numeric. This is the distance between the source connection point of
   * an edge and the perimeter of the source vertex in pixels. This style
   * only applies to edges. Value is "sourcePerimeterSpacing".
   */
  STYLE_SOURCE_PERIMETER_SPACING: 'sourcePerimeterSpacing';

  /**
   * Variable: STYLE_TARGET_PERIMETER_SPACING
   *
   * Defines the key for the target perimeter spacing. The type of this value
   * is numeric. This is the distance between the target connection point of
   * an edge and the perimeter of the target vertex in pixels. This style
   * only applies to edges. Value is "targetPerimeterSpacing".
   */
  STYLE_TARGET_PERIMETER_SPACING: 'targetPerimeterSpacing';

  /**
   * Variable: STYLE_PERIMETER_SPACING
   *
   * Defines the key for the perimeter spacing. This is the distance between
   * the connection point and the perimeter in pixels. When used in a vertex
   * style, this applies to all incoming edges to floating ports (edges that
   * terminate on the perimeter of the vertex). When used in an edge style;
   * this spacing applies to the source and target separately, if they
   * terminate in floating ports (on the perimeter of the vertex). Value is
   * "perimeterSpacing".
   */
  STYLE_PERIMETER_SPACING: 'perimeterSpacing';

  /**
   * Variable: STYLE_SPACING
   *
   * Defines the key for the spacing. The value represents the spacing, in
   * pixels, added to each side of a label in a vertex (style applies to
   * vertices only). Value is "spacing".
   */
  STYLE_SPACING: 'spacing';

  /**
   * Variable: STYLE_SPACING_TOP
   *
   * Defines the key for the spacingTop style. The value represents the
   * spacing, in pixels, added to the top side of a label in a vertex (style
   * applies to vertices only). Value is "spacingTop".
   */
  STYLE_SPACING_TOP: 'spacingTop';

  /**
   * Variable: STYLE_SPACING_LEFT
   *
   * Defines the key for the spacingLeft style. The value represents the
   * spacing, in pixels, added to the left side of a label in a vertex (style
   * applies to vertices only). Value is "spacingLeft".
   */
  STYLE_SPACING_LEFT: 'spacingLeft';

  /**
   * Variable: STYLE_SPACING_BOTTOM
   *
   * Defines the key for the spacingBottom style The value represents the
   * spacing, in pixels, added to the bottom side of a label in a vertex
   * (style applies to vertices only). Value is "spacingBottom".
   */
  STYLE_SPACING_BOTTOM: 'spacingBottom';

  /**
   * Variable: STYLE_SPACING_RIGHT
   *
   * Defines the key for the spacingRight style The value represents the
   * spacing, in pixels, added to the right side of a label in a vertex (style
   * applies to vertices only). Value is "spacingRight".
   */
  STYLE_SPACING_RIGHT: 'spacingRight';

  /**
   * Variable: STYLE_HORIZONTAL
   *
   * Defines the key for the horizontal style. Possible values are
   * true or false. This value only applies to vertices. If the <STYLE_SHAPE>
   * is "SHAPE_SWIMLANE" a value of false indicates that the
   * swimlane should be drawn vertically, true indicates to draw it
   * horizontally. If the shape style does not indicate that this vertex is a
   * swimlane, this value affects only whether the label is drawn
   * horizontally or vertically. Value is "horizontal".
   */
  STYLE_HORIZONTAL: 'horizontal';

  /**
   * Variable: STYLE_DIRECTION
   *
   * Defines the key for the direction style. The direction style is used
   * to specify the direction of certain shapes (eg. <mxTriangle>).
   * Possible values are <DIRECTION_EAST> (default), <DIRECTION_WEST>;
   * <DIRECTION_NORTH> and <DIRECTION_SOUTH>. Value is "direction".
   */
  STYLE_DIRECTION: 'direction';

  /**
   * Variable: STYLE_ANCHOR_POINT_DIRECTION
   *
   * Defines the key for the anchorPointDirection style. The defines if the
   * direction style should be taken into account when computing the fixed
   * point location for connected edges. Default is 1 (yes). Set this to 0
   * to ignore the direction style for fixed connection points. Value is
   * "anchorPointDirection".
   */
  STYLE_ANCHOR_POINT_DIRECTION: 'anchorPointDirection';

  /**
   * Variable: STYLE_ELBOW
   *
   * Defines the key for the elbow style. Possible values are
   * <ELBOW_HORIZONTAL> and <ELBOW_VERTICAL>. Default is <ELBOW_HORIZONTAL>.
   * This defines how the three segment orthogonal edge style leaves its
   * terminal vertices. The vertical style leaves the terminal vertices at
   * the top and bottom sides. Value is "elbow".
   */
  STYLE_ELBOW: 'elbow';

  /**
   * Variable: STYLE_FONTCOLOR
   *
   * Defines the key for the fontColor style. Possible values are all HTML
   * color names or HEX codes. Value is "fontColor".
   */
  STYLE_FONTCOLOR: 'fontColor';

  /**
   * Variable: STYLE_FONTFAMILY
   *
   * Defines the key for the fontFamily style. Possible values are names such
   * as Arial; Dialog; Verdana; Times New Roman. The value is of type String.
   * Value is fontFamily.
   */
  STYLE_FONTFAMILY: 'fontFamily';

  /**
   * Variable: STYLE_FONTSIZE
   *
   * Defines the key for the fontSize style (in px). The type of the value
   * is int. Value is "fontSize".
   */
  STYLE_FONTSIZE: 'fontSize';

  /**
   * Variable: STYLE_FONTSTYLE
   *
   * Defines the key for the fontStyle style. Values may be any logical AND
   * (sum) of <FONT_BOLD>, <FONT_ITALIC> and <FONT_UNDERLINE>.
   * The type of the value is int. Value is "fontStyle".
   */
  STYLE_FONTSTYLE: 'fontStyle';

  /**
   * Variable: STYLE_ASPECT
   *
   * Defines the key for the aspect style. Possible values are empty or fixed.
   * If fixed is used then the aspect ratio of the cell will be maintained
   * when resizing. Default is empty. Value is "aspect".
   */
  STYLE_ASPECT: 'aspect';

  /**
   * Variable: STYLE_AUTOSIZE
   *
   * Defines the key for the autosize style. This specifies if a cell should be
   * resized automatically if the value has changed. Possible values are 0 or 1.
   * Default is 0. See <mxGraph.isAutoSizeCell>. This is normally combined with
   * <STYLE_RESIZABLE> to disable manual sizing. Value is "autosize".
   */
  STYLE_AUTOSIZE: 'autosize';

  /**
   * Variable: STYLE_FOLDABLE
   *
   * Defines the key for the foldable style. This specifies if a cell is foldable
   * using a folding icon. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellFoldable>. Value is "foldable".
   */
  STYLE_FOLDABLE: 'foldable';

  /**
   * Variable: STYLE_EDITABLE
   *
   * Defines the key for the editable style. This specifies if the value of
   * a cell can be edited using the in-place editor. Possible values are 0 or
   * 1. Default is 1. See <mxGraph.isCellEditable>. Value is "editable".
   */
  STYLE_EDITABLE: 'editable';

  /**
   * Variable: STYLE_BACKGROUND_OUTLINE
   *
   * Defines the key for the backgroundOutline style. This specifies if a
   * only the background of a cell should be painted when it is highlighted.
   * Possible values are 0 or 1. Default is 0. Value is "backgroundOutline".
   */
  STYLE_BACKGROUND_OUTLINE: 'backgroundOutline';

  /**
   * Variable: STYLE_BENDABLE
   *
   * Defines the key for the bendable style. This specifies if the control
   * points of an edge can be moved. Possible values are 0 or 1. Default is
   * 1. See <mxGraph.isCellBendable>. Value is "bendable".
   */
  STYLE_BENDABLE: 'bendable';

  /**
   * Variable: STYLE_MOVABLE
   *
   * Defines the key for the movable style. This specifies if a cell can
   * be moved. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellMovable>. Value is "movable".
   */
  STYLE_MOVABLE: 'movable';

  /**
   * Variable: STYLE_RESIZABLE
   *
   * Defines the key for the resizable style. This specifies if a cell can
   * be resized. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellResizable>. Value is "resizable".
   */
  STYLE_RESIZABLE: 'resizable';

  /**
   * Variable: STYLE_RESIZE_WIDTH
   *
   * Defines the key for the resizeWidth style. This specifies if a cell's
   * width is resized if the parent is resized. If this is 1 then the width
   * will be resized even if the cell's geometry is relative. If this is 0
   * then the cell's width will not be resized. Default is not defined. Value
   * is "resizeWidth".
   */
  STYLE_RESIZE_WIDTH: 'resizeWidth';

  /**
   * Variable: STYLE_RESIZE_WIDTH
   *
   * Defines the key for the resizeHeight style. This specifies if a cell's
   * height if resize if the parent is resized. If this is 1 then the height
   * will be resized even if the cell's geometry is relative. If this is 0
   * then the cell's height will not be resized. Default is not defined. Value
   * is "resizeHeight".
   */
  STYLE_RESIZE_HEIGHT: 'resizeHeight';

  /**
   * Variable: STYLE_ROTATABLE
   *
   * Defines the key for the rotatable style. This specifies if a cell can
   * be rotated. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellRotatable>. Value is "rotatable".
   */
  STYLE_ROTATABLE: 'rotatable';

  /**
   * Variable: STYLE_CLONEABLE
   *
   * Defines the key for the cloneable style. This specifies if a cell can
   * be cloned. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellCloneable>. Value is "cloneable".
   */
  STYLE_CLONEABLE: 'cloneable';

  /**
   * Variable: STYLE_DELETABLE
   *
   * Defines the key for the deletable style. This specifies if a cell can be
   * deleted. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellDeletable>. Value is "deletable".
   */
  STYLE_DELETABLE: 'deletable';

  /**
   * Variable: STYLE_SHAPE
   *
   * Defines the key for the shape. Possible values are all constants with
   * a SHAPE-prefix or any newly defined shape names. Value is "shape".
   */
  STYLE_SHAPE: 'shape';

  /**
   * Variable: STYLE_EDGE
   *
   * Defines the key for the edge style. Possible values are the functions
   * defined in <mxEdgeStyle>. Value is "edgeStyle".
   */
  STYLE_EDGE: 'edgeStyle';

  /**
   * Variable: STYLE_JETTY_SIZE
   *
   * Defines the key for the jetty size in <mxEdgeStyle.OrthConnector>.
   * Default is 10. Possible values are all numeric values or "auto".
   * Value is "jettySize".
   */
  STYLE_JETTY_SIZE: 'jettySize';

  /**
   * Variable: STYLE_SOURCE_JETTY_SIZE
   *
   * Defines the key for the jetty size in <mxEdgeStyle.OrthConnector>.
   * Default is 10. Possible values are numeric values or "auto". This has
   * precedence over <STYLE_JETTY_SIZE>. Value is "sourceJettySize".
   */
  STYLE_SOURCE_JETTY_SIZE: 'sourceJettySize';

  /**
   * Variable: targetJettySize
   *
   * Defines the key for the jetty size in <mxEdgeStyle.OrthConnector>.
   * Default is 10. Possible values are numeric values or "auto". This has
   * precedence over <STYLE_JETTY_SIZE>. Value is "targetJettySize".
   */
  STYLE_TARGET_JETTY_SIZE: 'targetJettySize';

  /**
   * Variable: STYLE_LOOP
   *
   * Defines the key for the loop style. Possible values are the functions
   * defined in <mxEdgeStyle>. Value is "loopStyle".
   */
  STYLE_LOOP: 'loopStyle';

  /**
   * Variable: STYLE_ORTHOGONAL_LOOP
   *
   * Defines the key for the orthogonal loop style. Possible values are 0 and
   * 1. Default is 0. Value is "orthogonalLoop". Use this style to specify
   * if loops should be routed using an orthogonal router. Currently, this
   * uses <mxEdgeStyle.OrthConnector> but will be replaced with a dedicated
   * orthogonal loop router in later releases.
   */
  STYLE_ORTHOGONAL_LOOP: 'orthogonalLoop';

  /**
   * Variable: STYLE_ROUTING_CENTER_X
   *
   * Defines the key for the horizontal routing center. Possible values are
   * between -0.5 and 0.5. This is the relative offset from the center used
   * for connecting edges. The type of this value is numeric. Value is
   * "routingCenterX".
   */
  STYLE_ROUTING_CENTER_X: 'routingCenterX';

  /**
   * Variable: STYLE_ROUTING_CENTER_Y
   *
   * Defines the key for the vertical routing center. Possible values are
   * between -0.5 and 0.5. This is the relative offset from the center used
   * for connecting edges. The type of this value is numeric. Value is
   * "routingCenterY".
   */
  STYLE_ROUTING_CENTER_Y: 'routingCenterY';

  /**
   * Variable: FONT_BOLD
   *
   * Constant for bold fonts. Default is 1.
   */
  FONT_BOLD: 1;

  /**
   * Variable: FONT_ITALIC
   *
   * Constant for italic fonts. Default is 2.
   */
  FONT_ITALIC: 2;

  /**
   * Variable: FONT_UNDERLINE
   *
   * Constant for underlined fonts. Default is 4.
   */
  FONT_UNDERLINE: 4;

  /**
   * Variable: SHAPE_RECTANGLE
   *
   * Name under which <mxRectangleShape> is registered in <mxCellRenderer>.
   * Default is rectangle.
   */
  SHAPE_RECTANGLE: 'rectangle';

  /**
   * Variable: SHAPE_ELLIPSE
   *
   * Name under which <mxEllipse> is registered in <mxCellRenderer>.
   * Default is ellipse.
   */
  SHAPE_ELLIPSE: 'ellipse';

  /**
   * Variable: SHAPE_DOUBLE_ELLIPSE
   *
   * Name under which <mxDoubleEllipse> is registered in <mxCellRenderer>.
   * Default is doubleEllipse.
   */
  SHAPE_DOUBLE_ELLIPSE: 'doubleEllipse';

  /**
   * Variable: SHAPE_RHOMBUS
   *
   * Name under which <mxRhombus> is registered in <mxCellRenderer>.
   * Default is rhombus.
   */
  SHAPE_RHOMBUS: 'rhombus';

  /**
   * Variable: SHAPE_LINE
   *
   * Name under which <mxLine> is registered in <mxCellRenderer>.
   * Default is line.
   */
  SHAPE_LINE: 'line';

  /**
   * Variable: SHAPE_IMAGE
   *
   * Name under which <mxImageShape> is registered in <mxCellRenderer>.
   * Default is image.
   */
  SHAPE_IMAGE: 'image';

  /**
   * Variable: SHAPE_ARROW
   *
   * Name under which <mxArrow> is registered in <mxCellRenderer>.
   * Default is arrow.
   */
  SHAPE_ARROW: 'arrow';

  /**
   * Variable: SHAPE_ARROW_CONNECTOR
   *
   * Name under which <mxArrowConnector> is registered in <mxCellRenderer>.
   * Default is arrowConnector.
   */
  SHAPE_ARROW_CONNECTOR: 'arrowConnector';

  /**
   * Variable: SHAPE_LABEL
   *
   * Name under which <mxLabel> is registered in <mxCellRenderer>.
   * Default is label.
   */
  SHAPE_LABEL: 'label';

  /**
   * Variable: SHAPE_CYLINDER
   *
   * Name under which <mxCylinder> is registered in <mxCellRenderer>.
   * Default is cylinder.
   */
  SHAPE_CYLINDER: 'cylinder';

  /**
   * Variable: SHAPE_SWIMLANE
   *
   * Name under which <mxSwimlane> is registered in <mxCellRenderer>.
   * Default is swimlane.
   */
  SHAPE_SWIMLANE: 'swimlane';

  /**
   * Variable: SHAPE_CONNECTOR
   *
   * Name under which <mxConnector> is registered in <mxCellRenderer>.
   * Default is connector.
   */
  SHAPE_CONNECTOR: 'connector';

  /**
   * Variable: SHAPE_ACTOR
   *
   * Name under which <mxActor> is registered in <mxCellRenderer>.
   * Default is actor.
   */
  SHAPE_ACTOR: 'actor';

  /**
   * Variable: SHAPE_CLOUD
   *
   * Name under which <mxCloud> is registered in <mxCellRenderer>.
   * Default is cloud.
   */
  SHAPE_CLOUD: 'cloud';

  /**
   * Variable: SHAPE_TRIANGLE
   *
   * Name under which <mxTriangle> is registered in <mxCellRenderer>.
   * Default is triangle.
   */
  SHAPE_TRIANGLE: 'triangle';

  /**
   * Variable: SHAPE_HEXAGON
   *
   * Name under which <mxHexagon> is registered in <mxCellRenderer>.
   * Default is hexagon.
   */
  SHAPE_HEXAGON: 'hexagon';

  /**
   * Variable: ARROW_CLASSIC
   *
   * Constant for classic arrow markers.
   */
  ARROW_CLASSIC: 'classic';

  /**
   * Variable: ARROW_CLASSIC_THIN
   *
   * Constant for thin classic arrow markers.
   */
  ARROW_CLASSIC_THIN: 'classicThin';

  /**
   * Variable: ARROW_BLOCK
   *
   * Constant for block arrow markers.
   */
  ARROW_BLOCK: 'block';

  /**
   * Variable: ARROW_BLOCK_THIN
   *
   * Constant for thin block arrow markers.
   */
  ARROW_BLOCK_THIN: 'blockThin';

  /**
   * Variable: ARROW_OPEN
   *
   * Constant for open arrow markers.
   */
  ARROW_OPEN: 'open';

  /**
   * Variable: ARROW_OPEN_THIN
   *
   * Constant for thin open arrow markers.
   */
  ARROW_OPEN_THIN: 'openThin';

  /**
   * Variable: ARROW_OVAL
   *
   * Constant for oval arrow markers.
   */
  ARROW_OVAL: 'oval';

  /**
   * Variable: ARROW_DIAMOND
   *
   * Constant for diamond arrow markers.
   */
  ARROW_DIAMOND: 'diamond';

  /**
   * Variable: ARROW_DIAMOND_THIN
   *
   * Constant for thin diamond arrow markers.
   */
  ARROW_DIAMOND_THIN: 'diamondThin';

  /**
   * Variable: ALIGN_LEFT
   *
   * Constant for left horizontal alignment. Default is left.
   */
  ALIGN_LEFT: 'left';

  /**
   * Variable: ALIGN_CENTER
   *
   * Constant for center horizontal alignment. Default is center.
   */
  ALIGN_CENTER: 'center';

  /**
   * Variable: ALIGN_RIGHT
   *
   * Constant for right horizontal alignment. Default is right.
   */
  ALIGN_RIGHT: 'right';

  /**
   * Variable: ALIGN_TOP
   *
   * Constant for top vertical alignment. Default is top.
   */
  ALIGN_TOP: 'top';

  /**
   * Variable: ALIGN_MIDDLE
   *
   * Constant for middle vertical alignment. Default is middle.
   */
  ALIGN_MIDDLE: 'middle';

  /**
   * Variable: ALIGN_BOTTOM
   *
   * Constant for bottom vertical alignment. Default is bottom.
   */
  ALIGN_BOTTOM: 'bottom';

  /**
   * Variable: DIRECTION_NORTH
   *
   * Constant for direction north. Default is north.
   */
  DIRECTION_NORTH: 'north';

  /**
   * Variable: DIRECTION_SOUTH
   *
   * Constant for direction south. Default is south.
   */
  DIRECTION_SOUTH: 'south';

  /**
   * Variable: DIRECTION_EAST
   *
   * Constant for direction east. Default is east.
   */
  DIRECTION_EAST: 'east';

  /**
   * Variable: DIRECTION_WEST
   *
   * Constant for direction west. Default is west.
   */
  DIRECTION_WEST: 'west';

  /**
   * Variable: TEXT_DIRECTION_DEFAULT
   *
   * Constant for text direction default. Default is an empty string. Use
   * this value to use the default text direction of the operating system.
   */
  TEXT_DIRECTION_DEFAULT: '';

  /**
   * Variable: TEXT_DIRECTION_AUTO
   *
   * Constant for text direction automatic. Default is auto. Use this value
   * to find the direction for a given text with <mxText.getAutoDirection>.
   */
  TEXT_DIRECTION_AUTO: 'auto';

  /**
   * Variable: TEXT_DIRECTION_LTR
   *
   * Constant for text direction left to right. Default is ltr. Use this
   * value for left to right text direction.
   */
  TEXT_DIRECTION_LTR: 'ltr';

  /**
   * Variable: TEXT_DIRECTION_RTL
   *
   * Constant for text direction right to left. Default is rtl. Use this
   * value for right to left text direction.
   */
  TEXT_DIRECTION_RTL: 'rtl';

  /**
   * Variable: DIRECTION_MASK_NONE
   *
   * Constant for no direction.
   */
  DIRECTION_MASK_NONE: 0;

  /**
   * Variable: DIRECTION_MASK_WEST
   *
   * Bitwise mask for west direction.
   */
  DIRECTION_MASK_WEST: 1;

  /**
   * Variable: DIRECTION_MASK_NORTH
   *
   * Bitwise mask for north direction.
   */
  DIRECTION_MASK_NORTH: 2;

  /**
   * Variable: DIRECTION_MASK_SOUTH
   *
   * Bitwise mask for south direction.
   */
  DIRECTION_MASK_SOUTH: 4;

  /**
   * Variable: DIRECTION_MASK_EAST
   *
   * Bitwise mask for east direction.
   */
  DIRECTION_MASK_EAST: 8;

  /**
   * Variable: DIRECTION_MASK_ALL
   *
   * Bitwise mask for all directions.
   */
  DIRECTION_MASK_ALL: 15;

  /**
   * Variable: ELBOW_VERTICAL
   *
   * Constant for elbow vertical. Default is horizontal.
   */
  ELBOW_VERTICAL: 'vertical';

  /**
   * Variable: ELBOW_HORIZONTAL
   *
   * Constant for elbow horizontal. Default is horizontal.
   */
  ELBOW_HORIZONTAL: 'horizontal';

  /**
   * Variable: EDGESTYLE_ELBOW
   *
   * Name of the elbow edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  EDGESTYLE_ELBOW: 'elbowEdgeStyle';

  /**
   * Variable: EDGESTYLE_ENTITY_RELATION
   *
   * Name of the entity relation edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  EDGESTYLE_ENTITY_RELATION: 'entityRelationEdgeStyle';

  /**
   * Variable: EDGESTYLE_LOOP
   *
   * Name of the loop edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  EDGESTYLE_LOOP: 'loopEdgeStyle';

  /**
   * Variable: EDGESTYLE_SIDETOSIDE
   *
   * Name of the side to side edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  EDGESTYLE_SIDETOSIDE: 'sideToSideEdgeStyle';

  /**
   * Variable: EDGESTYLE_TOPTOBOTTOM
   *
   * Name of the top to bottom edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  EDGESTYLE_TOPTOBOTTOM: 'topToBottomEdgeStyle';

  /**
   * Variable: EDGESTYLE_ORTHOGONAL
   *
   * Name of the generic orthogonal edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  EDGESTYLE_ORTHOGONAL: 'orthogonalEdgeStyle';

  /**
   * Variable: EDGESTYLE_SEGMENT
   *
   * Name of the generic segment edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  EDGESTYLE_SEGMENT: 'segmentEdgeStyle';

  /**
   * Variable: PERIMETER_ELLIPSE
   *
   * Name of the ellipse perimeter. Can be used as a string value
   * for the STYLE_PERIMETER style.
   */
  PERIMETER_ELLIPSE: 'ellipsePerimeter';

  /**
   * Variable: PERIMETER_RECTANGLE
   *
   * Name of the rectangle perimeter. Can be used as a string value
   * for the STYLE_PERIMETER style.
   */
  PERIMETER_RECTANGLE: 'rectanglePerimeter';

  /**
   * Variable: PERIMETER_RHOMBUS
   *
   * Name of the rhombus perimeter. Can be used as a string value
   * for the STYLE_PERIMETER style.
   */
  PERIMETER_RHOMBUS: 'rhombusPerimeter';

  /**
   * Variable: PERIMETER_HEXAGON
   *
   * Name of the hexagon perimeter. Can be used as a string value
   * for the STYLE_PERIMETER style.
   */
  PERIMETER_HEXAGON: 'hexagonPerimeter';

  /**
   * Variable: PERIMETER_TRIANGLE
   *
   * Name of the triangle perimeter. Can be used as a string value
   * for the STYLE_PERIMETER style.
   */
  PERIMETER_TRIANGLE: 'trianglePerimeter'

}

export type mxDialectConstants = 'svg' | 'vml' | 'mixedHtml' | 'preferHtml' | 'strictHtml';

/**
 * Class: mxConstraintHandler
 *
 * Handles constraints on connection targets. This class is in charge of
 * showing fixed points when the mouse is over a vertex and handles constraints
 * to establish new connections.
 *
 * Constructor: mxConstraintHandler
 *
 * Constructs an new constraint handler.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 * factoryMethod - Optional function to create the edge. The function takes
 * the source and target <mxCell> as the first and second argument and
 * returns the <mxCell> that represents the new edge.
 */
export class mxConstraintHandler {

  constructor(graph: mxGraph, factoryMethod?: (source: mxCell, target: mxCell) => mxCell);

  /**
   * Variable: pointImage
   *
   * <mxImage> to be used as the image for fixed connection points.
   */
  pointImage: mxImage;

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph

  /**
   * Variable: enabled
   *
   * Specifies if events are handled. Default is true.
   */
  enabled: boolean;

  /**
   * Variable: highlightColor
   *
   * Specifies the color for the highlight. Default is <mxConstants.DEFAULT_VALID_COLOR>.
   */
  highlightColor: string;

  /**
   * Function: isEnabled
   *
   * Returns true if events are handled. This implementation
   * returns <enabled>.
   */
  isEnabled(): boolean;

  /**
   * Function: setEnabled
   *
   * Enables or disables event handling. This implementation
   * updates <enabled>.
   *
   * Parameters:
   *
   * enabled - Boolean that specifies the new enabled state.
   */
  setEnabled(enabled: boolean): void;

  /**
   * Function: reset
   *
   * Resets the state of this handler.
   */
  reset(): void;

  /**
   * Function: getTolerance
   *
   * Returns the tolerance to be used for intersecting connection points. This
   * implementation returns <mxGraph.tolerance>.
   *
   * Parameters:
   *
   * me - <mxMouseEvent> whose tolerance should be returned.
   */
  getTolerance(me: mxMouseEvent): number;

  /**
   * Function: getImageForConstraint
   *
   * Returns the tolerance to be used for intersecting connection points.
   */
  getImageForConstraint(state: mxCellState, constraint: mxConnectionConstraint, point: mxPoint): mxImage;

  /**
   * Function: isEventIgnored
   *
   * Returns true if the given <mxMouseEvent> should be ignored in <update>. This
   * implementation always returns false.
   */
  isEventIgnored(me: mxMouseEvent, source: mxCell): boolean;

  /**
   * Function: isStateIgnored
   *
   * Returns true if the given state should be ignored. This always returns false.
   */
  isStateIgnored(state: mxCellState, source: mxCell): boolean;

  /**
   * Function: destroyIcons
   *
   * Destroys the <focusIcons> if they exist.
   */
  destroyIcons(): void;
  /**
   * Function: destroyFocusHighlight
   *
   * Destroys the <focusHighlight> if one exists.
   */
  destroyFocusHighlight(): void;

  /**
   * Function: isKeepFocusEvent
   *
   * Returns true if the current focused state should not be changed for the given event.
   * This returns true if shift and alt are pressed.
   */
  isKeepFocusEvent(me: mxMouseEvent): boolean;

  /**
   * Function: getCellForEvent
   *
   * Returns the cell for the given event.
   */
  getCellForEvent(me: mxMouseEvent, point: mxPoint): mxCell;
  /**
   * Function: update
   *
   * Updates the state of this handler based on the given <mxMouseEvent>.
   * Source is a boolean indicating if the cell is a source or target.
   */
  update(me: mxMouseEvent, source: mxCell, existingEdge: mxCell, point: mxPoint): void;

  /**
   * Function: redraw
   *
   * Transfers the focus to the given state as a source or target terminal. If
   * the handler is not enabled then the outline is painted, but the constraints
   * are ignored.
   */
  redraw(): void;

  /**
   * Function: setFocus
   *
   * Transfers the focus to the given state as a source or target terminal. If
   * the handler is not enabled then the outline is painted, but the constraints
   * are ignored.
   */
  setFocus(me: mxMouseEvent, state: mxCellState, source: mxCell): void;

  /**
   * Function: createHighlightShape
   *
   * Create the shape used to paint the highlight.
   *
   * Returns true if the given icon intersects the given point.
   */
  createHighlightShape(): mxRectangleShape;

  /**
   * Function: intersects
   *
   * Returns true if the given icon intersects the given rectangle.
   */
  intersects(icon: mxShape, mouse: mxRectangle, source: mxCell, existingEdge: mxCell): boolean;

  /**
   * Function: destroy
   *
   * Destroy this handler.
   */
  destroy(): void;
}


/**
 * Class: mxDictionary
 *
 * A wrapper class for an associative array with object keys. Note: This
 * implementation uses <mxObjectIdentitiy> to turn object keys into strings.
 *
 * Constructor: mxEventSource
 *
 * Constructs a new dictionary which allows object to be used as keys.
 */
export class mxDictionary<T> {
  constructor();

  /**
   * Function: map
   *
   * Stores the (key, value) pairs in this dictionary.
   */
  map: { [key: string]: T };

  /**
   * Function: clear
   *
   * Clears the dictionary.
   */
  clear(): void;

  /**
   * Function: get
   *
   * Returns the value for the given key.
   */
  get(key: string): T;

  /**
   * Function: put
   *
   * Stores the value under the given key and returns the previous
   * value for that key.
   */
  put(key: string, value: T): T;

  /**
   * Function: remove
   *
   * Removes the value for the given key and returns the value that
   * has been removed.
   */
  remove(key: string): T;

  /**
   * Function: getKeys
   *
   * Returns all keys as an array.
   */
  getKeys(): string[];

  /**
   * Function: getValues
   *
   * Returns all values as an array.
   */
  getValues(): T[];

  /**
   * Function: visit
   *
   * Visits all entries in the dictionary using the given function with the
   * following signature: function(key, value) where key is a string and
   * value is an object.
   *
   * Parameters:
   *
   * visitor - A function that takes the key and value as arguments.
   */
  visit(visitor: (key: string, value: T) => void): void;

}


/**
 * Class: mxEdgeHandler
 *
 * Graph event handler that reconnects edges and modifies control points and
 * the edge label location. Uses <mxTerminalMarker> for finding and
 * highlighting new source and target vertices. This handler is automatically
 * created in <mxGraph.createHandler> for each selected edge.
 *
 * To enable adding/removing control points, the following code can be used:
 *
 * (code)
 * addEnabled = true;
 * removeEnabled = true;
 * (end)
 *
 * Note: This experimental feature is not recommended for production use.
 *
 * Constructor: mxEdgeHandler
 *
 * Constructs an edge handler for the specified <mxCellState>.
 *
 * Parameters:
 *
 * state - <mxCellState> of the cell to be handled.
 */
export class mxEdgeHandler {
  constructor(state: mxCellState);

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: state
   *
   * Reference to the <mxCellState> being modified.
   */
  state: mxCellState;

  /**
   * Variable: marker
   *
   * Holds the <mxTerminalMarker> which is used for highlighting terminals.
   */
  marker: any;

  /**
   * Variable: constraintHandler
   *
   * Holds the <mxConstraintHandler> used for drawing and highlighting
   * constraints.
   */
  constraintHandler: mxConstraintHandler;

  /**
   * Variable: error
   *
   * Holds the current validation error while a connection is being changed.
   */
  error: string;

  /**
   * Variable: shape
   *
   * Holds the <mxShape> that represents the preview edge.
   */
  shape: mxShape;

  /**
   * Variable: bends
   *
   * Holds the <mxShapes> that represent the points.
   */
  bends: mxShape[];

  /**
   * Variable: labelShape
   *
   * Holds the <mxShape> that represents the label position.
   */
  labelShape: mxShape;

  /**
   * Variable: cloneEnabled
   *
   * Specifies if cloning by control-drag is enabled. Default is true.
   */
  cloneEnabled: boolean;

  /**
   * Variable: addEnabled
   *
   * Specifies if adding bends by shift-click is enabled. Default is false.
   * Note: This experimental feature is not recommended for production use.
   */
  addEnabled: boolean;

  /**
   * Variable: removeEnabled
   *
   * Specifies if removing bends by shift-click is enabled. Default is false.
   * Note: This experimental feature is not recommended for production use.
   */
  removeEnabled: boolean;

  /**
   * Variable: dblClickRemoveEnabled
   *
   * Specifies if removing bends by double click is enabled. Default is false.
   */
  dblClickRemoveEnabled: boolean;

  /**
   * Variable: mergeRemoveEnabled
   *
   * Specifies if removing bends by dropping them on other bends is enabled.
   * Default is false.
   */
  mergeRemoveEnabled: boolean;

  /**
   * Variable: straightRemoveEnabled
   *
   * Specifies if removing bends by creating straight segments should be enabled.
   * If enabled, this can be overridden by holding down the alt key while moving.
   * Default is false.
   */
  straightRemoveEnabled: boolean;

  /**
   * Variable: virtualBendsEnabled
   *
   * Specifies if virtual bends should be added in the center of each
   * segments. These bends can then be used to add new waypoints.
   * Default is false.
   */
  virtualBendsEnabled: boolean;

  /**
   * Variable: virtualBendOpacity
   *
   * Opacity to be used for virtual bends (see <virtualBendsEnabled>).
   * Default is 20.
   */
  virtualBendOpacity: number;

  /**
   * Variable: parentHighlightEnabled
   *
   * Specifies if the parent should be highlighted if a child cell is selected.
   * Default is false.
   */
  parentHighlightEnabled: boolean;

  /**
   * Variable: preferHtml
   *
   * Specifies if bends should be added to the graph container. This is updated
   * in <init> based on whether the edge or one of its terminals has an HTML
   * label in the container.
   */
  preferHtml: boolean;

  /**
   * Variable: allowHandleBoundsCheck
   *
   * Specifies if the bounds of handles should be used for hit-detection in IE
   * Default is true.
   */
  allowHandleBoundsCheck: boolean;

  /**
   * Variable: snapToTerminals
   *
   * Specifies if waypoints should snap to the routing centers of terminals.
   * Default is false.
   */
  snapToTerminals: boolean;

  /**
   * Variable: handleImage
   *
   * Optional <mxImage> to be used as handles. Default is null.
   */
  handleImage: mxImage;

  /**
   * Variable: tolerance
   *
   * Optional tolerance for hit-detection in <getHandleForEvent>. Default is 0.
   */
  tolerance: number;

  /**
   * Variable: outlineConnect
   *
   * Specifies if connections to the outline of a highlighted target should be
   * enabled. This will allow to place the connection point along the outline of
   * the highlighted target. Default is false.
   */
  outlineConnect: boolean;

  /**
   * Variable: manageLabelHandle
   *
   * Specifies if the label handle should be moved if it intersects with another
   * handle. Uses <checkLabelHandle> for checking and moving. Default is false.
   */
  manageLabelHandle: boolean;

  /**
   * Function: init
   *
   * Initializes the shapes required for this edge handler.
   */
  init(): void;

  /**
   * Function: createCustomHandles
   *
   * Returns an array of custom handles. This implementation returns null.
   */
  createCustomHandles(): any[];

  /**
   * Function: isVirtualBendsEnabled
   *
   * Returns true if virtual bends should be added. This returns true if
   * <virtualBendsEnabled> is true and the current style allows and
   * renders custom waypoints.
   */
  isVirtualBendsEnabled(evt: Event): boolean;

  /**
   * Function: isAddPointEvent
   *
   * Returns true if the given event is a trigger to add a new point. This
   * implementation returns true if shift is pressed.
   */
  isAddPointEvent(evt: Event): boolean;

  /**
   * Function: isRemovePointEvent
   *
   * Returns true if the given event is a trigger to remove a point. This
   * implementation returns true if shift is pressed.
   */
  isRemovePointEvent(evt: Event): boolean;

  /**
   * Function: getSelectionPoints
   *
   * Returns the list of points that defines the selection stroke.
   */
  getSelectionPoints(state: mxCellState): mxPoint[];

  /**
   * Function: createSelectionShape
   *
   * Creates the shape used to draw the selection border.
   */
  createParentHighlightShape(bounds: mxRectangle): mxRectangleShape;

  /**
   * Function: createSelectionShape
   *
   * Creates the shape used to draw the selection border.
   */
  createSelectionShape(points: mxPoint[]): mxShape;

  /**
   * Function: getSelectionColor
   *
   * Returns <mxConstants.EDGE_SELECTION_COLOR>.
   */
  getSelectionColor(): string;

  /**
   * Function: getSelectionStrokeWidth
   *
   * Returns <mxConstants.EDGE_SELECTION_STROKEWIDTH>.
   */
  getSelectionStrokeWidth(): number;

  /**
   * Function: isSelectionDashed
   *
   * Returns <mxConstants.EDGE_SELECTION_DASHED>.
   */
  isSelectionDashed(): string;

  /**
   * Function: isConnectableCell
   *
   * Returns true if the given cell is connectable. This is a hook to
   * disable floating connections. This implementation returns true.
   */
  isConnectableCell(cell: mxCell): boolean;

  /**
   * Function: getCellAt
   *
   * Creates and returns the <mxCellMarker> used in <marker>.
   */
  getCellAt(x: number, y: number): mxCell;

  /**
   * Function: createMarker
   *
   * Creates and returns the <mxCellMarker> used in <marker>.
   */
  createMarker(): mxCellMarker;

  /**
   * Function: validateConnection
   *
   * Returns the error message or an empty string if the connection for the
   * given source, target pair is not valid. Otherwise it returns null. This
   * implementation uses <mxGraph.getEdgeValidationError>.
   *
   * Parameters:
   *
   * source - <mxCell> that represents the source terminal.
   * target - <mxCell> that represents the target terminal.
   */
  validateConnection(source: mxCell, target: mxCell): string;

  /**
   * Function: createBends
   *
   * Creates and returns the bends used for modifying the edge. This is
   * typically an array of <mxRectangleShapes>.
   */
  createBends(): mxRectangleShape[];

  /**
   * Function: createVirtualBends
   *
   * Creates and returns the bends used for modifying the edge. This is
   * typically an array of <mxRectangleShapes>.
   */
  createVirtualBends(): mxRectangleShape[];

  /**
   * Function: isHandleEnabled
   *
   * Creates the shape used to display the given bend.
   */
  isHandleEnabled(index: number): boolean;

  /**
   * Function: isHandleVisible
   *
   * Returns true if the handle at the given index is visible.
   */
  isHandleVisible(index: number): boolean;

  /**
   * Function: createHandleShape
   *
   * Creates the shape used to display the given bend. Note that the index may be
   * null for special cases, such as when called from
   * <mxElbowEdgeHandler.createVirtualBend>. Only images and rectangles should be
   * returned if support for HTML labels with not foreign objects is required.
   * Index if null for virtual handles.
   */
  createHandleShape(index: number): mxRectangleShape;

  /**
   * Function: createLabelHandleShape
   *
   * Creates the shape used to display the the label handle.
   */
  createLabelHandleShape(): mxRectangleShape;

  /**
   * Function: initBend
   *
   * Helper method to initialize the given bend.
   *
   * Parameters:
   *
   * bend - <mxShape> that represents the bend to be initialized.
   */
  initBend(bend: mxShape, dblClick: (evt: Event) => void): boolean;

  /**
   * Function: getHandleForEvent
   *
   * Returns the index of the handle for the given event.
   */
  getHandleForEvent(me: mxMouseEvent): number | boolean;

  /**
   * Function: isAddVirtualBendEvent
   *
   * Returns true if the given event allows virtual bends to be added. This
   * implementation returns true.
   */
  isAddVirtualBendEvent(me: mxMouseEvent): boolean;

  /**
   * Function: isCustomHandleEvent
   *
   * Returns true if the given event allows custom handles to be changed. This
   * implementation returns true.
   */
  isCustomHandleEvent(me: mxMouseEvent): boolean;

  /**
   * Function: mouseDown
   *
   * Handles the event by checking if a special element of the handler
   * was clicked, in which case the index parameter is non-null. The
   * indices may be one of <LABEL_HANDLE> or the number of the respective
   * control point. The source and target points are used for reconnecting
   * the edge.
   */
  mouseDown(sender: any, me: mxMouseEvent): void;

  /**
   * Function: start
   *
   * Starts the handling of the mouse gesture.
   */
  start(x: number, y: number, index: number): void;

  /**
   * Function: clonePreviewState
   *
   * Returns a clone of the current preview state for the given point and terminal.
   */
  clonePreviewState(point: mxPoint, terminal: mxCell): mxCellState;

  /**
   * Function: getSnapToTerminalTolerance
   *
   * Returns the tolerance for the guides. Default value is
   * gridSize * scale / 2.
   */
  getSnapToTerminalTolerance(): number;

  /**
   * Function: updateHint
   *
   * Hook for subclassers do show details while the handler is active.
   */
  updateHint(me: mxMouseEvent, point: mxPoint): void;

  /**
   * Function: removeHint
   *
   * Hooks for subclassers to hide details when the handler gets inactive.
   */
  removeHint(): void;

  /**
   * Function: roundLength
   *
   * Hook for rounding the unscaled width or height. This uses Math.round.
   */
  roundLength(length: number): number;

  /**
   * Function: isSnapToTerminalsEvent
   *
   * Returns true if <snapToTerminals> is true and if alt is not pressed.
   */
  isSnapToTerminalsEvent(me: mxMouseEvent): boolean;

  /**
   * Function: getPointForEvent
   *
   * Returns the point for the given event.
   */
  getPointForEvent(me: mxMouseEvent): mxPoint;

  /**
   * Function: getPreviewTerminalState
   *
   * Updates the given preview state taking into account the state of the constraint handler.
   */
  getPreviewTerminalState(me: mxMouseEvent): mxCellState;

  /**
   * Function: getPreviewPoints
   *
   * Updates the given preview state taking into account the state of the constraint handler.
   *
   * Parameters:
   *
   * pt - <mxPoint> that contains the current pointer position.
   * me - Optional <mxMouseEvent> that contains the current event.
   */
  getPreviewPoints(pt: mxPoint, me?: mxMouseEvent): mxPoint[];

  /**
   * Function: isOutlineConnectEvent
   *
   * Returns true if <outlineConnect> is true and the source of the event is the outline shape
   * or shift is pressed.
   */
  isOutlineConnectEvent(me: mxMouseEvent): boolean;

  /**
   * Function: updatePreviewState
   *
   * Updates the given preview state taking into account the state of the constraint handler.
   */
  updatePreviewState(edge: mxCell, point: mxPoint, terminalState: mxCellState, me: mxMouseEvent, outline: boolean): void;

  /**
   * Function: mouseMove
   *
   * Handles the event by updating the preview.
   */
  mouseMove(sender: any, me: mxMouseEvent): void;

  /**
   * Function: mouseUp
   *
   * Handles the event to applying the previewed changes on the edge by
   * using <moveLabel>, <connect> or <changePoints>.
   */
  mouseUp(sender: any, me: mxMouseEvent): void;

  /**
   * Function: reset
   *
   * Resets the state of this handler.
   */
  reset(): void;

  /**
   * Function: setPreviewColor
   *
   * Sets the color of the preview to the given value.
   */
  setPreviewColor(color: string): void;


  /**
   * Function: convertPoint
   *
   * Converts the given point in-place from screen to unscaled, untranslated
   * graph coordinates and applies the grid. Returns the given, modified
   * point instance.
   *
   * Parameters:
   *
   * point - <mxPoint> to be converted.
   * gridEnabled - Boolean that specifies if the grid should be applied.
   */
  convertPoint(point: mxPoint, gridEnabled: boolean): void;

  /**
   * Function: moveLabel
   *
   * Changes the coordinates for the label of the given edge.
   *
   * Parameters:
   *
   * edge - <mxCell> that represents the edge.
   * x - Integer that specifies the x-coordinate of the new location.
   * y - Integer that specifies the y-coordinate of the new location.
   */
  moveLabel(edgeState: mxCellState, x: number, y: number): void;

  /**
   * Function: connect
   *
   * Changes the terminal or terminal point of the given edge in the graph
   * model.
   *
   * Parameters:
   *
   * edge - <mxCell> that represents the edge to be reconnected.
   * terminal - <mxCell> that represents the new terminal.
   * isSource - Boolean indicating if the new terminal is the source or
   * target terminal.
   * isClone - Boolean indicating if the new connection should be a clone of
   * the old edge.
   * me - <mxMouseEvent> that contains the mouse up event.
   */
  connect(edge: mxCell, terminal: mxCell, isSource: boolean, isClone: boolean, me: mxMouseEvent): mxCell;

  /**
   * Function: changeTerminalPoint
   *
   * Changes the terminal point of the given edge.
   */
  changeTerminalPoint(edge: mxCell, point: mxPoint, isSource: boolean, clone: boolean): mxCell;

  /**
   * Function: changePoints
   *
   * Changes the control points of the given edge in the graph model.
   */
  changePoints(edge: mxCell, points: mxPoint[], clone: boolean): mxCell;

  /**
   * Function: addPoint
   *
   * Adds a control point for the given state and event.
   */
  addPoint(state: mxCellState, evt: Event): void;

  /**
   * Function: addPointAt
   *
   * Adds a control point at the given point.
   */
  addPointAt(state: mxCellState, x: number, y: number): void;

  /**
   * Function: removePoint
   *
   * Removes the control point at the given index from the given state.
   */
  removePoint(state: mxCellState, index: number): void;

  /**
   * Function: getHandleFillColor
   *
   * Returns the fillcolor for the handle at the given index.
   */
  getHandleFillColor(index: number): string;

  /**
   * Function: redraw
   *
   * Redraws the preview, and the bends- and label control points.
   */
  redraw(): void;

  /**
   * Function: redrawHandles
   *
   * Redraws the handles.
   */
  redrawHandles(): void;

  /**
   * Function: hideHandles
   *
   * Shortcut to <hideSizers>.
   */
  setHandlesVisible(visible: boolean): void;

  /**
   * Function: redrawInnerBends
   *
   * Updates and redraws the inner bends.
   *
   * Parameters:
   *
   * p0 - <mxPoint> that represents the location of the first point.
   * pe - <mxPoint> that represents the location of the last point.
   */
  redrawInnerBends(p0: mxPoint, pe: mxPoint): void;

  /**
   * Function: checkLabelHandle
   *
   * Checks if the label handle intersects the given bounds and moves it if it
   * intersects.
   */
  checkLabelHandle(b: mxRectangle): void;

  /**
   * Function: drawPreview
   *
   * Redraws the preview.
   */
  drawPreview(): void;

  /**
   * Function: refresh
   *
   * Refreshes the bends of this handler.
   */
  refresh(): void;

  /**
   * Function: destroyBends
   *
   * Destroys all elements in <bends>.
   */
  destroyBends(bends: mxShape[]): void;

  /**
   * Function: destroy
   *
   * Destroys the handler and all its resources and DOM nodes. This does
   * normally not need to be called as handlers are destroyed automatically
   * when the corresponding cell is deselected.
   */
  destroy(): void;
}

export class mxEdgeSegmentHandler extends mxEdgeHandler {
  constructor(state: mxCellState);

  /**
   * Function: getCurrentPoints
   *
   * Returns the current absolute points.
   */
  getCurrentPoints(): mxPoint[];

  /**
   * Function: getPreviewPoints
   *
   * Updates the given preview state taking into account the state of the constraint handler.
   */
  getPreviewPoints(point: mxPoint): mxPoint[];

  /**
   * Function: updatePreviewState
   *
   * Overridden to perform optimization of the edge style result.
   */
  updatePreviewState(edge: mxCell, point: mxPoint, terminalState: mxCellState, me: mxMouseEvent): void;

  /**
   * Overriden to merge edge segments.
   */
  connect(edge: mxCell, terminal: mxCell, isSource: boolean, isClone: boolean, me: mxMouseEvent): mxCell;

  /**
   * Function: getTooltipForNode
   *
   * Returns no tooltips.
   */
  getTooltipForNode(node: any): string;

  /**
   * Function: createBends
   *
   * Adds custom bends for the center of each segment.
   */
  start(x: number, y: number, index: number): void;

  /**
   * Function: createBends
   *
   * Adds custom bends for the center of each segment.
   */
  createBends(): mxShape[];
  /**
   * Function: redraw
   *
   * Overridden to invoke <refresh> before the redraw.
   */
  redraw(): void;

  /**
   * Function: redrawInnerBends
   *
   * Updates the position of the custom bends.
   */
  redrawInnerBends(p0: mxPoint, pe: mxPoint): void;
}

export class mxEdgeStyle {
  /**
   * Class: mxEdgeStyle
   *
   * Provides various edge styles to be used as the values for
   * <mxConstants.STYLE_EDGE> in a cell style.
   *
   * Example:
   *
   * (code)
   * var style = stylesheet.getDefaultEdgeStyle();
   * style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
   * (end)
   *
   * Sets the default edge style to <ElbowConnector>.
   *
   * Custom edge style:
   *
   * To write a custom edge style, a function must be added to the mxEdgeStyle
   * object as follows:
   *
   * (code)
   * mxEdgeStyle.MyStyle = function(state, source, target, points, result)
   * {
   *   if (source != null && target != null)
   *   {
   *     var pt = new mxPoint(target.getCenterX(), source.getCenterY());
   *
   *     if (mxUtils.contains(source, pt.x, pt.y))
   *     {
   *       pt.y = source.y + source.height;
   *     }
   *
   *     result.push(pt);
   *   }
   * };
   * (end)
   *
   * In the above example, a right angle is created using a point on the
   * horizontal center of the target vertex and the vertical center of the source
   * vertex. The code checks if that point intersects the source vertex and makes
   * the edge straight if it does. The point is then added into the result array,
   * which acts as the return value of the function.
   *
   * The new edge style should then be registered in the <mxStyleRegistry> as follows:
   * (code)
   * mxStyleRegistry.putValue('myEdgeStyle', mxEdgeStyle.MyStyle);
   * (end)
   *
   * The custom edge style above can now be used in a specific edge as follows:
   *
   * (code)
   * model.setStyle(edge, 'edgeStyle=myEdgeStyle');
   * (end)
   *
   * Note that the key of the <mxStyleRegistry> entry for the function should
   * be used in string values, unless <mxGraphView.allowEval> is true, in
   * which case you can also use mxEdgeStyle.MyStyle for the value in the
   * cell style above.
   *
   * Or it can be used for all edges in the graph as follows:
   *
   * (code)
   * var style = graph.getStylesheet().getDefaultEdgeStyle();
   * style[mxConstants.STYLE_EDGE] = mxEdgeStyle.MyStyle;
   * (end)
   *
   * Note that the object can be used directly when programmatically setting
   * the value, but the key in the <mxStyleRegistry> should be used when
   * setting the value via a key, value pair in a cell style.
   *
   * Function: EntityRelation
   *
   * Implements an entity relation style for edges (as used in database
   * schema diagrams). At the time the function is called, the result
   * array contains a placeholder (null) for the first absolute point,
   * that is, the point where the edge and source terminal are connected.
   * The implementation of the style then adds all intermediate waypoints
   * except for the last point, that is, the connection point between the
   * edge and the target terminal. The first ant the last point in the
   * result array are then replaced with mxPoints that take into account
   * the terminal's perimeter and next point on the edge.
   *
   * Parameters:
   *
   * state - <mxCellState> that represents the edge to be updated.
   * source - <mxCellState> that represents the source terminal.
   * target - <mxCellState> that represents the target terminal.
   * points - List of relative control points.
   * result - Array of <mxPoints> that represent the actual points of the
   * edge.
   */
  EntityRelation(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

  /**
  * Function: Loop
  *
  * Implements a self-reference, aka. loop.
  */
  Loop(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

  /**
   * Function: ElbowConnector
   *
   * Uses either <SideToSide> or <TopToBottom> depending on the horizontal
   * flag in the cell style. <SideToSide> is used if horizontal is true or
   * unspecified. See <EntityRelation> for a description of the
   * parameters.
   */
  ElbowConnector(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

  /**
   * Function: SideToSide
   *
   * Implements a vertical elbow edge. See <EntityRelation> for a description
   * of the parameters.
   */
  SideToSide(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

  /**
   * Function: TopToBottom
   *
   * Implements a horizontal elbow edge. See <EntityRelation> for a
   * description of the parameters.
   */
  TopToBottom(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

  /**
   * Function: SegmentConnector
   *
   * Implements an orthogonal edge style. Use <mxEdgeSegmentHandler>
   * as an interactive handler for this style.
   */
  SegmentConnector(state: mxCellState, source: mxCellState, target: mxCellState, hints: mxPoint[], result: mxPoint[]): void;


  /**
   * Function: OrthConnector
   *
   * Implements a local orthogonal router between the given
   * cells.
   *
   * Parameters:
   *
   * state - <mxCellState> that represents the edge to be updated.
   * source - <mxCellState> that represents the source terminal.
   * target - <mxCellState> that represents the target terminal.
   * points - List of relative control points.
   * result - Array of <mxPoints> that represent the actual points of the
   * edge.
   *
   */
  OrthConnector(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

}


/**
 * Class: mxElbowEdgeHandler
 *
 * Graph event handler that reconnects edges and modifies control points and
 * the edge label location. Uses <mxTerminalMarker> for finding and
 * highlighting new source and target vertices. This handler is automatically
 * created in <mxGraph.createHandler>. It extends <mxEdgeHandler>.
 *
 * Constructor: mxEdgeHandler
 *
 * Constructs an edge handler for the specified <mxCellState>.
 *
 * Parameters:
 *
 * state - <mxCellState> of the cell to be modified.
 */
export class mxElbowEdgeHandler extends mxEdgeHandler {

  constructor(state: mxCellState);

  /**
   * Specifies if a double click on the middle handle should call
   * <mxGraph.flipEdge>. Default is true.
   */
  flipEnabled: boolean;

  /**
   * Variable: doubleClickOrientationResource
   *
   * Specifies the resource key for the tooltip to be displayed on the single
   * control point for routed edges. If the resource for this key does not
   * exist then the value is used as the error message. Default is
   * 'doubleClickOrientation'.
   */
  doubleClickOrientationResource: string;

  /**
   * Function: createBends
   *
   * Overrides <mxEdgeHandler.createBends> to create custom bends.
   */
  createBends(): mxShape[];

  /**
   * Function: createVirtualBend
   *
   * Creates a virtual bend that supports double clicking and calls
   * <mxGraph.flipEdge>.
   */
  createVirtualBend(dblClickHandler: (evt: Event) => void): mxRectangleShape;

  /**
   * Function: getCursorForBend
   *
   * Returns the cursor to be used for the bend.
   */
  getCursorForBend(): string;

  /**
   * Function: getTooltipForNode
   *
   * Returns the tooltip for the given node.
   */
  getTooltipForNode(node: Element): string;

  /**
   * Function: convertPoint
   *
   * Converts the given point in-place from screen to unscaled, untranslated
   * graph coordinates and applies the grid.
   *
   * Parameters:
   *
   * point - <mxPoint> to be converted.
   * gridEnabled - Boolean that specifies if the grid should be applied.
   */
  convertPoint(point: mxPoint, gridEnabled: boolean): mxPoint;

  /**
   * Function: redrawInnerBends
   *
   * Updates and redraws the inner bends.
   *
   * Parameters:
   *
   * p0 - <mxPoint> that represents the location of the first point.
   * pe - <mxPoint> that represents the location of the last point.
   */
  redrawInnerBends(p0: mxPoint, pe: mxPoint): void;
}


/**
 * Class: mxEventObject
 *
 * The mxEventObject is a wrapper for all properties of a single event.
 * Additionally, it also offers functions to consume the event and check if it
 * was consumed as follows:
 *
 * (code)
 * evt.consume();
 * INV: evt.isConsumed() == true
 * (end)
 *
 * Constructor: mxEventObject
 *
 * Constructs a new event object with the specified name. An optional
 * sequence of key, value pairs can be appended to define properties.
 *
 * Example:
 *
 * (code)
 * new mxEventObject("eventName", key1, val1, .., keyN, valN)
 * (end)
 */
export class mxEventObject {
  constructor(name: string, ...args: any[]);

  /**
   * Variable: name
   *
   * Holds the name.
   */
  name: string;

  /**
   * Variable: properties
   *
   * Holds the properties as an associative array.
   */
  properties: any[];

  /**
   * Variable: consumed
   *
   * Holds the consumed state. Default is false.
   */
  consumed: boolean;

  /**
   * Function: getName
   *
   * Returns <name>.
   */
  getName(): string;

  /**
   * Function: getProperties
   *
   * Returns <properties>.
   */
  getProperties(): any[];

  /**
   * Function: getProperty
   *
   * Returns the property for the given key.
   */
  getProperty(key: string): any[];

  /**
   * Function: isConsumed
   *
   * Returns true if the event has been consumed.
   */
  isConsumed(): boolean;

  /**
   * Function: consume
   *
   * Consumes the event.
   */
  consume(): void;
}


/**
 * Class: mxEventSource
 *
 * Base class for objects that dispatch named events. To create a subclass that
 * inherits from mxEventSource, the following code is used.
 *
 * (code)
 * function MyClass() { };
 *
 * MyClass.prototype = new mxEventSource();
 * MyClass.prototype.constructor = MyClass;
 * (end)
 *
 * Known Subclasses:
 *
 * <mxGraphModel>, <mxGraph>, <mxGraphView>, <mxEditor>, <mxCellOverlay>,
 * <mxToolbar>, <mxWindow>
 *
 * Constructor: mxEventSource
 *
 * Constructs a new event source.
 */
export class mxEventSource {

  constructor(eventSource: any);

  /**
   * Variable: eventListeners
   *
   * Holds the event names and associated listeners in an array. The array
   * contains the event name followed by the respective listener for each
   * registered listener.
   */
  eventListeners: any[];

  /**
   * Variable: eventsEnabled
   *
   * Specifies if events can be fired. Default is true.
   */
  eventsEnabled: boolean;

  /**
   * Variable: eventSource
   *
   * Optional source for events. Default is null.
   */
  eventSource: any;

  /**
   * Function: isEventsEnabled
   *
   * Returns <eventsEnabled>.
   */
  isEventsEnabled(): boolean;

  /**
   * Function: setEventsEnabled
   *
   * Sets <eventsEnabled>.
   */
  setEventsEnabled(value: boolean): void;

  /**
   * Function: getEventSource
   *
   * Returns <eventSource>.
   */
  getEventSource(): any;

  /**
   * Function: setEventSource
   *
   * Sets <eventSource>.
   */
  setEventSource(value: any)

  /**
   * Function: addListener
   *
   * Binds the specified function to the given event name. If no event name
   * is given, then the listener is registered for all events.
   *
   * The parameters of the listener are the sender and an <mxEventObject>.
   */
  addListener(name: string, funct: (...args: any[]) => any);

  /**
   * Function: removeListener
   *
   * Removes all occurrences of the given listener from <eventListeners>.
   */
  removeListener(funct: (...args: any[]) => any);

  /**
   * Function: fireEvent
   *
   * Dispatches the given event to the listeners which are registered for
   * the event. The sender argument is optional. The current execution scope
   * ("this") is used for the listener invocation (see <mxUtils.bind>).
   *
   * Example:
   *
   * (code)
   * fireEvent(new mxEventObject("eventName", key1, val1, .., keyN, valN))
   * (end)
   *
   * Parameters:
   *
   * evt - <mxEventObject> that represents the event.
   * sender - Optional sender to be passed to the listener. Default value is
   * the return value of <getEventSource>.
   */
  fireEvent(evt: mxEventObject, sender: any);
}


/**
 * Class: mxGeometry
 *
 * Extends <mxRectangle> to represent the geometry of a cell.
 *
 * For vertices, the geometry consists of the x- and y-location, and the width
 * and height. For edges, the geometry consists of the optional terminal- and
 * control points. The terminal points are only required if an edge is
 * unconnected, and are stored in the sourcePoint> and <targetPoint>
 * variables, respectively.
 *
 * Example:
 *
 * If an edge is unconnected, that is, it has no source or target terminal,
 * then a geometry with terminal points for a new edge can be defined as
 * follows.
 *
 * (code)
 * geometry.setTerminalPoint(new mxPoint(x1, y1), true);
 * geometry.points = [new mxPoint(x2, y2)];
 * geometry.setTerminalPoint(new mxPoint(x3, y3), false);
 * (end)
 *
 * Control points are used regardless of the connected state of an edge and may
 * be ignored or interpreted differently depending on the edge's <mxEdgeStyle>.
 *
 * To disable automatic reset of control points after a cell has been moved or
 * resized, the the <mxGraph.resizeEdgesOnMove> and
 * <mxGraph.resetEdgesOnResize> may be used.
 *
 * Edge Labels:
 *
 * Using the x- and y-coordinates of a cell's geometry, it is possible to
 * position the label on edges on a specific location on the actual edge shape
 * as it appears on the screen. The x-coordinate of an edge's geometry is used
 * to describe the distance from the center of the edge from -1 to 1 with 0
 * being the center of the edge and the default value. The y-coordinate of an
 * edge's geometry is used to describe the absolute, orthogonal distance in
 * pixels from that point. In addition, the <mxGeometry.offset> is used as an
 * absolute offset vector from the resulting point.
 *
 * This coordinate system is applied if <relative> is true, otherwise the
 * offset defines the absolute vector from the edge's center point to the
 * label and the values for <x> and <y> are ignored.
 *
 * The width and height parameter for edge geometries can be used to set the
 * label width and height (eg. for word wrapping).
 *
 * Ports:
 *
 * The term "port" refers to a relatively positioned, connectable child cell,
 * which is used to specify the connection between the parent and another cell
 * in the graph. Ports are typically modeled as vertices with relative
 * geometries.
 *
 * Offsets:
 *
 * The <offset> field is interpreted in 3 different ways, depending on the cell
 * and the geometry. For edges, the offset defines the absolute offset for the
 * edge label. For relative geometries, the offset defines the absolute offset
 * for the origin (top, left corner) of the vertex, otherwise the offset
 * defines the absolute offset for the label inside the vertex or group.
 *
 * Constructor: mxGeometry
 *
 * Constructs a new object to describe the size and location of a vertex or
 * the control points of an edge.
 */
export class mxGeometry extends mxRectangle {

  constructor(x: number, y: number, width: number, height: number);

  /**
   * Variable: TRANSLATE_CONTROL_POINTS
   *
   * Global switch to translate the points in translate. Default is true.
   */
  readonly TRANSLATE_CONTROL_POINTS: boolean;

  /**
   * Variable: alternateBounds
   *
   * Stores alternate values for x, y, width and height in a rectangle. See
   * <swap> to exchange the values. Default is null.
   */
  alternateBounds: mxRectangle;

  /**
   * Variable: sourcePoint
   *
   * Defines the source <mxPoint> of the edge. This is used if the
   * corresponding edge does not have a source vertex. Otherwise it is
   * ignored. Default is  null.
   */
  sourcePoint: mxPoint;

  /**
   * Variable: targetPoint
   *
   * Defines the target <mxPoint> of the edge. This is used if the
   * corresponding edge does not have a target vertex. Otherwise it is
   * ignored. Default is null.
   */
  targetPoint: mxPoint;

  /**
   * Variable: points
   *
   * Array of <mxPoints> which specifies the control points along the edge.
   * These points are the intermediate points on the edge, for the endpoints
   * use <targetPoint> and <sourcePoint> or set the terminals of the edge to
   * a non-null value. Default is null.
   */
  points: mxPoint[];

  /**
   * Variable: offset
   *
   * For edges, this holds the offset (in pixels) from the position defined
   * by <x> and <y> on the edge. For relative geometries (for vertices), this
   * defines the absolute offset from the point defined by the relative
   * coordinates. For absolute geometries (for vertices), this defines the
   * offset for the label. Default is null.
   */
  offset: mxPoint;

  /**
   * Variable: relative
   *
   * Specifies if the coordinates in the geometry are to be interpreted as
   * relative coordinates. For edges, this is used to define the location of
   * the edge label relative to the edge as rendered on the display. For
   * vertices, this specifies the relative location inside the bounds of the
   * parent cell.
   *
   * If this is false, then the coordinates are relative to the origin of the
   * parent cell or, for edges, the edge label position is relative to the
   * center of the edge as rendered on screen.
   *
   * Default is false.
   */
  relative: boolean;

  /**
   * Function: swap
   *
   * Swaps the x, y, width and height with the values stored in
   * <alternateBounds> and puts the previous values into <alternateBounds> as
   * a rectangle. This operation is carried-out in-place, that is, using the
   * existing geometry instance. If this operation is called during a graph
   * model transactional change, then the geometry should be cloned before
   * calling this method and setting the geometry of the cell using
   * <mxGraphModel.setGeometry>.
   */
  swap(): void;

  /**
   * Function: getTerminalPoint
   *
   * Returns the <mxPoint> representing the source or target point of this
   * edge. This is only used if the edge has no source or target vertex.
   *
   * Parameters:
   *
   * isSource - Boolean that specifies if the source or target point
   * should be returned.
   */
  getTerminalPoint(isSource: boolean): mxPoint;

  /**
   * Function: setTerminalPoint
   *
   * Sets the <sourcePoint> or <targetPoint> to the given <mxPoint> and
   * returns the new point.
   *
   * Parameters:
   *
   * point - Point to be used as the new source or target point.
   * isSource - Boolean that specifies if the source or target point
   * should be set.
   */
  setTerminalPoint(point: mxPoint, isSource: boolean): mxPoint;

  /**
   * Function: rotate
   *
   * Rotates the geometry by the given angle around the given center. That is,
   * <x> and <y> of the geometry, the <sourcePoint>, <targetPoint> and all
   * <points> are translated by the given amount. <x> and <y> are only
   * translated if <relative> is false.
   *
   * Parameters:
   *
   * angle - Number that specifies the rotation angle in degrees.
   * cx - <mxPoint> that specifies the center of the rotation.
   */
  rotate(angle: number, cx: mxPoint): void;

  /**
   * Function: translate
   *
   * Translates the geometry by the specified amount. That is, <x> and <y> of the
   * geometry, the <sourcePoint>, <targetPoint> and all <points> are translated
   * by the given amount. <x> and <y> are only translated if <relative> is false.
   * If <TRANSLATE_CONTROL_POINTS> is false, then <points> are not modified by
   * this function.
   *
   * Parameters:
   *
   * dx - Number that specifies the x-coordinate of the translation.
   * dy - Number that specifies the y-coordinate of the translation.
   */
  translate(dx: number, dy: number): void;

  /**
   * Function: scale
   *
   * Scales the geometry by the given amount. That is, <x> and <y> of the
   * geometry, the <sourcePoint>, <targetPoint> and all <points> are scaled
   * by the given amount. <x>, <y>, <width> and <height> are only scaled if
   * <relative> is false. If <fixedAspect> is true, then the smaller value
   * is used to scale the width and the height.
   *
   * Parameters:
   *
   * sx - Number that specifies the horizontal scale factor.
   * sy - Number that specifies the vertical scale factor.
   * fixedAspect - Optional boolean to keep the aspect ratio fixed.
   */
  scale(sx: number, sy: number, fixedAspect?: boolean);

  /**
   * Function: equals
   *
   * Returns true if the given object equals this geometry.
   */
  equals(obj: mxGeometry): boolean;
}

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
  setSelectionModel(selectionModel: mxGraphSelectionModel): void;

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


/**
 * Class: mxGraphHandler
 *
 * Graph event handler that handles selection. Individual cells are handled
 * separately using <mxVertexHandler> or one of the edge handlers. These
 * handlers are created using <mxGraph.createHandler> in
 * <mxGraphSelectionModel.cellAdded>.
 *
 * To avoid the container to scroll a moved cell into view, set
 * <scrollAfterMove> to false.
 *
 * Constructor: mxGraphHandler
 *
 * Constructs an event handler that creates handles for the
 * selection cells.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 */
export class mxGraphHandler {
  constructor(graph: mxGraph);

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: maxCells
   *
   * Defines the maximum number of cells to paint subhandles
   * for. Default is 50 for Firefox and 20 for IE. Set this
   * to 0 if you want an unlimited number of handles to be
   * displayed. This is only recommended if the number of
   * cells in the graph is limited to a small number, eg.
   * 500.
   */
  maxCells: number;

  /**
   * Variable: enabled
   *
   * Specifies if events are handled. Default is true.
   */
  enabled: boolean;

  /**
   * Variable: highlightEnabled
   *
   * Specifies if drop targets under the mouse should be enabled. Default is
   * true.
   */
  highlightEnabled: boolean;

  /**
   * Variable: cloneEnabled
   *
   * Specifies if cloning by control-drag is enabled. Default is true.
   */
  cloneEnabled: boolean;

  /**
   * Variable: moveEnabled
   *
   * Specifies if moving is enabled. Default is true.
   */
  moveEnabled: boolean;

  /**
   * Variable: guidesEnabled
   *
   * Specifies if other cells should be used for snapping the right, center or
   * left side of the current selection. Default is false.
   */
  guidesEnabled: boolean;

  /**
   * Variable: guide
   *
   * Holds the <mxGuide> instance that is used for alignment.
   */
  guide: mxGuide;

  /**
   * Variable: currentDx
   *
   * Stores the x-coordinate of the current mouse move.
   */
  currentDx: number;

  /**
   * Variable: currentDy
   *
   * Stores the y-coordinate of the current mouse move.
   */
  currentDy: number;

  /**
   * Variable: updateCursor
   *
   * Specifies if a move cursor should be shown if the mouse is over a movable
   * cell. Default is true.
   */
  updateCursor: boolean;

  /**
   * Variable: selectEnabled
   *
   * Specifies if selecting is enabled. Default is true.
   */
  selectEnabled: boolean;

  /**
   * Variable: removeCellsFromParent
   *
   * Specifies if cells may be moved out of their parents. Default is true.
   */
  removeCellsFromParent: boolean;

  /**
   * Variable: connectOnDrop
   *
   * Specifies if drop events are interpreted as new connections if no other
   * drop action is defined. Default is false.
   */
  connectOnDrop: boolean;

  /**
   * Variable: scrollOnMove
   *
   * Specifies if the view should be scrolled so that a moved cell is
   * visible. Default is true.
   */
  scrollOnMove: boolean;

  /**
   * Variable: minimumSize
   *
   * Specifies the minimum number of pixels for the width and height of a
   * selection border. Default is 6.
   */
  minimumSize: number;

  /**
   * Variable: previewColor
   *
   * Specifies the color of the preview shape. Default is black.
   */
  previewColor: string;

  /**
   * Variable: htmlPreview
   *
   * Specifies if the graph container should be used for preview. If this is used
   * then drop target detection relies entirely on <mxGraph.getCellAt> because
   * the HTML preview does not "let events through". Default is false.
   */
  htmlPreview: boolean;

  /**
   * Variable: shape
   *
   * Reference to the <mxShape> that represents the preview.
   */
  shape: mxShape;

  /**
   * Variable: scaleGrid
   *
   * Specifies if the grid should be scaled. Default is false.
   */
  scaleGrid: boolean;

  /**
   * Variable: rotationEnabled
   *
   * Specifies if the bounding box should allow for rotation. Default is true.
   */
  rotationEnabled: boolean;

  /**
   * Function: isEnabled
   *
   * Returns <enabled>.
   */
  isEnabled(): boolean;

  /**
   * Function: setEnabled
   *
   * Sets <enabled>.
   */
  setEnabled(value: boolean): void;

  /**
   * Function: isCloneEnabled
   *
   * Returns <cloneEnabled>.
   */
  isCloneEnabled(): boolean;

  /**
   * Function: setCloneEnabled
   *
   * Sets <cloneEnabled>.
   *
   * Parameters:
   *
   * value - Boolean that specifies the new clone enabled state.
   */
  setCloneEnabled(value: boolean): void;

  /**
   * Function: isMoveEnabled
   *
   * Returns <moveEnabled>.
   */
  isMoveEnabled(): boolean;

  /**
   * Function: setMoveEnabled
   *
   * Sets <moveEnabled>.
   */
  setMoveEnabled(value: boolean): void;

  /**
   * Function: isSelectEnabled
   *
   * Returns <selectEnabled>.
   */
  isSelectEnabled(): boolean;

  /**
   * Function: setSelectEnabled
   *
   * Sets <selectEnabled>.
   */
  setSelectEnabled(value: boolean): void;

  /**
   * Function: isRemoveCellsFromParent
   *
   * Returns <removeCellsFromParent>.
   */
  isRemoveCellsFromParent(): boolean;

  /**
   * Function: setRemoveCellsFromParent
   *
   * Sets <removeCellsFromParent>.
   */
  setRemoveCellsFromParent(value: boolean): void;

  /**
   * Function: getInitialCellForEvent
   *
   * Hook to return initial cell for the given event.
   */
  getInitialCellForEvent(me: mxMouseEvent): mxCell;

  /**
   * Function: isDelayedSelection
   *
   * Hook to return true for delayed selections.
   */
  isDelayedSelection(cell: mxCell, me: mxMouseEvent): boolean;

  /**
   * Function: consumeMouseEvent
   *
   * Consumes the given mouse event. NOTE: This may be used to enable click
   * events for links in labels on iOS as follows as consuming the initial
   * touchStart disables firing the subsequent click evnent on the link.
   *
   * <code>
   * consumeMouseEvent(evtName, me)
   * {
   *   var source = mxEvent.getSource(me.getEvent());
   *
   *   if (!mxEvent.isTouchEvent(me.getEvent()) || source.nodeName != 'A')
   *   {
   *     me.consume();
   *   }
   * }
   * </code>
   */
  consumeMouseEvent(evtName: string, me: mxMouseEvent): void;

  /**
   * Function: mouseDown
   *
   * Handles the event by selecing the given cell and creating a handle for
   * it. By consuming the event all subsequent events of the gesture are
   * redirected to this handler.
   */
  mouseDown(sender: any, me: mxMouseEvent): void;

  /**
   * Function: getGuideStates
   *
   * Creates an array of cell states which should be used as guides.
   */
  getGuideStates(): mxCellState[];

  /**
   * Function: getCells
   *
   * Returns the cells to be modified by this handler. This implementation
   * returns all selection cells that are movable, or the given initial cell if
   * the given cell is not selected and movable. This handles the case of moving
   * unselectable or unselected cells.
   *
   * Parameters:
   *
   * initialCell - <mxCell> that triggered this handler.
   */
  getCells(initialCell: mxCell): mxCell[];

  /**
   * Function: getPreviewBounds
   *
   * Returns the <mxRectangle> used as the preview bounds for
   * moving the given cells.
   */
  getPreviewBounds(cells: mxCell[]): mxRectangle;

  /**
   * Function: getBoundingBox
   *
   * Returns the union of the <mxCellStates> for the given array of <mxCells>.
   * For vertices, this method uses the bounding box of the corresponding shape
   * if one exists. The bounding box of the corresponding text label and all
   * controls and overlays are ignored. See also: <mxGraphView.getBounds> and
   * <mxGraph.getBoundingBox>.
   *
   * Parameters:
   *
   * cells - Array of <mxCells> whose bounding box should be returned.
   */
  getBoundingBox(cells: mxCell[]): mxRectangle;

  /**
   * Function: createPreviewShape
   *
   * Creates the shape used to draw the preview for the given bounds.
   */
  createPreviewShape(bounds: mxRectangle): mxRectangleShape;

  /**
   * Function: start
   *
   * Starts the handling of the mouse gesture.
   */
  start(cell: mxCell, x: number, y: number): void;

  /**
   * Function: useGuidesForEvent
   *
   * Returns true if the guides should be used for the given <mxMouseEvent>.
   * This implementation returns <mxGuide.isEnabledForEvent>.
   */
  useGuidesForEvent(me: mxMouseEvent): boolean;


  /**
   * Function: snap
   *
   * Snaps the given vector to the grid and returns the given mxPoint instance.
   */
  snap(vector: mxPoint): mxPoint;

  /**
   * Function: getDelta
   *
   * Returns an <mxPoint> that represents the vector for moving the cells
   * for the given <mxMouseEvent>.
   */
  getDelta(me: mxMouseEvent): mxPoint;

  /**
   * Function: updateHint
   *
   * Hook for subclassers do show details while the handler is active.
   */
  updateHint(me: mxMouseEvent): void;

  /**
   * Function: removeHint
   *
   * Hooks for subclassers to hide details when the handler gets inactive.
   */
  removeHint(): void;

  /**
   * Function: roundLength
   *
   * Hook for rounding the unscaled vector. This uses Math.round.
   */
  roundLength(length: number): number;

  /**
   * Function: mouseMove
   *
   * Handles the event by highlighting possible drop targets and updating the
   * preview.
   */
  mouseMove(sender: any, me: mxMouseEvent): void;

  /**
   * Function: updatePreviewShape
   *
   * Updates the bounds of the preview shape.
   */
  updatePreviewShape(): void;

  /**
   * Function: setHighlightColor
   *
   * Sets the color of the rectangle used to highlight drop targets.
   *
   * Parameters:
   *
   * color - String that represents the new highlight color.
   */
  setHighlightColor(color: string): void;

  /**
   * Function: mouseUp
   *
   * Handles the event by applying the changes to the selection cells.
   */
  mouseUp(sender: any, me: mxMouseEvent): void;

  /**
   * Function: selectDelayed
   *
   * Implements the delayed selection for the given mouse event.
   */
  selectDelayed(me: mxMouseEvent): void;

  /**
   * Function: reset
   *
   * Resets the state of this handler.
   */
  reset(): void;

  /**
   * Function: shouldRemoveCellsFromParent
   *
   * Returns true if the given cells should be removed from the parent for the specified
   * mousereleased event.
   */
  shouldRemoveCellsFromParent(parent: mxCell, cells: mxCell[], evt: Event): boolean;

  /**
   * Function: moveCells
   *
   * Moves the given cells by the specified amount.
   */
  moveCells(cells: mxCell[], dx: number, dy: number, clone: boolean, target: mxCell, evt: Event): void;

  /**
   * Function: destroyShapes
   *
   * Destroy the preview and highlight shapes.
   */
  destroyShapes(): void;

  /**
   * Function: destroy
   *
   * Destroys the handler and all its resources and DOM nodes.
   */
  destroy(): void;
}

export class mxGraphModel extends mxEventSource {

  /**
   * Constructs a new graph model. If no root is specified then a new root
   * @param root mxCell
   */
  mxGraphModel(root: mxCell);

  /**
   * Variable: root
   *
   * Holds the root cell, which in turn contains the cells that represent the
   * layers of the diagram as child cells. That is, the actual elements of the
   * diagram are supposed to live in the third generation of cells and below.
   */
  root: mxCell;

  /**
   * Variable: cells
   *
   * Maps from Ids to cells.
   */
  cells: mxCell[];

  /**
   * Variable: maintainEdgeParent
   *
   * Specifies if edges should automatically be moved into the nearest common
   * ancestor of their terminals. Default is true.
   */
  maintainEdgeParent: boolean;

  /**
   * Variable: ignoreRelativeEdgeParent
   *
   * Specifies if relative edge parents should be ignored for finding the nearest
   * common ancestors of an edge's terminals. Default is true.
   */
  ignoreRelativeEdgeParent: boolean;

  /**
   * Variable: createIds
   *
   * Specifies if the model should automatically create Ids for new cells.
   * Default is true.
   */
  createIds: boolean;

  /**
   * Variable: prefix
   *
   * Defines the prefix of new Ids. Default is an empty string.
   */
  prefix: string;

  /**
   * Variable: postfix
   *
   * Defines the postfix of new Ids. Default is an empty string.
   */
  postfix: string;

  /**
   * Variable: nextId
   *
   * Specifies the next Id to be created. Initial value is 0.
   */
  nextId: number;

  /**
   * Variable: currentEdit
   *
   * Holds the changes for the current transaction. If the transaction is
   * closed then a new object is created for this variable using
   * <createUndoableEdit>.
   */
  currentEdit;

  /**
   * Variable: updateLevel
   *
   * Counter for the depth of nested transactions. Each call to <beginUpdate>
   * will increment this number and each call to <endUpdate> will decrement
   * it. When the counter reaches 0, the transaction is closed and the
   * respective events are fired. Initial value is 0.
   */
  updateLevel: number;

  /**
   * Variable: endingUpdate
   *
   * True if the program flow is currently inside endUpdate.
   */
  endingUpdate: boolean;

  /**
   * Function: clear
   *
   * Sets a new root using <createRoot>.
   */
  clear();

  /**
   * Function: isCreateIds
   *
   * Returns <createIds>.
   */
  isCreateIds()

  /**
   * Function: setCreateIds
   *
   * Sets <createIds>.
   */
  setCreateIds(value: boolean);

  /**
   * Function: createRoot
   *
   * Creates a new root cell with a default layer (child 0).
   */
  createRoot();

  /**
   * Function: getCell
   *
   * Returns the <mxCell> for the specified Id or null if no cell can be
   * found for the given Id.
   *
   * Parameters:
   *
   * id - A string representing the Id of the cell.
   */
  getCell(id: string);

  /**
   * Function: filterCells
   *
   * Returns the cells from the given array where the given filter function
   * returns true.
   */
  filterCells(cells: mxCell[], filter: (cell: mxCell) => boolean): mxCell[];

  /**
   * Function: getDescendants
   *
   * Returns all descendants of the given cell and the cell itself in an array.
   *
   * Parameters:
   *
   * parent - <mxCell> whose descendants should be returned.
   */
  getDescendants(parent: mxCell): mxCell[];

  /**
   * Function: filterDescendants
   *
   * Visits all cells recursively and applies the specified filter function
   * to each cell. If the function returns true then the cell is added
   * to the resulting array. The parent and result paramters are optional.
   * If parent is not specified then the recursion starts at <root>.
   *
   * Example:
   * The following example extracts all vertices from a given model:
   * (code)
   * var filter(cell)
   * {
   * 	return model.isVertex(cell);
   * }
   * var vertices = model.filterDescendants(filter);
   * (end)
   *
   * Parameters:
   *
   * filter - JavaScript function that takes an <mxCell> as an argument
   * and returns a boolean.
   * parent - Optional <mxCell> that is used as the root of the recursion.
   */
  filterDescendants(filter: (cell: mxCell) => boolean, parent: mxCell): mxCell[];

  /**
   * Function: getRoot
   *
   * Returns the root of the model or the topmost parent of the given cell.
   *
   * Parameters:
   *
   * cell - Optional <mxCell> that specifies the child.
   */
  getRoot(cell: mxCell): mxCell;

  /**
   * Function: setRoot
   *
   * Sets the <root> of the model using <mxRootChange> and adds the change to
   * the current transaction. This resets all datastructures in the model and
   * is the preferred way of clearing an existing model. Returns the new
   * root.
   *
   * Example:
   *
   * (code)
   * var root = new mxCell();
   * root.insert(new mxCell());
   * model.setRoot(root);
   * (end)
   *
   * Parameters:
   *
   * root - <mxCell> that specifies the new root.
   */
  setRoot(root: mxCell): void;

  /**
   * Function: rootChanged
   *
   * Inner callback to change the root of the model and update the internal
   * datastructures, such as <cells> and <nextId>. Returns the previous root.
   *
   * Parameters:
   *
   * root - <mxCell> that specifies the new root.
   */
  rootChanged(root: mxCell): boolean;

  /**
   * Function: isRoot
   *
   * Returns true if the given cell is the root of the model and a non-null
   * value.
   *
   * Parameters:
   *
   * cell - <mxCell> that represents the possible root.
   */
  isRoot(cell: mxCell): boolean;

  /**
   * Function: isLayer
   *
   * Returns true if <isRoot> returns true for the parent of the given cell.
   *
   * Parameters:
   *
   * cell - <mxCell> that represents the possible layer.
   */
  isLayer(cell: mxCell): boolean;

  /**
   * Function: isAncestor
   *
   * Returns true if the given parent is an ancestor of the given child. Note
   * returns true if child == parent.
   *
   * Parameters:
   *
   * parent - <mxCell> that specifies the parent.
   * child - <mxCell> that specifies the child.
   */
  isAncestor(parent: mxCell, child: mxCell): boolean;

  /**
   * Function: contains
   *
   * Returns true if the model contains the given <mxCell>.
   *
   * Parameters:
   *
   * cell - <mxCell> that specifies the cell.
   */
  contains(cell: mxCell);

  /**
   * Function: getParent
   *
   * Returns the parent of the given cell.
   *
   * Parameters:
   *
   * cell - <mxCell> whose parent should be returned.
   */
  getParent(cell: mxCell): mxCell;

  /**
   * Function: add
   *
   * Adds the specified child to the parent at the given index using
   * <mxChildChange> and adds the change to the current transaction. If no
   * index is specified then the child is appended to the parent's array of
   * children. Returns the inserted child.
   *
   * Parameters:
   *
   * parent - <mxCell> that specifies the parent to contain the child.
   * child - <mxCell> that specifies the child to be inserted.
   * index - Optional integer that specifies the index of the child.
   */
  add(parent: mxCell, child: mxCell, index?: number): mxCell;

  /**
   * Function: cellAdded
   *
   * Inner callback to update <cells> when a cell has been added. This
   * implementation resolves collisions by creating new Ids. To change the
   * ID of a cell after it was inserted into the model, use the following
   * code:
   *
   * (code
   * delete model.cells[cell.getId()];
   * cell.setId(newId);
   * model.cells[cell.getId()] = cell;
   * (end)
   *
   * If the change of the ID should be part of the command history, then the
   * cell should be removed from the model and a clone with the new ID should
   * be reinserted into the model instead.
   *
   * Parameters:
   *
   * cell - <mxCell> that specifies the cell that has been added.
   */
  cellAdded(cell: mxCell): void;

  /**
   * Function: createId
   *
   * Hook method to create an Id for the specified cell. This implementation
   * concatenates <prefix>, id and <postfix> to create the Id and increments
   * <nextId>. The cell is ignored by this implementation, but can be used in
   * overridden methods to prefix the Ids with eg. the cell type.
   *
   * Parameters:
   *
   * cell - <mxCell> to create the Id for.
   */
  createId(cell: mxCell): string;

  /**
   * Function: updateEdgeParents
   *
   * Updates the parent for all edges that are connected to cell or one of
   * its descendants using <updateEdgeParent>.
   */
  updateEdgeParents(cell: mxCell, root: mxCell): void;

  /**
   * Function: updateEdgeParent
   *
   * Inner callback to update the parent of the specified <mxCell> to the
   * nearest-common-ancestor of its two terminals.
   *
   * Parameters:
   *
   * edge - <mxCell> that specifies the edge.
   * root - <mxCell> that represents the current root of the model.
   */
  updateEdgeParent(edge: mxCell, root: mxCell): void;

  /**
   * Function: getOrigin
   *
   * Returns the absolute, accumulated origin for the children inside the
   * given parent as an <mxPoint>.
   */
  getOrigin(cell: mxCell): mxPoint;

  /**
   * Function: getNearestCommonAncestor
   *
   * Returns the nearest common ancestor for the specified cells.
   *
   * Parameters:
   *
   * cell1 - <mxCell> that specifies the first cell in the tree.
   * cell2 - <mxCell> that specifies the second cell in the tree.
   */
  getNearestCommonAncestor(cell1: mxCell, cell2: mxCell): mxCell;

  /**
   * Function: remove
   *
   * Removes the specified cell from the model using <mxChildChange> and adds
   * the change to the current transaction. This operation will remove the
   * cell and all of its children from the model. Returns the removed cell.
   *
   * Parameters:
   *
   * cell - <mxCell> that should be removed.
   */
  remove(cell: mxCell): mxCell;

  /**
   * Function: cellRemoved
   *
   * Inner callback to update <cells> when a cell has been removed.
   *
   * Parameters:
   *
   * cell - <mxCell> that specifies the cell that has been removed.
   */
  cellRemoved(cell: mxCell): void;

  /**
   * Function: parentForCellChanged
   *
   * Inner callback to update the parent of a cell using <mxCell.insert>
   * on the parent and return the previous parent.
   *
   * Parameters:
   *
   * cell - <mxCell> to update the parent for.
   * parent - <mxCell> that specifies the new parent of the cell.
   * index - Optional integer that defines the index of the child
   * in the parent's child array.
   */
  parentForCellChanged(cell: mxCell, parent: mxCell, index?: number): void;

  /**
   * Function: getChildCount
   *
   * Returns the number of children in the given cell.
   *
   * Parameters:
   *
   * cell - <mxCell> whose number of children should be returned.
   */
  getChildCount(cell: mxCell): number;

  /**
   * Function: getChildAt
   *
   * Returns the child of the given <mxCell> at the given index.
   *
   * Parameters:
   *
   * cell - <mxCell> that represents the parent.
   * index - Integer that specifies the index of the child to be returned.
   */
  getChildAt(cell: mxCell, index: number): mxCell;

  /**
   * Function: getChildren
   *
   * Returns all children of the given <mxCell> as an array of <mxCells>. The
   * return value should be only be read.
   *
   * Parameters:
   *
   * cell - <mxCell> the represents the parent.
   */
  getChildren(cell: mxCell): mxCell[];

  /**
   * Function: getChildVertices
   *
   * Returns the child vertices of the given parent.
   *
   * Parameters:
   *
   * cell - <mxCell> whose child vertices should be returned.
   */
  getChildVertices(parent: mxCell): mxCell[];

  /**
   * Function: getChildEdges
   *
   * Returns the child edges of the given parent.
   *
   * Parameters:
   *
   * cell - <mxCell> whose child edges should be returned.
   */
  getChildEdges(parent: mxCell): mxCell[];

  /**
   * Function: getChildCells
   *
   * Returns the children of the given cell that are vertices and/or edges
   * depending on the arguments.
   *
   * Parameters:
   *
   * cell - <mxCell> the represents the parent.
   * vertices - Boolean indicating if child vertices should be returned.
   * Default is false.
   * edges - Boolean indicating if child edges should be returned.
   * Default is false.
   */
  getChildCells(parent: mxCell, vertices?: boolean, edges?: boolean): mxCell[];

  /**
   * Function: getTerminal
   *
   * Returns the source or target <mxCell> of the given edge depending on the
   * value of the boolean parameter.
   *
   * Parameters:
   *
   * edge - <mxCell> that specifies the edge.
   * isSource - Boolean indicating which end of the edge should be returned.
   */
  getTerminal(edge: mxCell, isSource: boolean): mxCell;

  /**
   * Function: setTerminal
   *
   * Sets the source or target terminal of the given <mxCell> using
   * <mxTerminalChange> and adds the change to the current transaction.
   * This implementation updates the parent of the edge using <updateEdgeParent>
   * if required.
   *
   * Parameters:
   *
   * edge - <mxCell> that specifies the edge.
   * terminal - <mxCell> that specifies the new terminal.
   * isSource - Boolean indicating if the terminal is the new source or
   * target terminal of the edge.
   */
  setTerminal(edge: mxCell, terminal: mxCell, isSource: boolean): mxCell;

  /**
   * Function: setTerminals
   *
   * Sets the source and target <mxCell> of the given <mxCell> in a single
   * transaction using <setTerminal> for each end of the edge.
   *
   * Parameters:
   *
   * edge - <mxCell> that specifies the edge.
   * source - <mxCell> that specifies the new source terminal.
   * target - <mxCell> that specifies the new target terminal.
   */
  setTerminals(edge: mxCell, source: mxCell, target: mxCell): void;

  /**
   * Function: terminalForCellChanged
   *
   * Inner helper function to update the terminal of the edge using
   * <mxCell.insertEdge> and return the previous terminal.
   *
   * Parameters:
   *
   * edge - <mxCell> that specifies the edge to be updated.
   * terminal - <mxCell> that specifies the new terminal.
   * isSource - Boolean indicating if the terminal is the new source or
   * target terminal of the edge.
   */
  terminalForCellChanged(edge: mxCell, terminal: mxCell, isSource: boolean): mxCell;

  /**
   * Function: getEdgeCount
   *
   * Returns the number of distinct edges connected to the given cell.
   *
   * Parameters:
   *
   * cell - <mxCell> that represents the vertex.
   */
  getEdgeCount(cell: mxCell): number;

  /**
   * Function: getEdgeAt
   *
   * Returns the edge of cell at the given index.
   *
   * Parameters:
   *
   * cell - <mxCell> that specifies the vertex.
   * index - Integer that specifies the index of the edge
   * to return.
   */
  getEdgeAt(cell: mxCell, index: number): mxCell;

  /**
   * Function: getDirectedEdgeCount
   *
   * Returns the number of incoming or outgoing edges, ignoring the given
   * edge.
   *
   * Parameters:
   *
   * cell - <mxCell> whose edge count should be returned.
   * outgoing - Boolean that specifies if the number of outgoing or
   * incoming edges should be returned.
   * ignoredEdge - <mxCell> that represents an edge to be ignored.
   */
  getDirectedEdgeCount(cell: mxCell, outgoing: boolean, ignoredEdge: mxCell): number;

  /**
   * Function: getConnections
   *
   * Returns all edges of the given cell without loops.
   *
   * Parameters:
   *
   * cell - <mxCell> whose edges should be returned.
   *
   */
  getConnections(cell: mxCell): mxCell[];

  /**
   * Function: getIncomingEdges
   *
   * Returns the incoming edges of the given cell without loops.
   *
   * Parameters:
   *
   * cell - <mxCell> whose incoming edges should be returned.
   *
   */
  getIncomingEdges(cell: mxCell): mxCell[];

  /**
   * Function: getOutgoingEdges
   *
   * Returns the outgoing edges of the given cell without loops.
   *
   * Parameters:
   *
   * cell - <mxCell> whose outgoing edges should be returned.
   *
   */
  getOutgoingEdges(cell: mxCell): mxCell[];

  /**
   * Function: getEdges
   *
   * Returns all distinct edges connected to this cell as a new array of
   * <mxCells>. If at least one of incoming or outgoing is true, then loops
   * are ignored, otherwise if both are false, then all edges connected to
   * the given cell are returned including loops.
   *
   * Parameters:
   *
   * cell - <mxCell> that specifies the cell.
   * incoming - Optional boolean that specifies if incoming edges should be
   * returned. Default is true.
   * outgoing - Optional boolean that specifies if outgoing edges should be
   * returned. Default is true.
   * includeLoops - Optional boolean that specifies if loops should be returned.
   * Default is true.
   */
  getEdges(cell: mxCell, incoming?: boolean, outgoing?: boolean, includeLoops?: boolean): mxCell[];

  /**
   * Function: getEdgesBetween
   *
   * Returns all edges between the given source and target pair. If directed
   * is true, then only edges from the source to the target are returned,
   * otherwise, all edges between the two cells are returned.
   *
   * Parameters:
   *
   * source - <mxCell> that defines the source terminal of the edge to be
   * returned.
   * target - <mxCell> that defines the target terminal of the edge to be
   * returned.
   * directed - Optional boolean that specifies if the direction of the
   * edge should be taken into account. Default is false.
   */
  getEdgesBetween(source: mxCell, target: mxCell, directed?: boolean): mxCell[];

  /**
   * Function: getOpposites
   *
   * Returns all opposite vertices wrt terminal for the given edges, only
   * returning sources and/or targets as specified. The result is returned
   * as an array of <mxCells>.
   *
   * Parameters:
   *
   * edges - Array of <mxCells> that contain the edges to be examined.
   * terminal - <mxCell> that specifies the known end of the edges.
   * sources - Boolean that specifies if source terminals should be contained
   * in the result. Default is true.
   * targets - Boolean that specifies if target terminals should be contained
   * in the result. Default is true.
   */
  getOpposites(edges: mxCell[], terminal: mxCell, sources?: boolean, targets?: boolean): mxCell[];

  /**
   * Function: getTopmostCells
   *
   * Returns the topmost cells of the hierarchy in an array that contains no
   * descendants for each <mxCell> that it contains. Duplicates should be
   * removed in the cells array to improve performance.
   *
   * Parameters:
   *
   * cells - Array of <mxCells> whose topmost ancestors should be returned.
   */
  getTopmostCells(cells: mxCell[]): mxCell[];

  /**
   * Function: isVertex
   *
   * Returns true if the given cell is a vertex.
   *
   * Parameters:
   *
   * cell - <mxCell> that represents the possible vertex.
   */
  isVertex(cell: mxCell): boolean;

  /**
   * Function: isEdge
   *
   * Returns true if the given cell is an edge.
   *
   * Parameters:
   *
   * cell - <mxCell> that represents the possible edge.
   */
  isEdge(cell: mxCell): boolean;

  /**
   * Function: isConnectable
   *
   * Returns true if the given <mxCell> is connectable. If <edgesConnectable>
   * is false, then this function returns false for all edges else it returns
   * the return value of <mxCell.isConnectable>.
   *
   * Parameters:
   *
   * cell - <mxCell> whose connectable state should be returned.
   */
  isConnectable(cell: mxCell): boolean;

  /**
   * Function: getValue
   *
   * Returns the user object of the given <mxCell> using <mxCell.getValue>.
   *
   * Parameters:
   *
   * cell - <mxCell> whose user object should be returned.
   */
  getValue(cell: mxCell): boolean;

  /**
   * Function: setValue
   *
   * Sets the user object of then given <mxCell> using <mxValueChange>
   * and adds the change to the current transaction.
   *
   * Parameters:
   *
   * cell - <mxCell> whose user object should be changed.
   * value - Object that defines the new user object.
   */
  setValue(cell: mxCell, value: any): any;

  /**
   * Function: valueForCellChanged
   *
   * Inner callback to update the user object of the given <mxCell>
   * using <mxCell.valueChanged> and return the previous value,
   * that is, the return value of <mxCell.valueChanged>.
   *
   * To change a specific attribute in an XML node, the following code can be
   * used.
   *
   * (code)
   * graph.getModel().valueForCellChanged(cell, value)
   * {
   *   var previous = cell.value.getAttribute('label');
   *   cell.value.setAttribute('label', value);
   *
   *   return previous;
   * };
   * (end)
   */
  valueForCellChanged(cell: mxCell, value: any): any;

  /**
   * Function: getGeometry
   *
   * Returns the <mxGeometry> of the given <mxCell>.
   *
   * Parameters:
   *
   * cell - <mxCell> whose geometry should be returned.
   */
  getGeometry(cell: mxCell): mxGeometry;

  /**
   * Function: setGeometry
   *
   * Sets the <mxGeometry> of the given <mxCell>. The actual update
   * of the cell is carried out in <geometryForCellChanged>. The
   * <mxGeometryChange> action is used to encapsulate the change.
   *
   * Parameters:
   *
   * cell - <mxCell> whose geometry should be changed.
   * geometry - <mxGeometry> that defines the new geometry.
   */
  setGeometry(cell: mxCell, geometry: mxGeometry): mxGeometry;

  /**
   * Function: geometryForCellChanged
   *
   * Inner callback to update the <mxGeometry> of the given <mxCell> using
   * <mxCell.setGeometry> and return the previous <mxGeometry>.
   */
  geometryForCellChanged(cell: mxCell, geometry: mxGeometry): mxGeometry;

  /**
   * Function: getStyle
   *
   * Returns the style of the given <mxCell>.
   *
   * Parameters:
   *
   * cell - <mxCell> whose style should be returned.
   */
  getStyle(cell: mxCell): string;

  /**
   * Function: setStyle
   *
   * Sets the style of the given <mxCell> using <mxStyleChange> and
   * adds the change to the current transaction.
   *
   * Parameters:
   *
   * cell - <mxCell> whose style should be changed.
   * style - String of the form [stylename;|key=value;] to specify
   * the new cell style.
   */
  setStyle(cell: mxCell, style: string): string;

  /**
   * Function: styleForCellChanged
   *
   * Inner callback to update the style of the given <mxCell>
   * using <mxCell.setStyle> and return the previous style.
   *
   * Parameters:
   *
   * cell - <mxCell> that specifies the cell to be updated.
   * style - String of the form [stylename;|key=value;] to specify
   * the new cell style.
   */
  styleForCellChanged(cell: mxCell, style: string): string;

  /**
   * Function: isCollapsed
   *
   * Returns true if the given <mxCell> is collapsed.
   *
   * Parameters:
   *
   * cell - <mxCell> whose collapsed state should be returned.
   */
  isCollapsed(cell: mxCell): boolean;

  /**
   * Function: setCollapsed
   *
   * Sets the collapsed state of the given <mxCell> using <mxCollapseChange>
   * and adds the change to the current transaction.
   *
   * Parameters:
   *
   * cell - <mxCell> whose collapsed state should be changed.
   * collapsed - Boolean that specifies the new collpased state.
   */
  setCollapsed(cell: mxCell, collapsed: boolean): boolean;

  /**
   * Function: collapsedStateForCellChanged
   *
   * Inner callback to update the collapsed state of the
   * given <mxCell> using <mxCell.setCollapsed> and return
   * the previous collapsed state.
   *
   * Parameters:
   *
   * cell - <mxCell> that specifies the cell to be updated.
   * collapsed - Boolean that specifies the new collpased state.
   */
  collapsedStateForCellChanged(cell: mxCell, collapsed: boolean): boolean;

  /**
   * Function: isVisible
   *
   * Returns true if the given <mxCell> is visible.
   *
   * Parameters:
   *
   * cell - <mxCell> whose visible state should be returned.
   */
  isVisible(cell: mxCell): boolean;

  /**
   * Function: setVisible
   *
   * Sets the visible state of the given <mxCell> using <mxVisibleChange> and
   * adds the change to the current transaction.
   *
   * Parameters:
   *
   * cell - <mxCell> whose visible state should be changed.
   * visible - Boolean that specifies the new visible state.
   */
  setVisible(cell: mxCell, visible: boolean): boolean;

  /**
   * Function: visibleStateForCellChanged
   *
   * Inner callback to update the visible state of the
   * given <mxCell> using <mxCell.setCollapsed> and return
   * the previous visible state.
   *
   * Parameters:
   *
   * cell - <mxCell> that specifies the cell to be updated.
   * visible - Boolean that specifies the new visible state.
   */
  visibleStateForCellChanged(cell: mxCell, visible: boolean): boolean;

  /**
   * Function: execute
   *
   * Executes the given edit and fires events if required. The edit object
   * requires an execute function which is invoked. The edit is added to the
   * <currentEdit> between <beginUpdate> and <endUpdate> calls, so that
   * events will be fired if this execute is an individual transaction, that
   * is, if no previous <beginUpdate> calls have been made without calling
   * <endUpdate>. This implementation fires an <execute> event before
   * executing the given change.
   *
   * Parameters:
   *
   * change - Object that described the change.
   */
  execute(change: any): void;

  /**
   * Function: beginUpdate
   *
   * Increments the <updateLevel> by one. The event notification
   * is queued until <updateLevel> reaches 0 by use of
   * <endUpdate>.
   *
   * All changes on <mxGraphModel> are transactional,
   * that is, they are executed in a single undoable change
   * on the model (without transaction isolation).
   * Therefore, if you want to combine any
   * number of changes into a single undoable change,
   * you should group any two or more API calls that
   * modify the graph model between <beginUpdate>
   * and <endUpdate> calls as shown here:
   *
   * (code)
   * var model = graph.getModel();
   * var parent = graph.getDefaultParent();
   * var index = model.getChildCount(parent);
   * model.beginUpdate();
   * try
   * {
   *   model.add(parent, v1, index);
   *   model.add(parent, v2, index+1);
   * }
   * finally
   * {
   *   model.endUpdate();
   * }
   * (end)
   *
   * Of course there is a shortcut for appending a
   * sequence of cells into the default parent:
   *
   * (code)
   * graph.addCells([v1, v2]).
   * (end)
   */
  beginUpdate(): void;

  /**
   * Function: endUpdate
   *
   * Decrements the <updateLevel> by one and fires an <undo>
   * event if the <updateLevel> reaches 0. This function
   * indirectly fires a <change> event by invoking the notify
   * function on the <currentEdit> und then creates a new
   * <currentEdit> using <createUndoableEdit>.
   *
   * The <undo> event is fired only once per edit, whereas
   * the <change> event is fired whenever the notify
   * function is invoked, that is, on undo and redo of
   * the edit.
   */
  endUpdate(): void;

  /**
   * Function: createUndoableEdit
   *
   * Creates a new <mxUndoableEdit> that implements the
   * notify function to fire a <change> and <notify> event
   * through the <mxUndoableEdit>'s source.
   *
   * Parameters:
   *
   * significant - Optional boolean that specifies if the edit to be created is
   * significant. Default is true.
   */
  createUndoableEdit(significant?: boolean): mxUndoableEdit;

  /**
   * Function: mergeChildren
   *
   * Merges the children of the given cell into the given target cell inside
   * this model. All cells are cloned unless there is a corresponding cell in
   * the model with the same id, in which case the source cell is ignored and
   * all edges are connected to the corresponding cell in this model. Edges
   * are considered to have no identity and are always cloned unless the
   * cloneAllEdges flag is set to false, in which case edges with the same
   * id in the target model are reconnected to reflect the terminals of the
   * source edges.
   */
  mergeChildren(from: mxCell, to: mxCell, cloneAllEdges: boolean): void;

  /**
   * Function: mergeChildren
   *
   * Clones the children of the source cell into the given target cell in
   * this model and adds an entry to the mapping that maps from the source
   * cell to the target cell with the same id or the clone of the source cell
   * that was inserted into this model.
   */
  mergeChildrenImpl(from: mxCell, to: mxCell, cloneAllEdges: boolean, mapping: any): void;

  /**
   * Function: getParents
   *
   * Returns an array that represents the set (no duplicates) of all parents
   * for the given array of cells.
   *
   * Parameters:
   *
   * cells - Array of cells whose parents should be returned.
   */
  getParents(cells: mxCell[]): mxCell[];

  //
  // Cell Cloning
  //

  /**
   * Function: cloneCell
   *
   * Returns a deep clone of the given <mxCell> (including
   * the children) which is created using <cloneCells>.
   *
   * Parameters:
   *
   * cell - <mxCell> to be cloned.
   */
  cloneCell(cell: mxCell): mxCell;

  /**
   * Function: cloneCells
   *
   * Returns an array of clones for the given array of <mxCells>.
   * Depending on the value of includeChildren, a deep clone is created for
   * each cell. Connections are restored based if the corresponding
   * cell is contained in the passed in array.
   *
   * Parameters:
   *
   * cells - Array of <mxCell> to be cloned.
   * includeChildren - Boolean indicating if the cells should be cloned
   * with all descendants.
   * mapping - Optional mapping for existing clones.
   */
  cloneCells(cells: mxCell, includeChildren: boolean, mapping: any): mxCell[]

  /**
   * Function: cloneCellImpl
   *
   * Inner helper method for cloning cells recursively.
   */
  cloneCellImpl(cell: mxCell, mapping: any, includeChildren: boolean);

  /**
   * Function: cellCloned
   *
   * Hook for cloning the cell. This returns cell.clone() or
   * any possible exceptions.
   */
  cellCloned(cell: mxCell): mxCell;

  /**
   * Function: restoreClone
   *
   * Inner helper method for restoring the connections in
   * a network of cloned cells.
   */
  restoreClone(clone: mxCell, cell: mxCell, mapping: any): void;

}


/**
 * Class: mxRootChange
 *
 * Action to change the root in a model.
 *
 * Constructor: mxRootChange
 *
 * Constructs a change of the root in the
 * specified model.
 */
export class mxRootChange {
  constructor(model: mxGraphModel, root: mxCell);


  /**
   * Function: execute
   *
   * Carries out a change of the root using
   * <mxGraphModel.rootChanged>.
   */
  execute();
}

/**
 * Class: mxChildChange
 *
 * Action to add or remove a child in a model.
 *
 * Constructor: mxChildChange
 *
 * Constructs a change of a child in the
 * specified model.
 */
export class mxChildChange {
  constructor(model: mxGraphModel, parent: mxCell, child: mxCell, index: number);

  /**
   * Function: execute
   *
   * Changes the parent of <child> using
   * <mxGraphModel.parentForCellChanged> and
   * removes or restores the cell's
   * connections.
   */
  execute();

  /**
   * Function: disconnect
   *
   * Disconnects the given cell recursively from its
   * terminals and stores the previous terminal in the
   * cell's terminals.
   */
  connect(cell: mxCell, isConnect: boolean);
}

/**
 * Class: mxTerminalChange
 *
 * Action to change a terminal in a model.
 *
 * Constructor: mxTerminalChange
 *
 * Constructs a change of a terminal in the
 * specified model.
 */
export class mxTerminalChange {
  constructor(model: mxGraphModel, cell: mxCell, terminal: mxCell, source: mxCell);

  /**
   * Function: execute
   *
   * Changes the terminal of <cell> to <previous> using
   * <mxGraphModel.terminalForCellChanged>.
   */
  execute();

}

/**
 * Class: mxValueChange
 *
 * Action to change a user object in a model.
 *
 * Constructor: mxValueChange
 *
 * Constructs a change of a user object in the
 * specified model.
 */
export class mxValueChange {
  constructor(model: mxGraphModel, cell: mxCell, value: any);

  /**
   * Function: execute
   *
   * Changes the value of <cell> to <previous> using
   * <mxGraphModel.valueForCellChanged>.
   */
  execute();

}

/**
 * Class: mxStyleChange
 *
 * Action to change a cell's style in a model.
 *
 * Constructor: mxStyleChange
 *
 * Constructs a change of a style in the
 * specified model.
 */

export class mxStyleChange {
  constructor(model: mxGraphModel, cell: mxCell, style: string);

  /**
   * Function: execute
   *
   * Changes the style of <cell> to <previous> using
   * <mxGraphModel.styleForCellChanged>.
   */
  execute();

}

/**
 * Class: mxGeometryChange
 *
 * Action to change a cell's geometry in a model.
 *
 * Constructor: mxGeometryChange
 *
 * Constructs a change of a geometry in the
 * specified model.
 */
export class mxGeometryChange {
  constructor(model: mxGraphModel, cell: mxCell, geometry: mxGeometry);

  /**
   * Function: execute
   *
   * Changes the geometry of <cell> ro <previous> using
   * <mxGraphModel.geometryForCellChanged>.
   */
  execute();

}

/**
 * Class: mxCollapseChange
 *
 * Action to change a cell's collapsed state in a model.
 *
 * Constructor: mxCollapseChange
 *
 * Constructs a change of a collapsed state in the
 * specified model.
 */
export class mxCollapseChange {
  constructor(model: mxGraphModel, cell: mxCell, collapsed: boolean);

  /**
   * Function: execute
   *
   * Changes the collapsed state of <cell> to <previous> using
   * <mxGraphModel.collapsedStateForCellChanged>.
   */
  execute();
}

/**
 * Class: mxVisibleChange
 *
 * Action to change a cell's visible state in a model.
 *
 * Constructor: mxVisibleChange
 *
 * Constructs a change of a visible state in the
 * specified model.
 */
export class mxVisibleChange {
  constructor(model: mxGraphModel, cell: mxCell, visible: boolean);

  /**
   * Function: execute
   *
   * Changes the visible state of <cell> to <previous> using
   * <mxGraphModel.visibleStateForCellChanged>.
   */
  execute();
}

/**
 * Class: mxCellAttributeChange
 *
 * Action to change the attribute of a cell's user object.
 * There is no method on the graph model that uses this
 * action. To use the action, you can use the code shown
 * in the example below.
 *
 * Example:
 *
 * To change the attributeName in the cell's user object
 * to attributeValue, use the following code:
 *
 * (code)
 * model.beginUpdate();
 * try
 * {
 *   var edit = new mxCellAttributeChange(
 *     cell, attributeName, attributeValue);
 *   model.execute(edit);
 * }
 * finally
 * {
 *   model.endUpdate();
 * }
 * (end)
 *
 * Constructor: mxCellAttributeChange
 *
 * Constructs a change of a attribute of the DOM node
 * stored as the value of the given <mxCell>.
 */
export class mxCellAttributeChange {
  constructor(cell: mxCell, attribute: string, value: any);

  /**
   * Function: execute
   *
   * Changes the attribute of the cell's user object by
   * using <mxCell.setAttribute>.
   */
  execute();
}


/**
 * Class: mxGraphSelectionModel
 *
 * Implements the selection model for a graph. Here is a listener that handles
 * all removed selection cells.
 *
 * (code)
 * graph.getSelectionModel().addListener(mxEvent.CHANGE, function(sender, evt)
 * {
 *   var cells = evt.getProperty('added');
 *
 *   for (var i = 0; i < cells.length; i++)
 *   {
 *     // Handle cells[i]...
 *   }
 * });
 * (end)
 *
 * Event: mxEvent.UNDO
 *
 * Fires after the selection was changed in <changeSelection>. The
 * <code>edit</code> property contains the <mxUndoableEdit> which contains the
 * <mxSelectionChange>.
 *
 * Event: mxEvent.CHANGE
 *
 * Fires after the selection changes by executing an <mxSelectionChange>. The
 * <code>added</code> and <code>removed</code> properties contain arrays of
 * cells that have been added to or removed from the selection, respectively.
 * The names are inverted due to historic reasons. This cannot be changed.
 *
 * Constructor: mxGraphSelectionModel
 *
 * Constructs a new graph selection model for the given <mxGraph>.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 */
export class mxGraphSelectionModel extends mxEventSource {

  private cells: mxCell[];

  /**
   * Variable: doneResource
   *
   * Specifies the resource key for the status message after a long operation.
   * If the resource for this key does not exist then the value is used as
   * the status message. Default is 'done'.
   */
  doneResource: 'done' | '';

  /**
   * Variable: updatingSelectionResource
   *
   * Specifies the resource key for the status message while the selection is
   * being updated. If the resource for this key does not exist then the
   * value is used as the status message. Default is 'updatingSelection'.
   */
  updatingSelectionResource: 'updatingSelection' | '';

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: singleSelection
   *
   * Specifies if only one selected item at a time is allowed.
   * Default is false.
   */
  singleSelection: boolean;

  constructor(graph: mxGraph);

  /**
   * Function: isSingleSelection
   *
   * Returns <singleSelection> as a boolean.
   */
  isSingleSelection(): boolean;

  /**
   * Function: setSingleSelection
   *
   * Sets the <singleSelection> flag.
   *
   * Parameters:
   *
   * singleSelection - Boolean that specifies the new value for
   * <singleSelection>.
   */
  setSingleSelection(singleSelection: boolean): void;

  /**
   * Function: isSelected
   *
   * Returns true if the given <mxCell> is selected.
   */
  isSelected(cell: mxCell): boolean;

  /**
   * Function: isEmpty
   *
   * Returns true if no cells are currently selected.
   */
  isEmpty(): boolean;

  /**
   * Function: clear
   *
   * Clears the selection and fires a <change> event if the selection was not
   * empty.
   */
  clear(): void;

  /**
   * Function: setCell
   *
   * Selects the specified <mxCell> using <setCells>.
   *
   * Parameters:
   *
   * cell - <mxCell> to be selected.
   */
  setCell(cell: mxCell): void;

  /**
   * Function: setCells
   *
   * Selects the given array of <mxCells> and fires a <change> event.
   *
   * Parameters:
   *
   * cells - Array of <mxCells> to be selected.
   */
  setCells(cells: mxCell[]): void;

  /**
   * Function: getFirstSelectableCell
   *
   * Returns the first selectable cell in the given array of cells.
   */
  getFirstSelectableCell(cells: mxCell[]): mxCell;

  /**
   * Function: addCell
   *
   * Adds the given <mxCell> to the selection and fires a <select> event.
   *
   * Parameters:
   *
   * cell - <mxCell> to add to the selection.
   */
  addCell(cell: mxCell): void;

  /**
   * Function: addCells
   *
   * Adds the given array of <mxCells> to the selection and fires a <select>
   * event.
   *
   * Parameters:
   *
   * cells - Array of <mxCells> to add to the selection.
   */
  addCells(cells: mxCell[]): void;

  /**
   * Function: removeCell
   *
   * Removes the specified <mxCell> from the selection and fires a <select>
   * event for the remaining cells.
   *
   * Parameters:
   *
   * cell - <mxCell> to remove from the selection.
   */
  removeCell(cell: mxCell): void;

  /**
   * Function: removeCells
   */
  removeCells(cells: mxCell[]): void;

  /**
   * Function: changeSelection
   *
   * Inner callback to add the specified <mxCell> to the selection. No event
   * is fired in this implementation.
   *
   * Paramters:
   *
   * cell - <mxCell> to add to the selection.
   */
  changeSelection(added: mxCell[], removed: mxCell[]): void;

  /**
   * Function: cellAdded
   *
   * Inner callback to add the specified <mxCell> to the selection. No event
   * is fired in this implementation.
   *
   * Paramters:
   *
   * cell - <mxCell> to add to the selection.
   */
  cellAdded(cell: mxCell): void;

  /**
   * Function: cellRemoved
   *
   * Inner callback to remove the specified <mxCell> from the selection. No
   * event is fired in this implementation.
   *
   * Parameters:
   *
   * cell - <mxCell> to remove from the selection.
   */
  cellRemoved(cell: mxCell): void;
}

/**
 * Class: mxSelectionChange
 *
 * Action to change the current root in a view.
 *
 * Constructor: mxCurrentRootChange
 *
 * Constructs a change of the current root in the given view.
 */
export class mxSelectionChange {
  private selectionModel: mxGraphSelectionModel;
  private added: mxCell[];
  private removed: mxCell[];

  constructor(selectionModel: mxGraphSelectionModel, added: mxCell[], removed: mxCell[]);

  /**
   * Function: execute
   *
   * Changes the current root of the view.
   */
  execute(): void;

}


/**
 * Class: mxGraphView
 *
 * Extends <mxEventSource> to implement a view for a graph. This class is in
 * charge of computing the absolute coordinates for the relative child
 * geometries, the points for perimeters and edge styles and keeping them
 * cached in <mxCellStates> for faster retrieval. The states are updated
 * whenever the model or the view state (translate, scale) changes. The scale
 * and translate are honoured in the bounds.
 *
 * Event: mxEvent.UNDO
 *
 * Fires after the root was changed in <setCurrentRoot>. The <code>edit</code>
 * property contains the <mxUndoableEdit> which contains the
 * <mxCurrentRootChange>.
 *
 * Event: mxEvent.SCALE_AND_TRANSLATE
 *
 * Fires after the scale and translate have been changed in <scaleAndTranslate>.
 * The <code>scale</code>, <code>previousScale</code>, <code>translate</code>
 * and <code>previousTranslate</code> properties contain the new and previous
 * scale and translate, respectively.
 *
 * Event: mxEvent.SCALE
 *
 * Fires after the scale was changed in <setScale>. The <code>scale</code> and
 * <code>previousScale</code> properties contain the new and previous scale.
 *
 * Event: mxEvent.TRANSLATE
 *
 * Fires after the translate was changed in <setTranslate>. The
 * <code>translate</code> and <code>previousTranslate</code> properties contain
 * the new and previous value for translate.
 *
 * Event: mxEvent.DOWN and mxEvent.UP
 *
 * Fire if the current root is changed by executing an <mxCurrentRootChange>.
 * The event name depends on the location of the root in the cell hierarchy
 * with respect to the current root. The <code>root</code> and
 * <code>previous</code> properties contain the new and previous root,
 * respectively.
 *
 * Constructor: mxGraphView
 *
 * Constructs a new view for the given <mxGraph>.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 */
export class mxGraphView extends mxEventSource {
  constructor(graph: mxGraph);

  /**
   *
   */
  EMPTY_POINT: mxPoint;

  /**
   * Variable: doneResource
   *
   * Specifies the resource key for the status message after a long operation.
   * If the resource for this key does not exist then the value is used as
   * the status message. Default is 'done'.
   */
  doneResource: 'done' | '';

  /**
   * Function: updatingDocumentResource
   *
   * Specifies the resource key for the status message while the document is
   * being updated. If the resource for this key does not exist then the
   * value is used as the status message. Default is 'updatingDocument'.
   */
  updatingDocumentResource: 'updatingDocument' | '';

  /**
   * Variable: allowEval
   *
   * Specifies if string values in cell styles should be evaluated using
   * <mxUtils.eval>. This will only be used if the string values can't be mapped
   * to objects using <mxStyleRegistry>. Default is false. NOTE: Enabling this
   * switch carries a possible security risk.
   */
  allowEval: boolean;

  /**
   * Variable: captureDocumentGesture
   *
   * Specifies if a gesture should be captured when it goes outside of the
   * graph container. Default is true.
   */
  captureDocumentGesture: boolean;

  /**
   * Variable: optimizeVmlReflows
   *
   * Specifies if the <canvas> should be hidden while rendering in IE8 standards
   * mode and quirks mode. This will significantly improve rendering performance.
   * Default is true.
   */
  optimizeVmlReflows: boolean;

  /**
   * Variable: rendering
   *
   * Specifies if shapes should be created, updated and destroyed using the
   * methods of <mxCellRenderer> in <graph>. Default is true.
   */
  rendering: boolean;

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: currentRoot
   *
   * <mxCell> that acts as the root of the displayed cell hierarchy.
   */
  currentRoot: mxCell;

  /**
   * Variable: graphBounds
   *
   * <mxRectangle> that caches the scales, translated bounds of the current view.
   */
  graphBounds: mxRectangle;

  /**
   * Variable: scale
   *
   * Specifies the scale. Default is 1 (100%).
   */
  scale: number;

  /**
   * Variable: translate
   *
   * <mxPoint> that specifies the current translation. Default is a new
   * empty <mxPoint>.
   */
  translate: mxPoint;

  /**
   * Variable: states
   *
   * <mxDictionary> that maps from cell IDs to <mxCellStates>.
   */
  states: mxDictionary<mxCellState>;

  /**
   * Variable: updateStyle
   *
   * Specifies if the style should be updated in each validation step. If this
   * is false then the style is only updated if the state is created or if the
   * style of the cell was changed. Default is false.
   */
  updateStyle: boolean;

  /**
   * Variable: lastNode
   *
   * During validation, this contains the last DOM node that was processed.
   */
  lastNode: Element;

  /**
   * Variable: lastHtmlNode
   *
   * During validation, this contains the last HTML DOM node that was processed.
   */
  lastHtmlNode: HTMLElement;

  /**
   * Variable: lastForegroundNode
   *
   * During validation, this contains the last edge's DOM node that was processed.
   */
  lastForegroundNode: Element;

  /**
   * Variable: lastForegroundHtmlNode
   *
   * During validation, this contains the last edge HTML DOM node that was processed.
   */
  lastForegroundHtmlNode: HTMLElement;

  /**
   * Function: getGraphBounds
   *
   * Returns <graphBounds>.
   */
  getGraphBounds(): mxRectangle;

  /**
   * Function: setGraphBounds
   *
   * Sets <graphBounds>.
   */
  setGraphBounds(value: mxRectangle): void;

  /**
   * Function: getBounds
   *
   * Returns the union of all <mxCellStates> for the given array of <mxCells>.
   *
   * Parameters:
   *
   * cells - Array of <mxCells> whose bounds should be returned.
   */
  getBounds(cells: mxCell[]): mxRectangle;

  /**
   * Function: setCurrentRoot
   *
   * Sets and returns the current root and fires an <undo> event before
   * calling <mxGraph.sizeDidChange>.
   *
   * Parameters:
   *
   * root - <mxCell> that specifies the root of the displayed cell hierarchy.
   */
  setCurrentRoot(root: mxCell): mxCell;

  /**
   * Function: scaleAndTranslate
   *
   * Sets the scale and translation and fires a <scale> and <translate> event
   * before calling <revalidate> followed by <mxGraph.sizeDidChange>.
   *
   * Parameters:
   *
   * scale - Decimal value that specifies the new scale (1 is 100%).
   * dx - X-coordinate of the translation.
   * dy - Y-coordinate of the translation.
   */
  scaleAndTranslate(scale: number, dx: number, dy: number): void;

  /**
   * Function: getScale
   *
   * Returns the <scale>.
   */
  getScale(): number;

  /**
   * Function: setScale
   *
   * Sets the scale and fires a <scale> event before calling <revalidate> followed
   * by <mxGraph.sizeDidChange>.
   *
   * Parameters:
   *
   * value - Decimal value that specifies the new scale (1 is 100%).
   */
  setScale(value: number): void;

  /**
   * Function: getTranslate
   *
   * Returns the <translate>.
   */
  getTranslate(): mxPoint;

  /**
   * Function: setTranslate
   *
   * Sets the translation and fires a <translate> event before calling
   * <revalidate> followed by <mxGraph.sizeDidChange>. The translation is the
   * negative of the origin.
   *
   * Parameters:
   *
   * dx - X-coordinate of the translation.
   * dy - Y-coordinate of the translation.
   */
  setTranslate(dx: number, dy: number): void;

  /**
   * Function: viewStateChanged
   *
   * Invoked after <scale> and/or <translate> has changed.
   */
  viewStateChanged(): void;

  /**
   * Function: refresh
   *
   * Clears the view if <currentRoot> is not null and revalidates.
   */
  refresh(): void;

  /**
   * Function: revalidate
   *
   * Revalidates the complete view with all cell states.
   */
  revalidate(): void;

  /**
   * Function: clear
   *
   * Removes the state of the given cell and all descendants if the given
   * cell is not the current root.
   *
   * Parameters:
   *
   * cell - Optional <mxCell> for which the state should be removed. Default
   * is the root of the model.
   * force - Boolean indicating if the current root should be ignored for
   * recursion.
   */
  clear(cell: mxCell, force: boolean, recurse: boolean): void;

  /**
   * Function: invalidate
   *
   * Invalidates the state of the given cell, all its descendants and
   * connected edges.
   *
   * Parameters:
   *
   * cell - Optional <mxCell> to be invalidated. Default is the root of the
   * model.
   */
  invalidate(cell: mxCell, recurse: boolean, includeEdges: boolean);

  /**
   * Function: validate
   *
   * Calls <validateCell> and <validateCellState> and updates the <graphBounds>
   * using <getBoundingBox>. Finally the background is validated using
   * <validateBackground>.
   *
   * Parameters:
   *
   * cell - Optional <mxCell> to be used as the root of the validation.
   * Default is <currentRoot> or the root of the model.
   */
  validate(cell: mxCell): void;

  /**
   * Function: getEmptyBounds
   *
   * Returns the bounds for an empty graph. This returns a rectangle at
   * <translate> with the size of 0 x 0.
   */
  getEmptyBounds(): mxRectangle;

  /**
   * Function: getBoundingBox
   *
   * Returns the bounding box of the shape and the label for the given
   * <mxCellState> and its children if recurse is true.
   *
   * Parameters:
   *
   * state - <mxCellState> whose bounding box should be returned.
   * recurse - Optional boolean indicating if the children should be included.
   * Default is true.
   */
  getBoundingBox(state: mxCellState, recurse: boolean): mxRectangle;

  /**
   * Function: createBackgroundPageShape
   *
   * Creates and returns the shape used as the background page.
   *
   * Parameters:
   *
   * bounds - <mxRectangle> that represents the bounds of the shape.
   */
  createBackgroundPageShape(bounds: mxRectangle): mxRectangleShape;

  /**
   * Function: validateBackground
   *
   * Calls <validateBackgroundImage> and <validateBackgroundPage>.
   */
  validateBackground(): void;

  /**
   * Function: validateBackgroundImage
   *
   * Validates the background image.
   */
  validateBackgroundImage(): void;

  /**
   * Function: validateBackgroundPage
   *
   * Validates the background page.
   */
  validateBackgroundPage(): void;

  /**
   * Function: getBackgroundPageBounds
   *
   * Returns the bounds for the background page.
   */
  getBackgroundPageBounds(): mxRectangle;

  /**
   * Function: redrawBackgroundImage
   *
   * Updates the bounds and redraws the background image.
   *
   * Example:
   *
   * If the background image should not be scaled, this can be replaced with
   * the following.
   *
   * (code)
   * redrawBackground(backgroundImage, bg)
   * {
   *   backgroundImage.bounds.x = this.translate.x;
   *   backgroundImage.bounds.y = this.translate.y;
   *   backgroundImage.bounds.width = bg.width;
   *   backgroundImage.bounds.height = bg.height;
   *
   *   backgroundImage.redraw();
   * };
   * (end)
   *
   * Parameters:
   *
   * backgroundImage - <mxImageShape> that represents the background image.
   * bg - <mxImage> that specifies the image and its dimensions.
   */
  redrawBackgroundImage(backgroundImage: mxImageShape, bg: mxImage): void;

  /**
   * Function: validateCell
   *
   * Recursively creates the cell state for the given cell if visible is true and
   * the given cell is visible. If the cell is not visible but the state exists
   * then it is removed using <removeState>.
   *
   * Parameters:
   *
   * cell - <mxCell> whose <mxCellState> should be created.
   * visible - Optional boolean indicating if the cell should be visible. Default
   * is true.
   */
  validateCell(cell: mxCell, visible?: boolean): void;

  /**
   * Function: validateCellState
   *
   * Validates and repaints the <mxCellState> for the given <mxCell>.
   *
   * Parameters:
   *
   * cell - <mxCell> whose <mxCellState> should be validated.
   * recurse - Optional boolean indicating if the children of the cell should be
   * validated. Default is true.
   */
  validateCellState(cell: mxCell, recurse?: boolean): void;
  /**
   * Function: updateCellState
   *
   * Updates the given <mxCellState>.
   *
   * Parameters:
   *
   * state - <mxCellState> to be updated.
   */
  updateCellState(state: mxCellState): void;

  /**
   * Function: isCellCollapsed
   *
   * Returns true if the children of the given cell should not be visible in the
   * view. This implementation uses <mxGraph.isCellVisible> but it can be
   * overidden to use a separate condition.
   */
  isCellCollapsed(cell: mxCell): boolean;

  /**
   * Function: updateVertexState
   *
   * Validates the given cell state.
   */
  updateVertexState(state: mxCellState, geo: mxGeometry): void;

  /**
   * Function: updateEdgeState
   *
   * Validates the given cell state.
   */
  updateEdgeState(state: mxCellState, geo: mxGeometry): void;

  /**
   * Function: updateVertexLabelOffset
   *
   * Updates the absoluteOffset of the given vertex cell state. This takes
   * into account the label position styles.
   *
   * Parameters:
   *
   * state - <mxCellState> whose absolute offset should be updated.
   */
  updateVertexLabelOffset(state: mxCellState): void;

  /**
   * Function: resetValidationState
   *
   * Resets the current validation state.
   */
  resetValidationState(): void;

  /**
   * Function: stateValidated
   *
   * Invoked when a state has been processed in <validatePoints>. This is used
   * to update the order of the DOM nodes of the shape.
   *
   * Parameters:
   *
   * state - <mxCellState> that represents the cell state.
   */
  stateValidated(state: mxCellState): void;

  /**
   * Function: updateFixedTerminalPoints
   *
   * Sets the initial absolute terminal points in the given state before the edge
   * style is computed.
   *
   * Parameters:
   *
   * edge - <mxCellState> whose initial terminal points should be updated.
   * source - <mxCellState> which represents the source terminal.
   * target - <mxCellState> which represents the target terminal.
   */
  updateFixedTerminalPoints(edge: mxCellState, source: mxCellState, target: mxCellState): void;

  /**
   * Function: updateFixedTerminalPoint
   *
   * Sets the fixed source or target terminal point on the given edge.
   *
   * Parameters:
   *
   * edge - <mxCellState> whose terminal point should be updated.
   * terminal - <mxCellState> which represents the actual terminal.
   * source - Boolean that specifies if the terminal is the source.
   * constraint - <mxConnectionConstraint> that specifies the connection.
   */
  updateFixedTerminalPoint(edge: mxCellState, terminal: mxCellState, source: boolean, constraint: mxConnectionConstraint): void;

  /**
   * Function: getFixedTerminalPoint
   *
   * Returns the fixed source or target terminal point for the given edge.
   *
   * Parameters:
   *
   * edge - <mxCellState> whose terminal point should be returned.
   * terminal - <mxCellState> which represents the actual terminal.
   * source - Boolean that specifies if the terminal is the source.
   * constraint - <mxConnectionConstraint> that specifies the connection.
   */
  getFixedTerminalPoint(edge: mxCellState, terminal: mxCellState, source: boolean, constraint: mxConnectionConstraint): void;

  /**
   * Function: updateBoundsFromStencil
   *
   * Updates the bounds of the given cell state to reflect the bounds of the stencil
   * if it has a fixed aspect and returns the previous bounds as an <mxRectangle> if
   * the bounds have been modified or null otherwise.
   *
   * Parameters:
   *
   * edge - <mxCellState> whose bounds should be updated.
   */
  updateBoundsFromStencil(state: mxCellState): mxRectangle;

  /**
   * Function: updatePoints
   *
   * Updates the absolute points in the given state using the specified array
   * of <mxPoints> as the relative points.
   *
   * Parameters:
   *
   * edge - <mxCellState> whose absolute points should be updated.
   * points - Array of <mxPoints> that constitute the relative points.
   * source - <mxCellState> that represents the source terminal.
   * target - <mxCellState> that represents the target terminal.
   */
  updatePoints(edge: mxCellState, points: mxPoint[], source: mxCellState, target: mxCellState): void;

  /**
   * Function: transformControlPoint
   *
   * Transforms the given control point to an absolute point.
   */
  transformControlPoint(state: mxCellState, pt: mxPoint): mxPoint;

  /**
   * Function: isLoopStyleEnabled
   *
   * Returns true if the given edge should be routed with <mxGraph.defaultLoopStyle>
   * or the <mxConstants.STYLE_LOOP> defined for the given edge. This implementation
   * returns true if the given edge is a loop and does not
   */
  isLoopStyleEnabled(edge: mxCellState, points: mxPoint[], source: mxCellState, target: mxCellState): boolean;

  /**
   * Function: getEdgeStyle
   *
   * Returns the edge style function to be used to render the given edge state.
   */
  getEdgeStyle(edge: mxCellState, points: mxPoint[], source: mxCellState, target: mxCellState): any;

  /**
   * Function: updateFloatingTerminalPoints
   *
   * Updates the terminal points in the given state after the edge style was
   * computed for the edge.
   *
   * Parameters:
   *
   * state - <mxCellState> whose terminal points should be updated.
   * source - <mxCellState> that represents the source terminal.
   * target - <mxCellState> that represents the target terminal.
   */
  updateFloatingTerminalPoints(state: mxCellState, source: mxCellState, target: mxCellState): void;

  /**
   * Function: updateFloatingTerminalPoint
   *
   * Updates the absolute terminal point in the given state for the given
   * start and end state, where start is the source if source is true.
   *
   * Parameters:
   *
   * edge - <mxCellState> whose terminal point should be updated.
   * start - <mxCellState> for the terminal on "this" side of the edge.
   * end - <mxCellState> for the terminal on the other side of the edge.
   * source - Boolean indicating if start is the source terminal state.
   */
  updateFloatingTerminalPoint(edge: mxCellState, start: mxCellState, end: mxCellState, source: boolean): void;

  /**
   * Function: getFloatingTerminalPoint
   *
   * Returns the floating terminal point for the given edge, start and end
   * state, where start is the source if source is true.
   *
   * Parameters:
   *
   * edge - <mxCellState> whose terminal point should be returned.
   * start - <mxCellState> for the terminal on "this" side of the edge.
   * end - <mxCellState> for the terminal on the other side of the edge.
   * source - Boolean indicating if start is the source terminal state.
   */
  getFloatingTerminalPoint(edge: mxCellState, start: mxCellState, end: mxCellState, source: boolean): mxPoint;

  /**
   * Function: getTerminalPort
   *
   * Returns an <mxCellState> that represents the source or target terminal or
   * port for the given edge.
   *
   * Parameters:
   *
   * state - <mxCellState> that represents the state of the edge.
   * terminal - <mxCellState> that represents the terminal.
   * source - Boolean indicating if the given terminal is the source terminal.
   */
  getTerminalPort(state: mxCellState, terminal: mxCellState, source: boolean): mxCellState;

  /**
   * Function: getPerimeterPoint
   *
   * Returns an <mxPoint> that defines the location of the intersection point between
   * the perimeter and the line between the center of the shape and the given point.
   *
   * Parameters:
   *
   * terminal - <mxCellState> for the source or target terminal.
   * next - <mxPoint> that lies outside of the given terminal.
   * orthogonal - Boolean that specifies if the orthogonal projection onto
   * the perimeter should be returned. If this is false then the intersection
   * of the perimeter and the line between the next and the center point is
   * returned.
   * border - Optional border between the perimeter and the shape.
   */
  getPerimeterPoint(terminal: mxCellState, next: mxPoint, orthogonal: boolean, border: number): mxPoint;

  /**
   * Function: getRoutingCenterX
   *
   * Returns the x-coordinate of the center point for automatic routing.
   */
  getRoutingCenterX(state: mxCellState): number

  /**
   * Function: getRoutingCenterY
   *
   * Returns the y-coordinate of the center point for automatic routing.
   */
  getRoutingCenterY(state: mxCellState): number

  /**
   * Function: getPerimeterBounds
   *
   * Returns the perimeter bounds for the given terminal, edge pair as an
   * <mxRectangle>.
   *
   * If you have a model where each terminal has a relative child that should
   * act as the graphical endpoint for a connection from/to the terminal, then
   * this method can be replaced as follows:
   *
   * (code)
   * var oldGetPerimeterBounds = getPerimeterBounds;
   * getPerimeterBounds(terminal, edge, isSource)
   * {
   *   var model = this.graph.getModel();
   *   var childCount = model.getChildCount(terminal.cell);
   *
   *   if (childCount > 0)
   *   {
   *     var child = model.getChildAt(terminal.cell, 0);
   *     var geo = model.getGeometry(child);
   *
   *     if (geo != null &&
   *         geo.relative)
   *     {
   *       var state = this.getState(child);
   *
   *       if (state != null)
   *       {
   *         terminal = state;
   *       }
   *     }
   *   }
   *
   *   return oldGetPerimeterBounds.apply(this, arguments);
   * };
   * (end)
   *
   * Parameters:
   *
   * terminal - <mxCellState> that represents the terminal.
   * border - Number that adds a border between the shape and the perimeter.
   */
  getPerimeterBounds(terminal: mxCellState, border: number): mxRectangle;

  /**
   * Function: getPerimeterFunction
   *
   * Returns the perimeter function for the given state.
   */
  getPerimeterFunction(state: mxCellState): any;

  /**
   * Function: getNextPoint
   *
   * Returns the nearest point in the list of absolute points or the center
   * of the opposite terminal.
   *
   * Parameters:
   *
   * edge - <mxCellState> that represents the edge.
   * opposite - <mxCellState> that represents the opposite terminal.
   * source - Boolean indicating if the next point for the source or target
   * should be returned.
   */
  getNextPoint(edge: mxCellState, opposite: mxCellState, source: boolean): mxPoint;

  /**
   * Function: getVisibleTerminal
   *
   * Returns the nearest ancestor terminal that is visible. The edge appears
   * to be connected to this terminal on the display. The result of this method
   * is cached in <mxCellState.getVisibleTerminalState>.
   *
   * Parameters:
   *
   * edge - <mxCell> whose visible terminal should be returned.
   * source - Boolean that specifies if the source or target terminal
   * should be returned.
   */
  getVisibleTerminal(edge: mxCell, source: boolean): mxCell;

  /**
   * Function: updateEdgeBounds
   *
   * Updates the given state using the bounding box of t
   * he absolute points.
   * Also updates <mxCellState.terminalDistance>, <mxCellState.length> and
   * <mxCellState.segments>.
   *
   * Parameters:
   *
   * state - <mxCellState> whose bounds should be updated.
   */
  updateEdgeBounds(state: mxCellState): void;

  /**
   * Function: getPoint
   *
   * Returns the absolute point on the edge for the given relative
   * <mxGeometry> as an <mxPoint>. The edge is represented by the given
   * <mxCellState>.
   *
   * Parameters:
   *
   * state - <mxCellState> that represents the state of the parent edge.
   * geometry - <mxGeometry> that represents the relative location.
   */
  getPoint(state: mxCellState, geometry: mxGeometry): mxPoint;

  /**
   * Function: getRelativePoint
   *
   * Gets the relative point that describes the given, absolute label
   * position for the given edge state.
   *
   * Parameters:
   *
   * state - <mxCellState> that represents the state of the parent edge.
   * x - Specifies the x-coordinate of the absolute label location.
   * y - Specifies the y-coordinate of the absolute label location.
   */
  getRelativePoint(edgeState: mxCellState, x: number, y: number): mxPoint;

  /**
   * Function: updateEdgeLabelOffset
   *
   * Updates <mxCellState.absoluteOffset> for the given state. The absolute
   * offset is normally used for the position of the edge label. Is is
   * calculated from the geometry as an absolute offset from the center
   * between the two endpoints if the geometry is absolute, or as the
   * relative distance between the center along the line and the absolute
   * orthogonal distance if the geometry is relative.
   *
   * Parameters:
   *
   * state - <mxCellState> whose absolute offset should be updated.
   */
  updateEdgeLabelOffset(state: mxCellState): void;

  /**
   * Function: getState
   *
   * Returns the <mxCellState> for the given cell. If create is true, then
   * the state is created if it does not yet exist.
   *
   * Parameters:
   *
   * cell - <mxCell> for which the <mxCellState> should be returned.
   * create - Optional boolean indicating if a new state should be created
   * if it does not yet exist. Default is false.
   */
  getState(cell: mxCell, create?: boolean): mxCellState;

  /**
   * Function: isRendering
   *
   * Returns <rendering>.
   */
  isRendering(): boolean;

  /**
   * Function: setRendering
   *
   * Sets <rendering>.
   */
  setRendering(value: boolean): void

  /**
   * Function: isAllowEval
   *
   * Returns <allowEval>.
   */
  isAllowEval(): boolean;

  /**
   * Function: setAllowEval
   *
   * Sets <allowEval>.
   */
  setAllowEval(value: boolean): void;

  /**
   * Function: getStates
   *
   * Returns <states>.
   */
  getStates(): mxDictionary<mxCellState>;

  /**
   * Function: setStates
   *
   * Sets <states>.
   */
  setStates(value: mxDictionary<mxCellState>): void;

  /**
   * Function: getCellStates
   *
   * Returns the <mxCellStates> for the given array of <mxCells>. The array
   * contains all states that are not null, that is, the returned array may
   * have less elements than the given array. If no argument is given, then
   * this returns <states>.
   */
  getCellStates(cells: mxCell[]): mxCellState[];

  /**
   * Function: removeState
   *
   * Removes and returns the <mxCellState> for the given cell.
   *
   * Parameters:
   *
   * cell - <mxCell> for which the <mxCellState> should be removed.
   */
  removeState(cell: mxCell): mxCellState;

  /**
   * Function: createState
   *
   * Creates and returns an <mxCellState> for the given cell and initializes
   * it using <mxCellRenderer.initialize>.
   *
   * Parameters:
   *
   * cell - <mxCell> for which a new <mxCellState> should be created.
   */
  createState(cell: mxCell): mxCellState;

  /**
   * Function: getCanvas
   *
   * Returns the DOM node that contains the background-, draw- and
   * overlay- and decoratorpanes.
   */
  getCanvas(): Element;

  /**
   * Function: getBackgroundPane
   *
   * Returns the DOM node that represents the background layer.
   */
  getBackgroundPane(): Element;

  /**
   * Function: getDrawPane
   *
   * Returns the DOM node that represents the main drawing layer.
   */
  getDrawPane(): Element;

  /**
   * Function: getOverlayPane
   *
   * Returns the DOM node that represents the layer above the drawing layer.
   */
  getOverlayPane(): Element;

  /**
   * Function: getDecoratorPane
   *
   * Returns the DOM node that represents the topmost drawing layer.
   */
  getDecoratorPane(): Element;

  /**
   * Function: isContainerEvent
   *
   * Returns true if the event origin is one of the drawing panes or
   * containers of the view.
   */
  isContainerEvent(evt: Event): boolean;

  /**
   * Function: isScrollEvent
   *
   * Returns true if the event origin is one of the scrollbars of the
   * container in IE. Such events are ignored.
   */
  isScrollEvent(evt: Event): boolean;

  /**
   * Function: init
   *
   * Initializes the graph event dispatch loop for the specified container
   * and invokes <create> to create the required DOM nodes for the display.
   */
  init(): void;

  /**
   * Function: installListeners
   *
   * Installs the required listeners in the container.
   */
  installListeners(): void;

  /**
   * Function: create
   *
   * Creates the DOM nodes for the HTML display.
   */
  createHtml(): void;

  /**
   * Function: updateHtmlCanvasSize
   *
   * Updates the size of the HTML canvas.
   */
  updateHtmlCanvasSize(width: number, height: number): void;

  /**
   * Function: createHtmlPane
   *
   * Creates and returns a drawing pane in HTML (DIV).
   */
  createHtmlPane(width: number, height: number): Element;

  /**
   * Function: create
   *
   * Creates the DOM nodes for the VML display.
   */
  createVml(): Element

  /**
   * Function: createVmlPane
   *
   * Creates a drawing pane in VML (group).
   */
  createVmlPane(width: number, height: number): Element;

  /**
   * Function: create
   *
   * Creates and returns the DOM nodes for the SVG display.
   */
  createSvg(): Element;

  /**
   * Function: updateContainerStyle
   *
   * Updates the style of the container after installing the SVG DOM elements.
   */
  updateContainerStyle(container: Element): void;

  /**
   * Function: destroy
   *
   * Destroys the view and all its resources.
   */
  destroy(): void;

}

/**
 * Class: mxCurrentRootChange
 *
 * Action to change the current root in a view.
 *
 * Constructor: mxCurrentRootChange
 *
 * Constructs a change of the current root in the given view.
 */
export class mxCurrentRootChange {
  constructor(view: mxGraphView, root: mxCell);

  /**
   * Function: execute
   *
   * Changes the current root of the view.
   */
  execute();
}


/**
 * Class: mxGuide
 *
 * Implements the alignment of selection cells to other cells in the graph.
 *
 * Constructor: mxGuide
 *
 * Constructs a new guide object.
 */
export class mxGuide {
  constructor(graph: mxGraph, states: mxCellState[]);

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph> instance.
   */
  graph: mxGraph;

  /**
   * Variable: states
   *
   * Contains the <mxCellStates> that are used for alignment.
   */
  states: mxCellState[];

  /**
   * Variable: horizontal
   *
   * Specifies if horizontal guides are enabled. Default is true.
   */
  horizontal: boolean;

  /**
   * Variable: vertical
   *
   * Specifies if vertical guides are enabled. Default is true.
   */
  vertical: boolean;

  /**
   * Variable: vertical
   *
   * Holds the <mxShape> for the horizontal guide.
   */
  guideX: mxShape;

  /**
   * Variable: vertical
   *
   * Holds the <mxShape> for the vertical guide.
   */
  guideY: mxShape;

  /**
   * Function: setStates
   *
   * Sets the <mxCellStates> that should be used for alignment.
   */
  setStates(states: mxCellState[]): void;

  /**
   * Function: isEnabledForEvent
   *
   * Returns true if the guide should be enabled for the given native event. This
   * implementation always returns true.
   */
  isEnabledForEvent(evt: Event): boolean;

  /**
   * Function: getGuideTolerance
   *
   * Returns the tolerance for the guides. Default value is gridSize / 2.
   */
  getGuideTolerance(): number;

  /**
   * Function: createGuideShape
   *
   * Returns the mxShape to be used for painting the respective guide. This
   * implementation returns a new, dashed and crisp <mxPolyline> using
   * <mxConstants.GUIDE_COLOR> and <mxConstants.GUIDE_STROKEWIDTH> as the format.
   *
   * Parameters:
   *
   * horizontal - Boolean that specifies which guide should be created.
   */
  createGuideShape(horizontal: boolean): mxPolyline;

  /**
   * Function: move
   *
   * Moves the <bounds> by the given <mxPoint> and returnt the snapped point.
   */
  move(bounds: mxRectangle, delta: mxPoint, gridEnabled: boolean, clone: boolean): mxPoint;

  /**
   * Function: hide
   *
   * Hides all current guides.
   */
  getGuideColor(state: mxCellState, horizontal: any): string;

  /**
   * Function: hide
   *
   * Hides all current guides.
   */
  hide(): void;

  /**
   * Function: setVisible
   *
   * Shows or hides the current guides.
   */
  setVisible(visible: boolean): void;

  /**
   * Function: destroy
   *
   * Destroys all resources that this object uses.
   */
  destroy(): void;
}


/**
 * Class: mxImage
 *
 * Encapsulates the URL, width and height of an image.
 *
 * Constructor: mxImage
 *
 * Constructs a new image.
 */
export class mxImage {
  constructor(src: string, width: number, height: number);

  /**
   * Variable: src
   *
   * String that specifies the URL of the image.
   */
  src: string;

  /**
   * Variable: width
   *
   * Integer that specifies the width of the image.
   */
  width: number;

  /**
   * Variable: height
   *
   * Integer that specifies the height of the image.
   */
  height: number;
}


/**
 * Class: mxImageBundle
 *
 * Maps from keys to base64 encoded images or file locations. All values must
 * be URLs or use the format data:image/format followed by a comma and the base64
 * encoded image data, eg. "data:image/gif,XYZ", where XYZ is the base64 encoded
 * image data.
 *
 * To add a new image bundle to an existing graph, the following code is used:
 *
 * (code)
 * var bundle = new mxImageBundle(alt);
 * bundle.putImage('myImage', 'data:image/gif,R0lGODlhEAAQAMIGAAAAAICAAICAgP' +
 *   '//AOzp2O3r2////////yH+FUNyZWF0ZWQgd2l0aCBUaGUgR0lNUAAh+QQBCgAHACwAAAAA' +
 *   'EAAQAAADTXi63AowynnAMDfjPUDlnAAJhmeBFxAEloliKltWmiYCQvfVr6lBPB1ggxN1hi' +
 *   'laSSASFQpIV5HJBDyHpqK2ejVRm2AAgZCdmCGO9CIBADs=', fallback);
 * bundle.putImage('mySvgImage', 'data:image/svg+xml,' + encodeURIComponent(
 *   '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">' +
 *   '<linearGradient id="gradient"><stop offset="10%" stop-color="#F00"/>' +
 *   '<stop offset="90%" stop-color="#fcc"/></linearGradient>' +
 *   '<rect fill="url(#gradient)" width="100%" height="100%"/></svg>'), fallback);
 * graph.addImageBundle(bundle);
 * (end);
 *
 * Alt is an optional boolean (default is false) that specifies if the value
 * or the fallback should be returned in <getImage>.
 *
 * The image can then be referenced in any cell style using image=myImage.
 * If you are using mxOutline, you should use the same image bundles in the
 * graph that renders the outline.
 *
 * The keys for images are resolved in <mxGraph.postProcessCellStyle> and
 * turned into a data URI if the returned value has a short data URI format
 * as specified above.
 *
 * A typical value for the fallback is a MTHML link as defined in RFC 2557.
 * Note that this format requires a file to be dynamically created on the
 * server-side, or the page that contains the graph to be modified to contain
 * the resources, this can be done by adding a comment that contains the
 * resource in the HEAD section of the page after the title tag.
 *
 * This type of fallback mechanism should be used in IE6 and IE7. IE8 does
 * support data URIs, but the maximum size is limited to 32 KB, which means
 * all data URIs should be limited to 32 KB.
 */
export class mxImageBundle {
  constructor(alt: boolean);

  /**
   * Variable: images
   *
   * Maps from keys to images.
   */
  images: { [key: string]: { value: string, fallback: Function } };

  /**
   * Variable: alt
   *
   * Specifies if the fallback representation should be returned.
   */
  alt: boolean;

  /**
   * Function: putImage
   *
   * Adds the specified entry to the map. The entry is an object with a value and
   * fallback property as specified in the arguments.
   */
  putImage(key: string, value: string, fallback: Function): void;

  /**
   * Function: getImage
   *
   * Returns the value for the given key. This returns the value
   * or fallback, depending on <alt>. The fallback is returned if
   * <alt> is true, the value is returned otherwise.
   */
  getImage(key: string): string;
}


/**
 * Class: mxImageShape
 *
 * Extends <mxShape> to implement an image shape. This shape is registered
 * under <mxConstants.SHAPE_IMAGE> in <mxCellRenderer>.
 *
 * Constructor: mxImageShape
 *
 * Constructs a new image shape.
 *
 * Parameters:
 *
 * bounds - <mxRectangle> that defines the bounds. This is stored in
 * <mxShape.bounds>.
 * image - String that specifies the URL of the image. This is stored in
 * <image>.
 * fill - String that defines the fill color. This is stored in <fill>.
 * stroke - String that defines the stroke color. This is stored in <stroke>.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 0. This is stored in <strokewidth>.
 */
export class mxImageShape extends mxRectangleShape {

  constructor(bounds: mxRectangle, image: mxImage, fill: string, stroke: string, strokewidth?: number);


  /**
   * Variable: preserveImageAspect
   *
   * Switch to preserve image aspect. Default is true.
   */
  preserveImageAspect: boolean;

  /**
   * Function: getSvgScreenOffset
   *
   * Disables offset in IE9 for crisper image output.
   */
  getSvgScreenOffset(): 0 | 0.5;

  /**
   * Function: apply
   *
   * Overrides <mxShape.apply> to replace the fill and stroke colors with the
   * respective values from <mxConstants.STYLE_IMAGE_BACKGROUND> and
   * <mxConstants.STYLE_IMAGE_BORDER>.
   *
   * Applies the style of the given <mxCellState> to the shape. This
   * implementation assigns the following styles to local fields:
   *
   * - <mxConstants.STYLE_IMAGE_BACKGROUND> => fill
   * - <mxConstants.STYLE_IMAGE_BORDER> => stroke
   *
   * Parameters:
   *
   * state - <mxCellState> of the corresponding cell.
   */
  apply(state: mxCellState): void;

  /**
   * Function: isHtmlAllowed
   *
   * Returns true if HTML is allowed for this shape. This implementation always
   * returns false.
   */
  isHtmlAllowed(): boolean;

  /**
   * Function: createHtml
   *
   * Creates and returns the HTML DOM node(s) to represent
   * this shape. This implementation falls back to <createVml>
   * so that the HTML creation is optional.
   */
  createHtml(): HTMLElement;

  /**
   * Function: isRoundable
   *
   * Disables inherited roundable support.
   */
  isRoundable(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): boolean;

  /**
   * Function: paintVertexShape
   *
   * Generic background painting implementation.
   */
  paintVertexShape(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number);

  /**
   * Function: redraw
   *
   * Overrides <mxShape.redraw> to preserve the aspect ratio of images.
   */
  redrawHtmlShape(): void;
}



export class mxMarker {
  /**
   * Class: mxMarker
   *
   * A static class that implements all markers for VML and SVG using a
   * registry. NOTE: The signatures in this class will change.
   *
   * Variable: markers
   *
   * Maps from markers names to functions to paint the markers.
   */
  static markers: Map<string, Function>;

  /**
   * Function: addMarker
   *
   * Adds a factory method that updates a given endpoint and returns a
   * function to paint the marker onto the given canvas.
   */
  static addMarker(type: string, funct: Function);
  /**
   * Function: createMarker
   *
   * Returns a function to paint the given marker.
   */
  static createMarker(canvas, shape, type, pe, unitX, unitY, size, source, sw, filled);

}


/**
 * Class: mxMouseEvent
 *
 * Base class for all mouse events in mxGraph. A listener for this event should
 * implement the following methods:
 *
 * (code)
 * graph.addMouseListener(
 * {
 *   mouseDown: function(sender, evt)
 *   {
 *     mxLog.debug('mouseDown');
 *   },
 *   mouseMove: function(sender, evt)
 *   {
 *     mxLog.debug('mouseMove');
 *   },
 *   mouseUp: function(sender, evt)
 *   {
 *     mxLog.debug('mouseUp');
 *   }
 * });
 * (end)
 *
 * Constructor: mxMouseEvent
 *
 * Constructs a new event object for the given arguments.
 *
 * Parameters:
 *
 * evt - Native mouse event.
 * state - Optional <mxCellState> under the mouse.
 *
 */
export class mxMouseEvent {
  constructor(evt: Event, state: mxCellState);

  /**
   * Variable: consumed
   *
   * Holds the consumed state of this event.
   */
  consumed: boolean;

  /**
   * Variable: evt
   *
   * Holds the inner event object.
   */
  evt: Event;

  /**
   * Variable: graphX
   *
   * Holds the x-coordinate of the event in the graph. This value is set in
   * <mxGraph.fireMouseEvent>.
   */
  graphX: number;

  /**
   * Variable: graphY
   *
   * Holds the y-coordinate of the event in the graph. This value is set in
   * <mxGraph.fireMouseEvent>.
   */
  graphY: number;

  /**
   * Variable: state
   *
   * Holds the optional <mxCellState> associated with this event.
   */
  state: mxCellState;

  /**
   * Variable: sourceState
   *
   * Holds the <mxCellState> that was passed to the constructor. This can be
   * different from <state> depending on the result of <mxGraph.getEventState>.
   */
  sourceState: mxCellState;

  /**
   * Function: getEvent
   *
   * Returns <evt>.
   */
  getEvent(): Event

  /**
   * Function: getSource
   *
   * Returns the target DOM element using <mxEvent.getSource> for <evt>.
   */
  getSource(): Element;

  /**
   * Function: isSource
   *
   * Returns true if the given <mxShape> is the source of <evt>.
   */
  isSource(shape: mxShape): boolean;

  /**
   * Function: getX
   *
   * Returns <evt.clientX>.
   */
  getX(): number;

  /**
   * Function: getY
   *
   * Returns <evt.clientY>.
   */
  getY(): number;

  /**
   * Function: getGraphX
   *
   * Returns <graphX>.
   */
  getGraphX(): number;

  /**
   * Function: getGraphY
   *
   * Returns <graphY>.
   */
  getGraphY(): number;

  /**
   * Function: getState
   *
   * Returns <state>.
   */
  getState(): mxCellState;

  /**
   * Function: getCell
   *
   * Returns the <mxCell> in <state> is not null.
   */
  getCell(): mxCell;

  /**
   * Function: isPopupTrigger
   *
   * Returns true if the event is a popup trigger.
   */
  isPopupTrigger(): boolean;

  /**
   * Function: isConsumed
   *
   * Returns <consumed>.
   */
  isConsumed(): boolean;

  /**
   * Function: consume
   *
   * Sets <consumed> to true and invokes preventDefault on the native event
   * if such a method is defined. This is used mainly to avoid the cursor from
   * being changed to a text cursor in Webkit. You can use the preventDefault
   * flag to disable this functionality.
   *
   * Parameters:
   *
   * preventDefault - Specifies if the native event should be canceled. Default
   * is true.
   */
  consume(preventDefault: boolean): void;
}


/**
 * Class: mxMultiplicity
 *
 * Defines invalid connections along with the error messages that they produce.
 * To add or remove rules on a graph, you must add/remove instances of this
 * class to <mxGraph.multiplicities>.
 *
 * Example:
 *
 * (code)
 * graph.multiplicities.push(new mxMultiplicity(
 *   true, 'rectangle', null, null, 0, 2, ['circle'],
 *   'Only 2 targets allowed',
 *   'Only circle targets allowed'));
 * (end)
 *
 * Defines a rule where each rectangle must be connected to no more than 2
 * circles and no other types of targets are allowed.
 *
 * Constructor: mxMultiplicity
 *
 * Instantiate export class mxMultiplicity in order to describe allowed
 * connections in a graph. Not all constraints can be enforced while
 * editing, some must be checked at validation time. The <countError> and
 * <typeError> are treated as resource keys in <mxResources>.
 *
 * Parameters:
 *
 * source - Boolean indicating if this rule applies to the source or target
 * terminal.
 * type - Type of the source or target terminal that this rule applies to.
 * See <type> for more information.
 * attr - Optional attribute name to match the source or target terminal.
 * value - Optional attribute value to match the source or target terminal.
 * min - Minimum number of edges for this rule. Default is 1.
 * max - Maximum number of edges for this rule. n means infinite. Default
 * is n.
 * validNeighbors - Array of types of the opposite terminal for which this
 * rule applies.
 * countError - Error to be displayed for invalid number of edges.
 * typeError - Error to be displayed for invalid opposite terminals.
 * validNeighborsAllowed - Optional boolean indicating if the array of
 * opposite types should be valid or invalid.
 */
export class mxMultiplicity {
  constructor(
    source: boolean,
    type: string,
    attr: string,
    value: string,
    min: number,
    max: number,
    validNeighbors: string[],
    countError: string,
    typeError: string,
    validNeighborsAllowed: boolean
  );

  /**
   * Variable: type
   *
   * Defines the type of the source or target terminal. The type is a string
   * passed to <mxUtils.isNode> together with the source or target vertex
   * value as the first argument.
   */
  type: string;

  /**
   * Variable: attr
   *
   * Optional string that specifies the attributename to be passed to
   * <mxUtils.isNode> to check if the rule applies to a cell.
   */
  attr: string;

  /**
   * Variable: value
   *
   * Optional string that specifies the value of the attribute to be passed
   * to <mxUtils.isNode> to check if the rule applies to a cell.
   */
  value: string;

  /**
   * Variable: source
   *
   * Boolean that specifies if the rule is applied to the source or target
   * terminal of an edge.
   */
  source: string;

  /**
   * Variable: min
   *
   * Defines the minimum number of connections for which this rule applies.
   * Default is 0.
   */
  min: number;

  /**
   * Variable: max
   *
   * Defines the maximum number of connections for which this rule applies.
   * A value of 'n' means unlimited times. Default is 'n'.
   */
  max: number | 'n';

  /**
   * Variable: validNeighbors
   *
   * Holds an array of strings that specify the type of neighbor for which
   * this rule applies. The strings are used in <mxCell.is> on the opposite
   * terminal to check if the rule applies to the connection.
   */
  validNeighbors: string[];

  /**
   * Variable: validNeighborsAllowed
   *
   * Boolean indicating if the list of validNeighbors are those that are allowed
   * for this rule or those that are not allowed for this rule.
   */
  validNeighborsAllowed: boolean;

  /**
   * Variable: countError
   *
   * Holds the localized error message to be displayed if the number of
   * connections for which the rule applies is smaller than <min> or greater
   * than <max>.
   */
  countError: string;

  /**
   * Variable: typeError
   *
   * Holds the localized error message to be displayed if the type of the
   * neighbor for a connection does not match the rule.
   */
  typeError: string;

  /**
   * Function: check
   *
   * Checks the multiplicity for the given arguments and returns the error
   * for the given connection or null if the multiplicity does not apply.
   *
   * Parameters:
   *
   * graph - Reference to the enclosing <mxGraph> instance.
   * edge - <mxCell> that represents the edge to validate.
   * source - <mxCell> that represents the source terminal.
   * target - <mxCell> that represents the target terminal.
   * sourceOut - Number of outgoing edges from the source terminal.
   * targetIn - Number of incoming edges for the target terminal.
   */
  check(graph: mxGraph, edge: mxCell, source: mxCell, target: mxCell, sourceOut: number, targetIn: number): string[];

  /**
   * Function: checkNeighbors
   *
   * Checks if there are any valid neighbours in <validNeighbors>. This is only
   * called if <validNeighbors> is a non-empty array.
   */
  checkNeighbors(graph: mxGraph, edge: mxCell, source: mxCell, target: mxCell): boolean;

  /**
   * Function: checkTerminal
   *
   * Checks the given terminal cell and returns true if this rule applies. The
   * given cell is the source or target of the given edge, depending on
   * <source>. This implementation uses <checkType> on the terminal's value.
   */
  checkTerminal(graph: mxGraph, terminal: mxCell, edge: mxCell): boolean;

  /**
   * Function: checkType
   *
   * Checks the type of the given value.
   */
  checkType(graph: mxGraph, value: mxCell, type: string, attr: string, attrValue: string): boolean;
}


/**
 * Class: mxPanningHandler
 *
 * Event handler that pans and creates popupmenus. To use the left
 * mousebutton for panning without interfering with cell moving and
 * resizing, use <isUseLeftButton> and <isIgnoreCell>. For grid size
 * steps while panning, use <useGrid>. This handler is built-into
 * <mxGraph.panningHandler> and enabled using <mxGraph.setPanning>.
 *
 * Constructor: mxPanningHandler
 *
 * Constructs an event handler that creates a <mxPopupMenu>
 * and pans the graph.
 *
 * Event: mxEvent.PAN_START
 *
 * Fires when the panning handler changes its <active> state to true. The
 * <code>event</code> property contains the corresponding <mxMouseEvent>.
 *
 * Event: mxEvent.PAN
 *
 * Fires while handle is processing events. The <code>event</code> property contains
 * the corresponding <mxMouseEvent>.
 *
 * Event: mxEvent.PAN_END
 *
 * Fires when the panning handler changes its <active> state to false. The
 * <code>event</code> property contains the corresponding <mxMouseEvent>.
 */
export class mxPanningHandler extends mxEventSource {
  constructor(graph: mxGraph);

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: useLeftButtonForPanning
   *
   * Specifies if panning should be active for the left mouse button.
   * Setting this to true may conflict with <mxRubberband>. Default is false.
   */
  useLeftButtonForPanning: boolean;

  /**
   * Variable: usePopupTrigger
   *
   * Specifies if <mxEvent.isPopupTrigger> should also be used for panning.
   */
  usePopupTrigger: boolean;

  /**
   * Variable: ignoreCell
   *
   * Specifies if panning should be active even if there is a cell under the
   * mousepointer. Default is false.
   */
  ignoreCell: boolean;

  /**
   * Variable: previewEnabled
   *
   * Specifies if the panning should be previewed. Default is true.
   */
  previewEnabled: boolean;

  /**
   * Variable: useGrid
   *
   * Specifies if the panning steps should be aligned to the grid size.
   * Default is false.
   */
  useGrid: boolean;

  /**
   * Variable: panningEnabled
   *
   * Specifies if panning should be enabled. Default is true.
   */
  panningEnabled: boolean;

  /**
   * Variable: pinchEnabled
   *
   * Specifies if pinch gestures should be handled as zoom. Default is true.
   */
  pinchEnabled: boolean;

  /**
   * Variable: maxScale
   *
   * Specifies the maximum scale. Default is 8.
   */
  maxScale: number;

  /**
   * Variable: minScale
   *
   * Specifies the minimum scale. Default is 0.01.
   */
  minScale: number;

  /**
   * Variable: dx
   *
   * Holds the current horizontal offset.
   */
  dx: number;

  /**
   * Variable: dy
   *
   * Holds the current vertical offset.
   */
  dy: number;

  /**
   * Variable: startX
   *
   * Holds the x-coordinate of the start point.
   */
  startX: number;

  /**
   * Variable: startY
   *
   * Holds the y-coordinate of the start point.
   */
  startY: number;

  /**
   * Function: isActive
   *
   * Returns true if the handler is currently active.
   */
  isActive(): boolean;

  /**
   * Function: isPanningEnabled
   *
   * Returns <panningEnabled>.
   */
  isPanningEnabled(): boolean;

  /**
   * Function: setPanningEnabled
   *
   * Sets <panningEnabled>.
   */
  setPanningEnabled(value: boolean): void;

  /**
   * Function: isPinchEnabled
   *
   * Returns <pinchEnabled>.
   */
  isPinchEnabled(): boolean;

  /**
   * Function: setPinchEnabled
   *
   * Sets <pinchEnabled>.
   */
  setPinchEnabled(value: boolean): void;

  /**
   * Function: isPanningTrigger
   *
   * Returns true if the given event is a panning trigger for the optional
   * given cell. This returns true if control-shift is pressed or if
   * <usePopupTrigger> is true and the event is a popup trigger.
   */
  isPanningTrigger(me: mxMouseEvent): boolean;

  /**
   * Function: isForcePanningEvent
   *
   * Returns true if the given <mxMouseEvent> should start panning. This
   * implementation always returns true if <ignoreCell> is true or for
   * multi touch events.
   */
  isForcePanningEvent(me: mxMouseEvent): boolean;

  /**
   * Function: mouseDown
   *
   * Handles the event by initiating the panning. By consuming the event all
   * subsequent events of the gesture are redirected to this handler.
   */
  mouseDown(sender: any, me: mxMouseEvent): void;

  /**
   * Function: start
   *
   * Starts panning at the given event.
   */
  start(me: mxMouseEvent): void;

  /**
   * Function: consumePanningTrigger
   *
   * Consumes the given <mxMouseEvent> if it was a panning trigger in
   * <mouseDown>. The default is to invoke <mxMouseEvent.consume>. Note that this
   * will block any further event processing. If you haven't disabled built-in
   * context menus and require immediate selection of the cell on mouseDown in
   * Safari and/or on the Mac, then use the following code:
   *
   * (code)
   * consumePanningTrigger(me)
   * {
   *   if (me.evt.preventDefault)
   *   {
   *     me.evt.preventDefault();
   *   }
   *
   *   // Stops event processing in IE
   *   me.evt.returnValue = false;
   *
   *   // Sets local consumed state
   *   if (!mxClient.IS_SF && !mxClient.IS_MAC)
   *   {
   *     me.consumed = true;
   *   }
   * };
   * (end)
   */
  consumePanningTrigger(me: mxMouseEvent): void;

  /**
   * Function: mouseMove
   *
   * Handles the event by updating the panning on the graph.
   */
  mouseMove(sender: any, me: mxMouseEvent): void;

  /**
   * Function: mouseUp
   *
   * Handles the event by setting the translation on the view or showing the
   * popupmenu.
   */
  mouseUp(sender: any, me: mxMouseEvent): void;

  /**
   * Function: mouseUp
   *
   * Handles the event by setting the translation on the view or showing the
   * popupmenu.
   */
  reset(): void;

  /**
   * Function: panGraph
   *
   * Pans <graph> by the given amount.
   */
  panGraph(dx: number, dy: number): void;

  /**
   * Function: destroy
   *
   * Destroys the handler and all its resources and DOM nodes.
   */
  destroy(): void;
}


/**
 * Class: mxPanningManager
 *
 * Implements a handler for panning.
 */
export class mxPanningManager {
  constructor(graph: mxGraph);
  private thread: (handler: TimerHandler, timeout?: number, ...arguments: any[]) => number;
  private active: boolean;
  private tdx: number;
  private tdy: number;
  private t0x: number;
  private t0y: number;
  private dx: number;
  private dy: number;
  private scrollbars: boolean;
  private scrollLeft: number;
  private scrollTop: number;

  private mouseListener: {
    mouseDown: (sender: any, me: mxMouseEvent) => void;
    mouseMove: (sender: any, me: mxMouseEvent) => void;
    mouseUp: (sender: any, me: mxMouseEvent) => void;
  };

  private mouseUpListener: () => void;

  private isActive(): boolean;

  private getDx(): number;

  private getDy(): number;

  private start(): void;

  private panTo(x: number, y: number, w: number, h: number): void;

  private stop(): void;

  /**
   * Variable: damper
   *
   * Damper value for the panning. Default is 1/6.
   */
  damper: number;

  /**
   * Variable: delay
   *
   * Delay in milliseconds for the panning. Default is 10.
   */
  delay: number;

  /**
   * Variable: handleMouseOut
   *
   * Specifies if mouse events outside of the component should be handled. Default is true.
   */
  handleMouseOut: boolean;

  /**
   * Variable: border
   *
   * Border to handle automatic panning inside the component. Default is 0 (disabled).
   */
  border: number;
}


/**
 * Class: mxPoint
 *
 * Implements a 2-dimensional vector with double precision coordinates.
 *
 * Constructor: mxPoint
 *
 * Constructs a new point for the optional x and y coordinates. If no
 * coordinates are given, then the default values for <x> and <y> are used.
 */
export class mxPoint {
  constructor(x: number, y: number);

  /**
   * Variable: x
   *
   * Holds the x-coordinate of the point. Default is 0.
   */
  x: number;

  /**
   * Variable: y
   *
   * Holds the y-coordinate of the point. Default is 0.
   */
  y: number;

  /**
   * Function: equals
   *
   * Returns true if the given object equals this point.
   */
  equals(obj: mxPoint): boolean;

  /**
   * Function: clone
   *
   * Returns a clone of this <mxPoint>.
   */
  clone(): mxPoint;
}


/**
 * Class: mxPolyline
 *
 * Extends <mxShape> to implement a polyline (a line with multiple points).
 * This shape is registered under <mxConstants.SHAPE_POLYLINE> in
 * <mxCellRenderer>.
 *
 * Constructor: mxPolyline
 *
 * Constructs a new polyline shape.
 *
 * Parameters:
 *
 * points - Array of <mxPoints> that define the points. This is stored in
 * <mxShape.points>.
 * stroke - String that defines the stroke color. Default is 'black'. This is
 * stored in <stroke>.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 1. This is stored in <strokewidth>.
 */
export class mxPolyline extends mxShape {
  constructor(points: mxPoint[], stroke: string, strokewidth?: number);

  /**
   * Function: getRotation
   *
   * Returns 0.
   */
  getRotation(): number;

  /**
   * Function: getShapeRotation
   *
   * Returns 0.
   */
  getShapeRotation(): number;

  /**
   * Function: isPaintBoundsInverted
   *
   * Returns false.
   */
  isPaintBoundsInverted(): boolean;

  /**
   * Function: paintEdgeShape
   *
   * Paints the line shape.
   */
  paintEdgeShape(c: mxAbstractCanvas2D, pts: mxPoint[]): void;

  /**
   * Function: paintLine
   *
   * Paints the line shape.
   */
  paintLine(c: mxAbstractCanvas2D, pts: mxPoint[], rounded?: boolean): void;

  /**
   * Function: paintLine
   *
   * Paints the line shape.
   */
  paintCurvedLine(c: mxAbstractCanvas2D, pts: mxPoint[]): void;
}


/**
 * Class: mxPopupMenu
 *
 * Basic popup menu. To add a vertical scrollbar to a given submenu, the
 * following code can be used.
 *
 * (code)
 * var mxPopupMenuShowMenu = showMenu;
 * showMenu()
 * {
 *   mxPopupMenuShowMenu.apply(this, arguments);
 *
 *   this.div.style.overflowY = 'auto';
 *   this.div.style.overflowX = 'hidden';
 *   this.div.style.maxHeight = '160px';
 * };
 * (end)
 *
 * Constructor: mxPopupMenu
 *
 * Constructs a popupmenu.
 *
 * Event: mxEvent.SHOW
 *
 * Fires after the menu has been shown in <popup>.
 */
export class mxPopupMenu extends mxEventSource {
  constructor(factoryMethod: (panningHandler: mxPanningHandler, cell: mxCell, me: mxMouseEvent) => any);

  /**
   * Variable: submenuImage
   *
   * URL of the image to be used for the submenu icon.
   */
  submenuImage: string;

  /**
   * Variable: zIndex
   *
   * Specifies the zIndex for the popupmenu and its shadow. Default is 1006.
   */
  zIndex: number;

  /**
   * Variable: factoryMethod
   *
   * Function that is used to create the popup menu. The function takes the
   * current panning handler, the <mxCell> under the mouse and the mouse
   * event that triggered the call as arguments.
   */
  factoryMethod: (panningHandler: mxPanningHandler, cell: mxCell, me: mxMouseEvent) => any;

  /**
   * Variable: useLeftButtonForPopup
   *
   * Specifies if popupmenus should be activated by clicking the left mouse
   * button. Default is false.
   */
  useLeftButtonForPopup: boolean;

  /**
   * Variable: enabled
   *
   * Specifies if events are handled. Default is true.
   */
  enabled: boolean;

  /**
   * Variable: itemCount
   *
   * Contains the number of times <addItem> has been called for a new menu.
   */
  itemCount: number;

  /**
   * Variable: autoExpand
   *
   * Specifies if submenus should be expanded on mouseover. Default is false.
   */
  autoExpand: boolean;

  /**
   * Variable: smartSeparators
   *
   * Specifies if separators should only be added if a menu item follows them.
   * Default is false.
   */
  smartSeparators: boolean;

  /**
   * Variable: labels
   *
   * Specifies if any labels should be visible. Default is true.
   */
  labels: boolean;

  /**
   * Function: init
   *
   * Initializes the shapes required for this vertex handler.
   */
  init(): void;

  /**
   * Function: isEnabled
   *
   * Returns true if events are handled. This implementation
   * returns <enabled>.
   */
  isEnabled(): boolean;

  /**
   * Function: setEnabled
   *
   * Enables or disables event handling. This implementation
   * updates <enabled>.
   */
  setEnabled(enabled: boolean): void;

  /**
   * Function: isPopupTrigger
   *
   * Returns true if the given event is a popupmenu trigger for the optional
   * given cell.
   *
   * Parameters:
   *
   * me - <mxMouseEvent> that represents the mouse event.
   */
  isPopupTrigger(me): boolean;

  /**
   * Function: addItem
   *
   * Adds the given item to the given parent item. If no parent item is specified
   * then the item is added to the top-level menu. The return value may be used
   * as the parent argument, ie. as a submenu item. The return value is the table
   * row that represents the item.
   *
   * Paramters:
   *
   * title - String that represents the title of the menu item.
   * image - Optional URL for the image icon.
   * funct - Function associated that takes a mouseup or touchend event.
   * parent - Optional item returned by <addItem>.
   * iconCls - Optional string that represents the CSS class for the image icon.
   * IconsCls is ignored if image is given.
   * enabled - Optional boolean indicating if the item is enabled. Default is true.
   * active - Optional boolean indicating if the menu should implement any event handling.
   * Default is true.
   */
  addItem(title: string, image?: string, funct?: (me: mxMouseEvent) => void, parent?: mxPopupMenu, iconCls?: string, enabled?: boolean, active?: boolean): Element;

  /**
   * Adds a checkmark to the given menuitem.
   */
  addCheckmark(item: Element, img: string): void;

  /**
   * Function: createSubmenu
   *
   * Creates the nodes required to add submenu items inside the given parent
   * item. This is called in <addItem> if a parent item is used for the first
   * time. This adds various DOM nodes and a <submenuImage> to the parent.
   *
   * Parameters:
   *
   * parent - An item returned by <addItem>.
   */
  createSubmenu(parent: Element): void;

  /**
   * Function: showSubmenu
   *
   * Shows the submenu inside the given parent row.
   */
  showSubmenu(parent: Element, row: Element): void;

  /**
   * Function: addSeparator
   *
   * Adds a horizontal separator in the given parent item or the top-level menu
   * if no parent is specified.
   *
   * Parameters:
   *
   * parent - Optional item returned by <addItem>.
   * force - Optional boolean to ignore <smartSeparators>. Default is false.
   */
  addSeparator(parent?: Element, force?: boolean): void;

  /**
   * Function: popup
   *
   * Shows the popup menu for the given event and cell.
   *
   * Example:
   *
   * (code)
   * graph.panningHandler.popup(x, y, cell, evt)
   * {
   *   mxUtils.alert('Hello, World!');
   * }
   * (end)
   */
  popup(x: number, y: number, cell: mxCell, evt: Event): void;

  /**
   * Function: isMenuShowing
   *
   * Returns true if the menu is showing.
   */
  isMenuShowing(): boolean;

  /**
   * Function: showMenu
   *
   * Shows the menu.
   */
  showMenu(): void;

  /**
   * Function: hideMenu
   *
   * Removes the menu and all submenus.
   */
  hideMenu(): void;

  /**
   * Function: hideSubmenu
   *
   * Removes all submenus inside the given parent.
   *
   * Parameters:
   *
   * parent - An item returned by <addItem>.
   */
  hideSubmenu(parent: Element): void;

  /**
   * Function: destroy
   *
   * Destroys the handler and all its resources and DOM nodes.
   */
  destroy(): void;

}


/**
 * Class: mxPopupMenuHandler
 *
 * Event handler that creates popupmenus.
 *
 * Constructor: mxPopupMenuHandler
 *
 * Constructs an event handler that creates a <mxPopupMenu>.
 */
export class mxPopupMenuHandler extends mxPopupMenu {

  constructor(graph: mxGraph, factoryMethod: (panningHandler: mxPanningHandler, cell: mxCell, me: mxMouseEvent) => any);

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: selectOnPopup
   *
   * Specifies if cells should be selected if a popupmenu is displayed for
   * them. Default is true.
   */
  selectOnPopup: boolean;

  /**
   * Variable: clearSelectionOnBackground
   *
   * Specifies if cells should be deselected if a popupmenu is displayed for
   * the diagram background. Default is true.
   */
  clearSelectionOnBackground: boolean;

  /**
   * Variable: triggerX
   *
   * X-coordinate of the mouse down event.
   */
  triggerX: number;

  /**
   * Variable: triggerY
   *
   * Y-coordinate of the mouse down event.
   */
  triggerY: number;

  /**
   * Variable: screenX
   *
   * Screen X-coordinate of the mouse down event.
   */
  screenX: number;

  /**
   * Variable: screenY
   *
   * Screen Y-coordinate of the mouse down event.
   */
  screenY: number;

  /**
   * Function: init
   *
   * Initializes the shapes required for this vertex handler.
   */
  init(): void;

  /**
   * Function: isSelectOnPopup
   *
   * Hook for returning if a cell should be selected for a given <mxMouseEvent>.
   * This implementation returns <selectOnPopup>.
   */
  isSelectOnPopup(me: mxMouseEvent): boolean;

  /**
   * Function: mouseDown
   *
   * Handles the event by initiating the panning. By consuming the event all
   * subsequent events of the gesture are redirected to this handler.
   */
  mouseDown(sender: any, me: mxMouseEvent): void;

  /**
   * Function: mouseMove
   *
   * Handles the event by updating the panning on the graph.
   */
  mouseMove(sender: any, me: mxMouseEvent): void;

  /**
   * Function: mouseUp
   *
   * Handles the event by setting the translation on the view or showing the
   * popupmenu.
   */
  mouseUp(sender: any, me: mxMouseEvent): void;

  /**
   * Function: getCellForPopupEvent
   *
   * Hook to return the cell for the mouse up popup trigger handling.
   */
  getCellForPopupEvent(me: mxMouseEvent): mxCell;

  /**
   * Function: destroy
   *
   * Destroys the handler and all its resources and DOM nodes.
   */
  destroy(): void;
}


/**
 * Class: mxRectangle
 *
 * Extends <mxPoint> to implement a 2-dimensional rectangle with double
 * precision coordinates.
 *
 * Constructor: mxRectangle
 *
 * Constructs a new rectangle for the optional parameters. If no parameters
 * are given then the respective default values are used.
 */
export class mxRectangle extends mxPoint {
  constructor(x: number, y: number, width: number, height: number);

  /**
   * Variable: width
   *
   * Holds the width of the rectangle. Default is 0.
   */
  width: number;

  /**
   * Variable: height
   *
   * Holds the height of the rectangle. Default is 0.
   */
  height: number;

  /**
   * Function: setRect
   *
   * Sets this rectangle to the specified values
   */
  setRect(x: number, y: number, w: number, h: number);

  /**
   * Function: getCenterX
   *
   * Returns the x-coordinate of the center point.
   */
  getCenterX(): number;

  /**
   * Function: getCenterY
   *
   * Returns the y-coordinate of the center point.
   */
  getCenterY(): number;

  /**
   * Function: add
   *
   * Adds the given rectangle to this rectangle.
   */
  add(rect: mxRectangle): void;

  /**
   * Function: intersect
   *
   * Changes this rectangle to where it overlaps with the given rectangle.
   */
  intersect(rect: mxRectangle): void;

  /**
   * Function: grow
   *
   * Grows the rectangle by the given amount, that is, this method subtracts
   * the given amount from the x- and y-coordinates and adds twice the amount
   * to the width and height.
   */
  grow(amount: number): void;

  /**
   * Function: getPoint
   *
   * Returns the top, left corner as a new <mxPoint>.
   */
  getPoint(): mxPoint;

  /**
   * Function: rotate90
   *
   * Rotates this rectangle by 90 degree around its center point.
   */
  rotate90(): void;

  /**
   * Function: equals
   *
   * Returns true if the given object equals this rectangle.
   */
  equals(obj: mxRectangle): boolean;

  /**
   * Function: fromRectangle
   *
   * Returns a new <mxRectangle> which is a copy of the given rectangle.
   */
  fromRectangle(rect: mxRectangle): mxRectangle;

}


/**
 * Class: mxRectangleShape
 *
 * Extends <mxShape> to implement a rectangle shape.
 * This shape is registered under <mxConstants.SHAPE_RECTANGLE>
 * in <mxCellRenderer>.
 *
 * Constructor: mxRectangleShape
 *
 * Constructs a new rectangle shape.
 *
 * Parameters:
 *
 * bounds - <mxRectangle> that defines the bounds. This is stored in
 * <mxShape.bounds>.
 * fill - String that defines the fill color. This is stored in <fill>.
 * stroke - String that defines the stroke color. This is stored in <stroke>.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 1. This is stored in <strokewidth>.
 */
export class mxRectangleShape extends mxShape {

  constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number);

  /**
   * Function: isHtmlAllowed
   *
   * Returns true for non-rounded, non-rotated shapes with no glass gradient.
   */
  isHtmlAllowed(): boolean;

  /**
   * Function: paintBackground
   *
   * Generic background painting implementation.
   */
  paintBackground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number);

  /**
   * Function: isRoundable
   *
   * Adds roundable support.
   */
  isRoundable(c?: mxAbstractCanvas2D, x?: number, y?: number, w?: number, h?: number);

  /**
   * Function: paintForeground
   *
   * Generic background painting implementation.
   */
  paintForeground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number);
}


/**
 * Class: mxSelectionCellsHandler
 *
 * An event handler that manages cell handlers and invokes their mouse event
 * processing functions.
 *
 * Group: Events
 *
 * Event: mxEvent.ADD
 *
 * Fires if a cell has been added to the selection. The <code>state</code>
 * property contains the <mxCellState> that has been added.
 *
 * Event: mxEvent.REMOVE
 *
 * Fires if a cell has been remove from the selection. The <code>state</code>
 * property contains the <mxCellState> that has been removed.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 */
export class mxSelectionCellsHandler extends mxEventSource {
  constructor(graph: mxGraph);

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: enabled
   *
   * Specifies if events are handled. Default is true.
   */
  enabled: boolean;

  /**
   * Variable: refreshHandler
   *
   * Keeps a reference to an event listener for later removal.
   */
  refreshHandler: any;

  /**
   * Variable: maxHandlers
   *
   * Defines the maximum number of handlers to paint individually. Default is 100.
   */
  maxHandlers: number;

  /**
   * Variable: handlers
   *
   * <mxDictionary> that maps from cells to handlers.
   */
  handlers: mxDictionary<any>;

  /**
   * Function: isEnabled
   *
   * Returns <enabled>.
   */
  isEnabled(): boolean;

  /**
   * Function: setEnabled
   *
   * Sets <enabled>.
   */
  setEnabled(value: boolean): void;

  /**
   * Function: getHandler
   *
   * Returns the handler for the given cell.
   */
  getHandler(cell: mxCell): any;

  /**
   * Function: reset
   *
   * Resets all handlers.
   */
  reset(): void;

  /**
   * Function: refresh
   *
   * Reloads or updates all handlers.
   */
  refresh(): void;

  /**
   * Function: isHandlerActive
   *
   * Returns true if the given handler is active and should not be redrawn.
   */
  isHandlerActive(handler: any): boolean;

  /**
   * Function: updateHandler
   *
   * Updates the handler for the given shape if one exists.
   */
  updateHandler(state: mxCellState): void;

  /**
   * Function: mouseDown
   *
   * Redirects the given event to the handlers.
   */
  mouseDown(sender: Event, me: Event): void;

  /**
   * Function: mouseMove
   *
   * Redirects the given event to the handlers.
   */
  mouseMove(sender: Event, me: Event): void;

  /**
   * Function: mouseUp
   *
   * Redirects the given event to the handlers.
   */
  mouseUp(sender: Event, me: Event): void;

  /**
   * Function: destroy
   *
   * Destroys the handler and all its resources and DOM nodes.
   */
  destroy(): void;
}


/**
 * Class: mxShape
 *
 * Base class for all shapes. A shape in mxGraph is a
 * separate implementation for SVG, VML and HTML. Which
 * implementation to use is controlled by the <dialect>
 * property which is assigned from within the <mxCellRenderer>
 * when the shape is created. The dialect must be assigned
 * for a shape, and it does normally depend on the browser and
 * the confiuration of the graph (see <mxGraph> rendering hint).
 *
 * For each supported shape in SVG and VML, a corresponding
 * shape exists in mxGraph, namely for text, image, rectangle,
 * rhombus, ellipse and polyline. The other shapes are a
 * combination of these shapes (eg. label and swimlane)
 * or they consist of one or more (filled) path objects
 * (eg. actor and cylinder). The HTML implementation is
 * optional but may be required for a HTML-only view of
 * the graph.
 *
 * Custom Shapes:
 *
 * To extend from this class, the basic code looks as follows.
 * In the special case where the custom shape consists only of
 * one filled region or one filled region and an additional stroke
 * the <mxActor> and <mxCylinder> should be subclassed,
 * respectively.
 *
 * (code)
 * function CustomShape() { }
 *
 * CustomShape.prototype = new mxShape();
 * CustomShape.prototype.constructor = CustomShape;
 * (end)
 *
 * To register a custom shape in an existing graph instance,
 * one must register the shape under a new name in the graph's
 * cell renderer as follows:
 *
 * (code)
 * mxCellRenderer.registerShape('customShape', CustomShape);
 * (end)
 *
 * The second argument is the name of the constructor.
 *
 * In order to use the shape you can refer to the given name above
 * in a stylesheet. For example, to change the shape for the default
 * vertex style, the following code is used:
 *
 * (code)
 * var style = graph.getStylesheet().getDefaultVertexStyle();
 * style[mxConstants.STYLE_SHAPE] = 'customShape';
 * (end)
 *
 * Constructor: mxShape
 *
 * Constructs a new shape.
 */
export class mxShape {
  constructor(stencil: mxStencil);

  /**
   * Variable: dialect
   *
   * Holds the dialect in which the shape is to be painted.
   * This can be one of the DIALECT constants in <mxConstants>.
   */
  dialect: string;

  /**
   * Variable: scale
   *
   * Holds the scale in which the shape is being painted.
   */
  scale: number;

  /**
   * Variable: antiAlias
   *
   * Rendering hint for configuring the canvas.
   */
  antiAlias: boolean;

  /**
   * Variable: minSvgStrokeWidth
   *
   * Minimum stroke width for SVG output.
   */
  minSvgStrokeWidth: number;

  /**
   * Variable: bounds
   *
   * Holds the <mxRectangle> that specifies the bounds of this shape.
   */
  bounds: mxRectangle;

  /**
   * Variable: points
   *
   * Holds the array of <mxPoints> that specify the points of this shape.
   */
  points: mxPoint[];

  /**
   * Variable: node
   *
   * Holds the outermost DOM node that represents this shape.
   */
  node: Element;

  /**
   * Variable: state
   *
   * Optional reference to the corresponding <mxCellState>.
   */
  state?: mxCellState;

  /**
   * Variable: style
   *
   * Optional reference to the style of the corresponding <mxCellState>.
   */
  style?: { [key: string]: any };

  /**
   * Variable: boundingBox
   *
   * Contains the bounding box of the shape, that is, the smallest rectangle
   * that includes all pixels of the shape.
   */
  boundingBox: mxRectangle;

  /**
   * Variable: stencil
   *
   * Holds the <mxStencil> that defines the shape.
   */
  stencil: mxStencil;

  /**
   * Variable: svgStrokeTolerance
   *
   * Event-tolerance for SVG strokes (in px). Default is 8. This is only passed
   * to the canvas in <createSvgCanvas> if <pointerEvents> is true.
   */
  svgStrokeTolerance: number;

  /**
   * Variable: pointerEvents
   *
   * Specifies if pointer events should be handled. Default is true.
   */
  pointerEvents: boolean;

  /**
   * Variable: svgPointerEvents
   *
   * Specifies if pointer events should be handled. Default is true.
   */
  svgPointerEvents: 'all';

  /**
   * Variable: shapePointerEvents
   *
   * Specifies if pointer events outside of shape should be handled. Default
   * is false.
   */
  shapePointerEvents: boolean;

  /**
   * Variable: stencilPointerEvents
   *
   * Specifies if pointer events outside of stencils should be handled. Default
   * is false. Set this to true for backwards compatibility with the 1.x branch.
   */
  stencilPointerEvents: boolean;

  /**
   * Variable: vmlScale
   *
   * Scale for improving the precision of VML rendering. Default is 1.
   */
  vmlScale: number;

  /**
   * Variable: outline
   *
   * Specifies if the shape should be drawn as an outline. This disables all
   * fill colors and can be used to disable other drawing states that should
   * not be painted for outlines. Default is false. This should be set before
   * calling <apply>.
   */
  outline: boolean;

  /**
   * Variable: visible
   *
   * Specifies if the shape is visible. Default is true.
   */
  visible: boolean;

  /**
   * Variable: useSvgBoundingBox
   *
   * Allows to use the SVG bounding box in SVG. Default is false for performance
   * reasons.
   */
  useSvgBoundingBox: boolean;

  /**
   * Function: init
   *
   * Initializes the shape by creaing the DOM node using <create>
   * and adding it into the given container.
   *
   * Parameters:
   *
   * container - DOM node that will contain the shape.
   */
  init(container: Element): void;

  /**
   * Function: initStyles
   *
   * Sets the styles to their default values.
   */
  initStyles(container: Element): void;

  /**
   * Function: isParseVml
   *
   * Specifies if any VML should be added via insertAdjacentHtml to the DOM. This
   * is only needed in IE8 and only if the shape contains VML markup. This method
   * returns true.
   */
  isParseVml(): boolean;

  /**
   * Function: isHtmlAllowed
   *
   * Returns true if HTML is allowed for this shape. This implementation always
   * returns false.
   */
  isHtmlAllowed(): boolean;

  /**
   * Function: getSvgScreenOffset
   *
   * Returns 0, or 0.5 if <strokewidth> % 2 == 1.
   */
  getSvgScreenOffset(): 0 | 0.5;

  /**
   * Function: create
   *
   * Creates and returns the DOM node(s) for the shape in
   * the given container. This implementation invokes
   * <createSvg>, <createHtml> or <createVml> depending
   * on the <dialect> and style settings.
   *
   * Parameters:
   *
   * container - DOM node that will contain the shape.
   */
  create(container: Element): Element;

  /**
   * Function: createSvg
   *
   * Creates and returns the SVG node(s) to represent this shape.
   */
  createSvg(): Element;

  /**
   * Function: createVml
   *
   * Creates and returns the VML node to represent this shape.
   */
  createVml(): Element;

  /**
   * Function: createHtml
   *
   * Creates and returns the HTML DOM node(s) to represent
   * this shape. This implementation falls back to <createVml>
   * so that the HTML creation is optional.
   */
  createHtml(): HTMLElement;

  /**
   * Function: reconfigure
   *
   * Reconfigures this shape. This will update the colors etc in
   * addition to the bounds or points.
   */
  reconfigure(): void;

  /**
   * Function: redraw
   *
   * Creates and returns the SVG node(s) to represent this shape.
   */
  redraw(): void;

  /**
   * Function: clear
   *
   * Removes all child nodes and resets all CSS.
   */
  clear(): void;

  /**
   * Function: updateBoundsFromPoints
   *
   * Updates the bounds based on the points.
   */
  updateBoundsFromPoints(): void;

  /**
   * Function: getLabelBounds
   *
   * Returns the <mxRectangle> for the label bounds of this shape, based on the
   * given scaled and translated bounds of the shape. This method should not
   * change the rectangle in-place. This implementation returns the given rect.
   */
  getLabelBounds(rect: mxRectangle): mxRectangle;

  /**
   * Function: getLabelMargins
   *
   * Returns the scaled top, left, bottom and right margin to be used for
   * computing the label bounds as an <mxRectangle>, where the bottom and right
   * margin are defined in the width and height of the rectangle, respectively.
   */
  getLabelMargins(rect: mxRectangle): mxRectangle;

  /**
   * Function: checkBounds
   *
   * Returns true if the bounds are not null and all of its variables are numeric.
   */
  checkBounds(): boolean;

  /**
   * Function: createVmlGroup
   *
   * Returns the temporary element used for rendering in IE8 standards mode.
   */
  createVmlGroup(): Element;

  /**
   * Function: redrawShape
   *
   * Updates the SVG or VML shape.
   */
  redrawShape(): void;

  /**
   * Function: createCanvas
   *
   * Creates a new canvas for drawing this shape. May return null.
   */
  createCanvas(): Element;

  /**
   * Function: createSvgCanvas
   *
   * Creates and returns an <mxSvgCanvas2D> for rendering this shape.
   */
  createSvgCanvas(): mxSvgCanvas2D;

  /**
   * Function: createVmlCanvas
   *
   * Creates and returns an <mxVmlCanvas2D> for rendering this shape.
   */
  createVmlCanvas(): mxVmlCanvas2D;

  /**
   * Function: updateVmlContainer
   *
   * Updates the bounds of the VML container.
   */
  updateVmlContainer(): void;

  /**
   * Function: redrawHtml
   *
   * Allow optimization by replacing VML with HTML.
   */
  redrawHtmlShape(): void;

  /**
   * Function: updateHtmlFilters
   *
   * Allow optimization by replacing VML with HTML.
   */
  updateHtmlFilters(node: HTMLElement): void;

  /**
   * Function: mixedModeHtml
   *
   * Allow optimization by replacing VML with HTML.
   */
  updateHtmlColors(node: HTMLElement): void;

  /**
   * Function: mixedModeHtml
   *
   * Allow optimization by replacing VML with HTML.
   */
  updateHtmlBounds(node: HTMLElement): void;

  /**
   * Function: paint
   *
   * Generic rendering code.
   */
  paint(c: mxAbstractCanvas2D);

  /**
   * Function: getGradientBounds
   *
   * Returns the bounding box for the gradient box for this shape.
   */
  getGradientBounds(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): mxRectangle;

  /**
   * Function: updateTransform
   *
   * Sets the scale and rotation on the given canvas.
   */
  updateTransform(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

  /**
   * Function: paintVertexShape
   *
   * Paints the vertex shape.
   */
  paintVertexShape(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

  /**
   * Function: paintBackground
   *
   * Hook for subclassers. This implementation is empty.
   */
  paintBackground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

  /**
   * Function: paintForeground
   *
   * Hook for subclassers. This implementation is empty.
   */
  paintForeground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

  /**
   * Function: paintEdgeShape
   *
   * Hook for subclassers. This implementation is empty.
   */
  paintEdgeShape(c: mxAbstractCanvas2D, pts: mxPoint[]): void;

  /**
   * Function: getArcSize
   *
   * Returns the arc size for the given dimension.
   */
  getArcSize(w: number, h: number): number;

  /**
   * Function: paintGlassEffect
   *
   * Paints the glass gradient effect.
   */
  paintGlassEffect(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number, arc: number): void;
  /**
   * Function: addPoints
   *
   * Paints the given points with rounded corners.
   */
  addPoints(c: mxAbstractCanvas2D, pts: mxPoint[], rounded: boolean, arcSize: number, close: boolean, exclude: mxPoint[], initialMove: boolean);

  /**
   * Function: resetStyles
   *
   * Resets all styles.
   */
  resetStyles(): void;

  /**
   * Function: apply
   *
   * Applies the style of the given <mxCellState> to the shape. This
   * implementation assigns the following styles to local fields:
   *
   * - <mxConstants.STYLE_FILLCOLOR> => fill
   * - <mxConstants.STYLE_GRADIENTCOLOR> => gradient
   * - <mxConstants.STYLE_GRADIENT_DIRECTION> => gradientDirection
   * - <mxConstants.STYLE_OPACITY> => opacity
   * - <mxConstants.STYLE_FILL_OPACITY> => fillOpacity
   * - <mxConstants.STYLE_STROKE_OPACITY> => strokeOpacity
   * - <mxConstants.STYLE_STROKECOLOR> => stroke
   * - <mxConstants.STYLE_STROKEWIDTH> => strokewidth
   * - <mxConstants.STYLE_SHADOW> => isShadow
   * - <mxConstants.STYLE_DASHED> => isDashed
   * - <mxConstants.STYLE_SPACING> => spacing
   * - <mxConstants.STYLE_STARTSIZE> => startSize
   * - <mxConstants.STYLE_ENDSIZE> => endSize
   * - <mxConstants.STYLE_ROUNDED> => isRounded
   * - <mxConstants.STYLE_STARTARROW> => startArrow
   * - <mxConstants.STYLE_ENDARROW> => endArrow
   * - <mxConstants.STYLE_ROTATION> => rotation
   * - <mxConstants.STYLE_DIRECTION> => direction
   * - <mxConstants.STYLE_GLASS> => glass
   *
   * This keeps a reference to the <style>. If you need to keep a reference to
   * the cell, you can override this method and store a local reference to
   * state.cell or the <mxCellState> itself. If <outline> should be true, make
   * sure to set it before calling this method.
   *
   * Parameters:
   *
   * state - <mxCellState> of the corresponding cell.
   */
  apply(state: mxCellState): void;

  /**
   * Function: setCursor
   *
   * Sets the cursor on the given shape.
   *
   * Parameters:
   *
   * cursor - The cursor to be used.
   */
  setCursor(cursor: string): void;

  /**
   * Function: getCursor
   *
   * Returns the current cursor.
   */
  getCursor(): string;

  /**
   * Function: isRoundable
   *
   * Hook for subclassers.
   */
  isRoundable(): boolean;

  /**
   * Function: updateBoundingBox
   *
   * Updates the <boundingBox> for this shape using <createBoundingBox> and
   * <augmentBoundingBox> and stores the result in <boundingBox>.
   */
  updateBoundingBox(): void;

  /**
   * Function: createBoundingBox
   *
   * Returns a new rectangle that represents the bounding box of the bare shape
   * with no shadows or strokewidths.
   */
  createBoundingBox(): mxRectangle;

  /**
   * Function: augmentBoundingBox
   *
   * Augments the bounding box with the strokewidth and shadow offsets.
   */
  augmentBoundingBox(bbox: mxRectangle);

  /**
   * Function: isPaintBoundsInverted
   *
   * Returns true if the bounds should be inverted.
   */
  isPaintBoundsInverted(): boolean;

  /**
   * Function: getRotation
   *
   * Returns the rotation from the style.
   */
  getRotation(): number;

  /**
   * Function: getTextRotation
   *
   * Returns the rotation for the text label.
   */
  getTextRotation(): number;

  /**
   * Function: getShapeRotation
   *
   * Returns the actual rotation of the shape.
   */
  getShapeRotation(): number;

  /**
   * Function: createTransparentSvgRectangle
   *
   * Adds a transparent rectangle that catches all events.
   */
  createTransparentSvgRectangle(x: number, y: number, w: number, h: number): Element;

  /**
   * Function: setTransparentBackgroundImage
   *
   * Sets a transparent background CSS style to catch all events.
   *
   * Paints the line shape.
   */
  setTransparentBackgroundImage(node: Element): void;

  /**
   * Function: releaseSvgGradients
   *
   * Paints the line shape.
   */
  releaseSvgGradients(grads: any[]): void;

  /**
   * Function: destroy
   *
   * Destroys the shape by removing it from the DOM and releasing the DOM
   * node associated with the shape using <mxEvent.release>.
   */
  destroy(): void;
}


/**
 * Class: mxStencil
 *
 * Implements a generic shape which is based on a XML node as a description.
 *
 * shape:
 *
 * The outer element is *shape*, that has attributes:
 *
 * - "name", string, required. The stencil name that uniquely identifies the shape.
 * - "w" and "h" are optional decimal view bounds. This defines your co-ordinate
 * system for the graphics operations in the shape. The default is 100,100.
 * - "aspect", optional string. Either "variable", the default, or "fixed". Fixed
 * means always render the shape with the aspect ratio defined by the ratio w/h.
 * Variable causes the ratio to match that of the geometry of the current vertex.
 * - "strokewidth", optional string. Either an integer or the string "inherit".
 * "inherit" indicates that the strokeWidth of the cell is only changed on scaling,
 * not on resizing. Default is "1".
 * If numeric values are used, the strokeWidth of the cell is changed on both
 * scaling and resizing and the value defines the multiple that is applied to
 * the width.
 *
 * connections:
 *
 * If you want to define specific fixed connection points on the shape use the
 * *connections* element. Each *constraint* element within connections defines
 * a fixed connection point on the shape. Constraints have attributes:
 *
 * - "perimeter", required. 1 or 0. 0 sets the connection point where specified
 * by x,y. 1 Causes the position of the connection point to be extrapolated from
 * the center of the shape, through x,y to the point of intersection with the
 * perimeter of the shape.
 * - "x" and "y" are the position of the fixed point relative to the bounds of
 * the shape. They can be automatically adjusted if perimeter=1. So, (0,0) is top
 * left, (0.5,0.5) the center, (1,0.5) the center of the right hand edge of the
 * bounds, etc. Values may be less than 0 or greater than 1 to be positioned
 * outside of the shape.
 * - "name", optional string. A unique identifier for the port on the shape.
 *
 * background and foreground:
 *
 * The path of the graphics drawing is split into two elements, *foreground* and
 * *background*. The split is to define which part any shadow applied to the shape
 * is derived from (the background). This, generally, means the background is the
 * line tracing of the outside of the shape, but not always.
 *
 * Any stroke, fill or fillstroke of a background must be the first element of the
 * foreground element, they must not be used within *background*. If the background
 * is empty, this is not required.
 *
 * Because the background cannot have any fill or stroke, it can contain only one
 * *path*, *rect*, *roundrect* or *ellipse* element (or none). It can also not
 * include *image*, *text* or *include-shape*.
 *
 * Note that the state, styling and drawing in mxGraph stencils is very close in
 * design to that of HTML 5 canvas. Tutorials on this subject, if you're not
 * familiar with the topic, will give a good high-level introduction to the
 * concepts used.
 *
 * State:
 *
 * Rendering within the foreground and background elements has the concept of
 * state. There are two types of operations other than state save/load, styling
 * and drawing. The styling operations change the current state, so you can save
 * the current state with <save/> and pull the last saved state from the state
 * stack using <restore/>.
 *
 * Styling:
 *
 * The elements that change colors within the current state all take a hash
 * prefixed hex color code ("#FFEA80").
 *
 * - *strokecolor*, this sets the color that drawing paths will be rendered in
 * when a stroke or fillstroke command is issued.
 * - *fillcolor*, this sets the color that the inside of closed paths will be
 * rendered in when a fill or fillstroke command is issued.
 * - *fontcolor*, this sets the color that fonts are rendered in when text is drawn.
 *
 * *alpha* defines the degree of transparency used between 1.0 for fully opaque
 * and 0.0 for fully transparent.
 *
 * *strokewidth* defines the integer thickness of drawing elements rendered by
 * stroking. Use fixed="1" to apply the value as-is, without scaling.
 *
 * *dashed* is "1" for dashing enabled and "0" for disabled.
 *
 * When *dashed* is enabled the current dash pattern, defined by *dashpattern*,
 * is used on strokes. dashpattern is a sequence of space separated "on, off"
 * lengths that define what distance to paint the stroke for, then what distance
 * to paint nothing for, repeat... The default is "3 3". You could define a more
 * complex pattern with "5 3 2 6", for example. Generally, it makes sense to have
 * an even number of elements in the dashpattern, but that's not required.
 *
 * *linejoin*, *linecap* and *miterlimit* are best explained by the Mozilla page
 * on Canvas styling (about halfway down). The values are all the same except we
 * use "flat" for linecap, instead of Canvas' "butt".
 *
 * For font styling there are.
 *
 * - *fontsize*, an integer,
 * - *fontstyle*, an ORed bit pattern of bold (1), italic (2) and underline (4),
 * i.e bold underline is "5".
 * - *fontfamily*, is a string defining the typeface to be used.
 *
 * Drawing:
 *
 * Most drawing is contained within a *path* element. Again, the graphic
 * primitives are very similar to that of HTML 5 canvas.
 *
 * - *move* to attributes required decimals (x,y).
 * - *line* to attributes required decimals (x,y).
 * - *quad* to required decimals (x2,y2) via control point required decimals
 * (x1,y1).
 * - *curve* to required decimals (x3,y3), via control points required decimals
 * (x1,y1) and (x2,y2).
 * - *arc*, this doesn't follow the HTML Canvas signatures, instead it's a copy
 * of the SVG arc command. The SVG specification documentation gives the best
 * description of its behaviors. The attributes are named identically, they are
 * decimals and all required.
 * - *close* ends the current subpath and causes an automatic straight line to
 * be drawn from the current point to the initial point of the current subpath.
 *
 * Complex drawing:
 *
 * In addition to the graphics primitive operations there are non-primitive
 * operations. These provide an easy method to draw some basic shapes.
 *
 * - *rect*, attributes "x", "y", "w", "h", all required decimals
 * - *roundrect*, attributes "x", "y", "w", "h", all required decimals. Also
 * "arcsize" an optional decimal attribute defining how large, the corner curves
 * are.
 * - *ellipse*, attributes "x", "y", "w", "h", all required decimals.
 *
 * Note that these 3 shapes and all paths must be followed by either a fill,
 * stroke, or fillstroke.
 *
 * Text:
 *
 * *text* elements have the following attributes.
 *
 * - "str", the text string to display, required.
 * - "x" and "y", the decimal location (x,y) of the text element, required.
 * - "align", the horizontal alignment of the text element, either "left",
 * "center" or "right". Optional, default is "left".
 * - "valign", the vertical alignment of the text element, either "top", "middle"
 * or "bottom". Optional, default is "top".
 * - "localized", 0 or 1, if 1 then the "str" actually contains a key to use to
 * fetch the value out of mxResources. Optional, default is
 * <defaultLocalized>.
 * - "vertical", 0 or 1, if 1 the label is rendered vertically (rotated by 90
 * degrees). Optional, default is 0.
 * - "rotation", angle in degrees (0 to 360). The angle to rotate the text by.
 * Optional, default is 0.
 * - "align-shape", 0 or 1, if 0 ignore the rotation of the shape when setting
 * the text rotation. Optional, default is 1.
 *
 * If <allowEval> is true, then the text content of the this element can define
 * a function which is invoked with the shape as the only argument and returns
 * the value for the text element (ignored if the str attribute is not null).
 *
 * Images:
 *
 * *image* elements can either be external URLs, or data URIs, where supported
 * (not in IE 7-). Attributes are:
 *
 * - "src", required string. Either a data URI or URL.
 * - "x", "y", required decimals. The (x,y) position of the image.
 * - "w", "h", required decimals. The width and height of the image.
 * - "flipH" and "flipV", optional 0 or 1. Whether to flip the image along the
 * horizontal/vertical axis. Default is 0 for both.
 *
 * If <allowEval> is true, then the text content of the this element can define
 * a function which is invoked with the shape as the only argument and returns
 * the value for the image source (ignored if the src attribute is not null).
 *
 * Sub-shapes:
 *
 * *include-shape* allow stencils to be rendered within the current stencil by
 * referencing the sub-stencil by name. Attributes are:
 *
 * - "name", required string. The unique shape name of the stencil.
 * - "x", "y", "w", "h", required decimals. The (x,y) position of the sub-shape
 * and its width and height.
 *
 * Constructor: mxStencil
 *
 * Constructs a new generic shape by setting <desc> to the given XML node and
 * invoking <parseDescription> and <parseConstraints>.
 *
 * Parameters:
 *
 * desc - XML node that contains the stencil description.
 */
export class mxStencil {

  constructor(desc: Element);

  /**
   * Variable: defaultLocalized
   *
   * Static global variable that specifies the default value for the localized
   * attribute of the text element. Default is false.
   */
  defaultLocalized: boolean;

  /**
   * Function: allowEval
   *
   * Static global switch that specifies if the use of eval is allowed for
   * evaluating text content and images. Default is false. Set this to true
   * if stencils can not contain user input.
   */
  allowEval: boolean;

  /**
   * Variable: desc
   *
   * Holds the XML node with the stencil description.
   */
  desc: Element;

  /**
   * Variable: constraints
   *
   * Holds an array of <mxConnectionConstraints> as defined in the shape.
   */
  constraints: mxConnectionConstraint[];

  /**
   * Variable: aspect
   *
   * Holds the aspect of the shape. Default is 'auto'.
   */
  aspect: string;

  /**
   * Variable: w0
   *
   * Holds the width of the shape. Default is 100.
   */
  w0: number;

  /**
   * Variable: h0
   *
   * Holds the height of the shape. Default is 100.
   */
  h0: number;

  /**
   * Variable: bgNodes
   *
   * Holds the XML node with the stencil description.
   */
  bgNode: Element;

  /**
   * Variable: fgNodes
   *
   * Holds the XML node with the stencil description.
   */
  fgNode: Element;

  /**
   * Variable: strokewidth
   *
   * Holds the strokewidth direction from the description.
   */
  strokewidth: string;

  /**
   * Function: parseDescription
   *
   * Reads <w0>, <h0>, <aspect>, <bgNodes> and <fgNodes> from <desc>.
   */
  parseDescription(): void;

  /**
   * Function: parseConstraints
   *
   * Reads the constraints from <desc> into <constraints> using
   * <parseConstraint>.
   */
  parseConstraints(): void;

  /**
   * Function: parseConstraint
   *
   * Parses the given XML node and returns its <mxConnectionConstraint>.
   */
  parseConstraint(node: Element): void;

  /**
   * Function: evaluateTextAttribute
   *
   * Gets the given attribute as a text. The return value from <evaluateAttribute>
   * is used as a key to <mxResources.get> if the localized attribute in the text
   * node is 1 or if <defaultLocalized> is true.
   */
  evaluateTextAttribute(node: string, attribute: string, shape: string): string;

  /**
   * Function: evaluateAttribute
   *
   * Gets the attribute for the given name from the given node. If the attribute
   * does not exist then the text content of the node is evaluated and if it is
   * a function it is invoked with <shape> as the only argument and the return
   * value is used as the attribute value to be returned.
   */
  evaluateAttribute(node: string, attribute: string, shape: string): string;

  /**
   * Function: drawShape
   *
   * Draws this stencil inside the given bounds.
   */
  drawShape(canvas: mxAbstractCanvas2D, shape: string, x: number, y: number, w: number, h: number): void;

  /**
   * Function: drawChildren
   *
   * Draws this stencil inside the given bounds.
   */
  drawChildren(canvas: mxAbstractCanvas2D, shape: string, x: number, y: number, w: number, h: number, node: Element, aspect: string, disableShadow: boolean, paint: boolean)

  /**
   * Function: computeAspect
   *
   * Returns a rectangle that contains the offset in x and y and the horizontal
   * and vertical scale in width and height used to draw this shape inside the
   * given <mxRectangle>.
   *
   * Parameters:
   *
   * shape - <mxShape> to be drawn.
   * bounds - <mxRectangle> that should contain the stencil.
   * direction - Optional direction of the shape to be darwn.
   */
  computeAspect(shape: string, x: number, y: number, w: number, h: number, direction?: string): mxRectangle;

  /**
   * Function: drawNode
   *
   * Draws this stencil inside the given bounds.
   */
  drawNode(canvas: mxAbstractCanvas2D, shape: string, node: Element, aspect: mxRectangle, disableShadow: boolean, paint: boolean): void;
}


/**
 * Class: mxStylesheet
 *
 * Defines the appearance of the cells in a graph. See <putCellStyle> for an
 * example of creating a new cell style. It is recommended to use objects, not
 * arrays for holding cell styles. Existing styles can be cloned using
 * <mxUtils.clone> and turned into a string for debugging using
 * <mxUtils.toString>.
 *
 * Default Styles:
 *
 * The stylesheet contains two built-in styles, which are used if no style is
 * defined for a cell:
 *
 *   defaultVertex - Default style for vertices
 *   defaultEdge - Default style for edges
 *
 * Example:
 *
 * (code)
 * var vertexStyle = stylesheet.getDefaultVertexStyle();
 * vertexStyle[mxConstants.ROUNDED] = true;
 * var edgeStyle = stylesheet.getDefaultEdgeStyle();
 * edgeStyle[mxConstants.STYLE_EDGE] = mxEdgeStyle.EntityRelation;
 * (end)
 *
 * Modifies the built-in default styles.
 *
 * To avoid the default style for a cell, add a leading semicolon
 * to the style definition, eg.
 *
 * (code)
 * ;shadow=1
 * (end)
 *
 * Removing keys:
 *
 * For removing a key in a cell style of the form [stylename;|key=value;] the
 * special value none can be used, eg. highlight;fillColor=none
 *
 * See also the helper methods in mxUtils to modify strings of this format,
 * namely <mxUtils.setStyle>, <mxUtils.indexOfStylename>,
 * <mxUtils.addStylename>, <mxUtils.removeStylename>,
 * <mxUtils.removeAllStylenames> and <mxUtils.setStyleFlag>.
 *
 * Constructor: mxStylesheet
 *
 * Constructs a new stylesheet and assigns default styles.
 */
export interface StyleMap {
  [styleKey: string]: string;
}

export class mxStylesheet {

  constructor();

  /**
   * Function: styles
   *
   * Maps from names to cell styles. Each cell style is a map of key,
   * value pairs.
   */
  styles: StyleMap;

  /**
   * Function: createDefaultVertexStyle
   *
   * Creates and returns the default vertex style.
   */
  createDefaultVertexStyle(): StyleMap;

  /**
   * Function: createDefaultEdgeStyle
   *
   * Creates and returns the default edge style.
   */
  createDefaultEdgeStyle(): StyleMap;

  /**
   * Function: putDefaultVertexStyle
   *
   * Sets the default style for vertices using defaultVertex as the
   * stylename.
   *
   * Parameters:
   * style - Key, value pairs that define the style.
   */
  putDefaultVertexStyle(style: StyleMap): void;

  /**
   * Function: putDefaultEdgeStyle
   *
   * Sets the default style for edges using defaultEdge as the stylename.
   */
  putDefaultEdgeStyle(style: StyleMap): void;

  /**
   * Function: getDefaultVertexStyle
   *
   * Returns the default style for vertices.
   */
  getDefaultVertexStyle(): StyleMap;

  /**
   * Function: getDefaultEdgeStyle
   *
   * Sets the default style for edges.
   */
  getDefaultEdgeStyle(): StyleMap;

  /**
   * Function: putCellStyle
   *
   * Stores the given map of key, value pairs under the given name in
   * <styles>.
   *
   * Example:
   *
   * The following example adds a new style called 'rounded' into an
   * existing stylesheet:
   *
   * (code)
   * var style = new Object();
   * style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
   * style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
   * style[mxConstants.STYLE_ROUNDED] = true;
   * graph.getStylesheet().putCellStyle('rounded', style);
   * (end)
   *
   * In the above example, the new style is an object. The possible keys of
   * the object are all the constants in <mxConstants> that start with STYLE
   * and the values are either JavaScript objects, such as
   * <mxPerimeter.RightAngleRectanglePerimeter> (which is in fact a function)
   * or expressions, such as true. Note that not all keys will be
   * interpreted by all shapes (eg. the line shape ignores the fill color).
   * The final call to this method associates the style with a name in the
   * stylesheet. The style is used in a cell with the following code:
   *
   * (code)
   * model.setStyle(cell, 'rounded');
   * (end)
   *
   * Parameters:
   *
   * name - Name for the style to be stored.
   * style - Key, value pairs that define the style.
   */
  putCellStyle(name: string, style: string): void;

  /**
   * Function: getCellStyle
   *
   * Returns the cell style for the specified stylename or the given
   * defaultStyle if no style can be found for the given stylename.
   *
   * Parameters:
   *
   * name - String of the form [(stylename|key=value);] that represents the
   * style.
   * defaultStyle - Default style to be returned if no style can be found.
   */
  getCellStyle(name: string, defaultStyle?: string): StyleMap;
}


/**
 * Class: mxSvgCanvas2D
 *
 * Extends <mxAbstractCanvas2D> to implement a canvas for SVG. This canvas writes all
 * calls as SVG output to the given SVG root node.
 *
 * (code)
 * var svgDoc = mxUtils.createXmlDocument();
 * var root = (svgDoc.createElementNS != null) ?
 * 		svgDoc.createElementNS(mxConstants.NS_SVG, 'svg') : svgDoc.createElement('svg');
 *
 * if (svgDoc.createElementNS == null)
 * {
 *   root.setAttribute('xmlns', mxConstants.NS_SVG);
 *   root.setAttribute('xmlns:xlink', mxConstants.NS_XLINK);
 * }
 * else
 * {
 *   root.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', mxConstants.NS_XLINK);
 * }
 *
 * var bounds = graph.getGraphBounds();
 * root.setAttribute('width', (bounds.x + bounds.width + 4) + 'px');
 * root.setAttribute('height', (bounds.y + bounds.height + 4) + 'px');
 * root.setAttribute('version', '1.1');
 *
 * svgDoc.appendChild(root);
 *
 * var svgCanvas = new mxSvgCanvas2D(root);
 * (end)
 *
 * A description of the public API is available in <mxXmlCanvas2D>.
 *
 * To disable anti-aliasing in the output, use the following code.
 *
 * (code)
 * graph.view.canvas.ownerSVGElement.setAttribute('shape-rendering', 'crispEdges');
 * (end)
 *
 * Or set the respective attribute in the SVG element directly.
 *
 * Constructor: mxSvgCanvas2D
 *
 * Constructs a new SVG canvas.
 *
 * Parameters:
 *
 * root - SVG container for the output.
 * styleEnabled - Optional boolean that specifies if a style section should be
 * added. The style section sets the default font-size, font-family and
 * stroke-miterlimit globally. Default is false.
 */
export class mxSvgCanvas2D extends mxAbstractCanvas2D {

  constructor(root: Element, styleEnabled?: boolean);

  /**
   * Variable: root
   *
   * Reference to the container for the SVG content.
   */
  root: Element;

  /**
   * Variable: gradients
   *
   * Local cache of gradients for quick lookups.
   */
  gradients: Element[];

  /**
   * Variable: defs
   *
   * Reference to the defs section of the SVG document. Only for export.
   */
  defs: Element;

  /**
   * Variable: styleEnabled
   *
   * Stores the value of styleEnabled passed to the constructor.
   */
  styleEnabled: boolean;

  /**
   * Variable: node
   *
   * Holds the current DOM node.
   */
  node: Element;

  /**
   * Variable: matchHtmlAlignment
   *
   * Specifies if plain text output should match the vertical HTML alignment.
   * Defaul is true.
   */
  matchHtmlAlignment: boolean;

  /**
   * Variable: textEnabled
   *
   * Specifies if text output should be enabled. Default is true.
   */
  textEnabled: boolean;

  /**
   * Variable: foEnabled
   *
   * Specifies if use of foreignObject for HTML markup is allowed. Default is true.
   */
  foEnabled: boolean;

  /**
   * Variable: foAltText
   *
   * Specifies the fallback text for unsupported foreignObjects in exported
   * documents. Default is '[Object]'. If this is set to null then no fallback
   * text is added to the exported document.
   */
  foAltText: string;

  /**
   * Variable: foOffset
   *
   * Offset to be used for foreignObjects.
   */
  foOffset: number;

  /**
   * Variable: textOffset
   *
   * Offset to be used for text elements.
   */
  textOffset: number;

  /**
   * Variable: imageOffset
   *
   * Offset to be used for image elements.
   */
  imageOffset: number;

  /**
   * Variable: strokeTolerance
   *
   * Adds transparent paths for strokes.
   */
  strokeTolerance: number;

  /**
   * Variable: minStrokeWidth
   *
   * Minimum stroke width for output.
   */
  minStrokeWidth: number;

  /**
   * Variable: refCount
   *
   * Local counter for references in SVG export.
   */
  refCount: number;

  /**
   * Variable: blockImagePointerEvents
   *
   * Specifies if a transparent rectangle should be added on top of images to absorb
   * all pointer events. Default is false. This is only needed in Firefox to disable
   * control-clicks on images.
   */
  blockImagePointerEvents: boolean;

  /**
   * Variable: lineHeightCorrection
   *
   * Correction factor for <mxConstants.LINE_HEIGHT> in HTML output. Default is 1.
   */
  lineHeightCorrection: number;

  /**
   * Variable: pointerEventsValue
   *
   * Default value for active pointer events. Default is all.
   */
  pointerEventsValue: string;

  /**
   * Variable: fontMetricsPadding
   *
   * Padding to be added for text that is not wrapped to account for differences
   * in font metrics on different platforms in pixels. Default is 10.
   */
  fontMetricsPadding: number;

  /**
   * Variable: cacheOffsetSize
   *
   * Specifies if offsetWidth and offsetHeight should be cached. Default is true.
   * This is used to speed up repaint of text in <updateText>.
   */
  cacheOffsetSize: boolean;

  /**
   * Function: format
   *
   * Rounds all numbers to 2 decimal points.
   */
  format(value: number): number;

  /**
   * Function: getBaseUrl
   *
   * Returns the URL of the page without the hash part. This needs to use href to
   * include any search part with no params (ie question mark alone). This is a
   * workaround for the fact that window.location.search is empty if there is
   * no search string behind the question mark.
   */
  getBaseUrl(): string;

  /**
   * Function: reset
   *
   * Returns any offsets for rendering pixels.
   */
  reset(): void;

  /**
   * Function: createStyle
   *
   * Creates the optional style section.
   */
  createStyle(x?: any): HTMLElement;

  /**
   * Function: createElement
   *
   * Private helper function to create SVG elements
   */
  createElement(tagName: string, namespace: string): HTMLElement;

  /**
   * Function: getAlternateContent
   *
   * Returns the alternate content for the given foreignObject.
   */
  createAlternateContent(fo, x: number, y: number, w: number, h: number, str: string, align: string, valign: string, wrap: string, format: string, overflow: string, clip: string, rotation: number);

  /**
   * Function: createGradientId
   *
   * Private helper function to create SVG elements
   */
  createGradientId(start: string, end: string, alpha1: string, alpha2: string, direction: string): string;

  /**
   * Function: getSvgGradient
   *
   * Private helper function to create SVG elements
   */
  getSvgGradient(start: string, end: string, alpha1: string, alpha2: string, direction: string): Element;

  /**
   * Function: createSvgGradient
   *
   * Creates the given SVG gradient.
   */
  createSvgGradient(start: string, end: string, alpha1: string, alpha2: string, direction: string): Element;

  /**
   * Function: addNode
   *
   * Private helper function to create SVG elements
   */
  addNode(filled: boolean, stroked: boolean): Element;

  /**
   * Function: updateFill
   *
   * Transfers the stroke attributes from <state> to <node>.
   */
  updateFill(): void;

  /**
   * Function: getCurrentStrokeWidth
   *
   * Returns the current stroke width (>= 1), ie. max(1, this.format(this.state.strokeWidth * this.state.scale)).
   */
  getCurrentStrokeWidth(): number;

  /**
   * Function: updateStroke
   *
   * Transfers the stroke attributes from <state> to <node>.
   */
  updateStroke(): void;

  /**
   * Function: updateStrokeAttributes
   *
   * Transfers the stroke attributes from <state> to <node>.
   */
  updateStrokeAttributes(): void;

  /**
   * Function: createDashPattern
   *
   * Creates the SVG dash pattern for the given state.
   */
  createDashPattern(scale: number): Number[];

  /**
   * Function: createTolerance
   *
   * Creates a hit detection tolerance shape for the given node.
   */
  createTolerance(node: Element): Element;

  /**
   * Function: createShadow
   *
   * Creates a shadow for the given node.
   */
  createShadow(node: Element): Element;

  /**
   * Function: setLink
   *
   * Experimental implementation for hyperlinks.
   */
  setLink(link: string): void;

  /**
   * Function: rotate
   *
   * Sets the rotation of the canvas. Note that rotation cannot be concatenated.
   */
  rotate(theta: number, flipH: boolean, flipV: boolean, cx: number, cy: number): void;

  /**
   * Function: begin
   *
   * Extends superclass to create path.
   */
  begin(): void;

  /**
   * Function: rect
   *
   * Private helper function to create SVG elements
   */
  rect(x: number, y: number, w: number, h: number): void;

  /**
   * Function: roundrect
   *
   * Private helper function to create SVG elements
   */
  roundrect(x: number, y: number, w: number, h: number, dx: number, dy: number): void;

  /**
   * Function: ellipse
   *
   * Private helper function to create SVG elements
   */
  ellipse(x: number, y: number, w: number, h: number): void;

  /**
   * Function: image
   *
   * Private helper function to create SVG elements
   */
  image(x: number, y: number, w: number, h: number, src: string, aspect: boolean, flipH: boolean, flipV: boolean);

  /**
   * Function: convertHtml
   *
   * Converts the given HTML string to XHTML.
   */
  convertHtml(val: string): string;

  /**
   * Function: createDiv
   *
   * Private helper function to create SVG elements
   */
  createDiv(str: string, align: string, valign: string, style: string, overflow: string): HTMLElement;

  /**
   * Invalidates the cached offset size for the given node.
   */
  invalidateCachedOffsetSize(node: Element): void;

  /**
   * Updates existing DOM nodes for text rendering. LATER: Merge common parts with text function below.
   */
  updateText(x: number, y: number, w: number, h: number, align: string, valign: string, wrap: string, overflow: string, clip: string, rotation: number, node: Element): void;

  /**
   * Function: text
   *
   * Paints the given text. Possible values for format are empty string for plain
   * text and html for HTML markup. Note that HTML markup is only supported if
   * foreignObject is supported and <foEnabled> is true. (This means IE9 and later
   * does currently not support HTML text as part of shapes.)
   */
  text(x: number, y: number, w: number, h: number, str: string, align: string, valign: string, wrap: string, format: string, overflow: string, clip: string, rotation: number, dir: string): void;

  /**
   * Function: createClip
   *
   * Creates a clip for the given coordinates.
   */
  createClip(x: number, y: number, w: number, h: number): Element;

  /**
   * Function: text
   *
   * Paints the given text. Possible values for format are empty string for
   * plain text and html for HTML markup.
   */
  plainText(x: number, y: number, w: number, h: number, str: string, align: string, valign: string, wrap: string, overflow: string, clip: string, rotation: number, dir: string): void;

  /**
   * Function: updateFont
   *
   * Updates the text properties for the given node. (NOTE: For this to work in
   * IE, the given node must be a text or tspan element.)
   */
  updateFont(node: Element): void;

  /**
   * Function: addTextBackground
   *
   * Background color and border
   */
  addTextBackground(node: Element, str: string, x: number, y: number, w: number, h: number, align: string, valign: string, overflow: string): void;

  /**
   * Function: stroke
   *
   * Paints the outline of the current path.
   */
  stroke(): void;

  /**
   * Function: fill
   *
   * Fills the current path.
   */
  fill(): void;

  /**
   * Function: fillAndStroke
   *
   * Fills and paints the outline of the current path.
   */
  fillAndStroke(): void;
}


/**
 * Class: mxText
 *
 * Extends <mxShape> to implement a text shape. To change vertical text from
 * bottom to top to top to bottom, the following code can be used:
 *
 * (code)
 * verticalTextRotation = 90;
 * (end)
 *
 * Constructor: mxText
 *
 * Constructs a new text shape.
 *
 * Parameters:
 *
 * value - String that represents the text to be displayed. This is stored in
 * <value>.
 * bounds - <mxRectangle> that defines the bounds. This is stored in
 * <mxShape.bounds>.
 * align - Specifies the horizontal alignment. Default is ''. This is stored in
 * <align>.
 * valign - Specifies the vertical alignment. Default is ''. This is stored in
 * <valign>.
 * color - String that specifies the text color. Default is 'black'. This is
 * stored in <color>.
 * family - String that specifies the font family. Default is
 * <mxConstants.DEFAULT_FONTFAMILY>. This is stored in <family>.
 * size - Integer that specifies the font size. Default is
 * <mxConstants.DEFAULT_FONTSIZE>. This is stored in <size>.
 * fontStyle - Specifies the font style. Default is 0. This is stored in
 * <fontStyle>.
 * spacing - Integer that specifies the global spacing. Default is 2. This is
 * stored in <spacing>.
 * spacingTop - Integer that specifies the top spacing. Default is 0. The
 * sum of the spacing and this is stored in <spacingTop>.
 * spacingRight - Integer that specifies the right spacing. Default is 0. The
 * sum of the spacing and this is stored in <spacingRight>.
 * spacingBottom - Integer that specifies the bottom spacing. Default is 0.The
 * sum of the spacing and this is stored in <spacingBottom>.
 * spacingLeft - Integer that specifies the left spacing. Default is 0. The
 * sum of the spacing and this is stored in <spacingLeft>.
 * horizontal - Boolean that specifies if the label is horizontal. Default is
 * true. This is stored in <horizontal>.
 * background - String that specifies the background color. Default is null.
 * This is stored in <background>.
 * border - String that specifies the label border color. Default is null.
 * This is stored in <border>.
 * wrap - Specifies if word-wrapping should be enabled. Default is false.
 * This is stored in <wrap>.
 * clipped - Specifies if the label should be clipped. Default is false.
 * This is stored in <clipped>.
 * overflow - Value of the overflow style. Default is 'visible'.
 */
export class mxText extends mxShape {

  constructor(value: string, bounds: mxRectangle, align: string, valign: string, color: string,
    family: string, size: number, fontStyle: string | 0, spacing: number, spacingTop: number, spacingRight: number,
    spacingBottom: number, spacingLeft: number, horizontal: boolean, background: string, border: string,
    wrap: boolean, clipped: boolean, overflow: string, labelPadding: string, textDirection: string);

  /**
   * Variable: baseSpacingTop
   *
   * Specifies the spacing to be added to the top spacing. Default is 0. Use the
   * value 5 here to get the same label positions as in mxGraph 1.x.
   */
  baseSpacingTop: number;

  /**
   * Variable: baseSpacingBottom
   *
   * Specifies the spacing to be added to the bottom spacing. Default is 0. Use the
   * value 1 here to get the same label positions as in mxGraph 1.x.
   */
  baseSpacingBottom: number;

  /**
   * Variable: baseSpacingLeft
   *
   * Specifies the spacing to be added to the left spacing. Default is 0.
   */
  baseSpacingLeft: number;

  /**
   * Variable: baseSpacingRight
   *
   * Specifies the spacing to be added to the right spacing. Default is 0.
   */
  baseSpacingRight: number;

  /**
   * Variable: replaceLinefeeds
   *
   * Specifies if linefeeds in HTML labels should be replaced with BR tags.
   * Default is true.
   */
  replaceLinefeeds: boolean;

  /**
   * Variable: verticalTextRotation
   *
   * Rotation for vertical text. Default is -90 (bottom to top).
   */
  verticalTextRotation: number;

  /**
   * Variable: ignoreClippedStringSize
   *
   * Specifies if the string size should be measured in <updateBoundingBox> if
   * the label is clipped and the label position is center and middle. If this is
   * true, then the bounding box will be set to <bounds>. Default is true.
   * <ignoreStringSize> has precedence over this switch.
   */
  ignoreClippedStringSize: boolean;

  /**
   * Variable: ignoreStringSize
   *
   * Specifies if the actual string size should be measured. If disabled the
   * boundingBox will not ignore the actual size of the string, otherwise
   * <bounds> will be used instead. Default is false.
   */
  ignoreStringSize: boolean;

  /**
   * Variable: textWidthPadding
   *
   * Specifies the padding to be added to the text width for the bounding box.
   * This is needed to make sure no clipping is applied to borders. Default is 4
   * for IE 8 standards mode and 3 for all others.
   */
  textWidthPadding: 4 | 3;

  /**
   * Variable: lastValue
   *
   * Contains the last rendered text value. Used for caching.
   */
  lastValue: string;

  /**
   * Variable: cacheEnabled
   *
   * Specifies if caching for HTML labels should be enabled. Default is true.
   */
  cacheEnabled: boolean;

  /**
   * Function: isParseVml
   *
   * Text shapes do not contain VML markup and do not need to be parsed. This
   * method returns false to speed up rendering in IE8.
   */
  isParseVml(): boolean;

  /**
   * Function: isHtmlAllowed
   *
   * Returns true if HTML is allowed for this shape. This implementation returns
   * true if the browser is not in IE8 standards mode.
   */
  isHtmlAllowed(): boolean;

  /**
   * Function: getSvgScreenOffset
   *
   * Disables offset in IE9 for crisper image output.
   */
  getSvgScreenOffset(): 0 | 0.5;

  /**
   * Function: checkBounds
   *
   * Returns true if the bounds are not null and all of its variables are numeric.
   */
  checkBounds(): boolean;

  /**
   * Function: paint
   *
   * Generic rendering code.
   */
  paint(c: mxAbstractCanvas2D, update?: boolean): void;

  /**
   * Function: redraw
   *
   * Renders the text using the given DOM nodes.
   */
  redraw(): void;

  /**
   * Function: resetStyles
   *
   * Resets all styles.
   */
  resetStyles(): void;

  /**
   * Function: apply
   *
   * Extends mxShape to update the text styles.
   *
   * Parameters:
   *
   * state - <mxCellState> of the corresponding cell.
   */
  apply(state: mxCellState): void;

  /**
   * Function: getAutoDirection
   *
   * Used to determine the automatic text direction. Returns
   * <mxConstants.TEXT_DIRECTION_LTR> or <mxConstants.TEXT_DIRECTION_RTL>
   * depending on the contents of <value>. This is not invoked for HTML, wrapped
   * content or if <value> is a DOM node.
   */
  getAutoDirection(): string;

  /**
   * Function: updateBoundingBox
   *
   * Updates the <boundingBox> for this shape using the given node and position.
   */
  updateBoundingBox(): void;

  /**
   * Function: getShapeRotation
   *
   * Returns 0 to avoid using rotation in the canvas via updateTransform.
   */
  getShapeRotation(): 0;

  /**
   * Function: getTextRotation
   *
   * Returns the rotation for the text label of the corresponding shape.
   */
  getTextRotation(): number;

  /**
   * Function: isPaintBoundsInverted
   *
   * Inverts the bounds if <mxShape.isBoundsInverted> returns true or if the
   * horizontal style is false.
   */
  isPaintBoundsInverted(): boolean;

  /**
   * Function: configureCanvas
   *
   * Sets the state of the canvas for drawing the shape.
   */
  configureCanvas(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;

  /**
   * Function: updateVmlContainer
   *
   * Sets the width and height of the container to 1px.
   */
  updateVmlContainer(): void;

  /**
   * Function: redrawHtmlShape
   *
   * Updates the HTML node(s) to reflect the latest bounds and scale.
   */
  redrawHtmlShape(): void;

  /**
   * Function: updateHtmlTransform
   *
   * Returns the spacing as an <mxPoint>.
   */
  updateHtmlTransform(): void;

  /**
   * Function: setInnerHtml
   *
   * Sets the inner HTML of the given element to the <value>.
   */
  updateInnerHtml(elt: HTMLElement): void;

  /**
   * Function: updateHtmlFilter
   *
   * Rotated text rendering quality is bad for IE9 quirks/IE8 standards
   */
  updateHtmlFilter(): void;

  /**
   * Function: updateValue
   *
   * Updates the HTML node(s) to reflect the latest bounds and scale.
   */
  updateValue(): void;

  /**
   * Function: updateFont
   *
   * Updates the HTML node(s) to reflect the latest bounds and scale.
   */
  updateFont(node: HTMLElement): void;

  /**
   * Function: updateSize
   *
   * Updates the HTML node(s) to reflect the latest bounds and scale.
   */
  updateSize(node: HTMLElement, enableWrap: boolean): void;

  /**
   * Function: getMargin
   *
   * Returns the spacing as an <mxPoint>.
   */
  updateMargin(): void;

  /**
   * Function: getSpacing
   *
   * Returns the spacing as an <mxPoint>.
   */
  getSpacing(): mxPoint;
}


/**
 * Class: mxTooltipHandler
 *
 * Graph event handler that displays tooltips. <mxGraph.getTooltip> is used to
 * get the tooltip for a cell or handle. This handler is built-into
 * <mxGraph.tooltipHandler> and enabled using <mxGraph.setTooltips>.
 *
 * Example:
 *
 * (code>
 * new mxTooltipHandler(graph);
 * (end)
 *
 * Constructor: mxTooltipHandler
 *
 * Constructs an event handler that displays tooltips with the specified
 * delay (in milliseconds). If no delay is specified then a default delay
 * of 500 ms (0.5 sec) is used.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 * delay - Optional delay in milliseconds.
 */
export class mxTooltipHandler {

  constructor(graph: mxGraph, delay?: number);

  /**
   * Variable: zIndex
   *
   * Specifies the zIndex for the tooltip and its shadow. Default is 10005.
   */
  zIndex: number;

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: delay
   *
   * Delay to show the tooltip in milliseconds. Default is 500.
   */
  delay: number;

  /**
   * Variable: ignoreTouchEvents
   *
   * Specifies if touch and pen events should be ignored. Default is true.
   */
  ignoreTouchEvents: boolean;

  /**
   * Variable: hideOnHover
   *
   * Specifies if the tooltip should be hidden if the mouse is moved over the
   * current cell. Default is false.
   */
  hideOnHover: boolean;

  /**
   * Variable: destroyed
   *
   * True if this handler was destroyed using <destroy>.
   */
  destroyed: boolean;

  /**
   * Variable: enabled
   *
   * Specifies if events are handled. Default is true.
   */
  enabled: boolean;

  /**
   * Function: isEnabled
   *
   * Returns true if events are handled. This implementation
   * returns <enabled>.
   */
  isEnabled(): boolean;

  /**
   * Function: setEnabled
   *
   * Enables or disables event handling. This implementation
   * updates <enabled>.
   */
  setEnabled(enabled: boolean): void;

  /**
   * Function: isHideOnHover
   *
   * Returns <hideOnHover>.
   */
  isHideOnHover(): boolean;

  /**
   * Function: setHideOnHover
   *
   * Sets <hideOnHover>.
   */
  setHideOnHover(value: boolean): void;

  /**
   * Function: init
   *
   * Initializes the DOM nodes required for this tooltip handler.
   */
  init(): void;

  /**
   * Function: getStateForEvent
   *
   * Returns the <mxCellState> to be used for showing a tooltip for this event.
   */
  getStateForEvent(me: mxMouseEvent): mxCellState;

  /**
   * Function: mouseDown
   *
   * Handles the event by initiating a rubberband selection. By consuming the
   * event all subsequent events of the gesture are redirected to this
   * handler.
   */
  mouseDown(sender: any, me: mxMouseEvent): void;

  /**
   * Function: mouseMove
   *
   * Handles the event by updating the rubberband selection.
   */
  mouseMove(sender: any, me: mxMouseEvent): void;

  /**
   * Function: mouseUp
   *
   * Handles the event by resetting the tooltip timer or hiding the existing
   * tooltip.
   */
  mouseUp(sender: any, me: mxMouseEvent): void;


  /**
   * Function: resetTimer
   *
   * Resets the timer.
   */
  resetTimer(): void;

  /**
   * Function: reset
   *
   * Resets and/or restarts the timer to trigger the display of the tooltip.
   */
  reset(me: mxMouseEvent, restart: boolean, state: mxCellState): void;

  /**
   * Function: hide
   *
   * Hides the tooltip and resets the timer.
   */
  hide(): void;

  /**
   * Function: hideTooltip
   *
   * Hides the tooltip.
   */
  hideTooltip(): void;

  /**
   * Function: show
   *
   * Shows the tooltip for the specified cell and optional index at the
   * specified location (with a vertical offset of 10 pixels).
   */
  show(tip: string, x: number, y: number): void;

  /**
   * Function: destroy
   *
   * Destroys the handler and all its resources and DOM nodes.
   */
  destroy(): void;

}


/**
 * Class: mxUndoableEdit
 *
 * Implements a composite undoable edit. Here is an example for a custom change
 * which gets executed via the model:
 *
 * (code)
 * function CustomChange(model, name)
 * {
 *   this.model = model;
 *   this.name = name;
 *   this.previous = name;
 * };
 *
 * CustomChange.prototype.execute()
 * {
 *   var tmp = this.model.name;
 *   this.model.name = this.previous;
 *   this.previous = tmp;
 * };
 *
 * var name = prompt('Enter name');
 * graph.model.execute(new CustomChange(graph.model, name));
 * (end)
 *
 * Event: mxEvent.EXECUTED
 *
 * Fires between START_EDIT and END_EDIT after an atomic change was executed.
 * The <code>change</code> property contains the change that was executed.
 *
 * Event: mxEvent.START_EDIT
 *
 * Fires before a set of changes will be executed in <undo> or <redo>.
 * This event contains no properties.
 *
 * Event: mxEvent.END_EDIT
 *
 * Fires after a set of changeswas executed in <undo> or <redo>.
 * This event contains no properties.
 *
 * Constructor: mxUndoableEdit
 *
 * Constructs a new undoable edit for the given source.
 */
export class mxUndoableEdit {
  constructor(source: any, significant: boolean);

  /**
   * Variable: source
   *
   * Specifies the source of the edit.
   */
  source: any;

  /**
   * Variable: changes
   *
   * Array that contains the changes that make up this edit. The changes are
   * expected to either have an undo and redo function, or an execute
   * function. Default is an empty array.
   */
  changes: mxUndoableChange[];

  /**
   * Variable: significant
   *
   * Specifies if the undoable change is significant.
   * Default is true.
   */
  significant: boolean;

  /**
   * Variable: undone
   *
   * Specifies if this edit has been undone. Default is false.
   */
  undone: boolean;

  /**
   * Variable: redone
   *
   * Specifies if this edit has been redone. Default is false.
   */
  redone: boolean;

  /**
   * Function: isEmpty
   *
   * Returns true if the this edit contains no changes.
   */
  isEmpty(): boolean;

  /**
   * Function: isSignificant
   *
   * Returns <significant>.
   */
  isSignificant(): boolean;

  /**
   * Function: add
   *
   * Adds the specified change to this edit. The change is an object that is
   * expected to either have an undo and redo, or an execute function.
   */
  add(change: mxUndoableChange): void;

  /**
   * Function: notify
   *
   * Hook to notify any listeners of the changes after an <undo> or <redo>
   * has been carried out. This implementation is empty.
   */
  notify(): void;

  /**
   * Function: die
   *
   * Hook to free resources after the edit has been removed from the command
   * history. This implementation is empty.
   */
  die(): void;

  /**
   * Function: undo
   *
   * Undoes all changes in this edit.
   */
  undo(): void;

  /**
   * Function: redo
   *
   * Redoes all changes in this edit.
   */
  redo(): void;

}

interface mxUndoableChange {
  execute(): void;
}


/**
 * Class: mxVertexHandler
 *
 * Event handler for resizing cells. This handler is automatically created in
 * <mxGraph.createHandler>.
 *
 * Constructor: mxVertexHandler
 *
 * Constructs an event handler that allows to resize vertices
 * and groups.
 *
 * Parameters:
 *
 * state - <mxCellState> of the cell to be resized.
 */
export class mxVertexHandler {
  constructor(state: mxCellState);

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: state
   *
   * Reference to the <mxCellState> being modified.
   */
  state: mxCellState;

  /**
   * Variable: singleSizer
   *
   * Specifies if only one sizer handle at the bottom, right corner should be
   * used. Default is false.
   */
  singleSizer: boolean;

  /**
   * Variable: index
   *
   * Holds the index of the current handle.
   */
  index: number;

  /**
   * Variable: allowHandleBoundsCheck
   *
   * Specifies if the bounds of handles should be used for hit-detection in IE or
   * if <tolerance> > 0. Default is true.
   */
  allowHandleBoundsCheck: boolean;

  /**
   * Variable: handleImage
   *
   * Optional <mxImage> to be used as handles. Default is null.
   */
  handleImage: mxImage;

  /**
   * Variable: tolerance
   *
   * Optional tolerance for hit-detection in <getHandleForEvent>. Default is 0.
   */
  tolerance: number;

  /**
   * Variable: rotationEnabled
   *
   * Specifies if a rotation handle should be visible. Default is false.
   */
  rotationEnabled: boolean;

  /**
   * Variable: parentHighlightEnabled
   *
   * Specifies if the parent should be highlighted if a child cell is selected.
   * Default is false.
   */
  parentHighlightEnabled: boolean;

  /**
   * Variable: rotationRaster
   *
   * Specifies if rotation steps should be "rasterized" depening on the distance
   * to the handle. Default is true.
   */
  rotationRaster: boolean;

  /**
   * Variable: rotationCursor
   *
   * Specifies the cursor for the rotation handle. Default is 'crosshair'.
   */
  rotationCursor: number;

  /**
   * Variable: livePreview
   *
   * Specifies if resize should change the cell in-place. This is an experimental
   * feature for non-touch devices. Default is false.
   */
  livePreview: boolean;

  /**
   * Variable: manageSizers
   *
   * Specifies if sizers should be hidden and spaced if the vertex is small.
   * Default is false.
   */
  manageSizers: boolean;

  /**
   * Variable: constrainGroupByChildren
   *
   * Specifies if the size of groups should be constrained by the children.
   * Default is false.
   */
  constrainGroupByChildren: boolean;

  /**
   * Variable: rotationHandleVSpacing
   *
   * Vertical spacing for rotation icon. Default is -16.
   */
  rotationHandleVSpacing: number;

  /**
   * Variable: horizontalOffset
   *
   * The horizontal offset for the handles. This is updated in <redrawHandles>
   * if <manageSizers> is true and the sizers are offset horizontally.
   */
  horizontalOffset: number;

  /**
   * Variable: verticalOffset
   *
   * The horizontal offset for the handles. This is updated in <redrawHandles>
   * if <manageSizers> is true and the sizers are offset vertically.
   */
  verticalOffset: number;

  /**
   * Function: init
   *
   * Initializes the shapes required for this vertex handler.
   */
  init(): void;

  /**
   * Function: isRotationHandleVisible
   *
   * Returns true if the rotation handle should be showing.
   */
  isRotationHandleVisible(): boolean;

  /**
   * Function: isConstrainedEvent
   *
   * Returns true if the aspect ratio if the cell should be maintained.
   */
  isConstrainedEvent(me: mxMouseEvent): boolean;

  /**
   * Function: isCenteredEvent
   *
   * Returns true if the center of the vertex should be maintained during the resize.
   */
  isCenteredEvent(state: mxCellState, me: mxMouseEvent): boolean;

  /**
   * Function: createCustomHandles
   *
   * Returns an array of custom handles. This implementation returns null.
   */
  createCustomHandles(): any[];

  /**
   * Function: updateMinBounds
   *
   * Initializes the shapes required for this vertex handler.
   */
  updateMinBounds(): void;

  /**
   * Function: getSelectionBounds
   *
   * Returns the mxRectangle that defines the bounds of the selection
   * border.
   */
  getSelectionBounds(state: mxCellState): mxRectangle;

  /**
   * Function: createParentHighlightShape
   *
   * Creates the shape used to draw the selection border.
   */
  createParentHighlightShape(bounds: mxRectangle): mxRectangleShape;

  /**
   * Function: createSelectionShape
   *
   * Creates the shape used to draw the selection border.
   */
  createSelectionShape(bounds: mxRectangle): mxRectangleShape;

  /**
   * Function: getSelectionColor
   *
   * Returns <mxConstants.VERTEX_SELECTION_COLOR>.
   */
  getSelectionColor(): string;

  /**
   * Function: getSelectionStrokeWidth
   *
   * Returns <mxConstants.VERTEX_SELECTION_STROKEWIDTH>.
   */
  getSelectionStrokeWidth(): number;

  /**
   * Function: isSelectionDashed
   *
   * Returns <mxConstants.VERTEX_SELECTION_DASHED>.
   */
  isSelectionDashed(): boolean;

  /**
   * Function: createSizer
   *
   * Creates a sizer handle for the specified cursor and index and returns
   * the new <mxRectangleShape> that represents the handle.
   */
  createSizer(cursor: string, index: number, size: number, fillColor: string): mxRectangleShape;

  /**
   * Function: isSizerVisible
   *
   * Returns true if the sizer for the given index is visible.
   * This returns true for all given indices.
   */
  isSizerVisible(index: number): boolean;

  /**
   * Function: createSizerShape
   *
   * Creates the shape used for the sizer handle for the specified bounds an
   * index. Only images and rectangles should be returned if support for HTML
   * labels with not foreign objects is required.
   */
  createSizerShape(bounds: mxRectangle, index: number, fillColor: string): mxRectangleShape;

  /**
   * Function: createBounds
   *
   * Helper method to create an <mxRectangle> around the given centerpoint
   * with a width and height of 2*s or 6, if no s is given.
   */
  moveSizerTo(shape: mxRectangleShape, x: number, y: number): void;

  /**
   * Function: getHandleForEvent
   *
   * Returns the index of the handle for the given event. This returns the index
   * of the sizer from where the event originated or <mxEvent.LABEL_INDEX>.
   */
  getHandleForEvent(me: mxMouseEvent): number;

  /**
   * Function: isCustomHandleEvent
   *
   * Returns true if the given event allows custom handles to be changed. This
   * implementation returns true.
   */
  isCustomHandleEvent(me: mxMouseEvent): boolean;

  /**
   * Function: mouseDown
   *
   * Handles the event if a handle has been clicked. By consuming the
   * event all subsequent events of the gesture are redirected to this
   * handler.
   */
  mouseDown(sender: any, me: mxMouseEvent): void;

  /**
   * Function: isLivePreviewBorder
   *
   * Called if <livePreview> is enabled to check if a border should be painted.
   * This implementation returns true if the shape is transparent.
   */
  isLivePreviewBorder(): boolean;

  /**
   * Function: start
   *
   * Starts the handling of the mouse gesture.
   */
  start(x: number, y: number, index: number): void;

  /**
   * Function: hideHandles
   *
   * Shortcut to <hideSizers>.
   */
  setHandlesVisible(visible: boolean): void;

  /**
   * Function: hideSizers
   *
   * Hides all sizers except.
   *
   * Starts the handling of the mouse gesture.
   */
  hideSizers(): void;

  /**
   * Function: checkTolerance
   *
   * Checks if the coordinates for the given event are within the
   * <mxGraph.tolerance>. If the event is a mouse event then the tolerance is
   * ignored.
   */
  checkTolerance(me: mxMouseEvent): void;

  /**
   * Function: updateHint
   *
   * Hook for subclassers do show details while the handler is active.
   */
  updateHint(me: mxMouseEvent): void;

  /**
   * Function: removeHint
   *
   * Hooks for subclassers to hide details when the handler gets inactive.
   */
  removeHint(): void;

  /**
   * Function: roundAngle
   *
   * Hook for rounding the angle. This uses Math.round.
   */
  roundAngle(angle: number): number;

  /**
   * Function: roundLength
   *
   * Hook for rounding the unscaled width or height. This uses Math.round.
   */
  roundLength(length: number): number;

  /**
   * Function: mouseMove
   *
   * Handles the event by updating the preview.
   */
  mouseMove(sender: any, me: mxMouseEvent): void;

  /**
   * Function: rotateVertex
   *
   * Rotates the vertex.
   */
  moveLabel(me: mxMouseEvent): void;

  /**
   * Function: rotateVertex
   *
   * Rotates the vertex.
   */
  rotateVertex(me: mxMouseEvent): void;

  /**
   * Function: rotateVertex
   *
   * Rotates the vertex.
   */
  resizeVertex(me: mxMouseEvent): void;

  /**
   * Function: updateLivePreview
   *
   * Repaints the live preview.
   */
  updateLivePreview(me: mxMouseEvent): void;

  /**
   * Function: mouseUp
   *
   * Handles the event by applying the changes to the geometry.
   */
  mouseUp(sender: any, me: mxMouseEvent): void;

  /**
   * Function: rotateCell
   *
   * Rotates the given cell to the given rotation.
   */
  isRecursiveResize(state: mxCellState, me: mxMouseEvent): boolean;

  /**
   * Function: rotateClick
   *
   * Hook for subclassers to implement a single click on the rotation handle.
   * This code is executed as part of the model transaction. This implementation
   * is empty.
   */
  rotateClick(): void;

  /**
   * Function: rotateCell
   *
   * Rotates the given cell and its children by the given angle in degrees.
   *
   * Parameters:
   *
   * cell - <mxCell> to be rotated.
   * angle - Angle in degrees.
   */
  rotateCell(cell: mxCell, angle: number, parent: mxCell): void;

  /**
   * Function: reset
   *
   * Resets the state of this handler.
   */
  reset(): void;

  /**
   * Function: resizeCell
   *
   * Uses the given vector to change the bounds of the given cell
   * in the graph using <mxGraph.resizeCell>.
   */
  resizeCell(cell: mxCell, dx: number, dy: number, index: number, gridEnabled: boolean, constrained: boolean, recurse: boolean): void;

  /**
   * Function: moveChildren
   *
   * Moves the children of the given cell by the given vector.
   */
  moveChildren(cell: mxCell, dx: number, dy: number): void;

  /**
   * Function: union
   *
   * Returns the union of the given bounds and location for the specified
   * handle index.
   *
   * To override this to limit the size of vertex via a minWidth/-Height style,
   * the following code can be used.
   *
   * (code)
   * var vertexHandlerUnion = union;
   * union(bounds, dx, dy, index, gridEnabled, scale, tr, constrained)
   * {
   *   var result = vertexHandlerUnion.apply(this, arguments);
   *
   *   result.width = Math.max(result.width, mxUtils.getNumber(this.state.style, 'minWidth', 0));
   *   result.height = Math.max(result.height, mxUtils.getNumber(this.state.style, 'minHeight', 0));
   *
   *   return result;
   * };
   * (end)
   *
   * The minWidth/-Height style can then be used as follows:
   *
   * (code)
   * graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30, 'minWidth=100;minHeight=100;');
   * (end)
   *
   * To override this to update the height for a wrapped text if the width of a vertex is
   * changed, the following can be used.
   *
   * (code)
   * var mxVertexHandlerUnion = union;
   * union(bounds, dx, dy, index, gridEnabled, scale, tr, constrained)
   * {
   *   var result = mxVertexHandlerUnion.apply(this, arguments);
   *   var s = this.state;
   *
   *   if (this.graph.isHtmlLabel(s.cell) && (index == 3 || index == 4) &&
   *       s.text != null && s.style[mxConstants.STYLE_WHITE_SPACE] == 'wrap')
   *   {
   *     var label = this.graph.getLabel(s.cell);
   *     var fontSize = mxUtils.getNumber(s.style, mxConstants.STYLE_FONTSIZE, mxConstants.DEFAULT_FONTSIZE);
   *     var ww = result.width / s.view.scale - s.text.spacingRight - s.text.spacingLeft
   *
   *     result.height = mxUtils.getSizeForString(label, fontSize, s.style[mxConstants.STYLE_FONTFAMILY], ww).height;
   *   }
   *
   *   return result;
   * };
   * (end)
   */
  union(bounds: mxRectangle, dx: number, dy: number, index: number, gridEnabled: boolean, scale: number, tr: Element, constrained: boolean, centered: boolean): void;

  /**
   * Function: redraw
   *
   * Redraws the handles and the preview.
   */
  redraw(): void;

  /**
   * Returns the padding to be used for drawing handles for the current <bounds>.
   */
  getHandlePadding(): mxPoint;

  /**
   * Function: redrawHandles
   *
   * Redraws the handles. To hide certain handles the following code can be used.
   *
   * (code)
   * redrawHandles()
   * {
   *   mxVertexHandlerRedrawHandles.apply(this, arguments);
   *
   *   if (this.sizers != null && this.sizers.length > 7)
   *   {
   *     this.sizers[1].node.style.display = 'none';
   *     this.sizers[6].node.style.display = 'none';
   *   }
   * };
   * (end)
   */
  redrawHandles(): void;

  /**
   * Function: getRotationHandlePosition
   *
   * Returns an <mxPoint> that defines the rotation handle position.
   */
  getRotationHandlePosition(): mxPoint;

  /**
   * Function: updateParentHighlight
   *
   * Updates the highlight of the parent if <parentHighlightEnabled> is true.
   */
  updateParentHighlight(): void;

  /**
   * Function: drawPreview
   *
   * Redraws the preview.
   */
  drawPreview(): void;

  /**
   * Function: destroy
   *
   * Destroys the handler and all its resources and DOM nodes.
   */
  destroy(): void;
}


/**
 *
 * Class: mxVmlCanvas2D
 *
 * Implements a canvas to be used for rendering VML. Here is an example of implementing a
 * fallback for SVG images which are not supported in VML-based browsers.
 *
 * (code)
 * var mxVmlCanvas2DImage = mxVmlCanvas2D.prototype.image;
 * mxVmlCanvas2D.prototype.image(x, y, w, h, src, aspect, flipH, flipV)
 * {
 *   if (src.substring(src.length - 4, src.length) == '.svg')
 *   {
 *     src = 'http://www.jgraph.com/images/mxgraph.gif';
 *   }
 *
 *   mxVmlCanvas2DImage.apply(this, arguments);
 * };
 * (end)
 *
 * To disable anti-aliasing in the output, use the following code.
 *
 * (code)
 * document.createStyleSheet().cssText = mxClient.VML_PREFIX + '\\:*{antialias:false;)}';
 * (end)
 *
 * A description of the public API is available in <mxXmlCanvas2D>. Note that
 * there is a known issue in VML where gradients are painted using the outer
 * bounding box of rotated shapes, not the actual bounds of the shape. See
 * also <text> for plain text label restrictions in shapes for VML.
 */
export class mxVmlCanvas2D extends mxAbstractCanvas2D {
  constructor(root: Element);


  /**
   * Variable: path
   *
   * Holds the current DOM node.
   */
  node: Element;

  /**
   * Variable: textEnabled
   *
   * Specifies if text output should be enabledetB. Default is true.
   */
  textEnabled: boolean;

  /**
   * Variable: moveOp
   *
   * Contains the string used for moving in paths. Default is 'm'.
   */
  moveOp: string;

  /**
   * Variable: lineOp
   *
   * Contains the string used for moving in paths. Default is 'l'.
   */
  lineOp: string;

  /**
   * Variable: curveOp
   *
   * Contains the string used for bezier curves. Default is 'c'.
   */
  curveOp: string;

  /**
   * Variable: closeOp
   *
   * Holds the operator for closing curves. Default is 'x e'.
   */
  closeOp: string;

  /**
   * Variable: rotatedHtmlBackground
   *
   * Background color for rotated HTML. Default is ''. This can be set to eg.
   * white to improve rendering of rotated text in VML for IE9.
   */
  rotatedHtmlBackground: string;

  /**
   * Variable: vmlScale
   *
   * Specifies the scale used to draw VML shapes.
   */
  vmlScale: number;

  /**
   * Function: createElement
   *
   * Creates the given element using the document.
   */
  createElement(name: string): HTMLElement;

  /**
   * Function: createVmlElement
   *
   * Creates a new element using <createElement> and prefixes the given name with
   * <mxClient.VML_PREFIX>.
   */
  createVmlElement(name: string): HTMLElement;

  /**
   * Function: addNode
   *
   * Adds the current node to the <root>.
   */
  addNode(filled: boolean, stroked: boolean): void;

  /**
   * Function: createTransparentFill
   *
   * Creates a transparent fill.
   */
  createTransparentFill(): HTMLElement;

  /**
   * Function: createFill
   *
   * Creates a fill for the current state.
   */
  createFill(): HTMLElement;
  /**
   * Function: createStroke
   *
   * Creates a fill for the current state.
   */
  createStroke(): HTMLElement;

  /**
   * Function: getVmlDashPattern
   *
   * Returns a VML dash pattern for the current dashPattern.
   * See http://msdn.microsoft.com/en-us/library/bb264085(v=vs.85).aspx
   */
  getVmlDashStyle(): string;

  /**
   * Function: createShadow
   *
   * Creates a shadow for the given node.
   */
  createShadow(node: Element, filled: boolean, stroked: boolean): Element;

  /**
   * Function: createShadowFill
   *
   * Creates the fill for the shadow.
   */
  createShadowFill(): HTMLElement;

  /**
   * Function: createShadowStroke
   *
   * Creates the stroke for the shadow.
   */
  createShadowStroke(): HTMLElement;

  /**
   * Function: rotate
   *
   * Sets the rotation of the canvas. Note that rotation cannot be concatenated.
   */
  rotate(theta: number, flipH: boolean, flipV: boolean, cx: number, cy: number): void;

  /**
   * Function: begin
   *
   * Extends superclass to create path.
   */
  begin(): void;

  /**
   * Function: quadTo
   *
   * Replaces quadratic curve with bezier curve in VML.
   */
  quadTo(x1: number, y1: number, x2: number, y2: number): void;

  /**
   * Function: createRect
   *
   * Sets the glass gradient.
   */
  createRect(nodeName: string, x: number, y: number, w: number, h: number): HTMLElement;

  /**
   * Function: rect
   *
   * Sets the current path to a rectangle.
   */
  rect(x: number, y: number, w: number, h: number): void;

  /**
   * Function: roundrect
   *
   * Sets the current path to a rounded rectangle.
   */
  roundrect(x: number, y: number, w: number, h: number, dx: number, dy: number): void;

  /**
   * Function: ellipse
   *
   * Sets the current path to an ellipse.
   */
  ellipse(x: number, y: number, w: number, h: number): void;

  /**
   * Function: image
   *
   * Paints an image.
   */
  image(x: number, y: number, w: number, h: number, src: string, aspect: boolean, flipH: boolean, flipV: boolean): void;

  /**
   * Function: createText
   *
   * Creates the innermost element that contains the HTML text.
   */
  createDiv(str: string, align: string, valign: string, overflow: string): HTMLElement;

  /**
   * Function: text
   *
   * Paints the given text. Possible values for format are empty string for plain
   * text and html for HTML markup. Clipping, text background and border are not
   * supported for plain text in VML.
   */
  text(x: number, y: number, w: number, h: number, str: string, align: string, valign: string, wrap: string, format: string, overflow: string, clip: string, rotation: number, dir: string): void;

  /**
   * Function: plainText
   *
   * Paints the outline of the current path.
   */
  plainText(x: number, y: number, w: number, h: number, str: string, align: string, valign: string, wrap: string, overflow: string, clip: string, rotation: number, dir: string): void;

  /**
   * Function: stroke
   *
   * Paints the outline of the current path.
   */
  stroke(): void;

  /**
   * Function: fill
   *
   * Fills the current path.
   */
  fill(): void;

  /**
   * Function: fillAndStroke
   *
   * Fills and paints the outline of the current path.
   */
  fillAndStroke(): void;
}
