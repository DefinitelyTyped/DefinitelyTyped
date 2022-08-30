import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

// tslint:disable-next-line:no-empty-interface
export default interface Model extends Observable {}

export default class Model implements Observable {
    constructor(attributes?: Record<string, unknown>, properties?: Record<string, unknown>);
    readonly [x: string]: any;
}
