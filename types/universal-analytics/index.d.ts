// Type definitions for universal-analytics 0.4
// Project: https://github.com/peaksandpies/universal-analytics
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Iker Pérez Brunelli <https://github.com/DarkerTV>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace ua {
    type Callback = (error: Error | null, count: number) => void;

    interface VisitorOptions {
        hostname?: string;
        path?: string;
        https?: boolean;
        enableBatching?: boolean;
        batchSize?: number;
        tid?: string;
        cid?: string;
        uid?: string;
        debug?: boolean;
        strictCidFormat?: boolean;
        requestOptions?: { [key: string]: any };
        headers?: { [key: string]: string };
    }

    interface MiddlewareOptions extends VisitorOptions {
        cookieName?: string;
    }

    interface PageviewParams {
        dp?: string;
        dh?: string;
        dt?: string;
        dl?: string;
        [key: string]: any;
    }

    interface ScreenviewParams {
        cd?: string;
        an?: string;
        av?: string;
        aid?: string;
        aiid?: string;
        [key: string]: any;
    }

    interface EventParams {
        ec?: string;
        ea?: string;
        el?: string;
        ev?: string | number;
        p?: string;
        dp?: string;
        [key: string]: any;
    }

    interface TransactionParams {
        ti?: string;
        tr?: string | number;
        ts?: string | number;
        tt?: string | number;
        ta?: string;
        p?: string;
        [key: string]: any;
    }

    interface ItemParams {
        ip?: string | number;
        iq?: string | number;
        ic?: string;
        in?: string;
        iv?: string;
        p?: string;
        ti?: string;
        [key: string]: any;
    }

    interface ExceptionParams {
        exd?: string;
        exf?: boolean;
        [key: string]: any;
    }

    interface TimingParams {
        utc?: string;
        utv?: string;
        utt?: string | number;
        utl?: string;
        [key: string]: any;
    }

    interface Session {
        cid?: string;
    }

    class Visitor {
        constructor(accountID: VisitorOptions | string);
        constructor(accountID: string, uuid: VisitorOptions | string, context?: { [key: string]: any }, persistentParams?: { [key: string]: any });

        debug(debug?: boolean): Visitor;

        reset(): Visitor;

        set(key: string | number, value: any): void;

        pageview(path: PageviewParams | string, callback?: Callback): Visitor;
        pageview(path: string, hostname: string, callback?: Callback): Visitor;
        pageview(path: string, hostname: string, title: string, callback?: Callback): Visitor;
        pageview(path: string, hostname: string, title: string, params: PageviewParams, callback?: Callback): Visitor;

        pv(path: PageviewParams | string, callback?: Callback): Visitor;
        pv(path: string, hostname: string, callback?: Callback): Visitor;
        pv(path: string, hostname: string, title: string, callback?: Callback): Visitor;
        pv(path: string, hostname: string, title: string, params: PageviewParams, callback?: Callback): Visitor;

        screenview(params: ScreenviewParams, callback?: Callback): Visitor;
        screenview(screenName: string, appName: string, callback?: Callback): Visitor;
        screenview(screenName: string, appName: string, appVersion: string, callback?: Callback): Visitor;
        screenview(screenName: string, appName: string, appVersion: string, appId: string, callback?: Callback): Visitor;
        screenview(screenName: string, appName: string, appVersion: string, appId: string, appInstallerId: string, callback?: Callback): Visitor;
        screenview(screenName: string, appName: string, appVersion: string, appId: string, appInstallerId: string, params: ScreenviewParams, callback?: Callback): Visitor;

        event(params: EventParams, callback?: Callback): Visitor;
        event(category: string, action: string, callback?: Callback): Visitor;
        event(category: string, action: string, label: string, callback?: Callback): Visitor;
        event(category: string, action: string, label: string, value: string | number, callback?: Callback): Visitor;
        event(category: string, action: string, label: string, value: string | number, params: EventParams, callback?: Callback): Visitor;

        e(params: EventParams, callback?: Callback): Visitor;
        e(category: string, action: string, callback?: Callback): Visitor;
        e(category: string, action: string, label: string, callback?: Callback): Visitor;
        e(category: string, action: string, label: string, value: string | number, callback?: Callback): Visitor;
        e(category: string, action: string, label: string, value: string | number, params: EventParams, callback?: Callback): Visitor;

        transaction(id: TransactionParams | string, callback?: Callback): Visitor;
        transaction(id: string, revenue: string | number, callback?: Callback): Visitor;
        transaction(id: string, revenue: string | number, shipping: string | number, callback?: Callback): Visitor;
        transaction(id: string, revenue: string | number, shipping: string | number, tax: string | number, callback?: Callback): Visitor;
        transaction(id: string, revenue: string | number, shipping: string | number, tax: string | number, affiliation: string, callback?: Callback): Visitor;
        transaction(id: string, revenue: string | number, shipping: string | number, tax: string | number, affiliation: string, params: TransactionParams, callback?: Callback): Visitor;

        t(id: TransactionParams | string, callback?: Callback): Visitor;
        t(id: string, revenue: string | number, callback?: Callback): Visitor;
        t(id: string, revenue: string | number, shipping: string | number, callback?: Callback): Visitor;
        t(id: string, revenue: string | number, shipping: string | number, tax: string | number, callback?: Callback): Visitor;
        t(id: string, revenue: string | number, shipping: string | number, tax: string | number, affiliation: string, callback?: Callback): Visitor;
        t(id: string, revenue: string | number, shipping: string | number, tax: string | number, affiliation: string, params: TransactionParams, callback?: Callback): Visitor;

        item(price: ItemParams | string | number, callback?: Callback): Visitor;
        item(price: string | number, quantity: string | number, callback?: Callback): Visitor;
        item(price: string | number, quantity: string | number, sku: string, callback?: Callback): Visitor;
        item(price: string | number, quantity: string | number, sku: string, name: string, callback?: Callback): Visitor;
        item(price: string | number, quantity: string | number, sku: string, name: string, variation: string, callback?: Callback): Visitor;
        item(price: string | number, quantity: string | number, sku: string, name: string, variation: string, params: ItemParams, callback?: Callback): Visitor;

        i(price: ItemParams | string | number, callback?: Callback): Visitor;
        i(price: string | number, quantity: string | number, callback?: Callback): Visitor;
        i(price: string | number, quantity: string | number, sku: string, callback?: Callback): Visitor;
        i(price: string | number, quantity: string | number, sku: string, name: string, callback?: Callback): Visitor;
        i(price: string | number, quantity: string | number, sku: string, name: string, variation: string, callback?: Callback): Visitor;
        i(price: string | number, quantity: string | number, sku: string, name: string, variation: string, params: ItemParams, callback?: Callback): Visitor;

        exception(description: ExceptionParams | string, callback?: Callback): Visitor;
        exception(description: string, fatal: boolean, callback?: Callback): Visitor;
        exception(description: string, fatal: boolean, params: ExceptionParams, callback?: Callback): Visitor;

        timing(category: TimingParams | string, callback?: Callback): Visitor;
        timing(category: string, variable: string, callback?: Callback): Visitor;
        timing(category: string, variable: string, time: string | number, callback?: Callback): Visitor;
        timing(category: string, variable: string, time: string | number, label: string, callback?: Callback): Visitor;
        timing(category: string, variable: string, time: string | number, label: string, params: TimingParams, callback?: Callback): Visitor;

        send(fn?: (error: any, response: any, body: any) => void): void;
    }

    function createFromSession(session?: Session): Visitor;

    function middleware(tid: string, options?: MiddlewareOptions): (req: any, res: any, next: (err: any) => void) => void;
}

declare function ua(accountID: ua.VisitorOptions | string): ua.Visitor;
declare function ua(accountID: string, uuid: ua.VisitorOptions | string): ua.Visitor;
declare function ua(accountID: string, uuid: string, options: ua.VisitorOptions): ua.Visitor;
export = ua;
