import { Connection } from "./connection";
import { IO } from "./io";
import { Input } from "./input";
import { OutputData } from "./lib/core/data";
import { Socket } from "./socket";
export declare class Output extends IO {
    constructor(key: string, title: string, socket: Socket, multiConns?: boolean);
    hasConnection(): boolean;
    connectTo(input: Input): Connection;
    connectedTo(input: Input): boolean;
    toJSON(): OutputData;
}
