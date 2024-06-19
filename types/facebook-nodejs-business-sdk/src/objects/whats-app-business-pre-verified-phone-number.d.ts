import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * WhatsAppBusinessPreVerifiedPhoneNumber
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessPreVerifiedPhoneNumber extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CodeVerificationStatus(): Record<string, any>;
    getPartners(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createRequestCode(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    createVerifyCode(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): WhatsAppBusinessPreVerifiedPhoneNumber;
}
