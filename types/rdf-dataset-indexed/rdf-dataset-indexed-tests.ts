import datasetFactory = require('rdf-dataset-indexed');
import { BaseQuad, DataFactory, DatasetCore, Quad } from 'rdf-js';

const dataFactory: DataFactory = {} as any;
const quads1: Quad[] = [] as any;
const quads2: BaseQuad[] = [] as any;

const test1: DatasetCore = datasetFactory();
const test2: DatasetCore = datasetFactory(quads1);
const test3: DatasetCore = datasetFactory(quads1, dataFactory);
const test4: DatasetCore<BaseQuad> = datasetFactory(quads2);
const test5: DatasetCore<BaseQuad> = datasetFactory<BaseQuad>(quads2);
