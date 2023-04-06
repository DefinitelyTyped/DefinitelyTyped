import { AbstractCrudObject } from "./../abstract-crud-object";
export default class AdPreview extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AdFormat(): Record<string, any>;
    static get RenderType(): Record<string, any>;
}
