import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventRegistrationSetting
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventRegistrationSetting extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        questions: "questions";
        target_type: "target_type";
        ticket_tier_ids: "ticket_tier_ids";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<EventRegistrationSetting>;
}
