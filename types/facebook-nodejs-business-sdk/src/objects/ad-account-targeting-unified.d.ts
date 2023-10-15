import { AbstractCrudObject } from "./../abstract-crud-object";
export default class AdAccountTargetingUnified extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get LimitType(): Record<string, any>;
    static get RegulatedCategories(): Record<string, any>;
    static get WhitelistedTypes(): Record<string, any>;
    static get AppStore(): Record<string, any>;
    static get Objective(): Record<string, any>;
    static get Mode(): Record<string, any>;
}
