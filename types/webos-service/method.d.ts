/// <reference types="node" />

import { Message } from "./message";
import { EventEmitter } from "events";

export class Method extends EventEmitter {
    readonly description: Record<string, any>;

    readonly name: string;

    constructor(methodName: string, description: Record<string, any>);

    on(event: "request" | "cancel", listener: (message: Message) => void): this;

    on(event: string, listener: () => void): this;
}
