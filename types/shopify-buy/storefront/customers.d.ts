import { Checkout } from './checkout';
import { MailingAddress } from './common';
import { HasMetafields, DateTime, Node, URL } from './graphql';
import { Order } from './orders';

export interface Customer extends Node, HasMetafields {
    acceptsMarketing: boolean;
    createdAt: DateTime;
    defaultAddress?: MailingAddress;
    displayName: string;
    email?: string;
    firstName?: string;
    lastIncompleteCheckout?: Checkout;
    lastName?: string;
    numberOfOrders: number;
    phone?: string;
    tags: string[];
    updatedAt: DateTime;
    addresses: MailingAddress[];
    orders: Order[];
}

export interface CustomerAccessToken {
    accessToken: string;
    expiresAt: DateTime;
}
