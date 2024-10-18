import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoStatusError
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoStatusError extends AbstractCrudObject {
    static get Fields(): Readonly<{
        code: "code";
        message: "message";
    }>;
}
