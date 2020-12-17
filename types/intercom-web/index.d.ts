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

  interface IntercomCommandSignature {
   'boot': (settings: IntercomSettings) => void;
   'shutdown': () => void;
   'update': (settings?: IntercomSettings) => void;
   'hide': () => void;
   'show': () => void;
   'showMessages': () => void;
   'showNewMessage': (prepopulateMessage?: string) => void;
   'onHide': (callback: () => void) => void;
   'onShow': (callback: () => void) => void;
   'onUnreadCountChange': (callback: (unreadCount: number) => void) => void;
   'onActivatorClick': (callback: () => void) => void;
   'trackEvent': (tag?: string, metadata?: any) => void;
   'getVisitorId': () => string;
   'startTour': (tourId: number) => void;
  }

  type IntercomCommand = keyof IntercomCommandSignature;

  interface IntercomStatic {
    <Command extends IntercomCommand>(command: Command, ...params: Parameters<IntercomCommandSignature[Command]>): ReturnType<IntercomCommandSignature[Command]>;
    booted: boolean;
  }
}

declare var Intercom: Intercom_.IntercomStatic;
declare var intercomSettings: Intercom_.IntercomSettings | undefined;
interface Window {
  intercomSettings?: Intercom_.IntercomSettings;
}
