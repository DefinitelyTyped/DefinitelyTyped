import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CTXPartnerAppWelcomeMessageFlow
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CTXPartnerAppWelcomeMessageFlow extends AbstractCrudObject {
    static get Fields(): Readonly<{
        compatible_platforms: "compatible_platforms";
        eligible_platforms: "eligible_platforms";
        id: "id";
        is_ig_only_flow: "is_ig_only_flow";
        is_used_in_ad: "is_used_in_ad";
        last_update_time: "last_update_time";
        name: "name";
        welcome_message_flow: "welcome_message_flow";
        welcome_message_sequence: "welcome_message_sequence";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CTXPartnerAppWelcomeMessageFlow>;
}
