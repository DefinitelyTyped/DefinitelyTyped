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
 * AdCampaignMetricsMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignMetricsMetadata extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      boosted_component_optimization: 'boosted_component_optimization',
      creation_flow_tips: 'creation_flow_tips',
      default_opted_in_placements: 'default_opted_in_placements',
      delivery_growth_optimizations: 'delivery_growth_optimizations',
      duplication_flow_tips: 'duplication_flow_tips',
      edit_flow_tips: 'edit_flow_tips',
    });
  }

}
