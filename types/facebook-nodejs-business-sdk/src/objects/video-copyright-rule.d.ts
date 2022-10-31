import { AbstractCrudObject } from './../abstract-crud-object';
export default class VideoCopyrightRule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Source(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<VideoCopyrightRule>;
}
