import "./web";
import { ISiteDesigns } from "./types";
export { ISiteDesignCreationInfo, ISiteDesignInfo, ISiteDesignPrincipals, ISiteDesignUpdateInfo, ISiteDesigns, SiteDesigns, ISiteDesignRun, ISiteDesignTask, ISiteScriptActionStatus, } from "./types";
declare module "../rest" {
    interface SPRest {
        readonly siteDesigns: ISiteDesigns;
    }
}
//# sourceMappingURL=index.d.ts.map