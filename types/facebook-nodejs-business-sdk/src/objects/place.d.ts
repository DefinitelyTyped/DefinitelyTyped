import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * Place
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Place extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        location: "location";
        name: "name";
        overall_rating: "overall_rating";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<Place>;
}
