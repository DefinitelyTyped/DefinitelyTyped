// Type definitions for Segment's analytics.js
// Project: https://segment.com/docs/libraries/analytics.js/
// Definitions by: Andrew Fong <https://github.com/fongandrew>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module SegmentAnalytics {

  // Generic options object with integrations
  interface SegmentOpts<Integrations> {
    integrations?: Integrations;
    anonymousId?: string;
  };

  // The actual analytics.js object
  interface AnalyticsJS<Integrations> {

    /* Configure Segment with write key */
    load(writeKey: string);

    /* The identify method is how you tie one of your users and their actions
       to a recognizable userId and traits. */
    identify(userId: string, traits?: Object,
             options?: SegmentOpts<Integrations>,
             callback?: () => void): void;
    identify(userId: string, traits: Object, callback?: () => void): void;
    identify(userId: string, callback?: () => void): void;
    identify(traits?: Object,
             options?: SegmentOpts<Integrations>,
             callback?: () => void): void;
    identify(traits?: Object,
             callback?: () => void): void;
    identify(callback: () => void): void;

    /* The track method lets you record any actions your users perform. */
    track(event: string, properties?: Object,
          options?: SegmentOpts<Integrations>,
          callback?: () => void): void;
    track(event: string, properties?: Object,
          callback?: () => void): void;
    track(event: string, callback?: () => void): void;

    /* The page method lets you record page views on your website, along with
       optional extra information about the page being viewed. */
    page(category: string, name: string, properties?: Object,
         options?: SegmentOpts<Integrations>,
         callback?: () => void): void;
    page(name?: string, properties?: Object,
         options?: SegmentOpts<Integrations>,
         callback?: () => void): void;
    page(name?: string, properties?: Object, callback?: () => void): void;
    page(name?: string, callback?: () => void): void;
    page(properties?: Object,
         options?: SegmentOpts<Integrations>,
         callback?: () => void): void;
    page(callback?: () => void): void;

    /* The group method associates an individual user with a group. The group
       can a company, organization, account, project, team or any other name 
       you came up with for the same concept. */
    group(groupId: string, traits?: Object,
          options?: SegemntOpts<Integrations>,
          callback?: () => void): void;
    group(groupId: string, traits?: Object, callback?: () => void): void;
    group(groupId: string, callback?: () => void): void;

    /* The alias method combines two previously unassociated user identities.
       This comes in handy if the same user visits from two different devices
       and you want to combine their history.

       Some providers also don’t alias automatically for you when an anonymous
       user signs up (like Mixpanel), so you need to call alias manually right
       after sign up with their brand new userId. */
    alias(userId: string, previousId?: string,
          options?: SegmentOpts<Integrations>,
          callback?: () => void): void;
    alias(userId: string, previousId?: string, callback?: () => void): void;
    alias(userId: string, callback?: () => void): void;
    alias(userId: string, options?: SegmentOpts<Integrations>,
          callback?: () => void): void;

    /* trackLink is a helper that binds a track call to whenever a link is
       clicked. Usually the page would change before you could call track, but
       with trackLink a small timeout is inserted to give the track call enough
       time to fire. */
    trackLink(elements: Element|Element[], event: string, properties?: Object);

    /* trackForm is a helper that binds a track call to a form submission.
       Usually the page would change before you could call track, but with
       trackForm a small timeout is inserted to give the track call enough
       time to fire. */
    trackForm(elements: Element|Element[], event: string, properties?: Object);

    /* The ready method allows you to pass in a callback that will be called as
       soon as all of your enabled integrations have loaded. It’s like jQuery’s
       ready method, except for integrations. */
    ready(callback: () => void);

    // Cookie-based user object
    user(): {
      id(): string;
      logout(): void;
      reset(): void;
      anonymousId(newId?: string): string;
    };
  }
}

declare var analytics: SegmentAnalytics.AnalyticsJS<any>;
