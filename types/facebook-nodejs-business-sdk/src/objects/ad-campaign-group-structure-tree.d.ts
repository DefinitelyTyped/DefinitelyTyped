import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignGroupStructureTree
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGroupStructureTree extends AbstractCrudObject {
    static get Fields(): Readonly<{
        children: "children";
        id: "id";
        name: "name";
        time_updated: "time_updated";
    }>;
}
