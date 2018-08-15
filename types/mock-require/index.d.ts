// Type definitions for mock-require 2.0
// Project: https://github.com/boblauer/mock-require
// Definitions by: Giorgio Delgado <https://github.com/gDelgado14>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

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
