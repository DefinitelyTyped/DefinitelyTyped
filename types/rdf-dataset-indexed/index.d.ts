import { BaseQuad, DataFactory, DatasetCoreFactory, Quad } from "rdf-js";
import { DatasetIndexed } from "./dataset";

declare function datasetFactory<Q extends BaseQuad = Quad>(
    quads?: Q[],
    dataFactory?: DataFactory<Q> & DatasetCoreFactory<Q>,
): DatasetIndexed<Q>;

export = datasetFactory;
