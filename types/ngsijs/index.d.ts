export class Connection {
    constructor(url: any);
    v2: Connection.V2;
    v1: Connection.V1;
}

export namespace Connection {
    class V1 {
        constructor(connection: any);
        addAttributes(toAdd: any, callbacks: any): void;
        cancelAvailabilitySubscription(subId: any, callbacks: any): void;
        cancelRegistration(regId: any, callbacks: any): void;
        cancelSubscription(subId: any, options: any): void;
        createAvailabilitySubscription(
            entities: any,
            attributeNames: any,
            duration: any,
            restriction: any,
            options: any,
            ...args: any[]
        ): void;
        createRegistration(
            entities: any,
            attributes: any,
            duration: any,
            providingApplication: any,
            callbacks: any,
        ): void;
        createSubscription(
            entities: any,
            attributeNames: any,
            duration: any,
            throttling: any,
            cond: any,
            options: any,
            ...args: any[]
        ): void;
        deleteAttributes(toDelete: any, callbacks: any): void;
        discoverAvailability(entities: any, attributeNames: any, callbacks: any): void;
        getAvailableTypes(options: any): void;
        getTypeInfo(type: any, options: any): void;
        query(entities: any, attributesName: any, options: any): void;
        updateAttributes(update: any, callbacks: any): void;
        updateAvailabilitySubscription(
            subId: any,
            entities: any,
            attributeNames: any,
            duration: any,
            restriction: any,
            callbacks: any,
        ): void;
        updateRegistration(
            regId: any,
            entities: any,
            attributes: any,
            duration: any,
            providingApplication: any,
            callbacks: any,
        ): any;
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
}
