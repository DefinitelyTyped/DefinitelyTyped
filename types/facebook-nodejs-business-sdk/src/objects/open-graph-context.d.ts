import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * OpenGraphContext
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OpenGraphContext extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
    get(fields: Array<string>, params?: Record<any, any>): OpenGraphContext;
}
