import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativePlatformCustomization
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativePlatformCustomization extends AbstractCrudObject {
    static get Fields(): Readonly<{
        instagram: "instagram";
    }>;
}
