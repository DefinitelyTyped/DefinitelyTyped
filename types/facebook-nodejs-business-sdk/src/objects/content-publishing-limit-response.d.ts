import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ContentPublishingLimitResponse
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ContentPublishingLimitResponse extends AbstractCrudObject {
    static get Fields(): Readonly<{
        config: "config";
        quota_usage: "quota_usage";
    }>;
}
