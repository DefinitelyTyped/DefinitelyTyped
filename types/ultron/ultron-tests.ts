/// <reference types="node" />

import EventEmitter = require("events");
import Ultron = require("ultron");

const ee = new EventEmitter();
const assignable: Ultron.EventEmitter = ee;

{
    const constructed: Ultron = new Ultron(ee);
    const called: Ultron = Ultron(ee);
    const notAnEmitter = Ultron({}); // $ExpectError
}

{
    const ultron = new Ultron(ee);
    const handler: Ultron.Listener = () => {};
    ultron.on("event-name", handler, { custom: "function context" });
    ultron.once("event-name", handler, { custom: "function context" });
    ultron.remove("event-name");
    ultron.remove("a", "b", "c");
    ultron.remove();
    ultron.destroy();
}

{
    const ultron = new Ultron(ee);
    const handler = () => {};

    const chained: boolean = ultron.on("event-name", handler).once("event-name", handler).remove().destroy();
}

{
    const ultron = new Ultron(ee);
    const handler = () => {};
    const sym = Symbol("test");

    ultron.on(sym, handler);
    ultron.once(sym, handler);
    ultron.remove(sym);
}
