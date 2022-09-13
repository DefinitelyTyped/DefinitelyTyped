// Type definitions for camunda-external-task-client-js 1.3
// Project: https://github.com/camunda/camunda-external-task-client-js#readme
// Definitions by: MacRusher <https://github.com/MacRusher>
//                 DoYoung Ha <https://github.com/hados99>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export class Client {
    constructor(config: ClientConfig);
    start(): void;
    stop(): void;
    subscribe(topic: string, options: SubscribeOptions, handler: Handler): TopicSubscription;
    subscribe(topic: string, handler: Handler): TopicSubscription;

    on(name: TopicEvent, callback: (topic: string, topicSubscription: TopicSubscription) => void): void;
    on(name: PollEvent, callback: () => void): void;
    on(name: SuccessWithTasksEvent, callback: (tasks: Task[]) => void): void;
    on(name: SuccessWithTaskEvent, callback: (task: Task) => void): void;
    on(name: ErrorWithTaskEvent, callback: (task: Task, error: any) => void): void;
    on(name: ErrorEvent, callback: (error: any) => void): void;
}

export interface ClientConfig {
    baseUrl: string;
    workerId?: string | undefined;
    maxTasks?: number | undefined;
    maxParallelExecutions?: number | undefined;
    interval?: number | undefined;
    lockDuration?: number | undefined;
    autoPoll?: boolean | undefined;
    asyncResponseTimeout?: number | undefined;
    interceptors?: Interceptor | Interceptor[] | BasicAuthInterceptor | BasicAuthInterceptor[] | undefined | null;
    use?: Middleware | Middleware[] | undefined;
}

export interface ValueMap {
    [key: string]: Value;
}

export interface TypedValueMap {
    [key: string]: TypedValue;
}

export class Variables {
    get(variableName: string): Value;
    getTyped(variableName: string): TypedValue;
    getAll(): ValueMap;
    getAllTyped(): TypedValueMap;
    set(variableName: string, value: Value): Variables;
    setTyped(variableName: string, typedValue: TypedValue): Variables;
    setAll(values: ValueMap): Variables;
    setAllTyped(typedValues: TypedValueMap): Variables;
}

export type Handler = (args: HandlerArgs) => void;

export interface HandlerArgs {
    task: Task;
    taskService: TaskService;
}

export interface Task {
    variables: Variables;

    // These are not guaranteed by package documentation, but are returned according to REST API docs
    activityId?: string | undefined;
    activityInstanceId?: string | undefined;
    businessKey?: string | undefined;
    errorDetails?: string | undefined;
    errorMessage?: string | undefined;
    executionId?: string | undefined;
    id?: string | undefined;
    lockExpirationTime?: string | undefined;
    priority?: number | undefined;
    processDefinitionId?: string | undefined;
    processDefinitionKey?: string | undefined;
    processInstanceId?: string | undefined;
    retries?: number | undefined;
    tenantId?: string | undefined;
    topicName?: string | undefined;
    workerId?: string | undefined;
}

export type Value = any;

export interface TypedValue {
    value: Value;
    type: string;
    valueInfo: object;
}

export interface TaskService {
    complete(task: Task, processVariables?: Variables, localVariables?: Variables): Promise<void>;
    handleFailure(task: Task, options?: HandleFailureOptions): Promise<void>;
    handleBpmnError(task: Task, errorCode: string, errorMessage?: string, variables?: Variables): Promise<void>;
    extendLock(task: Task, newDuration: number): Promise<void>;
    unlock(task: Task): Promise<void>;
}

export interface BasicAuthInterceptorConfig {
    username: string;
    password: string;
}

export class BasicAuthInterceptor {
    constructor(options: BasicAuthInterceptorConfig);
    getHeader({ username, password }: { username: string, password: string }): { Authorization: string };
    interceptor(config: any): any;
}

export interface HandleFailureOptions {
    errorMessage?: string | undefined;
    errorDetails?: string | undefined;
    retries?: number | undefined;
    retryTimeout?: number | undefined;
}

export interface SubscribeOptions {
    lockDuration?: number | undefined;
    variables?: any[] | undefined;
    businessKey?: string | undefined;
    processDefinitionId?: string | undefined;
    processDefinitionIdIn?: string | undefined;
    processDefinitionKey?: string | undefined;
    processDefinitionKeyIn?: string | undefined;
    processDefinitionVersionTag?: string | undefined;
    withoutTenantId?: boolean | undefined;
    tenantIdIn?: string[] | undefined;
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

export type TopicEvent = "subscribe" | "unsubscribe";
export type PollEvent = "poll:start" | "poll:stop";
export type SuccessWithTasksEvent = "poll:success";
export type SuccessWithTaskEvent = "complete:success" | "handleFailure:success" | "handleBpmnError:success" | "extendLock:success" | "unlock:success";
export type ErrorWithTaskEvent = "handleFailure:error" | "handleBpmnError:error" | "extendLock:error" | "unlock:error";
export type ErrorEvent = "poll:error" | "complete:error";

export const logger: Logger;
