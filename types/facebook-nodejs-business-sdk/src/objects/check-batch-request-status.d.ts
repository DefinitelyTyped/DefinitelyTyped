import { AbstractCrudObject } from "./../abstract-crud-object";
export default class CheckBatchRequestStatus extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ErrorPriority(): Record<string, any>;
}
