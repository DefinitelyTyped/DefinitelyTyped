import express = require("express");
import { Store } from "@rdfjs/types";
import "@rdfjs/express-handler";
import "set-link";
import "absolute-url";
import { ResourceLoader } from ".";
import { Api } from "./Api";

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
