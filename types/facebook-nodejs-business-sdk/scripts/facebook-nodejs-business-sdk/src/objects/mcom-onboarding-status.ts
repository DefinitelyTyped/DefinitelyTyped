import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * McomOnboardingStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class McomOnboardingStatus extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      onboarding_status: 'onboarding_status',
      page_id: 'page_id'
    });
  }

}