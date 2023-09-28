import { Store, Term } from "@rdfjs/types";
import { Resource, ResourceLoader } from ".";

// tslint:disable-next-line no-empty-interface
interface StoreResourceLoader extends ResourceLoader {
}

declare class StoreResourceLoader {
    constructor({ store }: { store: Store });

    load(term: Term): Promise<Resource>;
}

export = StoreResourceLoader;
