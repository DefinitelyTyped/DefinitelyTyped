/// <reference types="paho-mqtt" />
declare namespace CbServer {
    interface BasicReq {
        readonly isLogging: boolean;
        readonly params: {
            [id: string]: any;
        };
        readonly systemKey: string;
        readonly systemSecret: string;
        readonly userEmail: string;
        readonly userToken: string;
        readonly userid: string;
    }
    type ReqTypes = BasicReq;

    let req: ReqTypes;
    interface Resp {
        error(msg: any): never;
        success(msg: any): never;
    }
    let resp: Resp;

    enum MessagingQOS {
        MESSAGING_QOS_AT_MOST_ONCE = 0,
        MESSAGING_QOS_AT_LEAST_ONCE = 1,
        MESSAGING_QOS_EXACTLY_ONCE = 2,
    }

    interface InitOptions {
        systemKey: string;
        systemSecret: string;
        logging?: boolean | undefined;
        callback?: CbCallback | undefined;
        authToken?: string | undefined;
        userToken?: string | undefined;
        email?: string | undefined;
        password?: string | undefined;
        registerUser?: boolean | undefined;
        useUser?: APIUser | undefined;
        URI?: string | undefined;
        messagingURI?: string | undefined;
        messagingPort?: number | undefined;
        defaultQoS?: MessagingQOS | undefined;
        callTimeout?: number | undefined;
    }

    interface APIUser {
        email: string;
        authToken: string;
        user_id?: string | undefined;
    }

    interface KeyValuePair {
        [key: string]: any;
    }

    type CbCallback = (error: boolean, response: Resp) => void;

    interface ClearBladeGlobal extends ClearBladeInt {
        user: APIUser;
    }

    interface ClearBladeInt {
        Trigger: TriggerClass;
        Timer: TimerClass;

        about(): string;
        addToQuery(queryObj: QueryObj, key: string, value: string): void;
        addFilterToQuery(
            queryObj: QueryObj,
            condition: QueryConditions,
            key: string,
            value: QueryValue,
        ): void;
        addSortToQuery(
            queryObj: QueryObj,
            direction: QuerySortDirections,
            column: string,
        ): void;
        Code(): Code;
        Collection(
            options:
                | string
                | CollectionOptionsWithName
                | CollectionOptionsWithID
                | CollectionOptionsWithCollection,
        ): Collection;
        Deployment(): Deployment;
        Device(): Device;
        edgeId(): string;
        execute(error: object, response: object, callback: CbCallback): any;
        getAllCollections(callback: CbCallback): void;
        http(): object;
        init(options: InitOptions | { request: BasicReq }): void;
        isEdge(callback: CbCallback): boolean;
        isCurrentUserAuthenticated(callback: CbCallback): void;
        isObjectEmpty(obj: object): boolean;
        Item(data: object, options: string | ItemOptions): Item;
        logger(message: string): void;
        loginAnon(callback: CbCallback): void;
        loginUser(email: string, password: string, callback: CbCallback): void;
        logoutUser(callback: CbCallback): void;
        makeKVPair(key: string, value: string): KeyValuePair;
        Messaging(options: MessagingOptions, callback: CbCallback): Messaging;
        newCollection(name: string, callback: CbCallback): void;
        Query(
            options:
                | QueryOptionsWithCollection
                | QueryOptionsWithName
                | QueryOptionsWithID,
        ): QueryObj;
        parseOperationQuery(query: Query): string;
        parseQuery(query: Query | QueryObj): string;
        registerUser(
            email: string,
            password: string,
            callback: CbCallback,
        ): void;
        setUser(email: string, authToken: string, userId: string): void;
        User(): AppUser;

        createDevice(
            name: string,
            data: object,
            causeTrigger: boolean,
            callback: CbCallback,
        ): void;
        deleteDevice(
            name: string,
            causeTrigger: boolean,
            callback: CbCallback,
        ): void;
        updateDevice(
            name: string,
            data: object,
            causeTrigger: boolean,
            callback: CbCallback,
        ): void;
        getDeviceByName(name: string, callback: CbCallback): void;
        getAllDevicesForSystem(callback: CbCallback): void;
        validateEmailPassword(email: string, password: string): void;
    }

    interface CollectionOptionsWithCollection {
        collection: string;
    }

    interface CollectionOptionsWithName {
        collectionName: string;
    }

    interface CollectionOptionsWithID {
        collectionID: string;
    }

    interface Collection {
        user: APIUser;
        URI: string;
        systemKey: string;
        systemSecret: string;

        addColumn(options: object, callback: CbCallback): void;
        dropColumn(name: string, callback: CbCallback): void;
        deleteCollection(callback: CbCallback): void;
        fetch(query: Query, callback: CbCallback): void;
        create(newItem: Item, callback: CbCallback): void;
        update(query: Query, changes: object, callback: CbCallback): void;
        remove(query: Query, callback: CbCallback): void;
        columns(callback: CbCallback): void;
        count(query: Query, callback: CbCallback): void;
    }

    enum QuerySortDirections {
        QUERY_SORT_ASCENDING = "ASC",
        QUERY_SORT_DESCENDING = "DESC",
    }

    enum QueryConditions {
        QUERY_EQUAL = "EQ",
        QUERY_NOTEQUAL = "NEQ",
        QUERY_GREATERTHAN = "GT",
        QUERY_GREATERTHAN_EQUAL = "GTE",
        QUERY_LESSTHAN = "LT",
        QUERY_LESSTHAN_EQUAL = "LTE",
        QUERY_MATCHES = "RE",
    }

    type QueryValue = string | number | boolean;

    interface QueryOptions {
        offset?: number | undefined;
        limit?: number | undefined;
    }

    interface QueryOptionsWithCollection extends CollectionOptionsWithCollection, QueryOptions {}

    interface QueryOptionsWithName extends CollectionOptionsWithName, QueryOptions {}

    interface QueryOptionsWithID extends CollectionOptionsWithID, QueryOptions {}

    interface Query {
        SELECTCOLUMNS?: string[] | undefined;
        SORT?: QuerySortDirections | undefined;
        FILTERS?: QueryFilter[] | undefined;
        PAGESIZE?: number | undefined;
        PAGENUM?: number | undefined;
    }

    interface QueryFilter {
        [QueryConditions: string]: QueryFilterValue;
    }

    interface QueryFilterValue {
        [name: string]: QueryValue;
    }

    interface QueryObj {
        id: string;
        user: APIUser;
        URI: string;
        systemKey: string;
        systemSecret: string;
        query: Query;
        OR: Query[];
        offset: number;
        limit: number;

        ascending(field: string): void;
        descending(field: string): void;
        equalTo(field: string, value: QueryValue): void;
        greaterThan(field: string, value: QueryValue): void;
        greaterThanEqualTo(field: string, value: QueryValue): void;
        lessThan(field: string, value: QueryValue): void;
        lessThanEqualTo(field: string, value: QueryValue): void;
        notEqualTo(field: string, value: QueryValue): void;
        matches(field: string, pattern: QueryValue): void;
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

        save(): void;
        refresh(): void;
        destroy(): void;
    }

    interface Code {
        user: APIUser;
        systemKey: string;
        systemSecret: string;

        execute(
            name: string,
            params: object,
            loggingEnabled: boolean,
            callback: CbCallback,
        ): void;
        getAllServices(callback: CbCallback): void;
    }

    interface DeploymentOptions {}

    interface Deployment {
        user: APIUser;
        systemKey: string;
        systemSecret: string;

        create(
            name: string,
            description: string,
            options: DeploymentOptions,
            callback: CbCallback,
        ): void;
        update(
            name: string,
            options: DeploymentOptions,
            callback: CbCallback,
        ): void;
        delete(name: string, callback: CbCallback): void;
        read(name: string, callback: CbCallback): void;
        readAll(query: QueryObj, callback: CbCallback): void;
    }

    interface AppUser {
        user: APIUser;
        URI: string;
        systemKey: string;
        systemSecret: string;

        getUser(callback: CbCallback): void;
        setUser(data: object, callback: CbCallback): void;
        setUsers(query: QueryObj, data: object, callback: CbCallback): void;
        allUsers(query: QueryObj, callback: CbCallback): void;
        count(query: QueryObj, callback: CbCallback): void;
    }

    interface Messaging {
        user: APIUser;
        systemKey: string;
        systemSecret: string;

        getMessageHistoryWithTimeFrame(
            topic: string,
            count: number,
            last: number,
            start: number,
            stop: number,
            callback: CbCallback,
        ): void;
        getMessageHistory(
            topic: string,
            start: number,
            count: number,
            callback: CbCallback,
        ): void;
        getAndDeleteMessageHistory(
            topic: string,
            count: number,
            last: number,
            start: number,
            stop: number,
            callback: CbCallback,
        ): void;
        getCurrentTopics(callback: CbCallback): void;
        publish(topic: string, payload: string | ArrayBuffer): void;
    }

    interface MessagingOptions {}

    interface Device {
        URI: string;
        systemKey: string;
        systemSecret: string;

        fetch(query: Query, callback: CbCallback): void;
        update(query: Query, changes: object, callback: CbCallback): void;
        delete(query: Query, callback: CbCallback): void;
        create(newDevice: object, callback: CbCallback): void;
    }

    enum TriggerModule {
        DEVICE = "Device",
        Data = "Data",
        MESSAGING = "Messaging",
        USER = "User",
    }

    interface TriggerCreateOptions {
        system_key: string;
        name: string;
        def_module: TriggerModule;
        def_name: string;
        key_value_pairs: KeyValuePair[];
        service_name: string;
    }

    interface TriggerClass {
        Create(
            name: string,
            options: TriggerCreateOptions,
            callback: CbCallback,
        ): void;
        Fetch(name: string, callback: CbCallback): void;
    }

    interface TimerCreateOptions {
        description?: string | undefined;
        start_time?: Date | undefined;
        repeats?: number | undefined;
        frequency?: number | undefined;
        service_name?: string | undefined;
        user_id?: string | undefined;
        user_token?: string | undefined;
    }

    interface TimerClass {
        Create(
            name: string,
            options: TimerCreateOptions,
            callback: CbCallback,
        ): void;
        Fetch(name: string, callback: CbCallback): void;
    }

    interface TriggerInstance {
        name: string;
        systemKey: string;

        Update(options: object, callback: CbCallback): void;
        Delete(callback: CbCallback): void;
    }

    interface TimerInstance {
        name: string;
        systemKey: string;

        Update(options: object, callback: CbCallback): void;
        Delete(callback: CbCallback): void;
    }

    let ClearBlade: ClearBladeGlobal;
}

declare var ClearBlade: CbServer.ClearBladeGlobal;
