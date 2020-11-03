import { Emitter } from './emitter';

export type ThreeDSecureEvent = 'token' | 'error';

export interface ThreeDSecureEmitter extends Emitter<ThreeDSecureEvent> {
  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-threedsecureattach|ThreeDSecure.attach}
   */
  attach: (el: HTMLElement) => void;
}

export type RiskOptions = {
  /**
   * `three_d_secure_action_token_id` returned by the Recurly API when 3-D Secure authentication is required for a
   * transaction.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-recurlythreedsecure|ThreeDSecure}
   */
  actionTokenId?: string;
};

export type ThreeDSecure = (riskOptions: RiskOptions) => ThreeDSecureEmitter;

export type Risk = () => {
  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-recurlythreedsecure|ThreeDSecure}
   */
  ThreeDSecure: ThreeDSecure
};
