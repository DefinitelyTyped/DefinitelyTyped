import { ISiteScriptSerializationInfo, ISiteScriptSerializationResult } from "./types";
declare module "../webs/types" {
    interface _Web {
        getSiteScript(extractInfo?: ISiteScriptSerializationInfo): Promise<ISiteScriptSerializationResult>;
    }
    interface IWeb {
        /**
         * Gets the site script syntax (JSON) for the current web
         * @param extractInfo configuration object to specify what to extract
         */
        getSiteScript(extractInfo?: ISiteScriptSerializationInfo): Promise<ISiteScriptSerializationResult>;
    }
}
//# sourceMappingURL=web.d.ts.map