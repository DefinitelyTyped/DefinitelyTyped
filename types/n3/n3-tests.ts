import * as N3 from "n3";
import * as RDF from "rdf-js";
import * as fs from "fs";
import * as stream from "stream";

function test_add_prefix() {
    const writer: N3.Writer = new N3.Writer();

    writer.addPrefix('xsd', 'http://www.w3.org/2001/XMLSchema#');
    writer.end((error, result) => {
        console.log(result);
    });
}

function test_add_prefixes() {
    const writer: N3.Writer = new N3.Writer();

    writer.addPrefixes({
        freebase: N3.DataFactory.namedNode("http://rdf.freebase.com/ns/"),
        xsd: N3.DataFactory.namedNode("http://www.w3.org/2001/XMLSchema#"),
        rdf: 'http://test'
    });

    writer.end((error, result) => {
        console.log(result);
    });
}

function test_serialize() {
    const writer: N3.Writer = new N3.Writer(
        {
            format: "ttl",
            prefixes: {
                foaf: "http://xmlns.com/foaf/0.1",
                freebase: N3.DataFactory.namedNode("http://rdf.freebase.com/ns/"),
                g: "http://base.google.com/ns/1.0"
            }
        });
    writer.addQuad(N3.DataFactory.quad(
        N3.DataFactory.namedNode("subject-name"),
        N3.DataFactory.namedNode("predicate-name"),
        N3.DataFactory.literal(12)
    ));

    writer.end((error, result) => {
        console.log(`result ${result}`);
    });
}

/*
The following tests are taken from ...
https://github.com/RubenVerborgh/N3.js/blob/master/README.md
*/

function test_doc_rdf_to_triples_1() {
    const parser: N3.Parser = new N3.Parser();
    parser.parse(`@prefix c: <http://example.org/cartoons#>.
        c:Tom a c:Cat.
        c:Jerry a c:Mouse;
                c:smarterThan c:Tom.`,
        (error: Error, quad: RDF.Quad, prefixes: N3.Prefixes) => {
            if (quad)
                console.log(quad.subject, quad.predicate, quad.object, quad.graph, '.');
            else
                console.log("# That's all, folks!", prefixes);
        });
}

function test_doc_rdf_to_triples_and_prefixes() {
    const parser: N3.Parser = new N3.Parser();
    parser.parse(`@prefix c: <http://example.org/cartoons#>.
        c:Tom a c:Cat.
        c:Jerry a c:Mouse;
                c:smarterThan c:Tom.`,
        (error: Error, quad: RDF.Quad) => {
            if (quad)
                console.log(quad.subject, quad.predicate, quad.object, quad.graph, '.');
            else
                console.log("# That's all, folks!");
        },
        (prefix: string, prefixNode: RDF.NamedNode) => {
            console.log("@prefix#", prefix, prefixNode.value);
        });
}

function test_doc_rdf_to_triples_2() {
    const parser1: N3.Parser = new N3.Parser({ format: 'N-Triples' });
    const parser2: N3.Parser = new N3.Parser({ format: 'application/trig' });
    // Notation3 (N3) is supported only through the format argument:

    const parser3: N3.Parser = new N3.Parser({ format: 'N3' });
    const parser4: N3.Parser = new N3.Parser({ format: 'Notation3' });
    const parser5: N3.Parser = new N3.Parser({ format: 'text/n3' });
}

// Consider breaking this test when incrementing major version
function test_format_as_string_type() {
    function customParser(format: string) {
        return new N3.Parser({ format });
    }

    function customWriter(format: string) {
        return new N3.Writer({ format });
    }

    const parser = customParser('N3');
    const writer = customWriter('N3');
}

function test_doc_rdf_sync_to_triples_1() {
    const parser: N3.Parser = new N3.Parser();
    const result = parser.parse(`@prefix c: <http://example.org/cartoons#>.
      c:Tom a c:Cat.
      c:Jerry a c:Mouse;
      c:smarterThan c:Tom.`);
    result.forEach((s) => console.log(s));
}

function test_doc_rdf_sync_to_triples_and_prefixes() {
    const parser: N3.Parser = new N3.Parser();
    const result = parser.parse(`@prefix c: <http://example.org/cartoons#>.
      c:Tom a c:Cat.
      c:Jerry a c:Mouse;
      c:smarterThan c:Tom.`, null, (prefix: string, prefixNode: RDF.NamedNode) => {
        console.log("@prefix#", prefix, prefixNode.value);
    });
    result.forEach((s) => console.log(s));
}

function test_doc_rdf_stream_to_triples_1() {
    interface QuadBnode extends N3.BaseQuad {
        subject: N3.BlankNode;
        predicate: N3.BlankNode;
        object: N3.BlankNode;
        graph: N3.BlankNode;
    }
    const parser: N3.Parser<QuadBnode> = new N3.Parser<QuadBnode>({ factory: N3.DataFactory });
    parser.parse('abc', console.log);

    const streamParser: N3.StreamParser = new N3.StreamParser();
    const quad: RDF.Quad | null = streamParser.read();
    const rdfStream = fs.createReadStream('cartoons.ttl');
    const pipedStreamParser: N3.StreamParser = rdfStream.pipe(streamParser);
    streamParser.pipe(new class SlowConsumer extends stream.Writable {
        constructor() {
            super({ objectMode: true });
            this._write = (quad: RDF.Quad, encoding, done) => {
                console.log(quad);
                setTimeout(done, 1000);
            };
        }
    }());
}

function test_doc_from_triples_to_string() {
    const writer: N3.Writer = new N3.Writer({ prefixes: { c: 'http://example.org/cartoons#' } });
    writer.addQuad(N3.DataFactory.quad(
        N3.DataFactory.namedNode('http://example.org/cartoons#Tom'),
        N3.DataFactory.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
        N3.DataFactory.namedNode('http://example.org/cartoons#Cat')
    ));
    writer.addQuad(N3.DataFactory.quad(
        N3.DataFactory.namedNode('http://example.org/cartoons#Tom'),
        N3.DataFactory.namedNode('http://example.org/cartoons#name'),
        N3.DataFactory.literal('Tom'),
    ));
    writer.end((error, result: string) => { console.log(result); });

    const writer1: N3.Writer = new N3.Writer({ format: 'N-Triples' });
    const writer2: N3.Writer = new N3.Writer({ format: 'application/trig' });
}

function test_doc_from_triples_to_rdf_stream() {
    const writer: N3.Writer = new N3.Writer(process.stdout, { end: false, prefixes: { c: N3.DataFactory.namedNode('http://example.org/cartoons#') } });
    writer.addQuad(N3.DataFactory.quad(
        N3.DataFactory.namedNode('http://example.org/cartoons#Tom'),
        N3.DataFactory.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
        N3.DataFactory.namedNode('http://example.org/cartoons#Cat'),
    ));
    writer.addQuad(N3.DataFactory.quad(
        N3.DataFactory.namedNode('http://example.org/cartoons#Tom'),
        N3.DataFactory.namedNode('http://example.org/cartoons#name'),
        N3.DataFactory.literal('Tom'),
    ));
    writer.end();
}

function test_doc_from_triple_stream_to_rdf_stream() {
    const streamParser: N3.StreamParser = new N3.StreamParser();
    const inputStream = fs.createReadStream('cartoons.ttl');
    const streamWriter: N3.StreamWriter = new N3.StreamWriter({ prefixes: { c: N3.DataFactory.namedNode('http://example.org/cartoons#') } });
    inputStream.pipe(streamParser);
    streamParser.pipe(streamWriter);
    streamWriter.pipe(process.stdout);
}

function test_doc_streamwriter_import() {
    const quadStream: RDF.Stream = {} as any;
    const streamWriter: N3.StreamWriter = new N3.StreamWriter({ prefixes: { c: N3.DataFactory.namedNode('http://example.org/cartoons#') } });
    streamWriter.import(quadStream);
}

function test_doc_blank_nodes_and_lists() {
    const writer: N3.Writer = new N3.Writer({
        prefixes: {
            c: 'http://example.org/cartoons#',
            foaf: 'http://xmlns.com/foaf/0.1/'
        }
    });
    writer.addQuad(writer.blank(N3.DataFactory.namedNode('http://xmlns.com/foaf/0.1/givenName'), N3.DataFactory.literal('Tom', 'en')),
        N3.DataFactory.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
        N3.DataFactory.namedNode('http://example.org/cartoons#Cat'));
    writer.addQuad(N3.DataFactory.namedNode('http://example.org/cartoons#Jerry'),
        N3.DataFactory.namedNode('http://xmlns.com/foaf/0.1/knows'),
        writer.blank([{
            predicate: N3.DataFactory.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
            object: N3.DataFactory.namedNode('http://example.org/cartoons#Cat')
        }, {
            predicate: N3.DataFactory.namedNode('http://xmlns.com/foaf/0.1/givenName'),
            object: N3.DataFactory.literal('Tom', 'en'),
        }]));
    writer.addQuad(N3.DataFactory.namedNode('http://example.org/cartoons#Mammy'),
        N3.DataFactory.namedNode('http://example.org/cartoons#hasPets'),
        writer.list([
            N3.DataFactory.namedNode('http://example.org/cartoons#Tom'),
            N3.DataFactory.namedNode('http://example.org/cartoons#Jerry')
        ]));
    writer.end((error, result) => { console.log(result); });
}

function test_doc_storing() {
    const store: N3.Store = new N3.Store();
    store.addQuad(N3.DataFactory.namedNode('http://ex.org/Pluto'), N3.DataFactory.namedNode('http://ex.org/type'), N3.DataFactory.namedNode('http://ex.org/Dog'));
    store.addQuad(N3.DataFactory.quad(N3.DataFactory.namedNode('http://ex.org/Mickey'), N3.DataFactory.namedNode('http://ex.org/type'), N3.DataFactory.namedNode('http://ex.org/Mouse')));
    store.addQuads([N3.DataFactory.quad(N3.DataFactory.namedNode('http://ex.org/Mickey'), N3.DataFactory.namedNode('http://ex.org/type'), N3.DataFactory.namedNode('http://ex.org/Mouse'))]);
    store.removeQuad(N3.DataFactory.namedNode('http://ex.org/Mickey'), N3.DataFactory.namedNode('http://ex.org/type'), N3.DataFactory.namedNode('http://ex.org/Mouse'));
    store.removeQuad(N3.DataFactory.quad(N3.DataFactory.namedNode('http://ex.org/Mickey'), N3.DataFactory.namedNode('http://ex.org/type'), N3.DataFactory.namedNode('http://ex.org/Mouse')));
    store.removeQuads([N3.DataFactory.quad(N3.DataFactory.namedNode('http://ex.org/Mickey'), N3.DataFactory.namedNode('http://ex.org/type'), N3.DataFactory.namedNode('http://ex.org/Mouse'))]);

    const bnode1: RDF.BlankNode = store.createBlankNode();
    const bnode2: RDF.BlankNode = store.createBlankNode('abc');

    const mickey: RDF.Quad = store.getQuads(N3.DataFactory.namedNode('http://ex.org/Mickey'), null, null, null)[0];
    if (mickey.object.termType === "Literal") {
        console.log(mickey.object.datatype);
    }
    console.log(mickey.subject, mickey.predicate, mickey.object, '.');

    const quadStream: RDF.Stream = store.match(N3.DataFactory.namedNode('http://ex.org/Mickey'));

    interface N3QuadGeneralized extends N3.BaseQuad {
        subject: N3.Quad_Subject | N3.BlankNode | N3.Literal;
        predicate: N3.Quad_Predicate | N3.BlankNode | N3.Literal;
        object: N3.Quad_Object | N3.BlankNode | N3.Literal;
        graph: N3.Quad_Graph | N3.BlankNode | N3.Literal;
    }
    interface RDFQuadGeneralized extends RDF.BaseQuad {
        subject: RDF.Quad_Subject | RDF.BlankNode | RDF.Literal;
        predicate: RDF.Quad_Predicate | RDF.BlankNode | RDF.Literal;
        object: RDF.Quad_Object | RDF.BlankNode | RDF.Literal;
        graph: RDF.Quad_Graph | RDF.BlankNode | RDF.Literal;
    }
    const storeGeneralized = new N3.Store<RDFQuadGeneralized, N3QuadGeneralized>();
    // storeGeneralized.
    storeGeneralized.addQuad(N3.DataFactory.namedNode('http://ex.org/Pluto'), N3.DataFactory.blankNode(), N3.DataFactory.namedNode('http://ex.org/Dog'));
}

function test_store_queries() {
    const store: N3.Store = new N3.Store();

    const subjs: N3.Quad_Subject[] = store.getSubjects(null, null, null);
    store.forSubjects((subj: N3.Quad_Subject) => { }, null, null, null);

    const preds: N3.Quad_Predicate[] = store.getPredicates(null, null, null);
    store.forPredicates((subj: N3.Quad_Predicate) => { }, null, null, null);

    const objs: N3.Quad_Object[] = store.getObjects(null, null, null);
    store.forObjects((subj: N3.Quad_Object) => { }, null, null, null);

    const graphs: N3.Quad_Graph[] = store.getGraphs(null, null, null);
    store.forGraphs((subj: N3.Quad_Graph) => { }, null, null, null);
}

function test_doc_utility() {
    const N3Util = N3.Util;
    N3Util.isNamedNode(N3.DataFactory.namedNode('http://example.org/cartoons#Mickey')); // true

    N3Util.isLiteral(N3.DataFactory.literal('Mickey Mouse')); // true
    N3Util.isLiteral(N3.DataFactory.literal('Mickey Mouse', 'en')); // true
    N3Util.isLiteral(N3.DataFactory.literal('3', N3.DataFactory.namedNode('http://www.w3.org/2001/XMLSchema#integer'))); // true
    N3Util.isLiteral(N3.DataFactory.literal('http://example.org/')); // true

    N3Util.isLiteral(N3.DataFactory.literal('This word is "quoted"!')); // true
    N3Util.isLiteral(N3.DataFactory.literal('3', N3.DataFactory.namedNode('http://www.w3.org/2001/XMLSchema#integer'))); // true

    new N3.Parser().parse('<a> <b> "This word is \\"quoted\\"!".', console.log);
    // { subject: 'a', predicate: 'b', object: '"This word is "quoted"!"' }

    N3Util.isBlankNode(N3.DataFactory.blankNode('b1')); // true
    N3Util.isNamedNode(N3.DataFactory.blankNode('b1')); // false
    N3Util.isLiteral(N3.DataFactory.blankNode('b1')); // false

    const prefixes: N3.Prefixes = { rdfs: N3.DataFactory.namedNode('http://www.w3.org/2000/01/rdf-schema#') };
    const namedNode1: RDF.NamedNode = N3Util.prefix('http://www.w3.org/2000/01/rdf-schema#')('label');
    const namedNode2: RDF.NamedNode = N3Util.prefixes(prefixes)('rdfs')('label');
    const namedNode3: N3.NamedNode = N3Util.prefixes(prefixes)('rdfs')('label');
}

function test_parser_options() {
    const parser1 = new N3.Parser({
        baseIRI: 'http://example.org/',
        factory: N3.DataFactory,
        format: 'N-Triples',
        blankNodePrefix: '',
    });
    const parser2 = new N3.Parser({
        baseIRI: 'http://example.org/',
        factory: N3.DataFactory,
        format: 'n3',
        blankNodePrefix: '',
    });
    const parser3 = new N3.Parser({
        baseIRI: 'http://example.org/',
        factory: N3.DataFactory,
        format: 'turtle*',
        blankNodePrefix: '',
    });
    const parser4 = new N3.Parser({
        baseIRI: 'http://example.org/',
        factory: N3.DataFactory,
        format: 'application/turtle*',
        blankNodePrefix: '',
    });
    const parser5 = new N3.Parser({
        baseIRI: 'http://example.org/',
        factory: N3.DataFactory,
        format: 'notation3',
        blankNodePrefix: '',
    });
    const parser6 = new N3.Parser({
        baseIRI: 'http://example.org/',
        factory: N3.DataFactory,
        format: 'text/Turtle*',
        blankNodePrefix: '',
    });
}

function test_term_to_and_from_id() {
    const label: string = N3.termToId(N3.termFromId('http://www.w3.org/2000/01/rdf-schema#label', N3.DataFactory));
}

function test_lexer_sync() {
    const lexer: N3.Lexer = new N3.Lexer();
    const result: N3.Token[] = lexer.tokenize(`@prefix c: <http://example.org/cartoons#>.
      c:Tom a c:Cat.
      c:Jerry a c:Mouse;
      c:smarterThan c:Tom.`);
    result.forEach((s) => console.log(s));
}

function test_lexer_async() {
    const lexer: N3.Lexer = new N3.Lexer();
    lexer.tokenize(`@prefix c: <http://example.org/cartoons#>.
      c:Tom a c:Cat.
      c:Jerry a c:Mouse;
      c:smarterThan c:Tom.`, (error: Error, token: N3.Token) => {
        if (error) {
            console.log(error);
        }
        if (token)
            console.log(token);
        else
            console.log("# That's all, folks!");
    });
}

function test_lexer_options() {
    const options: N3.LexerOptions = {
        lineMode: true,
        n3: true,
        comments: true
    };
}

function test_extract_lists() {
    const store: N3.Store = new N3.Store();
    const parser = new N3.Parser();
    const quads = parser.parse(
        `PREFIX l: <http://example.org/list#>
         l:definition l:hasList ( "item1" "item2" "item3").`);
    store.addQuads(quads);
    const list = store.extractLists();
    Object.entries(list).forEach(([key, value]) => {
        console.log(key);
        console.log(value);
    });
}
