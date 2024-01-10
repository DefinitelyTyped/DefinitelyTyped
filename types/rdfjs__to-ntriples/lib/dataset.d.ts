import { DatasetCore, Quad } from "@rdfjs/types";

declare function dataset(dataset: DatasetCore, toNT: (quad: Quad) => string): string;

export = dataset;
