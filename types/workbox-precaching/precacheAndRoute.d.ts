import { FetchListenerOptions } from "./types/FetchListenerOptions";
import { PrecacheEntry } from "./PrecacheEntry";

export function precacheAndRoute(entries: Array<PrecacheEntry | string>, options?: FetchListenerOptions): void;

export * from "./PrecacheEntry";
