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
 * AdCreativeVideoDataCustomOverlaySpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeVideoDataCustomOverlaySpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      background_color: 'background_color',
      background_opacity: 'background_opacity',
      duration: 'duration',
      float_with_margin: 'float_with_margin',
      full_width: 'full_width',
      option: 'option',
      position: 'position',
      start: 'start',
      template: 'template',
      text_color: 'text_color',
    });
  }

  static get BackgroundOpacity () {
    return Object.freeze({
      half: 'half',
      solid: 'solid',
    });
  }
  static get Option () {
    return Object.freeze({
      bank_transfer: 'bank_transfer',
      boleto: 'boleto',
      cash_on_delivery: 'cash_on_delivery',
      discount_with_boleto: 'discount_with_boleto',
      fast_delivery: 'fast_delivery',
      free_shipping: 'free_shipping',
      home_delivery: 'home_delivery',
      inventory: 'inventory',
      pay_at_hotel: 'pay_at_hotel',
      pay_on_arrival: 'pay_on_arrival',
    });
  }
  static get Position () {
    return Object.freeze({
      middle_center: 'middle_center',
      middle_left: 'middle_left',
      middle_right: 'middle_right',
      top_center: 'top_center',
      top_left: 'top_left',
      top_right: 'top_right',
    });
  }
  static get Template () {
    return Object.freeze({
      rectangle_with_text: 'rectangle_with_text',
    });
  }
}
