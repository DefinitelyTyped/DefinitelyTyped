export function createClient(options: Options): Client;

export interface Client {
    query: (
        queryOptions: QueryOptions,
        successCallback?: (response: Response) => void,
        errorCallback?: (error: any) => void,
    ) => Promise<Response>;
    subscribe: (
        subscriptionOptions: SubscriptionOptions,
        eventCallback?: (response: Response) => void,
        errorCallback?: (error: any) => void,
    ) => Disposer;
}

export interface Options {
    /**
     * GraphQL endpoint
     */
    endpoint: string;

    /**
     * Request header, defaults to {}. These headers will be added along with
     * all the GraphQL queries, mutations and subscriptions made through the
     * client.
     */
    headers?: Record<string, string>;

    /**
     * Options for configuring subscriptions over websocket. Subscriptions are
     * not supported if this field is empty.
     */
    websocket?: {
        /**
         * WebSocket endpoint to run GraphQL subscriptions.
         */
        endpoint?: string;

        /**
         * Boolean value whether to retry closed websocket connection. Defaults to
         * false.
         */
        shouldRetry?: boolean;

        /**
         * Payload to send the connection init message with
         */
        parameters?: Record<string, any>;

        /**
         * Callback function called when the GraphQL connection is successful.
         * Please not that this is different from the websocket connection being
         * open.
         */
        onConnectionSuccess?: () => void;

        /**
         * Callback function called if the GraphQL connection over websocket is
         * unsuccessful
         */
        onConnectionError?: (error: any) => void;

        /**
         * Callback function called when the GraphQL server sends
         * GRAPHQL_CONNECTION_KEEP_ALIVE messages to keep the connection alive.
         */
        onConnectionKeepAlive?: () => void;
    };
}

export interface QueryOptions {
    /**
     * The GraphQL query or mutation to be executed over HTTP
     */
    query: string;

    /**
     * GraphQL query variables. Defaults to {}
     */
    variables?: Record<string, any>;

    /**
     * Header overrides. If you wish to make a GraphQL query while adding to or
     * overriding the headers provided during initalisations, you can pass the
     * headers here.
     */
    headers?: Record<string, string>;
}

export interface SubscriptionOptions {
    /**
     * The GraphQL subscription to be started over WebSocket
     */
    subscription: string;

    /**
     * GraphQL query variables. Defaults to {}
     */
    variables?: Record<string, any>;

    /**
     * You can optionally pass this function as an event callback
     */
    onGraphQLData?: (response: Response) => void;

    /**
     * You can optionally pass this function as an error callback
     */
    onGraphQLError?: (error: any) => void;

    /**
     * Callback function called when the GraphQL subscription is declared as
     * complete by the server and no more events will be received
     */
    onGraphQLComplete?: () => void;
}

export interface Response {
    data: any;
    loading: boolean;
    networkStatus: number;
    stale: boolean;
}

export interface Disposer {
    (): void;
}
