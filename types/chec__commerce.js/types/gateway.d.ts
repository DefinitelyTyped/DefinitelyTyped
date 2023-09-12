import { Price } from "./price";

export interface Gateway {
    id: string;
    code: string;
    sandbox: {
        supported: boolean;
        enabled: boolean;
    };
    config: any;
    transaction_volume: Price;
    meta: any;
    created: number;
    updated: number;
}
