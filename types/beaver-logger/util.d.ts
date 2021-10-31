import { SameDomainWindowType } from 'cross-domain-utils';
import { Payload } from './types';

export interface CanUseBeaconOptions {
    headers: { [key: string]: string };
    enableSendBeacon: boolean;
}

export interface SendBeaconOptions {
    win: SameDomainWindowType;
    url: string;
    data: JSON;
    useBlob: boolean;
}

export function canUseSendBeacon({ headers, enableSendBeacon }: CanUseBeaconOptions): boolean;
export function extendIfDefined(target: Payload, source: Payload): void;
export function isAmplitude(url: string): boolean;
export function sendBeacon({ win, url, data, useBlob }: SendBeaconOptions): boolean;
