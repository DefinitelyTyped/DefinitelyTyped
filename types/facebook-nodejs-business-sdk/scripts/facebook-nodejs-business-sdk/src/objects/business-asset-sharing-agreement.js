 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * BusinessAssetSharingAgreement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAssetSharingAgreement extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      initiator: 'initiator',
      recipient: 'recipient',
      relationship_type: 'relationship_type',
      request_status: 'request_status',
      request_type: 'request_type',
    });
  }

  static get RequestStatus () {
    return Object.freeze({
      approve: 'APPROVE',
      decline: 'DECLINE',
      expired: 'EXPIRED',
      in_progress: 'IN_PROGRESS',
      pending: 'PENDING',
      pending_email_verification: 'PENDING_EMAIL_VERIFICATION',
      pending_integrity_review: 'PENDING_INTEGRITY_REVIEW',
    });
  }


  get (fields: Array<string>, params: Object = {}): BusinessAssetSharingAgreement {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): BusinessAssetSharingAgreement {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
