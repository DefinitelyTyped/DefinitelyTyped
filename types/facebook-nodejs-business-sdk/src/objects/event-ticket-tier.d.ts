import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventTicketTier
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventTicketTier extends AbstractCrudObject {
    static get Fields(): Readonly<{
        currency: "currency";
        description: "description";
        end_sales_time: "end_sales_time";
        end_show_time: "end_show_time";
        fee_settings: "fee_settings";
        id: "id";
        maximum_quantity: "maximum_quantity";
        metadata: "metadata";
        minimum_quantity: "minimum_quantity";
        name: "name";
        price: "price";
        priority: "priority";
        retailer_id: "retailer_id";
        seating_map_image_url: "seating_map_image_url";
        start_sales_time: "start_sales_time";
        start_show_time: "start_show_time";
        status: "status";
        total_quantity: "total_quantity";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<EventTicketTier>;
}
