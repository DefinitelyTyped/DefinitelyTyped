// Type definitions for non-npm package Intercom Web API 2.8
// Project: https://docs.intercom.io/
//            configure-intercom-for-your-product-or-site/
//            customize-the-intercom-messenger/the-intercom-javascript-api
// Definitions by: Andrew Fong <https://github.com/fongandrew>
//                 Samer Albahra <https://github.com/salbahra>
//                 Onat Yigit Mercan <https://github.com/onatm>
//                 Chia-Lun Wu <https://github.com/bingo4508>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Intercom_ {
  interface IntercomSettings {
    // Messenger attributes
    app_id?: string;
    alignment?: string;
    custom_launcher_selector?: string;
    hide_default_launcher?: boolean;
    horizontal_padding?: number;
    session_duration?: number;
    vertical_padding?: number;
    action_color?: string;
    background_color?: string;

    // Data attributes
    email?: string;
    phone?: string;
    created_at?: number;
    name?: string;
    user_id?: string;
    user_hash?: string;
    unsubscribed_from_emails?: boolean;
    language_override?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_medium?: string;
    utm_source?: string;
    utm_term?: string;
    company?: {
      id: string | number;
      name: string;
      created_at?: number;
      plan?: string;
      monthly_spend?: number;
      user_count?: number;
      size?: number;
      website?: string;
      industry?: string;
    };
  }

  type IntercomCommand = 'boot'
    | 'shutdown'
    | 'update'
    | 'hide'
    | 'show'
    | 'showMessages'
    | 'showNewMessage'
    | 'onHide'
    | 'onShow'
    | 'onUnreadCountChange'
    | 'onActivatorClick'
    | 'trackEvent'
    | 'getVisitorId';

  interface IntercomStatic {
    (command: 'boot', param: IntercomSettings): void;
    (command: 'shutdown' | 'hide' | 'show' | 'showMessages'): void;
    (command: 'update', param?: IntercomSettings): void;
    (command: 'showNewMessage', param?: string): void;
    (command: 'onHide' | 'onShow' | 'onActivatorClick', param?: () => void): void;
    (command: 'trackEvent', tag?: string, metadata?: any): void;
    (command: 'onUnreadCountChange', cb: (unreadCount: number) => void): void;
    (command: 'getVisitorId'): string;
    (command: IntercomCommand, param1?: any, param2?: any): void;
    booted: boolean;
  }
}

declare var Intercom: Intercom_.IntercomStatic;
declare var intercomSettings: Intercom_.IntercomSettings;
interface Window {
  intercomSettings: Intercom_.IntercomSettings;
}
