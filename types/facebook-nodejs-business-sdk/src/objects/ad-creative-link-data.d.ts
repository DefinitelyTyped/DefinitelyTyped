import { AbstractCrudObject } from "./../abstract-crud-object";
export default class AdCreativeLinkData extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AttachmentStyle(): Record<string, any>;
    static get FormatOption(): Record<string, any>;
}
