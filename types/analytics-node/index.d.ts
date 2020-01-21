// Type definitions for analytics-node 3.1
// Project: https://segment.com/docs/libraries/node/, https://github.com/segmentio/analytics-node
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
    };
    timestamp?: Date;
    messageId?: string;
    anonymousId?: string | number;
    userId?: string | number;
  }

  interface Data {
    batch: Message[];
    timestamp: Date;
    sentAt: Date;
  }

  interface Integrations {
    [integration_name: string]: IntegrationValue;
  }

  type IntegrationValue = boolean | { [integration_key: string]: any };

  class Analytics {
    constructor(writeKey: string, opts?: {
      flushAt?: number,
      flushInterval?: number,
      host?: string,
      enable?: boolean,
      timeout?: number | string,
    });

    /* The identify method lets you tie a user to their actions and record
       traits about them. */
    identify(message: {
      userId?: string | number;
      anonymousId?: string | number;
      traits?: any;
      timestamp?: Date;
      context?: any;
      integrations?: Integrations;
    }, callback?: (err: Error, data: Data) => void): Analytics;

    /* The track method lets you record the actions your users perform. */
    track(message: {
      userId?: string | number;
      anonymousId?: string | number;
      event: string;
      properties?: any;
      timestamp?: Date;
      context?: any;
      integrations?: Integrations;
    }, callback?: (err: Error, data: Data) => void): Analytics;

    /* The page method lets you record page views on your website, along with
       optional extra information about the page being viewed. */
    page(message: {
      userId?: string | number;
      anonymousId?: string | number;
      category?: string;
      name?: string;
      properties?: any;
      timestamp?: Date;
      context?: any;
      integrations?: Integrations;
    }, callback?: (err: Error, data: Data) => void): Analytics;

    /* alias is how you associate one identity with another. */
    alias(message: {
      previousId: string | number;
      userId?: string | number;
      anonymousId?: string | number;
      integrations?: Integrations;
    }, callback?: (err: Error, data: Data) => void): Analytics;

    /* Group calls can be used to associate individual users with shared
       accounts or companies. */
    group(message: {
      userId?: string | number;
      anonymousId?: string | number;
      groupId: string | number;
      traits?: any;
      context?: any;
      timestamp?: Date;
      integrations?: Integrations;
    }, callback?: (err: Error, data: Data) => void): Analytics;

    /* Flush batched calls to make sure nothing is left in the queue */
    flush(callback?: (err: Error, data: Data) => void): Analytics;
  }
}
