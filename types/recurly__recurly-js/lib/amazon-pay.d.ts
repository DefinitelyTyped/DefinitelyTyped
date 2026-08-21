import { Emitter } from './emitter';

export type AmazonPayOptions = {
  /**
   * 2 Digit Country Code
   */
  region?: string;

  /**
   * Specify which Payment Gateway in Recurly must handle the payment.
   */
  gatewayCode?: string

  /**
   * Sets button to Sandbox environment
   */
  sandbox?: boolean;
};

export type AmazonPayEvent = 'ready' | 'token' | 'error' | 'cancel' | 'done';

export interface AmazonPayInstance extends Emitter<AmazonPayEvent> {
  /**
   * Invokes the Amazon Payment Modal
   */
  start: () => void;

  /**
   * Attaches an Element to the DOM, as a child of the specified parent target.
   *
   */
  attach: () => void;

  /**
   * Renders Amazon Pay button to the page
   */
  renderButton: (element: string) => void;
}

export type AmazonPay = (amazonPayOptions?: AmazonPayOptions) => AmazonPayInstance;
