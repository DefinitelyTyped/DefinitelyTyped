import { IHubSites } from "./types";
import "./site";
import "./web";
export { HubSite, HubSites, IHubSite, IHubSiteInfo, IHubSiteWebData, IHubSites, } from "./types";
declare module "../rest" {
    interface SPRest {
        /**
         * Lists all of the subsites
         */
        readonly hubSites: IHubSites;
    }
}
//# sourceMappingURL=index.d.ts.map