import * as RdfJs from "rdf-js";

// tslint:disable-next-line:no-unnecessary-class
declare class SparqlJs {
    static Parser: {
        new(options?: SparqlJs.ParserOptions): SparqlJs.SparqlParser;
    };
    static Generator: {
        new(options?: SparqlJs.GeneratorOptions): SparqlJs.SparqlGenerator;
    };
}

declare namespace SparqlJs {
    interface ParserOptions {
        prefixes?: { [prefix: string]: string } | undefined;
        baseIRI?: string | undefined;
        factory?: RdfJs.DataFactory | undefined;
        sparqlStar?: boolean | undefined;
    }

    interface GeneratorOptions {
        allPrefixes?: boolean | undefined;
        prefixes?: { [prefix: string]: string } | undefined;
        indent?: string | undefined;
        newline?: string | undefined;
        sparqlStar?: boolean | undefined;
    }

    interface SparqlParser {
        parse(query: string): SparqlQuery;
    }

    interface SparqlGenerator {
        stringify(query: SparqlQuery): string;

        createGenerator(): any;
    }

    class Wildcard {
        readonly termType: "Wildcard";
        readonly value: "*";
        equals(other: RdfJs.Term | null | undefined): boolean;
    }

    type Term = VariableTerm | IriTerm | LiteralTerm | BlankTerm | QuadTerm;

    type VariableTerm = RdfJs.Variable;
    type IriTerm = RdfJs.NamedNode;
    type LiteralTerm = RdfJs.Literal;
    type BlankTerm = RdfJs.BlankNode;
    type QuadTerm = RdfJs.Quad;

    type SparqlQuery = Query | Update;

    type Query = SelectQuery | ConstructQuery | AskQuery | DescribeQuery;

    interface BaseQuery {
        type: "query";
        base?: string | undefined;
        prefixes: { [prefix: string]: string };
        where?: Pattern[] | undefined;
        values?: ValuePatternRow[] | undefined;
    }

    interface SelectQuery extends BaseQuery {
        queryType: "SELECT";
        variables: Variable[] | [Wildcard];
        distinct?: boolean | undefined;
        from?: {
            default: IriTerm[];
            named: IriTerm[];
        } | undefined;
        reduced?: boolean | undefined;
        group?: Grouping[] | undefined;
        having?: Expression[] | undefined;
        order?: Ordering[] | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
    }

    interface Grouping {
        expression: Expression;
    }

    interface Ordering {
        expression: Expression;
        descending?: boolean | undefined;
    }

    interface ConstructQuery extends BaseQuery {
        queryType: "CONSTRUCT";
        template?: Triple[] | undefined;
    }

    interface AskQuery extends BaseQuery {
        queryType: "ASK";
    }

    interface DescribeQuery extends BaseQuery {
        queryType: "DESCRIBE";
        variables: Variable[] | [Wildcard];
    }

    interface Update {
        type: "update";
        base?: string | undefined;
        prefixes: { [prefix: string]: string };
        updates: UpdateOperation[];
    }

    type UpdateOperation = InsertDeleteOperation | ManagementOperation;

    interface InsertDeleteOperation {
        updateType: "insert" | "delete" | "deletewhere" | "insertdelete";
        graph?: IriTerm | undefined;
        insert?: Quads[] | undefined;
        delete?: Quads[] | undefined;
        where?: Pattern[] | undefined;
    }

    type Quads = BgpPattern | GraphQuads;

    type ManagementOperation =
        | CopyMoveAddOperation
        | LoadOperation
        | CreateOperation
        | ClearDropOperation;

    interface CopyMoveAddOperation {
        type: "copy" | "move" | "add";
        silent: boolean;
        source: GraphOrDefault;
        destination: GraphOrDefault;
    }

    interface LoadOperation {
        type: "load";
        silent: boolean;
        source: IriTerm;
        destination: IriTerm | false;
    }

    interface CreateOperation {
        type: "create";
        silent: boolean;
        graph: IriTerm;
    }

    interface ClearDropOperation {
        type: "clear" | "drop";
        silent: boolean;
        graph: GraphReference;
    }

    interface GraphOrDefault {
        type: "graph";
        name?: IriTerm | undefined;
        default?: boolean | undefined;
    }

    interface GraphReference extends GraphOrDefault {
        named?: boolean | undefined;
        all?: boolean | undefined;
    }

    /**
     * Examples: '?var', '*',
     *   SELECT (?a as ?b) ... ==> { expression: '?a', variable: '?b' }
     */
    type Variable = VariableExpression | VariableTerm;

    interface VariableExpression {
        expression: Expression;
        variable: VariableTerm;
    }

    type Pattern =
        | BgpPattern
        | BlockPattern
        | FilterPattern
        | BindPattern
        | ValuesPattern
        | SelectQuery;

    /**
     * Basic Graph Pattern
     */
    interface BgpPattern {
        type: "bgp";
        triples: Triple[];
    }

    interface GraphQuads {
        type: "graph";
        name: IriTerm;
        triples: Triple[];
    }

    type BlockPattern =
        | OptionalPattern
        | UnionPattern
        | GroupPattern
        | GraphPattern
        | MinusPattern
        | ServicePattern;

    interface OptionalPattern {
        type: "optional";
        patterns: Pattern[];
    }

    interface UnionPattern {
        type: "union";
        patterns: Pattern[];
    }

    interface GroupPattern {
        type: "group";
        patterns: Pattern[];
    }

    interface GraphPattern {
        type: "graph";
        name: IriTerm;
        patterns: Pattern[];
    }

    interface MinusPattern {
        type: "minus";
        patterns: Pattern[];
    }

    interface ServicePattern {
        type: "service";
        name: IriTerm;
        silent: boolean;
        patterns: Pattern[];
    }

    interface FilterPattern {
        type: "filter";
        expression: Expression;
    }

    interface BindPattern {
        type: "bind";
        expression: Expression;
        variable: VariableTerm;
    }

    interface ValuesPattern {
        type: "values";
        values: ValuePatternRow[];
    }

    interface ValuePatternRow {
        [variable: string]: IriTerm | BlankTerm | LiteralTerm | undefined;
    }

    interface Triple {
        subject: IriTerm | BlankTerm | VariableTerm | QuadTerm;
        predicate: IriTerm | VariableTerm | PropertyPath;
        object: Term;
    }

    interface PropertyPath {
        type: "path";
        pathType: "|" | "/" | "^" | "+" | "*" | "!";
        items: Array<IriTerm | PropertyPath>;
    }

    type Expression =
        | OperationExpression
        | FunctionCallExpression
        | AggregateExpression
        | BgpPattern
        | GraphPattern
        | GroupPattern
        | Tuple
        | Term;

    // allow Expression circularly reference itself
    interface Tuple extends Array<Expression> {
    }

    interface BaseExpression {
        type: string;
        distinct?: boolean | undefined;
    }

    interface OperationExpression extends BaseExpression {
        type: "operation";
        operator: string;
        args: Expression[];
    }

    interface FunctionCallExpression extends BaseExpression {
        type: "functionCall";
        function: string;
        args: Expression[];
    }

    interface AggregateExpression extends BaseExpression {
        type: "aggregate";
        expression: Expression;
        aggregation: string;
        separator?: string | undefined;
    }
}

export = SparqlJs;
