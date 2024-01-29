/// <reference types="node" />
import { IncomingMessage } from "http";

export = forwarded;

declare function forwarded(req: IncomingMessage): string[];
