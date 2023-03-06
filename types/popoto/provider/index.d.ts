import * as d3 from 'd3';
import { Query } from '../query';

export interface Link {
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

export interface Taxonomy {
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

export interface Node {
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
    constraintAttribute: Query.NEO4J_INTERNAL_ID;

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

export interface Provider {
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
