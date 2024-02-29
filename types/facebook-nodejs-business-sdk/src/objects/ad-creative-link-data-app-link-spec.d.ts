import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeLinkDataAppLinkSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataAppLinkSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        android: "android";
        ios: "ios";
        ipad: "ipad";
        iphone: "iphone";
    }>;
}
