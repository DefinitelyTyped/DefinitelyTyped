import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * JobOpening

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class JobOpening extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get JobStatus(): Record<string, any>;
    static get PlatformReviewStatus(): Record<string, any>;
    static get ReviewRejectionReasons(): Record<string, any>;
    static get Type(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<JobOpening>;
}
