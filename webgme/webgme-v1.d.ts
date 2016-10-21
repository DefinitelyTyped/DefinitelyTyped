
/**
Things in this module are effectively deprecated.
This was a serialization supported in version 1.
Primarily used for export.
*/
declare module "webgme/v1" {
    export type GUID = string;

    export interface JsonContainment {
        [index: string]: JsonContainment;
    }
    export interface JsonNode {
        attributes: any;
        base: string;
        meta: any;
        parent: string;
        pointers: any;
        registry: any;
        sets: any;
        constratints: any;
    }
    export interface JsonObj {
        root: { path: string; guid: GUID };
        containment: JsonContainment; // guid tree of hashes
        bases: any; //
        nodes: any;
        relids: any;
        metaSheets: any;
    }
}