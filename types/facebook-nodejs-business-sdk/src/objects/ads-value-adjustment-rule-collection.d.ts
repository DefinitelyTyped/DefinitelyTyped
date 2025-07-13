import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AdsValueAdjustmentRuleCollection
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsValueAdjustmentRuleCollection extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        is_default_setting: "is_default_setting";
        name: "name";
        product_type: "product_type";
    }>;
    static get ProductType(): Readonly<{
        audience: "AUDIENCE";
        leadgen_ads: "LEADGEN_ADS";
        omni_channel: "OMNI_CHANNEL";
    }>;
    getRules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsValueAdjustmentRuleCollection>;
    update(fields: string[], params?: Record<string, any>): Promise<AdsValueAdjustmentRuleCollection>;
}
