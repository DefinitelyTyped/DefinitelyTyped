import { DataFactory, Quad_Graph, Stream, Term } from "@rdfjs/types";
import { EventEmitter } from "events";
import FlatFilenameResolver = require("./lib/FlatFilenameResolver");
import MultiFileDatasetStore = require("./lib/MultiFileDatasetStore");

declare class MultiFileStore {
    datastore: MultiFileDatasetStore;

    constructor(arg: { factory?: DataFactory; resolver: FlatFilenameResolver });

    match(subject?: Term | null, predicate?: Term | null, object?: Term | null, graph?: Term | null): Stream;

    import(stream: Stream, opt?: { truncate?: boolean }): EventEmitter;

    remove(stream: Stream): EventEmitter;

    removeMatches(
        subject?: Term | null,
        predicate?: Term | null,
        object?: Term | null,
        graph?: Term | null,
    ): EventEmitter;

    deleteGraph(graph: Quad_Graph): EventEmitter;
}

export = MultiFileStore;
