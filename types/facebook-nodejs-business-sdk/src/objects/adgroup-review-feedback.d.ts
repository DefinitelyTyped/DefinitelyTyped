import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdgroupReviewFeedback
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdgroupReviewFeedback extends AbstractCrudObject {
    static get Fields(): Readonly<{
        global: "global";
        placement_specific: "placement_specific";
    }>;
}
