import { callback } from './core';
import { Client } from './client';

export interface DataCollector {
    create(options: { client: Client; kount?: boolean; paypal?: boolean }): Promise<DataCollector>;
    create(options: { client: Client; kount?: boolean; paypal?: boolean }, callback: callback): void;

    VERSION: string;

    deviceData: string;

    teardown(callback?: callback): void;
}
