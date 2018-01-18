// Type definitions for ngsijs 1.0
// Project: https://github.com/conwetlab/ngsijs
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Connection {
    constructor(url: any);

    v2: Connection.V2;

    v1: Connection.V1;
}

export class ConnectionError {
    constructor(message: any);

}

export class InvalidRequestError {
    constructor(code: any, message: any, details: any);

}

export class InvalidResponseError {
    constructor(message: any, correlator: any);

}

export class NotFoundError {
    constructor(options: any);

}

export class ProxyConnection {
    constructor(url: any, makeRequest: any);

    associateSubscriptionId(callback: any, subscription: any): any;

    close(): any;

    closeCallback(callback_id: any): any;

    closeSubscriptionCallback(subscription: any): any;

    connect(): any;

    purgeCallback(callback: any): void;

    requestCallback(callback: any): any;

}

export class ProxyConnectionError {
    constructor(cause: any);

}

export const endpoints: {
    CONTEXT_TYPES: string;
    DISCOVER_CONTEXT_AVAILABILITY: string;
    QUERY_CONTEXT: string;
    REGISTER_CONTEXT: string;
    SUBSCRIBE_CONTEXT: string;
    SUBSCRIBE_CONTEXT_AVAILABILITY: string;
    UNSUBSCRIBE_CONTEXT: string;
    UNSUBSCRIBE_CONTEXT_AVAILABILITY: string;
    UPDATE_CONTEXT: string;
    UPDATE_CONTEXT_AVAILABILITY_SUBSCRIPTION: string;
    UPDATE_CONTEXT_SUBSCRIPTION: string;
    v2: {
        BATCH_QUERY_OP: string;
        BATCH_UPDATE_OP: string;
        ENTITY_ATTRS_COLLECTION: string;
        ENTITY_ATTR_ENTRY: string;
        ENTITY_ATTR_VALUE_ENTRY: string;
        ENTITY_COLLECTION: string;
        ENTITY_ENTRY: string;
        SUBSCRIPTION_COLLECTION: string;
        SUBSCRIPTION_ENTRY: string;
        TYPE_COLLECTION: string;
        TYPE_ENTRY: string;
    };
};

export const proxy_endpoints: {
    CALLBACK_COLLECTION: string;
    EVENTSOURCE_COLLECTION: string;
};

export function parseNotifyContextRequest(data: any, options: any): any;

export namespace Connection {

    class V1 {
        constructor(connection: any);
        
        addAttributes(toAdd: any, callbacks: any): void;

        cancelAvailabilitySubscription(subId: any, callbacks: any): void;

        cancelRegistration(regId: any, callbacks: any): void;

        cancelSubscription(subId: any, options: any): void;

        createAvailabilitySubscription(entities: any, attributeNames: any, duration: any, restriction: any, options: any, ...args: any[]): void;

        createRegistration(entities: any, attributes: any, duration: any, providingApplication: any, callbacks: any): void;

        createSubscription(entities: any, attributeNames: any, duration: any, throttling: any, cond: any, options: any, ...args: any[]): void;

        deleteAttributes(toDelete: any, callbacks: any): void;

        discoverAvailability(entities: any, attributeNames: any, callbacks: any): void;

        getAvailableTypes(options: any): void;

        getTypeInfo(type: any, options: any): void;

        query(entities: any, attributesName: any, options: any): void;

        updateAttributes(update: any, callbacks: any): void;

        updateAvailabilitySubscription(subId: any, entities: any, attributeNames: any, duration: any, restriction: any, callbacks: any): void;

        updateRegistration(regId: any, entities: any, attributes: any, duration: any, providingApplication: any, callbacks: any): any;

        updateSubscription(subId: any, duration: any, throttling: any, cond: any, options: any): void;
    }

    class V2 {
        constructor(connection: any);

        appendEntityAttributes(changes: any, options: any): any;

        batchQuery(query: any, options: any): any;

        batchUpdate(changes: any, options: any): any;

        createEntity(entity: any, options: any): any;

        createSubscription(subscription: any, options: any): any;

        deleteEntity(options: any): any;

        deleteEntityAttribute(options: any): any;

        deleteSubscription(options: any): any;

        getEntity(options: any): any;

        getEntityAttribute(options: any): any;

        getEntityAttributeValue(options: any): any;

        getEntityAttributes(options: any): any;

        getSubscription(options: any): any;

        getType(options: any): any;

        listEntities(options: any): any;

        listSubscriptions(options: any): any;

        listTypes(options: any): any;

        replaceEntityAttribute(changes: any, options: any): any;

        replaceEntityAttributeValue(options: any): any;

        replaceEntityAttributes(entity: any, options: any): any;

        updateEntityAttributes(changes: any, options: any): any;

        updateSubscription(changes: any, options: any): any;

    }

    /*namespace V2 {
        namespace prototypev2 {
            function appendEntityAttributes(changes: any, options: any): any;

            function batchQuery(query: any, options: any): any;

            function batchUpdate(changes: any, options: any): any;

            function createEntity(entity: any, options: any): any;

            function createSubscription(subscription: any, options: any): any;

            function deleteEntity(options: any): any;

            function deleteEntityAttribute(options: any): any;

            function deleteSubscription(options: any): any;

            function getEntity(options: any): any;

            function getEntityAttribute(options: any): any;

            function getEntityAttributeValue(options: any): any;

            function getEntityAttributes(options: any): any;

            function getSubscription(options: any): any;

            function getType(options: any): any;

            function listEntities(options: any): any;

            function listSubscriptions(options: any): any;

            function listTypes(options: any): any;

            function replaceEntityAttribute(changes: any, options: any): any;

            function replaceEntityAttributeValue(options: any): any;

            function replaceEntityAttributes(entity: any, options: any): any;

            function updateEntityAttributes(changes: any, options: any): any;

            function updateSubscription(changes: any, options: any): any;

            namespace appendEntityAttributes {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.appendEntityAttributes
                const prototype: any;

            }

            namespace batchQuery {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.batchQuery
                const prototype: any;

            }

            namespace batchUpdate {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.batchUpdate
                const prototype: any;

            }

            namespace createEntity {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.createEntity
                const prototype: any;

            }

            namespace createSubscription {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.createSubscription
                const prototype: any;

            }

            namespace deleteEntity {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.deleteEntity
                const prototype: any;

            }

            namespace deleteEntityAttribute {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.deleteEntityAttribute
                const prototype: any;

            }

            namespace deleteSubscription {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.deleteSubscription
                const prototype: any;

            }

            namespace getEntity {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.getEntity
                const prototype: any;

            }

            namespace getEntityAttribute {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.getEntityAttribute
                const prototype: any;

            }

            namespace getEntityAttributeValue {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.getEntityAttributeValue
                const prototype: any;

            }

            namespace getEntityAttributes {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.getEntityAttributes
                const prototype: any;

            }

            namespace getSubscription {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.getSubscription
                const prototype: any;

            }

            namespace getType {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.getType
                const prototype: any;

            }

            namespace listEntities {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.listEntities
                const prototype: any;

            }

            namespace listSubscriptions {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.listSubscriptions
                const prototype: any;

            }

            namespace listTypes {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.listTypes
                const prototype: any;

            }

            namespace replaceEntityAttribute {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.replaceEntityAttribute
                const prototype: any;

            }

            namespace replaceEntityAttributeValue {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.replaceEntityAttributeValue
                const prototype: any;

            }

            namespace replaceEntityAttributes {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.replaceEntityAttributes
                const prototype: any;

            }

            namespace updateEntityAttributes {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.updateEntityAttributes
                const prototype: any;

            }

            namespace updateSubscription {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototypev2.updateSubscription
                const prototype: any;

            }

        }*/

    }

