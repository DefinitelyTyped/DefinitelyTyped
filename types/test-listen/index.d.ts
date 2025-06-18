/// <reference types="node" />

import { Server } from "net";

declare function testListen(srv: Server, hostname?: string): Promise<string>;

export = testListen;
