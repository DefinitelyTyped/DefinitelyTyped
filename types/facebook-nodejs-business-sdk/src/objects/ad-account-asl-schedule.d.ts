import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountASLSchedule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountASLSchedule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account: "ad_account";
        id: "id";
        time_created: "time_created";
        time_updated: "time_updated";
    }>;
}
