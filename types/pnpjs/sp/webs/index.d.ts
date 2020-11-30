import { IWeb } from "./types";
import { SPBatch } from "../batch";
export { IWeb, IWebs, Web, IWebAddResult, IWebUpdateResult, Webs, IWebInfo, IStorageEntity, IWebInfosData, } from "./types";
declare module "../rest" {
    interface SPRest {
        /**
         * Access to the current web instance
         */
        readonly web: IWeb;
        /**
         * Creates a new batch object for use with the SharePointQueryable.addToBatch method
         *
         */
        createBatch(): SPBatch;
    }
}
//# sourceMappingURL=index.d.ts.map