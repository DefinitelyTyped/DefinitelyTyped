import * as RDF from 'rdf-js';

// tslint:disable-next-line no-empty-interface
interface DatasetCore extends RDF.DatasetCore {}

// tslint:disable-next-line no-unnecessary-class
declare class DatasetCore {
    constructor(quads: RDF.Quad[]);
}

export = DatasetCore;
