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
import Cursor from './../cursor';
import NullNode from './null-node';
import LiveVideo from './live-video';
import Profile from './profile';
import EventTicketTier from './event-ticket-tier';

/**
 * Event
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Event extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      attending_count: 'attending_count',
      can_guests_invite: 'can_guests_invite',
      category: 'category',
      cover: 'cover',
      created_time: 'created_time',
      declined_count: 'declined_count',
      description: 'description',
      discount_code_enabled: 'discount_code_enabled',
      end_time: 'end_time',
      event_times: 'event_times',
      guest_list_enabled: 'guest_list_enabled',
      id: 'id',
      interested_count: 'interested_count',
      is_canceled: 'is_canceled',
      is_draft: 'is_draft',
      is_online: 'is_online',
      is_page_owned: 'is_page_owned',
      maybe_count: 'maybe_count',
      name: 'name',
      noreply_count: 'noreply_count',
      online_event_format: 'online_event_format',
      online_event_third_party_url: 'online_event_third_party_url',
      owner: 'owner',
      parent_group: 'parent_group',
      place: 'place',
      registration_setting: 'registration_setting',
      scheduled_publish_time: 'scheduled_publish_time',
      start_time: 'start_time',
      ticket_setting: 'ticket_setting',
      ticket_uri: 'ticket_uri',
      ticket_uri_start_sales_time: 'ticket_uri_start_sales_time',
      ticketing_privacy_uri: 'ticketing_privacy_uri',
      ticketing_terms_uri: 'ticketing_terms_uri',
      timezone: 'timezone',
      type: 'type',
      updated_time: 'updated_time',
    });
  }

  static get Category () {
    return Object.freeze({
      classic_literature: 'CLASSIC_LITERATURE',
      comedy: 'COMEDY',
      crafts: 'CRAFTS',
      dance: 'DANCE',
      drinks: 'DRINKS',
      fitness_and_workouts: 'FITNESS_AND_WORKOUTS',
      foods: 'FOODS',
      games: 'GAMES',
      gardening: 'GARDENING',
      healthy_living_and_self_care: 'HEALTHY_LIVING_AND_SELF_CARE',
      health_and_medical: 'HEALTH_AND_MEDICAL',
      home_and_garden: 'HOME_AND_GARDEN',
      music_and_audio: 'MUSIC_AND_AUDIO',
      parties: 'PARTIES',
      professional_networking: 'PROFESSIONAL_NETWORKING',
      religions: 'RELIGIONS',
      shopping_event: 'SHOPPING_EVENT',
      social_issues: 'SOCIAL_ISSUES',
      sports: 'SPORTS',
      theater: 'THEATER',
      tv_and_movies: 'TV_AND_MOVIES',
      visual_arts: 'VISUAL_ARTS',
    });
  }
  static get OnlineEventFormat () {
    return Object.freeze({
      fb_live: 'fb_live',
      messenger_room: 'messenger_room',
      none: 'none',
      other: 'other',
      third_party: 'third_party',
    });
  }
  static get Type () {
    return Object.freeze({
      community: 'community',
      friends: 'friends',
      group: 'group',
      private: 'private',
      public: 'public',
      work_company: 'work_company',
    });
  }
  static get EventStateFilter () {
    return Object.freeze({
      canceled: 'canceled',
      draft: 'draft',
      published: 'published',
      scheduled_draft_for_publication: 'scheduled_draft_for_publication',
    });
  }
  static get TimeFilter () {
    return Object.freeze({
      past: 'past',
      upcoming: 'upcoming',
    });
  }

  getComments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  getFeed (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/feed'
    );
  }

  getLiveVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/live_videos'
    );
  }

  createLiveVideo (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<LiveVideo> {
    return this.createEdge(
      '/live_videos',
      fields,
      params,
      LiveVideo,
      pathOverride,
    );
  }

  getPhotos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/photos'
    );
  }

  getPicture (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/posts'
    );
  }

  getRoles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/roles'
    );
  }

  getTicketTiers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      EventTicketTier,
      fields,
      params,
      fetchFirstPage,
      '/ticket_tiers'
    );
  }

  getVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }


  get (fields: Array<string>, params: Object = {}): Event {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
