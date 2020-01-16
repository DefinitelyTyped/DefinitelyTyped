// Type definitions for @rdfjs/fetch-lite 2.0
// Project: https://github.com/rdfjs-base/fetch-lite
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DatasetFactory, Dataset, Quad, Stream } from 'rdf-js';
import formats = require('@rdfjs/formats-common');

declare namespace rdfFetch {
    interface FormatsInit extends RequestInit {
        formats: Pick<typeof formats, 'parsers'>;
        fetch?: typeof fetch;
    }
    
    interface FactoryInit<D extends Dataset<Quad>> extends FormatsInit {
        factory: DatasetFactory<Quad, D>;
    }

    interface RdfFetchResponse extends Response {
        quadStream(): Stream<Quad>;
    }

    interface DatasetResponse<D extends Dataset<Quad>> extends RdfFetchResponse {
        dataset(): D;
    }
}

declare function rdfFetch(url: string, options: rdfFetch.FormatsInit): Promise<rdfFetch.RdfFetchResponse>;
declare function rdfFetch <D extends Dataset<Quad>>(url: string, options: rdfFetch.FactoryInit<D>): Promise<rdfFetch.DatasetResponse<D>>;

export = rdfFetch;
