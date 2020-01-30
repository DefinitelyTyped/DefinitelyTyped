import datasetFactory = require('rdf-dataset-indexed');
import { BaseQuad, DataFactory, DatasetCore, DatasetCoreFactory, Quad, Term } from 'rdf-js';

interface QuadBnode extends BaseQuad {
    subject: Term;
    predicate: Term;
    object: Term;
    graph: Term;
}

const dataFactory1: DataFactory & DatasetCoreFactory = {} as any;
const dataFactory2: DataFactory<QuadBnode> & DatasetCoreFactory<QuadBnode> = {} as any;
const quads1: Quad[] = [] as any;
const quads2: QuadBnode[] = [] as any;

const test1: DatasetCore<Quad, BaseQuad> = datasetFactory();
const test2: DatasetCore = datasetFactory(quads1);
const test3: DatasetCore = datasetFactory(quads1, dataFactory1);
const test4: DatasetCore<QuadBnode> = datasetFactory(quads2);
const test5: DatasetCore<QuadBnode> = datasetFactory<QuadBnode>(quads2);
const test6: DatasetCore<QuadBnode> = datasetFactory<QuadBnode>(quads2, dataFactory2);
