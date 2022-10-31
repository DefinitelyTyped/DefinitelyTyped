import { AbstractCrudObject } from './../abstract-crud-object';
export default class CopyrightAudioAsset extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<CopyrightAudioAsset>;
}
