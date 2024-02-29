interface Binding {
    destination: Exchange | Queue;
    source: Exchange;
    args?: object | undefined;
    routingPattern?: string | undefined;
}

interface TopicBinding extends Binding {
    routingPattern: string;
}

interface DirectBinding extends Binding {
    routingPattern: string;
}

interface Topology {
    options?: object | undefined;
}

interface Exchange extends Topology {
    exchange: string;
    type: string;
    bindings: Binding[];
}

interface FanoutExchange extends Exchange {
    type: "fanout";
}

interface TopicExchange extends Exchange {
    type: "topic";
    bindings: TopicBinding[];
}

interface DirectExchange extends Exchange {
    type: "direct";
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

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getQueueByName(name: string): Queue | void;

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getExchangeByName(name: string): Exchange | void;
}

export = RabbitMQSchema;
