import Commerce = require('@chec/commerce.js');
import { LineItem } from '../types/line-item';
import { Cart as CartType } from '../types/cart';
import { Price } from '../types/price';
import { Asset } from '../types/asset';

export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface AddUpdateResponse {
    success: boolean;
    event: string;
    line_item_id: string;
    product_id: string;
    product_name: string;
    quantity: number;
    line_total: Price;
    cart: CartType;
    image: Asset | null;
}

export interface RemoveResponse {
    success: boolean;
    event: string;
    line_item_id: string;
    cart: CartType;
}

export interface DeleteResponse {
    success: boolean;
    event: string;
    cart_id: string;
}

export interface EmptyResponse {
    success: boolean;
    event: string;
    cart: CartType;
}

export class Cart {
    constructor(commerce: Commerce);

    refresh(): Promise<CartType>;
    id(): string | null;
    request(endpoint?: string, method?: RequestMethod, data?: object, returnFullRequest?: boolean): Promise<any>;
    add(productId: string, quantity?: number, variantData?: object | string): Promise<AddUpdateResponse>;
    retrieve(cardId?: string): Promise<CartType>;
    checkQuantity(productId: string, quantity: number): Promise<boolean>;
    remove(lineId: string): Promise<RemoveResponse>;
    delete(): Promise<DeleteResponse>;
    update(lineId: string, data: object): Promise<AddUpdateResponse>;
    contents(): Promise<LineItem[]>;
    empty(): Promise<EmptyResponse>;
}
