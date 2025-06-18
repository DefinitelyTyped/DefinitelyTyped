import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoStatusPublishingPhase
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoStatusPublishingPhase extends AbstractCrudObject {
    static get Fields(): Readonly<{
        errors: "errors";
        publish_status: "publish_status";
        publish_time: "publish_time";
        status: "status";
    }>;
}
