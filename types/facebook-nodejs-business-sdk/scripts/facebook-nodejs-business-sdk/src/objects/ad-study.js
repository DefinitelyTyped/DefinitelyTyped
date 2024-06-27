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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdStudyCell from './ad-study-cell';
import PrivateLiftStudyInstance from './private-lift-study-instance';
import AdStudyObjective from './ad-study-objective';

/**
 * AdStudy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudy extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      canceled_time: 'canceled_time',
      client_business: 'client_business',
      cooldown_start_time: 'cooldown_start_time',
      created_by: 'created_by',
      created_time: 'created_time',
      description: 'description',
      end_time: 'end_time',
      id: 'id',
      measurement_contact: 'measurement_contact',
      name: 'name',
      observation_end_time: 'observation_end_time',
      results_first_available_date: 'results_first_available_date',
      sales_contact: 'sales_contact',
      start_time: 'start_time',
      type: 'type',
      updated_by: 'updated_by',
      updated_time: 'updated_time',
    });
  }

  static get Type () {
    return Object.freeze({
      backend_ab_testing: 'BACKEND_AB_TESTING',
      continuous_lift_config: 'CONTINUOUS_LIFT_CONFIG',
      geo_lift: 'GEO_LIFT',
      lift: 'LIFT',
      split_test: 'SPLIT_TEST',
    });
  }

  getCells (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdStudyCell,
      fields,
      params,
      fetchFirstPage,
      '/cells'
    );
  }

  createCheckPoint (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdStudy> {
    return this.createEdge(
      '/checkpoint',
      fields,
      params,
      AdStudy,
      pathOverride,
    );
  }

  getInstances (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PrivateLiftStudyInstance,
      fields,
      params,
      fetchFirstPage,
      '/instances'
    );
  }

  createInstance (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<PrivateLiftStudyInstance> {
    return this.createEdge(
      '/instances',
      fields,
      params,
      PrivateLiftStudyInstance,
      pathOverride,
    );
  }

  getObjectives (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdStudyObjective,
      fields,
      params,
      fetchFirstPage,
      '/objectives'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): AdStudy {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): AdStudy {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
