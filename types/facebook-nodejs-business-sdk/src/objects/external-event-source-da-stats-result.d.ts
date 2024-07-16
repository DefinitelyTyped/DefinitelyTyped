import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExternalEventSourceDAStatsResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExternalEventSourceDAStatsResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        count_content_ids: "count_content_ids";
        count_content_ids_match_any_catalog: "count_content_ids_match_any_catalog";
        count_fires: "count_fires";
        count_fires_match_any_catalog: "count_fires_match_any_catalog";
        date: "date";
        percentage_missed_users: "percentage_missed_users";
    }>;
}
