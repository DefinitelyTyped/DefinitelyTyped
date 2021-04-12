import { Term, DatasetCore, NamedNode } from 'rdf-js';
import { LoaderRegistry } from 'rdf-loaders-registry';

declare namespace Api {
    interface ApiInit<D extends DatasetCore = DatasetCore> {
        term?: Term;
        dataset?: D;
        graph?: NamedNode;
        path?: string;
        codePath?: string;
    }

    interface Api<D extends DatasetCore = DatasetCore> {
        initialized: boolean;
        path: string;
        codePath: string;
        graph?: NamedNode;
        dataset: D;
        term: NamedNode | undefined;
        loaderRegistry: LoaderRegistry;
        init(): Promise<void>;
    }
}

interface Api<D extends DatasetCore = DatasetCore> extends Api.Api<D> { }

// tslint:disable-next-line no-unnecessary-class
declare class Api<D extends DatasetCore = DatasetCore> {
    constructor(options?: Api.ApiInit<D>);

    static fromFile<D extends DatasetCore = DatasetCore>(fielPath: string, options?: Api.ApiInit<D>): Api<D>;
    fromFile(filePath: string, options?: Api.ApiInit): this;
    rebase(from: string | NamedNode, to: string | NamedNode): this;
}

export = Api;
