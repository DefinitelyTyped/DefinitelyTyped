// Type definitions for Segment's analytics.js for Node.js
// Project: https://segment.com/docs/libraries/node/
// Definitions by: Andrew Fong <https://github.com/fongandrew>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = AnalyticsNode.Analytics;

declare namespace AnalyticsNode {

  interface Integrations {
    [index: string]: boolean;
  }

  export class Analytics {
    constructor(writeKey: string, opts?: {
      flushAt?: number,
      flushAfter?: number
    });

    /* The identify method lets you tie a user to their actions and record
       traits about them. */
    identify(message: {
      userId: string | number;
      traits?: Object;
      timestamp?: Date;
      context?: Object;
      integrations?: Integrations;
    }): Analytics;

    /* The track method lets you record the actions your users perform. */
    track(message: {
      userId: string | number;
      event: string;
      properties?: Object;
      timestamp?: Date;
      context?: Object;
      integrations?: Integrations;
    }): Analytics;

    /* The page method lets you record page views on your website, along with
       optional extra information about the page being viewed. */
    page(message: {
      userId: string | number;
      category?: string;
      name?: string;
      properties?: Object;
      timestamp?: Date;
      context?: Object;
      integrations?: Integrations;
    }): Analytics;

    /* alias is how you associate one identity with another. */
    alias(message: {
      previousId: string | number;
      userId: string | number;
      integrations?: Integrations;
    }): Analytics;

    /* Group calls can be used to associate individual users with shared
       accounts or companies. */
    group(message: {
      userId: string | number;
      groupId: string | number;
      traits?: Object;
      context?: Object;
      timestamp?: Date;
      anonymous_id?: string | number;
      integrations?: Integrations;
    }): Analytics;

    /* Flush batched calls to make sure nothing is left in the queue */
    flush(fn?: (err: Error, batch: {
      batch: Array<{
        type: string;
      }>;
      messageId: string;
      sentAt: Date;
      timestamp: Date;
    }) => void): Analytics;
  }
}
