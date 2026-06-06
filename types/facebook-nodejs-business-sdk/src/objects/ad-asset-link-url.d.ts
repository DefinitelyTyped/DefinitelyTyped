import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetLinkURL
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetLinkURL extends AbstractCrudObject {
    static get Fields(): Readonly<{
        android_deeplink_url: "android_deeplink_url";
        carousel_see_more_url: "carousel_see_more_url";
        deeplink_url: "deeplink_url";
        display_url: "display_url";
        id: "id";
        ipad_deeplink_url: "ipad_deeplink_url";
        iphone_deeplink_url: "iphone_deeplink_url";
        url_tags: "url_tags";
        website_url: "website_url";
    }>;
}
