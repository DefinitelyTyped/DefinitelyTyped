import { Emitter } from "event-emitter";

declare function hasListeners(emitter: Emitter, name?: string): boolean;
export = hasListeners;
