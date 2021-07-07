import express = require('express');
import { Store } from 'rdf-js';
import '@rdfjs/express-handler';
import 'set-link';
import 'absolute-url';
import { Api } from './Api';
import { ResourceLoader } from '.';

declare namespace middleware {
    interface HydraBoxMiddleware {
        resource?: express.RequestHandler | express.RequestHandler[];
        operations?: express.RequestHandler | express.RequestHandler[];
    }

    interface Options {
        baseIriFromRequest?: boolean;
        loader?: ResourceLoader;
        store?: Store;
        middleware?: HydraBoxMiddleware;
    }
}

declare function middleware(api: Api, options?: middleware.Options): express.Router;

export = middleware;
