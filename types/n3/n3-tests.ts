import * as N3 from "n3";
import * as fs from "fs";
import * as stream from "stream";

function test_serialize() {

    var writer: N3.N3Writer = N3.Writer(
        {
            format: "ttl",
            prefixes: {
                foaf: "http://xmlns.com/foaf/0.1",
                freebase: "http://rdf.freebase.com/ns/",
                g: "http://base.google.com/ns/1.0"
            }
        });
    writer.addTriple({
        subject: "subject-name",
        predicate: "predicate-name",
        object: N3.Util.createLiteral(12)
    });

    writer.end((error, result) => {
        console.log(`result ${result}`);
    });
}

/**
The following tests are taken from ...
https://github.com/RubenVerborgh/N3.js/blob/master/README.md
*/

function test_doc_rdf_to_triples_1() {
    var parser = N3.Parser();
    parser.parse('@prefix c: <http://example.org/cartoons#>.\n' +
        'c:Tom a c:Cat.\n' +
        'c:Jerry a c:Mouse;\n' +
        '        c:smarterThan c:Tom.',
        function (error: Error, triple: N3.Triple, prefixes: N3.Prefixes) {
            if (triple)
                console.log(triple.subject, triple.predicate, triple.object, '.');
            else
                console.log("# That's all, folks!", prefixes)
        });
}

function test_doc_rdf_to_triples_2() {
    var parser1 = N3.Parser({ format: 'N-Triples' });
    var parser2 = N3.Parser({ format: 'application/trig' });
    // Notation3 (N3) is supported only through the format argument:

    var parser3 = N3.Parser({ format: 'N3' });
    var parser4 = N3.Parser({ format: 'Notation3' });
    var parser5 = N3.Parser({ format: 'text/n3' });
}

function test_doc_rdf_stream_to_triples_1() {
    var parser = N3.Parser();
    var rdfStream = fs.createReadStream('cartoons.ttl');
    parser.parse(rdfStream, console.log);

    var streamParser = N3.StreamParser();
    var rdfStream = fs.createReadStream('cartoons.ttl');
    rdfStream.pipe(streamParser);
    streamParser.pipe(new class SlowConsumer extends stream.Writable {
        constructor() {
            super({ objectMode: true });
            this._write = function (triple, encoding, done) {
                console.log(triple);
                setTimeout(done, 1000);
            };
        }
    });
}

function test_doc_from_triples_to_string() {
    var writer = N3.Writer({ prefixes: { c: 'http://example.org/cartoons#' } });
    writer.addTriple('http://example.org/cartoons#Tom',
        'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
        'http://example.org/cartoons#Cat');
    writer.addTriple({
        subject: 'http://example.org/cartoons#Tom',
        predicate: 'http://example.org/cartoons#name',
        object: '"Tom"'
    });
    writer.end(function (error, result) { console.log(result); });

    var writer1 = N3.Writer({ format: 'N-Triples' });
    var writer2 = N3.Writer({ format: 'application/trig' });
}

function test_doc_from_triples_to_rdf_stream() {
    var writer = N3.Writer(process.stdout, { prefixes: { c: 'http://example.org/cartoons#' } });
    writer.addTriple('http://example.org/cartoons#Tom',
        'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
        'http://example.org/cartoons#Cat');
    writer.addTriple({
        subject: 'http://example.org/cartoons#Tom',
        predicate: 'http://example.org/cartoons#name',
        object: '"Tom"'
    });
    writer.end();
}

function test_doc_from_triple_stream_to_rdf_stream() {
    var streamParser = new N3.StreamParser(),
        inputStream = fs.createReadStream('cartoons.ttl'),
        streamWriter = /* new */ N3.StreamWriter({ prefixes: { c: 'http://example.org/cartoons#' } });
    inputStream.pipe(streamParser);
    streamParser.pipe(streamWriter);
    streamWriter.pipe(process.stdout);
}

function test_doc_blank_nodes_and_lists() {
    var writer = N3.Writer({
        prefixes: {
            c: 'http://example.org/cartoons#',
            foaf: 'http://xmlns.com/foaf/0.1/'
        }
    });
    writer.addTriple(writer.blank('http://xmlns.com/foaf/0.1/givenName', '"Tom"@en'),
        'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
        'http://example.org/cartoons#Cat');
    writer.addTriple('http://example.org/cartoons#Jerry',
        'http://xmlns.com/foaf/0.1/knows',
        writer.blank([{
            predicate: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
            object: 'http://example.org/cartoons#Cat'
        }, {
            predicate: 'http://xmlns.com/foaf/0.1/givenName',
            object: '"Tom"@en',
        }]));
    writer.addTriple('http://example.org/cartoons#Mammy',
        'http://example.org/cartoons#hasPets',
        writer.list([
            'http://example.org/cartoons#Tom',
            'http://example.org/cartoons#Jerry'
        ]));
    writer.end(function (error, result) { console.log(result); });
}

function test_doc_storing() {
    var store = N3.Store();
    store.addTriple('http://ex.org/Pluto', 'http://ex.org/type', 'http://ex.org/Dog');
    store.addTriple('http://ex.org/Mickey', 'http://ex.org/type', 'http://ex.org/Mouse');

    var mickey = store.find('http://ex.org/Mickey', null, null)[0];
    console.log(mickey.subject, mickey.predicate, mickey.object, '.');
}

function test_doc_utility() {
    var N3Util = N3.Util;
    N3Util.isIRI('http://example.org/cartoons#Mickey'); // true

    N3Util.isLiteral('"Mickey Mouse"'); // true
    N3Util.getLiteralValue('"Mickey Mouse"'); // 'Mickey Mouse'
    N3Util.isLiteral('"Mickey Mouse"@en'); // true
    N3Util.getLiteralLanguage('"Mickey Mouse"@en'); // 'en'
    N3Util.isLiteral('"3"^^http://www.w3.org/2001/XMLSchema#integer'); // true
    N3Util.getLiteralType('"3"^^http://www.w3.org/2001/XMLSchema#integer'); // 'http://www.w3.org/2001/XMLSchema#integer'
    N3Util.isLiteral('"http://example.org/"'); // true
    N3Util.getLiteralValue('"http://example.org/"'); // 'http://example.org/'

    N3Util.isLiteral('"This word is "quoted"!"'); // true
    N3Util.isLiteral('"3"^^http://www.w3.org/2001/XMLSchema#integer'); // true

    new N3.Parser().parse('<a> <b> "This word is \\"quoted\\"!".', console.log);
    // { subject: 'a', predicate: 'b', object: '"This word is "quoted"!"' }

    N3Util.createLiteral('My text', 'en-gb');
    N3Util.createLiteral('123', 'http://www.w3.org/2001/XMLSchema#integer');
    N3Util.createLiteral(123);
    N3Util.createLiteral(false);

    N3Util.isBlank('_:b1'); // true
    N3Util.isIRI('_:b1'); // false
    N3Util.isLiteral('_:b1'); // false

    var prefixes: N3.Prefixes = { rdfs: 'http://www.w3.org/2000/01/rdf-schema#' };
    N3Util.isPrefixedName('rdfs:label'); // true;
    N3Util.expandPrefixedName('rdfs:label', prefixes); // http://www.w3.org/2000/01/rdf-schema#label
}
