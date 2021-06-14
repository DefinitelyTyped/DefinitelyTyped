import Commerce = require('@chec/commerce.js');
import { Customer as CustomerType } from '../types/customer';
import { Order as OrderType } from '../types/order';
import { PaginationMeta } from '../types/pagination';
import { RequestMethod } from './cart';

export interface CustomerUpdate {
    email?: string;
    phone?: string;
    firstname?: string;
    lastname?: string;
    external_id?: string;
    meta?: object;
}

export interface CustomerOrdersCollection {
    data: OrderType[];
    meta: PaginationMeta;
}

export class Customer {
    constructor(commerce: Commerce);

    login(email: string, base_url: string): Promise<{ success: boolean }>;
    getToken(token: string, save?: boolean): Promise<{ customer_id: string, jwt: string }>;
    update(data: CustomerUpdate, customerId?: string, token?: string): Promise<CustomerType>;
    getOrders(customerId?: string, token?: string, params?: object): Promise<CustomerOrdersCollection>;
    getOrder(orderId: string, customerId?: string, token?: string): Promise<OrderType>;
    about(): Promise<CustomerType>;
    id(): string|null;
    token(): string|null;
    isLoggedIn(): boolean;
    logout(): void;

    _request(endpoint: string, method?: RequestMethod, data?: object, extraHeaders?: object, token?: string): Promise<any>;
}
