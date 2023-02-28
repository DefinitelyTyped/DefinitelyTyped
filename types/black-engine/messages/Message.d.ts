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
import { MessageType } from './MessageType';
import { ObjectPool } from './../utils/ObjectPool';
import { MessageDispatcher } from './MessageDispatcher';
