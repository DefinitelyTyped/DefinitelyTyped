/// <reference types="absolute-url" />
/// <reference types="set-link" />

import { Readable } from "stream";
import express = require("express");
import * as RDF from "@rdfjs/types";
import { GraphPointer } from "clownface";
import DatasetExt from "rdf-ext/lib/Dataset";
import middleware = require("./middleware");
import { Api } from "./Api";

declare namespace HydraBox {
    interface PotentialOperation {
        resource: Resource | PropertyResource;
        operation: GraphPointer;
    }

    interface HydraBox {
        api: Api;
        term: RDF.NamedNode;
        resource: Resource & { clownface(): Promise<GraphPointer<RDF.NamedNode, DatasetExt>> };
        operation: GraphPointer;
        operations: PotentialOperation[];
    }

    interface Resource {
        term: RDF.NamedNode;
        prefetchDataset: RDF.DatasetCore;
        dataset(): Promise<RDF.DatasetCore>;
        quadStream(): RDF.Stream & Readable;
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

declare module "express-serve-static-core" {
    interface Request {
        hydra: HydraBox.HydraBox;
    }
}

declare const HydraBox: {
    middleware: typeof middleware;
    Api: Api;
};

export = HydraBox;
