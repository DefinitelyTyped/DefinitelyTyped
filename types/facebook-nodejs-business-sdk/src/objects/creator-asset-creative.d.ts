import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CreatorAssetCreative
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreatorAssetCreative extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        image_url: "image_url";
        moderation_status: "moderation_status";
        product_item_retailer_id: "product_item_retailer_id";
        product_url: "product_url";
        retailer_id: "retailer_id";
        video_url: "video_url";
    }>;
    static get ModerationStatus(): Readonly<{
        archived: "ARCHIVED";
        eligible: "ELIGIBLE";
        expired: "EXPIRED";
        ineligible: "INELIGIBLE";
        in_review: "IN_REVIEW";
        paused: "PAUSED";
        unknown: "UNKNOWN";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CreatorAssetCreative>;
}
