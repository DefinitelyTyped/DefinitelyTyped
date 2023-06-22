import { AbstractCrudObject } from "./../abstract-crud-object";
export default class InsightsResult extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get DatePreset(): Record<string, any>;
    static get Period(): Record<string, any>;
}
