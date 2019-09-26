import { Handler } from '../store/RelayStoreTypes';
import { RelayDefaultHandlerProvider as ConnectionHandler } from './connection/RelayConnectionHandler';

export type HandlerProvider = (handle: string) => any;

export function RelayDefaultHandlerProvider(handle: string): Handler;
