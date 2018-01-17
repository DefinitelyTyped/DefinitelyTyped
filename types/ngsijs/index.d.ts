// Type definitions for ngsijs 1.0
// Project: https://github.com/conwetlab/ngsijs
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Connection {
    constructor(url: any, options: any);

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

    namespace V2 {
        namespace prototype {
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
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.appendEntityAttributes
                const prototype: any;

            }

            namespace batchQuery {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.batchQuery
                const prototype: any;

            }

            namespace batchUpdate {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.batchUpdate
                const prototype: any;

            }

            namespace createEntity {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.createEntity
                const prototype: any;

            }

            namespace createSubscription {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.createSubscription
                const prototype: any;

            }

            namespace deleteEntity {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.deleteEntity
                const prototype: any;

            }

            namespace deleteEntityAttribute {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.deleteEntityAttribute
                const prototype: any;

            }

            namespace deleteSubscription {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.deleteSubscription
                const prototype: any;

            }

            namespace getEntity {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.getEntity
                const prototype: any;

            }

            namespace getEntityAttribute {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.getEntityAttribute
                const prototype: any;

            }

            namespace getEntityAttributeValue {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.getEntityAttributeValue
                const prototype: any;

            }

            namespace getEntityAttributes {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.getEntityAttributes
                const prototype: any;

            }

            namespace getSubscription {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.getSubscription
                const prototype: any;

            }

            namespace getType {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.getType
                const prototype: any;

            }

            namespace listEntities {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.listEntities
                const prototype: any;

            }

            namespace listSubscriptions {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.listSubscriptions
                const prototype: any;

            }

            namespace listTypes {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.listTypes
                const prototype: any;

            }

            namespace replaceEntityAttribute {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.replaceEntityAttribute
                const prototype: any;

            }

            namespace replaceEntityAttributeValue {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.replaceEntityAttributeValue
                const prototype: any;

            }

            namespace replaceEntityAttributes {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.replaceEntityAttributes
                const prototype: any;

            }

            namespace updateEntityAttributes {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.updateEntityAttributes
                const prototype: any;

            }

            namespace updateSubscription {
                // Too-deep object hierarchy from ngsijs.Connection.V2.prototype.updateSubscription
                const prototype: any;

            }

        }

    }

    namespace prototype {
        function addAttributes(toAdd: any, callbacks: any): void;

        function cancelAvailabilitySubscription(subId: any, callbacks: any): void;

        function cancelRegistration(regId: any, callbacks: any): void;

        function cancelSubscription(subId: any, options: any): void;

        function createAvailabilitySubscription(entities: any, attributeNames: any, duration: any, restriction: any, options: any, ...args: any[]): void;

        function createRegistration(entities: any, attributes: any, duration: any, providingApplication: any, callbacks: any): void;

        function createSubscription(entities: any, attributeNames: any, duration: any, throttling: any, cond: any, options: any, ...args: any[]): void;

        function deleteAttributes(toDelete: any, callbacks: any): void;

        function discoverAvailability(entities: any, attributeNames: any, callbacks: any): void;

        function getAvailableTypes(options: any): void;

        function getTypeInfo(type: any, options: any): void;

        function query(entities: any, attributesName: any, options: any): void;

        function updateAttributes(update: any, callbacks: any): void;

        function updateAvailabilitySubscription(subId: any, entities: any, attributeNames: any, duration: any, restriction: any, callbacks: any): void;

        function updateRegistration(regId: any, entities: any, attributes: any, duration: any, providingApplication: any, callbacks: any): any;

        function updateSubscription(subId: any, duration: any, throttling: any, cond: any, options: any): void;

        namespace addAttributes {
            const prototype: {
            };

        }

        namespace cancelAvailabilitySubscription {
            const prototype: {
            };

        }

        namespace cancelRegistration {
            const prototype: {
            };

        }

        namespace cancelSubscription {
            const prototype: {
            };

        }

        namespace createAvailabilitySubscription {
            const prototype: {
            };

        }

        namespace createRegistration {
            const prototype: {
            };

        }

        namespace createSubscription {
            const prototype: {
            };

        }

        namespace deleteAttributes {
            const prototype: {
            };

        }

        namespace discoverAvailability {
            const prototype: {
            };

        }

        namespace getAvailableTypes {
            const prototype: {
            };

        }

        namespace getTypeInfo {
            const prototype: {
            };

        }

        namespace query {
            const prototype: {
            };

        }

        namespace updateAttributes {
            const prototype: {
            };

        }

        namespace updateAvailabilitySubscription {
            const prototype: {
            };

        }

        namespace updateRegistration {
            const prototype: {
            };

        }

        namespace updateSubscription {
            const prototype: {
            };

        }

    }

}

export namespace ConnectionError {
    namespace prototype {
        const message: string;

        const name: string;

        const stack: string;

        function toString(): any;

    }

}

export namespace InvalidRequestError {
    namespace prototype {
        const message: string;

        const name: string;

        const stack: string;

        function toString(): any;

    }

}

export namespace InvalidResponseError {
    namespace prototype {
        const message: string;

        const name: string;

        const stack: string;

        function toString(): any;

    }

}

export namespace NotFoundError {
    namespace prototype {
        const message: string;

        const name: string;

        const stack: string;

        function toString(): any;

    }

}

export namespace ProxyConnection {
    namespace prototype {
        function associateSubscriptionId(callback: any, subscription: any): any;

        function close(): any;

        function closeCallback(callback_id: any): any;

        function closeSubscriptionCallback(subscription: any): any;

        function connect(): any;

        function purgeCallback(callback: any): void;

        function requestCallback(callback: any): any;

        namespace associateSubscriptionId {
            const prototype: {
            };

        }

        namespace close {
            const prototype: {
            };

        }

        namespace closeCallback {
            const prototype: {
            };

        }

        namespace closeSubscriptionCallback {
            const prototype: {
            };

        }

        namespace connect {
            const prototype: {
            };

        }

        namespace purgeCallback {
            const prototype: {
            };

        }

        namespace requestCallback {
            const prototype: {
            };

        }

    }

}

export namespace ProxyConnectionError {
    namespace prototype {
        const message: string;

        const name: string;

        const stack: string;

        function toString(): any;

    }

}

export namespace parseNotifyContextRequest {
    const prototype: {
    };

}

