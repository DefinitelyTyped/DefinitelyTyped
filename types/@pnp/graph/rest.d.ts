import { _GraphQueryable } from "./graphqueryable";
import { IGraphConfiguration } from "./graphlibconfig";
import { GraphBatch } from "./batch";
import { ISPFXContext } from "@pnp/common";
export declare class GraphRest extends _GraphQueryable {
    createBatch(): GraphBatch;
    setup(config: IGraphConfiguration | ISPFXContext): void;
}
export declare let graph: GraphRest;
//# sourceMappingURL=rest.d.ts.map