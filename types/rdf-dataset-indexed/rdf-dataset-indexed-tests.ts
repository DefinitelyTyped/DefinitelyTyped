import datasetFactory = require('rdf-dataset-indexed');
import { BaseQuad, DataFactory, DatasetCore, DatasetCoreFactory, Quad, Term, Stream } from 'rdf-js';
import { DatasetIndexed } from 'rdf-dataset-indexed/dataset';

interface QuadBnode extends BaseQuad {
    subject: Term;
    predicate: Term;
    object: Term;
    graph: Term;
}

const dataFactory1: DataFactory & DatasetCoreFactory = {} as any;
const dataFactory2: DataFactory<QuadBnode> & DatasetCoreFactory<QuadBnode> = {} as any;
const term: Term = {} as any;
const quad: Quad = {} as any;
const quads1: Quad[] = [] as any;
const quads2: QuadBnode[] = [] as any;

const instance1: DatasetCore<Quad, BaseQuad> = datasetFactory();
const instance2: DatasetCore = datasetFactory(quads1);
const instance3: DatasetCore = datasetFactory(quads1, dataFactory1);
const instance4: DatasetCore<QuadBnode> = datasetFactory(quads2);
const instance5: DatasetCore<QuadBnode> = datasetFactory<QuadBnode>(quads2);
const instance6: DatasetCore<QuadBnode> = datasetFactory<QuadBnode>(quads2, dataFactory2);

const dataset: DatasetIndexed<QuadBnode> = <any> {};

let addAll: DatasetIndexed<QuadBnode> = dataset.addAll(quads1);
addAll = dataset.addAll(quads2);

const clone: DatasetIndexed<QuadBnode> = dataset.clone();

let create: DatasetIndexed<QuadBnode> = dataset.create(quads1);
create = dataset.create(quads2);

const diff: DatasetIndexed<QuadBnode> = dataset.difference(dataset);

const every: boolean = dataset.every((q: QuadBnode) => true);

const filter: DatasetIndexed<QuadBnode> = dataset.filter((q: QuadBnode) => true);

dataset.forEach((q: QuadBnode) => {});

const stream: Stream = <any> {};
const imported: Promise<DatasetIndexed<QuadBnode>> = dataset.import(stream);

const includes: boolean = dataset.includes(quad);

const intersection: DatasetIndexed<QuadBnode> = dataset.intersection(dataset);

const length: number = dataset.length;

const map: DatasetIndexed<QuadBnode> = dataset.map(q => q);

const merge: DatasetIndexed<QuadBnode> = dataset.merge(dataset);

const remove: DatasetIndexed<QuadBnode> = dataset.remove(quad);

let removeMatches: DatasetIndexed<QuadBnode> = dataset.removeMatches();
removeMatches = dataset.removeMatches(term);
removeMatches = dataset.removeMatches(term, term);
removeMatches = dataset.removeMatches(term, term, term, term);
removeMatches = dataset.removeMatches(null, null, null, null);

const some: boolean = dataset.some((q: QuadBnode) => true);

const toArray: QuadBnode[] =  dataset.toArray();

const toStream: Stream = dataset.toStream();
