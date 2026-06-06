import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessAdvertisableApplicationsResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAdvertisableApplicationsResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        are_app_events_unavailable: "are_app_events_unavailable";
        business: "business";
        has_insight_permission: "has_insight_permission";
        id: "id";
        name: "name";
        photo_url: "photo_url";
    }>;
}
