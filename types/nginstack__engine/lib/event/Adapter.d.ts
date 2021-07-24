export = Adapter;
declare function Adapter(emitter: Emitter, descriptor: AdapterDescriptor | Record<any, any>): void;
declare class Adapter {
    constructor(emitter: Emitter, descriptor: AdapterDescriptor | Record<any, any>);
    emitter_: Emitter;
    descriptor_: Emitter;
    private updateEventWithArguments_;
    nonDescribedParameters_: {
        event: import('./Event');
        parameters: any[];
    };
    isEmpty: boolean;
    duplicates: string;
    clear(): void;
    clearMethods: any;
    set(
        listener:
            | {
                  method: (arg0: any) => any;
                  object: any;
              }
            | ((arg0: any) => any)
    ): void;
    dispatch(...args: any[]): any;
    clone(): Adapter;
    assign(source: Event | Adapter, opt_preserveMethods?: boolean): void;
    methods: Array<(arg0: any) => any>;
}
declare namespace Adapter {
    export { adaptEvent, Event };
}
import Emitter = require('./Emitter.js');
import AdapterDescriptor = require('./AdapterDescriptor.js');
type Event = import('./Event');
declare function adaptEvent(
    obj: any,
    name: string,
    adapterDescriptor: AdapterDescriptor | Record<any, any>
): void;
