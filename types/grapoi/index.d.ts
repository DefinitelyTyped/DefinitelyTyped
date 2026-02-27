// Project: https://github.com/rdf-ext/grapoi
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DataFactory, DatasetCore, Term } from "@rdfjs/types";

import type Grapoi from "./Grapoi.d.ts";
import type PathList from "./PathList.d.ts";
import type Path from "./Path.d.ts";
import type Edge from "./Edge.d.ts";


export default grapoi;
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

