import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * OffsiteSignalContainerBusinessObject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OffsiteSignalContainerBusinessObject extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getLinkedApplication(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLinkedPage(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): OffsiteSignalContainerBusinessObject;
}
