import express = require('express');
import { Store } from 'rdf-js';
import '@rdfjs/express-handler';
import 'set-link';
import 'absolute-url';
import { Api } from './Api';
import { ResourceLoader } from '.';

declare namespace middleware {
    interface HydraBoxMiddleware {
        resource?: express.RequestHandler | express.RequestHandler[] | undefined;
        operations?: express.RequestHandler | express.RequestHandler[] | undefined;
    }

    interface Options {
        baseIriFromRequest?: boolean | undefined;
        loader?: ResourceLoader | undefined;
        store?: Store | undefined;
        middleware?: HydraBoxMiddleware | undefined;
    }
}

declare function middleware(api: Api, options?: middleware.Options): express.Router;

export = middleware;
