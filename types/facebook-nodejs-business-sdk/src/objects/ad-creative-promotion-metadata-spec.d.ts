import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativePromotionMetadataSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativePromotionMetadataSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        end_date: "end_date";
        id: "id";
        promotion_source: "promotion_source";
        promotion_type: "promotion_type";
        promotion_value: "promotion_value";
        required_code: "required_code";
        start_date: "start_date";
    }>;
}
