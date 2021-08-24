import { callback } from './core';
import { Client } from './client';

export interface DataCollector {
    create(options: { client: Client; kount?: boolean | undefined; paypal?: boolean | undefined }): Promise<DataCollector>;
    create(options: { client: Client; kount?: boolean | undefined; paypal?: boolean | undefined }, callback: callback): void;

    VERSION: string;

    deviceData: string;

    teardown(callback?: callback): void;
}
