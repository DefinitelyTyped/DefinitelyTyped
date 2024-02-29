import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AppRequestFormerRecipient
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppRequestFormerRecipient extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        recipient_id: "recipient_id";
    }>;
}
