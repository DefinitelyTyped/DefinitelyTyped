import * as RDF from 'rdf-js';

// tslint:disable-next-line no-empty-interface
interface DataFactory extends RDF.DataFactory, RDF.DatasetCoreFactory {
}

declare class DataFactory {
    constructor(impl?: RDF.DataFactory);
    readonly true: RDF.Literal;
}

export = DataFactory;
