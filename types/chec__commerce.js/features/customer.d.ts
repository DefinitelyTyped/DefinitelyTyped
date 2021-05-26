import Commerce = require('@chec/commerce.js');
import { RequestMethod } from './cart';

export interface CustomerUpdate {
    email?: string;
    firstname?: string;
    lastname?: string;
    external_id?: string;
    meta?: object;
}

export class Customer {
    constructor(commerce: Commerce);

    login(email: string, base_url: string): Promise<{ success: boolean }>;
    getToken(token: string, save?: boolean): Promise<{ customer_id: string, jwt: string }>;
    update(data: CustomerUpdate, customerId?: string, token?: string): Promise<any>;
    getOrders(customerId?: string, token?: string, params?: object): Promise<any>;
    getOrder(orderId: string, customerId?: string, token?: string): Promise<any>;
    about(): Promise<any>;
    id(): string|null;
    token(): string|null;
    isLoggedIn(): boolean;
    logout(): void;

    _request(endpoint: string, method?: RequestMethod, data?: object, extraHeaders?: object, token?: string): Promise<any>;
}
