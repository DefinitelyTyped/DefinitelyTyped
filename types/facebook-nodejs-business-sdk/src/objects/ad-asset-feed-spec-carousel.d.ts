import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedSpecCarousel
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecCarousel extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adlabels: "adlabels";
        child_attachments: "child_attachments";
        multi_share_end_card: "multi_share_end_card";
        multi_share_optimized: "multi_share_optimized";
    }>;
}
