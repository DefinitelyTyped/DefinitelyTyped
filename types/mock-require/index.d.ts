/// <reference types="node" />

type StubFunction = (...params: any[]) => any;
type Stub = object | StubFunction;

interface Mock {
    (path: string, mockExport: string | Stub): void;
    stop(path: string): void;
    stopAll(): void;
    reRequire(path: string): any;
}

declare var mock: Mock;

export = mock;
