import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhatsAppBusinessPartnerClientVerificationSubmission
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WhatsAppBusinessPartnerClientVerificationSubmission extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      client_business_id: 'client_business_id',
      id: 'id',
      rejection_reasons: 'rejection_reasons',
      submitted_info: 'submitted_info',
      submitted_time: 'submitted_time',
      update_time: 'update_time',
      verification_status: 'verification_status'
    });
  }

  static get RejectionReasons() {
    return Object.freeze({
      address_not_matching: 'ADDRESS_NOT_MATCHING',
      legal_name_not_matching: 'LEGAL_NAME_NOT_MATCHING',
      none: 'NONE',
      website_not_matching: 'WEBSITE_NOT_MATCHING'
    });
  }

  static get VerificationStatus() {
    return Object.freeze({
      approved: 'APPROVED',
      failed: 'FAILED',
      pending: 'PENDING',
      revoked: 'REVOKED'
    });
  }

}