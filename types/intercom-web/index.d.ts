// Type definitions for Intercom Web API 2.8
// Project: https://docs.intercom.io/
//            configure-intercom-for-your-product-or-site/
//            customize-the-intercom-messenger/the-intercom-javascript-api
// Definitions by: Andrew Fong <https://github.com/fongandrew>
//                 Samer Albahra <https://github.com/salbahra>
//                 Onat Yigit Mercan <https://github.com/onatm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Intercom_ {
  interface IntercomSettings {
    alignment?: string;
    app_id?: string;
    email?: string;
    created_at?: number;
    hide_default_launcher?: boolean;
    name?: string;
    user_id?: string;
    user_hash?: string;
    widget?: {
      activator?: string;
    };
    company?: {
      id: string | number,
      name: string,
      created_at: number,
      plan?: string,
      monthly_spend?: number,
      [index: string]: any;
    };
    vertical_padding?: number;
    horizontal_padding?: number;
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
