import { Handler } from "../store/RelayStoreTypes";

export type HandlerProvider = (handle: string) => Handler | undefined;

export default function RelayDefaultHandlerProvider(handle: string): Handler;
