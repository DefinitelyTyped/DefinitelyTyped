import { Emitter } from ".";

declare function hasListeners(emitter: Emitter, name?: string): boolean;
export = hasListeners;
