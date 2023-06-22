// Type definitions for non-npm package Google gtag.js API
// Project: https://developers.google.com/gtagjs
// Definitions by:  Junyoung Choi <https://github.com/rokt33r>
//                  Lucas Akira Uehara <https://github.com/KsAkira10>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var gtag: Gtag.Gtag;
declare namespace Gtag {
  interface Gtag {
    (command: 'config', targetId: string, config?: ControlParams | EventParams | ConfigParams | CustomParams): void;
    (command: 'set', targetId: string, config: CustomParams | boolean | string): void;
    (command: 'set', config: CustomParams): void;
    (command: 'js', config: Date): void;
    (
      command: 'event',
      eventName: EventNames | (string & {}),
      eventParams?: ControlParams | EventParams | CustomParams,
    ): void;
    (command: 'get', targetId: string, fieldName: FieldNames | string, callback?: (field: string | CustomParams | undefined) => any): void;
    (command: 'consent', consentArg: ConsentArg | string, consentParams: ConsentParams): void;
  }

  interface ConfigParams {
    page_title?: string | undefined;
    page_location?: string | undefined;
    page_path?: string | undefined;
    send_page_view?: boolean | undefined;
  }

  interface CustomParams {
    [key: string]: any;
  }

  interface ControlParams {
    groups?: string | string[] | undefined;
    send_to?: string | string[] | undefined;
    event_callback?: (() => void) | undefined;
    event_timeout?: number | undefined;
  }

  type EventNames =
    | 'add_payment_info'
    | 'add_shipping_info'
    | 'add_to_cart'
    | 'add_to_wishlist'
    | 'begin_checkout'
    | 'checkout_progress'
    | 'earn_virtual_currency'
    | 'exception'
    | 'generate_lead'
    | 'join_group'
    | 'level_end'
    | 'level_start'
    | 'level_up'
    | 'login'
    | 'page_view'
    | 'post_score'
    | 'purchase'
    | 'refund'
    | 'remove_from_cart'
    | 'screen_view'
    | 'search'
    | 'select_content'
    | 'select_item'
    | 'select_promotion'
    | 'set_checkout_option'
    | 'share'
    | 'sign_up'
    | 'spend_virtual_currency'
    | 'tutorial_begin'
    | 'tutorial_complete'
    | 'unlock_achievement'
    | 'timing_complete'
    | 'view_cart'
    | 'view_item'
    | 'view_item_list'
    | 'view_promotion'
    | 'view_search_results';

  interface EventParams {
    checkout_option?: string | undefined;
    checkout_step?: number | undefined;
    content_id?: string | undefined;
    content_type?: string | undefined;
    coupon?: string | undefined;
    currency?: string | undefined;
    description?: string | undefined;
    fatal?: boolean | undefined;
    items?: Item[] | undefined;
    method?: string | undefined;
    number?: string | undefined;
    promotions?: Promotion[] | undefined;
    screen_name?: string | undefined;
    search_term?: string | undefined;
    shipping?: Currency | undefined;
    tax?: Currency | undefined;
    transaction_id?: string | undefined;
    value?: number | undefined;
    event_label?: string | undefined;
    event_category?: string | undefined;
  }

  type Currency = string | number;

  /**
   * Interface of an item object used in lists for this event.
   *
   * Reference:
   * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_item view_item_item}
   * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_list_item view_item_list_item}
   * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_item_item select_item_item}
   * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_cart_item add_to_cart_item}
   * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_cart_item view_cart_item}
   */
  interface Item {
    item_id?: string | undefined;
    item_name?: string | undefined;
    affiliation?: string | undefined;
    coupon?: string | undefined;
    currency?: string | undefined;
    creative_name?: string | undefined;
    creative_slot?: string | undefined;
    discount?: Currency | undefined;
    index?: number | undefined;
    item_brand?: string | undefined;
    item_category?: string | undefined;
    item_category2?: string | undefined;
    item_category3?: string | undefined;
    item_category4?: string | undefined;
    item_category5?: string | undefined;
    item_list_id?: string | undefined;
    item_list_name?: string | undefined;
    item_variant?: string | undefined;
    location_id?: string | undefined;
    price?: Currency | undefined;
    promotion_id?: string | undefined;
    promotion_name?: string | undefined;
    quantity?: number | undefined;
  }

  interface Promotion {
    creative_name?: string | undefined;
    creative_slot?: string | undefined;
    promotion_id?: string | undefined;
    promotion_name?: string | undefined;
  }

  type FieldNames = 'client_id' | 'session_id' | 'gclid';

  type ConsentArg = 'default' | 'update';
  interface ConsentParams {
    ad_storage?: 'granted' | 'denied' | undefined;
    analytics_storage?: 'granted' | 'denied' | undefined;
    wait_for_update?: number | undefined;
    region?: string[] | undefined;
  }
}
