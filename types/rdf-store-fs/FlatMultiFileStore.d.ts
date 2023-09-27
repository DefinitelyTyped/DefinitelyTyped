import { DataFactory } from "@rdfjs/types";
import MultiFileStore = require("./MultiFileStore");

declare class FlatMultiFileStore extends MultiFileStore {
    constructor(params: { baseIRI: string; factory?: DataFactory; path: string; extension?: string });
}

export = FlatMultiFileStore;
