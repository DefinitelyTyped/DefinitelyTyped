import { Handler } from '../store/RelayStoreTypes';

export type HandlerProvider = (name: string) => Handler | null;

export function RelayDefaultHandlerProvider(handle: string): Handler;
