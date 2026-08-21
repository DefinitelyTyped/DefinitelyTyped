import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AudienceFunnel
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudienceFunnel extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audience_type_param_name: "audience_type_param_name";
        audience_type_param_tags: "audience_type_param_tags";
        custom_audience_groups_info: "custom_audience_groups_info";
    }>;
}
