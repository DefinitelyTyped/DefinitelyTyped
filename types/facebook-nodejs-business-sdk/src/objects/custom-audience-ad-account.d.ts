import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CustomAudienceAdAccount
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceAdAccount extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
}
