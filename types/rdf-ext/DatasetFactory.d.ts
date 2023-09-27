import { DefaultGraph, NamedNode, Quad } from "@rdfjs/types";
import DatasetExt from "./lib/Dataset.js";

export interface DatasetFactory {
    dataset(quads?: Quad[], graph?: NamedNode | DefaultGraph): DatasetExt;
}

interface DatasetFactoryCtor {
    new(): DatasetFactory;
    exports: ["dataset"];
}

declare const datasetFactory: DatasetFactoryCtor;

export default datasetFactory;
