import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
export default class ImageCopyright extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get GeoOwnership(): Record<string, any>;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<ImageCopyright>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<ImageCopyright>;
}
