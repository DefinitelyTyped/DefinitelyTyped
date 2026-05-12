import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CTXDFOObjectiveDefaults
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CTXDFOObjectiveDefaults extends AbstractCrudObject {
    static get Fields(): Readonly<{
        objective: "objective";
        optimization_goal: "optimization_goal";
        page_id: "page_id";
    }>;
}
