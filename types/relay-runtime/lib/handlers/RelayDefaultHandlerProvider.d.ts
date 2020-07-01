import { Handler } from '../store/RelayStoreTypes';

export type HandlerProvider = (handle: string) => any;

export function RelayDefaultHandlerProvider(handle: string): Handler;
