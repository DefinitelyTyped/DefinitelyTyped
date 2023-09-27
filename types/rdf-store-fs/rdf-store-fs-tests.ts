import { Quad_Graph, Stream, Term } from "@rdfjs/types";
import $rdf from "rdf-ext";
import StoreFs = require("rdf-store-fs");
import FlatFilenameResolver = require("rdf-store-fs/lib/FlatFilenameResolver.js");

let flatStore = new StoreFs.FlatMultiFileStore({
    path: "/",
    baseIRI: "http://example.com/",
});

flatStore = new StoreFs.FlatMultiFileStore({
    path: "/",
    baseIRI: "http://example.com/",
    extension: "n3",
    factory: $rdf,
});

let resolver = new FlatFilenameResolver({
    path: "/",
    baseIRI: "http://example.com/",
});

resolver = new FlatFilenameResolver({
    path: "/",
    baseIRI: "http://example.com/",
    extension: "n3",
    factory: $rdf,
});

let multiStore = new StoreFs.MultiFileStore({
    resolver,
});

multiStore = new StoreFs.MultiFileStore({ resolver, factory: $rdf });

function store_match() {
    const term: Term = <any> {};
    // $ExpectType Stream<Quad>
    let stream = flatStore.match();
    stream = flatStore.match(term);
    stream = flatStore.match(term, term);
    stream = flatStore.match(term, term, term);
    stream = flatStore.match(term, term, term, term);
}

function store_import() {
    const stream: Stream = <any> {};
    // $ExpectType EventEmitter
    let imported = flatStore.import(stream);
    imported = flatStore.import(stream, { truncate: true });
}

function store_remove() {
    const stream: Stream = <any> {};
    // $ExpectType EventEmitter
    const event = flatStore.remove(stream);
}

function store_removeMatches() {
    const term: Term = <any> {};
    // $ExpectType EventEmitter
    let event = flatStore.removeMatches();
    event = flatStore.removeMatches(term);
    event = flatStore.removeMatches(term, term);
    event = flatStore.removeMatches(term, term, term);
    event = flatStore.removeMatches(term, term, term, term);
}

function store_deleteGraph() {
    const graph: Quad_Graph = <any> {};
    // $ExpectType EventEmitter
    const event = flatStore.deleteGraph(graph);
}

async function resolver_graphs() {
    const graph: Quad_Graph = <any> {};
    // $ExpectType Set<Quad_Graph>
    let graphs = await resolver.graphs();
    graphs = await resolver.graphs(graph);
}

async function resolver_resolve() {
    const graph: Quad_Graph = <any> {};
    // $ExpectType Promise<string>
    const path = resolver.resolve(graph);
}
