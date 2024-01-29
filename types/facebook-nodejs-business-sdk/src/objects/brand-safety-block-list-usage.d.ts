import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * BrandSafetyBlockListUsage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandSafetyBlockListUsage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        current_usage: "current_usage";
        new_usage: "new_usage";
        platform: "platform";
        position: "position";
        threshold: "threshold";
    }>;
}
