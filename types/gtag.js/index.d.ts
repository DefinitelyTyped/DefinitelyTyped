// Type definitions for non-npm package Google gtag.js API
// Project: https://developers.google.com/gtagjs
// Definitions by:  Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var gtag: Gtag.Gtag;
declare namespace Gtag {
  interface Gtag {
    (command: 'config', targetId: string, config?: ControlParams | EventParams | CustomParams): void;
    (command: 'set', config: CustomParams): void;
    (command: 'js', config: Date): void;
    (command: 'event', eventName: EventNames | string, eventParams?: ControlParams |  EventParams | CustomParams): void;
  }

  interface CustomParams {
    [key: string]: any;
  }

  interface ControlParams {
    groups?: string | string[];
    send_to?: string | string[];
    event_callback?: () => void;
    event_timeout?: number;
  }

  type EventNames = 'add_payment_info'
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
    checkout_option?: string;
    checkout_step?: number;
    content_id?: string;
    content_type?: string;
    coupon?: string;
    currency?: string;
    description?: string;
    fatal?: boolean;
    items?: Item[];
    method?: string;
    number?: string;
    promotions?: Promotion[];
    screen_name?: string;
    search_term?: string;
    shipping?: Currency;
    tax?: Currency;
    transaction_id?: string;
    value?: number;
    event_label?: string;
    event_category?: string;
  }

  type Currency = string | number;

  interface Item {
    brand?: string;
    category?: string;
    creative_name?: string;
    creative_slot?: string;
    id?: string;
    location_id?: string;
    name?: string;
    price?: Currency;
    quantity?: number;
  }

  interface Promotion {
    creative_name?: string;
    creative_slot?: string;
    id?: string;
    name?: string;
  }
}
