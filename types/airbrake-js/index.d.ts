// Type definitions for airbrake-js 1.0
// Project: https://github.com/airbrake/airbrake-js/tree/c4516f3848099b9d1b8102a5584e6b38c5b0d4c2
// Definitions by: Peter Squicciarini <https://github.com/stripedpajamas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type OnResolved = (value: any) => void;
type OnRejected = (reason: Error) => void;
type OnFinally = () => void;
declare class Promise {
    private onResolved;
    private onRejected;
    private onFinally;
    private resolvedWith;
    private rejectedWith;
    constructor(executor?: any);
    static all(promises: Promise[]): Promise;
    then(onResolved: OnResolved, onRejected?: OnRejected): Promise;
    catch(onRejected: OnRejected): Promise;
    finally(onFinally: OnFinally): Promise;
    resolve(value: any): Promise;
    reject(reason: Error): Promise;
    private callOnFinally();
}

interface FuncWrapper {
    (): any;
    inner: () => any;
    _airbrake?: boolean;
}

interface AirbrakeFrame {
    function: string;
    file: string;
    line: number;
    column: number;
}
interface AirbrakeError {
    type: string;
    message: string;
    backtrace: AirbrakeFrame[];
}
interface Notice {
    id?: string;
    errors: AirbrakeError[];
    context?: any;
    params?: any;
    session?: any;
    environment?: any;
}

type Filter = (notice: Notice) => Notice | null;

interface ReporterOptions {
    projectId: number;
    projectKey: string;
    host: string;
    timeout: number;
    ignoreWindowError?: boolean;
}
type Reporter = (notice: Notice, opts: ReporterOptions, promise: Promise) => void;

declare class Client {
    private opts;
    private processor;
    private reporters;
    private filters;
    private offline;
    private errors;
    constructor(opts?: any);
    setProject(id: number, key: string): void;
    setHost(host: string): void;
    addReporter(name: string | Reporter): void;
    addFilter(filter: Filter): void;
    notify(err: any): Promise;
    wrap(fn: any): FuncWrapper;
    private wrapArguments(args);
    call(fn: any, ..._args: any[]): any;
    onerror(): void;
    private onOnline();
}

export = Client;
