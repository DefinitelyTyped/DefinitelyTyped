// Type definitions for non-npm package Google gtag.js API
// Project: https://developers.google.com/gtagjs
// Definitions by:  Junyoung Choi <https://github.com/rokt33r>
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
      eventName: EventNames | string,
      eventParams?: ControlParams | EventParams | CustomParams,
    ): void;
    (command: 'get', targetId: string, fieldName: FieldNames | string, callback?: (field: string) => any): void;
    (command: 'consent', consentArg: ConsentArg | string, consentParams: ConsentParams): void;
  }

  interface ConfigParams {
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
    | 'add_to_cart'
    | 'add_to_wishlist'
    | 'begin_checkout'
    | 'checkout_progress'
    | 'exception'
    | 'generate_lead'
    | 'login'
    | 'page_view'
    | 'purchase'
    | 'refund'
    | 'remove_from_cart'
    | 'screen_view'
    | 'search'
    | 'select_content'
    | 'set_checkout_option'
    | 'share'
    | 'sign_up'
    | 'timing_complete'
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

  interface Item {
    brand?: string | undefined;
    category?: string | undefined;
    creative_name?: string | undefined;
    creative_slot?: string | undefined;
    id?: string | undefined;
    location_id?: string | undefined;
    name?: string | undefined;
    price?: Currency | undefined;
    quantity?: number | undefined;
  }

  interface Promotion {
    creative_name?: string | undefined;
    creative_slot?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
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
