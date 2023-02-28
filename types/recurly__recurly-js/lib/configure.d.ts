import { CardElementOptions, IndividualElementOptions } from './elements';

export type RecurlyOptions = {
  cors?: boolean;
  publicKey: string;
  currency?: string;
  required?: string[];
  timeout?: number;
  fraud?: {
    kount?: {
      dataCollector?: boolean;
      form?: HTMLElement,
      udf?: {
        [key: string]: string | number;
      }
    };
    braintree?: {
      deviceData?: string;
    };
    litle?: {
      sessionId?: string;
    };
  };
  risk?: {
    threeDSecure?: {
      preflightDeviceDataCollector?: boolean;
    }
  };

  /**
   * @deprecated Use {@link https://developers.recurly.com/reference/recurly-js/index.html#elements|Elements} instead.
   */
  fields?: {
    all?: IndividualElementOptions;
    number?: IndividualElementOptions & { selector?: string };
    month?: IndividualElementOptions & { selector?: string };
    year?: IndividualElementOptions & { selector?: string };
    cvv?: IndividualElementOptions & { selector?: string };
    card?: CardElementOptions & { selector?: string }
  };
};

export type Configure = (recurlyConfig: RecurlyOptions | string) => void;
