import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PlaceTag
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlaceTag extends AbstractCrudObject {
    static get Fields(): Readonly<{
        created_time: "created_time";
        id: "id";
        place: "place";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<PlaceTag>;
}
