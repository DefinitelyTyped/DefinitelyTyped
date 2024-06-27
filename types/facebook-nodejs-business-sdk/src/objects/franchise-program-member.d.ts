import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FranchiseProgramMember
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FranchiseProgramMember extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        end_date: "end_date";
        id: "id";
        join_date: "join_date";
        member_ad_account: "member_ad_account";
        member_user: "member_user";
        membership_status: "membership_status";
        page: "page";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): FranchiseProgramMember;
}
