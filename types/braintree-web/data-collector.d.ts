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
    client: Client;
    kount?: boolean | undefined;
    paypal?: boolean | undefined;
}): Promise<DataCollector>;
export function create(
    options: { client: Client; kount?: boolean | undefined; paypal?: boolean | undefined },
    callback: callback<DataCollector>,
): void;
