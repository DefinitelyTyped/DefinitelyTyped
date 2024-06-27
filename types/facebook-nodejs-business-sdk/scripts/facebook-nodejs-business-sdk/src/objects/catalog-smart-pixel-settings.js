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
 * CatalogSmartPixelSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogSmartPixelSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      allowed_domains: 'allowed_domains',
      available_property_filters: 'available_property_filters',
      catalog: 'catalog',
      cbb_custom_override_filters: 'cbb_custom_override_filters',
      cbb_default_filter: 'cbb_default_filter',
      cbb_default_filter_crawl_params: 'cbb_default_filter_crawl_params',
      cbb_override_type_field_mapping: 'cbb_override_type_field_mapping',
      defaults: 'defaults',
      filters: 'filters',
      id: 'id',
      is_cbb_enabled: 'is_cbb_enabled',
      is_create_enabled: 'is_create_enabled',
      is_delete_enabled: 'is_delete_enabled',
      is_update_enabled: 'is_update_enabled',
      microdata_format_precedence: 'microdata_format_precedence',
      pixel: 'pixel',
      property_filter: 'property_filter',
      retention_time_sec: 'retention_time_sec',
      trusted_domains: 'trusted_domains',
    });
  }



  get (fields: Array<string>, params: Object = {}): CatalogSmartPixelSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
