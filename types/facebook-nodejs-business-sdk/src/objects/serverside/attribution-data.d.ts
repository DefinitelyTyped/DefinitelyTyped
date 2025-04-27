import AttributionModel from './attribution-model';
/**
 * AttributionData used for attribution passback event to optimize the performance.
 */
export default class AttributionData {
    _scope: string;
    _visit_time: number;
    _ad_id: string;
    _adset_id: string;
    _campaign_id: string;
    _attribution_share: number;
    _attribution_model: typeof AttributionModel;
    _attr_window: number;
    /**
     * @param {String} scope Touchpoint type
     * @param {Number} visit_time Time that the campaign_id or fbc was first received
     * @param {String} ad_id Meta-provided ad id from URL/deeplink
     * @param {String} adset_id Meta-provided adset id from URL/deeplink
     * @param {String} campaign_id Meta-provided campaign id from URL/deeplink
     * @param {Number} attribution_share Range [0-1] weight of credit assigned to the visit
     * @param {AttributionModel} attribution_model Attribution model used to attribute the event, check attribution-model.js file.
     * @param {Number} attr_window Attribution window in days.
     */
    constructor(scope?: string, visit_time?: number, ad_id?: string, adset_id?: string, campaign_id?: string, attribution_share?: number, attribution_model?: typeof AttributionModel, attr_window?: number);
    /**
     * Returns the scope of the attribution data.
     * Exmaple: 'click'.
     */
    get scope(): string;
    /**
     * Set the scope of the attribution data.
     * @param {String} scope Touchpoint type
     */
    set scope(scope: string);
    /**
     * Set the scope of the attribution data.
     * @param {String} scope Touchpoint type
     * @returns {AttributionData}
     */
    setScope(scope: string): AttributionData;
    /**
     * Returns the visit time of the attribution data.
     * Example: 1512345678900
     */
    get visit_time(): number;
    /**
     * Set the visit time of the attribution data.
     * @param {Number} visit_time Time that the campaign_id or fbc was first received
     */
    set visit_time(visit_time: number);
    /**
     * Set the visit time of the attribution data.
     * @param {Number} visit_time Time that the campaign_id or fbc was first received
     * @returns {AttributionData}
     */
    setVisitTime(visit_time: number): AttributionData;
    /**
     * Return the ad id of the attribution data
     * Example: '1233435554'
     */
    get ad_id(): string;
    /**
     * Set the ad id of the attribution data.
     * @param {String} ad_id Meta-provided ad id from URL/deeplink
     */
    set ad_id(ad_id: string);
    /**
     * Set the ad id of the attribution data.
     * @param {String} ad_id Meta-provided ad id from URL/deeplink
     * @returns {AttributionData}
     */
    setAdId(ad_id: string): AttributionData;
    /**
     * Return the adset id of the attribution data
     * Example: '1233435554'
     */
    get adset_id(): string;
    /**
     * Set the adset id of the attribution data.
     * @param {String} adset_id Meta-provided adset id from URL/deeplink
     */
    set adset_id(adset_id: string);
    /**
     * Set the adset id of the attribution data.
     * @param {String} adset_id Meta-provided adset id from URL/deeplink
     * @returns {AttributionData}
     */
    setAdsetId(adset_id: string): AttributionData;
    /**
     * Return the campaign id of the attribution data
     * Example: '1233435554'
     */
    get campaign_id(): string;
    /**
     * Set the campaign id of the attribution data.
     * @param {String} campaign_id Meta-provided campaign id from URL/deeplink
     */
    set campaign_id(campaign_id: string);
    /**
     * Set the campaign id of the attribution data.
     * @param {String} campaign_id Meta-provided campaign id from URL/deeplink
     * @returns {AttributionData}
     */
    setCampaignId(campaign_id: string): AttributionData;
    /**
     * Returns the attribution share of the attribution data.
     * Example: 0.3
     */
    get attribution_share(): number;
    /**
     * Set the attribution share of the attribution data.
     * @param {Number} attribution_share Time that the campaign_id or fbc was first received
     */
    set attribution_share(attribution_share: number);
    /**
     * Set the attribution share of the attribution data.
     * @param {Number} attribution_share Time that the campaign_id or fbc was first received
     * @returns {AttributionData}
     */
    setAttributionShare(attribution_share: number): AttributionData;
    /**
     * Return the attribution model of the attribution data
     * Example: 'last-click'
     */
    get attribution_model(): typeof AttributionModel;
    /**
     * Set the attribution model of the attribution data.
     * @param {typeof AttributionModel} attribution_model Advertiser attribution model
     */
    set attribution_model(attribution_model: typeof AttributionModel);
    /**
     * Set the attribution model of the attribution data.
     * @param {String} attribution_model Advertiser attribution model
     * @returns {AttributionData}
     */
    setAttributionModel(attribution_model: typeof AttributionModel): AttributionData;
    /**
     * Return the attribution window of the attribution data
     * Example: 7
     */
    get attr_window(): number;
    /**
     * Set the attribution window of the attribution data.
     * @param {Number} attr_window Attribution window in days
     */
    set attr_window(attr_window: number);
    /**
     * Set the attribution window of the attribution data.
     * @param {Number} attr_window Attribution window in days
     * @returns {AttributionData}
     */
    setAttrWindow(attr_window: number): AttributionData;
    /**
    * Returns the normalized payload for the attribution data.
    * @returns {Object} normalized attribution data payload.
    */
    normalize(): Record<string, any>;
}
