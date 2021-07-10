import { CardElementOptions, IndividualElementOptions } from './elements';

export type RecurlyOptions = {
  cors?: boolean | undefined;
  publicKey: string;
  currency?: string | undefined;
  required?: string[] | undefined;
  timeout?: number | undefined;
  fraud?: {
    kount?: {
      dataCollector?: boolean | undefined;
    } | undefined;
    braintree?: {
      deviceData?: string | undefined;
    } | undefined;
    litle?: {
      sessionId?: string | undefined;
    } | undefined;
  } | undefined;
  risk?: {
    threeDSecure?: {
      preflightDeviceDataCollector?: boolean | undefined;
    } | undefined
  } | undefined;

  /**
   * @deprecated Use {@link https://developers.recurly.com/reference/recurly-js/index.html#elements|Elements} instead.
   */
  fields?: {
    all?: IndividualElementOptions | undefined;
    number?: IndividualElementOptions & { selector?: string | undefined } | undefined;
    month?: IndividualElementOptions & { selector?: string | undefined } | undefined;
    year?: IndividualElementOptions & { selector?: string | undefined } | undefined;
    cvv?: IndividualElementOptions & { selector?: string | undefined } | undefined;
    card?: CardElementOptions & { selector?: string | undefined } | undefined
  } | undefined;
};

export type Configure = (recurlyConfig: RecurlyOptions | string) => void;
