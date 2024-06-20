import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CanvasTemplate

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CanvasTemplate extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CanvasTemplate>;
}
