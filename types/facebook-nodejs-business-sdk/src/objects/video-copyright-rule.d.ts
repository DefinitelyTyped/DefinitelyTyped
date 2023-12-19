import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * VideoCopyrightRule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightRule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        condition_groups: "condition_groups";
        copyrights: "copyrights";
        created_date: "created_date";
        creator: "creator";
        id: "id";
        is_in_migration: "is_in_migration";
        name: "name";
    }>;
    static get Source(): Readonly<{
        match_settings_dialog: "MATCH_SETTINGS_DIALOG";
        rules_selector: "RULES_SELECTOR";
        rules_tab: "RULES_TAB";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<VideoCopyrightRule>;
}
