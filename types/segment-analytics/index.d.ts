// Type definitions for Segment's analytics.js
// Project: https://segment.com/docs/libraries/analytics.js/
// Definitions by: Andrew Fong <https://github.com/fongandrew>
//                 Miroslav Petrik <https://github.com/MiroslavPetrik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare interface JQuery {}

declare namespace SegmentAnalytics {

  // Generic options object with integrations
  interface SegmentOpts {
    integrations?: any;
    anonymousId?: string;
    context?: object;
  }

  interface CookieOptions {
    maxage?: number;
    domain?: string;
    path?: string;
    secure?: boolean;
  }

  interface MetricsOptions {
    host?: string;
    sampleRate?: number;
    flushTimer?: number;
    maxQueueSize?: number;
  }

  interface StoreOptions {
    enabled?: boolean;
  }

  interface UserOptions {
    cookie?: {
      key: string;
      oldKey: string;
    };
    localStorage?: {
      key: string;
    };
    persist?: boolean;
  }

  interface GroupOptions {
    cookie?: {
      key: string;
    };
    localStorage?: {
      key: string;
    };
    persist?: boolean;
  }

  interface InitOptions {
    cookie?: CookieOptions;
    metrics?: MetricsOptions;
    localStorage?: StoreOptions;
    user?: UserOptions;
    group?: GroupOptions;
    integrations?: {
      All?: boolean;
      [integration: string]: boolean | undefined;
    };
  }

  interface IntegrationsSettings {
    [key: string]: any;
  }

  // The actual analytics.js object
  interface AnalyticsJS {
    /* Use a plugin */
    use(plugin: (analytics: AnalyticsJS) => void): this;

    /* Initialize with the given integration `settings` and `options`. */
    init(settings?: IntegrationsSettings, options?: InitOptions): this;

    /* Define a new integration */
    addIntegration(integration: (options: any) => void): this;

    /*  Set the user's `id`. */
    setAnonymousId(id: string): this;

    /* Configure Segment with write key */
    load(writeKey: string): void;

    /* Configure Segment with write key & integration management.

       The load method can also be modified to take a second argument,
       an object with an integrations dictionary, which used to load
       only the integrations that are marked as enabled with the boolean value true.
       works in version 4.1.0 or higher */
   load(writeKey: string, options?: SegmentOpts): void;

    /* The identify method is how you tie one of your users and their actions
       to a recognizable userId and traits. */
    identify(userId: string, traits?: Object, options?: SegmentOpts,
             callback?: () => void): void;
    identify(userId: string, traits: Object, callback?: () => void): void;
    identify(userId: string, callback?: () => void): void;
    identify(traits?: Object, options?: SegmentOpts,
             callback?: () => void): void;
    identify(traits?: Object, callback?: () => void): void;
    identify(callback: () => void): void;

    /* The track method lets you record any actions your users perform. */
    track(event: string, properties?: Object, options?: SegmentOpts,
          callback?: () => void): void;
    track(event: string, properties?: Object,
          callback?: () => void): void;
    track(event: string, callback?: () => void): void;

    /* The page method lets you record page views on your website, along with
       optional extra information about the page being viewed. */
    page(category?: string, name?: string, properties?: Object,
         options?: SegmentOpts, callback?: () => void): void;
    page(name?: string, properties?: Object,
         options?: SegmentOpts, callback?: () => void): void;
    page(name?: string, properties?: Object, callback?: () => void): void;
    page(name?: string, callback?: () => void): void;
    page(properties?: Object, options?: SegmentOpts,
         callback?: () => void): void;
    page(callback?: () => void): void;

    /* The group method associates an individual user with a group. The group
       can a company, organization, account, project, team or any other name
       you came up with for the same concept. */
    group(groupId: string, traits?: Object, options?: SegmentOpts,
          callback?: () => void): void;
    group(groupId: string, traits?: Object, callback?: () => void): void;
    group(groupId: string, callback?: () => void): void;

    /* The alias method combines two previously unassociated user identities.
       This comes in handy if the same user visits from two different devices
       and you want to combine their history.

       Some providers also don’t alias automatically for you when an anonymous
       user signs up (like Mixpanel), so you need to call alias manually right
       after sign up with their brand new userId. */
    alias(userId: string, previousId?: string, options?: SegmentOpts,
          callback?: () => void): void;
    alias(userId: string, previousId?: string, callback?: () => void): void;
    alias(userId: string, callback?: () => void): void;
    alias(userId: string, options?: SegmentOpts, callback?: () => void): void;

    /* trackLink is a helper that binds a track call to whenever a link is
       clicked. Usually the page would change before you could call track, but
       with trackLink a small timeout is inserted to give the track call enough
       time to fire. */
    trackLink(elements: JQuery|Element[]|Element,
              event: string|{ (elm: Element): string },
              properties?: Object|{ (elm: Element): Object }): void;

    /* trackForm is a helper that binds a track call to a form submission.
       Usually the page would change before you could call track, but with
       trackForm a small timeout is inserted to give the track call enough
       time to fire. */
    trackForm(elements: JQuery|Element[]|Element,
              event: string|{ (elm: Element): string },
              properties?: Object|{ (elm: Element): Object }): void;

    /* The ready method allows you to pass in a callback that will be called as
       soon as all of your enabled integrations have loaded. It’s like jQuery’s
       ready method, except for integrations. */
    ready(callback: () => void): void;

    /* If you need to clear the user and group id and traits we’ve added a
       reset function that is most commonly used when your identified users
       logout of your application. */
    reset(): void;

    /* Once Analytics.js loaded, you can retrieve information about the
       currently identified user or group like their id and traits. */
    user(): {
      id(): string;
      logout(): void;
      reset(): void;
      anonymousId(newId?: string): string;
      traits(newTraits?: Object): void;
    }

    group(): {
      id(): string;
      traits(newTraits?: Object): void;
    }

    /* Analytics.js has a debug mode that logs helpful messages to the
       console. */
    debug(state?: boolean): void;

    /* The global analytics object emits events whenever you call alias, group,
       identify, track or page. That way you can listen to those events and run
       your own custom code. */
    on(event: string,
       callback: {
        (event: string, properties: Object, options: SegmentOpts): void
      }): void;

    /* You can extend the length (in milliseconds) of the method callbacks and
       helpers */
    timeout(milliseconds: number): void;
  }
}

declare var analytics: SegmentAnalytics.AnalyticsJS;

declare module '@segment/analytics.js-core' {
  var analytics: SegmentAnalytics.AnalyticsJS;
  export default analytics;
}
