import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CloudbridgeDatasetStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CloudbridgeDatasetStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_redacted_event: "app_redacted_event";
        app_sensitive_params: "app_sensitive_params";
        app_unverified_event: "app_unverified_event";
        has_app_associated: "has_app_associated";
        is_app_prohibited: "is_app_prohibited";
        is_dataset: "is_dataset";
    }>;
}
