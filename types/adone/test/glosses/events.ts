namespace eventsTests {
    namespace EventEmitter {
        namespace static {
            const a: number = adone.event.EventEmitter.listenerCount(new adone.event.EventEmitter(), "event");
            const b: number = adone.event.EventEmitter.defaultMaxListeners;
        }

        namespace addListener {
            const a: adone.event.EventEmitter = new adone.event.EventEmitter().addListener("event", () => { });
            const b: adone.event.EventEmitter = new adone.event.EventEmitter().addListener(Symbol("event"), () => { });
        }

        namespace on {
            const a: adone.event.EventEmitter = new adone.event.EventEmitter().on("event", () => { });
            const b: adone.event.EventEmitter = new adone.event.EventEmitter().on(Symbol("event"), () => { });
        }

        namespace once {
            const a: adone.event.EventEmitter = new adone.event.EventEmitter().once("event", () => { });
            const b: adone.event.EventEmitter = new adone.event.EventEmitter().once(Symbol("event"), () => { });
        }

        namespace prependListener {
            const a: adone.event.EventEmitter = new adone.event.EventEmitter().prependListener("event", () => { });
            const b: adone.event.EventEmitter = new adone.event.EventEmitter().prependListener(Symbol("event"), () => { });
        }

        namespace prependOnceListener {
            const a: adone.event.EventEmitter = new adone.event.EventEmitter().prependOnceListener("event", () => { });
            const b: adone.event.EventEmitter = new adone.event.EventEmitter().prependOnceListener(Symbol("event"), () => { });
        }

        namespace removeListener {
            const a: adone.event.EventEmitter = new adone.event.EventEmitter().removeListener("event", () => { });
            const b: adone.event.EventEmitter = new adone.event.EventEmitter().removeListener(Symbol("event"), () => { });
        }

        namespace removeAllListeners {
            const a: adone.event.EventEmitter = new adone.event.EventEmitter().removeAllListeners("event");
            const b: adone.event.EventEmitter = new adone.event.EventEmitter().removeAllListeners(Symbol("event"));
        }

        namespace setMaxListeners {
            const a: adone.event.EventEmitter = new adone.event.EventEmitter().setMaxListeners(10);
        }

        namespace getMaxListeners {
            const a: number = new adone.event.EventEmitter().getMaxListeners();
        }

        namespace listeners {
            const a: Array<(...args: any[]) => any> = new adone.event.EventEmitter().listeners("event");
            const b: Array<(...args: any[]) => any> = new adone.event.EventEmitter().listeners(Symbol("event"));
        }

        namespace emit {
            const a: boolean = new adone.event.EventEmitter().emit("event", 1, 2, 3);
            const b: boolean = new adone.event.EventEmitter().emit(Symbol("event"), 1, 2, 3);
        }

        namespace eventNames {
            const a: Array<string | symbol> = new adone.event.EventEmitter().eventNames();
            const b: Array<string | symbol> = new adone.event.EventEmitter().eventNames();
        }

        namespace listenerCount {
            const a: number = new adone.event.EventEmitter().listenerCount("event");
            const b: number = new adone.event.EventEmitter().listenerCount(Symbol("event"));
        }
    }

    namespace AsyncEmitter {
        const a: adone.event.EventEmitter = new adone.event.AsyncEmitter();
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
