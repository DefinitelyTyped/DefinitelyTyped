import * as jsonld from 'jsonld';

const doc: jsonld.JsonLdDocument = {
    "http://schema.org/name": "Manu Sporny",
    "http://schema.org/url": {"@id": "http://manu.sporny.org/"},
    "http://schema.org/image": {"@id": "http://manu.sporny.org/images/manu.png"}
  };

const libraryFrame: jsonld.JsonLdDocument = {
    "@context": {"@vocab": "http://example.org/"},
    "@id": ["http://example.org/home", "http://example.org/library"],
    contains: {
      "@id": ["http://example.org/library/the-republic"],
      contains: {
        "@id": ["http://example.org/library/the-republic#introduction"]
      }
    }
  };

const docNQuads =
   `_: <http://schema.org/name> "Manu Sporny" .
    _: <http://schema.org/url> <http://manu.sporny.org/> .
    _: <http://schema.org/image> <http://manu.sporny.org/images/manu.png> .`;

const context: jsonld.ContextDefinition = {
    name: "http://schema.org/name",
    homepage: {"@id": "http://schema.org/url", "@type": "@id"},
    image: {"@id": "http://schema.org/image", "@type": "@id"}
  };

const baseUrl = 'http://schema.org';

const frame = doc;

const docRDF = jsonld.toRDF(doc);

let count = 0;
function log(doc: object|string) {
    count++;
    // Uncomment if testing with node.js
    if (typeof doc === 'object') {
        // console.log(count + ": " + JSON.stringify(doc) + "\n");
    } else {
        // console.log(doc);
    }
}

/**
 * compact() test
 */
jsonld.compact(doc, context, (err, compDoc) => {
    log(compDoc);
});

jsonld.compact(doc, context, {appropriate: true}, (err, compDoc) => {
    log(compDoc);
});

jsonld.compact(doc, context)
.then((compDoc) => {
    log(compDoc);
});

jsonld.compact(doc, context, {graph: false})
.then((compDoc) => {
    log(compDoc);
});

/**
 * expand() test
 */
jsonld.expand(doc, (err, res) => {
    log(res);
});

jsonld.expand(doc, {keepFreeFloatingNodes: false}, (err, res) => {
    log(res);
});

jsonld.expand(doc)
.then((res) => {
    log(res);
});

jsonld.expand(doc, {keepFreeFloatingNodes: false})
.then((res) => {
    log(res);
});

/**
 * flatten() test
 */
jsonld.flatten(doc, context, (err, res) => {
    log(res);
});

jsonld.flatten(doc, context, {expandContext: context}, (err, res) => {
    log(res);
});

jsonld.flatten(doc, context)
.then((res) => {
    log(res);
});

jsonld.flatten(doc)
    .then((res) => {
        log(res);
    });

jsonld.flatten(doc, context, {base: baseUrl})
.then((res) => {
    log(res);
});

/**
 * frame() test
 */
jsonld.frame(doc, frame, (err, res) => {
    log(res);
});

jsonld.frame(doc, frame, {embed: "@last", explicit: false}, (err, res) => {
    log(res);
});

jsonld.frame(doc, frame)
.then((res) => {
    log(res);
});

jsonld.frame(doc, frame, {requireAll: true})
.then((res) => {
    log(res);
});

/**
 * normalize() test
 */
jsonld.normalize(doc, (err, res) => {
    log(res);
});

jsonld.normalize(doc, {algorithm: 'URDNA2015', expansion: false}, (err, res) => {
    log(res);
});

jsonld.normalize(doc)
.then((res) => {
    log(res);
});

jsonld.normalize(doc, {expansion: false})
.then((res) => {
    log(res);
});

/**
 * canonize() test
 */
jsonld.canonize(doc, (err, res) => {
    log(res);
});

jsonld.canonize(doc, {algorithm: 'URDNA2015', expansion: false}, (err, res) => {
    log(res);
});

jsonld.canonize(doc)
.then((res) => {
    log(res);
});

jsonld.canonize(doc, {expansion: false})
.then((res) => {
    log(res);
});

/**
 * fromRDF() test
 */
jsonld.fromRDF(docRDF)
.then((res) => {
    log(res);
});

jsonld.fromRDF(docRDF, {useRdfType: false})
.then((res) => {
    log(res);
});

/**
 * toRDF() test
 */
jsonld.toRDF(doc, (err, res) => {
    log(res);
});

jsonld.toRDF(doc, {format: 'application/n-quads'}, (err, res) => {
    log(res);
});

jsonld.toRDF(doc)
.then((res) => {
    log(res);
});

jsonld.toRDF(doc, {produceGeneralizedRdf: false})
.then((res) => {
    log(res);
});

/*
 * Test class JsonLdProcessor
 */

const processor = jsonld.JsonLdProcessor;

processor.compact(doc, context)
.then((res) => {
    log(res);
});

processor.expand(doc)
.then((res) => {
    log(res);
});

processor.flatten(doc)
.then((res) => {
    log(res);
});
