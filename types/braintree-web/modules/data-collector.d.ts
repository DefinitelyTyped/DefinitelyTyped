import { callback } from './core';
import { Client } from './client';

export interface DataCollector {
    create(options: { client: Client; kount?: boolean | undefined; paypal?: boolean | undefined }): Promise<DataCollector>;
    create(options: { client: Client; kount?: boolean | undefined; paypal?: boolean | undefined }, callback: callback<DataCollector>): void;

    VERSION: string;

    deviceData: string;

    rawDeviceData: object;

    getDeviceData(options?: { raw: boolean }): Promise<string | object>;
    getDeviceData(options: { raw: boolean }, callback: callback<void>): void;

    teardown(): Promise<void>;
    teardown(callback: callback): void;
}
