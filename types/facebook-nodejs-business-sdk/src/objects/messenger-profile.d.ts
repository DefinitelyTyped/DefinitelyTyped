import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * MessengerProfile
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerProfile extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_linking_url: "account_linking_url";
        get_started: "get_started";
        greeting: "greeting";
        ice_breakers: "ice_breakers";
        payment_settings: "payment_settings";
        persistent_menu: "persistent_menu";
        subject_to_new_eu_privacy_rules: "subject_to_new_eu_privacy_rules";
        target_audience: "target_audience";
        whitelisted_domains: "whitelisted_domains";
    }>;
}
