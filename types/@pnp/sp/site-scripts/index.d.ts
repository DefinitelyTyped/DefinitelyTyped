import "./web";
import "./list";
import { ISiteScripts } from "./types";
export { SiteScripts, ISiteScripts, ISiteScriptInfo, ISiteScriptUpdateInfo, ISiteScriptSerializationInfo, ISiteScriptSerializationResult, } from "./types";
declare module "../rest" {
    interface SPRest {
        readonly siteScripts: ISiteScripts;
    }
}
//# sourceMappingURL=index.d.ts.map