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
 * AdCreativeLinkDataImageLayerSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataImageLayerSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      blending_mode: 'blending_mode',
      content: 'content',
      frame_image_hash: 'frame_image_hash',
      frame_source: 'frame_source',
      image_source: 'image_source',
      layer_type: 'layer_type',
      opacity: 'opacity',
      overlay_position: 'overlay_position',
      overlay_shape: 'overlay_shape',
      scale: 'scale',
      shape_color: 'shape_color',
      text_color: 'text_color',
      text_font: 'text_font',
    });
  }

  static get BlendingMode () {
    return Object.freeze({
      lighten: 'lighten',
      multiply: 'multiply',
      normal: 'normal',
    });
  }
  static get FrameSource () {
    return Object.freeze({
      custom: 'custom',
    });
  }
  static get ImageSource () {
    return Object.freeze({
      catalog: 'catalog',
    });
  }
  static get LayerType () {
    return Object.freeze({
      frame_overlay: 'frame_overlay',
      image: 'image',
      text_overlay: 'text_overlay',
    });
  }
  static get OverlayPosition () {
    return Object.freeze({
      bottom: 'bottom',
      bottom_left: 'bottom_left',
      bottom_right: 'bottom_right',
      center: 'center',
      left: 'left',
      right: 'right',
      top: 'top',
      top_left: 'top_left',
      top_right: 'top_right',
    });
  }
  static get OverlayShape () {
    return Object.freeze({
      circle: 'circle',
      none: 'none',
      pill: 'pill',
      rectangle: 'rectangle',
      triangle: 'triangle',
    });
  }
  static get TextFont () {
    return Object.freeze({
      droid_serif_regular: 'droid_serif_regular',
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
}
