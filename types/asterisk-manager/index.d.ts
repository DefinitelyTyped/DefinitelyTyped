import { EventEmitter } from "events";

interface ManagerOptions {
    port: number;
    host?: string;
    username?: string;
    password?: string;
    events?: boolean;
}

interface BaseAction {
    action: string;
    actionid?: string;
}

interface LoginAction extends BaseAction {
    action: "login";
    username: string;
    secret: string;
    events?: "on" | "off";
}

interface PingAction extends BaseAction {
    action: "ping";
}

type ManagerAction = LoginAction | PingAction | { action: string; [key: string]: any };

type ActionCallback<T = any> = (err?: Error | null, response?: T) => void;

interface ManagerEvents {
    connect(): void;
    close(): void;
    end(): void;
    error(err: Error): void;
    rawevent(event: any): void;
    response(response: any): void;
}

declare class Manager extends EventEmitter {
    constructor(port: number, host?: string, username?: string, password?: string, events?: boolean);

    options: ManagerOptions;

    connect(port: number, host: string, callback?: () => void): void;
    keepConnected(): void;
    login(username: string, password: string, events?: boolean, callback?: ActionCallback): void;
    action<T = any>(action: ManagerAction, callback?: ActionCallback<T>): string;
    disconnect(callback?: () => void): void;
    isConnected(): boolean;
    connected(): boolean;

    on<E extends keyof ManagerEvents>(event: E, listener: ManagerEvents[E]): this;
    emit<E extends keyof ManagerEvents>(event: E, ...args: Parameters<ManagerEvents[E]>): boolean;
}

declare function ManagerFactory(
    port: number,
    host?: string,
    username?: string,
    password?: string,
    events?: boolean,
): Manager;

export = ManagerFactory;
