import * as $rdf from "rdflib";

const store = $rdf.graph();
$rdf.parse(
    "some inline rdf data",
    store,
    "http://example.com",
    "text/n3",
    (x, y) => {}
);
const node = store.any(
    $rdf.sym("http://example.com/subject"),
    $rdf.sym("http://example.com/property"),
    undefined,
    undefined
);
const value = node.value;
