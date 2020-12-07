import { IWeb } from "../webs/types";
import "./web";
export { IAppAddResult, IApp, IAppCatalog, App, AppCatalog, } from "./types";
declare module "../rest" {
    interface SPRest {
        getTenantAppCatalogWeb(): Promise<IWeb>;
    }
}
//# sourceMappingURL=index.d.ts.map