namespace eventsTests {
    namespace EventEmitter {
        namespace static {
            const a: number = adone.event.Emitter.listenerCount(new adone.event.Emitter(), "event");
            const b: number = adone.event.Emitter.defaultMaxListeners;
        }

        namespace addListener {
            const a: adone.event.Emitter = new adone.event.Emitter().addListener("event", () => { });
            const b: adone.event.Emitter = new adone.event.Emitter().addListener(Symbol("event"), () => { });
        }

        namespace on {
            const a: adone.event.Emitter = new adone.event.Emitter().on("event", () => { });
            const b: adone.event.Emitter = new adone.event.Emitter().on(Symbol("event"), () => { });
        }

        namespace once {
            const a: adone.event.Emitter = new adone.event.Emitter().once("event", () => { });
            const b: adone.event.Emitter = new adone.event.Emitter().once(Symbol("event"), () => { });
        }

        namespace prependListener {
            const a: adone.event.Emitter = new adone.event.Emitter().prependListener("event", () => { });
            const b: adone.event.Emitter = new adone.event.Emitter().prependListener(Symbol("event"), () => { });
        }

        namespace prependOnceListener {
            const a: adone.event.Emitter = new adone.event.Emitter().prependOnceListener("event", () => { });
            const b: adone.event.Emitter = new adone.event.Emitter().prependOnceListener(Symbol("event"), () => { });
        }

        namespace removeListener {
            const a: adone.event.Emitter = new adone.event.Emitter().removeListener("event", () => { });
            const b: adone.event.Emitter = new adone.event.Emitter().removeListener(Symbol("event"), () => { });
        }

        namespace removeAllListeners {
            const a: adone.event.Emitter = new adone.event.Emitter().removeAllListeners("event");
            const b: adone.event.Emitter = new adone.event.Emitter().removeAllListeners(Symbol("event"));
        }

        namespace setMaxListeners {
            const a: adone.event.Emitter = new adone.event.Emitter().setMaxListeners(10);
        }

        namespace getMaxListeners {
            const a: number = new adone.event.Emitter().getMaxListeners();
        }

        namespace listeners {
            const a: Array<(...args: any[]) => any> = new adone.event.Emitter().listeners("event");
            const b: Array<(...args: any[]) => any> = new adone.event.Emitter().listeners(Symbol("event"));
        }

        namespace emit {
            const a: boolean = new adone.event.Emitter().emit("event", 1, 2, 3);
            const b: boolean = new adone.event.Emitter().emit(Symbol("event"), 1, 2, 3);
        }

        namespace eventNames {
            const a: Array<string | symbol> = new adone.event.Emitter().eventNames();
            const b: Array<string | symbol> = new adone.event.Emitter().eventNames();
        }

        namespace listenerCount {
            const a: number = new adone.event.Emitter().listenerCount("event");
            const b: number = new adone.event.Emitter().listenerCount(Symbol("event"));
        }
    }

    namespace AsyncEmitter {
        const a: adone.event.Emitter = new adone.event.AsyncEmitter();
        new adone.event.AsyncEmitter(10);

        namespace setConcurrency {
            const a: adone.event.AsyncEmitter = new adone.event.AsyncEmitter().setConcurrency();
            const b: adone.event.AsyncEmitter = new adone.event.AsyncEmitter().setConcurrency(10);
        }

        namespace emitParallel {
            const a: Promise<any[]> = new adone.event.AsyncEmitter().emitParallel("even");
            const b: Promise<any[]> = new adone.event.AsyncEmitter().emitParallel("even", 1, 2, 3);
        }

        namespace emitSerial {
            const a: Promise<any[]> = new adone.event.AsyncEmitter().emitSerial("even");
            const b: Promise<any[]> = new adone.event.AsyncEmitter().emitSerial("even", 1, 2, 3);
        }

        namespace emitReduce {
            const a: Promise<any[]> = new adone.event.AsyncEmitter().emitReduce("even");
            const b: Promise<any[]> = new adone.event.AsyncEmitter().emitReduce("even", 1, 2, 3);
        }

        namespace emitReduceRight {
            const a: Promise<any[]> = new adone.event.AsyncEmitter().emitReduceRight("even");
            const b: Promise<any[]> = new adone.event.AsyncEmitter().emitReduceRight("even", 1, 2, 3);
        }

        namespace subscribe {
            const a: () => void = new adone.event.AsyncEmitter().subscribe("event", () => { });
            const b: () => void = new adone.event.AsyncEmitter().subscribe("event", () => { }, true);
        }
    }
}
