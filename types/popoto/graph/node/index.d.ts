import * as d3 from 'd3';

export interface Node {
    // ID of the g element in SVG graph containing all the link elements.
    gID: string;

    DONUTS_MARGIN: number;
    DONUT_WIDTH: number;

    NODE_MAX_CHARS: number;
    NODE_TITLE_MAX_CHARS: number;

    // Number of nodes displayed per page during value selection.
    PAGE_RESIZE: number;

    // Count box default size
    CountBox: { x: number, y: number, w: number, h: number };

    // Store choose node state to avoid multiple node expand at the same time
    chooseWaiting: boolean;

    getDonutInnerRadius: () => number;
    getDonutOuterRadius: () => number;

    pie: d3.Pie<ThisType<any>, number>;

    /**
     * Defines the list of possible nodes.
     * ROOT: Node used as graph root. It is the target of the query. Only one node of this type should be available in graph.
     * CHOOSE: Nodes defining a generic node label. From these node is is possible to select a value or explore relations.
     * VALUE: Unique node containing a value constraint. Usually replace CHOOSE nodes once a value as been selected.
     * GROUP: Empty node used to group relations. No value can be selected but relations can be explored. These nodes doesn't have count.
     */
    nodeTypes: Readonly<{
        ROOT: 0
        CHOOSE: 0
        VALUE: 0
        GROUP: 0
    }>;

    // Used to generate unique internal labels used for example as identifier in Cypher query.
    internalLabels: { [label: string]: number };

    /**
     * Create a normalized identifier from a node label.
     * Multiple calls with the same node label will generate different unique identifier.
     *
     * @param nodeLabel
     * @returns normalized identifier from a node label
     */
    generateInternalLabel: (nodeLabel: string) => string;

    /**
     * Update Nodes SVG elements using D3.js update mechanisms.
     */
    updateNodes: () => void;

    /**
     * Update node data with changes done in dataModel.nodes model.
     */
    updateData: () => void;

    /**
     * Update nodes and result counts by executing a query for every nodes with the new graph structure.
     */
    updateCount: () => void;

    /**
     * Update values for nodes having preloadData property
     */
    updateAutoLoadValues: () => void;

    /**
     * Remove old elements.
     * Should be called after updateData.
     */
    removeElements: (exitingData: Node[]) => void;

    /**
     * Add all new elements.
     * Only the skeleton of new nodes are added custom data will be added during the element update phase.
     * Should be called after updateData and before updateElements.
     */
    addNewElements: (enteringData: SVGGElement) => void;

    /**
     * Create the background for a new node element.
     * The background of a node is defined by a circle not visible by default (fill-opacity set to 0) but can be used to highlight a node with animation on this attribute.
     * This circle also define the node zone that can receive events like mouse clicks.
     *
     * @param gNewNodeElements
     */
    addBackgroundElements: (gNewNodeElements: SVGGElement) => void;

    /**
     * Create the node main elements.
     *
     * @param gNewNodeElements
     */
    addMiddlegroundElements: (gNewNodeElements: SVGGElement) => void;

    /**
     * Create the node foreground elements.
     * It contains node additional elements, count or tools like navigation arrows.
     *
     * @param gNewNodeElements
     */
    addForegroundElements: (gNewNodeElements: SVGGElement) => void;

    /**
     * Updates all elements.
     */
    updateElements: () => void;

    updateBackgroundElements: () => void;

    /**
     * Update the middle layer of nodes.
     * TODO refactor node generation to allow future extensions (for example add plugin with new node types...)
     */
    updateMiddlegroundElements: () => void;

    updateMiddlegroundElementsTooltip: (middleG: SVGGElement) => void;

    updateMiddlegroundElementsText: (gMiddlegroundTextNodes: SVGGElement) => void;

    updateMiddlegroundElementsImage: (gMiddlegroundImageNodes: SVGGElement) => void;

    updateMiddlegroundElementsSymbol: (gMiddlegroundSymbolNodes: SVGGElement) => void;

    updateMiddlegroundElementsSVG: (gMiddlegroundSVGNodes: SVGGElement) => void;

    updateMiddlegroundElementsDisplayedText: (middleG: Node[]) => void;

    /**
     * Updates the foreground elements
     */
    updateForegroundElements: () => void;

    segmentClick: (d: any) => void;

    /**
     * Handle the mouse over event on nodes.
     */
    mouseOverNode: () => void;

    /**
     * Handle mouse out event on nodes.
     */
    mouseOutNode: () => void;

    /**
     * Handle the click event on nodes.
     */
    nodeClick: () => void;

    /**
     * Remove all the value node directly linked to clicked node.
     *
     * @param clickedNode
     */
    collapseNode: (clickedNode: Node) => void;

    /**
     * Collapse all nodes with value expanded.
     *
     */
    collapseAllNode: () => void;

    /**
     * Function called on a value node click.
     * In this case the value is added in the parent node and all the value nodes are collapsed.
     *
     * @param clickedNode
     */
    valueNodeClick: (clickedNode: Node) => void;

    /**
     * Function called on choose node click.
     * In this case a query is executed to get all the possible value
     * @param clickedNode
     * TODO optimize with cached data?
     */
    chooseNodeClick: (clickedNode: Node) => void;

    /**
     * Add in all expanded choose nodes the value containing the specified value for the given attribute.
     * And remove it from the nodes data.
     *
     * @param attribute
     * @param value
     */
    addExpandedValue: (attribute: string, value: any) => void;

    /**
     * Get all nodes that contains a value.
     *
     * @param label If set return only node of this label.
     * @return Array of nodes containing at least one value.
     */
    getContainingValue: (label: string) => Node[];

    /**
     * Add value in all CHOOSE nodes with specified label.
     *
     * @param label nodes where to insert
     * @param value
     */
    addValueForLabel: (label: string, value: any) => boolean;

    /**
     * Add a value in a node with the given id and the value of the first attribute if found in its data.
     *
     * @param nodeIds a list of node ids where to add the value.
     * @param displayAttributeValue the value to find in data and to add if found
     */
    addValue: (nodeIds: string[], displayAttributeValue: any) => boolean;

    /**
     * Remove a value from a node.
     * If the value is not found nothing is done.
     *
     * @param n
     * @param value
     */
    removeValue: (n: Node, value: any) => boolean;

    removeValues: (n: Node) => boolean;

    /**
     * Get the value in the provided nodeId for a specific value id.
     *
     * @param nodeId
     * @param constraintAttributeValue
     */
    getValue: (nodeId: string, constraintAttributeValue: any) => any;

    /**
     * Remove in all expanded nodes the value containing the specified value for the given attribute.
     * And move it back to nodes data.
     *
     * @param attribute
     * @param value
     */
    removeExpandedValue: (attribute: string, value: any) => void;

    /**
     * Return all nodes with isAutoLoadValue property set to true.
     */
    getAutoLoadValueNodes: () => Node[];

    /**
     * Add a list of related value if not already found in node.
     * A value is defined with the following structure
     * {
     *   id,
     *   rel,
     *   label
     * }
     *
     * @param n
     * @param values
     * @param isNegative
     */
    addRelatedValues: (n: Node, values: Node[], isNegative: boolean) => void;

    /**
     * Add a list of related value prefixed by a path of nodes.
     * A value is defined with the following structure
     * {
     *   id,
     *   rel,
     *   label
     * }
     *
     * @param n
     * @param relPath
     * @param values
     * @param isNegative
     */
    addRelatedBranch: (n: Node, relPath: Node[], values: Node[], isNegative: boolean) => void;

    /**
     * A value is defined with the following structure
     * {
     *   id,
     *   rel,
     *   label
     * }
     *
     * @param n
     * @param values
     */
    filterExistingValues: (n: Node, values: Node[]) => Node[];

    /**
     * Function called to expand a node containing values.
     * This function will create the value nodes with the clicked node internal data.
     * Only nodes corresponding to the current page index will be generated.
     *
     * @param clickedNode
     */
    expandNode: (clickedNode: Node) => void;

    /**
     * Fetches the list of relationships of a node and store them in the relationships property.
     *
     * @param n the node to fetch the relationships.
     * @param callback
     * @param directionAngle
     */
    loadRelationshipData: (n: Node, callback: () => void, directionAngle: number) => void;

    /**
     * Expands all the relationships available in node.
     *
     * @param n
     * @param callback
     */
    expandRelationships: (n: Node, callback: () => void) => void;

    /**
     * Remove a node and its relationships (recursively) from the graph.
     *
     * @param n the node to remove.
     */
    removeNode: (n: Node) => boolean;

    /**
     * Remove empty branches containing a node.
     *
     * @param n the node to remove.
     * @return true if node have been removed
     */
    removeEmptyBranches: (n: Node) => boolean;

    /**
     * Get in the parent nodes the closest one to the root.
     *
     * @param n the node to start from.
     * @return the trunk node or the node in parameters if not found.
     */
    getTrunkNode: (n: Node) => typeof n;

    /**
     * Function to add on node event to clear the selection.
     * Call to this function on a node will remove the selected value and trigger a graph update.
     */
    clearSelection: () => void;
}
