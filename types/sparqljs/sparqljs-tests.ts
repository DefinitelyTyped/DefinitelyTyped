import * as SparqlJs from 'sparqljs';

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
        parsedQuery.variables = ['?mickey' as SparqlJs.Term];
    }

    // $ExpectType string
    generator.stringify(parsedQuery);
}

function advancedOptions() {
    const parser = new SparqlJs.Parser(
        {rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'},
        'http://example.com',
        {collapseGroups: true}
    );
    const generator = new SparqlJs.Generator({allPrefixes: false});
}

/**
 * Basic query structure
 */
function basicQueries() {
    const foo = 'example:foo' as SparqlJs.Term;
    const bar = 'example:bar' as SparqlJs.Term;
    const qux = 'example:qux' as SparqlJs.Term;

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
        variables: ['*'],
        distinct: true,
        from: {
            default: ['http://example.com/'],
            named: ['http://example.com/foo', 'http://example.com/bar'],
        },
        reduced: false,
        group: [
            {expression: foo},
            {expression: bar},
        ],
        having: [{
            type: 'functionCall',
            function: 'isIRI',
            args: [foo],
        }],
        order: [{
            expression: bar,
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
            foo,
            {
                variable: bar,
                expression: {
                    type: 'operation',
                    operator: '+',
                    args: [foo, bar],
                }
            }
        ],
    };
}
