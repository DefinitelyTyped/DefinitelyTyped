// Type definitions for vary 1.1
// Project: https://github.com/jshttp/vary#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { ServerResponse } from 'http';
export = vary;

declare function vary(res: ServerResponse, field: string | string[]): void;

declare namespace vary {
    function append(header: string, field: string | string[]): string;
}
