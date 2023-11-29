import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRuleHistory
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleHistory extends AbstractCrudObject {
    static get Fields(): Readonly<{
        evaluation_spec: "evaluation_spec";
        exception_code: "exception_code";
        exception_message: "exception_message";
        execution_spec: "execution_spec";
        is_manual: "is_manual";
        results: "results";
        schedule_spec: "schedule_spec";
        timestamp: "timestamp";
    }>;
    static get Action(): Readonly<{
        budget_not_redistributed: "BUDGET_NOT_REDISTRIBUTED";
        changed_bid: "CHANGED_BID";
        changed_budget: "CHANGED_BUDGET";
        email: "EMAIL";
        enable_advantage_plus_creative: "ENABLE_ADVANTAGE_PLUS_CREATIVE";
        enable_autoflow: "ENABLE_AUTOFLOW";
        endpoint_pinged: "ENDPOINT_PINGED";
        error: "ERROR";
        facebook_notification_sent: "FACEBOOK_NOTIFICATION_SENT";
        message_sent: "MESSAGE_SENT";
        not_changed: "NOT_CHANGED";
        paused: "PAUSED";
        unpaused: "UNPAUSED";
    }>;
}
