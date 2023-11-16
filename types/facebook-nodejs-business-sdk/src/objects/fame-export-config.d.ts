import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * FAMEExportConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FAMEExportConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_edit: "can_edit";
        column_id: "column_id";
        display_name: "display_name";
        format: "format";
    }>;
}
