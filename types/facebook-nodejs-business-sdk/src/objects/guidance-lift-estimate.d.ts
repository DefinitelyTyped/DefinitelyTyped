import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * GuidanceLiftEstimate
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GuidanceLiftEstimate extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actual_7d_cpr: "actual_7d_cpr";
        adoption_date: "adoption_date";
        guidance_name: "guidance_name";
        lift_estimation: "lift_estimation";
        predicted_7d_cpr: "predicted_7d_cpr";
    }>;
}
