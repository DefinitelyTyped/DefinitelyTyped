import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdColumnSizes
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdColumnSizes extends AbstractCrudObject {
    static get Fields(): Readonly<{
        admarket_account: "admarket_account";
        app_id: "app_id";
        columns: "columns";
        id: "id";
        owner: "owner";
        page: "page";
        report: "report";
        tab: "tab";
        view: "view";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdColumnSizes>;
}
