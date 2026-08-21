import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoStatusProcessingPhase
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoStatusProcessingPhase extends AbstractCrudObject {
    static get Fields(): Readonly<{
        errors: "errors";
        status: "status";
    }>;
}
