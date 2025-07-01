declare namespace Catchpoint {
    export function username(_username?: string): Promise<string | null>;
    export function password(_password?: string): Promise<string | null>;
    export function startStep(stepName: string, opt_disableAutoMatchRequests?: boolean[]): Promise<void>;
    export function storeGlobalVariable(value: string, name: string): Promise<void>;
    export function setTracepoint(insightToken: string, insightValue: string): Promise<void>;
    export function setIndicator(insightToken:string, insightValue: string): Promise<void>;
}

declare module '@playwright/test' {
    export interface Page {
        addInitScript (): never;
        close (): never;
        pdf (): never;
        routeFromHAR (): never;
        screenshot (): never;
        setDefaultNavigationTimeout (): never;
        setDefaultTimeout (): never;
        video (): never;
        workers (): never;
    }

    class Browser {
        new (): never;
    }
    class BrowserContext {
        new (): never;
    }
    class BrowserServer {
        new (): never;
    }
    class BrowserType {
        new (): never;
    }
}
