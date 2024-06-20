import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * WhatsAppBusinessPreVerifiedPhoneNumber
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessPreVerifiedPhoneNumber extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CodeVerificationStatus(): Record<string, any>;
    getPartners(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createRequestCode(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createVerifyCode(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<WhatsAppBusinessPreVerifiedPhoneNumber>;
}
