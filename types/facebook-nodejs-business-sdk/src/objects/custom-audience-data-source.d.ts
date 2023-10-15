import { AbstractCrudObject } from "./../abstract-crud-object";
export default class CustomAudienceDataSource extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get SubType(): Record<string, any>;
    static get Type(): Record<string, any>;
}
