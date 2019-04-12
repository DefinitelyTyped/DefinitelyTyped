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

declare namespace mxgraph {
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
}