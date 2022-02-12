export = degree;
/**
 * Calculates graph nodes degree centrality (in/out or both).
 *
 * @see http://en.wikipedia.org/wiki/Centrality#Degree_centrality
 *
 * {ngraph.graph} graph object for which we are calculating centrality.
 * {string} [kind=both] What kind of degree centrality needs to be calculated:
 *   'in'    - calculate in-degree centrality
 *   'out'   - calculate out-degree centrality
 *   'inout' - (default) generic degree centrality is calculated
 */
declare function degree(graph: typeof import('../../ngraph.graph'), kind?: string | undefined): any;
