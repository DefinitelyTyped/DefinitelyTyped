import { DatasetIndexed } from 'rdf-dataset-indexed/dataset';
import * as RDF from 'rdf-js';
import QuadExt = require('rdf-ext/lib/Quad');
import DatasetExt = require('rdf-ext/lib/Dataset');

type Factory<OutQuad extends RDF.BaseQuad = RDF.BaseQuad,
    InQuad extends RDF.BaseQuad = RDF.BaseQuad,
    D extends RDF.DatasetCore<OutQuad, InQuad> = RDF.DatasetCore<OutQuad, InQuad>,
> = RDF.DataFactory<OutQuad, InQuad> & RDF.DatasetCoreFactory<OutQuad, InQuad, D>;

interface Options<F extends Factory> {
    factory?: F | undefined;
}

type DatasetOf<F> = F extends RDF.DatasetCoreFactory<any, any, infer D> ? D : never;

declare function resourcesToGraph<F extends Factory = Factory<QuadExt, QuadExt, DatasetExt>>(_input: DatasetIndexed<RDF.BaseQuad, RDF.BaseQuad>, options?: Options<F>): DatasetOf<F>;

export = resourcesToGraph;
