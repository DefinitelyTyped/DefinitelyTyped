import rdf from "@rdfjs/dataset";
import DatasetCore from "@rdfjs/dataset/DatasetCore.js";
import Factory from "@rdfjs/dataset/Factory.js";
import Environment from "@rdfjs/environment/Environment.js";
import * as RDF from "@rdfjs/types";

const exports: ["dataset"] = Factory.exports;
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
