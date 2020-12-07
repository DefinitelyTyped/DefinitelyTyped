import { IRegionalSettings, IUserResources } from "./types";
declare module "../webs/types" {
    interface _Web extends IUserResources {
        regionalSettings: IRegionalSettings;
    }
    interface IWeb extends IUserResources {
        /**
         * Regional settings for this web
         */
        regionalSettings: IRegionalSettings;
    }
}
//# sourceMappingURL=web.d.ts.map