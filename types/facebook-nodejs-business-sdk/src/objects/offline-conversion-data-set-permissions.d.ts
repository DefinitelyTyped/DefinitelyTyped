import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * OfflineConversionDataSetPermissions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSetPermissions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_edit: "can_edit";
        can_edit_or_upload: "can_edit_or_upload";
        can_upload: "can_upload";
        should_block_vanilla_business_employee_access: "should_block_vanilla_business_employee_access";
    }>;
}
