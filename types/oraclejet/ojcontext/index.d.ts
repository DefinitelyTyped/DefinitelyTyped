declare class BusyContext {
    addBusyState(options: {
        description: object | (() => string);
    }): (() => void);
    applicationBootstrapComplete(): undefined;
    clear(): undefined;
    dump(message?: string): undefined;
    getBusyStates(): Array<{
        id: string;
        description: string;
    }>;
    isReady(): boolean;
    toString(): string;
    whenReady(timeout?: number): Promise<(boolean | Error)>;
}
declare namespace Context {
    interface BusyContext {
        addBusyState(options: {
            description: object | (() => string);
        }): (() => void);
        applicationBootstrapComplete(): undefined;
        clear(): undefined;
        dump(message?: string): undefined;
        getBusyStates(): Array<{
            id: string;
            description: string;
        }>;
        isReady(): boolean;
        toString(): string;
        whenReady(timeout?: number): Promise<(boolean | Error)>;
    }
}
declare class Context {
    static getContext(node: Element): Context;
    static getPageContext(): Context;
    static setBusyContextDefaultTimeout(timeout: number): any;
    getBusyContext(): BusyContext;
}
export = Context;
