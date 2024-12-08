import { Handler } from "../store/RelayStoreTypes";

export type HandlerProvider = (handle: string) => any;

export default function RelayDefaultHandlerProvider(handle: string): Handler;
