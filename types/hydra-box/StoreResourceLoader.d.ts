import { Term, Store } from 'rdf-js';
import { ResourceLoader, Resource } from '.';

// tslint:disable-next-line no-empty-interface
interface StoreResourceLoader extends ResourceLoader {
}

declare class StoreResourceLoader {
    constructor({ store }: { store: Store });

    load(term: Term): Promise<Resource>;
}

export = StoreResourceLoader;
