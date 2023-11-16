import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * WhatsAppBusinessPreVerifiedPhoneNumber
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessPreVerifiedPhoneNumber extends AbstractCrudObject {
    static get Fields(): Readonly<{
        code_verification_status: "code_verification_status";
        code_verification_time: "code_verification_time";
        id: "id";
        owner_business: "owner_business";
        phone_number: "phone_number";
        verification_expiry_time: "verification_expiry_time";
    }>;
    static get CodeVerificationStatus(): Readonly<{
        expired: "EXPIRED";
        not_verified: "NOT_VERIFIED";
        verified: "VERIFIED";
    }>;
    getPartners(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createRequestCode(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createVerifyCode(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    delete(fields: Array<string>, params?: Record<any, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<any, any>): WhatsAppBusinessPreVerifiedPhoneNumber;
}
