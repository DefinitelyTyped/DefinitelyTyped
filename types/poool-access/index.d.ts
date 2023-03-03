// Type definitions for non-npm package poool-access 5.10
// Project: https://poool.dev/docs/access/javascript
// Definitions by: maximedasilva <https://github.com/maximedasilva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    const Access: Poool.Access;
    const Audit: Poool.Audit;
    interface Window {
        Access: Poool.Access;
        Audit: Poool.Audit;
    }
}

export namespace Poool {
    interface styles {
        layout: 'portrait' | 'landscape';
        brand_logo?: string;
        brand_cover?: string;
        button_color?: string;
        button_hover_color?: string;
        skin_color?: string;
        premium_color?: string;
        custom_css?: string;
    }

    interface AccessConfigOptions {
        debug?: boolean;
        mode?: 'hide' | 'excerpt' | 'custom';
        percent?: number;
        post_container?: string;
        widget_container?: string;
        app_name?: string;
        force_widget?: 'auto'
          | 'hidden'
          | 'disabled'
          | 'none'
          | 'video'
          | 'newsletter'
          | 'subscription'
          | 'gift'
          | 'question'
          | 'unlock'
          | 'link'
          | 'pass'
          | 'unlock'
          | 'invisible';
        subscription_url?: string;
        subscription_button_enabled?: boolean;
        newsletter_name?: string;
        newsletter_id?: string;
        login_url?: string;
        login_button_enabled?: boolean;
        signature_enabled?: boolean;
        user_is_premium?: boolean;
        video_client?: 'vast' | 'googima';
        popover_enabled?: boolean;
        alternative_enabled?: boolean;
        alternative_widget?: 'none' | 'video' | 'gift' | 'question' | 'subscription' | 'newsletter';
        vast?: string;
        mobile_vast?: string;
        context?: string;
        custom_segment?: string;
        cookies_enabled?: boolean;
        consent_rejection_widget?: 'invisible' | 'unlock' | 'gift' | 'subscription';
        data_policy_url?: string;
        locale?: 'fr' | 'en';
        popover_timeout?: number;
        disable_content_height_calculation?: boolean;
        wait_for_dom_load?: boolean;
        paywall_load_timeout?: number;
        track_original_action?: boolean;
        components_load_timeout?: number;
        ati_tracking_enabled?: boolean;
        ati_load_timeout?: number;
        facebook_login_enabled?: boolean;
        google_login_enabled?: boolean;
        ati_auto_tracking_enabled?: boolean;
        ati_tracking_method?: 'default' | 'events';
        piano_auto_tracking_enabled?: boolean;
        ga_auto_tracking_enabled?: boolean;
        gtm_auto_tracking_enabled?: boolean;
        gtag_auto_tracking_enabled?: boolean;
        auto_tracking_spec_v2?: boolean;
        ati_tag_options?: Object;
        custom_reader_id?: string;
        stripe_public_key?: string;
        popover_auto_hide?: boolean;
        custom_return_url?: string;
        cookies_domain?: string;
        default_widget?:'invisible' | 'unlock' | 'gift' | 'subscription';
        fallback_widget?: string;
        audit_load_timeout?: number;
        beacons?: boolean;
        cookies_path?: string;
    }

    type EventsList = 'identityAvailable' | 'lock' | 'ready' | 'paywallSeen' | 'release' | 'register' | 'subscribeClick' | 'loginClick' | 'discoveryLinkClick' | 'alternativeClick' | 'error' | 'outdatedBrowser' | 'dataPolicyClick' | 'formSubmit' | 'facebookLoginClick' | 'googleLoginClick' | 'answer' | 'consent' | 'customButtonClick';

    interface AccessConfig {
        (config: AccessConfigOptions, readonly?: boolean): AccessFactory;
        (optionName: string, optionValue: any,  readonly?: boolean): AccessFactory;
    }

    interface AccessTexts {
        (keyName: string, value: string, readonly?: boolean, locale?: String): AccessFactory;
        (texts: { [key: string]: string }, readonly?: boolean, locale?: String): AccessFactory;
    }

    interface AccessStyles {
        (keyName: string, value: string, readonly?: boolean): AccessFactory;
        (styles: styles, readonly?: boolean): AccessFactory;
    }

    interface AccessVariables {
        (keyName: string, value: string): AccessFactory;
        (variables: { [key: string]: string }): AccessFactory;
    }

    interface AuditConfigOptions {
        debug?: boolean;
        cookies_enabled?: boolean;
        cookies_domain?: string;
        context?: string;
        custom_segment?: string;
        custom_reader_id?: string;
        user_is_premium?: boolean;
        ati_auto_tracking_enabled?: boolean;
        ati_tracking_method?: 'default' | 'events';
        piano_auto_tracking_enabled?: boolean;
        ga_auto_tracking_enabled?: boolean;
        gtm_auto_tracking_enabled?: boolean;
        gtag_auto_tracking_enabled?: boolean;
        auto_tracking_spec_v2?: boolean;
        ati_tag_options?: Object;
        beacons?: boolean;
        cookies_path?: string;
    }

    interface AuditConfig {
        (config: AuditConfigOptions, readonly?: boolean): Audit;
        (optionName: String, value: any, readonly?: boolean): Audit;
    }

    interface AccessFactory {
        config: AccessConfig
        createPaywall: (config: {
            target?: String,
            content?: String | HTMLElement,
            pageType?: 'premium' | 'free',
            mode?: 'hide' | 'excerpt' | 'custom',
            percent?: number,
        }) => AccessFactory;
        texts: AccessTexts;
        on: (event: EventsList, callback: (...props: any) => any) => AccessFactory;
        once: (event: EventsList, callback: (...props: any) => any) => AccessFactory;
        off: (event: EventsList, callback: (...props: any) => any) => AccessFactory;
        destroy: () => null;
    }

    interface PooolFactory {
        config: (config: any) => void;
        createPaywall: (config: {
            target?: String,
            content?: String | HTMLElement,
            pageType?: 'premium' | 'free',
            mode?: 'hide' | 'excerpt' | 'custom',
            percent?: number,
        }) => void;
        on: (event: string, callback: (evt: any) => void) => void;
    }

    interface Audit {
        init: (key: string) => Audit;
        noConflict: () => Audit;
        sendEvent: (
            eventName: 'page-view',
            data?: {
                type?: 'premium' | 'free' | 'page',
                [key: string]: any
            },
            options?: {
                beacons?: boolean,
                [key: string]: any
            }
        ) => Audit,
        config: AuditConfig;
        on: (eventname: EventsList, callback: (...props: any) => any) => Audit;
        once: (event: EventsList, callback: (...props: any) => any) => Audit;
        off: (event: EventsList, callback: (...props: any) => any) => Audit;
    }

    interface Access {
        init: (key: string) => AccessFactory;
        noConflict: () => Access;
    }
}
