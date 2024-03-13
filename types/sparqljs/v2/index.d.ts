export const Parser: {
    new(
        prefixes?: { [prefix: string]: string },
        baseIRI?: string,
    ): SparqlParser;
};

export const Generator: {
    new(options?: GeneratorOptions): SparqlGenerator;
};

export interface GeneratorOptions {
    allPrefixes?: boolean | undefined;
}

export interface SparqlParser {
    parse(query: string): SparqlQuery;
}

export interface SparqlGenerator {
    stringify(query: SparqlQuery): string;
}

export type SparqlQuery = Query | Update;

export type Query = SelectQuery | ConstructQuery | AskQuery | DescribeQuery;

export interface BaseQuery {
    type: "query";
    base?: string | undefined;
    prefixes: { [prefix: string]: string };
    where?: Pattern[] | undefined;
    values?: ValuePatternRow[] | undefined;
}

export interface SelectQuery extends BaseQuery {
    queryType: "SELECT";
    variables: Variable[] | ["*"];
    distinct?: boolean | undefined;
    from?: {
        default: string[];
        named: string[];
    } | undefined;
    reduced?: boolean | undefined;
    group?: Grouping[] | undefined;
    having?: Expression[] | undefined;
    order?: Ordering[] | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
}

export interface Grouping {
    expression: Expression;
}

export interface Ordering {
    expression: Expression;
    descending?: boolean | undefined;
}

export interface ConstructQuery extends BaseQuery {
    queryType: "CONSTRUCT";
    template?: Triple[] | undefined;
}

export interface AskQuery extends BaseQuery {
    queryType: "ASK";
}

export interface DescribeQuery extends BaseQuery {
    queryType: "DESCRIBE";
    variables: Variable[] | ["*"];
}

export interface Update {
    type: "update";
    prefixes: { [prefix: string]: string };
    updates: UpdateOperation[];
}

export type UpdateOperation = InsertDeleteOperation | ManagementOperation;

export interface InsertDeleteOperation {
    updateType: "insert" | "delete" | "deletewhere" | "insertdelete";
    graph?: string | undefined;
    insert?: Quads[] | undefined;
    delete?: Quads[] | undefined;
    where?: Pattern[] | undefined;
}

export type Quads = BgpPattern | GraphQuads;

export type ManagementOperation =
    | CopyMoveAddOperation
    | LoadOperation
    | CreateOperation
    | ClearDropOperation;

export interface CopyMoveAddOperation {
    type: "copy" | "move" | "add";
    silent: boolean;
    source: GraphOrDefault;
    destination: GraphOrDefault;
}

export interface LoadOperation {
    type: "load";
    silent: boolean;
    source: string;
    destination: string | false;
}

export interface CreateOperation {
    type: "create";
    silent: boolean;
    graph: string;
}

export interface ClearDropOperation {
    type: "clear" | "drop";
    silent: boolean;
    graph: GraphReference;
}

export interface GraphOrDefault {
    type: "graph";
    name?: string | undefined;
    default?: boolean | undefined;
}

export interface GraphReference extends GraphOrDefault {
    named?: boolean | undefined;
    all?: boolean | undefined;
}

/**
 * Examples: '?var', '*',
 *   SELECT (?a as ?b) ... ==> { expression: '?a', variable: '?b' }
 */
export type Variable = VariableExpression | Term;

export interface VariableExpression {
    expression: Expression;
    variable: Term;
}

export type Pattern =
    | BgpPattern
    | BlockPattern
    | GraphPattern
    | ServicePattern
    | FilterPattern
    | BindPattern
    | ValuesPattern
    | SelectQuery;

/**
 * Basic Graph Pattern
 */
export interface BgpPattern {
    type: "bgp";
    triples: Triple[];
}

export interface GraphQuads {
    type: "graph";
    name: Term;
    triples: Triple[];
}

export interface BlockPattern {
    type: "optional" | "union" | "group" | "minus" | "graph" | "service";
    patterns: Pattern[];
}

export interface GroupPattern extends BlockPattern {
    type: "group";
}

export interface GraphPattern extends BlockPattern {
    type: "graph";
    name: Term;
}

export interface ServicePattern extends BlockPattern {
    type: "service";
    name: Term;
    silent: boolean;
}

export interface FilterPattern {
    type: "filter";
    expression: Expression;
}

export interface BindPattern {
    type: "bind";
    expression: Expression;
    variable: Term;
}

export interface ValuesPattern {
    type: "values";
    values: ValuePatternRow[];
}

export interface ValuePatternRow {
    [variable: string]: Term;
}

/**
 * Either '?var', 'schema:iri', '_:blankNode',
 * '"literal"^^<schema:datatype>' or '{undefined}'.
 *
 * Term is a nominal type based on string.
 */
export type Term = string & { __termBrand: string };

export interface Triple {
    subject: Term;
    predicate: PropertyPath | Term;
    object: Term;
}

export interface PropertyPath {
    type: "path";
    pathType: "|" | "/" | "^" | "+" | "*" | "!";
    items: Array<PropertyPath | Term>;
}

export type Expression =
    | OperationExpression
    | FunctionCallExpression
    | AggregateExpression
    | BgpPattern
    | GroupPattern
    | Tuple
    | Term;

// allow Expression circularly reference itself
export interface Tuple extends Array<Expression> {}

export interface BaseExpression {
    type: string;
    distinct?: boolean | undefined;
}

export interface OperationExpression extends BaseExpression {
    type: "operation";
    operator: string;
    args: Expression[];
}

export interface FunctionCallExpression extends BaseExpression {
    type: "functionCall";
    function: string;
    args: Expression[];
}

export interface AggregateExpression extends BaseExpression {
    type: "aggregate";
    expression: Expression;
    aggregation: string;
    separator?: string | undefined;
}
