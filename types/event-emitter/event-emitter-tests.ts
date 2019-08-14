import { Emitter } from "event-emitter";
import ee = require("event-emitter");
import allOff = require("event-emitter/all-off");
import hasListeners = require("event-emitter/has-listeners");
import { EmitterPipe } from "event-emitter/pipe";
import pipe = require("event-emitter/pipe");
import unify = require("event-emitter/unify");

const obj = {};

const emitter1: Emitter = ee(obj);
const emitter2: Emitter = ee(obj);

function listener(param: string) {}

emitter1.on("test", listener);
emitter1.once("test", listener);
emitter1.off("test", listener);
emitter1.emit("test", "foo");

allOff(emitter1);
hasListeners(emitter1);
hasListeners(emitter1, "test");

const eePipe1: EmitterPipe = pipe(emitter1, emitter2);
const eePipe2: EmitterPipe = pipe(emitter1, emitter2, "foo");

eePipe1.close();

const unifiedEmitter: Emitter = unify(emitter1, emitter2);

unifiedEmitter.on("test", listener);
unifiedEmitter.once("test", listener);
unifiedEmitter.off("test", listener);
unifiedEmitter.emit("test", "foo");
