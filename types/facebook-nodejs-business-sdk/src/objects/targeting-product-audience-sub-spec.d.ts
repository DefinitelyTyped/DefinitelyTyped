import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingProductAudienceSubSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingProductAudienceSubSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        retention_seconds: "retention_seconds";
        rule: "rule";
    }>;
}
