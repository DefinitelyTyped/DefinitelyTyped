// Type definitions for popoto 3.0
// Project: https://popotojs.com/
// Definitions by: Omar Almalol <https://github.com/alma3lol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as d3 from 'd3';
import { Driver, Session, Result as N4jResult } from 'neo4j-driver-lite';

interface Tools {
    CENTER_GRAPH: boolean;
    RESET_GRAPH: boolean;
    SAVE_GRAPH: boolean;
    TOGGLE_TAXONOMY: boolean;
    TOGGLE_FULL_SCREEN: boolean;
    TOGGLE_VIEW_RELATION: boolean;
    TOGGLE_FIT_TEXT: boolean;

    /**
     * Reset the graph to display the root node only.
     */
    reset(): void;

    /**
     * Reset zoom and center the view on svg center.
     */
    center(): void;

    /**
     * Show, hide taxonomy panel.
     */
    toggleTaxonomy(): void;

    /**
     * Enable, disable text fitting on nodes.
     */
    toggleFitText(): void;

    /**
     * Show, hide relation donuts.
     */
    toggleViewRelation(): void;

    toggleFullScreen(): void;
}

interface Toolbar {
    TOOL_TAXONOMY: string;
    TOOL_RELATION: string;
    TOOL_CENTER: string;
    TOOL_FULL_SCREEN: string;
    TOOL_RESET: string;
    TOOL_SAVE: string;
    TOOL_FIT_TEXT: string;

    render(container: SVGGElement): void;
}

interface Taxonomy {
    containerId: string;

    /**
     * Create the taxonomy panel HTML elements.
     */
    createTaxonomyPanel(): void;

    /**
     * Recursive function to flatten data content.
     */
    flattenChildren(d: SVGGElement, vals: any[]): void;

    /**
     * Updates the count number on a taxonomy.
     *
     * @param taxonomyData
     */
    updateCount(taxonomyData: any[]): void;

    /**
     * Recursively generate the taxonomy children elements.
     *
     * @param selection
     */
    addTaxonomyChildren(selection: Element[]): void;

    onClick(): void;

    /**
     * Parse the list of label providers and return a list of data object containing only searchable labels.
     * @returns Array
     */
    generateTaxonomiesData(): any[];

    /**
     * Add children providers data.
     * @param parentData
     * @param id
     */
    addChildrenData(parentData: Node, id: number): number;
}

interface Runner {
    DRIVER: Driver;

    createSession(): Session;

    run(statements: Array<{ statement: string, parameters: any[] }>): void;

    toObject(results: N4jResult[]): any[][];
}

interface Result {
    containerId: string;
    hasChanged: boolean;
    resultCountListeners: Array<(count: number) => void>;
    resultListeners: Array<(result: N4jResult[]) => void>;
    graphResultListeners: Array<() => void>;
    RESULTS_PAGE_SIZE: number;
    TOTAL_COUNT: number;

    /**
     * Register a listener to the result count event.
     * This listener will be called on evry result change with total result count.
     */
    onTotalResultCount(listerner: ((count: number) => void)): void;

    onResultReceived(listerner: ((result: N4jResult[]) => void)): void;

    onGraphResultReceived(listerner: ((graphResult: any) => void)): void;

    /**
     * Parse REST returned Graph data and generate a list of nodes and edges.
     *
     * @param data
     * @returns an object with two keys: nodes, edges
     */
    parseGraphResultData(data: any): { nodes: Node[], edges: any[] };

    updateResults(): void;
    updateResultsCount(): void;
    generatePreQuery(): void;
}

interface QueryViewer {
    containerId: string;
    QUERY_STARTER: string;
    CHOOSE_LABEL: string;

    /**
     * Create the query viewer area.
     */
    createQueryArea(): void;

    /**
     * Update all the elements displayed on the query viewer based on current graph.
     */
    updateQuery(): void;

    generateConstraintData(links: Link[], nodes: Node[]): any[];

    generateData(links: Link[], nodes: Node[]): any[];

    mouseOverSpan(): void;

    rightClickSpan(): void;

    clickSpan(): void;

    mouseOutSpan(): void;
}

interface QueryStructure {
    statement: string;
    matchElements: string[];
    whereElements: string[];
    withElements: string[];
    returnElements: string[];
    endElements: string[];
    parameters: { [key: string]: any };
}

interface Query {
    /**
     * Define the number of results displayed in result list.
     */
    MAX_RESULTS_COUNT: number;
    VALUE_QUERY_LIMIT: number;
    USE_PARENT_RELATION: boolean;
    USE_RELATION_DIRECTION: boolean;
    RETURN_LABELS: boolean;
    COLLECT_RELATIONS_WITH_VALUES: boolean;
    prefilter: string;
    prefilterParameters: { [key: string]: any };
    applyPrefilters(queryStructure: QueryStructure): typeof queryStructure;

    /**
     * Immutable constant object to identify Neo4j internal ID
     */
    NEO4J_INTERNAL_ID: Readonly<{queryInternalName: "NEO4JID"}>;

    /**
     * Function used to filter returned relations
     * return false if the result should be filtered out.
     *
     * @param d relation returned object
     * @returns boolean
     */
    filterRelation(d: Link): boolean;

    /**
     * Generate the query to count nodes of a label.
     * If the label is defined as distinct in configuration the query will count only distinct values on constraint attribute.
     */
    generateTaxonomyCountQuery(label: string): string;

    generateNegativeQueryElements(): Pick<QueryStructure, 'whereElements' | 'parameters'>;

    /**
     * Generate Cypher query match and where elements from root node, selected node and a set of the graph links.
     *
     * @param rootNode root node in the graph.
     * @param selectedNode graph target node.
     * @param links list of links subset of the graph.
     * @returns list of match and where elements.
     * @param isConstraintNeeded (used only for relation query)
     * @param useCustomConstraints define whether to use the custom constraints (actually it is used only for results)
     */
    generateQueryElements(rootNode: Node, selectedNode: Node, links: Link[], isConstraintNeeded: boolean, useCustomConstraints: boolean): QueryStructure;

    /**
     * Generate the where and parameter statements for the nodes with value
     *
     * @param node the node to generate value constraints
     * @param useCustomConstraints define whether to use custom generation in popoto config
     */
    generateNodeValueConstraints(node: Node, useCustomConstraints: boolean): Pick<QueryStructure, 'whereElements' | 'parameters'>;

    /**
     * Filter links to get only paths from root to leaf containing a value or being the selectedNode.
     * All other paths in the graph containing no value are ignored.
     *
     * @param rootNode root node of the graph.
     * @param targetNode node in the graph target of the query.
     * @param initialLinks list of links representing the graph to filter.
     * @returns list of relevant links.
     */
    getRelevantLinks(rootNode: Node, targetNode: Node, initialLinks: Link[]): Link[];

    /**
     * Get the list of link defining the complete path from node to root.
     * All other links are ignored.
     *
     * @param node The node where to start in the graph.
     * @param links
     */
    getLinksToRoot(node: Node, links: Link[]): Link[];

    /**
     * Generate a Cypher query to retrieve the results matching the current graph.
     *
     * @param isGraph
     * @returns query structure
     */
    generateResultQuery(isGraph: boolean): QueryStructure;

    /**
     * Generate a cypher query to the get the node count, set as parameter matching the current graph.
     *
     * @param countedNode the counted node
     * @returns the node count cypher query
     */
    generateNodeCountQuery(countedNode: Node): string;

    /**
     * Generate a Cypher query from the graph model to get all the possible values for the targetNode element.
     *
     * @param targetNode node in the graph to get the values.
     * @returns the query to execute to get all the values of targetNode corresponding to the graph.
     */
    generateNodeValueQuery(targetNode: Node): string;

    /**
     * Generate a Cypher query to retrieve all the relation available for a given node.
     *
     * @param targetNode
     * @returns node relation query
     */
    generateNodeRelationQuery(targetNode: Node): string;
}

interface Link {
    /**
     *  Get the text representation of a link.
     *
     * @param link the link to get the text representation.
     * @returns the text representation of the link.
     */
    getTextValue: (link: any) => string;

    /**
     * Return the color to use on links and relation donut segments.
     *
     *
     * Return null or undefined
     * @param link
     * @param element
     * @param attribute
     * @return color
     */
    getColor: (link: any, element: SVGGElement, attribute: string) => string;

    /**
     *
     * @param link
     * @param element
     * @return css class
     */
    getCSSClass: (link: any, element: SVGGElement) => string;

    /**
     *
     * @param link
     */
    getDistance: (link: any) => number;

    /**
     *  Get the semantic text representation of a link.
     *
     * @param link the link to get the semantic text representation.
     * @returns the semantic text representation of the link.
     */
    getSemanticValue: (link: any) => string;
}

 interface Taxonomy {
    /**
     *  Get the text representation of a taxonomy.
     *
     * @param label the label used for the taxonomy.
     * @returns the text representation of the taxonomy.
     */
    getTextValue: (label: string)  => string;

    /**
     *
     * @param label
     * @param element
     * @return css class
     */
    getCSSClass: (label: string, element: SVGGElement) => string;
}

interface Node {
    /**
     * Defines whether this label can be used as root element of the graph
     * query builder.
     * This property is also used to determine whether the label can be
     * displayed in the taxonomy filter.
     *
     * The default value is true.
     */
    isSearchable: boolean;

    /**
     * Defines whether this label will automatically expend its relations
     * when displayed on graph.
     * If set to true, once displayed additional request will be sent on
     * the database to retrieve its relations.
     *
     * The default value is false.
     */
    autoExpandRelations: boolean;

    /**
     * Defines whether this label will automatically load its available
     * data displayed on graph.
     * If set to true, once displayed additional request will be sent on
     * the database to retrieve its possible values.
     *
     * The default value is false.
     */
    isAutoLoadValue: boolean;

    /**
     * Defines the list of attribute to return for node of this label.
     * All the attributes listed here will be added in generated cypher
     * queries and available in result list and in node provider's
     * functions.
     *
     * The default value contains only the Neo4j internal id.
     * This id is used by default because it is a convenient way to identify
     * a node when nothing is known about its attributes.
     * But you should really consider using your application attributes
     * instead, it is a bad practice to rely on this attribute.
     */
    returnAttributes: any[];

    /**
     * Defines the attribute used to order the value displayed on node.
     *
     * Default value is "count" attribute.
     */
    valueOrderByAttribute: string;

    /**
     * Defines whether the value query order by is ascending, if false order
     * by will be descending.
     *
     * Default value is false (descending)
     */
    isValueOrderAscending: boolean;

    /**
     * Defines the attributes used to order the results.
     * It can be an attribute name or a list of attribute names.
     *
     * Default value is "null" to disable order by.
     */
    resultOrderByAttribute: null | string;

    /**
     * Defines whether the result query order by is ascending, if false
     * order by will be descending.
     * It can be a boolean value or a list of boolean to match the resultOrderByAttribute.
     * If size of isResultOrderAscending < size of resultOrderByAttribute last value is used.
     *
     * Default value is true (ascending)
     */
    isResultOrderAscending: boolean;

    /**
     * Defines the attribute of the node to use in query constraint for
     * nodes of this label.
     * This attribute is used in the generated cypher query to build the
     * constraints with selected values.
     *
     * The default value is the Neo4j internal id.
     * This id is used by default because it is a convenient way to
     * identify a node when nothing is known about its attributes.
     * But you should really consider using your application attributes
     * instead, it is a bad practice to rely on this attribute.
     */
    constraintAttribute: string;

    /**
     * Defines the attribute of the node to use by default to display the node.
     * This attribute must be present in returnAttributes list.
     *
     * The default value is undefined.
     * If undefined the first attribute of the returnAttributes will be used or
     * constraintAttribute if the list is empty.
     */
    displayAttribute: undefined | any[];

    /**
     * Return the list of predefined constraints to add for the given label.
     * These constraints will be added in every generated Cypher query.
     *
     * For example if the returned list contain ["$identifier.born > 1976"]
     * for "Person" nodes everywhere in popoto.js the generated Cypher
     * query will add the constraint "WHERE person.born > 1976"
     *
     * @returns
     */
    getPredefinedConstraints: any[];

    /**
     * Filters the query generated to retrieve the queries.
     *
     * @param initialQuery contains the query as an object structure.
     * @returns filtered result query
     */
    filterResultQuery: (initialQuery: any) => typeof initialQuery;

    /**********************************************************************
     * Node specific parameters:
     *
     * These attributes are specific to nodes (in graph or query viewer)
     * for a given label.
     * But they can be customized for nodes of the same label.
     * The parameters are defined by a function that will be called with
     * the node as parameter.
     * In this function the node internal attributes can be used to
     * customize the value to return.
     **********************************************************************/

    /**
     * Function returning the display type of a node.
     * This type defines how the node will be drawn in the graph.
     *
     * The result must be one of the following values:
     *
     * provider.node.DisplayTypes.IMAGE
     *  In this case the node will be drawn as an image and "getImagePath"
     *  function is required to return the node image path.
     *
     * provider.node.DisplayTypes.SVG
     *  In this case the node will be drawn as SVG paths and "getSVGPaths"
     *
     * provider.node.DisplayTypes.TEXT
     *  In this case the node will be drawn as a simple circle.
     *
     * Default value is TEXT.
     *
     * @param node the node to extract its type.
     * @returns one value from provider.node.DisplayTypes
     */
    getDisplayType: (node: Node) => number;

    /**
     * Function defining the size of the node in graph.
     *
     * The size define the radius of the circle defining the node.
     * other elements (menu, counts...) will scale on this size.
     *
     * Default value is 50.
     *
     * @param node
     */
    getSize: (node: Node) => number;

    /**
     * Return a color for the node.
     *
     * @param node
     * @returns node's color
     */
    getColor: (node: Node) => string;

    /**
     * Generate a CSS class for the node depending on its type.
     *
     * @param node
     * @param element
     * @return string
     */
    getCSSClass: (node: Node, element: SVGGElement) => string;

    /**
     * Function defining whether the node is a group node.
     * In this case no count are displayed and no value can be selected on
     * the node.
     *
     * Default value is false.
     */
    getIsGroup: (node: Node) => boolean;

    /**
     * Function defining whether the node text representation must be
     * displayed on graph.
     * If true the value returned for getTextValue on node will be displayed
     * on graph.
     *
     * This text will be added in addition to the getDisplayType
     * representation.
     * It can be displayed on all type of node display, images, SVG or text.
     *
     * Default value is true
     *
     * @param node the node to display on graph.
     * @returns true if text must be displayed on graph for the
     * node.
     */
    getIsTextDisplayed: (node: Node) => boolean;

    /**
     * Function used to return the text representation of a node.
     *
     * The default behavior is to return the label of the node
     * or the value of constraint attribute of the node if it contains
     * value.
     *
     * The returned value is truncated using
     * graph.node.NODE_MAX_CHARS property.
     *
     * @param node the node to represent as text.
     * @param maxLength used to truncate the text.
     * @returns the text representation of the node.
     */
    getTextValue: (node: Node, maxLength: number) => string;

    /**
     * Function used to return a descriptive text representation of a link.
     * This representation should be more complete than getTextValue and can
     * contain semantic data.
     * This function is used for example to generate the label in the query
     * viewer.
     *
     * The default behavior is to return the getTextValue not truncated.
     *
     * @param node the node to represent as text.
     * @returns the text semantic representation of the node.
     */
    getSemanticValue: (node: Node) => string;

    /**
     * Function returning the image file path to use for a node.
     * This function is only used for provider.node.DisplayTypes.IMAGE
     * type nodes.
     *
     * @param node
     * @returns image paths
     */
    getImagePath: (node: Node) => string;

    /**
     * Function returning a array of path objects to display in the node.
     *
     * @param node
     * @returns svg paths
     */
    getSVGPaths: (node: Node) => any[];

    /**
     * Function returning the image width of the node.
     * This function is only used for provider.node.DisplayTypes.IMAGE
     * type nodes.
     *
     * @param node
     * @returns image width
     */
    getImageWidth: (node: Node) => number;

    /**
     * Function returning the image height of the node.
     * This function is only used for provider.node.DisplayTypes.IMAGE
     * type nodes.
     *
     * @param node
     * @returns image height
     */
    getImageHeight: (node: Node) => number;

    /**
     * Filters the query generated to retrieve the values on a node.
     *
     * @param node
     * @param initialQuery contains the query as an object structure.
     * @returns filtered node value query
     */
    filterNodeValueQuery: (node: Node, initialQuery: any) => typeof initialQuery;
    /**
     * Filters the query generated to retrieve the values on a node.
     *
     * @param node
     * @param initialQuery contains the query as an object structure.
     * @returns filtered node count query
     */
    filterNodeCountQuery: (node: Node, initialQuery: any) => typeof initialQuery;
    /**
     * Filters the query used to retrieve the values on a node.
     *
     * @param node
     * @param initialQuery contains the query as an object structure.
     * @returns filtered node relation  query
     */
    filterNodeRelationQuery: (node: Node, initialQuery: any) => typeof initialQuery;

    /**
     * Customize, in query, the generated constraint for the node.
     *
     * If undefined use default constraint generation.
     */
    generateNodeValueConstraints: undefined | any[];

    /**
     * Customize, in query, the generated negative constraint for the node.
     *
     * If undefined use default negative constraint generation.
     */
    generateNegativeNodeValueConstraints: undefined | any[];

    /**********************************************************************
     * Results specific parameters:
     *
     * These attributes are specific to result display.
     **********************************************************************/

    /**
     * Generate the result entry content using d3.js mechanisms.
     *
     * The parameter of the function is the &lt;p&gt; selected with d3.js
     *
     * The default behavior is to generate a &lt;table&gt; containing all
     * the return attributes in a &lt;th&gt; and their value in a &lt;td&gt;.
     *
     * @param pElmt the &lt;p&gt; element generated in the result list.
     */
    displayResults: (pElmt: SVGPathElement) => void;
    /**
     * Define the different type of rendering of a node for a given label.
     * TEXT: default rendering type, the node will be displayed with an ellipse and a text in it.
     * IMAGE: the node is displayed as an image using the image tag in the svg graph.
     * In this case an image path is required.
     * SVG: the node is displayed using a list of svg path, each path can contain its own color.
     */
    DisplayTypes: Readonly<{
        TEXT: 0
        IMAGE: 1
        SVG: 2
        SYMBOL: 3
    }>;

    /**
     * Get the label provider for the given label.
     * If no provider is defined for the label:
     * First search in parent provider.
     * Then if not found will create one from default provider.
     *
     * @param label to retrieve the corresponding label provider.
     * @returns corresponding label provider.
     */
    getProvider: (label: string) => Node;

    /**
     * Get the property or function defined in node label provider.
     * If the property is not found search is done in parents.
     * If not found in parent, property defined in provider.node.DEFAULT_PROVIDER is returned.
     * If not found in default provider, defaultValue is set and returned.
     *
     * @param label node label to get the property in its provider.
     * @param name name of the property to retrieve.
     * @returns node property defined in its label provider.
     */
    getProperty: (label: string, name: string) => any;

    /**
     *
     * @param label
     */
    getIsAutoLoadValue: (label: string) => boolean;

    /**
     * Return the "isSearchable" property for the node label provider.
     * Is Searchable defines whether the label can be used as graph query builder root.
     * If true the label can be displayed in the taxonomy filter.
     *
     * @param label
     * @returns boolean
     */
    getIsSearchable: (label: string) => boolean;

    /**
     * Return the "autoExpandRelations" property for the node label provider.
     * Auto expand relations defines whether the label will automatically add its relations when displayed on graph.
     *
     * @param label
     * @returns boolean
     */
    getIsAutoExpandRelations: (label: string) => boolean;

    getSchema: (label: string) => any;

    /**
     * Return the list of attributes defined in node label provider.
     * Parents return attributes are also returned.
     *
     * @param label used to retrieve parent attributes.
     * @returns list of return attributes for a node.
     */
    getReturnAttributes: (label: string) => any[];

    /**
     * Return the attribute to use as constraint attribute for a node defined in its label provider.
     *
     * @param label
     * @returns constraint attributes
     */
    getConstraintAttribute: (label: string) => any;

    getDisplayAttribute: (label: string) => any;

    getValueOrderByAttribute: (label: string) => any;

    getResultOrderByAttribute: (label: string) => any;

    /**
     * Check in label provider if text must be displayed with images nodes.
     * @param node
     * @returns wether or not text is displayed
     */
    isTextDisplayed: (node: Node) => boolean;
    /**
     * Return the node display type.
     * can be TEXT, IMAGE, SVG or GROUP.
     *
     * @param node
     * @returns node display type
     */
    getNodeDisplayType: (node: Node) => any;

    getGenerateNodeValueConstraints: (node: Node) => any;

    getGenerateNegativeNodeValueConstraints: (node: Node) => string[];

    /**
     * Return the displayResults function defined in label parameter's provider.
     *
     * @param label
     * @returns display results
     */
    getDisplayResults: (label: string) => any;
}

interface Provider {
    /**
     * Default color scale generator.
     * Used in getColor link and node providers.
     */
    colorScale: d3.ScaleOrdinal<string, ReadonlyArray<string>>;

    colorLuminance: (hex: string, lum: number) => string;

    link: Link & {
        /**
         * Label provider used by default if none have been defined for a label.
         * This provider can be changed if needed to customize default behavior.
         * If some properties are not found in user customized providers, default values will be extracted from this provider.
         */
        DEFAULT_PROVIDER: Link;

        Provider: Link;
    };

    taxonomy: Taxonomy & {
        /**
         * Label provider used by default if none have been defined for a label.
         * This provider can be changed if needed to customize default behavior.
         * If some properties are not found in user customized providers, default values will be extracted from this provider.
         */
        DEFAULT_PROVIDER: Taxonomy;

        Provider: Taxonomy;
    };

    node: Node & {
        /**
         * Label provider used by default if none have been defined for a label.
         * This provider can be changed if needed to customize default behavior.
         * If some properties are not found in user customized providers, default
         * values will be extracted from this provider.
         */
        DEFAULT_PROVIDER: Node;

        Provider: { [key: string]: Partial<Node> };
    };
}
type LogLevels = Readonly<{
    DEBUG: 0
    INFO: 1
    WARN: 2
    ERROR: 3
    NONE: 4
}>;

interface Logger {
    LogLevels: LogLevels;
    LEVEL: LogLevels;
    TRACE: boolean;

    /**
     * Log a message on console depending on configured log levels.
     * Level is define in popoto.logger.LEVEL property.
     * If popoto.logger.TRACE is set to true, the stack trace is also added in log.
     * @param logLevel Level of the message from popoto.logger.LogLevels.
     * @param message Message to log.
     */
    log: (logLevel: LogLevels, message: string) => void;

    /**
     * Log a message in DEBUG level.
     * @param message to log.
     */
    debug: (message: string) => void;

    /**
     * Log a message in INFO level.
     * @param message to log.
     */
    info: (message: string) => void;

    /**
     * Log a message in WARN level.
     * @param message to log.
     */
    warn: (message: string) => void;

    /**
     * Log a message in ERROR level.
     * @param message to log.
     */
    error: (message: string) => void;
}

interface DataModel {
    idGen: number;
    generateId: () => number;
    nodes: any[];
    links: any[];
    getRootNode: () => any;
}

interface Node {
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

interface Link {
    id: string;
    source: Node;
    target: Node;
    type: number;
    label: string;
}

interface GraphSchema {
    label: string;
    value: any[];
    rel: any[];
}

interface GraphSchemaRelation {
    target: any;
    isReverse: boolean;
    label: string;
    rel: any[];
}

interface NodeSchema {
    isNegative: boolean;
    label: string;
    value: any[];
}

interface Graph {
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
interface CypherViewer {
    containerId: string;
    MATCH: string;
    RETURN: string;
    WHERE: string;
    QueryElementTypes: Readonly<{
        KEYWORD: 0
        NODE: 1
        SEPERATOR: 2
        SOURCE: 3
        LINK: 4
        TARGET: 5
        RETURN: 6
        WHERE: 7
    }>;

    /**
     * Create the Cypher viewer area.
     *
     */
    createQueryArea: () => void;

    /**
     * Update all the elements displayed on the cypher viewer based on current graph.
     */
    updateQuery: () => void;

    /**
     * Generate the data from graph to use in cypher query viewer.
     * The returned data is a list of elements representing the current query.
     * Example:
     *
     * MATCH
     * (person:`Person`),
     * (person:`Person`)-[:`FOLLOWS`]->(person1:`Person`{`name`:\"Jessica Thompson\"}),
     * (person1:`Person`)-[:`REVIEWED`]->(movie5:`Movie`{`title`:\"The Replacements\"})
     * RETURN person
     *
     * @param links
     * @returns an array of generated data
     */
    generateData: (links: any[]) => Array<{ id: number, type: number, node: any }>;

    mouseOverSpan: () => void;
    mouseOutSpan: () => void;
    clickSpan: () => void;
    rightClickSpan: () => void;
}

/**
 * Main function to call to use Popoto.js.
 * This function will create all the HTML content based on available IDs in the page.
 *
 * @param startParam Root label or graph schema to use in the graph query builder.
 */
export function start(startParam: string | GraphSchema): void;

/**
 * Function to call to update all the generated elements including svg graph, query viewer and generated results.
 */
export function update(): void;

export const version: number;

/**
 * Create the text representation of a node by slicing the text into lines to fit the node.
 *
 * @param selection
 * @param textParam
 * @param radiusParam
 * @param classParam
 */
export function appendFittedText(selection: any, textParam: string, radiusParam: number, classParam?: any): void;

/**
 * Function to call to update the graph only.
 */
export function updateGraph(): void;

export const cypherviewer: CypherViewer;

export const dataModel: DataModel;

export const graph: Graph;

export const logger: Logger;

export const provider: Provider;

export const query: Query;

export const queryviewer: QueryViewer;

export const result: Result;

export const runner: Runner;

export const taxonomy: Taxonomy;

export const toolbar: Toolbar;

export const tools: Tools;

export {};
