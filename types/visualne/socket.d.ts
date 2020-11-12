import { IO } from './io';
import { Control } from './control';

export type SocketType = 'input' | 'output';
export declare type SocketColorType = 'normal' | 'exec';
export type BindSocket = (el: HTMLElement, type: SocketType, io: IO) => void;
export type BindControl = (el: HTMLElement, control: Control) => void;

export declare class Socket {
    name: string;
    data: unknown;
    compatible: Socket[];
    socketType: SocketColorType;
    constructor(name: string, data?: {
        name?: string;
        data?: {};
        socketType?: SocketColorType;
    });
    combineWith(socket: Socket): void;
    compatibleWith(socket: Socket): boolean;
}
