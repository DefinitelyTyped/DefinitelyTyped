import { Handler } from '../store/RelayStoreTypes';

export type HandlerProvider = (name: string) => Handler;

export function RelayDefaultHandlerProvider(handle: string): Handler;
