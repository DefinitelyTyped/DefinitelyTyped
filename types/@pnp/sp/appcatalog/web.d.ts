import { IAppCatalog } from "./types";
declare module "../webs/types" {
    interface _Web {
        getAppCatalog(url?: string | _Web): IAppCatalog;
    }
    interface IWeb {
        /**
         * Gets this web (default) or the web specifed by the optional string case
         * as an IAppCatalog instance
         *
         * @param url [Optional] Url of the web to get (default: current web)
         */
        getAppCatalog(url?: string | _Web): IAppCatalog;
    }
}
//# sourceMappingURL=web.d.ts.map