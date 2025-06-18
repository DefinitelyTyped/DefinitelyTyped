import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * HotelRoom
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HotelRoom extends AbstractCrudObject {
    static get Fields(): Readonly<{
        applinks: "applinks";
        base_price: "base_price";
        currency: "currency";
        description: "description";
        id: "id";
        images: "images";
        margin_level: "margin_level";
        name: "name";
        room_id: "room_id";
        sale_price: "sale_price";
        url: "url";
    }>;
    getPricingVariables(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<HotelRoom>;
}
