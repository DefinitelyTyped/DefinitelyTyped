import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * OffsiteSignalContainerBusinessObject

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OffsiteSignalContainerBusinessObject extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getLinkedApplication(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLinkedPage(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<OffsiteSignalContainerBusinessObject>;
}
