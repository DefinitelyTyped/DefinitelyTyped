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
 * DynamicARMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicARMetadata extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      anchor_point: 'anchor_point',
      container_effect_enum: 'container_effect_enum',
      effect_icon_url: 'effect_icon_url',
      effect_id: 'effect_id',
      id: 'id',
      platforms: 'platforms',
      scale_factor: 'scale_factor',
      shadow_texture_url: 'shadow_texture_url',
      source_url: 'source_url',
      state: 'state',
      tags: 'tags',
      variant_picker_url: 'variant_picker_url',
    });
  }



  get (fields: Array<string>, params: Object = {}): DynamicARMetadata {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
