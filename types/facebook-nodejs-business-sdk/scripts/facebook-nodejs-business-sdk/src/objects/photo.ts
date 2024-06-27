import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import Comment from "./comment";
import InsightsResult from "./insights-result";
import Profile from "./profile";
import Page from "./page";
/**
 * Photo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Photo extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      album: 'album',
      alt_text: 'alt_text',
      alt_text_custom: 'alt_text_custom',
      backdated_time: 'backdated_time',
      backdated_time_granularity: 'backdated_time_granularity',
      can_backdate: 'can_backdate',
      can_delete: 'can_delete',
      can_tag: 'can_tag',
      created_time: 'created_time',
      event: 'event',
      from: 'from',
      height: 'height',
      icon: 'icon',
      id: 'id',
      images: 'images',
      link: 'link',
      name: 'name',
      name_tags: 'name_tags',
      page_story_id: 'page_story_id',
      picture: 'picture',
      place: 'place',
      position: 'position',
      source: 'source',
      target: 'target',
      updated_time: 'updated_time',
      webp_images: 'webp_images',
      width: 'width'
    });
  }

  static get BackdatedTimeGranularity() {
    return Object.freeze({
      day: 'day',
      hour: 'hour',
      min: 'min',
      month: 'month',
      none: 'none',
      year: 'year'
    });
  }

  static get UnpublishedContentType() {
    return Object.freeze({
      ads_post: 'ADS_POST',
      draft: 'DRAFT',
      inline_created: 'INLINE_CREATED',
      published: 'PUBLISHED',
      reviewable_branded_content: 'REVIEWABLE_BRANDED_CONTENT',
      scheduled: 'SCHEDULED',
      scheduled_recurring: 'SCHEDULED_RECURRING'
    });
  }

  static get Type() {
    return Object.freeze({
      profile: 'profile',
      tagged: 'tagged',
      uploaded: 'uploaded'
    });
  }

  getComments(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Comment, fields, params, fetchFirstPage, '/comments');
  }

  createComment(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<Comment> {
    return this.createEdge('/comments', fields, params, Comment, pathOverride);
  }

  getInsights(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(InsightsResult, fields, params, fetchFirstPage, '/insights');
  }

  getLikes(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Profile, fields, params, fetchFirstPage, '/likes');
  }

  createLike(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<Photo> {
    return this.createEdge('/likes', fields, params, Photo, pathOverride);
  }

  getSponsorTags(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Page, fields, params, fetchFirstPage, '/sponsor_tags');
  }

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): Photo {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}