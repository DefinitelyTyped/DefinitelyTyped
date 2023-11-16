import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CustomAudienceGroup
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceGroup extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audience_type_param_name: "audience_type_param_name";
        existing_customer_tag: "existing_customer_tag";
        new_customer_tag: "new_customer_tag";
    }>;
}
