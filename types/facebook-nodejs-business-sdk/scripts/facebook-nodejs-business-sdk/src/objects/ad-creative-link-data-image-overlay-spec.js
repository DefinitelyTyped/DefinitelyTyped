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
 * AdCreativeLinkDataImageOverlaySpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataImageOverlaySpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      custom_text_type: 'custom_text_type',
      float_with_margin: 'float_with_margin',
      overlay_template: 'overlay_template',
      position: 'position',
      text_font: 'text_font',
      text_template_tags: 'text_template_tags',
      text_type: 'text_type',
      theme_color: 'theme_color',
    });
  }

  static get CustomTextType () {
    return Object.freeze({
      free_shipping: 'free_shipping',
      popular: 'popular',
    });
  }
  static get OverlayTemplate () {
    return Object.freeze({
      circle_with_text: 'circle_with_text',
      pill_with_text: 'pill_with_text',
      triangle_with_text: 'triangle_with_text',
    });
  }
  static get Position () {
    return Object.freeze({
      bottom_left: 'bottom_left',
      bottom_right: 'bottom_right',
      top_left: 'top_left',
      top_right: 'top_right',
    });
  }
  static get TextFont () {
    return Object.freeze({
      droid_serif_regular: 'droid_serif_regular',
      dynads_hybrid_bold: 'dynads_hybrid_bold',
      lato_regular: 'lato_regular',
      noto_sans_regular: 'noto_sans_regular',
      nunito_sans_bold: 'nunito_sans_bold',
      open_sans_bold: 'open_sans_bold',
      open_sans_condensed_bold: 'open_sans_condensed_bold',
      pt_serif_bold: 'pt_serif_bold',
      roboto_condensed_regular: 'roboto_condensed_regular',
      roboto_medium: 'roboto_medium',
    });
  }
  static get TextType () {
    return Object.freeze({
      automated_personalize: 'automated_personalize',
      custom: 'custom',
      disclaimer: 'disclaimer',
      from_price: 'from_price',
      guest_rating: 'guest_rating',
      percentage_off: 'percentage_off',
      price: 'price',
      star_rating: 'star_rating',
      strikethrough_price: 'strikethrough_price',
      sustainable: 'sustainable',
    });
  }
  static get ThemeColor () {
    return Object.freeze({
      background_000000_text_ffffff: 'background_000000_text_ffffff',
      background_0090ff_text_ffffff: 'background_0090ff_text_ffffff',
      background_00af4c_text_ffffff: 'background_00af4c_text_ffffff',
      background_595959_text_ffffff: 'background_595959_text_ffffff',
      background_755dde_text_ffffff: 'background_755dde_text_ffffff',
      background_e50900_text_ffffff: 'background_e50900_text_ffffff',
      background_f23474_text_ffffff: 'background_f23474_text_ffffff',
      background_f78400_text_ffffff: 'background_f78400_text_ffffff',
      background_ffffff_text_000000: 'background_ffffff_text_000000',
      background_ffffff_text_007ad0: 'background_ffffff_text_007ad0',
      background_ffffff_text_009c2a: 'background_ffffff_text_009c2a',
      background_ffffff_text_646464: 'background_ffffff_text_646464',
      background_ffffff_text_755dde: 'background_ffffff_text_755dde',
      background_ffffff_text_c91b00: 'background_ffffff_text_c91b00',
      background_ffffff_text_f23474: 'background_ffffff_text_f23474',
      background_ffffff_text_f78400: 'background_ffffff_text_f78400',
    });
  }
}
