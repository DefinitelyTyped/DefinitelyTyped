import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingRelaxation
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingRelaxation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        custom_audience: "custom_audience";
        lookalike: "lookalike";
    }>;
}
