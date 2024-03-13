import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * OffsitePixel
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OffsitePixel extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creator: "creator";
        id: "id";
        js_pixel: "js_pixel";
        last_firing_time: "last_firing_time";
        name: "name";
        tag: "tag";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<OffsitePixel>;
}
