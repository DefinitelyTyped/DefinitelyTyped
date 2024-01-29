import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CanvasDynamicSetting
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CanvasDynamicSetting extends AbstractCrudObject {
    static get Fields(): Readonly<{
        child_documents: "child_documents";
        product_set_id: "product_set_id";
        id: "id";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<CanvasDynamicSetting>;
}
