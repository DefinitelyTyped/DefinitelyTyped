import { Client } from "./client";
import { callback } from "./core";

export interface DataCollector {
    deviceData: string;

    rawDeviceData: object;

    getDeviceData(options?: { raw: boolean }): Promise<string | object>;
    getDeviceData(options: { raw: boolean }, callback: callback<void>): void;

    teardown(): Promise<void>;
    teardown(callback: callback): void;
}

export function create(options: {
    client?: Client;
    authorization?: string | undefined;
    useDeferredClient?: boolean | undefined;
    kount?: boolean | undefined;
    paypal?: boolean | undefined;
    riskCorrelationId?: string | undefined;
    cb1?: string | undefined;
}): Promise<DataCollector>;
export function create(
    options: {
        client?: Client;
        authorization?: string | undefined;
        useDeferredClient?: boolean | undefined;
        kount?: boolean | undefined;
        paypal?: boolean | undefined;
        riskCorrelationId?: string | undefined;
        cb1?: string | undefined;
    },
    callback: callback<DataCollector>,
): void;
