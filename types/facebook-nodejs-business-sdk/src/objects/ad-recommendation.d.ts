import { AbstractCrudObject } from "./../abstract-crud-object";
export default class AdRecommendation extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Confidence(): Record<string, any>;
    static get Importance(): Record<string, any>;
}
