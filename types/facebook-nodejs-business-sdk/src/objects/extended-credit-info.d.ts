import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExtendedCreditInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        credit_left: "credit_left";
        credit_revoked: "credit_revoked";
        credit_used: "credit_used";
        using_biz_ec: "using_biz_ec";
    }>;
}
