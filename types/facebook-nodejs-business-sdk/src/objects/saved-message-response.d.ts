import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * SavedMessageResponse
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SavedMessageResponse extends AbstractCrudObject {
    static get Fields(): Readonly<{
        category: "category";
        id: "id";
        image: "image";
        is_enabled: "is_enabled";
        message: "message";
        title: "title";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<SavedMessageResponse>;
}
