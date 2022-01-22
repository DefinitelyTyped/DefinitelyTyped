import { Socket } from 'net';
import { ConnectionOptions, TLSSocket } from 'tls';

export function canUpgrade(socket: Socket): boolean;
export function upgrade(socket: Socket, options?: ConnectionOptions): TLSSocket;
