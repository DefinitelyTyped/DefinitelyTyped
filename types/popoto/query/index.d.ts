import { Node } from '../graph/node';
import { Link } from '../graph/link';

export interface QueryStructure {
    statement: string;
    matchElements: string[];
    whereElements: string[];
    withElements: string[];
    returnElements: string[];
    endElements: string[];
    parameters: { [key: string]: any };
}

export namespace Query {
    /**
     * Define the number of results displayed in result list.
     */
    const MAX_RESULTS_COUNT: number;
    const VALUE_QUERY_LIMIT: number;
    const USE_PARENT_RELATION: boolean;
    const USE_RELATION_DIRECTION: boolean;
    const RETURN_LABELS: boolean;
    const COLLECT_RELATIONS_WITH_VALUES: boolean;
    const prefilter: string;
    const prefilterParameters: { [key: string]: any };
    function applyPrefilters(queryStructure: QueryStructure): typeof queryStructure;

    /**
     * Immutable constant object to identify Neo4j internal ID
     */
    type NEO4J_INTERNAL_ID = Readonly<{queryInternalName: "NEO4JID"}>;

    /**
     * Function used to filter returned relations
     * return false if the result should be filtered out.
     *
     * @param d relation returned object
     * @returns boolean
     */
    function filterRelation(d: Link): boolean;

    /**
     * Generate the query to count nodes of a label.
     * If the label is defined as distinct in configuration the query will count only distinct values on constraint attribute.
     */
    function generateTaxonomyCountQuery(label: string): string;

    function generateNegativeQueryElements(): Pick<QueryStructure, 'whereElements' | 'parameters'>;

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
    function generateQueryElements(rootNode: Node, selectedNode: Node, links: Link[], isConstraintNeeded: boolean, useCustomConstraints: boolean): QueryStructure;

    /**
     * Generate the where and parameter statements for the nodes with value
     *
     * @param node the node to generate value constraints
     * @param useCustomConstraints define whether to use custom generation in popoto config
     */
    function generateNodeValueConstraints(node: Node, useCustomConstraints: boolean): Pick<QueryStructure, 'whereElements' | 'parameters'>;

    /**
     * Filter links to get only paths from root to leaf containing a value or being the selectedNode.
     * All other paths in the graph containing no value are ignored.
     *
     * @param rootNode root node of the graph.
     * @param targetNode node in the graph target of the query.
     * @param initialLinks list of links representing the graph to filter.
     * @returns list of relevant links.
     */
    function getRelevantLinks(rootNode: Node, targetNode: Node, initialLinks: Link[]): Link[];

    /**
     * Get the list of link defining the complete path from node to root.
     * All other links are ignored.
     *
     * @param node The node where to start in the graph.
     * @param links
     */
    function getLinksToRoot(node: Node, links: Link[]): Link[];

    /**
     * Generate a Cypher query to retrieve the results matching the current graph.
     *
     * @param isGraph
     * @returns query structure
     */
    function generateResultQuery(isGraph: boolean): QueryStructure;

    /**
     * Generate a cypher query to the get the node count, set as parameter matching the current graph.
     *
     * @param countedNode the counted node
     * @returns the node count cypher query
     */
    function generateNodeCountQuery(countedNode: Node): string;

    /**
     * Generate a Cypher query from the graph model to get all the possible values for the targetNode element.
     *
     * @param targetNode node in the graph to get the values.
     * @returns the query to execute to get all the values of targetNode corresponding to the graph.
     */
    function generateNodeValueQuery(targetNode: Node): string;

    /**
     * Generate a Cypher query to retrieve all the relation available for a given node.
     *
     * @param targetNode
     * @returns node relation query
     */
    function generateNodeRelationQuery(targetNode: Node): string;
}
