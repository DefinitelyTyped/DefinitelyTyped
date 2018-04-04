// Type definitions for Segment's analytics.js for Node.js
// Project: https://segment.com/docs/libraries/node/
// Definitions by: Andrew Fong <https://github.com/fongandrew>
//                 Thomas Thiebaud <https://github.com/thomasthiebaud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = AnalyticsNode.Analytics;

declare namespace AnalyticsNode {
  interface Message {
    type: string;
    context: {
      library: {
        name: string;
        version: string;
      },
      [key: string]: any
    };
    _metadata: {
      nodeVersion: string;
      [key: string]: any;
    },
    timestamp?: Date;
    messageId?: string;
    anonymousId: string | number;
    userId: string | number;
  }

  interface Data {
    batch: Message[],
    timestamp: Date;
    sentAt: Date;
  }

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
    }, callback?: (err: Error, data: Data) => void): Analytics;

    /* The track method lets you record the actions your users perform. */
    track(message: {
      userId: string | number;
      event: string;
      properties?: Object;
      timestamp?: Date;
      context?: Object;
      integrations?: Integrations;
    }, callback?: (err: Error, data: Data) => void): Analytics;

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
    }, callback?: (err: Error, data: Data) => void): Analytics;

    /* alias is how you associate one identity with another. */
    alias(message: {
      previousId: string | number;
      userId: string | number;
      integrations?: Integrations;
    }, callback?: (err: Error, data: Data) => void): Analytics;

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
    }, callback?: (err: Error, data: Data) => void): Analytics;

    /* Flush batched calls to make sure nothing is left in the queue */
    flush(callback?: (err: Error, data: Data) => void): Analytics;
  }
}
