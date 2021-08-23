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
    app_id?: string | undefined;
    alignment?: string | undefined;
    custom_launcher_selector?: string | undefined;
    hide_default_launcher?: boolean | undefined;
    horizontal_padding?: number | undefined;
    session_duration?: number | undefined;
    vertical_padding?: number | undefined;
    action_color?: string | undefined;
    background_color?: string | undefined;

    // Data attributes
    email?: string | undefined;
    phone?: string | undefined;
    created_at?: number | undefined;
    name?: string | undefined;
    user_id?: string | undefined;
    user_hash?: string | undefined;
    unsubscribed_from_emails?: boolean | undefined;
    language_override?: string | undefined;
    utm_campaign?: string | undefined;
    utm_content?: string | undefined;
    utm_medium?: string | undefined;
    utm_source?: string | undefined;
    utm_term?: string | undefined;
    company?: {
      id: string | number;
      name: string;
      created_at?: number | undefined;
      plan?: string | undefined;
      monthly_spend?: number | undefined;
      user_count?: number | undefined;
      size?: number | undefined;
      website?: string | undefined;
      industry?: string | undefined;
    } | undefined;
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
  intercomSettings?: Intercom_.IntercomSettings | undefined;
}
