import * as events from 'events';

const emitter: events.EventEmitter = new events.EventEmitter();
const event: string | symbol = '';
const listener: (...args: any[]) => void = () => {};
const any: any = 1;

{
    let result: events.EventEmitter;

    result = emitter.addListener(event, listener);
    result = emitter.on(event, listener);
    result = emitter.once(event, listener);
    result = emitter.prependListener(event, listener);
    result = emitter.prependOnceListener(event, listener);
    result = emitter.removeListener(event, listener);
    result = emitter.off(event, listener);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners(event);
    result = emitter.setMaxListeners(42);
}

{
    let result: number;

    result = events.EventEmitter.defaultMaxListeners;
    result = events.EventEmitter.listenerCount(emitter, event); // deprecated

    const promise: Promise<any> = events.once(new events.EventEmitter(), 'error');

    result = emitter.getMaxListeners();
    result = emitter.listenerCount(event);
}

{
    let result: Function[];

    result = emitter.listeners(event);
}

{
    let result: boolean;

    result = emitter.emit(event);
    result = emitter.emit(event, any);
    result = emitter.emit(event, any, any);
    result = emitter.emit(event, any, any, any);
}

{
    let result: Array<string | symbol>;

    result = emitter.eventNames();
}

{
    class Networker extends events.EventEmitter {
        constructor() {
            super();

            this.emit("mingling");
        }
    }
}

{
    new events();
}
