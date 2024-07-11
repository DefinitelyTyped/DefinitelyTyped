import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserNotificationSeenStateData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserNotificationSeenStateData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        seen_state: "seen_state";
    }>;
}
