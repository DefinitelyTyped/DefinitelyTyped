import { ZalgoPromise } from 'zalgo-promise';
import { LOG_LEVEL } from './constants';
import { Transport } from './http';
import { Payload } from './types';

export interface LoggerOptions {
    url?: string;
    prefix?: string;
    logLevel?: typeof LOG_LEVEL[keyof typeof LOG_LEVEL];
    transport?: Transport;
    flushInterval?: number;
    enableSendBeacon?: boolean;
    amplitudeApiKey?: string;
}

export type ClientPayload = Payload;
export type Log = (name: string, payload?: ClientPayload) => LoggerType;
export type Track = (payload: ClientPayload) => LoggerType;

export type Builder = (arg0: Payload) => ClientPayload;
export type AddBuilder = (arg0: Builder) => LoggerType;

export interface LoggerType {
    debug: Log;
    info: Log;
    warn: Log;
    error: Log;
    track: Track;
    flush: () => ZalgoPromise<void>;
    immediateFlush: () => ZalgoPromise<void>;
    addPayloadBuilder: AddBuilder;
    addMetaBuilder: AddBuilder;
    addTrackingBuilder: AddBuilder;
    addHeaderBuilder: AddBuilder;
    setTransport: (arg0: Transport) => LoggerType;
    configure: (arg0: LoggerOptions) => LoggerType;
}
export function Logger({
    url,
    prefix,
    logLevel,
    transport,
    amplitudeApiKey,
    flushInterval,
    enableSendBeacon,
}: LoggerOptions): LoggerType;
