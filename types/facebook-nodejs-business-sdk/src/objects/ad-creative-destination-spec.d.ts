import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeDestinationSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeDestinationSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        destination_type: "destination_type";
    }>;
}
