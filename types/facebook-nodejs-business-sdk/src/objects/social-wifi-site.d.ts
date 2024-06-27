import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SocialWifiSite
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SocialWifiSite extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
}
