import { DatasetCore, Quad } from "@rdfjs/types";

export default function dataset(dataset: DatasetCore, toNT: (quad: Quad) => string): string;
