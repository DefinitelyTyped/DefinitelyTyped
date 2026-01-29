// Project: https://github.com/rdf-ext/grapoi
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DataFactory, DatasetCore, Term } from "@rdfjs/types";

export = grapoi;
export as namespace grapoi;

declare function grapoi(args: grapoi.GrapoiOptions): grapoi.Grapoi;

declare namespace grapoi {
    export interface GrapoiOptions {
        dataset: DatasetCore;
        factory?: DataFactory;
        term?: Term | Term[] | string;
        terms?: Term[];
        graphs?: Term[];
    }

    export { Edge, Grapoi, Path, PathList };
}

import Grapoi = require("./Grapoi");
import PathList = require("./PathList");
import Path = require("./Path");
import Edge = require("./Edge");
