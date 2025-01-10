import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PrivacyOption
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PrivacyOption extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        icon_src: "icon_src";
        id: "id";
        is_currently_selected: "is_currently_selected";
        type: "type";
        user_id: "user_id";
    }>;
}
