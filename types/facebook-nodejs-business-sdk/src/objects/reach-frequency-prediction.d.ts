import { AbstractCrudObject } from './../abstract-crud-object';
export default class ReachFrequencyPrediction extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Action(): Record<string, any>;
    static get BuyingType(): Record<string, any>;
    static get InstreamPackages(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ReachFrequencyPrediction>;
}
