import GraphQLJSClient from './graphql-client';
import Config from './config';
import { Node } from './storefront/graphql';
import CollectionResource from './collection-resource';
import CheckoutResource from './checkout-resource';
import ImageResource from './image-resource';
import ProductResource from './product-resource';
import ShopResource from './shop-resource';

export {};

interface FetchOptions {
    body: string;
    method: string;
    mode: string;
    headers: Record<string, string>;
}

type FetchFunction = (url: string, options: FetchOptions) => Promise<unknown>;

export default class Client {
    collection: CollectionResource;
    checkout: CheckoutResource;
    image: ImageResource;
    product: ProductResource;
    shop: ShopResource;

    graphQLClient: GraphQLJSClient;

    /**
     * Primary entry point for building a new Client.
     */
    static buildClient(config: Config, fetchFunction?: FetchFunction): Client;

    constructor(config: Config, GraphQLClientClass?: GraphQLJSClient, fetchFunction?: FetchFunction);

    /**
     * Fetches the next page of models
     */
    fetchNextPage<T extends Node>(models: T[]): Promise<T[]>;
}
