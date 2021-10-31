import { ZalgoPromise } from 'zalgo-promise';
import { CrossDomainWindowType } from 'cross-domain-utils';

export interface TransportOptions {
    url: string;
    method: string;
    headers: { [key: string]: string };
    json: object;
    enableSendBeacon?: boolean;
}
export type Transport = (arg0: TransportOptions) => ZalgoPromise<void>;

export function getHTTPTransport(httpWin?: CrossDomainWindowType): Transport;
