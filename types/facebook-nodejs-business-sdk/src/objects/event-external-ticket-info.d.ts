import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventExternalTicketInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventExternalTicketInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        max_sales_price: "max_sales_price";
        min_sales_price: "min_sales_price";
        sales_status: "sales_status";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<EventExternalTicketInfo>;
}
