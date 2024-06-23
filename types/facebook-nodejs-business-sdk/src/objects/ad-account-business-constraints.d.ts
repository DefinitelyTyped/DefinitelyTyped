import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAccountBusinessConstraints
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountBusinessConstraints extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audience_controls: "audience_controls";
        placement_controls: "placement_controls";
    }>;
}
