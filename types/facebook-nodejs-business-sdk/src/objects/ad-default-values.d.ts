import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdDefaultValues
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdDefaultValues extends AbstractCrudObject {
    static get Fields(): Readonly<{
        campaign_group: "campaign_group";
    }>;
}
