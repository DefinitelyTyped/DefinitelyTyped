// Type definitions for non-npm package clearbladejs-client 1.1
// Project: https://github.com/ClearBlade/JavaScript-API
// Definitions by: Jim Bouquet <https://github.com/ClearBlade>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="paho-mqtt" />
declare namespace CbClient {
    interface Resp {
        error(msg: any): never; // todo: figure out if we can have the compiler throw an error if someone adds code after this
        success(msg: any): never;
    }

    enum MessagingQOS {
        MESSAGING_QOS_AT_MOST_ONCE = 0,
        MESSAGING_QOS_AT_LEAST_ONCE = 1,
        MESSAGING_QOS_EXACTLY_ONCE = 2
    }

    interface InitOptions {
        systemKey: string;
        systemSecret: string;
        masterSecret?: string;
        logging?: boolean;
        callback?: CbCallback;
        email?: string;
        password?: string;
        registerUser?: boolean;
        useUser?: APIUser;
        URI?: string;
        messagingURI?: string;
        messagingPort?: number;
        defaultQoS?: MessagingQOS;
        callTimeout?: number;
        messagingAuthPort?: number;
    }

    interface RequestOptions {
        method?: string;
        endpoint?: string;
        body?: string;
        qs?: string;
        URI?: string;
        useUser?: boolean;
        authToken?: string;
        timeout?: number;
        user?: APIUser;
    }

    interface APIUser {
        email: string;
        authToken: string;
    }

    type CbCallback = (error: boolean, response: Resp) => void;

    interface ClearBladeGlobal extends ClearBladeInt {
        MESSAGING_QOS_AT_MOST_ONCE: MessagingQOS.MESSAGING_QOS_AT_MOST_ONCE;
        MESSAGING_QOS_AT_LEAST_ONCE: MessagingQOS.MESSAGING_QOS_AT_LEAST_ONCE;
        MESSAGING_QOS_EXACTLY_ONCE: MessagingQOS.MESSAGING_QOS_EXACTLY_ONCE;

        request(options: RequestOptions, callback: CbCallback): void;
    }

    interface ClearBladeInt {
        systemKey: string;
        systemSecret: string;
        masterSecret: string;
        URI: string;
        messagingURI: string;
        messagingPort: number;
        logging: boolean;
        defaultQoS: MessagingQOS;

        init(options: InitOptions): void;
        setUser(email: string, password: string): void;
        registerUser(
            email: string,
            password: string,
            callback: CbCallback
        ): void;
        isCurrentUserAuthenticated(callback: CbCallback): void;
        logoutUser(callback: CbCallback): void;
        loginAnon(callback: CbCallback): void;
        loginUser(email: string, password: string, callback: CbCallback): void;
        loginUserMqtt(
            email: string,
            password: string,
            callback: CbCallback
        ): void;
        registerMasterCallback(callback: CbCallback): void;
        Collection(
            options:
                | string
                | CollectionOptionsWithName
                | CollectionOptionsWithID
        ): Collection;
        Query(
            options: string | QueryOptionsWithName | QueryOptionsWithID
        ): QueryObj;
        Item(data: object, collectionID: string | ItemOptions): Item;
        Code(): Code;
        User(): AppUser;
        Messaging(options: MessagingOptions, callback: CbCallback): Messaging;
        MessagingStats(): MessagingStats;
        sendPush(
            users: string[],
            payload: object,
            appId: string,
            callback: CbCallback
        ): void;
        getEdges(query: Query, callback: CbCallback): void;
        Edge(): Edge;
        Metrics(): Metrics;
        Device(): Device;
        Analytics(): Analytics;
        Portal(name: string): Portal;
        Triggers(): Triggers;

        getAllCollections(callback: CbCallback): void;
    }
    interface CollectionOptionsWithName {
        collectionName: string;
    }

    interface CollectionOptionsWithID {
        collectionID: string;
    }

    interface Collection {
        name: string;
        endpoint: string;
        isUsingCollectionName: boolean;
        user: APIUser;
        URI: string;
        systemKey: string;
        systemSecret: string;

        fetch(query: Query, callback: CbCallback): void;
        create(newItem: Item, callback: CbCallback): void;
        update(query: Query, changes: object, callback: CbCallback): void;
        remove(query: Query, callback: CbCallback): void;
        columns(callback: CbCallback): void;
        count(query: Query, callback: CbCallback): void;
    }

    enum QuerySortDirections {
        QUERY_SORT_ASCENDING = "ASC",
        QUERY_SORT_DESCENDING = "DESC"
    }

    enum QueryConditions {
        QUERY_EQUAL = "EQ",
        QUERY_NOTEQUAL = "NEQ",
        QUERY_GREATERTHAN = "GT",
        QUERY_GREATERTHAN_EQUAL = "GTE",
        QUERY_LESSTHAN = "LT",
        QUERY_LESSTHAN_EQUAL = "LTE",
        QUERY_MATCHES = "RE"
    }

    type QueryValue = string | number | boolean;

    interface QueryOptions {
        offset?: number;
        limit?: number;
    }

    interface QueryOptionsWithName
        extends CollectionOptionsWithName,
            QueryOptions {}
    interface QueryOptionsWithID
        extends CollectionOptionsWithID,
            QueryOptions {}

    interface Query {
        SELECTCOLUMNS?: string[];
        SORT?: QuerySortDirections;
        FILTERS?: QueryFilter[];
        PAGESIZE?: number;
        PAGENUM?: number;
    }

    interface QueryFilter {
        [QueryConditions: string]: QueryFilterValue;
    }

    interface QueryFilterValue {
        [name: string]: QueryValue;
    }

    interface QueryObj {
        endpoint: string;
        user: APIUser;
        URI: string;
        systemKey: string;
        systemSecret: string;
        query: Query;
        OR: Query[];
        offset: number;
        limit: number;

        addSortToQuery(
            query: QueryObj,
            direction: QuerySortDirections,
            column: string
        ): void;
        addFilterToQuery(
            query: QueryObj,
            condition: QueryConditions,
            key: string,
            value: QueryValue
        ): void;
        ascending(field: string): void;
        descending(field: string): void;
        equalTo(field: string, value: QueryValue): void;
        greaterThan(field: string, value: QueryValue): void;
        greaterThanEqualTo(field: string, value: QueryValue): void;
        lessThan(field: string, value: QueryValue): void;
        lessThanEqualTo(field: string, value: QueryValue): void;
        notEqualTo(field: string, value: QueryValue): void;
        matches(field: string, pattern: RegExp): void;
        or(query: QueryObj): void;
        setPage(pageSize: number, pageNum: number): void;
        fetch(callback: CbCallback): void;
        update(changes: object, callback: CbCallback): void;
        columns(columnsArray: string[]): void;
        remove(callback: CbCallback): void;
    }

    interface ItemOptions extends CollectionOptionsWithID {}

    interface Item {
        data: object;

        save(callback: CbCallback): void;
        refresh(callback: CbCallback): void;
        destroy(callback: CbCallback): void;
    }

    interface Code {
        user: APIUser;
        URI: string;
        systemKey: string;
        systemSecret: string;
        callTimeout: number;

        create(name: string, body: string, callback: CbCallback): void;
        update(name: string, body: string, callback: CbCallback): void;
        delete(name: string, callback: CbCallback): void;
        execute(name: string, params: object, callback: CbCallback): void;
        getCompletedServices(callback: CbCallback): void;
        getFailedServices(callback: CbCallback): void;
        getAllServices(callback: CbCallback): void;
    }

    interface AppUser {
        user: APIUser;
        URI: string;
        endpoint: string;
        systemKey: string;
        systemSecret: string;
        callTimeout: number;

        getUser(callback: CbCallback): void;
        setUser(data: object, callback: CbCallback): void;
        allUsers(query: Query, callback: CbCallback): void;
        setPassword(
            old_password: string,
            new_password: string,
            callback: CbCallback
        ): void;
        count(query: Query, callback: CbCallback): void;
    }

    interface Messaging {
        user: APIUser;
        URI: string;
        endpoint: string;
        systemKey: string;
        systemSecret: string;
        callTimeout: number;
        client: Paho.MQTT.Client;

        getMessageHistoryWithTimeFrame(
            topic: string,
            count: number,
            last: number,
            start: number,
            stop: number,
            callback: CbCallback
        ): void;
        getMessageHistory(
            topic: string,
            last: number,
            count: number,
            callback: CbCallback
        ): void;
        getAndDeleteMessageHistory(
            topic: string,
            count: number,
            last: number,
            start: number,
            stop: number,
            callback: CbCallback
        ): void;
        currentTopics(callback: CbCallback): void;
        publish(topic: string, payload: object): void;
        publishREST(topic: string, payload: object, callback: CbCallback): void;
        subscribe(
            topic: string,
            options: MessagingSubscribeOptions,
            messageCallback: MessageCallback
        ): void;
        unsubscribe(topic: string, options: MessagingSubscribeOptions): void;
        disconnect(): void;
    }

    interface CommonMessagingProperties {
        cleanSession?: boolean;
        useSSL?: boolean;
        hosts?: string;
        ports?: string;
        onSuccess?: Function;
        onFailure?: Function;
    }

    interface MessagingOptions extends CommonMessagingProperties {
        qos?: MessagingQOS;
    }

    interface MessagingConfiguration extends CommonMessagingProperties {
        userName: string;
        password: string;
    }

    type MessageCallback = (message: string) => void;

    interface MessagingSubscribeOptions {
        qos?: MessagingQOS;
        invocationContext?: object;
        onSuccess?: Function;
        onFailure?: Function;
        timeout?: number;
    }

    interface MessagingStats {
        user: APIUser;
        URI: string;
        endpoint: string;
        systemKey: string;

        getAveragePayloadSize(
            topic: string,
            start: number,
            stop: number,
            callback: CbCallback
        ): void;
        getOpenConnections(callback: CbCallback): void;
        getCurrentSubscribers(topic: string, callback: CbCallback): void;
    }

    interface Edge {
        user: APIUser;
        URI: string;
        systemKey: string;
        systemSecret: string;

        updateEdgeByName(
            name: string,
            object: object,
            callback: CbCallback
        ): void;
        deleteEdgeByName(name: string, callback: CbCallback): void;
        create(newEdge: object, name: string, callback: CbCallback): void;
        columns(callback: CbCallback): void;
        count(query: Query, callback: CbCallback): void;
    }

    interface Metrics {
        user: APIUser;
        URI: string;
        systemKey: string;

        setQuery(query: Query): void;
        getStatistics(callback: CbCallback): void;
        getStatisticsHistory(callback: CbCallback): void;
        getDBConnections(callback: CbCallback): void;
        getLogs(callback: CbCallback): void;
    }

    interface Device {
        user: APIUser;
        URI: string;
        systemKey: string;
        systemSecret: string;

        getDeviceByName(name: string, callback: CbCallback): void;
        updateDeviceByName(
            name: string,
            object: object,
            trigger: boolean,
            callback: CbCallback
        ): void;
        deleteDeviceByName(name: string, callback: CbCallback): void;
        fetch(query: Query, callback: CbCallback): void;
        update(
            query: Query,
            object: object,
            trigger: boolean,
            callback: CbCallback
        ): void;
        delete(query: Query, callback: CbCallback): void;
        create(newDevice: object, callback: CbCallback): void;
        columns(callback: CbCallback): void;
        count(query: Query, callback: CbCallback): void;
    }

    interface Analytics {
        user: APIUser;
        URI: string;
        systemKey: string;
        systemSecret: string;

        getStorage(filter: QueryFilter, callback: CbCallback): void;
        getCount(filter: QueryFilter, callback: CbCallback): void;
        getEventList(filter: QueryFilter, callback: CbCallback): void;
        getEventTotals(filter: QueryFilter, callback: CbCallback): void;
        getUserEvents(filter: QueryFilter, callback: CbCallback): void;
    }

    interface Portal {
        name: string;
        user: APIUser;
        URI: string;
        systemKey: string;
        systemSecret: string;

        fetch(callback: CbCallback): void;
        update(data: object, callback: CbCallback): void;
    }

    interface Triggers {
        user: APIUser;
        URI: string;
        systemKey: string;
        systemSecret: string;

        fetchDefinitions(callback: CbCallback): void;
        create(name: string, data: object, callback: CbCallback): void;
        update(name: string, data: object, callback: CbCallback): void;
        delete(name: string, callback: CbCallback): void;
    }

    let ClearBlade: ClearBladeGlobal;
}

declare var ClearBlade: CbClient.ClearBladeGlobal;
