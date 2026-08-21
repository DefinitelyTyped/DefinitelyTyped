import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CTXOptimizationEligibility
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CTXOptimizationEligibility extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ctm: "ctm";
    }>;
}
