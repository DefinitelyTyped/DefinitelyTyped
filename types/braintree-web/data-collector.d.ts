import { Client } from "./client";
import { callback } from "./core";

// We don't want to export DataCollectorBase
export {};

type MakeUndefinedIf<T, Condition> = Condition extends true ? T | undefined : T;

interface DataCollectorBase<IsDeferred> {
    deviceData: MakeUndefinedIf<string, IsDeferred>;

    rawDeviceData: MakeUndefinedIf<object, IsDeferred>;

    getDeviceData(options?: { raw: boolean }): Promise<string | object>;
    getDeviceData(options: { raw: boolean }, callback: callback<void>): void;

    teardown(): Promise<void>;
    teardown(callback: callback): void;
}

export type DataCollector = DataCollectorBase<false>;
export type DataCollectorDeferred = DataCollectorBase<true>;

export function create(options: {
    client?: Client;
    authorization?: string | undefined;
    useDeferredClient?: false | undefined;
    kount?: boolean | undefined;
    paypal?: boolean | undefined;
    riskCorrelationId?: string | undefined;
    cb1?: string | undefined;
}): Promise<DataCollector>;

export function create(options: {
    client?: Client;
    authorization?: string | undefined;
    useDeferredClient: true;
    kount?: boolean | undefined;
    paypal?: boolean | undefined;
    riskCorrelationId?: string | undefined;
    cb1?: string | undefined;
}): Promise<DataCollectorDeferred>;

export function create(
    options: {
        client?: Client;
        authorization?: string | undefined;
        useDeferredClient?: false | undefined;
        kount?: boolean | undefined;
        paypal?: boolean | undefined;
        riskCorrelationId?: string | undefined;
        cb1?: string | undefined;
    },
    callback: callback<DataCollector>,
): void;

export function create(
    options: {
        client?: Client;
        authorization?: string | undefined;
        useDeferredClient: true;
        kount?: boolean | undefined;
        paypal?: boolean | undefined;
        riskCorrelationId?: string | undefined;
        cb1?: string | undefined;
    },
    callback: callback<DataCollectorDeferred>,
): void;
