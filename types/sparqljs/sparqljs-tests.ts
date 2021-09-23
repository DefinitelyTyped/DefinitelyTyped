import * as RdfJs from 'rdf-js';
import * as SparqlJs from 'sparqljs';

// Declare RDF/JS factory implementation to create terms (IRIs, literals, variables, etc)
declare const DataFactory: RdfJs.DataFactory;

/**
 * Examples from the project's README
 */
function officialExamples() {
    // Parse a SPARQL query to a JSON object
    const SparqlParser = SparqlJs.Parser;
    const parser = new SparqlParser();
    const parsedQuery = parser.parse(
        'PREFIX foaf: <http://xmlns.com/foaf/0.1/> ' +
        'SELECT * { ?mickey foaf:name "Mickey Mouse"@en; foaf:knows ?other. }',
    );

    // Regenerate a SPARQL query from a JSON object
    const SparqlGenerator = SparqlJs.Generator;
    const generator = new SparqlGenerator();
    if (parsedQuery.type === 'query' && parsedQuery.queryType === 'SELECT') {
        parsedQuery.variables = [DataFactory.variable!('mickey')];
    }

    // $ExpectType string
    generator.stringify(parsedQuery);
}

function advancedOptions() {
    const parser = new SparqlJs.Parser({
        prefixes: {rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'},
        baseIRI: 'http://example.com'
    });
    const generator = new SparqlJs.Generator({allPrefixes: false});
}

/**
 * Basic query structure
 */
function basicQueries() {
    const foo = DataFactory.namedNode('example:foo');
    const bar = DataFactory.namedNode('example:bar');
    const qux = DataFactory.namedNode('example:qux');
    const var1 = DataFactory.variable!('var1');
    const var2 = DataFactory.variable!('var2');

    const prefixes = {rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'};

    const bgpPattern: SparqlJs.BgpPattern = {
        type: 'bgp',
        triples: [
            {subject: foo, predicate: qux, object: bar},
            {
                subject: foo,
                predicate: {
                    type: 'path',
                    pathType: '|',
                    items: [qux, bar],
                },
                object: bar,
            }
        ],
    };

    const select: SparqlJs.SelectQuery = {
        type: 'query',
        queryType: 'SELECT',
        prefixes,
        variables: [new SparqlJs.Wildcard()],
        distinct: true,
        from: {
            default: [DataFactory.namedNode('http://example.com/')],
            named: [
                DataFactory.namedNode('http://example.com/foo'),
                DataFactory.namedNode('http://example.com/bar'),
            ],
        },
        reduced: false,
        group: [
            {expression: var1},
            {expression: var2},
        ],
        having: [{
            type: 'functionCall',
            function: 'isIRI',
            args: [foo],
        }],
        order: [{
            expression: var1,
            descending: true,
        }],
        limit: 100,
        offset: 10,
        where: [bgpPattern],
        values: [
            {x: foo, y: bar},
            {x: foo},
        ]
    };

    const construct: SparqlJs.ConstructQuery = {
        type: 'query',
        queryType: 'CONSTRUCT',
        base: 'http://example.com',
        prefixes,
        template: bgpPattern.triples,
    };

    const ask: SparqlJs.AskQuery = {
        type: 'query',
        queryType: 'ASK',
        prefixes,
    };

    const describe: SparqlJs.DescribeQuery = {
        type: 'query',
        queryType: 'DESCRIBE',
        prefixes,
        variables: [
            var1,
            {
                variable: var2,
                expression: {
                    type: 'operation',
                    operator: '+',
                    args: [foo, bar],
                }
            }
        ],
    };
}

/**
 * Update query structure
 */
function updateQueries() {
    const bgp: SparqlJs.BgpPattern = {
        type: 'bgp',
        triples: [],
    };

    const update: SparqlJs.Update = {
        type: 'update',
        prefixes: {
            rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        },
        updates: [
            {
                updateType: 'insertdelete',
                graph: DataFactory.namedNode('http://example.com/foo'),
                insert: [bgp],
                delete: [bgp],
                where: [],
            },
            {
                type: 'copy',
                silent: true,
                source: {
                    type: 'graph',
                    name: DataFactory.namedNode('http://example.com/foo'),
                },
                destination: {
                    type: 'graph',
                    default: true,
                },
            },
            {
                type: 'clear',
                silent: false,
                graph: {
                    type: 'graph',
                    all: true,
                },
            },
        ],
    };
}

/**
 * SPARQL* AST
 */
function sparqlStarAst() {
    const bgp: SparqlJs.BgpPattern = {
        type: 'bgp',
        triples: [
            {
                subject: DataFactory.quad(
                    DataFactory.namedNode('http://example.com/s1'),
                    DataFactory.namedNode('http://example.com/p1'),
                    DataFactory.literal('str1')
                ),
                predicate: DataFactory.namedNode('http://example.com/p2'),
                object: DataFactory.quad(
                    DataFactory.namedNode('http://example.com/s2'),
                    DataFactory.namedNode('http://example.com/p3'),
                    DataFactory.literal('str2')
                ),
            }
        ],
    };
}
