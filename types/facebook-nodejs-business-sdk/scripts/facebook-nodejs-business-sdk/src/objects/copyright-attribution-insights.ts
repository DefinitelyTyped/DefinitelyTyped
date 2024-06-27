import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CopyrightAttributionInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CopyrightAttributionInsights extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      l7_attribution_page_view: 'l7_attribution_page_view',
      l7_attribution_page_view_delta: 'l7_attribution_page_view_delta',
      l7_attribution_video_view: 'l7_attribution_video_view',
      l7_attribution_video_view_delta: 'l7_attribution_video_view_delta',
      metrics_ending_date: 'metrics_ending_date'
    });
  }

}