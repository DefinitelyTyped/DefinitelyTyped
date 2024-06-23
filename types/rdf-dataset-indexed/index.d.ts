import { BaseQuad, DataFactory, DatasetCoreFactory, Quad } from "@rdfjs/types";
import { DatasetIndexed } from "./dataset";

declare function datasetFactory<Q extends BaseQuad = Quad>(
    quads?: Q[],
    dataFactory?: DataFactory<Q> & DatasetCoreFactory<Q>,
): DatasetIndexed<Q>;

export = datasetFactory;
