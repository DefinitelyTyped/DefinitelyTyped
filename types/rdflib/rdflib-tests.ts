import * as $rdf from "rdflib";

const store = $rdf.graph();
$rdf.parse(
    "some inline rdf data",
    store,
    "http://example.com",
    "text/n3",
    (x, y) => {}
);
const someStatements = store.statementsMatching(null, null, null, $rdf.sym('http://some-node'));
const foafName = `${store.namespaces.foaf}fn`;
const node = store.any(
    $rdf.sym("http://example.com/subject"),
    $rdf.sym("http://example.com/property"),
    undefined,
    undefined
);
const value = node ? node.value : null;

const updateManager = new $rdf.UpdateManager(store);
updateManager.update(
    [],
    [
        $rdf.st(
            $rdf.sym('http://some-subject'),
            $rdf.sym('http://some-predicate'),
            $rdf.sym('http://some-object'),
            $rdf.sym('http://some-doc')
        )
    ],
    (uri, success) => console.log(success)
);
