import { DatasetCore, Quad } from "rdf-js";

declare function dataset(dataset: DatasetCore, toNT: (quad: Quad) => string): string;

export = dataset;
