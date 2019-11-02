// Type definitions for camunda-external-task-client-js 1.2
// Project: https://github.com/camunda/camunda-external-task-client-js#readme
// Definitions by: MacRusher <https://github.com/MacRusher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export class Client {
    constructor(config: ClientConfig);
    start(): void;
    stop(): void;
    subscribe(topic: string, options: SubscribeOptions, handler: Handler): TopicSubscription;
    subscribe(topic: string, handler: Handler): TopicSubscription;
}

export interface ClientConfig {
    baseUrl: string;
    workerId?: string;
    maxTasks?: number;
    maxParallelExecutions?: number;
    interval?: number;
    lockDuration?: number;
    autoPoll?: boolean;
    asyncResponseTimeout?: number;
    interceptors?: Interceptor | Interceptor[];
    use?: Middleware | Middleware[];
}

export class Variables {
    get(variableName: string): Value;
    getTyped(variableName: string): TypedValue;
    getAll(): Value[];
    getAllTyped(): TypedValue[];
    set(variableName: string, value: Value): Variables;
    setTyped(variableName: string, typedValue: TypedValue): Variables;
    setAll(values: { [key: string]: Value }): Variables;
    setAllTyped(typedValues: { [key: string]: TypedValue }): Variables;
}

export type Handler = (args: HandlerArgs) => void;

export interface HandlerArgs {
    task: Task;
    taskService: TaskService;
}

export interface Task {
    variables: Variables;

    // These are not guaranteed by package documentation, but are returned according to REST API docs
    activityId?: string;
    activityInstanceId?: string;
    businessKey?: string;
    errorDetails?: string;
    errorMessage?: string;
    executionId?: string;
    id?: string;
    lockExpirationTime?: string;
    priority?: number;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processInstanceId?: string;
    retries?: number;
    tenantId?: string;
    topicName?: string;
    workerId?: string;
}

export type Value = any;

export interface TypedValue {
    value: Value;
    type: string;
    valueInfo: object;
}

export interface TaskService {
    complete(task: Task, processVariables?: Variables, localVariables?: Variables): void;
    handleFailure(task: Task, options?: HandleFailureOptions): void;
    handleBpmnError(task: Task, errorCode: string, errorMessage?: string, variables?: Variables): void;
    extendLock(task: Task, newDuration: number): void;
    unlock(task: Task): void;
}

export interface HandleFailureOptions {
    errorMessage?: string;
    errorDetails?: string;
    retires?: number;
    retryTimeout?: number;
}

export interface SubscribeOptions {
    lockDuration?: number;
    variables?: any[];
    businessKey?: string;
    processDefinitionId?: string;
    processDefinitionIdIn?: string;
    processDefinitionKey?: string;
    processDefinitionKeyIn?: string;
    processDefinitionVersionTag?: string;
    withoutTenantId?: boolean;
    tenantIdIn?: string[];
}

export interface TopicSubscription {
    unsubscribe: () => void;
}

export type Interceptor = <T = any>(config: T) => T;

export type Middleware = (client: Client) => void;

export type Logger = Middleware & {
    success(text: string): void;
    error(text: string): void;
};

export const logger: Logger;
