// Type definitions for twit 2.2
// Project: https://github.com/ttezel/twit
// Definitions by: Volox <https://github.com/Volox>
//                 sapphiredev <https://github.com/sapphiredev>
//                 abraham <https://github.com/abraham>
//                 siwalik <https://github.com/siwalikm>
//                 plhery <https://github.com/plhery>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
/// <reference types="geojson" />

declare module 'twit' {
  import { IncomingMessage } from 'http';
  import { EventEmitter } from 'events';

  namespace Twit {
    export type StreamEndpoint = 'statuses/filter' | 'statuses/sample' | 'statuses/firehose' | 'user' | 'site';

    export namespace Twitter {
      export type ResultType = 'mixed' | 'popular' | 'recent';

      /**
       * @see https://dev.twitter.com/overview/api/tweets#obj-contributors
       */
      export interface Contributors {
        id: number,
        id_str: string,
        screen_name: string,
      }

      /**
       * @see https://dev.twitter.com/overview/api/entities
       */
      export interface HashtagEntity {
        indices: [number, number],
        text: string,
      }
      export interface Size {
        h: number,
        w: number,
        resize: 'crop' | 'fit',
      }
      export interface Sizes {
        thumb: Size,
        large: Size,
        medium: Size,
        small: Size,
      }
      export interface MediaEntity {
        id: number,
        id_str: string,
        indices: [number, number],
        url: string,
        display_url: string,
        expanded_url: string,
        media_url: string,
        media_url_https: string,
        sizes: Sizes,
        source_status_id: number,
        source_status_id_str: string,
        type: string,
      }
      export interface UrlEntity {
        url: string,
        display_url: string,
        expanded_url: string,
        indices: [number, number],
      }
      export interface UserMentionEntity {
        id: number,
        id_str: string,
        indices: [number, number],
        name: string,
        screen_name: string,
      }
      export interface Entities {
        hashtags: HashtagEntity[],
        media: MediaEntity[],
        urls: UrlEntity[],
        user_mentions: UserMentionEntity[],
      }

      /**
       * @see https://dev.twitter.com/overview/api/users
       */
      export interface User {
        contributors_enabled: boolean,
        created_at: string,
        default_profile: string,
        default_profile_image: string,
        description: string,
        entities: Entities,
        favourites_count: number,
        follow_request_sent?: boolean,
        following?: boolean,
        followers_count: number,
        friends_count: number,
        geo_enabled?: boolean,
        id: number,
        id_str: string,
        is_translator?: boolean,
        lang: string,
        listed_count: number,
        location: string,
        name: string,
        notifications?: boolean,
        profile_background_color: string,
        profile_background_image_url: string,
        profile_background_image_url_https: string,
        profile_background_tile: boolean,
        profile_banner_url: string,
        profile_image_url: string,
        profile_image_url_https: string,
        profile_link_color: string,
        profile_sidebar_border_color: string,
        profile_sidebar_fill_color: string,
        profile_text_color: string,
        profile_use_background_image: boolean,
        protected: boolean,
        screen_name: string,
        show_all_inline_media: boolean,
        status?: Status,
        statuses_count: number,
        time_zone?: string,
        url: string,
        utc_offset?: number,
        verified: boolean,
        withheld_in_countries: string,
        withheld_scope: string,
      }

      /**
       * @see https://dev.twitter.com/overview/api/places
       */
      export interface PlaceAttribute {
        street_address: string,
        locality: string,
        region: string,
        iso3: string,
        postal_code: string,
        phone: string,
        twitter: string,
        url: string,
        'app:id': string,
      }
      export interface Place {
        geometry: GeoJSON.Point,
        attributes: PlaceAttribute,
        bounding_box: GeoJSON.Polygon,
        contained_within: Place[],
        country: string,
        country_code: string,
        full_name: string,
        id: string,
        name: string,
        place_type: string,
        url: string,
      }

      /**
       * @see https://dev.twitter.com/overview/api/tweets
       */
      export interface Status {
        id: number,
        id_str: string,
        annotations?: Object,
        contributors?: Contributors[],
        coordinates?: GeoJSON.Point,
        created_at: string,
        current_user_retweet?: {
          id: number,
          id_str: string,
        },
        entities: Entities,
        favorite_count?: number,
        favorited?: boolean,
        filter_level: 'none' | 'low' | 'medium',
        geo?: Object,
        in_reply_to_screen_name?: string,
        in_reply_to_status_id?: number,
        in_reply_to_status_id_str?: string,
        in_reply_to_user_id?: number,
        in_reply_to_user_id_str?: string,
        lang?: string,
        place?: Place,
        possibly_sensitive?: boolean,
        quoted_status_id?: number,
        quoted_status_id_str?: string,
        quoted_status?: Status,
        scopes?: Object,
        retweet_count: number,
        retweeted: boolean,
        retweeted_status?: Status,
        source?: string,
        text?: string,
        full_text?: string,
        truncated: boolean,
        user: User,
        withheld_copyright?: boolean,
        withheld_in_countries?: string[],
        withheld_scope?: string,
        display_text_range?: [number, number],
      }
      export interface Metadata {
        max_id?: number,
        since_id?: number,
        refresh_url?: string,
        next_results?: string,
        count?: number,
        completed_in?: number,
        since_id_str?: string,
        query?: string,
        max_id_str?: string
      }

      export interface Errors {
        errors: {
          code: number
          message: string
        }[]
      }

      export interface SearchResults {
        statuses: Twitter.Status[],
        search_metadata: Twitter.Metadata,
      }
    }

    export type Response = object

    interface MediaParam {
      file_path: string
    }
    interface Params {
      // search/tweets
      q?: string,
      geocode?: string,
      lang?: string,
      locale?: string,
      result_type?: Twitter.ResultType,
      count?: number,
      results_per_page?: number,
      until?: string,
      since_id?: string,
      max_id?: string,
      include_entities?: boolean,

      // Other params from various endpoints
      track?: string | string[],
      media_id?: string,
      media_ids?: string[],
      alt_text?: {
        text?: string
      },
      media_data?: Buffer | string,
      screen_name?: string,
      id?: string,
      slug?: string,
      owner_screen_name?: string,
      status?: string,
      user_id?: number | string,
      lat?: number,
      long?: number,
      follow?: boolean | string,
      include_email?: boolean,
      cursor?: number | string,
      tweet_mode?: string,
      trim_user?: boolean,
      exclude_replies?: boolean,
      include_rts?: boolean,
      skip_status?: boolean,
      url?: string,
      include_user_entities?: boolean,
      stringify_ids?: boolean,
    }
    export interface PromiseResponse {
      data: Response,
      resp: IncomingMessage,
    }
    export interface Callback {
      (err: Error, result: Response, response: IncomingMessage): void
    }
    export interface ConfigKeys {
      consumer_key: string,
      consumer_secret: string,
      access_token?: string,
      access_token_secret?: string,
    }
    export interface Options extends ConfigKeys {
      app_only_auth?: boolean,
      timeout_ms?: number,
      trusted_cert_fingerprints?: string[],
      strictSSL?: boolean
    }
    export interface Stream extends EventEmitter {
      start(): void;
      stop(): void;
    }
  }

  class Twit {
    /**
     * @see https://github.com/ttezel/twit#var-t--new-twitconfig
     */
    constructor(config: Twit.Options);

    /**
     * @see https://github.com/ttezel/twit#tgetpath-params-callback
     */
    get(path: string, callback: Twit.Callback): void;
    get(path: string, params: Twit.Params, callback: Twit.Callback): void;
    get(path: string, params?: Twit.Params): Promise<Twit.PromiseResponse>;

    /**
     * @see https://github.com/ttezel/twit#tpostpath-params-callback
     */
    post(path: string, callback: Twit.Callback): void;
    post(path: string, params: Twit.Params, callback: Twit.Callback): void;
    post(path: string, params?: Twit.Params): Promise<Twit.PromiseResponse>;

    /**
     * @see https://github.com/ttezel/twit#tpostmediachunkedparams-callback
     */
    postMediaChunked(media: Twit.MediaParam, callback: Twit.Callback): void;

    /**
     * @see https://github.com/ttezel/twit#tgetauth
     */
    getAuth(): Twit.Options

    /**
     * @see https://github.com/ttezel/twit#tsetauthtokens
     */
    setAuth(tokens: Twit.ConfigKeys): void

    /**
     * @see https://github.com/ttezel/twit#tstreampath-params
     */
    stream(path: Twit.StreamEndpoint, params?: Twit.Params): Twit.Stream;
  }

  export = Twit;
}
