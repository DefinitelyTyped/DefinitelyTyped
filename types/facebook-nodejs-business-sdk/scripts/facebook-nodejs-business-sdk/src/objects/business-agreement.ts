import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessAgreement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BusinessAgreement extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      request_status: 'request_status'
    });
  }

  static get RequestStatus() {
    return Object.freeze({
      approve: 'APPROVE',
      decline: 'DECLINE',
      expired: 'EXPIRED',
      in_progress: 'IN_PROGRESS',
      pending: 'PENDING',
      pending_email_verification: 'PENDING_EMAIL_VERIFICATION',
      pending_integrity_review: 'PENDING_INTEGRITY_REVIEW'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): BusinessAgreement {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): BusinessAgreement {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}