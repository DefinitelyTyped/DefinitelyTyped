import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WorkAccessCode
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WorkAccessCode extends AbstractCrudObject {
    static get Fields(): Readonly<{
        code: "code";
        expiration_time: "expiration_time";
    }>;
}
