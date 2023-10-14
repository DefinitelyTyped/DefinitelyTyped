import { AbstractCrudObject } from "./../abstract-crud-object";
export default class CustomConversionStatsResult extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Aggregation(): Record<string, any>;
}
