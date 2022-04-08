// Type definitions for test-listen 1.1
// Project: https://github.com/zeit/test-listen
// Definitions by: Stephen Mathieson <https://github.com/stephenmathieson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { Server } from "net";

declare function testListen(srv: Server, hostname?: string): Promise<string>;

export = testListen;
