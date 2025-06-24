import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CTXDefaultOptimizationConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CTXDefaultOptimizationConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        objective: "objective";
        optimization_goal: "optimization_goal";
    }>;
}
