import { DataFactory, DatasetCore, Quad_Graph } from "@rdfjs/types";
import FlatFilenameResolver = require("./FlatFilenameResolver");

declare class MultiFileDatasetStore {
    constructor(params: { factory?: DataFactory; resolver: FlatFilenameResolver });
    graphs(): ReturnType<FlatFilenameResolver["graphs"]>;
    read(graph: Quad_Graph): Promise<DatasetCore>;
    write(graph: Quad_Graph, dataset: DatasetCore): Promise<void>;
}

export = MultiFileDatasetStore;
