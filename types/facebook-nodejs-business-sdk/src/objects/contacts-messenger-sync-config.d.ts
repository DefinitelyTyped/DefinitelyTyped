import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ContactsMessengerSyncConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ContactsMessengerSyncConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        enabled: "enabled";
    }>;
}
