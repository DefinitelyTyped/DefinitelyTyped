import * as RDF from '@rdfjs/types';
import rdf from '@rdfjs/dataset';
import Factory from '@rdfjs/dataset/Factory';
import DatasetCore from '@rdfjs/dataset/DatasetCore';
import Environment from '@rdfjs/environment/Environment.js';

const exports: ['dataset'] = Factory.exports;
let dataset: RDF.DatasetCore = rdf.dataset();

const env = new Environment([Factory]); // $ExpectType Environment<Factory>

const quads: RDF.Quad[] = <any> {};
dataset = rdf.dataset(quads);

dataset = new DatasetCore();
dataset = new DatasetCore(quads);

interface CustomQuad extends RDF.BaseQuad {
    foo: string;
}

const customQuad: CustomQuad = <any> {};
const customQuadDataset: RDF.DatasetCore<CustomQuad> = rdf.dataset([customQuad]);
