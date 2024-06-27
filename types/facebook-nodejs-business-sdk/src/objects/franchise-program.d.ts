import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FranchiseProgram
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FranchiseProgram extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business_asset_group: "business_asset_group";
        creator_business: "creator_business";
        description: "description";
        end_date: "end_date";
        id: "id";
        name: "name";
        program_access_type: "program_access_type";
        program_approval_type: "program_approval_type";
        program_image_link: "program_image_link";
        program_url: "program_url";
        shared_custom_audience: "shared_custom_audience";
        start_date: "start_date";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): FranchiseProgram;
}
