import { AbstractCrudObject } from "./../abstract-crud-object";
export default class AdActivity extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get EventType(): Record<string, any>;
    static get Category(): Record<string, any>;
    static get DataSource(): Record<string, any>;
}
