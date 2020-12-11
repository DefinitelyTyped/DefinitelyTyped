import { SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
import { HubSite as IHubSite } from "./types";
/**
 * Describes a collection of Hub Sites
 *
 */
export declare class HubSites extends SharePointQueryableCollection<IHubSite[]> {
    /**
     * Gets a Hub Site from the collection by id
     *
     * @param id The Id of the Hub Site
     */
    getById(id: string): HubSite;
}
export declare class HubSite extends SharePointQueryableInstance<IHubSite> {
}
