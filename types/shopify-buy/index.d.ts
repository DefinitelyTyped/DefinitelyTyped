// Type definitions for shopify-buy 2.17
// Project: https://github.com/Shopify/js-buy-sdk#readme
// Definitions by: Martin Köhn <https://github.com/openminder>
//                 Stephen Traiforos <https://github.com/straiforos>
//                 Juan Manuel Incaurgarat <https://github.com/kilinkis>
//                 Chris Worman <https://github.com/chrisworman-pela>
//                 Maciej Baron <https://github.com/MaciekBaron>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import GraphQLJSClient from './graphql-client';
import Config from './config';
import { Node } from './storefront/graphql';
import CollectionResource from './collection-resource';
import CheckoutResource from './checkout-resource';
import ImageResource from './image-resource';
import ProductResource from './product-resource';
import ShopResource from './shop-resource';

import { Collection, Product, ProductVariant } from './storefront/products';
import { Checkout } from './storefront/checkout';
import { Shop } from './storefront/online_store';

declare namespace ShopifyBuy {
    export { Product, ProductVariant, Collection, Checkout, Shop, Node };
}

interface FetchOptions {
    body: string;
    method: string;
    mode: string;
    headers: Record<string, string>;
}

type FetchFunction = (url: string, options: FetchOptions) => Promise<unknown>;

declare class ShopifyBuy {
    collection: CollectionResource;
    checkout: CheckoutResource;
    image: ImageResource;
    product: ProductResource;
    shop: ShopResource;

    graphQLClient: GraphQLJSClient;

    /**
     * Primary entry point for building a new Client.
     */
    static buildClient(config: Config, fetchFunction?: FetchFunction): ShopifyBuy;

    constructor(config: Config, GraphQLClientClass?: GraphQLJSClient, fetchFunction?: FetchFunction);

    /**
     * Fetches the next page of models
     */
    fetchNextPage<T extends Node>(models: T[]): Promise<T[]>;
}

export = ShopifyBuy;
export as namespace ShopifyBuy;
