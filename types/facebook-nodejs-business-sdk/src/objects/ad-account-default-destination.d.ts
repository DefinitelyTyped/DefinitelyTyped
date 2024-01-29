import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAccountDefaultDestination
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountDefaultDestination extends AbstractCrudObject {
    static get Fields(): Readonly<{
        destination_id: "destination_id";
        destination_url: "destination_url";
    }>;
}
