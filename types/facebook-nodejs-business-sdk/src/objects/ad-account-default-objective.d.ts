import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountDefaultObjective
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountDefaultObjective extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get DefaultObjectiveForUser(): Record<string, any>;
    static get ObjectiveForLevel(): Record<string, any>;
}
