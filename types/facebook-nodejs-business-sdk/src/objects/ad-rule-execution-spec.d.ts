import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRuleExecutionSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleExecutionSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        execution_options: "execution_options";
        execution_type: "execution_type";
        id: "id";
    }>;
    static get ExecutionType(): Readonly<{
        add_interest_relaxation: "ADD_INTEREST_RELAXATION";
        add_questionnaire_interests: "ADD_QUESTIONNAIRE_INTERESTS";
        audience_consolidation: "AUDIENCE_CONSOLIDATION";
        audience_consolidation_ask_first: "AUDIENCE_CONSOLIDATION_ASK_FIRST";
        change_bid: "CHANGE_BID";
        change_budget: "CHANGE_BUDGET";
        change_campaign_budget: "CHANGE_CAMPAIGN_BUDGET";
        increase_radius: "INCREASE_RADIUS";
        notification: "NOTIFICATION";
        pause: "PAUSE";
        ping_endpoint: "PING_ENDPOINT";
        rebalance_budget: "REBALANCE_BUDGET";
        rotate: "ROTATE";
        unpause: "UNPAUSE";
        update_creative: "UPDATE_CREATIVE";
        update_lax_budget: "UPDATE_LAX_BUDGET";
        update_lax_duration: "UPDATE_LAX_DURATION";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<AdRuleExecutionSpec>;
}
