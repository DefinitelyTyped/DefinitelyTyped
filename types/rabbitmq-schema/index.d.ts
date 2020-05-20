// Type definitions for rabbitmq-schema 2.0
// Project: https://github.com/tjmehta/rabbitmq-schema
// Definitions by: Alex Duka <https://github.com/rulezzz1987>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface Binding {
    destination: Exchange | Queue;
    source: Exchange;
    args?: object;
    routingPattern?: string;
}

interface TopicBinding extends Binding {
    routingPattern: string;
}

interface DirectBinding extends Binding {
    routingPattern: string;
}

interface Topology {
    options?: object;
}

interface Exchange extends Topology {
    exchange: string;
    type: string;
    bindings: Binding[];
}

interface FanoutExchange extends Exchange {
    type: 'fanout';
}

interface TopicExchange extends Exchange {
    type: 'topic';
    bindings: TopicBinding[];
}

interface DirectExchange extends Exchange {
    type: 'direct';
    bindings: DirectBinding[];
}

interface Queue extends Topology {
    queue: string;
    messageSchema: object;
}

declare class RabbitMQSchema {
    constructor(schema: Topology | Topology[], parentPath?: string);

    getExchanges(): Exchange[];

    getBindings(): Binding[];

    getQueues(): Queue[];

    getDirectBindings(): DirectBinding[];

    validate(schema: Topology | Topology[], parentPath?: string): void;

    validateMessage<T>(exchangeName: string, routingPattern: string, message: T): T;

    getQueueByName(name: string): Queue | void;

    getExchangeByName(name: string): Exchange | void;
}

export = RabbitMQSchema;
