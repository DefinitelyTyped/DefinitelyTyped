import { IFeatures } from "./types";
declare module "../webs/types" {
    interface _Web {
        readonly features: IFeatures;
    }
    interface IWeb {
        /**
         * Access the features activated in this web
         */
        readonly features: IFeatures;
    }
}
//# sourceMappingURL=web.d.ts.map