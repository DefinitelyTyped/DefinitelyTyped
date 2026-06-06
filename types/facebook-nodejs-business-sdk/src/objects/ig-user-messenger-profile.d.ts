import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGUserMessengerProfile
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUserMessengerProfile extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ice_breakers: "ice_breakers";
        persistent_menu: "persistent_menu";
    }>;
}
