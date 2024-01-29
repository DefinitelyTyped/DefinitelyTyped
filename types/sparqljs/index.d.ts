import * as RdfJs from "@rdfjs/types";

export const Parser: {
    new(options?: ParserOptions): SparqlParser;
};

export interface ParserOptions {
    prefixes?: { [prefix: string]: string } | undefined;
    baseIRI?: string | undefined;
    factory?: RdfJs.DataFactory | undefined;
    sparqlStar?: boolean | undefined;
    skipUngroupedVariableCheck?: boolean;
}

export const Generator: {
    new(options?: GeneratorOptions): SparqlGenerator;
};

export interface GeneratorOptions {
    allPrefixes?: boolean | undefined;
    prefixes?: { [prefix: string]: string } | undefined;
    indent?: string | undefined;
    newline?: string | undefined;
    sparqlStar?: boolean | undefined;
}

export interface SparqlParser {
    parse(query: string): SparqlQuery;
    _resetBlanks(): void;
}

export interface SparqlGenerator {
    stringify(query: SparqlQuery): string;
    createGenerator(): any;
}

export class Wildcard {
    readonly termType: "Wildcard";
    readonly value: "*";
    equals(other: RdfJs.Term | null | undefined): boolean;
}

export type Term = VariableTerm | IriTerm | LiteralTerm | BlankTerm | QuadTerm;

export type VariableTerm = RdfJs.Variable;
export type IriTerm = RdfJs.NamedNode;
export type LiteralTerm = RdfJs.Literal;
export type BlankTerm = RdfJs.BlankNode;
export type QuadTerm = RdfJs.Quad;

export type SparqlQuery = Query | Update;

export type Query = SelectQuery | ConstructQuery | AskQuery | DescribeQuery;

export interface BaseQuery {
    type: "query";
    base?: string | undefined;
    prefixes: { [prefix: string]: string };
    from?:
        | {
            default: IriTerm[];
            named: IriTerm[];
        }
        | undefined;
    where?: Pattern[] | undefined;
    values?: ValuePatternRow[] | undefined;
}

export interface SelectQuery extends BaseQuery {
    queryType: "SELECT";
    variables: Variable[] | [Wildcard];
    distinct?: boolean | undefined;
    reduced?: boolean | undefined;
    group?: Grouping[] | undefined;
    having?: Expression[] | undefined;
    order?: Ordering[] | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
}

export interface Grouping {
    expression: Expression;
    variable?: VariableTerm;
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
    variables: Array<VariableTerm | IriTerm> | [Wildcard];
}

export interface Update {
    type: "update";
    base?: string | undefined;
    prefixes: { [prefix: string]: string };
    updates: UpdateOperation[];
}

export type UpdateOperation = InsertDeleteOperation | ManagementOperation;

export type InsertDeleteOperation =
    | {
        updateType: "insert";
        graph?: GraphOrDefault;
        insert: Quads[];
    }
    | {
        updateType: "delete";
        graph?: GraphOrDefault;
        delete: Quads[];
    }
    | {
        updateType: "insertdelete";
        graph?: GraphOrDefault;
        insert?: Quads[];
        delete?: Quads[];
        using?: {
            default: IriTerm[];
            named: IriTerm[];
        };
        where?: Pattern[];
    }
    | {
        updateType: "deletewhere";
        graph?: GraphOrDefault;
        delete: Quads[];
    };

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
    source: IriTerm;
    destination: IriTerm | false;
}

export interface CreateOperation {
    type: "create";
    silent: boolean;
    graph: GraphOrDefault;
}

export interface ClearDropOperation {
    type: "clear" | "drop";
    silent: boolean;
    graph: GraphReference;
}

export interface GraphOrDefault {
    type: "graph";
    name?: IriTerm | undefined;
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
export type Variable = VariableExpression | VariableTerm;

export interface VariableExpression {
    expression: Expression;
    variable: VariableTerm;
}

export type Pattern =
    | BgpPattern
    | BlockPattern
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
    name: IriTerm | VariableTerm;
    triples: Triple[];
}

export type BlockPattern =
    | OptionalPattern
    | UnionPattern
    | GroupPattern
    | GraphPattern
    | MinusPattern
    | ServicePattern;

export interface OptionalPattern {
    type: "optional";
    patterns: Pattern[];
}

export interface UnionPattern {
    type: "union";
    patterns: Pattern[];
}

export interface GroupPattern {
    type: "group";
    patterns: Pattern[];
}

export interface GraphPattern {
    type: "graph";
    name: IriTerm | VariableTerm;
    patterns: Pattern[];
}

export interface MinusPattern {
    type: "minus";
    patterns: Pattern[];
}

export interface ServicePattern {
    type: "service";
    name: IriTerm | VariableTerm;
    silent: boolean;
    patterns: Pattern[];
}

export interface FilterPattern {
    type: "filter";
    expression: Expression;
}

export interface BindPattern {
    type: "bind";
    expression: Expression;
    variable: VariableTerm;
}

export interface ValuesPattern {
    type: "values";
    values: ValuePatternRow[];
}

export interface ValuePatternRow {
    [variable: string]: IriTerm | BlankTerm | LiteralTerm | undefined;
}

export interface Triple {
    subject: IriTerm | BlankTerm | VariableTerm | QuadTerm;
    predicate: IriTerm | VariableTerm | PropertyPath;
    object: Term;
}

export interface PropertyPath {
    type: "path";
    pathType: "|" | "/" | "^" | "+" | "*" | "!" | "?";
    items: Array<IriTerm | PropertyPath>;
}

export type Expression =
    | OperationExpression
    | FunctionCallExpression
    | AggregateExpression
    | Tuple // used in IN operator
    | IriTerm
    | VariableTerm
    | LiteralTerm
    | QuadTerm;

// allow Expression circularly reference itself
export interface Tuple extends Array<Expression> {}

export interface BaseExpression {
    type: string;
    distinct?: boolean | undefined;
}

export interface OperationExpression extends BaseExpression {
    type: "operation";
    operator: string;
    args: Array<Expression | Pattern>;
}

export interface FunctionCallExpression extends BaseExpression {
    type: "functionCall";
    function: string | IriTerm;
    args: Expression[];
}

export interface AggregateExpression extends BaseExpression {
    type: "aggregate";
    expression: Expression | Wildcard;
    aggregation: string;
    separator?: string | undefined;
}
