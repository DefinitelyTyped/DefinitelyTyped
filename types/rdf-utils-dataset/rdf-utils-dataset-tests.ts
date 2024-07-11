import { BaseQuad, DataFactory, DatasetCore, DatasetCoreFactory, Quad, Term } from "@rdfjs/types";
import { DatasetIndexed } from "rdf-dataset-indexed/dataset";
import DatasetExt from "rdf-ext/lib/Dataset";
import QuadExt from "rdf-ext/lib/Quad";
import { resource, resourcesToGraph } from "rdf-utils-dataset";

type Factory<OutQuad extends BaseQuad, InQuad extends BaseQuad, D extends DatasetCore<OutQuad, InQuad>> =
    & DataFactory<OutQuad, InQuad>
    & DatasetCoreFactory<OutQuad, InQuad, D>;

const dataset1: DatasetIndexed<BaseQuad, BaseQuad> = {} as any;
const dataset2: DatasetIndexed<Quad, BaseQuad> = {} as any;
const dataset3: DatasetIndexed = {} as any;
const dataset4: DatasetExt = {} as any;
const term: Term = {} as any;
const factory1: Factory<BaseQuad, BaseQuad, DatasetCore<BaseQuad, BaseQuad>> = {} as any;
const factory2: Factory<Quad, Quad, DatasetCore<Quad, Quad>> = {} as any;
const factory3: Factory<Quad, Quad, DatasetIndexed> = {} as any;
const factory4: Factory<QuadExt, QuadExt, DatasetExt> = {} as any;

// $ExpectType DatasetIndexed<BaseQuad, BaseQuad>
resource(dataset1, term);

// $ExpectType DatasetIndexed<Quad, BaseQuad>
resource(dataset2, term);

// $ExpectType DatasetIndexed<Quad, Quad>
resource(dataset3, term);

// $ExpectType DatasetExt
resource(dataset4, term);

// $ExpectType DatasetExt
resourcesToGraph(dataset1);

// $ExpectType DatasetCore<BaseQuad, BaseQuad>
resourcesToGraph(dataset1, { factory: factory1 });

// $ExpectType DatasetExt
resourcesToGraph(dataset2);

// $ExpectType DatasetCore<Quad, Quad>
resourcesToGraph(dataset2, { factory: factory2 });

// $ExpectType DatasetExt
resourcesToGraph(dataset3);

// $ExpectType DatasetIndexed<Quad, Quad>
resourcesToGraph(dataset3, { factory: factory3 });

// $ExpectType DatasetExt
resourcesToGraph(dataset4);

// $ExpectType DatasetExt
resourcesToGraph(dataset4, { factory: factory4 });
