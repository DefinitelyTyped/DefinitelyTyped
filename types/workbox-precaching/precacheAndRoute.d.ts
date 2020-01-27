import { FetchListenerOptions } from "./types/FetchListenerOptions";
import { PrecacheEntry } from "./types/PrecacheEntry";

export function precacheAndRoute(entries: Array<string | PrecacheEntry>, options?: FetchListenerOptions): void;

export * from "./types/PrecacheEntry";
