import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomAudienceSalts
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceSalts extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_id: "app_id";
        public_key: "public_key";
    }>;
}
