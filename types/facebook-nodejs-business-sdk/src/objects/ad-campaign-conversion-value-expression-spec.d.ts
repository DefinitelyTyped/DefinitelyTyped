import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignConversionValueExpressionSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignConversionValueExpressionSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adjustment_sign: "adjustment_sign";
        adjustment_weight: "adjustment_weight";
        destination_type: "destination_type";
    }>;
}
