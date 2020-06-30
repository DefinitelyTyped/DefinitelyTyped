import * as RDF from 'rdf-js';

// tslint:disable-next-line no-empty-interface
interface DatasetCore<InQuad extends RDF.BaseQuad = RDF.Quad> extends RDF.DatasetCore<RDF.Quad, InQuad> {}

// tslint:disable-next-line no-unnecessary-class
declare class DatasetCore<InQuad> {
    constructor(quads: InQuad[]);
}

export = DatasetCore;
