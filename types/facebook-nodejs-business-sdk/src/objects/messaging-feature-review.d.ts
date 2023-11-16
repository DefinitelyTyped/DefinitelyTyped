import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * MessagingFeatureReview
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessagingFeatureReview extends AbstractCrudObject {
    static get Fields(): Readonly<{
        feature: "feature";
        status: "status";
    }>;
}
