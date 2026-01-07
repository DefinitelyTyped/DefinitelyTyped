import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageCTXMessagingFeatureLimit
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCTXMessagingFeatureLimit extends AbstractCrudObject {
    static get Fields(): Readonly<{
        messaging_feature_limit_duration: "messaging_feature_limit_duration";
        messaging_feature_limit_type: "messaging_feature_limit_type";
        messaging_violation_type: "messaging_violation_type";
    }>;
}
