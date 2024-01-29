import * as RDF from "@rdfjs/types";

interface DatasetCore<Q extends RDF.BaseQuad = RDF.Quad> extends RDF.DatasetCore<Q> {
}

// tslint:disable-next-line no-unnecessary-class
declare class DatasetCore<Q> {
    constructor(quads?: Q[]);
}

export default DatasetCore;
