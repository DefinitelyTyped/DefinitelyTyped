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
 * LeadGenAppointmentBookingInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenAppointmentBookingInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      advertiser_timezone_offset: 'advertiser_timezone_offset',
      appointment_durations: 'appointment_durations',
      appointment_slots_by_day: 'appointment_slots_by_day',
    });
  }

}
