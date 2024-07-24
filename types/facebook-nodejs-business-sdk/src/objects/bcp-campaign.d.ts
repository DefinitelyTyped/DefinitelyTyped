import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BCPCampaign
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BCPCampaign extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ads_permission_required: "ads_permission_required";
        application_deadline: "application_deadline";
        campaign_goal: "campaign_goal";
        campaign_goal_other: "campaign_goal_other";
        content_delivery_deadline: "content_delivery_deadline";
        content_delivery_start_date: "content_delivery_start_date";
        content_requirements: "content_requirements";
        content_requirements_description: "content_requirements_description";
        currency: "currency";
        deal_negotiation_type: "deal_negotiation_type";
        description: "description";
        has_free_product: "has_free_product";
        id: "id";
        name: "name";
        payment_amount_for_ads: "payment_amount_for_ads";
        payment_amount_for_content: "payment_amount_for_content";
        payment_description: "payment_description";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<BCPCampaign>;
}
