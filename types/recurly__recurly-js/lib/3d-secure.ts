import { Emitter } from './emitter';

export type ThreeDSecureEvent = 'token' | 'error';

export interface ThreeDSecureEmitter extends Emitter<ThreeDSecureEvent> {
  attach: (el: HTMLElement) => void;
}

export type RiskOptions = {
  actionTokenId?: string;
};

export type ThreeDSecure = (riskOptions: RiskOptions) => ThreeDSecureEmitter;

export type Risk = () => { ThreeDSecure: ThreeDSecure };
