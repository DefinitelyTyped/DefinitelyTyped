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
 * ProductCatalogDataSource
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogDataSource extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_id: 'app_id',
      id: 'id',
      ingestion_source_type: 'ingestion_source_type',
      name: 'name',
      upload_type: 'upload_type',
    });
  }

  static get IngestionSourceType () {
    return Object.freeze({
      all: 'ALL',
      primary: 'PRIMARY',
      supplementary: 'SUPPLEMENTARY',
    });
  }
}
