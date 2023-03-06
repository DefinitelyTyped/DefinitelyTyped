import * as d3 from 'd3';

export interface Node {
    id: string;
    parent: Node;
    parentRel: any[];
    type: number;
    label: string;
    fixed: boolean;
    internalLabel: string;
    relationships: any[];
    x: number;
    y: number;
    tx: number;
    ty: number;
    fx: number;
    fy: number;
    isAutoLoadValue: boolean;
}

export interface Link {
    id: string;
    source: Node;
    target: Node;
    type: number;
    label: string;
}

export interface GraphSchema {
    label: string;
    value: any[];
    rel: any[];
}

export interface GraphSchemaRelation {
    target: any;
    isReverse: boolean;
    label: string;
    rel: any[];
}

export interface NodeSchema {
    isNegative: boolean;
    label: string;
    value: any[];
}

export interface Graph {
    link: Link;
    node: Node;
    DISABLE_RELATION: boolean;
    DISABLE_COUNT: boolean;

    /**
     * ID of the HTML component where the graph query builder elements will be generated in.
     */
    containerId: string;

    hasGraphChanged: boolean;
    ignoreCount: boolean;

    zoom: d3.ZoomBehavior<Element, unknown>;

    WHEEL_ZOOM_ENABLED: boolean;
    USE_DONUT_FORCE: boolean;
    USE_VORONOI_LAYOUT: boolean;
    USE_FIT_TEXT: boolean;

    /**
     * Define the list of listenable events on graph.
     */
    Events: {
        NODE_ROOT_ADD: "root.node.add",
        NODE_EXPAND_RELATIONSHIP: "node.expandRelationship",
        GRAPH_SAVE: "graph.save",
        GRAPH_RESET: "graph.reset",
        GRAPH_NODE_RELATION_ADD: "graph.node.relation_add",
        GRAPH_NODE_VALUE_EXPAND: "graph.node.value_expand",
        GRAPH_NODE_VALUE_COLLAPSE: "graph.node.value_collapse",
        GRAPH_NODE_ADD_VALUE: "graph.node.add_value",
        GRAPH_NODE_DATA_LOADED: "graph.node.data_loaded"
    };

    listerners: { [event: string]: Array<() => void>};

    /**
     * Add a listener to the specified event.
     *
     * @param event name of the event to add the listener.
     * @param listener the listener to add.
     */
    on: (event: string, listener: () => void) => void;

    /**
     * Notify the listeners.
     *
     * @param event
     * @param parametersArray
     */
    notifyListeners: (event: string, parametersArray: any[]) => void;

    /**
     * Add a listener on graph save event.
     * @param listener
     */
    onSave: (listener: () => void) => void;

    /**
     * Add a listener on graph reset event.
     * @param listener
     */
    onReset: (listener: () => void) => void;

    /**
     * Set default graph to a predefined value.
     * @param graph
     */
    setDefaultGraph: (graph: Graph) => void;

    /**
     * Generates all the HTML and SVG element needed to display the graph query builder.
     * Everything will be generated in the container with id defined by graph.containerId.
     */
    createGraphArea: () => void;

    svgTag: SVGElement;
    svgdefs: SVGDefsElement;
    svg: SVGGElement;

    getRootNode: () => Node;

    centerRootNode: () => void;

    /**
     * Get the actual width of the SVG element containing the graph query builder.
     * @returns svg width
     */
    getSVGWidth: () => number;

    /**
     * Get the actual height of the SVG element containing the graph query builder.
     * @returns svg height
     */
    getSVGHeight: () => number;

    /**
     * Function to call on SVG zoom event to update the svg transform attribute.
     */
    rescale: () => void;

    CHARGE: number;

    /**
     *  Create the D3.js force simultation for the graph query builder.
     */
    createForceLayout: () => void;

    force: d3.Simulation<d3.SimulationNodeDatum, undefined>;

    /**
     * Adds graph root nodes using the label set as parameter.
     * All the other nodes should have been removed first to avoid inconsistent data.
     *
     * @param label label of the node to add as root.
     */
    addRootNode: (label: string) => void;

    loadSchema: (graphToLoad: GraphSchema) => void;

    loadSchemaRelation: (relationSchema: GraphSchemaRelation, parentNode: Node, linkIndex: number, parentLinkTotalCount: number) => void;

    loadSchemaNode: (nodeSchema: NodeSchema, parentNode: Node, index: number, parentLinkTotalCount: number, parentRel: any[], isReverse: boolean) => void;

    /**
     * Adds a complete graph from schema.
     * All the other nodes should have been removed first to avoid inconsistent data.
     *
     * @param graphSchema schema of the graph to add.
     */
    addSchema: (graphSchema: GraphSchema) => void;

    addSchemaRelation: (relationSchema: GraphSchemaRelation, parentNode: Node, linkIndex: number, parentLinkTotalCount: number) => void;

    addSchemaNode: (nodeSchema: NodeSchema, parentNode: Node, index: number, parentLinkTotalCount: number, parentRel: any[]) => void;

    /**
     * Get the current schema of the graph.
     * @returns graph schema
     */
    getSchema: () => GraphSchema;

    /**
     * Function to call on D3.js force layout tick event.
     * This function will update the position of all links and nodes elements in the graph with the force layout computed coordinate.
     */
    tick: () => void;

    /**
     * Compute the angle in radian between the node and its parent.
     *
     * @param n node to compute angle.
     * @returns angle in radian.
     */
    computeParentAngle: (n: Node) => number;

    /**
     *
     * @param n
     * @param l
     * @param callback
     * @param values
     * @param isNegative
     */
    addRelationshipData: (n: any, l: any, callback: () => void, values: any[], isNegative: boolean) => void;

    voronoi: d3.Voronoi<any>;

    recenterVoronoi: (nodes: Node[]) => Array<[number, number]>;
}
