import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoCopyrightCheckStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightCheckStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        matches_found: "matches_found";
        status: "status";
    }>;
}
