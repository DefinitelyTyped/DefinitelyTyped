import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MessengerCallPermissions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerCallPermissions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actions: "actions";
    }>;
}
