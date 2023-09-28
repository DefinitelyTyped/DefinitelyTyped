export class Message {
    static get PROGRESS(): string;
    static get COMPLETE(): string;
    static get ERROR(): string;
    static get CHANGE(): string;
    static get READY(): string;
    static get UPDATE(): string;
    static get RESIZE(): string;
    static get pool(): ObjectPool;
    sender: MessageDispatcher;
    name: string;
    target: any;
    origin: any;
    canceled: boolean;
    type: MessageType;
    cancel(): void;
    toString(): string;
    __reset(): Message;
}
import { ObjectPool } from "./../utils/ObjectPool";
import { MessageDispatcher } from "./MessageDispatcher";
import { MessageType } from "./MessageType";
