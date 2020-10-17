// Type definitions for hydra-box 0.5
// Project: https://github.com/zazuko/hydra-box
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/// <reference types="@rdfjs/express-handler" />
/// <reference types="absolute-url" />
/// <reference types="set-link" />

import express = require('express');
import * as RDF from 'rdf-js';
import { GraphPointer } from 'clownface';
import middleware = require('./middleware');
import Api = require('./Api');

declare namespace HydraBox {
    interface HydraBox {
        api: Api;
        term: RDF.NamedNode;
        resource: Resource;
        operation: GraphPointer;
    }

    interface Resource {
        term: RDF.NamedNode;
        dataset: RDF.DatasetCore;
        types: Set<RDF.NamedNode>;
    }

    interface PropertyResource extends Resource {
        property: RDF.Quad_Predicate;
        object: RDF.NamedNode;
    }

    interface ResourceLoader {
        forClassOperation(term: RDF.NamedNode, req: express.Request): Promise<Resource[]>;
        forPropertyOperation(term: RDF.NamedNode, req: express.Request): Promise<PropertyResource[]>;
    }
}

declare module 'express-serve-static-core' {
    interface Request {
        hydra: HydraBox.HydraBox;
    }
}

declare const HydraBox: {
    middleware: typeof middleware;
    Api: typeof Api;
};

export = HydraBox;
