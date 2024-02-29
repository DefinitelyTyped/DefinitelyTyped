import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CustomUserSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomUserSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        page_level_persistent_menu: "page_level_persistent_menu";
        user_level_persistent_menu: "user_level_persistent_menu";
    }>;
}
