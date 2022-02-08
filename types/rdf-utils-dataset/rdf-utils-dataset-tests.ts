import utils = require('rdf-utils-dataset');
import resourceToGraph = require('rdf-utils-dataset/resourcesToGraph');
import { DatasetIndexed } from 'rdf-dataset-indexed/dataset';
import DatasetExt = require('rdf-ext/lib/Dataset');
import QuadExt = require('rdf-ext/lib/Quad');
import { BaseQuad, DataFactory, DatasetCore, DatasetCoreFactory, Quad, Term } from 'rdf-js';

const { resource } = utils;

type Factory<OutQuad extends BaseQuad,
    InQuad extends BaseQuad,
    D extends DatasetCore<OutQuad, InQuad>,
> = DataFactory<OutQuad, InQuad> & DatasetCoreFactory<OutQuad, InQuad, D>;

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
resourceToGraph(dataset1);

// $ExpectType DatasetCore<BaseQuad, BaseQuad>
resourceToGraph(dataset1, { factory: factory1 });

// $ExpectType DatasetExt
resourceToGraph(dataset2);

// $ExpectType DatasetCore<Quad, Quad>
resourceToGraph(dataset2, { factory: factory2 });

// $ExpectType DatasetExt
resourceToGraph(dataset3);

// $ExpectType DatasetIndexed<Quad, Quad>
resourceToGraph(dataset3, { factory: factory3 });

// $ExpectType DatasetExt
resourceToGraph(dataset4);

// $ExpectType DatasetExt
resourceToGraph(dataset4, { factory: factory4 });
