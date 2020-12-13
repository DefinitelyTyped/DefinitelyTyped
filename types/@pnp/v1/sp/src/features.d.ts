import { SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
/**
 * Describes a collection of List objects
 *
 */
export declare class Features extends SharePointQueryableCollection {
    /**
     * Adds a new list to the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature activation will be forced
     */
    add(id: string, force?: boolean): Promise<FeatureAddResult>;
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the feature (GUID)
     */
    getById(id: string): Feature;
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature deactivation will be forced
     */
    remove(id: string, force?: boolean): Promise<any>;
}
export declare class Feature extends SharePointQueryableInstance {
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param force If true the feature deactivation will be forced
     */
    deactivate(force?: boolean): Promise<any>;
}
export interface FeatureAddResult {
    data: any;
    feature: Feature;
}
