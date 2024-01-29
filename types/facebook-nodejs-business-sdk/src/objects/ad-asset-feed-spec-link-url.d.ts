import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAssetFeedSpecLinkURL
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecLinkURL extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adlabels: "adlabels";
        carousel_see_more_url: "carousel_see_more_url";
        deeplink_url: "deeplink_url";
        display_url: "display_url";
        url_tags: "url_tags";
        website_url: "website_url";
    }>;
}
