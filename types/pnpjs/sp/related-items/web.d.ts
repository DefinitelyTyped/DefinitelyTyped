import { IRelatedItemManager } from "./types";
declare module "../webs/types" {
    interface _Web {
        relatedItems: IRelatedItemManager;
    }
    interface IWeb {
        /**
         * The related items manager associated with this web
         */
        relatedItems: IRelatedItemManager;
    }
}
//# sourceMappingURL=web.d.ts.map