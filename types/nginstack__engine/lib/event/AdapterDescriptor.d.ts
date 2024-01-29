export = AdapterDescriptor;
declare function AdapterDescriptor(): void;
declare class AdapterDescriptor {
    type: string;
    parameters: any[];
    resultProperty: string | null;
    acceptsUndefinedResult: boolean;
    eventClass: Event;
    cancelable: boolean;
    beforeAdaptedListener: (arg0: Event) => any;
    afterAdaptedListener: (arg0: Event) => any;
    beforeInherited: (arg0: Event) => any;
    afterInherited: (arg0: Event) => any;
    private nonDescribedParameters_;
    listenerFilter: (arg0: Emitter, arg1: (() => any) | Record<any, any>) => boolean;
}
declare namespace AdapterDescriptor {
    export { Event, Emitter };
}
type Event = import('./Event');
type Emitter = import('./Emitter');
