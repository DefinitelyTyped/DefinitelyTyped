import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * OpenGraphContext
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OpenGraphContext extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<OpenGraphContext>;
}
