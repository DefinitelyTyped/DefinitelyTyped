import * as RDF from 'rdf-js';
import rdf from '@rdfjs/dataset';
import Factory from '@rdfjs/dataset/Factory';
import DatasetCore from '@rdfjs/dataset/DatasetCore';

const exports: ['dataset'] = Factory.exports;
let dataset: RDF.DatasetCore = rdf.dataset();

const quads: RDF.Quad[] = <any> {};
dataset = rdf.dataset(quads);

dataset = new DatasetCore();
dataset = new DatasetCore(quads);

interface CustomQuad extends RDF.BaseQuad {
    foo: string;
}

const customQuad: CustomQuad = <any> {};
const customQuadDataset: RDF.DatasetCore<CustomQuad> = rdf.dataset([customQuad]);
