import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountBusinessConstraints
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountBusinessConstraints extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      audience_controls: 'audience_controls',
      campaigns_with_error: 'campaigns_with_error',
      placement_controls: 'placement_controls',
      status: 'status'
    });
  }

  static get Status() {
    return Object.freeze({
      active: 'ACTIVE',
      application_in_progress: 'APPLICATION_IN_PROGRESS',
      with_campaign_error: 'WITH_CAMPAIGN_ERROR'
    });
  }

}