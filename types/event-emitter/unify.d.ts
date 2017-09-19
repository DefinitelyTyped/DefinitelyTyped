import { Emitter } from "event-emitter";

declare function unify(emitter1: Emitter, emitter2: Emitter): Emitter;
export = unify;
