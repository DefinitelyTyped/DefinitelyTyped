import { Store, Term } from "@rdfjs/types";
import { Resource, ResourceLoader } from ".";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StoreResourceLoader extends ResourceLoader {
}

declare class StoreResourceLoader {
    constructor({ store }: { store: Store });

    load(term: Term): Promise<Resource>;
}

export = StoreResourceLoader;
