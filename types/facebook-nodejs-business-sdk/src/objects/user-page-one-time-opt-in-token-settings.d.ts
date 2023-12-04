import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * UserPageOneTimeOptInTokenSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserPageOneTimeOptInTokenSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_timestamp: "creation_timestamp";
        next_eligible_time: "next_eligible_time";
        notification_messages_frequency: "notification_messages_frequency";
        notification_messages_reoptin: "notification_messages_reoptin";
        notification_messages_timezone: "notification_messages_timezone";
        notification_messages_token: "notification_messages_token";
        recipient_id: "recipient_id";
        token_expiry_timestamp: "token_expiry_timestamp";
        topic_title: "topic_title";
        user_token_status: "user_token_status";
        id: "id";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<UserPageOneTimeOptInTokenSettings>;
}
